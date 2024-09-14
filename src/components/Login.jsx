import React, { useRef, useState } from 'react'
import Header from './Header'
import bg from '../assets/background.jpg'
import { validateData } from '../utils/validate.js'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../utils/firebase.js'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [signIn,setSignIn] = useState(true);
    const [errorMsg,setErrorMsg] = useState(null)

    const navigate = useNavigate()

    const email = useRef(null);
    const password = useRef(null);


    const handleButtonClick = () =>{
      const message = validateData(email.current.value,password.current.value)
       //console.log(email,password);
       //console.log(password.current.value);
       //console.log((message));
       setErrorMsg(message);

       if(message) return ;

       if(!signIn){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
       .then((userCredential) => {
    // Signed up 
        const user = userCredential.user;
        console.log(user);
       
    // ...
      })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    
      setErrorMsg(errorCode+' '+errorMessage)
     });

       }else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        // Signed in 
         const user = userCredential.user;
         console.log(user);
        
        // ...
        })
       .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMsg(errorCode + " "+errorMessage)
       });
       

       }



    }

    const toggleSignIn = () => {
        setSignIn(!signIn)
    }


  return (
    <>
    <Header/>
    <div className='absolute w-screen'>
        <img src={bg} alt="background" className='bg-cover' />
        
        </div>

    <form onSubmit={(e)=>e.preventDefault()} className='bg-black opacity-80 text-white w-1/4 absolute p-10 my-36 mx-auto right-0 left-0'>
        <h1 className='text-3xl font-bold text-center py-4'>{signIn ? 'LogIn':'SignUp'}</h1>
        {!signIn && <input type="text" name="" id="" placeholder='Enter your name' className='w-full my-4 p-2 bg-slate-600' />}
        
        <input 
         ref={email}
         type="email"
         placeholder='Email address' 
         className='w-full my-4 p-2
          bg-slate-600' />
         

        <input 
         ref={password}
         type="password" 
         placeholder='Password' 
         className='w-full my-4 p-2 bg-slate-600'/>
         <p className='text-red-600 font-bold text-xl'>{errorMsg}</p>

        <button 
        className='w-full my-4 p-2 bg-red-700 rounded-xl' 
        onClick={handleButtonClick}>{signIn ? 'LogIn':'SignUp'}
        </button>

        <p className='text-gray-400 py-4 cursor-pointer' onClick={toggleSignIn} >
           {signIn?'Dont have an account? Sign Up now' : 
           'Already have an account? LogIn'} </p>
    </form>
    
    
    </>
  )
}

export default Login