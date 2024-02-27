import { Interval } from "@/types/data";
import Image from "next/image"
import Link from "next/link";
import { FaCloudSunRain } from "react-icons/fa6";
export const CardComponent = ({ data, day }: { data: Interval[]; day: string }) => {
    const dateName = new Date(data[0].startTime).toLocaleString('en-us', {weekday: 'long', day: 'numeric', month: 'short'});
    const middleofDay:number = Math.round(data.length/2);

    const temperature = data[middleofDay].values.temperature;
    const windSpeed = data[middleofDay].values.windSpeed;
    const humidity = data[middleofDay].values.humidity;
    return (
        <div className="bg-dark text-white border border-borderGrey rounded-lg w-full p-4 cursor-pointer hover:bg-hoverBlue hover:scale-105 duration-500">
            <div className="bg-darkBlue p-3 rounded-xl border border-borderGrey">
                <div className="bg-dark p-4 rounded-xl border-borderGrey">
                    <Link href={{pathname: '/weather-details', query: {day:day}}} className="flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-lg">{dateName}</h4>
                            <p className="text-bold">Temperature: <span className="font-base">{Math.round(temperature)}°C</span></p>
                            <p className="text-bold">Humidity: <span className="text-base">{Math.round(humidity)}%</span></p>
                            <p className="text-bold">Wind Speed: <span className="text-base">{Math.round(windSpeed)}km/h</span>  </p>
                        </div>
                        <FaCloudSunRain color="white" className="h-1/2" size={100} />
                    </Link>
                </div>
            </div>
        </div>
    )
}