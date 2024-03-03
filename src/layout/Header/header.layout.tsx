import { SearchComponent } from "@/components/Search/search.component"
import ThemeSwitcher from "@/components/ThemeSwitcher/themeSwitcher"

export const HeaderLayout = ({}) => {
    
    return (
        <header className='flex justify-between mt-5 items-center'>
            <SearchComponent />
            <ThemeSwitcher />
        </header>
    )
}