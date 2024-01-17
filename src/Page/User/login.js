import { React } from 'react';
import "../../Stylesheet/User/login.css";
import { NavLink } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GiDeliveryDrone } from "react-icons/gi";

const Login =()=>{
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
                            <form className='log-form'>
                                <div className='log-holder'>
                                    <label>Email</label>
                                    <input type="text" />
                                </div>
                                <div className='log-holder'>
                                    <label>Password</label>
                                    <input type="text" />
                                </div>
                                <button>Login</button>
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