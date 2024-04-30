import './Hotel.css'
import React from 'react';
import { useDarkMode } from '../Accessibility/Darkmode';

const Hotel = () => {
    const { darkMode } = useDarkMode();

    // Apply dark mode class to the body element based on dark mode state
    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);
    return(
        <div className='hotel-stay'>
            <h2>Book a stay</h2>
            <div className='hotel-sec'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEs9m_96Eq3yopFbbCvaKk4mY7HuYb1MBYKi_WP99pg&s'/>
                <p>ugtugnunuenvonnvnvsfnvfjnvdjlnvdfnvljtntngonnvofnvdnlvnljnjsdfsbvrffvrftvbtbfdvbdbbbbbbbbtbtgbdfbynndgfbdbdfb</p>
                <button className='hotel-book'>Book Room</button>
            </div>
            <div className='hotel-content'>
                <img src='https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/125/2021/08/11060441/deluxe_harbour_web.jpg'/>
                <p>sggggggggggggggggrhegttttttttr4hjrrugheirughiuergeurgugeugrgevhveurheghrhuehreuhgoehguruehoruhhohgohogrughugeo</p>
                <button className='hotel-book-btn'>Book Room</button>
            </div>
            <div className='content-hotel'>
                <img src='https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen.jpg'/>
                <p>sggggggggggggggggrhegttttttttr4hjrrugheirughiuergeurgugeugrgevhveurheghrhuehreuhgoehguruehoruhhohgohogrughugeo</p>
                <button className='hotel-booking'>Book Room</button>
            </div>
        </div>
    )
};

export default Hotel;