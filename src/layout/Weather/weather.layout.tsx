'use client'
import { CardComponent } from "@/components/Card/card.component"
import { CardTodayComponent } from "@/components/CardToday/cardToday.component"
import data from '@/data/data.json';
import { APIResponse, Interval } from "@/hooks/GetWeatherData/data";
import { useGetDataHook } from "@/hooks/GetWeatherData/getDataHook"

export const WeatherLayout = ({}) => {
    const dataJSON:APIResponse = data;
    const weather = dataJSON.data.timelines[0].intervals;
    return (
        <div className="grid grid-cols-6 my-14 gap-10 justify-items-center">
            {weather.map((dayWeather:Interval, index:number)=>{
                if(index === 0) {
                    return <CardTodayComponent key={index} />
                }
                else if (index > 0 && index < 3) {
                   return (
                   <div className="w-full col-span-3" key={index}>
                        <CardComponent  />
                    </div>
                   )
                }
                else {
                    return (
                        <div className="w-full col-span-2"key={index}>
                            <CardComponent />
                        </div>
                    )
                    }
                }
                )
            }
        </div>
    )
}