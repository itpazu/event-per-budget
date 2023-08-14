import { EventProps } from "@/app/components/event";
import qs from 'qs';

type DataObject<AT> = {
    id: number, attributes: AT &
    {
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
    }
}
export type StrapiData<AT> = {
    data: Array<DataObject<AT>>,
    meta?: { pagination: { page: number, pageSize: number, pageCount: number, total: number } }
}


export type VideoObject = {
    data: DataObject<
        {
            name: string,
            alternativeText: null | string;
            caption: null | string;
            width: null | number;
            height: null | number;
            formats: null | number;
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null | string;
            provider: string;
            provider_metadata: null | string;

        } | null
    >

}
export type VideoLink = {
    url: string;
    provider: string;
    providerUid: string;
}


export type FetchEvent = StrapiData<Omit<EventProps, "category" | "id"> &
{
    category: {
        data: DataObject<{ category: string }>
    },
    video: {
        data: DataObject<VideoObject>;
    }
    VideoLink: VideoLink | null;
}>

export async function getFromStrapi<AT>(path: string, urlParams: {} | null = null,
    chacheObj: { [key: string]: { [key: string]: number } } | { [key: string]: string } = { next: { revalidate: 100 } }): Promise<AT> {

    if (process.env.NODE_ENV === "production" || process.env.CURRENT_ENV === "production") {

        const BASE_URL = process.env.STRAPI_URL_PRODUCTION
        const searchParams = urlParams ? qs.stringify(urlParams, {
            encodeValuesOnly: true
        }) : '';

        const fetchOptions = {
            ...chacheObj,
            headers: {
                "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN_PRODUCTION}`,
            }
        }
        const res = await fetch(`${BASE_URL}/${path}?${searchParams}`, fetchOptions)

        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res.json() as Promise<AT>
    } else {
        return getData()
    }


}

export const optimal_combination = (budget: number, programs: number[]) => {
    const n = programs.length; //=
    const PPP = Array.from({ length: n + 1 }, () => Array(budget + 1).fill(0));

    for (let i = 1; i <= programs.length; i++) {
        i;

        for (let j = 1; j <= budget; j++) {
            if (programs[i - 1] > j) {
                PPP[i - 1][j];
                PPP[i].splice(j, 1, PPP[i - 1][j]);
                PPP; //=
            } else {
                let cummulativeCost =
                    PPP[i - 1][j - Math.floor(programs[i - 1])] +
                    programs[i - 1];
                if (cummulativeCost > budget) {
                    cummulativeCost = PPP[i][j - 1];
                }
                PPP[i].splice(j, 1, Math.max(PPP[i - 1][j], cummulativeCost));
            }
        }
    }
    let remainingBduget = budget;
    let programNumber = n;
    let optimalCombo = [];

    while (remainingBduget > 0 && programNumber > 0) {
        if (
            PPP[programNumber][Math.ceil(remainingBduget)] ===
            PPP[programNumber - 1][Math.ceil(remainingBduget)]
        ) {
            programNumber--;
        } else {
            optimalCombo.push(programs[programNumber - 1]);
            remainingBduget -= programs[programNumber - 1];
            programNumber--;
        }
    }
    return optimalCombo;
};

export const getDataModel = (res: FetchEvent) => res ? res.data.map(({ id, attributes }) => ({
    id, ...attributes, category: attributes.category.data?.attributes.category ?? ''
})) : []

//mock api
export const getData = <AT>(): Promise<AT> => {

    return new Promise((resolve, reject) => {
        import('../../mock.json').then(data =>
            resolve(data.default as AT)

        )
    })
}



// logic for organizing data in ranges
// const rangesMap = combination.reduce<Map<[number, number], []>>((map, current)=>{
//     const endRangeIndex = combination.indexOf(current) 
//     const startRangeIndex = !!endRangeIndex ? endRangeIndex - 1 : 0  
//     return map.set([combination[startRangeIndex], current], []) }, new Map())