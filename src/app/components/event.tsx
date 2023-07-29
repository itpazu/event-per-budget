import type { VideoObject, VideoLink } from '../api/utils/getData';
import VideoModal from '@/app/components/videoModal'
export type EventProps = {
    id: number
    name: string;
    cost: number;
    details: string;
    children?: React.ReactNode;
    category: string;
    video: VideoObject;
    videolink: VideoLink;
}
export default function Event({ name, cost, details, category, children, video, videolink }: EventProps) {

    return (

        <div className="flex flex-col shadow-lg drop-shadow-2xl rounded border-2 border-white-600 p-5 min-h-[45vh] sm:min-h-[40vh] items-center justify-around font-mono text-center font-extrabold">
            {children && children}
            <div className='absolute top-[-12px] right-[-52px] rotate-45  border-x-transparent border-x-[80px] h-0 w-0 border-b-[80px] border-b-white'>
                <div className="w-[115px]">

                    <p className="relative top-14 left-[55px] text-purple-500 whitespace-break overflow-hidden text-ellipsis">
                        {category}
                    </p>
                </div>
            </div>

            <div className="uppercase text-lg w-[30vw] flex justify-center">

                <p className="text-3xl text-center text-ellipsis whitespace-nowrap overflow-hidden w-[80%]"> {name} </p>
            </div>

            <div className="text-lg" dir="rtl"> מחיר: {cost} שח </div>
            {!!video?.data && <VideoModal video={video} />}
            {!!videolink && <VideoModal video={videolink} />}
            <div className="text-lg line-clamp-3 hover:line-clamp-none">  {details}</div>
        </div>

    )
}
