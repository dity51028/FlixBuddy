import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='absolute z-30'>
        <img src={logo} alt="logo" className='rounded-full h-32 m-5' />
        
    </div>
  )
}

export default Header