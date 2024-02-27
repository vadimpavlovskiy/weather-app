import Image from "next/image"
import { IconType } from "react-icons"
import { WiStrongWind } from "react-icons/wi"

export const SmallCardComponent = ({date, temperature, wind, Icon}:{date: number, temperature?: string | null, wind?: string | null, Icon:IconType}) => {
    return (
            <div className="flex min-w-32 shadow-lg h-3/4 border p-6 rounded-xl flex-col justify-center items-center bg-hoverBlue border-darkBlue">
                                    <p className="font-semibold">{date}:00</p>
                                    <Icon color="white" size={30} />
                                    <p className="font-semibold">
                                        {temperature ? `${temperature} °C` : '' || wind ? `${wind} km/h` : ''} 
                                    </p>
                                </div>
    )
}