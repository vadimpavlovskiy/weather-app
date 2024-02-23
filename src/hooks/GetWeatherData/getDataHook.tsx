import { useEffect, useState } from "react";
import { APIResponse } from "./data";

export function useGetDataHook () {
    const [data, setData] = useState<APIResponse | null>(null);
   
    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_CALL}${process.env.NEXT_PUBLIC_API_KEY}`);
            const responseData: APIResponse = await res.json();
            if (!ignore) {
                setData(responseData);
            }
        }
        
        if (!ignore) {
            fetchData();
        }

        return () => {
            ignore = true;
        };        
    }, []);

    return data;

}