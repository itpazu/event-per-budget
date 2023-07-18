import Event, { EventProps } from './components/event';


export default async function Home() {
  const res = await fetch('http://localhost:3000/api', { next: { revalidate: 1000 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const { data }: { data: Array<EventProps> } = await res.json()

  return (

    <div className="mb-32 min-w-full grid text-center gap-[10px] lg:mb-0 lg:grid-cols-2 lg:text-left">

      {data.map(({ id, name, cost, details }) => <Event key={id} id={id} name={name} cost={cost} details={details} />)}
    </div>


  )
}
