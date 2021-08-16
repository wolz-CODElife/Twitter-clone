import React from 'react'
import { Link } from 'react-router-dom'
import './MenuOption.css'

const MenuOption = ({Icon, title, more, link, logout}) => {
    return (
        <p className={more ? 'menu_option more' : 'menu_option'} onClick={() => logout && logout()} style={{ cursor: 'pointer' }}>
            <Link to={link} title={title} className="menu">
                <Icon fontSize="large" className="menu_icon" />
                <span className="menu_title">{ title }</span>
            </Link>
        </p>
    )
}

export default MenuOption
