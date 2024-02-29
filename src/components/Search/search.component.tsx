'use client'
import { WeatherContext } from "@/context/weatherContext";
import { ChangeEvent, ChangeEventHandler, useContext, useState } from "react"
export const SearchComponent = ({}) => {
    const [search, setSearch] = useState<null | string>(null);
    const [activeCity, setActiveCity] = useState<null | string>(null);
    const [cities, setCities] = useState<null | Array<any>>(null);
    const context = useContext(WeatherContext);
    

    const handleChange = (e:ChangeEvent<HTMLInputElement> ) => {
        e.preventDefault();
        setActiveCity(null)
        const value = e.target.value;
        setSearch(value);
        setTimeout(async ()=>{
            try {
                if(value)  {
                    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value?.toLowerCase()}&limit=5&appid=${process.env.NEXT_PUBLIC_GEO_KEY}`).then((data) => {return data.json()});
                    return setCities(res)
                } else {
                    return
                }
                
            } catch(error) {
                console.log(error);
            }
                // console.log(res);
                // if(400 !== res.cod){
                //     return setCities(res)
                // } else {
                //     return
                // }
    }, 2000);
      };

      
    return (
        <div className="flex flex-col w-1/2">
        <input onChange={(e)=>{handleChange(e); console.log(cities)}} value={search ? search : ''} className="bg-gray-500 text-white w-full focus:bg-gray-500 outline-none px-5 py-4 rounded-md" placeholder="Type Your City" />
        {
            search && !activeCity ?
            <ul className="flex flex-col z-20 absolute mt-20 border border-borderGrey text-white h-35 bg-darkBlue p-6 rounded-xl divide-y divide-transparent space-y-2 w-1/2">
                {cities ? cities?.map((res, index:number) => {
                    return (
                <li onClick={()=>{setActiveCity(`${res.name}, ${res.state}, ${res.country}`); setSearch(`${res.name}, ${res.state}, ${res.country}`); context?.setCoord(res.lat, res.lon)}} key={index} className="p-2 rounded-xl cursor-pointer bg-dark hover:bg-hoverBlue">
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