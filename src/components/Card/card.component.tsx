import Image from "next/image"

export const CardComponent = ({}) => {
    return (
        <div className="bg-gray-500 border rounded-lg w-full p-6 flex justify-between items-center ">
            <div>
                <h2 className="font-bold text-xl">Tuesday</h2>
                <p>Temperature: 45</p>
                <p>Humidity: 45%</p>
                <p>Wind Speed: 45%</p>
            </div>
            <Image width={100} height={100} alt="none" src={'https://cdn-icons-png.flaticon.com/512/4834/4834559.png'} />
        </div>
    )
}