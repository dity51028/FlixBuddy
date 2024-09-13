import React from 'react'
import logo from '../assets/logo.png'
import signOutbtn from '../assets/signOut.jpeg'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
      
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    
    <div className='absolute z-30 flex justify-between w-full'>
    <img src={logo} alt="logo" className='rounded-full h-32 m-5' />   
    <div className='absolute top-0 right-0 m-5'>
        <img src={signOutbtn} alt="signout-btn" className='rounded-full h-20 cursor-pointer' onClick={handleSignOut}/>
    </div>
</div>

      
  )
}

export default Header