import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { userContext } from '../context/UserContext';
import { useContext } from 'react';


export default function NewPostBtn() {
  const {setModelState,modelState} = useContext(userContext);
  const showModel = () =>{
    console.log(modelState);
    if(modelState){
      setModelState(false);
      document.body.classList.remove('overflow-hidden');
    }
    else{
      setModelState(true);
      document.body.classList.add('overflow-hidden');
    }
  }
  return (
    <>
       <button className="lg:hidden md:hidden flex bg-indigo-400 py-3 justify-center items-center">
       <Icon icon="ic:baseline-add" color="white" width={25}/>
       </button>
    <div className="lg:w-[90%] md:w-[100%] lg:flex md:flex lg:pr-4 pr-1 hidden" onClick={showModel}>
      <a href="#" class="relative inline-flex items-center justify-center p-4 px-[50%] py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-400 rounded-md shadow-md group">
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white text-2xl duration-300 -translate-x-full bg-indigo-400 group-hover:translate-x-0 ease">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
         </span>
          <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">New Post</span>
         <span class="relative invisible">Button Text</span>
      </a>
    </div>
    </>
  )
}
