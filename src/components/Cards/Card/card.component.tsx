import { Interval } from "@/types/data";
import Image from "next/image"
import Link from "next/link";
import { FaCloudSunRain } from "react-icons/fa6";
export const CardComponent = ({ data, day, city }: { data: Interval[]; city: string | null; day: string }) => {
    const dateName = new Date(data[0].startTime).toLocaleString('en-us', {weekday: 'long', day: 'numeric', month: 'short'});
    const middleofDay:number = Math.round((data.length/2)-1);

    const temperature = data[middleofDay].values.temperature;
    const windSpeed = data[middleofDay].values.windSpeed;
    const humidity = data[middleofDay].values.humidity;
    return (
        <div className="bg-light text-hoverBlue dark:text-white border-2 rounded-2xl w-full cursor-pointer border-borderLight dark:bg-dark dark:hover:bg-hoverBlue dark:border-borderGrey hover:scale-105 p-1 duration-500 hover:p-2 hover:bg-hoverBlue">
                <div className="bg-light dark:bg-dark p-4 rounded-xl border-2 border-borderLight dark:border-borderGrey">
                    <Link href={{pathname: '/weather-details', query: {day:day}}} className="flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-base">{dateName}</h4>
                            <p className="text-sm font-thin my-1">{city}</p>
                            <p className="text-base">Temperature: <span className="font-base">{Math.round(temperature)}°C</span></p>
                            <p className="text-base">Humidity: <span className="text-base">{Math.round(humidity)}%</span></p>
                            <p className="text-base">Wind Speed: <span className="text-base">{Math.round(windSpeed)}km/h</span>  </p>
                        </div>
                        <Image width={80} height={80} alt="none" src={`/images/${data[middleofDay].values.weatherCode}0.png`} />
                    </Link>
            </div>
        </div>
    )
}