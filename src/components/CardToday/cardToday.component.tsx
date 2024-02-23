import Image from "next/image"

export const CardTodayComponent = ({}) => {
    return (
        <div className="bg-gray-500 border rounded-lg w-full p-6 col-span-3 flex justify-between items-center">
            <div>
                <h4 className="font-bold text-xl">Monday</h4>
                <p>Temperature: 45</p>
                <p>Humidity: 45%</p>
                <p>Wind Speed: 45%</p>
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