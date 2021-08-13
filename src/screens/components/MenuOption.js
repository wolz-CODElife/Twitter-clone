import React from 'react'
import './MenuOption.css'

const MenuOption = ({Icon, title, more, link}) => {
    return (
        <p className={more? 'menu_option more': 'menu_option'}>
            <a href={link} title={title} className="menu">
                <Icon fontSize="large" className="menu_icon" />
                <span className="menu_title">{ title }</span>
            </a>
        </p>
    )
}

export default MenuOption
