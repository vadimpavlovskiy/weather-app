import { WeatherContextType } from "@/types/contextData";
import { sortDate } from "@/utils/sortData";
import { FC, ReactNode, createContext, useState } from "react";

export const WeatherContext = createContext<WeatherContextType | null>(null);

const WeatherProvider:  React.FC<{children: React.ReactNode}> = ({children}) => {
    const [weatherData, setWeatherData] = useState
    <{
        day: string;
        data: any;
    }[] | null>(null);
    const [cityCoord, setCityCoord] = useState<{
        lat: number,
        lon: number
    } | null>(null)
    const [activeCity, setActiveCity] = useState<null | string>('New York Country, New York, US');
    const setData = (data:any) => {
        const saveData:{
            day: string;
            data: any;
        }[] = sortDate(data);
        setWeatherData(saveData);
    }
    const setCoord = (lat: number, lon:number) => {
        setCityCoord({lat, lon});
    }
    const setCity = (name?:string | null, state?:string | null, country?:string | null) => {
        if(name || state || country) {
            setActiveCity(`${name} ${state ? state : null} ${country ? country : null}`)   
        } else {
            setActiveCity(null)
        }
    }
    return <WeatherContext.Provider value={{setData, setCoord, setCity, activeCity, weatherData, cityCoord}}>{children}</WeatherContext.Provider>
}

export default WeatherProvider;