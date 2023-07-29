'use client';

import { useEffect } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { useAppSelector, useAppDispatch } from '@/redux/reduxHooks';
import { setEventsPerBudget } from '@/redux/reducers';
import Event, { EventProps } from "@/app/components/event";
import CheckBox from '@/app/components/checkBox';

export default function EventPerBudget({ data }: { data: Array<[number, EventProps[]]> }) {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setEventsPerBudget(data))

    }, [data, dispatch])

    const { spending, budget, selectedEvent } = useAppSelector(state => state.eventSlice)
    const HorizontalScroll = (id: string, right: boolean) => {
        const slider = document.getElementById(id)
        slider!.scrollLeft = right ? slider!.scrollLeft + 200 : slider!.scrollLeft - 200
    }

    const checkIfInBudget = (cost: number) => {

        return !(cost <= budget - spending)

    }
    const checkIfSelected = (eventId: number) => {

        return selectedEvent.some(event => event.id === eventId)

    }
    return (
        <>
            {data.map(([groupNumber, group], idx) => {
                const scrollId = `scroll-container-${groupNumber}`
                return (

                    <div key={groupNumber + idx} className="grid relative grid-cols-1 mb-[5vh] justify-center w-full place-items-center font-bold grid-rows-auto border-indigo-600 border-4 gap-2 md:gap-4 md:mb-5 items-center pb-3 bg-gradient-to-b from-zinc-200 lg:rounded-xl backdrop-blur-2xl bold overflow-hidden" >

                        <div className={group.length > 1 ? `h-[8vh] backdrop-blur-2xl place-self-stretch flex justify-center md:justify-between items-center p-2`
                            : `h-[8vh] backdrop-blur-2xl place-self-stretch flex justify-center  items-center p-2`} >

                            {group.length > 1 &&

                                <button className="hidden md:block h-[25px] w-[25px] md:w-[40px]" onClick={() => HorizontalScroll(scrollId, true)}>
                                    <BsChevronDoubleRight size={'100%'} color={'#3730a3'} />
                                </button>
                            }
                            <p id={`category-${groupNumber}`} className="h-full flex flex-col justify-center text-3xl">
                                {groupNumber} ₪
                            </p>
                            {group.length > 1 && <button className="hidden md:block h-[25px] w-[25px] md:w-[40px]" onClick={(e) => HorizontalScroll(scrollId, false)}>
                                <BsChevronDoubleLeft size={'100%'} color={'#3730a3'} />
                            </button>}
                        </div>

                        <div
                            id={scrollId}
                            className="scroll-container flex flex-col gap-2 md:flex-row flex-nowrap overflow-x-scroll scroll scroll-smooth"
                        >


                            {
                                group.map((event) => {
                                    const { id, name, cost, details, category, video, videolink } = event

                                    return (



                                        <div key={name + id * 5} className={checkIfSelected(id) ? "min-w-[90%] lg:min-w-[55%] mx-3 border-2 border-purple-600" : "min-w-[75%] lg:min-w-[55%] mx-3"}>
                                            <Event videolink={videolink} video={video} category={category} id={id} name={name} cost={cost} details={details} >
                                                <CheckBox event={event} disabled={checkIfInBudget(cost) || checkIfSelected(id)} isSelected={checkIfSelected(id)} />
                                            </Event>


                                        </div>

                                    )
                                }
                                )
                            }


                        </div>

                    </div>



                )
            })}



        </>
    )
}
