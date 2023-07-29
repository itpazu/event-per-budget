import { NextResponse } from 'next/server'
import { getFromStrapi, FetchEvent, getDataModel } from '../utils/getData'

export async function GET() {
    // const data = await getData()
    const res = await getFromStrapi<FetchEvent>("events", {
        populate: {
            category: true,
            video: true
        }
    }
    )
    const data = getDataModel(res)

    return NextResponse.json({ data })
}