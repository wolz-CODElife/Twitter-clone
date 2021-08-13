import React from 'react'
import './css/Index.css'
import TwitterIcon from '@material-ui/icons/Twitter';

const Index = () => {
    return (
        <div className="index">
            <div className="index_form">
                <TwitterIcon fontSize="large" />
                <h1>Log in to Twitter</h1>
                <form>
                    <input type="text" placeholder="Telephone number, email or username" />
                    <input type="password" />
                    <button type="submit">Login</button>
                </form>
                <p>                    
                    <a href="">forgotten password?</a> . <a href="">Register on Twitter</a>
                </p>
            </div>
        </div>
    )
}

export default Index
