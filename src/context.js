import React, {useState, useContext } from 'react';
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isToggle, setToggle] = useState(false)

    const toggleClass = () => {
        console.log('click')
        setToggle(!isToggle);
    }

    const closeToggle = () => {
        setToggle(false)
    }
    return (
        <AppContext.Provider
        value= {{ isToggle, 
                toggleClass,
                closeToggle
                }} >
                    {children}
                </AppContext.Provider> 
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext}