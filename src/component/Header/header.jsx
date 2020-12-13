import React from 'react';
import './header.css'
const Header = (props) => {
    const {isShow} =props
    return ( 
        <div className="Header">
            <span className='tittle'>事件待办</span>
            <span className='add' onClick={isShow}>+</span>


        </div>
     );
}
 
export default Header;