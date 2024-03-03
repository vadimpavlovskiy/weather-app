import { SmallCardComponent } from "@/components/Cards/SmallCard/smallCard.component"
import { Interval, IntervalData } from "@/types/data"
import { useState } from "react"

export const WindForecastLayout = ({data}:{data: Interval[]}) => {
    const [collapse, setCollapse] = useState(false)
    return (
        <div className="bg-hoverBlue text-white mt-5 p-5 border-2 border-borderLight w-full rounded-xl overflow-hidden dark:bg-dark dark:border-borderGrey">
                    <h3 className="text-lg font-bold">Wind Forecast</h3>
                    <div className="flex flex-nowrap mt-4 p-4 shadow-inner bg-light rounded-xl gap-5 overflow-x-auto h-full border-2 border-borderLight dark:bg-darkBlue dark:border-borderGrey">
                        {data.map((value:any, index: number) => {
                            const date = new Date(value.startTime).getUTCHours()
                            return (
                                <SmallCardComponent key={index} date={date} wind={value.values.windSpeed}  />
                            )
                    })}
                    </div>
        </div>
    )
}