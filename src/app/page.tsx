import Event, { EventProps } from './components/event';
import type { VideoObject } from './api/utils/getData';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api', { next: { revalidate: 100 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const { data }: { data: Array<EventProps & { video: VideoObject }> } = await res.json()
  console.log(data)

  return (

    <div className="mb-10 min-w-full grid text-center gap-[10px] lg:mb-0 lg:grid-cols-2 lg:text-left bg-image-lights text-white">

      {data.map(({ id, name, cost, details, category, video }) => <Event video={video} category={category} key={id} id={id} name={name} cost={cost} details={details} />)}
    </div>


  )
}
