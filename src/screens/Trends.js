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
            </div>
        </div>
    )
}

export default Trends
