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
        <>

            <EventPerBudget data={data} />


        </>
    )
}
