'use client';
import React, { useState } from "react"

type Event = {
    name: string;
    cost: number;
    details: string;
}
export default function Event({ name, cost, details }: Event) {
    const [checked, setChecked] = useState(false)

    return (
        <div className="flex flex-col shadow-lg drop-shadow-2xl rounded border-2 border-white-600 p-5 min-w-full min-h-[45vh] sm:min-h-[40vh] items-center justify-around">
            <div className='self-start w-[25px] h-[25px] flex place-content-center' >

                <input type="radio" checked={checked} className="w-full h-full" onChange={() => setChecked(!checked)} />
            </div>
            <div className="uppercase text-lg">

                <span className="text-3xl"> {name} </span>
            </div>

            <div className="text-lg"> Price: {cost}NIS</div>

            <div className="normal-case"> <span className="underline">About</span>: {details}</div>
        </div>
    )
}
