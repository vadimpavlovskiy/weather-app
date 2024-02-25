import Image from "next/image"
import Link from "next/link"
import { IData } from "./props";
export const CardTodayComponent = ({data}:any) => {
    const dateName = new Date(data[0].startTime).toLocaleString('en-us', {weekday: 'long', day: 'numeric', month: 'short'});
    return (
            <div className="bg-gray-500 border rounded-lg w-full p-6 col-span-6  cursor-pointer hover:bg-gray-400 hover:scale-105 duration-500">
                <Link href={{pathname: '/weather-details'}} className="flex justify-between items-center">
                <div className="h-32">
                    <div className="">
                    <h4 className="font-bold text-xl">{dateName}</h4>
                        <p>Temperature: {Math.round(data[0].values.temperature)}°C</p>
                        <p>Humidity: {Math.round(data[0].values.humidity)}%</p>
                        <p>Wind Speed: {Math.round(data[0].values.windSpeed)} km/h</p>
                    </div>
                </div>
                    <div className="flex flex-col items-center h-32">
                        <h4 className="font-bold text-xl">Hourly Forecast</h4>
                        <div className="flex gap-10 mt-2">
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
                <Image width={150} height={150} alt="none" src={'https://cdn-icons-png.flaticon.com/512/4834/4834559.png'} />
            </Link>
            </div>
    )
}