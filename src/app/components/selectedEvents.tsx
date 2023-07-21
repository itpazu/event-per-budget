'use client';

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/reduxHooks';
import { resetSelected } from '@/redux/reducers';

export default function SelectedEvents() {

    const dispatch = useAppDispatch()
    const { selectedEvent = [] } = useAppSelector(state => state.eventSlice)

    return (

        <>
            {selectedEvent.length > 0 &&
                <div className='selected-grid grid gap-4 min-w-[40%] max-w-full  mb-4  p-2 rounded-lg from-zinc-300 to-blue-200 bg-gradient-to-tr'>
                    <div className='col-span-full p-2 font-sans text-2xl capitalize grid grid-cols-3  gap-6 place-items-end'>
                        <p className='col-span-2'>Selected programs</p>
                        <button
                            className='col-span-1 bg-red-400 p-2 shadow-md rounded-lg font-mono text-sm text-white'
                            onClick={() => dispatch(resetSelected({}))}

                        >clear choice</button>
                    </div>

                    {selectedEvent.map(({ name, cost }) => (

                        <div className='bg-slate-500 animate-selected'>
                            <div>{name}</div>
                            <div> {cost}</div>
                            <div>something else</div>
                        </div>
                    ))}

                </div>

            }

        </>
    )
}

