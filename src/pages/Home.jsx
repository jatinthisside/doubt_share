import React from 'react'
import Sidebar from '../components/Sidebar'
import SearchPost from '../components/SearchPost'
import FilterTab from '../components/FilterTab'
import DoubtCard from '../components/DoubtCard'
import { Icon } from '@iconify/react';


export const Model = () =>{
  return(
    <>
      {
          <>
            <div className="absolute left-0 top-0 inset-0 w-[100%] h-[100vh] bg-[#000000c0] opacity-90 z-10" id="outerDiv" onClick={handleModel}></div>
            <div className='absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-1/2 w-[70%] lg:h-1/2 h-[30%] bg-[#333338] flex flex-col justify-between px-2 py-2 rounded-lg'>
             <div className="flex flex-col gap-2">
                <input type="text" placeholder="Title.." className='py-2 px-2 bg-[#1f1f1f]'/>
                <textarea id="myTextarea" name="myTextarea" rows="4" cols="50" placeholder='Few lines about your post....' className='px-2 py-2 bg-[#1f1f1f]'>
                
                </textarea>
             </div>
             <div className="bg-[#1f1f1f] min-h-[15%] border-2 border-gray-300 rounded-md flex justify-between items-center px-4">
                <div className="flex gap-3">
                  <button>
                  <Icon icon="fluent:emoji-16-filled" color="white"  width={25}/>
                  </button>
                  <button>
                  <Icon icon="material-symbols:imagesmode-rounded" color="white"  width={25}/>
                  </button>
                  <button>
                  <Icon icon="ooui:bold-b" color="white" width={20}/>
                  </button>
                  <button>
                  <Icon icon="noto:red-circle" color="white" width={25}/>
                  </button>
                  <button>
                  <Icon icon="fluent-emoji:blue-circle" color="white" width={25}/>
                  </button>
                </div>
                <button>
                <Icon icon="material-symbols:send" color="white" width={25}/>
                </button>
             </div>
            </div>
          </>
      }
    </>
  )
}


export default function Home() {
  return (
    <>
    <div className='w-auto h-auto min-h-[100vh] bg-primary flex relative'>
    {/* SideBar */}
     <Sidebar/>
    {/* End Sidebar */}
    {/* Home Content */}
    <div className='h-auto flex flex-col items-center mx-auto py-8 w-[80%]'>
     <div className='py-3'>
      <SearchPost/>
        <div className='mt-5 flex gap-3 flex-wrap justify-center items-center'>
          <FilterTab text={"All"}/>
          <FilterTab text={"Programming"}/>
          <FilterTab text={"AI&ML"}/>
          <FilterTab text={"Blockchain"}/>
          <FilterTab text={"IOT"}/>
          <FilterTab text={"Networking"}/>
        </div>
     </div>
     <DoubtCard/>
     <DoubtCard/>
     <DoubtCard/>
     <DoubtCard/>
     <DoubtCard/>
     <DoubtCard/>
    </div>
    {/* End Home Content */}
  </div>
  </>
  )
}
