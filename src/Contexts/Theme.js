import { createContext, useContext } from "react";


//Giving the default values here

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider


//Creating a custom hook that will directly return the return useContext(ThemeContext)
export default function useTheme(){
    return useContext(ThemeContext)
}
