import './NavBar.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDarkMode } from './Accessibility/Darkmode';



const NavButton = ({ text, path }) => {
    const navigate = useNavigate()
    return (
        <button className='nav-button' onClick={() => navigate(path)}>

            {text}

        </button>
    )

}

const NavBar = () => {
    const navigate = useNavigate()
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={`nav-container ${darkMode ? 'dark-mode' : ''}`}>
            {/* this allows you to press onto the heading component and it will take you to the home page  */}
            <h1 className='home-heading' onClick={() => navigate('/')}>Riget Zoo Adventures</h1>
            <div className='dark-mode-toggle-container'>
                <button className='dark-mode-toggle' onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <div className='nav-buttons'>

                <NavButton text="What's here" path="/What's here" />
                <NavButton text="Education" path="/Education" />
                <NavButton text="Book tickets" path="/Book tickets" />
                <NavButton text="Book a hotel" path="/Book a hotel" />
            </div>
            <div className='auth-btn'>
                <NavButton text="Login" path="/Login" />
                <NavButton text="Register" path="/Register" />
            </div>


        </div>

    )
}

export default NavBar;