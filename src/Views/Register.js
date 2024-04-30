import { useNavigate } from 'react-router-dom';
import './Register.css'
import React from 'react';
import { useDarkMode } from '../Components/NavBar/Accessibility/Darkmode';


const Register = () => {
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
        <div className='register-container'>
            <form action=''>
                <h1 className='heading'>Register Here</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                </div>
                <div className='input-box'>
                    <input type='email' placeholder='Email' required />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Confirm Password' required />
                </div>
                <button className='sub-btn' type='submit'>Submit</button>
                <div className='form-btn'>
                    <button className='have-login' onClick={() => navigate('/Login')}>Already have an account? Login</button>

                </div>

            </form>

        </div>

    )
}

export default Register;

// const userRef = useRef();
// const errRef = errRef();

// const [user, setUser] = useState('');
// const [ValidName, setValidName] = useState(false);
// const [userFocus, setUserFocus] = useState(false);

// const [pwd, setPwd] = useState('');
// const [validPwd, setValidPwd] = useState(false);
// const [pwdFocus, setPwdFocus] = useState(false);

// const [matchpwd, setMatchPwd] = useState('');
// const [validmatch, setValidMatch] = useState(false);
// const [matchFocus, setMatchFocus] = useState(false);

// const [errorMessage, setErrorMessage] = useState('');
// const [success, setSuccess] = useState(false);

// useEffect(() => {
//     userRef.current.focus();
// }, [])
