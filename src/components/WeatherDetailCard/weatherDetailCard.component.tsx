import { ReactNode } from "react"

export const WeatherDetailComponent = ({children}:{children: ReactNode}) => {
    return (
        <div className="h-max bg-hoverBlue w-52 p-4 rounded-xl flex flex-col gap-3 border border-dark hover:scale-105 duration-500">
            {children}
        </div>
    )
}