import { useEffect, useState } from "react";
import { APIResponse } from "../../types/data";

export function useGetDataHook () {
    const [data, setData] = useState<APIResponse | null>(null);
   
    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_CALL}${process.env.NEXT_PUBLIC_API_KEY}`);
            const data:APIResponse = await res.json();
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
    }, [])
    return data
}