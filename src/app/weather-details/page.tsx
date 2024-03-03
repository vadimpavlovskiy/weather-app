'use client'

import { WeatherContext } from "@/context/weatherContext"
import { DayWeatherLayout } from "@/layout/DayWeather/dayWeather.layout";
import { HeaderLayout } from "@/layout/Header/header.layout";
import { Interval, IntervalData } from "@/types/data";
import { ParsedUrlQueryInput } from "querystring";
import { useContext } from "react"

export default function WeatherDetails(query:any) {
    const queryDay = query.searchParams.day;    
    const context = useContext(WeatherContext);
    const city:string = context?.activeCity ?? '';
    console.log(context);
    const selectedDay = context?.weatherData.find((x:IntervalData) => {
        if(x.day === queryDay) {
            return x;
        }
    });
    console.log(selectedDay.data);
    
    return (
        <>
            <HeaderLayout />
            <DayWeatherLayout city={city} day={queryDay} data={selectedDay.data} />
        </>
    )
}