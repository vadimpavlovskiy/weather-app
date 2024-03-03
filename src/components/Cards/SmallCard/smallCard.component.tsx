import Image from "next/image"
import { WiStrongWind } from "react-icons/wi"

export const SmallCardComponent = ({date, temperature, wind, weatherCode}:{date: number, temperature?: string | null, wind?: string | null, weatherCode?: number | null}) => {
    return (
            <div className="flex min-w-36 shadow-lg h-3/4 p-6 rounded-xl flex-col justify-center items-center bg-hoverBlue border-2 border-borderLight dark:bg-hoverBlue dark:border-borderGrey">
                <p className="font-semibold">{date}:00</p>
                    {
                        wind ? <WiStrongWind size={50} /> : <Image width={50} height={50} alt="none" src={`/images/${weatherCode}0.png`} />
                    }
                <p className="font-semibold">
                    {temperature ? `${temperature} °C` : '' || wind ? `${wind} km/h` : ''} 
                </p>
            </div>
    )
}