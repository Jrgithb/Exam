import './Whatshere.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useDarkMode } from '../Components/NavBar/Accessibility/Darkmode';


const Whatshere = () => {
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
        <div className='whats-here-container'>
            <div className='intro-contain'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxow-jeMnVs7ob5S2pzTig0Os1i7jDTRKGFpgtdv1abQ&s'/>
                <p className='text-overlay'>Need help finding your way around our zoo?</p>
                <p className='map-area'>Riget Zoo Adventures Map</p>

            </div>
            <div className='img-map'>
            <p className='map-sec'>This is the Riget Zoo Adventures map, which will show information of all the different facilities and attractions.</p>
                <img src='https://zooinstitutes.com/img/MAPS/1528032170_map.png.pagespeed.ce.T_pD_IoTFi.png'/>

            </div>
            <div>
            
            </div>
            
        </div>

    )

};


export default Whatshere;