import { useEffect, useState } from "react";
import { APIResponse } from "../../types/data";

export function useGetDataHook (lat:number, lon:number) {
    const [data, setData] = useState<APIResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        console.log('Triggered UseEffect from custom hook!');
        console.log(lat, lon);
        
        let ignore = false;

        async function fetchData() {
            try{
                const res = await fetch(`https://api.tomorrow.io/v4/timelines?location=${lat},${lon}&fields=temperature&fields=humidity&fields=weatherCode&&fields=humidity&fields=sunsetTime&fields=sunriseTime&fields=windDirection&fields=windSpeed&timesteps=1h&timesteps=1d&units=metric&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
                if(!res.ok) {
                    const error = new Error(`${res.status} ${res.statusText}`);
                    setError(error);
                    throw error;
                } 
                const data:APIResponse = await res.json();
                return setData(data)
            } catch(error) {
                console.log(error);
            }
            
            if (!ignore) {
                setData(data);
            }
        }
        if (!ignore) {
            fetchData();
        }

        return () => {
            ignore = true;
          };        
    }, [lat, lon])
    
    
    return data
}