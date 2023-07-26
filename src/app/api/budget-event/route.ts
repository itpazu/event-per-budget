import { NextResponse, NextRequest } from 'next/server'
import { optimal_combination, getFromStrapi, StrapiData, FetchEvent, getDataModel } from '../utils/getData'
import { EventProps } from '@/app/components/event';

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url)
    const budget = parseInt(searchParams.get('budget') ?? "0")
    const allEvents = await getFromStrapi<StrapiData<{ cost: number }>>('events', { fields: ['cost'] })
    const costs = Array.from(new Set(allEvents.data.map(({ attributes: { cost } }) => cost)))
    const combination = optimal_combination(budget, costs)

    const res = await getFromStrapi<FetchEvent>('events', {
        filters: {
            cost: {
                $in: combination,
            },
        },
        populate: "*"
    },)
    const data = getDataModel(res)
        .reduce<Map<number, EventProps[]>>((mapped, currentEvent) => {
            return mapped.set(currentEvent.cost, [...(mapped.get(currentEvent.cost) || []), currentEvent])
        }, new Map())
    return NextResponse.json({ data: Array.from(data.entries()) })
}