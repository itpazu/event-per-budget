import Event from './components/event';
import { getFromStrapi, getDataModel, FetchEvent, getData } from './getData';

export default async function Home() {

  const res = await getFromStrapi<FetchEvent>("events", {
    populate: {
      category: true,
      video: true
    }
  }
  )

  const data = getDataModel(res)

  return (

    <div className="mb-10 min-w-full grid text-center gap-[10px] lg:mb-0 lg:grid-cols-2 lg:text-left bg-image-lights text-white">

      {data.map(({ id, name, cost, details, category, video, videolink }) => <Event videolink={videolink} video={video} category={category} key={id} id={id} name={name} cost={cost} details={details} />)}
    </div>


  )
}
