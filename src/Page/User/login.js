import { React, useState } from 'react';
import "../../Stylesheet/User/login.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GiDeliveryDrone } from "react-icons/gi";
import { toast } from 'react-toastify';
import axios from 'axios';

const Login =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const baseUrl = 'https://droneservice.onrender.com'

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/api/v1/user/login`, {
                email,
                password
            });
            if(response.status === 200){
                toast.success("Login Successful👋");
                localStorage.setItem("auth_token", response.data.token);
                localStorage.setItem("role", response.data.role)
                navigate('/user-dash');
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
            <div className='log-body'>
                <NavLink to="/"><GiDeliveryDrone id='log-i'/></NavLink>
                <div className='log-box'>
                    <div className='gen-box'>
                        <div className='gen-text'>
                            <h1>Login To Your Account</h1>
                            <p>Continue using our application to send and recieve your packages</p>
                        </div>
                        <div className='first-log'>
                            <button> <FcGoogle id='ggl'/>Login with Google</button>
                            <div className='or'>
                                <div id='line'></div>
                                <p>or</p>
                                <div id='line'></div>
                            </div>
                            <form className='log-form' onSubmit={handleSubmit}>
                                <div className='log-holder'>
                                    <label>Email</label>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className='log-holder'>
                                    <label>Password</label>
                                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <button type='submit'>Login</button>
                            </form>
                            <p>Haven't Signed Up Yet? <span> <NavLink to="/register-account">Sign Up</NavLink> </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;