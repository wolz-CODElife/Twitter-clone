import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useStateValue from '../StateProvider'

const Home = () => {
    const history = useHistory()
    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
    }, [user])
    return (
        <div>
            <h1>This is home</h1>
        </div>
    )
}

export default Home
