import { optimal_combination, getFromStrapi, FetchEvent, getDataModel } from '../../getData'
import { EventProps } from '@/app/components/event';
import _shuffle from 'lodash.shuffle';

export async function getEventPerBuget(budget = 0) {

    const allEvents = await getFromStrapi<FetchEvent>('events', { fields: ['cost'] }, { cache: "no-store" })
    const costs = _shuffle(Array.from(new Set(allEvents.data.map(({ attributes: { cost } }) => cost))))
    const combination = optimal_combination(budget, costs)
    let data: Array<[number, EventProps[]]> | [] = []

    if (combination.length !== 0) {
        let res;
        if (process.env.STRAPI_STATUS === "production") {

            res = await getFromStrapi<FetchEvent>('events', {
                filters: {
                    cost: {
                        $in: combination,
                    },
                },
                populate: "*"
            }, { cache: "no-store" })

        } else {

            const filteredMock = allEvents.data.filter(event => combination.includes(event.attributes.cost))
            res = { data: filteredMock }
        }
        const dataMap = getDataModel(res)
            .reduce<Map<number, EventProps[]>>((mapped, currentEvent) => {
                return mapped.set(currentEvent.cost, [...(mapped.get(currentEvent.cost) || []), currentEvent])
            }, new Map())
        data = Array.from(dataMap.entries())
    }

    return data
}
