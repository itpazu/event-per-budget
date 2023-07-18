import BudgetInput from "./BudgetInput";
import BudgetButton from './budgetButton';

export default function HeaderFooter() {
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex sticky top-[90px] lg:top-0">
            <div className="fixed p-2 left-0 top-0  gap-4 h-20 items-center max-[500px]:gap-1 max-[500px]:flex-col flex w-full justify-center border-2 lg:h-14 border-green-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-[40%]  lg:rounded-xl  lg:bg-gray-200  lg:dark:bg-zinc-800/30">
                <div className="text-xl">Set your budget </div>
                <BudgetInput />
            </div>
            <BudgetButton />
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:w-[40%] lg:static lg:h-auto  lg:bg-none">
                <div className="gap-4 h-20 p-2 items-center max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-1 flex w-full justify-center border-2 lg:h-14 border-red-300 bg-gradient-to-b from-zinc-200 lg:rounded-xl backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30">
                    <div className="text-xl">Current spending </div>
                    <BudgetInput textColor="red" readOnly={true} />
                </div>
            </div>
        </div>

    )
}
