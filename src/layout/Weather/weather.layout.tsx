'use client'
import { CardComponent } from "@/components/Card/card.component"
import { CardTodayComponent } from "@/components/CardToday/cardToday.component"
import { useGetDataHook } from "@/hooks/GetWeatherData/getDataHook"

export const WeatherLayout = ({}) => {
    const data = useGetDataHook();
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <div className="grid grid-cols-3 my-6 gap-10 justify-items-center">
            <CardTodayComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </div>
    )
}