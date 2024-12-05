import React from 'react';
import { AuthContext } from '../../context/Auth';
import { useContext } from 'react';
import './signup.css';
import '../../utilities.css';
import {Link} from 'react-router-dom'

const Signup = ()=>{
    
const {name,setName,registerEmail,setRegisterEmail,registerPassword,setregisterPassword} = useContext(AuthContext);

    return(
        <>
        <h1 className='title'>Quizy</h1>
        <div className='signup-form'>
            <form>
                <div className='flex space-between mt-3'>
                    <label>Name</label>
                    <input type="text"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    required
                    />
                </div>

                <div className='flex space-between mt-3'>
                    <label>Email</label>
                    <input type="text"
                    value={registerEmail}
                    onChange={(e)=>{setRegisterEmail(e.target.value)}}
                    required
                    />
                </div>
                <div className='flex space-between mt-3'>
                    <label>Password</label>
                    <input type="text"
                    value={registerPassword}
                    onChange={(e)=>{setregisterPassword(e.target.value)}}
                    required
                    />
                </div>

                <button type='submit' className='signup-btn'>Signup</button>

            </form>
            
        </div>

        <br />
        <p className='linkto mt-4'>Already registered?<Link to="/" className='links'> Login </Link> now!</p>
        </>
    )
}

export default Signup;