import React, { useEffect, useState } from 'react'
import './css/Index.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import useStateValue from '../StateProvider';
import db, { auth, provider } from '../firebase';

const Login = ({useHistory}) => {
    const history = useHistory()
    const [{ user }, dispatch] = useStateValue()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = (e) => {
        e.preventDefault()
        if (email && password) {
            db.collection('users').where('email', '==', email).get()
                .then(users => {
                    if (users.empty) {
                        alert('Invalid Credentials, sign up with google')
                        return
                    }
                    else {
                        users.docs.map(doc => {
                            localStorage.setItem('user', JSON.stringify(doc.data()))
                            dispatch({ type: 'SET_USER', user: doc.data() })
                        })
                    }
                }
            )
        }
    }
    const googleSignin = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                const newGoogleUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }
                db.collection('users').add(newGoogleUser)
                localStorage.setItem('user', JSON.stringify(newGoogleUser))
                dispatch({
                    type: 'SET_USER',
                    user: newGoogleUser
                })
            })
            .catch(error => console.log(error.message))
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
                    <input type="text" placeholder="Email" className="index_form_input" value={email} onChange={(e) => setEmail(e.target.value) } />
                    
                    <input type="password" placeholder="Password" className="index_form_input" value={password} onChange={(e) => setPassword(e.target.value) } />
                    
                    <button type="submit" className="index_form_button" disabled={email==='' || password===''?'disabled': false}>Login</button>
                </form>
                <p>or</p>
                <button type="button" className="index_form_google_button" onClick={() => googleSignin()}><img src="https://i.postimg.cc/W4dKZSH5/image.png" alt="" /> </button>
                <p>                    
                    <a href="/" disabled="disabled" className="index_form_link">forgotten password?</a>
                </p>
            </div>
        </div>
    )
}

export default Login
