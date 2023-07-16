import React from "react"
import CheckBox from "./checkBox"
export type EventProps = {
    id: number
    name: string;
    cost: number;
    details: string;
}
export default function Event({ name, cost, details, id }: EventProps) {

    return (
        <div className="flex flex-col shadow-lg drop-shadow-2xl rounded border-2 border-white-600 p-5 min-w-full min-h-[45vh] sm:min-h-[40vh] items-center justify-around">
            <CheckBox eventId={id} />
            <div className="uppercase text-lg">

                <span className="text-3xl"> {name} </span>
            </div>

            <div className="text-lg"> Price: {cost}NIS</div>

            <div className="normal-case"> <span className="underline">About</span>: {details}</div>
        </div>
    )
}
