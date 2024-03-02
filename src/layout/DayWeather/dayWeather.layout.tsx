import { SmallCardComponent } from "@/components/Cards/SmallCard/smallCard.component";
import { Interval, IntervalData } from "@/types/data"
import Image from "next/image"
import { HourForecastLayout } from "../HourForecast/hourForecast.layout";
import { WindForecastLayout } from "../WindForecast/windForecast.layout";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { GoArrowDown } from "react-icons/go";
import { WiStrongWind } from "react-icons/wi";
import { FaTemperatureHalf } from "react-icons/fa6";
import { WeatherDetailComponent } from "@/components/WeatherDetailCard/weatherDetailCard.component";
import { BsGeoAlt } from "react-icons/bs";




export const DayWeatherLayout = ({data, day, city}:{data: Interval[], day:number, city:string | null}) => {
    const formatedDate = new Date(day).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'});
    const sunSetTime = new Date(data[0].values.sunsetTime).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
    const sunRiseTime = new Date(data[0].values.sunriseTime).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
    const middleArray = Math.round((data.length / 2)-1);

    console.log(middleArray);
    
    return (
        <div className="text-white bg-light rounded-xl mt-10 p-10 dark:bg-darkBlue duration-500">
            <div className="w-full flex justify-between">
                <div className="flex p-6 rounded-xl items-center border-2 bg-hoverBlue  border-borderLight dark:border-borderGrey dark:bg-dark duration-500">
                    <div className="rounded-full p-6 dark:bg-hoverBlue ">
                        <Image width={150} height={150} alt="none" src={`/images/${data[middleArray].values.weatherCode}0.png`} />
                    </div>
                </div>
                    <div className="flex flex-col ml-10 w-full h-full p-6 rounded-xl border-2 bg-hoverBlue border-borderLight dark:bg-dark dark:border-borderGrey">
                        <div className="w-full flex items-center justify-between">
                            <h2 className="font-bold text-2xl dark:text-white">{formatedDate}</h2>
                            <div className="flex text-bold text-sm dark:text-white">
                                <BsGeoAlt size={20} />
                                <span className="ml-1">{city}</span>
                            </div>
                        </div>
                        <div className="mt-6 bg-light  grid justify-items-center grid-cols-3 gap-4  p-6 rounded-xl border-2 border-borderLight dark:text-white dark:border-borderGrey dark:bg-darkBlue">
                        <WeatherDetailComponent>
                            <h4 className="font-semibold">Temperature</h4>
                            <div className="flex gap-4">
                                <FaTemperatureHalf size={30}/>
                                <p className="text-lg">{Math.round(data[middleArray].values.temperature)} °C</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                            <h4 className="text-sm font-semibold">Wind Speed</h4>
                            <div className="flex gap-4">
                                <WiStrongWind size={30} />
                                <p className="text-lg">{Math.round(data[middleArray].values.windSpeed)} km/h</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                            <h4 className="text-sm font-semibold">Sunset Time</h4>
                            <div className="flex gap-4">
                                <FiSunrise size={30} />
                                <p className="flex text-lg">{sunSetTime}</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                            <h4 className="text-sm font-semibold">Huminity</h4>
                            <div className="flex gap-4">
                                <WiHumidity size={30} />
                                <p className="text-lg">{Math.round(data[middleArray].values.humidity)} %</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                        <h4 className="text-sm font-semibold">Winter Direction</h4>
                            <div className="flex gap-4">
                                <GoArrowDown  size={30} />
                                <p className="text-lg">{Math.round(data[middleArray].values.windDirection)} °</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                        <h4 className="text-sm font-semibold">Sunrise Time</h4>
                        <div className="flex gap-4">
                                <FiSunset size={30} />
                                <p className="flex text-lg">{sunRiseTime}</p>
                        </div>
                        </WeatherDetailComponent>
                        </div>
                    </div>
            </div>
            <div>
                <HourForecastLayout data={data} />
                <WindForecastLayout data={data} />
            </div>
        </div>
    )
}
