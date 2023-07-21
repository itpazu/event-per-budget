import Event, { EventProps } from "../components/event";
import EventPerBudget from "../api/budget-event/eventPerBudget";
import SelectedEvents from "../components/selectedEvents";

export default async function Page({ params: { budget } }: { params: { budget: string } }) {
    const url = `http://localhost:3000/api/budget-event?budget=${budget}`
    console.log(url)
    const res = await fetch(url, { next: { revalidate: 1000 } })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const { data }: { data: Array<[number, EventProps[]]> } = await res.json()
    return (
        <>
            <div className="gap-2 flex flex-col lg:flex-row w-full justify-between h-max items-center mb-14 sticky top-[81px] z-20 lg:top-[56px]">
                <div className="sticky top-[81px] z-20 lg:top-[56px] font-sans shadow-xl from-zinc-300 to-blue-200 bg-gradient-to-tr p-3 flex flex-col gap-2  lg:self-baseline lg:w-[40%]">

                    <p className="text-2xl capitalize">price categories for budget</p>
                    <div className="flex justify-center text-3xl gap-4">
                        {data.map(([number], idx) =>
                            <a className="pr-2 border-r-2 border-black underline decoration-purple-500" key={idx * number} href={idx === 0 ? "#" : `#category-${number}`}>{number} NIS </a>

                        )}
                    </div>

                </div>


                <div className="hidden lg:flex lg:w-[40%]">

                    <SelectedEvents />
                </div>

            </div>
            <div className="lg:hidden w-full">

                <SelectedEvents />
            </div>
            <EventPerBudget data={data} />

        </>
    )
}
