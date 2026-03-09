import React from 'react';


const Login = () => {
    return(
        <>
            <div className='w-full h-screen flex flex-col items-center gap-[50px] p-[2%] bg-[url(https://img.freepik.com/free-photo/drone-with-camera-is-flying-iceberg_335224-624.jpg?w=996&t=st=1675707482~exp=1675708082~hmac=ddad363c4ce5eb379d9bf70cf319a536446bd1b0f218604b221d10fa20c7d33c)] bg-no-repeat bg-cover bg-center bg-blend-darken bg-gray-500'>
                <p className='text-[55px] font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-[#8a8a8a]'>WELCOME BACK EVTOL ADMIN</p>
                <div className='w-[40rem] h-[20rem] shadow-[0_0_1rem_0_rgba(0,0,0,0.2)] rounded-[5px] bg-[rgba(255,255,255,0.15)] backdrop-blur-[5px] flex items-center justify-center'>
                    <form className='flex items-center flex-col gap-[15px] w-4/5'>
                        <input className='bg-transparent p-[3%] w-full text-black text-[16px] font-bold border-none border-b border-black outline-none placeholder-black' type="text" placeholder='Fullname'/>
                        <input className='bg-transparent p-[3%] w-full text-black text-[16px] font-bold border-none border-b border-black outline-none placeholder-black' type="password" placeholder='Password'/>
                        <button className='w-[25%] p-[1%_0] border-2 border-white rounded-[10px] bg-transparent font-black mt-4 hover:bg-white hover:text-black transition-colors'>Login Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;