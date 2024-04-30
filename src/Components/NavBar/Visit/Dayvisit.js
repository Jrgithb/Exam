import './Dayvisit.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDarkMode } from '../Accessibility/Darkmode';

const Dayvisit = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };
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
        <div className='visit-container'>
            <div className='booking-contain-date'>
            <h2>Your booking</h2>
            <p>Select day</p>
            <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className='calendar'
                />
      
            </div>
            <div className='time-contain'>
                   <h2>Select time</h2>
                   <p>10:00-16:30</p>
                   <p>pre-booked entry</p>
            </div>
            <div className='ticket-payment'>
                <h2>Day ticket prices</h2>
                <p>Tickets</p>
                <p>Details</p>
                <p>Price</p>
            </div>
            
        </div>
    )
};

export default Dayvisit;