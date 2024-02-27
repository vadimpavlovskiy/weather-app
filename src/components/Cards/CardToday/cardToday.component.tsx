import Image from "next/image"
import Link from "next/link"
import { IData } from "./props";
import { Interval, IntervalData } from "@/types/data";
import { FaCloudSunRain } from "react-icons/fa6";
export const CardTodayComponent = ({ data, day }: { data: Interval[]; day: string }) => {
    const dateName = new Date(data[0].startTime).toLocaleString('en-us', {weekday: 'long', day: 'numeric', month: 'short'});
    console.log(data);
    
    
    return (
            <div className="rounded-lg text-white bg-dark w-full p-6 col-span-6  cursor-pointer hover:bg-hoverBlue hover:scale-105 duration-500">
                <div className="bg-darkBlue border border-borderGrey p-6 rounded-xl">
                <Link href={{pathname: '/weather-details', query: {day:day}}} className="flex justify-between items-center">
                <div className="">
                    <div className="bg-dark border border-borderGrey p-6 rounded-xl">
                    <h4 className="font-bold text-xl mb-4">{dateName}</h4>
                        <p>Temperature: {Math.round(data[0].values.temperature)}°C</p>
                        <p>Humidity: {Math.round(data[0].values.humidity)}%</p>
                        <p>Wind Speed: {Math.round(data[0].values.windSpeed)} km/h</p>
                    </div>
                </div>
                    <div className="flex flex-col items-center bg-dark border border-borderGrey rounded-xl p-6">
                        <h4 className="text-xl mb-4 font-semibold">Hourly Forecast</h4>
                        <div className="flex gap-10 ">
                        {data.map((dataSingle:IData, index:number) => {
                            const hour = new Date(dataSingle.startTime).getUTCHours();
                            if(index % 3 === 0) {
                                return (
                                    <div className="flex flex-col items-center" key={index}>
                                        <p className="text-sm">{hour}:00</p>
                                        <Image width={30} height={30} alt="none" src={'https://cdn-icons-png.flaticon.com/512/4834/4834559.png'} />
                                        <p className="text-sm">{Math.round(dataSingle.values.temperature)}</p>
                                    </div>
                                )
                            }
                        })}
                        </div>
                    </div>
                    <div className="bg-dark p-6 rounded-full border border-borderGrey">
                        <FaCloudSunRain color="white" className="h-1/2" size={100} />
                    </div>
            </Link>
            </div>
        </div>
    )
}