'use client'
import { CardComponent } from "@/components/Cards/Card/card.component"
import { CardTodayComponent } from "@/components/Cards/CardToday/cardToday.component"
import { IntervalData } from "@/types/data";
import onedaydata from '@/data/onedaydata.json'
import { sortDate } from "@/utils/sortData";
export const WeatherLayout = ({}) => {
    const data = sortDate(onedaydata);
    return (
        <div className="grid grid-cols-6 my-14 gap-10 justify-items-center">
            {data.map((dayWeather:IntervalData, index:number)=>{
                if(index === 0) {
                    return <CardTodayComponent data={dayWeather.data} key={index} />
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