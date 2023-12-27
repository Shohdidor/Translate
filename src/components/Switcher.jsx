import useDarkSide from "../hooks/useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

export default function Switcher () {
    const [ colorTheme , setTheme ] = useDarkSide ()
    const [ darkSide ,setDarkSide ] = useState (
        colorTheme === "light" ? true  : false 
    )
    const toggleDarkMode = ( checked ) => {
        setTheme ( colorTheme )
        setDarkSide ( checked )
    }
    return (
        <>
        <div className="flex justify-end">
            <DarkModeSwitch 
            className="text-amber-600
            transition-[1s] 
            hover:text-sky-500"
            checked = { darkSide }
            onChange = { toggleDarkMode }
            size = { 36 }
            />
        </div>
        </>
    )
}