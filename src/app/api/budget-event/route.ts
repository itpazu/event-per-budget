import { NextResponse, NextRequest } from 'next/server'
import { EventProps, getData, optimal_combination } from '../utils/getData'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const budget = parseInt(searchParams.get('budget') ?? "0")
    const allEvents = await getData()
    const costs = Array.from(new Set(allEvents.map(({ cost }) => cost)))
    const combination = optimal_combination(budget, costs)
    const data = allEvents.filter(event => combination.includes(event.cost))
        .reduce<Map<number, EventProps[]>>((mapped, currentEvent) => {
            return mapped.set(currentEvent.cost, [...(mapped.get(currentEvent.cost) || []), currentEvent])
        }, new Map())
    return NextResponse.json({ data: Array.from(data.entries()) })
}