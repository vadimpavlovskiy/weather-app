import { SmallCardComponent } from "@/components/Cards/SmallCard/smallCard.component"
import { Interval, IntervalData } from "@/types/data"
import { FaCloud } from "react-icons/fa6";

import { useState } from "react"

export const HourForecastLayout = ({data}:{data: Interval[]}) => {
    const [collapse, setCollapse] = useState(false)
    return (
        <div onClick={()=>setCollapse(!collapse)} className="mt-5 p-5 bg-dark w-full text-white rounded-xl overflow-hidden">
                    <h3 className="text-lg font-bold">Hour Forecast</h3>
                    <div className={'flex flex-nowrap mt-4 p-4 shadow-inner bg-darkBlue rounded-xl gap-5 overflow-x-auto h-full'}>
                        {data.map((value:any, index: number) => {
                            const date = new Date(value.startTime).getUTCHours()
                            return (
                                <SmallCardComponent weatherCode={value.values.weatherCode} key={index} date={date} temperature={value.values.temperature} />
                            )
                    })}
                    </div>
        </div>
    )
}