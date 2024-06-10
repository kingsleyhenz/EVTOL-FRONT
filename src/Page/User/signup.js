import { React } from 'react';
import "../../Stylesheet/User/SignUp.css"
import { NavLink } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const SignUp =()=>{
    return(
        <>
            <div className='reg-body'>
                <div className='reg-img'></div>
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
                            <form className='reg-form'>
                                <div className='reg-holder'>
                                    <label>Email</label>
                                    <input type="text" />
                                </div>
                                <div className='reg-holder'>
                                    <label>Password</label>
                                    <input type="text" />
                                </div>
                                <button>Sign Up</button>
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