import { NextResponse } from 'next/server'


const getData = () => {
    return new Promise((resolve, reject) => {
        resolve([
            {
                id: 1,
                name: "music",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 2,
                name: "music",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 3,
                name: "music",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 4,
                name: "music",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 5,
                name: "music",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 6,
                name: "musician",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            }
        ])
    })
}
export async function GET() {
    console.log('request enters')
    const data = await getData()
    return NextResponse.json({ data })
}