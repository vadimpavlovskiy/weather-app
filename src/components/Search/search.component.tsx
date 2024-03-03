'use client'
import { WeatherContext } from "@/context/weatherContext";
import { ChangeEvent, useContext, useEffect, useState } from "react"
export const SearchComponent = ({}) => {
    const [search, setSearch] = useState<null | string>(null);
    const [cities, setCities] = useState<null | Array<any>>(null);
    const context = useContext(WeatherContext);
    let debounceTimer: NodeJS.Timeout;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value;
        setSearch(value);
    };

    useEffect(() => {
        clearTimeout(debounceTimer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        debounceTimer = setTimeout(async () => {
            try {
                if (search) {
                    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${search.toLowerCase()}&limit=5&appid=${process.env.NEXT_PUBLIC_GEO_KEY}`).then(data => data.json());
                    setCities(res);
                    
                }
            } catch (error) {
                console.error(error);
            }
        }, 1000);
        return () => clearTimeout(debounceTimer);

    }, [search]);

      
    return (
        <div className="flex flex-col w-1/2 relative">
        <input onChange={(e)=>{handleChange(e)}} value={search ? search : ''} className="w-full outline-none px-5 border-2 border-borderLight py-4 rounded-2xl duration-500 bg-light text-hoverBlue dark:bg-dark dark:text-white dark:border-borderGrey dark:focus:bg-darkBlue" placeholder="Type Your City" />
        {
            search ?
            <ul className="flex flex-col z-20 absolute mt-20 border-2 border-borderLight bg-light  text-white h-35  p-6 rounded-xl divide-y divide-transparent space-y-2 w-full dark:border-borderGrey dark:bg-darkBlue">
                {cities ? cities?.map((res, index:number) => {
                    return (
                <li onClick={()=>{context?.setCity(res.name, res.state, res.country); setSearch(null); context?.setCoord(res.lat, res.lon)}} key={index} className="p-2 rounded-xl cursor-pointer hover:bg-dark bg-hoverBlue dark:border-borderGrey dark:bg-dark dark:hover:bg-hoverBlue">
                    {res.name}, {res.state}, {res.country}
                </li>
                    )
                }) : ''}
            </ul> 
            :
            ''
        }
        </div>
    )
}