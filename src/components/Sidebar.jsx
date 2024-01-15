import React, { useEffect } from 'react'
import BackBtn from './BackBtn'
import app_logo from '../assets/app_logo.png'
import { Icon } from '@iconify/react';
import Avatar from "../assets/Ellipse.png"
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NewPostBtn from './NewPostBtn';

export default function Sidebar() {

  return (
   <div className="sticky top-0 left-0 lg:w-[20%] w-[10%] h-screen bg-secondary overflow-x-hidden py-5 flex flex-col justify-between lg:items-start items-center border-r-2 border-gray-400">
    <div className='flex flex-col gap-2'>
       <img src={app_logo} alt="Logo" className='w-[100px]'/>
       <BackBtn text="Back" icon="ooui:previous-ltr" color="#fff" width="25"/>
     </div>
     <ul className='w-full lg:ml-4 flex flex-col gap-y-6 lg:relative lg:bottom-[3rem]'>
        <Link to="/home"><NavItem iconname={"ant-design:home-filled"} text={"Home"}/></Link>
        <Link to="/categories"><NavItem iconname={"tabler:category-filled"} text={"Category"}/></Link>
        <Link to="/profile"><NavItem iconname={"iconamoon:profile-fill"} text={"Profile"}/></Link>
        <button className="border-b-2 border-t-2 border-gray-500 py-2 text-primary lg:mr-10 rounded-lg flex items-center gap-x-4 hover:bg-slate-600 transition-all duration-300 lg:justify-start justify-center">
        <Icon icon="material-symbols:logout-sharp" color="white" width={30} className='pl-1'/>
          <span className="text-xl lg:block hidden">Logout</span>
        </button>
        <NewPostBtn/>
     </ul>
     <div className='flex text-primary items-center gap-2 lg:ml-4 w-full lg:justify-start justify-center'>
     {
      <>
      <img src={"userphoto"} className='w-[38px] rounded-full' alt="img"/>
          <div className='lg:flex flex-col hidden'>
            <p className='mb-[-5px] text-md'>username</p>
            <p className='text-[0.8rem] text-slate-300'>useremail</p>
          </div>
      </>
     }
     </div>
   </div> 
  )
}
