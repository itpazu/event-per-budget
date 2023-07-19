import Event, { EventProps } from "../components/event";
import EventPerBudget from "../api/budget-event/eventPerBudget";

export default async function Page({ params: { budget } }: { params: { budget: string } }) {
    const url = `http://localhost:3000/api/budget-event?budget=${budget}`
    console.log(url)
    const res = await fetch(url, { next: { revalidate: 1000 } })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const { data }: { data: Array<[number, EventProps[]]> } = await res.json()
    return (
        < >
            <div className="sticky font-sans shadow-xl from-zinc-300 to-blue-200 bg-gradient-to-tr bg-grad top-[81px] z-10  p-3 flex flex-col gap-2 mb-14 md:mb-10 lg:self-baseline">

                <p className="text-2xl capitalize">price categories for budget</p>
                <div className="flex justify-center text-3xl gap-4">
                    {data.map(([number], idx) =>
                        <a className="pl-2 border-l-2 border-black underline decoration-purple-500" key={idx * number} href={idx === 0 ? "#" : `#category-${number}`}>{number} NIS </a>

                    )}
                </div>

            </div>
            <EventPerBudget data={data} />


        </>
    )
}
