import React,{useState} from 'react'
import "./Login.css"
import {Link,useHistory} from "react-router-dom"
import { auth } from './firebase';



function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email);



    function login(event){
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/")
        })
        .catch((e)=>alert(e.message))
    }

    function register(event){
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
        })
        .catch((e)=>alert(e.message))
    }

    return (
        <div className="Login">
        <Link to ='/'>
        <img className="loginlogo" src ="https://blog.logomyway.com/wp-content/uploads/2017/02/amazon-logo-1.jpg" alt=""/>
        </Link>

        <div className="login_container">
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input value ={email} onChange={event => setEmail(event.target.value)} type="text" placeholder="E-mail"/>
                <h5 value ={password} onChange={event => setPassword(event.target.value)}> Password</h5>
                <input type="password" placeholder="Password"/>
                <button onClick={login} className="login_button" type="submit">Sign In</button>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button onClick={register} className="register_button">Create your Amazon Account</button>

            </form>
        </div>
        </div>
    )
}

export default Login
