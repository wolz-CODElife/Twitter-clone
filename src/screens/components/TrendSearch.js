import React from 'react'
import './TrendSearch.css'

const TrendSearch = ({Icon}) => {
    return (
        <div className="trends_search">
            <Icon />
            <input type="text" placeholder="Search Twitter" className="trends_search_input" />
        </div>
    )
}

export default TrendSearch
