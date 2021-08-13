import React from 'react'
import './TrendOption.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const TrendOption = ({ category, title, tweetCounts }) => {
    return (
        <div className="trendOption">
            <div className="trendOption_info">
                <p>{category}</p>
                <h3>{title}</h3>
                <p>{ tweetCounts } Tweets</p>
            </div>
            <MoreHorizIcon />
        </div>
    )
}

export default TrendOption
