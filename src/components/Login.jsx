import React, { useState } from 'react'
import Header from './Header'
import bg from '../assets/background.jpg'

const Login = () => {

    const [signIn,setSignIn] = useState(true)

    const toggleSignIn = () => {
        setSignIn(!signIn)
    }


  return (
    <>
    <Header/>
    <div className='absolute w-screen'>
        <img src={bg} alt="background" className='bg-cover' />
        
        </div>

    <form action="" className='bg-black opacity-80 text-white w-1/4 absolute p-10 my-36 mx-auto right-0 left-0'>
        <h1 className='text-3xl font-bold text-center py-4'>{signIn ? 'LogIn':'SignUp'}</h1>
        {!signIn && <input type="text" name="" id="" placeholder='Enter your name' className='w-full my-4 p-2 bg-slate-600' />}
        <input type="email" name="" id="" placeholder='Email address' className='w-full my-4 p-2 bg-slate-600' />
        <input type="password" name="" id="" placeholder='Password' className='w-full my-4 p-2 bg-slate-600'/>
        <button className='w-full my-4 p-2 bg-red-700 rounded-xl'>{signIn ? 'LogIn':'SignUp'}</button>

        <p className='text-gray-400 py-4 cursor-pointer' onClick={toggleSignIn}>
           {signIn?'Dont have an account? Sign Up now' : 
           'Already have an account? LogIn'} </p>
    </form>
    
    
    </>
  )
}

export default Login