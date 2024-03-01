import Image from "next/image"
import { IconType } from "react-icons"
import { WiStrongWind } from "react-icons/wi"

export const SmallCardComponent = ({date, temperature, wind, weatherCode}:{date: number, temperature?: string | null, wind?: string | null, weatherCode?: number | null}) => {
    return (
            <div className="flex min-w-32 shadow-lg h-3/4 border p-6 rounded-xl flex-col justify-center items-center bg-hoverBlue border-darkBlue">
                                    <p className="font-semibold">{date}:00</p>
                                    {
                                        wind ? <WiStrongWind color="white" size={50} /> : <Image width={50} height={50} alt="none" src={`/images/${weatherCode}0.png`} />
                                    }
                                    <p className="font-semibold">
                                        {temperature ? `${temperature} °C` : '' || wind ? `${wind} km/h` : ''} 
                                    </p>
                                </div>
    )
}