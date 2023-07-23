'use client';

import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/reduxHooks';
import { resetSelected } from '@/redux/reducers';
import SelectedEvent from './selectedEvent';
import { BiCollapseVertical } from 'react-icons/bi';

export default function SelectedEvents() {

    const dispatch = useAppDispatch()
    const { selectedEvent = [] } = useAppSelector(state => state.eventSlice)
    const [collapse, setCollapse] = useState(false)
    return (

        <>
            {selectedEvent.length > 0 &&
                <div className='selected-grid gap-x-4 gap-y-1 grid min-w-[40%] max-w-full mb-4 p-2 rounded-lg from-zinc-300 to-black bg-gradient-to-tr bg-blur-2xl font-extrabold text-white'>
                    <div className='col-span-full p-2 font-sans text-2xl capitalize grid grid-cols-6 gap-6 place-items-end'>
                        <button className='place-self-start col-span-1'
                            onClick={() => setCollapse(!collapse)}
                        >
                            <BiCollapseVertical color='white' />
                        </button>
                        <p className='col-span-3'>תוכניות שנבחרו</p>
                        <button
                            className='col-span-2 bg-red-400 p-2 shadow-md rounded-lg font-mono text-sm text-white'
                            onClick={() => dispatch(resetSelected({}))}

                        >נקה בחירה</button>
                    </div>

                    {selectedEvent.map(({ name, cost, details }, idx) => (

                        <SelectedEvent key={name + cost + idx} name={name} cost={cost} details={details} collapse={collapse} />
                    ))}

                </div>

            }

        </>
    )
}

