import React from 'react'
import { useState } from 'react';

const Login = ({handleLogin}) => {

    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(email, password);
        handleLogin(email, password);
        setEmail('');
        setPassword('');
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=> {submitHandler(e)}} action="" className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=> {setEmail(e.target.value)}} required autoComplete='email' className='text-white outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-2 px-5 rounded-full text-xl' type="email" placeholder='Enter your email' name="" id="" />
                <input value={password} onChange={(e)=> {setPassword(e.target.value)}} required autoComplete='current-password' className='text-white outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-2 px-5 rounded-full text-xl mt-2' type="password" placeholder='Enter your password' name="" id="" />
                <button className='text-white border-none w-[17rem] bg-emerald-700 py-2 px-5 rounded-full text-xl mt-6 font-bold'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login
