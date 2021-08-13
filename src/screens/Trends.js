import React from 'react'
import './css/Trends.css'
import SearchIcon from '@material-ui/icons/Search';
import TrendSearch from './components/TrendSearch';
import TrendsForYou from './components/TrendsForYou';
import WhoToFollow from './components/WhoToFollow';

const Trends = () => {
    return (
        <div className="trends">
            <TrendSearch Icon={SearchIcon} />
            <div className="trends_body">
                <TrendsForYou />
                <WhoToFollow />
                <div className="trends_links">
                    <a href="/">Terms of service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Cookie Policy</a>
                    <a href="/">Ads info</a>
                    <a href="/">More...</a>
                    <a href="/">@2021 Twitter, Inc.</a>
                </div>
            </div>
        </div>
    )
}

export default Trends
