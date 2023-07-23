import { EventProps } from "./event";

export default function SelectedEvent({ name, cost, details, collapse }: Partial<EventProps> & { collapse: boolean }) {

    return (

        <div className={collapse ? 'h-0 overflow-hidden' : "flex flex-col shadow-lg drop-shadow-2xl rounded border-2 border-purple-600 p-5 min-w-full h-fit  items-center justify-around font-mono overflow-hidden gap-1"}>

            <div className="uppercase text-lg w-full">

                <p className="text-md text-center text-ellipsis whitespace-nowrap overflow-hidden text-orange-600"> {name}</p>
            </div>


            <div className="text-md text-red-500"> {cost} ₪</div>
            <div className=" text-sm line-clamp-3"> {details}</div>

        </div>

    )
}
