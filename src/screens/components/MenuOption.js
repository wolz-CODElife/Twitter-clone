import React from 'react'
import './MenuOption.css'

const MenuOption = ({Icon, title, more, link, logout}) => {
    return (
        <p className={more? 'menu_option more': 'menu_option'} onClick={() => logout&& logout()}  style={{ cursor: 'pointer' }}>
            <a href={link} title={title} className="menu">
                <Icon fontSize="large" className="menu_icon" />
                <span className="menu_title">{ title }</span>
            </a>
        </p>
    )
}

export default MenuOption
