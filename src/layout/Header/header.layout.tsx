import { SearchComponent } from "@/components/Search/search.component"
import { useGetDataHook } from "@/hooks/GetWeatherData/getDataHook"

export const HeaderLayout = ({}) => {
    
    return (
        <header className='flex justify-center mt-5'>
            <SearchComponent />
        </header>
    )
}