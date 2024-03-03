import Image from "next/image"
import Link from "next/link"
import { IData } from "./props";
import { Interval } from "@/types/data";
export const CardTodayComponent = ({ data, day, city }: { data: Interval[]; day: string; city: string | null }) => {
    const dateName = new Date(data[0].startTime).toLocaleString('en-us', {weekday: 'long', day: 'numeric', month: 'short'});
/* Tabs */

    return (
            <div className="bg-light border-borderLight text-hoverBlue rounded-2xl w-full p-1 col-span-6 cursor-pointer border-2 dark:bg-dark dark:hover:bg-hoverBlue dark:border-borderGrey dark:text-white duration-500 hover:p-2 hover:scale-105 hover:bg-hoverBlue">
                <div className="bg-light border-2 border-borderLight dark:bg-dark dark:border-borderGrey p-6 rounded-2xl">
                <Link href={{pathname: '/weather-details', query: {day:day}}} className="flex justify-between items-center">
                <div className="">
                    <div className="dark:bg-dark p-6 rounded-xl">
                    <h4 className="font-bold text-xl mb-4">{dateName}, {city}</h4>
                        <p>Temperature: {Math.round(data[0].values.temperature)}°C</p>
                        <p>Humidity: {Math.round(data[0].values.humidity)}%</p>
                        <p>Wind Speed: {Math.round(data[0].values.windSpeed)} km/h</p>
                    </div>
                </div>
                    <div className="lg:flex flex-col items-center max-sm:hidden sm:hidden  dark:bg-dark rounded-xl p-6">
                        <h4 className="text-xl mb-4 font-semibold">Hourly Forecast</h4>
                        <div className="flex gap-10 ">
                        {data.map((dataSingle:IData, index:number) => {
                            const hour = new Date(dataSingle.startTime).getUTCHours();
                            if(index % 3 === 0) {
                                return (
                                    <div className="flex flex-col items-center" key={index}>
                                        <p className="text-sm">{hour}:00</p>
                                        <Image width={30} height={30} alt="none" src={`/images/${dataSingle.values.weatherCode}0.png`} />
                                        <p className="text-sm">{Math.round(dataSingle.values.temperature)}</p>
                                    </div>
                                )
                            }
                        })}
                        </div>
                    </div>
                        <Image width={100} height={100} alt="none" src={`/images/${data[0].values.weatherCode}0.png`} />
            </Link>
            </div>
        </div>
    )
}