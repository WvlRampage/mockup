import React from 'react'
import './menu.scss'

class Menu extends React.Component{

    render(){
        return(
            <div className='menu'>
                <div className='menu_box'>
                <i class="fas fa-home"></i><span>Home</span>
                </div>
                <div className='menu_box'>
                    Messages
                </div>
                <div className='menu_box'>
                    Wishlist
                </div>
                <div className='menu_box'>
                    Settings
                </div>
                <div className='menu_box'>
                    My Account
                </div>
            </div>
        )
    }
}

export default Menu