import React, { useEffect, useState } from 'react'
import './css/Index.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import useStateValue from '../StateProvider';

const Login = ({useHistory}) => {
    const history = useHistory()
    const [{ user }, dispatch] = useStateValue()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = (e) => {
        e.preventDefault()
        if (email && password) {
            const newUser = { name: 'Joel', email: email, password: password }
            localStorage.setItem('user', JSON.stringify(newUser))
            dispatch({ type: 'SET_USER', user: newUser })
        }
    }
    useEffect(() => {
        if (localStorage.getItem('user')) {
            history.push('/home')
        }
    }, [user, history])
    return (
        <div className="index">
            <div className="index_form">
                <TwitterIcon fontSize="large" />
                <h1>Log in to Twitter</h1>
                <form onSubmit={e => onLogin(e)}>
                    <input type="text" placeholder="Telephone number, email or username" className="index_form_input" value={email} onChange={(e) => setEmail(e.target.value) } />
                    
                    <input type="password" placeholder="Password" className="index_form_input" value={password} onChange={(e) => setPassword(e.target.value) } />
                    
                    <button type="submit" className="index_form_button" disabled={email==='' || password===''?'disabled': false}>Login</button>
                </form>
                <p>                    
                    <a href="/" className="index_form_link">forgotten password?</a> . <a href="/" className="index_form_link">Register on Twitter</a>
                </p>
            </div>
        </div>
    )
}

export default Login
