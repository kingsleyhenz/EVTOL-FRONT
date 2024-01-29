import React from 'react';


const Login = () => {
    return(
        <>
            <div className='wrper'>
            <p>WELCOME BACK EVTOL ADMIN</p>
                <div className='container'>
                    <form id='logform'>
                        <input type="text" placeholder='Fullname'/>
                        <input type="text" placeholder='Password'/>
                        <button>Login Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;