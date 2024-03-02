import { SmallCardComponent } from "@/components/Cards/SmallCard/smallCard.component"
import { Interval, IntervalData } from "@/types/data"
import { FaCloud } from "react-icons/fa6";

import { useState } from "react"

export const HourForecastLayout = ({data}:{data: Interval[]}) => {
    const [collapse, setCollapse] = useState(false)
    return (
        <div onClick={()=>setCollapse(!collapse)} className="bg-hoverBlue text-white mt-5 p-5 border-2 border-borderLight w-full rounded-xl overflow-hidden dark:bg-dark dark:border-borderGrey">
                    <h3 className="text-lg font-bold">Hour Forecast</h3>
                    <div className={'flex flex-nowrap mt-4 p-4 shadow-inner bg-light rounded-xl gap-5 overflow-x-auto h-full border-2 border-borderLight dark:bg-darkBlue dark:border-borderGrey'}>
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