import React, { useState } from 'react'
import logo_google from '../assets/google_logo.png';
import login_svg from '../assets/login.png';

export default function LoginPage() {
  return (
    <div className='bg-primary w-[100vw] lg:h-[100vh] h-auto flex justify-center items-center'>
      <div className='lg:w-[40%] w-[80%] flex flex-col items-center justify-center gap-y-[1px] lg:h-[50%] h-auto'>
        <img src={login_svg} className='w-[70%]'/>
        <h2 className='text-primary text-2xl font-semibold text-center'>Join the community!</h2>
        <h2 className='text-primary text-2xl font-semibold text-center'>Login or Signup</h2>
        <p className='text-secondary px-6 mt-3 text-sm text-center'>and unlock the power of clarity,</p>
        <p className='text-secondary px-6 text-sm text-center'>your ultimate doubt-busting destination!"</p>
        <button className='flex gap-x-2 items-center border border-gray-300 lg:px-[10rem] px-[5rem] py-3 rounded-full mt-8 hover:bg-slate-800 transition-all duration-300' type='submit'>
            <span>
              <img src={logo_google} alt="Google Logo" className='w-[1.8rem]'/>
            </span>
            <p className='text-primary'>Google</p>
        </button>
      </div>
    </div>
  )
}
