import { Interval } from "@/types/data"
import Image from "next/image"
import { IProps } from "../card";
export const CardComponent = ({props}:IProps) => {
    const dateName = new Date(props.startTime).toLocaleString('en-us', {weekday: 'long', day: 'numeric', month: 'short'}) 
    return (
        <div className="bg-gray-500 border rounded-lg w-full p-6 flex justify-between items-center cursor-pointer hover:bg-gray-400 hover:scale-105 duration-500">
            <div>
                <h4 className="font-bold text-xl">{dateName}</h4>
                <p className="text-lg">Temperature: <span className="font-bold text-base">{Math.round(props.values.temperature)}°C</span></p>
                <p className="text-lg">Humidity: <span className="font-bold text-base">{Math.round(props.values.humidity)}%</span></p>
                <p className="text-lg">Wind Speed: <span className="font-bold text-base">{Math.round(props.values.windSpeed)}km/h</span>  </p>
            </div>
            <Image width={100} height={100} alt="none" src={'https://cdn-icons-png.flaticon.com/512/4834/4834559.png'} />
        </div>
    )
}