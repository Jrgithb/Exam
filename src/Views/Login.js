import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import { useDarkMode } from '../Components/NavBar/Accessibility/Darkmode';



const Login = () => {
    const navigate = useNavigate();
    const { darkMode } = useDarkMode();

    // Apply dark mode class to the body element based on dark mode state
    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);
    return (
        <div className='login-container' >
            <form action=''>
                <h1 className='header'>Login Form</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                </div>
                <button className='sub-btn' type='submit'>Login</button>
                <div className='register-contain'>
                    <button className='no-login' onClick={() => navigate('/Register')}>Don't have an account? Register</button>

                </div>

            </form>


        </div>

    )
}

export default Login;