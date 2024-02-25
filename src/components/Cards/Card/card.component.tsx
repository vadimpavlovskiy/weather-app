import Image from "next/image"
import Link from "next/link";
export const CardComponent = ({data}:any) => {
    const dateName = new Date(data[0].startTime).toLocaleString('en-us', {weekday: 'long', day: 'numeric', month: 'short'});
    const middleofDay:number = Math.round(data.length/2);

    const temperature = data[middleofDay].values.temperature;
    const windSpeed = data[middleofDay].values.windSpeed;
    const humidity = data[middleofDay].values.humidity;
    return (
        <div className="bg-darkBlue text-white border border-borderGrey rounded-lg w-full p-6 cursor-pointer hover:bg-hoverBlue hover:scale-105 duration-500">
            <Link href={{pathname: '/weather-details'}} className="flex justify-between items-center">
                <div>
                    <h4 className="font-bold text-xl">{dateName}</h4>
                    <p className="text-lg">Temperature: <span className="font-bold text-base">{Math.round(temperature)}°C</span></p>
                    <p className="text-lg">Humidity: <span className="font-bold text-base">{Math.round(humidity)}%</span></p>
                    <p className="text-lg">Wind Speed: <span className="font-bold text-base">{Math.round(windSpeed)}km/h</span>  </p>
                </div>
                <Image width={100} height={100} alt="none" src={'https://cdn-icons-png.flaticon.com/512/4834/4834559.png'} />
            </Link>
        </div>
    )
}