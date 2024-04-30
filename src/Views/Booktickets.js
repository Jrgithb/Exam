import './Booktickets.css'
import React from 'react';
import { useDarkMode } from '../Components/NavBar/Accessibility/Darkmode';
import { useNavigate } from 'react-router-dom';



const Card = ({ title, imageUrl, body }) => {
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
        <div className='card-container'>
            <div className='card-image'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5so3zfEPYyQ79DLLl9J5JF6MGhDcMksfeX8AUAnjt_A&s' />
            </div>
            <div className='card-title'>
                <h2>Day visit pass</h2>
            </div>
            <div className='card-body'>
                <button className='card-btn' onClick={() => navigate('/Dayvisit')}>Book now</button>

            </div>


        </div>
    )
}

const Card2 = () => {
    const navigate = useNavigate()
    return (
        <div className='card-container'>
            <div className='card-image'>
                <img src='https://oldsite.callofthewildzoo.co.uk/wp-content/uploads/2021/12/annual-pass-1.png' />
            </div>
            <div className='card-title'>
                <h2>Annual pass</h2>
            </div>
            <div className='card-body'>
                <button className='card-btn' onClick={() => navigate('/Annual')}>Book now</button>

            </div>

        </div>
    )
}

const Booktickets = () => {
    return (
        <div className='ticket-container'>
            <div className='head-contain'>
                <h1 className='ticket-booking'>Book your tickets here:</h1>
            </div>
            <div className='safari-background'>
                <img src='https://media.istockphoto.com/id/1412263287/vector/african-savannah-landscape-with-green-trees-and-plain-grassland-field-under-blue-clear-sky.jpg?s=612x612&w=0&k=20&c=MGzEOjyD93dHJhTP5aYu34YNngR_AWT6UGIR7GT3i1I=' />
            </div>
            <div className='card-wrapper'>
                <Card />
                <Card2 />
            </div>
        </div>

    )
};

export default Booktickets;