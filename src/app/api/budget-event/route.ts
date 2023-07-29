import { NextResponse, NextRequest } from 'next/server'
import { optimal_combination, getFromStrapi, StrapiData, FetchEvent, getDataModel } from '../utils/getData'
import { EventProps } from '@/app/components/event';
import _shuffle from 'lodash.shuffle';

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url)
    const budget = parseInt(searchParams.get('budget') ?? "0")
    const allEvents = await getFromStrapi<StrapiData<{ cost: number }>>('events', { fields: ['cost'] })
    const costs = _shuffle(Array.from(new Set(allEvents.data.map(({ attributes: { cost } }) => cost))))
    const combination = optimal_combination(budget, costs)
    let data: Array<[number, EventProps[]]> | [] = []
    if (combination.length !== 0) {

        const res = await getFromStrapi<FetchEvent>('events', {
            filters: {
                cost: {
                    $in: combination,
                },
            },
            populate: "*"
        },)
        const dataMap = getDataModel(res)
            .reduce<Map<number, EventProps[]>>((mapped, currentEvent) => {
                return mapped.set(currentEvent.cost, [...(mapped.get(currentEvent.cost) || []), currentEvent])
            }, new Map())
        data = Array.from(dataMap.entries())
    }

    return NextResponse.json({ data })
}