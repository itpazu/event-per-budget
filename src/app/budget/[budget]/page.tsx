import EventPerBudget from "./eventPerBudget";
import SelectedEvents from "../../components/selectedEvents";
import { getEventPerBuget } from './budgetFetch';

export default async function Page({ params: { budget } }: { params: { budget: string } }) {

    const searchBudget = budget.split('-')[1]
    const data = await getEventPerBuget(parseInt(searchBudget))
    return (
        <>
            <div className="gap-2 flex flex-col lg:flex-row w-fit lg:w-full justify-between h-max items-center mb-14 sticky top-[81px] z-20 lg:top-[56px] text-white font-extrabold">
                <div className="sticky top-[81px] z-20 lg:top-[56px] font-sans shadow-xl from-zinc-300 to-black bg-gradient-to-tr p-3 flex flex-col gap-2 rounded-lg  lg:self-baseline lg:w-[40%]">
                    <p className="text-2xl">
                        {
                            data.length > 0 ? 'קטגרויות מחיר מוצעות לתקציב'
                                :
                                "לא ניתן להתאים תוכניות בתקציב שהוזן, יש להגדיל את התקציב"

                        }
                    </p>
                    <div className="flex justify-center text-3xl gap-4 text-black">
                        {data.map(([price], idx) =>
                            <a className="pr-2 border-r-2 border-black underline decoration-purple-500" key={idx * price} href={idx === 0 ? "#" : `#category-${price}`}>{price} ₪ </a>

                        )}
                    </div>

                </div>


                <div className="hidden lg:flex lg:w-[40%]">

                    <SelectedEvents />
                </div>

            </div>
            <div className="lg:hidden w-full">

                <SelectedEvents />
            </div>
            <EventPerBudget key={'eventBudget'} data={data} />

        </>
    )
}
