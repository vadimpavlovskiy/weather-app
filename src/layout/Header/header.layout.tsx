import { SearchComponent } from "@/components/Search/search.component"

export const HeaderLayout = ({}) => {
    return (
        <header className='flex justify-center mt-5'>
            <SearchComponent />
        </header>
    )
}