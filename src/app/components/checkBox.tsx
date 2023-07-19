'use client';

import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/reduxHooks';
import { updateSpending } from '@/redux/reducers';

export default function CheckBox({ eventId, cost, disabled }: { eventId: number, cost: number, disabled: boolean }) {

    const [checked, setChecked] = useState(false)
    const dispatch = useAppDispatch()

    const onChecked = ({ currentTarget: { checked } }: React.FormEvent<HTMLInputElement>) => {
        setChecked(checked)
        const spendingValue = checked ? cost : -cost
        dispatch(updateSpending(spendingValue))
    }
    return (
        <>
            <div className='self-start w-[25px] h-[25px] flex place-content-center' >

                <input disabled={disabled && !checked} type="checkbox" className="w-full h-full" onChange={onChecked} />
            </div>
        </>
    )
}

