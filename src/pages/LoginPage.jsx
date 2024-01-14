import React, { useState } from 'react'
import logo_google from '../assets/google_logo.png';
import login_svg from '../assets/login.png';
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {auth} from '../firestore/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../context/UserContext';

export default function LoginPage() {
  const {setUserInfo} = useContext(userContext);
  // const [isVerified,setIsVerified] =useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider()
  const googleAuthHandler = async ()=>{
     await signInWithPopup(auth,provider)
     .then((result)=>{
       const user = result.user;
       console.log(user);
       if(user.emailVerified){
          setUserInfo((prev)=>({
              ...prev,
              username:user.displayName,
              useremail:user.email,
              userphoto:user.photoURL
          }))
          navigate('/home');
       }
       else{
         console.log("user login nhi hua!");
       }
     }).catch(error=>{
      console.log(error);
     })
  }
  return (
    <div className='bg-primary w-[100vw] lg:h-[100vh] h-auto flex justify-center items-center'>
      <div className='lg:w-[40%] w-[80%] flex flex-col items-center justify-center gap-y-[1px] lg:h-[50%] h-auto'>
        <img src={login_svg} className='w-[70%]'/>
        <h2 className='text-primary text-2xl font-semibold text-center'>Join the community!</h2>
        <h2 className='text-primary text-2xl font-semibold text-center'>Login or Signup</h2>
        <p className='text-secondary px-6 mt-3 text-sm text-center'>and unlock the power of clarity,</p>
        <p className='text-secondary px-6 text-sm text-center'>your ultimate doubt-busting destination!"</p>
        <button className='flex gap-x-2 items-center border border-gray-300 lg:px-[10rem] px-[5rem] py-3 rounded-full mt-8 hover:bg-slate-800 transition-all duration-300' type='submit' onClick={googleAuthHandler}>
            <span>
              <img src={logo_google} alt="Google Logo" className='w-[1.8rem]'/>
            </span>
            <p className='text-primary'>Google</p>
        </button>
      </div>
    </div>
  )
}
