import { useAppSelector, useAppDispatch } from '@/redux/reduxHooks';
import { updateSpending, setSelectedEvent, deleteSelectedEvent } from '@/redux/reducers';
import { EventProps } from './event';

export default function CheckBox({ event, disabled, isSelected }: { event: EventProps, disabled: boolean, isSelected: boolean }) {

    const { id, cost } = event
    const dispatch = useAppDispatch()

    const onChecked = ({ currentTarget: { checked } }: React.FormEvent<HTMLInputElement>) => {
        const spendingValue = checked ? cost : -cost

        dispatch(updateSpending(spendingValue))

        dispatch(checked ? setSelectedEvent({ event }) : deleteSelectedEvent(id))

    }
    return (
        <>
            <div className='self-start w-[25px] h-[25px] flex place-content-center' >

                <input disabled={disabled && !isSelected} type="checkbox" className="w-full h-full" onChange={onChecked} checked={isSelected} />
            </div>
        </>
    )
}

