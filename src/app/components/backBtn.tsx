'use client';

import { useRouter } from "next/navigation";
import { BiArrowBack } from 'react-icons/bi';
import { usePathname } from "next/navigation";

export default function BackButton() {

    const router = useRouter()
    const pathname = usePathname()
    const handleRefresh = () => {
        router.push('/')
    }

    return (
        <button
            className={pathname === '/' ? 'hidden' : 'fixed left-2 top-2 p-2 z-20 w-10 h-auto flex justif-end'}
            onClick={handleRefresh}
        >
            <BiArrowBack size={'100%'} color={'#A855F7'} />
        </button>

    )
}
