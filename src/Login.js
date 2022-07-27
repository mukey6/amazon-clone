import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const [email, serEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn =e => {
        e.preventDefault()
        // firebase login

    }
    const signUp = e =>{
        e.preventDefault()
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth)
        })
        .catch(error => alert(error.message))
        // firenase
    }
  return (
    <div className='login'>
        <Link to="/">
        
        <img className='login_logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />
        </Link>
        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => serEmail(e.target.value)}></input>

                <h5>Password</h5>
                <input value={password}  type="password" onChange={e => setPassword(e.target.value)}></input>

                <button type="submit" className='login_signin' onClick={signIn}>Sign In</button>
            </form>
            <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className='login_signup' onClick={signUp}>Create Amazon Account</button>
        </div>

    </div>
  )
}

export default Login