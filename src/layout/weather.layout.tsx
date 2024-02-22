import { CardComponent } from "@/components/card.component"
import { CardTodayComponent } from "@/components/cardToday.component"

export const WeatherLayout = ({}) => {
    return (
        <div className="grid grid-cols-3 my-6 gap-10 justify-items-center">
            <CardTodayComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </div>
    )
}