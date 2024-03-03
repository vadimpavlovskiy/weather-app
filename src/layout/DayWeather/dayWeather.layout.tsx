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
        <div className="text-white bg-light rounded-xl mt-10 p-10 dark:bg-darkBlue w-full duration-500">
            <div className="w-full h-full flex sm:flex max-md:flex-col max-sm:gap-4 sm:gap-y-4 justify-between">
                <div className="flex max-sm:w-full sm:w-full md:w-1/3 justify-center p-6 rounded-xl items-center border-2 bg-hoverBlue max-sm:gap-y-4 border-borderLight dark:border-borderGrey dark:bg-dark duration-500">
                    <div className="rounded-full p-6 dark:bg-hoverBlue">
                        <Image width={150} height={150} alt="none" src={`/images/${data[middleArray].values.weatherCode}0.png`} />
                    </div>
                </div>
                    <div className="flex flex-col md:ml-10 w-full h-full p-6 rounded-xl border-2 bg-hoverBlue border-borderLight dark:bg-dark dark:border-borderGrey">
                        <div className="w-full flex items-center justify-between max-sm:flex-col">
                            <h2 className="font-bold text-2xl dark:text-white">{formatedDate}</h2>
                            <div className="flex text-bold text-sm dark:text-white">
                                <BsGeoAlt size={20} />
                                <span className="ml-1">{city}</span>
                            </div>
                        </div>
                        <div className="w-full p-4 mt-6 bg-light grid justify-items-center max-sm:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-4 rounded-xl border-2 border-borderLight dark:text-white dark:border-borderGrey dark:bg-darkBlue">
                        <WeatherDetailComponent>
                            <h4 className="lg:font-semibold md:font-medium">Temperature</h4>
                            <div className="flex gap-4 items-center">
                                <FaTemperatureHalf size={30}/>
                                <p className="md:text-sm lg:text-lg">{Math.round(data[middleArray].values.temperature)} °C</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                            <h4 className="lg:font-semibold md:font-medium">Wind Speed</h4>
                            <div className="flex gap-4 items-center">
                                <WiStrongWind size={30} />
                                <p className="md:text-sm lg:text-lg">{Math.round(data[middleArray].values.windSpeed)} km/h</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                            <h4 className="lg:font-semibold md:font-medium">Sunset Time</h4>
                            <div className="flex gap-4 items-center">
                                <FiSunrise size={30} />
                                <p className="md:text-sm lg:text-lg">{sunSetTime}</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                            <h4 className="lg:font-semibold md:font-medium">Huminity</h4>
                            <div className="flex gap-4 items-center">
                                <WiHumidity size={30} />
                                <p className="md:text-sm lg:text-lg">{Math.round(data[middleArray].values.humidity)} %</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                        <h4 className="lg:font-semibold md:font-medium">Winter Direction</h4>
                            <div className="flex gap-4 items-center">
                                <GoArrowDown  size={30} />
                                <p className="md:text-sm lg:text-lg">{Math.round(data[middleArray].values.windDirection)} °</p>
                            </div>
                        </WeatherDetailComponent>
                        <WeatherDetailComponent>
                        <h4 className="lg:font-semibold md:font-medium">Sunrise Time</h4>
                        <div className="flex gap-4 items-center">
                                <FiSunset size={30} />
                                <p className="md:text-sm lg:text-lg">{sunRiseTime}</p>
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
