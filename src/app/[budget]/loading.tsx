//loading page
//error page
// randomize order logic  and button
// deploy

export default function Loading() {
    return (

        <div className="absolute  top-[46vh] lg:top-[52vh] grid max-w-[80%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-full place-items-center grid-rows-auto border-indigo-600 border-4 gap-4 mb-5 items-center p-2 bg-gradient-to-b from-zinc-200 lg:rounded-xl backdrop-blur-2xl bold" >

            <div className="h-[5vh] flex justify-center items-center backdrop-blur-2xl place-self-stretch col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4" >

                <p className="h-1/2  w-1/5 bg-slate-300 animate-pulse">

                </p>
            </div>


            <div className="animate-pulse  shadow-lg drop-shadow-2xl rounded border-2 border-white-600 p-5 min-w-full min-h-[30vh]">

                <div className='animate-pulse absolute top-[-5px] right-[-26px] rotate-45  border-x-transparent border-x-[40px] h-0 w-0 border-b-[40px] border-b-white'>

                </div>

            </div>
            <div className="animate-pulse hidden sm:block shadow-lg drop-shadow-2xl rounded border-2 border-white-600 p-5 min-w-full min-h-[30vh]">

                <div className='animate-pulse absolute top-[-5px] right-[-26px] rotate-45 border-x-transparent border-x-[40px] h-0 w-0 border-b-[40px] border-b-white'>

                </div>

            </div>
            <div className="animate-pulse hidden md:block shadow-lg drop-shadow-2xl rounded border-2 border-white-600 p-5 min-w-full min-h-[30vh]">

                <div className='animate-pulse absolute top-[-5px] right-[-26px] rotate-45  border-x-transparent border-x-[40px] h-0 w-0 border-b-[40px] border-b-white'>

                </div>

            </div>
            <div className="animate-pulse hidden lg:block shadow-lg drop-shadow-2xl rounded border-2 border-white-600 p-5 min-w-full min-h-[30vh]">

                <div className='animate-pulse absolute top-[-5px] right-[-26px] rotate-45  border-x-transparent border-x-[40px] h-0 w-0 border-b-[40px] border-b-white'>

                </div>

            </div>




        </div>


    )
}



