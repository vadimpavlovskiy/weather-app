import { SmallCardComponent } from "@/components/Cards/SmallCard/smallCard.component";
import { Interval, IntervalData } from "@/types/data"
import Image from "next/image"
import { HourForecastLayout } from "../HourForecast/hourForecast.layout";
import { WindForecastLayout } from "../WindForecast/windForecast.layout";

export const DayWeatherLayout = ({data}:{data: IntervalData[]}) => {
    console.log(data);
    
    return (
        <div className="bg-darkBlue rounded-xl mt-10 p-10">
            <div className="w-full flex items-center ">
                <Image className="h-full" width={200} height={200} alt="none" src={'https://cdn-icons-png.flaticon.com/512/4834/4834559.png'} />
                    <div className="flex flex-col ml-10 w-full h-full overflow-hidden">
                        <h2 className="font-bold text-2xl ">23th May, Sunday</h2>
                        <HourForecastLayout data={data} />
                    </div>
            </div>
            <div>
                <WindForecastLayout data={data} />
            </div>
        </div>
    )
}
