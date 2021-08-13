import React, { useState } from 'react'
import './NewPost.css'
import PublicIcon from '@material-ui/icons/Public';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

const NewPost = () => {
    const [tweet, setTweet] = useState('')
    return (
        <div className="newpost">
            <img src="https://pbs.twimg.com/profile_images/1330972427711619075/sARDqsaa_normal.jpg" className="newpost_image" />
            <form className="newpost_form">
                <textarea placeholder="What's happening?" onChange={(e) => setTweet(e.target.value)}></textarea>
                <button><PublicIcon /> Everbody can reply</button>
                <div className="newpost_options">
                    <div className="newpost_options_list">
                        <ImageOutlinedIcon />
                        <GifOutlinedIcon />
                        <EqualizerIcon style={{transform: 'rotate(90deg)'}} />
                        <SentimentSatisfiedOutlinedIcon />
                        <EventOutlinedIcon />
                    </div>
                    <button className="newpost_option_button" disabled={tweet==='' ? 'disabled' : false}>Tweet</button>
                </div>
            </form>
        </div>
    )
}

export default NewPost
