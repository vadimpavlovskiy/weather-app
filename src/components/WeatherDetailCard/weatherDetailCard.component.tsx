import { ReactNode } from "react"

export const WeatherDetailComponent = ({children}:{children: ReactNode}) => {
    return (
        <div className="bg-hoverBlue h-max max-sm:flex-col max-sm:w-full sm:w-full md:w-full xl:w-38 lg:w-full p-4 rounded-xl flex justify-between items-center lg:flex-col gap-3 border-2 border-borderLight hover:scale-105 duration-500 dark:bg-hoverBlue dark:border-dark">
            {children}
        </div>
    )
}