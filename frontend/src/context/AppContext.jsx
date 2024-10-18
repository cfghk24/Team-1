import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();
const currencySymbol = '$';
const value = {doctors, currencySymbol}

const AppContextProvider = (props) => {
    
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;