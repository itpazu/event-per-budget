'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    return (
        <>
            <div className="flex flex-col col-span-2 shadow-lg drop-shadow-2xl rounded border-2 border-white-600 p-5 min-w-full min-h-[45vh] sm:min-h-[40vh] items-center justify-around">
                <span className="text-2xl text-red-950 capitalize">
                    something went wrong - failed to fetch events.
                </span>
                <button className="border-2 rounded-2xl capitalize font-mono bg-red-50 p-3 shadow-lg border-red-600 hover:bg-red-500" onClick={() => reset()}>Try again</button>

            </div>
        </>
    )
}