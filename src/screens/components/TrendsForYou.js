import React from 'react'
import './TrendsForYou.css'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import TrendOption from './TrendOption';

const TrendsForYou = () => {
    const trends = [
        {
            category: 'Other competition · Trending',
            title: 'Liquorose',
            tweetCounts: '26.9K'
        },
        {
            category: 'Politics · Trending',
            title: 'Trump',
            tweetCounts: '578K'
        },
        {
            category: 'Music · Trending',
            title: 'Wizkid',
            tweetCounts: '127K'
        },
        {
            category: 'Reality TV · Trending',
            title: '#BBNaija6',
            tweetCounts: '47.7K'
        },
    ]
    return (
        <div className="trendsforyou">
            <div className="trendsforyou_header">
                <h3>Trends for you</h3>
                <SettingsOutlinedIcon />
            </div>
            {trends.map(trend => <TrendOption key={trend.title} category={trend.category} title={trend.title} tweetCounts={trend.tweetCounts} />)}
            <div className="trendsforyou_footer">
                <a href="/">Show more</a>
            </div>
        </div>
    )
}

export default TrendsForYou
