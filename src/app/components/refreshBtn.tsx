'use client';

import { useRouter } from "next/navigation";


export default function RefreshButton() {

    const router = useRouter()

    const handleRefresh = () => {
        router.refresh()
    }

    return (
        <button
            className='grow-1 border p-2 rounded-full bg-purple-500 hover:bg-slate-400'
            onClick={handleRefresh}
        > רענן </button>

    )
}
