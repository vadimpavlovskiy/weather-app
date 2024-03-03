'use client'
import { CardComponent } from "@/components/Cards/Card/card.component"
import { CardTodayComponent } from "@/components/Cards/CardToday/cardToday.component"
import { IntervalData } from "@/types/data";
import { useContext, useEffect } from "react";
import { WeatherContext } from "@/context/weatherContext";
import { useGetDataHook } from "@/hooks/GetWeatherData/getDataHook";
export const WeatherLayout = ({}) => {
    const context = useContext(WeatherContext);
    const lat = context?.cityCoord?.lat ?? 40.75;
    const lon = context?.cityCoord?.lon ?? -73.98;
    
    const weatherFromApI = useGetDataHook(lat, lon);
    
    useEffect(() => {
        if ( weatherFromApI !== null) {
            if(weatherFromApI.data) {
                context?.setData(weatherFromApI.data.timelines[1])
            } else {
                context?.setData(null)
            }
        }
    }, [ weatherFromApI ])
    
    return (
        <div className="grid grid-cols-6 my-14 gap-10 justify-items-center z-0">
            {context?.weatherData && context?.weatherData.map((dayWeather:IntervalData, index:number)=>{
                console.log(dayWeather.day);
                if(index === 0) {
                    return <CardTodayComponent city={context.activeCity} day={dayWeather.day} data={dayWeather.data} key={index} />
                }
                else if (index > 0 && index < 3) {
                   return (
                   <div className="w-full max-sm:col-span-6 sm:col-span-6 xl:col-span-3" key={index}>
                        <CardComponent city={context.activeCity} day={dayWeather.day} data={dayWeather.data}  />
                    </div>
                   )
                }
                else {
                    return (
                        <div className="w-full max-sm:col-span-6 sm:col-span-6 xl:col-span-2"key={index}>
                            <CardComponent city={context.activeCity} day={dayWeather.day} data={dayWeather.data}  />
                        </div>
                    )
                    }
                }
                ) 
            }
        </div>
    )
}