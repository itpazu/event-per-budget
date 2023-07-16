'use client';
import { useState } from 'react';


export default function CheckBox({ eventId }: { eventId: number }) {

    const [checked, setChecked] = useState(false)

    return (
        <>
            <div className='self-start w-[25px] h-[25px] flex place-content-center' >

                <input type="checkbox" className="w-full h-full" onChange={(e) => console.log(eventId, e.currentTarget.checked)} />
            </div>
        </>
    )
}

