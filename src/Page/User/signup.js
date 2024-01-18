import { React, useState } from 'react';
import "../../Stylesheet/User/SignUp.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GiDeliveryDrone } from "react-icons/gi";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp =()=>{
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const baseUrl = `https://droneservice.onrender.com`

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/api/v1/user/create-account`, {
                fullName,
                email,
                username,
                phoneNo,
                password
            });
            if(response.status === 201){
                toast.success(response.data.message);
                navigate('/login');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        }
    };
    return(
        <>
            <div className='reg-body'>
                <div className='reg-img'>
                    <NavLink to="/" id='reg-lnk'>
                        <GiDeliveryDrone/>
                    </NavLink>
                </div>
                <div className='sign-box'>
                    <div className='gen-box'>
                        <div className='gen-text'>
                            <h1>Create An Account</h1>
                            <p>Take your first steps in using our SkyCargo Logistics Web Application</p>
                        </div>
                        <div className='first-reg'>
                            <button> <FcGoogle id='ggl'/> Sign up with Google</button>
                            <div className='or'>
                                <div id='line'></div>
                                <p>or</p>
                                <div id='line'></div>
                            </div>
                            <form className='reg-form' onSubmit={handleSubmit}>
                                <div className='reg-holder holder-one'>
                                    <label>Full Name</label>
                                    <input type="text" placeholder='eg. John Wick' value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                                </div>
                                <div className='reg-holder'>
                                    <label>Email</label>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className='reg-holder'>
                                    <label>Username</label>
                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                                <div className='reg-holder'>
                                    <label>Phone No</label>
                                    <input type="text" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}/>
                                </div>
                                <div className='reg-holder'>
                                    <label>Password</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <button type='submit'>Sign Up</button>
                            </form>
                            <p>Already Have An Account? <span> <NavLink to="/login">Login</NavLink> </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;