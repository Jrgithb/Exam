import './Home.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useDarkMode } from '../Components/NavBar/Accessibility/Darkmode';


const Home = () => {
    const navigate = useNavigate("/")
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
        <div className='home-container'>
            <img src="https://t4.ftcdn.net/jpg/04/15/79/09/240_F_415790935_7va5lMHOmyhvAcdskXbSx7lDJUp0cfja.jpg" />
            <div className='img-container'>
                <p className='writing-sec'>Want to explore all the different animals?</p>
                <h3>Visit Riget Zoo Adventures</h3>
                <button className='ticket' onClick={() => navigate('/Book tickets')}>Book tickets now</button>
            </div>
            <div className='body-container'>
                <p className='welcome-text'>Welcome to Riget Zoo Adventures, which is home to all different species of birds, mammals and many more.</p>
                <img className='img-2' src='https://www.treehugger.com/thmb/a5dJ_s0Oo0EhoijeUickMWVa9Zw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sumatran-tiger-portrait-159189168-c3bc4edd6d854dd49cd63927e9565cf1.jpg' />
            </div>
            <div>
                <h2>Plan your Visit</h2>
                <p>Here you can plan your trip and find information such as opening hours, how to get here, and the prices</p>
                <button className='plan-btn' onClick={() => navigate('/Planvisit')}>Plan your visit</button>
            </div>





        </div>

    )
};

export default Home;


{/* <div className='footer'>
                <p>Footer</p>
                
            </div> */}