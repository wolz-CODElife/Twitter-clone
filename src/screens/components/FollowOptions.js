import React from 'react'
import './FollowOption.css'

const FollowOptions = ({image, title, isfollowing, username}) => {
    return (
        <div className="followOption">
            <img src={image} className="followOption_image" alt={title} />
            <div className="followOption_info">             
                <h3>{title}</h3>
                <p>@{username} { isfollowing && <span className="follow_tag">Follow you</span> }</p>
            </div>
            <button className="followOption_button">Follow</button>
        </div>
    )
}

export default FollowOptions
