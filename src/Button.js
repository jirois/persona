import React from 'react';
import { useGlobalContext } from './context'
const Button = () => {
    const {isToggle, toggleClass } = useGlobalContext()
    return (
        <div 
        onClick={toggleClass}
        className={`
            ${ isToggle ? 'menu-icon open': 'menu-icon'}
        `}>
            <span></span>   
            <span></span>   
            <span></span>
        </div>
    )
}
export default Button;