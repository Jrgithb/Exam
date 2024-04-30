import './Planvisit.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useDarkMode } from '../Accessibility/Darkmode';

const Card = () => {
    return(
        <div>

        </div>
    )
}



const Planvisit = () => {
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
        <div className='plan-day-container'>

        </div>
    )
};

export default Planvisit;