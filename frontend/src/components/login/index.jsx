import React from 'react';
import { AuthContext } from '../../context/Auth';
import { useContext } from 'react';
import './login.css';
import '../../utilities.css'
import {Link} from 'react-router-dom'
const Login= ()=>{
    const {email, setEmail,password,setPassword} = useContext(AuthContext);

    return(
        <>
        <h1 className='title'>Quizy</h1>
        <h3>Login</h3>
        <div className='login-form'>
            <form>
                <div className='flex space-between mt-3'>
                    <label>Email</label>
                    <input type="text"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                    />
                </div>
                <div className='flex space-between mt-6'>
                    <label>Password</label>
                    <input type="text"
                    value={password}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                    />
                </div>

                <button type='submit' className='login-btn'>Login</button>

            </form>
            
        </div>

        <br />
        <p className='linkto mt-4'>Not a student yet ? Start your <Link to="signup" className='links'>jouney now</Link></p>
        </>
    )
}
export default Login;