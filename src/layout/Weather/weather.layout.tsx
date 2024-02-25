'use client'
import { CardComponent } from "@/components/Cards/Card/card.component"
import { CardTodayComponent } from "@/components/Cards/CardToday/cardToday.component"
import { Interval, IntervalData } from "@/types/data";
import onedaydata from '@/data/onedaydata.json'
import { sortDate } from "@/utils/sortData";
import { Suspense, useContext, useEffect } from "react";
import { WeatherContext } from "@/context/weatherContext";
export const WeatherLayout = ({}) => {
    const context = useContext(WeatherContext)
    useEffect(() => {
        if (context && context.weatherData === null) {
            context?.setData(onedaydata)
        }
    }, [context])
    
    return (
        <div className="grid grid-cols-6 my-14 gap-10 justify-items-center">
            {context?.weatherData && context?.weatherData.map((dayWeather:IntervalData, index:number)=>{
                console.log(dayWeather);
                
                if(index === 0) {
                    return <CardTodayComponent day={dayWeather.day} data={dayWeather.data} key={index} />
                }
                else if (index > 0 && index < 3) {
                   return (
                   <div className="w-full col-span-3" key={index}>
                        <CardComponent data={dayWeather.data}  />
                    </div>
                   )
                }
                else {
                    return (
                        <div className="w-full col-span-2"key={index}>
                            <CardComponent data={dayWeather.data}  />
                        </div>
                    )
                    }
                }
                )
            }
        </div>
    )
}