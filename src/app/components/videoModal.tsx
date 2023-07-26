'use client';

import { useRef } from 'react';
import type { VideoObject } from '../api/utils/getData';
import { AiOutlineClose, AiFillPlayCircle } from 'react-icons/ai';

const vidoeBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
export default function VideoModal({ video }: { video: VideoObject }) {

    const ref = useRef<HTMLDialogElement>(null)

    const { name: videoName, url: videoUrl, mime, alternativeText, height, width } = video.data.attributes;

    const closeModal = () => {
        ref.current?.close()
    }
    const openModal = () => {
        ref.current?.showModal()
    }
    return (
        <>
            <dialog
                className='backdrop:backdrop-blur-sm p-0 bg-transparent'
                ref={ref}
                onCancel={closeModal}
                onClick={closeModal}
            >
                <div className='flex flex-col max-h-[90vw] max-w-full h-auto w-[90vw] md:w-[60vw] items-center'>
                    <a href='#' className="w-4 self-start bg-white flex justify-center"> <AiOutlineClose size={'25'} /> </a>
                    <video controls className={'max-h-full h-auto max-w-full'} width={width ? '300' : '100%'} height={height ? height : 'auto'} aria-label={videoName}>
                        <source src={`${vidoeBaseUrl}${videoUrl}`} type="video/mp4" />
                        <a href={`${vidoeBaseUrl}/${videoUrl}`}>video</a>
                    </video>
                </div>
            </dialog>
            <button onClick={openModal} className='flex justify-center gap-1 items-center text-btn w-3/5'>
                <span className='text'> play video </span>
                <AiFillPlayCircle size={'40px'} />
            </button>

        </>

    )
}