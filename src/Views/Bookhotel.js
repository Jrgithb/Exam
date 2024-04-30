import './Bookhotel.css'
import React from 'react';
import { useDarkMode } from '../Components/NavBar/Accessibility/Darkmode';
import { useNavigate } from 'react-router-dom';



const Bookhotel = () => {
    const navigate = useNavigate()
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
        <div className='hotel-container'>
            <div className='nearby-hotel'>
                <h2>Nearby Hotels</h2>
                <p>Want to stay overnight?take a look at some of our hotels nearby.</p>
                <button className='hotel-book-btn' onClick={() => navigate('/Hotel')}>Book Now</button>
                <div className='hotel-img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxwp9UZAPMmc1laFftIj3ypxUOzUAA4nuQbe-KhomtMg&s" />
                </div>

            </div>

        </div>

    )
};

export default Bookhotel;