import { NextResponse } from 'next/server'
import { getData } from './utils/getData'

export async function GET() {
    const data = await getData()
    return NextResponse.json({ data })
}