import { SmallCardComponent } from "@/components/Cards/SmallCard/smallCard.component"
import { IntervalData } from "@/types/data"

export const WindForecastLayout = ({data}:{data: IntervalData[]}) => {
    return (
        <div className="mt-5 p-5 bg-dark w-full text-white rounded-xl overflow-hidden">
                    <h3 className="text-lg ">Wind Forecast</h3>
                    <div className="flex flex-nowrap mt-4 p-4 shadow-inner bg-darkBlue rounded-xl gap-5 overflow-x-auto h-full ">
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