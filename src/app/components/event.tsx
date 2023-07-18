import React from "react"
import { Shadows_Into_Light, Source_Code_Pro } from 'next/font/google'

const ShadowsIntoLight = Shadows_Into_Light({ weight: "400", subsets: ['latin'] })
const SourceCodePro = Source_Code_Pro({ weight: "500", subsets: ['latin'] })
export type EventProps = {
    id: number
    name: string;
    cost: number;
    details: string;
    children?: React.ReactNode
}
export default function Event({ name, cost, details, children }: EventProps) {

    return (

        <div className={`flex flex-col shadow-lg drop-shadow-2xl rounded border-2 border-white-600 p-5 min-w-full min-h-[45vh] sm:min-h-[40vh] items-center justify-around ${SourceCodePro.className}`}>
            {children && children}
            <div className="uppercase text-lg w-full">

                <p className={`text-3xl ${ShadowsIntoLight.className} text-center text-ellipsis whitespace-nowrap overflow-hidden`}> {name}</p>
            </div>

            <div className="text-lg"> Price: {cost}NIS</div>

            <div className="normal-case line-clamp-3 hover:line-clamp-none"> <span className="underline">About</span>: {details}</div>
        </div>

    )
}
