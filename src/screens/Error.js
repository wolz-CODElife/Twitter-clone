import React from 'react'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import './css/Error.css'

const Error = () => {
    return (
        <div className="error">
            <Link className="error_back_button"><HomeRoundedIcon /> Back to Home</Link>
            <img src="https://i.postimg.cc/pXpWB9dr/404-Error-Page-not-Found-with-people-connecting-a-plug-amico.png" alt="Web illustrations by Storyset" className="" />
            <a href="https://storyset.com/web">Web illustrations by Storyset</a>
        </div>
    )
}

export default Error
