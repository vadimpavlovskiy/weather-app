import { ReactNode } from "react"

export const WeatherDetailComponent = ({children}:{children: ReactNode}) => {
    return (
        <div className="bg-hoverBlue h-max w-52 p-4 rounded-xl flex flex-col gap-3 border-2 border-borderLight hover:scale-105 duration-500 dark:bg-hoverBlue dark:border-dark">
            {children}
        </div>
    )
}