'use client'
import { IProps } from "@/components/Cards/card";
import { ParsedUrlQueryInput } from "querystring";
import onedaydata from '@/data/onedaydata.json';
import { Interval } from "@/types/data";

export default function WeatherDetails(searchParams:ParsedUrlQueryInput) {
    function sortDate () {
        const groupedData = onedaydata.intervals.reduce((acc:any, obj:any) => {
            const startDay = obj.startTime.split('T')[0];
            if (!acc[startDay]) {
                acc[startDay] = [];
              }
              acc[startDay].push(obj.startTime);
              return acc;
        }, {});
        
        const result = Object.keys(groupedData).map(day => ({ day, startTimes: groupedData[day] }));
        return console.log(result);
}
sortDate()
    
    return (
        <>
            <h1>Hello World!</h1> 
        </>
    )
}