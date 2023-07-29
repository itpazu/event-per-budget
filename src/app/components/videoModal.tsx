'use client';

import React, { useRef } from 'react';
import type { VideoObject, VideoLink } from '../api/utils/getData';
import { AiOutlineClose, AiFillPlayCircle } from 'react-icons/ai';

const vidoeBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
export default function VideoModal({ video }: { video: VideoObject | VideoLink }) {

    const dialogRef = useRef<HTMLDialogElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)


    const createVideoFragment = () => {
        let videoName, videoUrl, height, width;

        if ("data" in video && !!video.data) {

            const { name, url, mime, alternativeText, height: h, width: w } = video.data.attributes;
            videoUrl = url;
            videoName = name;
            height = h;
            width = w;

            return (
                <>
                    <a onClick={onClose} href='#' className="w-4 self-start bg-white flex justify-center"> <AiOutlineClose size={'25'} /> </a>
                    <video ref={videoRef} controls className={'max-h-full h-auto max-w-full'} width={width ? width : '100%'} height={height ? height : 'auto'} aria-label={videoName}>
                        <source src={`${vidoeBaseUrl}${videoUrl}`} />
                        <a href={`${vidoeBaseUrl}${videoUrl}`}>video</a>
                    </video>
                </>)
        }
        else if ("providerUid" in video) {
            const { url, provider, providerUid } = video;
            videoUrl = url
            videoName = provider + '' + providerUid;

            return (
                <iframe
                    className='w-full h-auto aspect-video'
                    src={url}
                    id="videoLink"
                    title={videoName}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            )
        }
    }

    const closeModal = ({ target }: React.SyntheticEvent) => {
        if (target === dialogRef.current) {
            dialogRef.current?.close()
        }
    }

    const openModal = () => {
        dialogRef.current?.showModal()
    }
    const onClose = (e: React.SyntheticEvent) => {
        if (videoRef.current) {
            videoRef.current?.pause()
        } else if ("url" in video) {
            const el = document.getElementById("videoLink") as HTMLIFrameElement
            el.src = ''
            el.src = video.url
        }
        dialogRef.current?.close()
    }
    return (
        <>
            <dialog
                className='backdrop:backdrop-blur-sm p-0 bg-transparent'
                ref={dialogRef}
                onCancel={closeModal}
                onClick={closeModal}
                onClose={onClose}

            >
                <div className='flex flex-col max-h-[90vw] max-w-full h-auto w-[90vw] md:w-[60vw] items-center'>
                    {createVideoFragment()}
                </div>
            </dialog>
            <button onClick={openModal} className='flex justify-center gap-1 items-center text-btn w-3/5'>
                <span className='text'> play video </span>
                <AiFillPlayCircle size={'40px'} />
            </button>

        </>

    )
}
