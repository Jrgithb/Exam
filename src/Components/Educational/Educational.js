import './Educational.css'
import React from 'react';
import { useDarkMode } from '../NavBar/Accessibility/Darkmode';
import { useEffect } from 'react';

const Card = ({ title, imageUrl, body }) => {
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
        <div className='card-container' style={{ backgroundColor: 'green' }}>

            <div className='card-help'>
                <h2>Educational help</h2>
            </div>

        </div>
    )
}

const Card2 = ({ title, imageUrl, body }) => {
    return (
        <div className='card-container' style={{ backgroundColor: 'green' }}>

            <div className='card-help'>
                <h2>Educational help</h2>
            </div>

        </div>
    )
}

const Card3 = ({ title, imageUrl, body }) => {
    return (
        <div className='card-container' style={{ backgroundColor: 'green' }}>

            <div className='card-help'>
                <h2>Educational help</h2>
            </div>

        </div>
    )
}

const Card4 = ({ title, imageUrl, body }) => {
    return (
        <div className='card-container' style={{ backgroundColor: 'green' }}>

            <div className='card-help'>
                <h2>Educational help</h2>
            </div>

        </div>
    )
}
const Educational = () => {

    return (
        <div className='educacional-help-container'>
            <h1>Book your educational visits here</h1>
            <div className='card-wrap'>
                <Card />
                <Card2/>
                <Card3/>
                <Card4/>
            </div>
            {/* <form action=''>
                <div className='input-type'>
                    <input type='text' placeholder='First name' required />
                </div>
                <div className='input-type'>
                    <input type='email' placeholder='Surname' required />
                </div>
                <div className='input-type'>
                    <input type='text' placeholder='Enter email' required />
                </div>
                <div className='input-type'>
                    <input type='text' placeholder='Enter phone number' required />
                </div>
                <div className='input-type'>
                    <input type='text' placeholder='' required />
                </div>
                <div className='input-type'>
                    <input type='email' placeholder='' required />
                </div>
                <div className='input-type'>
                    <input type='password' placeholder='' required />
                </div>
                <div className='input-type'>
                    <input type='password' placeholder='' required />
                </div>
                <div className='input-type'>
                    <input type='text' placeholder='' required />
                </div>
                <div className='input-type'>
                    <input type='email' placeholder='' required />
                </div>
                <div className='input-type'>
                    <input type='password' placeholder='' required />
                </div>
                <div className='input-type'>
                    <input type='password' placeholder='' required />
                </div>
                <button className='btn-sub' type='submit'>Submit</button>
                

            </form> */}


        </div>
    )
};

export default Educational;