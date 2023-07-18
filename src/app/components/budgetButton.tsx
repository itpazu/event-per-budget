'use client';

import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks';
import Link from 'next/link';

export default function BudgetButton() {

    const { budget } = useAppSelector(state => state.eventSlice)
    return (
        <>
            {<Link href={`/${budget}`}>

                <button
                    disabled={!!budget ? false : true}
                    className={!!budget ?
                        "border-spacing-1 border border-3 border-black p-3 lg:p-4 rounded-3xl bg-slate-50 capitalize underline shadow-2xl hover:scale-125 opacity-100 duration-700 ease-in delay-100 transition-opacity"
                        :
                        "border-spacing-1 border border-3 border-black p-3 lg:p-4 rounded-3xl bg-slate-50 capitalize underline shadow-2xl hover:scale-125 opacity-0 duration-700 ease-in transition-opacity"
                    }
                >
                    get programms
                </button>
            </Link>
            }
        </>
    )
}
