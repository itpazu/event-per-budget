export type EventProps = {
    id: number
    name: string;
    cost: number;
    details: string;
    children?: React.ReactNode;
    category: string;
}
export default function Event({ name, cost, details, category, children }: EventProps) {

    return (

        <div className="flex flex-col shadow-lg drop-shadow-2xl rounded border-2 border-white-600 p-5 min-w-full min-h-[45vh] sm:min-h-[40vh] items-center justify-around font-mono ">
            {children && children}
            <div className='absolute top-[-7px] right-[-32px] rotate-45  border-x-transparent border-x-[50px] h-0 w-0 border-b-[50px] border-b-white'>
                <p className="relative top-4 right-5 text-purple-500 whitespace-break">
                    musicjljsgjhgkljsdf
                </p>
            </div>

            <div className="uppercase text-lg w-full">

                <p className="text-3xl text-center text-ellipsis whitespace-nowrap"> {name}</p>
            </div>

            <div className="text-lg"> Price: {cost}NIS</div>

            <div className="text-lg line-clamp-3 hover:line-clamp-none">  {details}</div>
        </div>

    )
}
