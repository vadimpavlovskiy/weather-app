'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import Switch from "react-switch";


const ThemeSwitcher = ({}) => {
    const [mounted, setMounted] = useState(false)

    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }
    
    return (
        <div className="w-1/3 flex justify-end">
            <div className="w-max cursor-pointer duration-500 p-1 rounded-xl">
            </div>
            <Switch 
            height={40} 
            width={90}
            onChange={()=>{theme === 'light' ? setTheme('dark') : setTheme('light')}} 
            checked={theme === 'dark' ? true : false} 
            checkedIcon={<MdOutlineWbSunny color="white" className="absolute top-2.5 left-1.5 rounded-2xl " size={22} />} 
            uncheckedIcon={<IoIosMoon size={24} className="absolute right-1 top-2" color="white" />}
            onColor="#413AAB"
            offColor="#ECE9FA"
            onHandleColor={'#221C44'}
            offHandleColor={'#413AAB'} 
            checkedHandleIcon	={<IoIosMoon size={24} color="white" className="absolute top-1.5 left-1.5" />} 
            uncheckedHandleIcon={<MdOutlineWbSunny color="white" className="absolute top-1.5 left-1.5" size={24} />}/>
        </div>
    )
}
export default ThemeSwitcher