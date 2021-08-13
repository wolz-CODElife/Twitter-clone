import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './css/Home.css'
import useStateValue from '../StateProvider'
import PostList from './PostList'
import Sidebar from './Sidebar'
import Trends from './Trends'

const Home = () => {
    const history = useHistory()
    const [{ user }, dispatch] = useStateValue()
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            history.push('/')
        }
        dispatch({type: 'SET_USER', user: JSON.parse(localStorage.getItem('user'))})
    }, [user, history])

    return (
        <div className="layout">
            <div className="layout_main">
                <Sidebar />               
                <PostList />
            </div>
            <div className="layout_extra"> 
                <Trends />
            </div>
        </div>
    )
}

export default Home
