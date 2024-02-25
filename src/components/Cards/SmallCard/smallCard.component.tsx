import Image from "next/image"

export const SmallCardComponent = ({date, temperature, wind}:{date: number, temperature?: string | null, wind?: string | null}) => {
    return (
            <div className="flex min-w-32 shadow-lg h-3/4 border p-6 rounded-xl flex-col justify-center items-center bg-hoverBlue border-darkBlue">
                                    <p>{date}:00</p>
                                    <Image width={30} height={30} alt="none" src={'https://cdn-icons-png.flaticon.com/512/4834/4834559.png'} />
                                    <p>
                                        {temperature ? `${temperature} °C` : '' || wind ? `${wind} km/h` : ''} 
                                    </p>
                                </div>
    )
}