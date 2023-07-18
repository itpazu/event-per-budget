import { NextResponse } from 'next/server'
import { getData } from './utils/getData'

export async function GET() {
    console.log('request enters')
    const data = await getData()
    return NextResponse.json({ data })
}