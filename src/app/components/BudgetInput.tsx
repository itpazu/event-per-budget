'use client';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks';
import { updateBudget } from '@/redux/reducers';

export default function BudgetInput({ readOnly, textColor = "green" }: { readOnly?: boolean; textColor?: "red" | "green" }) {

    const { budget, spending } = useAppSelector(state => state.eventSlice)
    const dispatch = useAppDispatch()
    return (
        <div className="h-10 w-16 basis-[30%]">
            <input readOnly={!!readOnly}
                className={`h-full text-${textColor}-500 w-full text-center text-xl bg-zinc-300 border rounded`}
                type={readOnly ? "text" : "number"}
                value={readOnly ? `${spending}/${budget.toString()}` : budget}
                placeholder="0"
                onChange={(e) =>
                    dispatch(updateBudget(parseInt(e.currentTarget.value) || 0
                    ))}
            />

        </div>
    )
}
