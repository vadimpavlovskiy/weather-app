import { SmallCardComponent } from "@/components/Cards/SmallCard/smallCard.component"
import { Interval, IntervalData } from "@/types/data"
import { useState } from "react"
import { WiStrongWind } from "react-icons/wi"

export const WindForecastLayout = ({data}:{data: Interval[]}) => {
    const [collapse, setCollapse] = useState(false)
    return (
        <div className="mt-5 p-5 bg-dark w-full text-white rounded-xl overflow-hidden">
                    <h3 className="text-lg font-bold">Wind Forecast</h3>
                    <div className="flex flex-nowrap mt-4 p-4 shadow-inner bg-darkBlue rounded-xl gap-5 overflow-x-auto h-full">
                        {data.map((value:any, index: number) => {
                            const date = new Date(value.startTime).getUTCHours()
                            return (
                                <SmallCardComponent Icon={WiStrongWind} key={index} date={date} wind={value.values.windSpeed}  />
                            )
                    })}
                    </div>
        </div>
    )
}