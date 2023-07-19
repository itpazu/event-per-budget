'use client';

import { useEffect } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { useAppSelector, useAppDispatch } from '@/redux/reduxHooks';
import { setEventsPerBudget, updateSpending } from '@/redux/reducers';
import Event, { EventProps } from "@/app/components/event";
import CheckBox from '@/app/components/checkBox';

export default function EventPerBudget({ data }: { data: Array<[number, EventProps[]]> }) {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setEventsPerBudget(data))

    }, [data])

    const { spending, budget } = useAppSelector(state => state.eventSlice)

    const HorizontalScroll = (id: string, right: boolean) => {
        const slider = document.getElementById(id)
        slider!.scrollLeft = right ? slider!.scrollLeft + 200 : slider!.scrollLeft - 200
    }

    const checkIfInBudget = (cost: number) => {

        return !(cost <= budget - spending)

    }
    return (
        <>
            {data.map(([groupNumber, group], idx) => {
                const scrollId = `scroll-container-${groupNumber}`
                return (
                    <>

                        <div key={groupNumber * 120 + idx} className="grid relative grid-cols-1 justify-center grid-rows-auto border-indigo-600 border-4 gap-4 mb-5 items-center pb-3" >
                            {group.length > 1 && <button className="absolute top-[45%] left-[-40px]  h-[25px] w-[25px] md:left-[-50px] md:h-[40px] md:w-[40px] ml-2" onClick={(e) => HorizontalScroll(scrollId, false)}>
                                <BsChevronDoubleLeft className="fill-indigo-600 h-full w-full" />
                            </button>}
                            <div className="h-[8vh] bg-orange-200" >

                                <p id={`category-${groupNumber}`} className="h-full flex flex-col justify-center font-bold text-2xl">
                                    {groupNumber} NIS
                                </p>
                            </div>
                            {group.length > 1 &&

                                <button className="absolute top-[45%] right-[-40px]  h-[25px] w-[25px]  md:right-[-50px] md:h-[40px] md:w-[40px] mr-2" onClick={() => HorizontalScroll(scrollId, true)}>
                                    <BsChevronDoubleRight className="fill-indigo-600 h-full w-full" />
                                </button>
                            }

                            <div
                                id={scrollId}
                                className="scroll-container flex flex-column gap-3 lg: flex-row flex-nowrap overflow-x-scroll scroll scroll-smooth"
                            >


                                {
                                    group.map(({ id, name, cost, details }) =>
                                        <>

                                            <div key={name + id} className="min-w-[75%] lg:min-w-[55%] mx-3">
                                                <Event id={id} name={name} cost={cost} details={details} >
                                                    <CheckBox eventId={id} cost={cost} disabled={checkIfInBudget(cost)} />
                                                </Event>


                                            </div>
                                        </>
                                    )
                                }


                            </div>

                        </div>
                    </>



                )
            })}



        </>
    )
}
