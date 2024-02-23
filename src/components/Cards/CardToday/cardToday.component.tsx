import Image from "next/image"
import { IProps } from "../card"

export const CardTodayComponent = ({props}:IProps) => {
    const dateName = new Date(props.startTime).toLocaleString('en-us', {weekday: 'long', day: 'numeric', month: 'short'}) 
    return (
        <div className="bg-gray-500 border rounded-lg w-full p-6 col-span-6 flex justify-between items-center cursor-pointer hover:bg-gray-400 hover:scale-105 duration-500">
            <div>
                <h4 className="font-bold text-xl">{dateName}</h4>
                <p>Temperature: {Math.round(props.values.temperature)}°C</p>
                <p>Humidity: {Math.round(props.values.humidity)}%</p>
                <p>Wind Speed: {Math.round(props.values.windSpeed)} km/h</p>
            </div>
            <div>
                <h4 className="font-bold text-xl">Hourly Forecast</h4>
                <div className="flex gap-2">
                    <div>
                        <p>6AM</p>
                        <p>+5</p>
                    </div>
                    <div>
                        <p>9AM</p>
                        <p>+7</p>
                    </div>
                    <div>
                        <p>12PM</p>
                        <p>+7</p>
                    </div>
                    <div>
                        <p>3PM</p>
                        <p>+7</p>
                    </div>
                    <div>
                        <p>6PM</p>
                        <p>+7</p>
                    </div>
                    <div>
                        <p>9PM</p>
                        <p>+7</p>
                    </div>
                </div>
            </div>
            <Image width={150} height={150} alt="none" src={'https://cdn-icons-png.flaticon.com/512/4834/4834559.png'} />
        </div>
    )
}