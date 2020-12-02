import React from 'react';
import {links} from './data'
import {useGlobalContext} from './context'
const Sidebar = () => {
    const { isToggle, closeToggle } = useGlobalContext()
    return (
        
       <aside 
       onClick={closeToggle}
       className={
           `${isToggle ? 'sidebar open' : 'sidebar'}`
       }>
           <ul className="sidebar-content">
          {
              links.map((link, index) => {
                  const {url, text } = link;
                  return (
                  <li key={index}>
                      <a href={url}>
                          {text}
                          </a>
                  </li>
                  )
              })
          } 
    </ul>
    </aside> 
    )
}
export default Sidebar;