import './Education.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useDarkMode } from '../Components/NavBar/Accessibility/Darkmode';

const Education = () => {
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
        <div className='education-container'>
            <img src='https://www.onlyinyourstate.com/wp-content/uploads/2018/05/19399542_10154948733397917_3323627639232695238_n.jpg' />
            <h2 className='education-text'>Get students closer to nature</h2>
            <button className='education-visit' onClick={() => navigate('/Educational')}>Book a trip</button>
            <p className='ed-text'>This is the education page where you will be able to book your educational trips and have students learn more about wild life.</p>
            <div className='ed-help'>

                <img className='zoo-text' src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-10/pexels-photo-811486.jpeg?itok=-rA4YGw0" style={{ height: '400px' }} />
                <button className='educational-visit' onClick={() => navigate('/Educational')}>Book Educational trips to Riget Zoo Adventures</button>
                <p className='btn-text'>Press above for everything you need to know to book an educational trip with us as well as information needed to plan this visit.</p>
            </div>
            <div className='ed-event'>
                <img className='zoo-event' src="https://i.ytimg.com/vi/qg8DI7yGxB4/maxresdefault.jpg" style={{ height: '400px' }} />
                <button className='educational-visit' onClick={() => navigate('/Book tickets')}>Events & Activities</button>
                <p className='btn-text'>There are plenty of activities and events happeneing for key stages throughout the year.</p>
            </div>


        </div>

    )
};

export default Education;