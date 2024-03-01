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
    const middleArray = Math.round(data.length/2);
    console.log(data[middleArray].values.temperature);
    
    return (
        <div className="bg-darkBlue rounded-xl mt-10 p-10">
            <div className="w-full flex justify-between">
                <div className="flex bg-dark p-6 rounded-xl items-center">
                    <div className="bg-hoverBlue rounded-full p-6">
                        <Image width={150} height={150} alt="none" src={`/images/${data[middleArray].values.weatherCode}0.png`} />
                    </div>
                </div>
                    <div className="flex flex-col ml-10 w-full h-full bg-dark p-6 rounded-xl">
                        <div className="w-full flex items-center justify-between">
                            <h2 className="font-bold text-2xl text-white">{formatedDate}</h2>
                            <div className="flex text-bold text-sm text-white">
                                <BsGeoAlt color="white" size={20} />
                                <span className="ml-1">{city}</span>
                            </div>
                        </div>
                        <div className="mt-6 text-white grid justify-items-center grid-cols-3 gap-4 bg-darkBlue p-6 rounded-xl border border-borderGrey">
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
                                <WiStrongWind color="white" size={30} />
                                <p className="text-lg">{Math.round(data[middleArray].values.windSpeed)} km/h</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                            <h4 className="text-sm font-semibold">Sunset Time</h4>
                            <div className="flex gap-4">
                                <FiSunrise color="white" size={30} />
                                <p className="flex text-lg">{sunSetTime}</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                            <h4 className="text-sm font-semibold">Huminity</h4>
                            <div className="flex gap-4">
                                <WiHumidity color="white" size={30} />
                                <p className="text-lg">{Math.round(data[middleArray].values.humidity)} %</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                        <h4 className="text-sm font-semibold">Winter Direction</h4>
                            <div className="flex gap-4">
                                <GoArrowDown color="white" size={30} />
                                <p className="text-lg">{Math.round(data[middleArray].values.windDirection)} °</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                        <h4 className="text-sm font-semibold">Sunrise Time</h4>
                        <div className="flex gap-4">
                                <FiSunset color="white" size={30} />
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
