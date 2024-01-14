import React from 'react'
import Avatar from '../assets/Ellipse.png';
import { Icon } from '@iconify/react';

export default function DoubtCard() {
  return (
    <div className='bg-[#ffffff1f] rounded-md lg:w-[70%] w-[80%] p-2 mt-4 flex flex-col gap-y-2'>
    {/* username avatar etc */}
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 text-primary py-1 items-center'>
            <img src={Avatar} className='w-[30px] h-[30px]'/>
            <div className=''>
                <p className='relative top-1 p-0 mb-[4px] text-sm'>Devesh Shau</p>
                <p className='relative bottom-1 p-0 text-[10px] text-links'>Devesh@gmail.com</p>
            </div>
        </div>
        <Icon icon="ep:more-filled" color="rgba(217, 217, 217, 0.6)" width={25}/>
      </div>
    {/* end uname,avatar */}
    <p class="text-lg text-secondary px-1">I am a bca graduate and want to join mca, suggest me some 
       good MCA collage...
    </p>
    <div className='flex gap-3 px-1 text-base text-[#F5C377] flex-wrap'>
        <p>#Education</p>
        <p>#Software_Engineering</p>
        <p>#Coding</p>
        <p>#Career</p>
    </div>
    <div className="border-t-[2px] border-[#c1c1c149] mt-2 py-1 flex justify-between items-center">
        <div className="flex gap-x-5 text-white pt-1">
            <button className="flex items-center gap-1 bg-red-500 px-[10px] rounded-3xl">
              <Icon icon="icon-park-solid:like" color="rgba(217, 217, 217, 0.9)" />
              1K
            </button>
            <button className='flex items-center gap-1 bg-slate-500 px-[10px] rounded-3xl'>
              <Icon icon="ep:comment" color="rgba(217, 217, 217, 0.9)" />
              120
            </button>
            <p className='text-secondary'>1hrs ago</p>
        </div>
        <button>
        <Icon icon="ooui:next-ltr" color="rgba(217, 217, 217, 0.9)" />
        </button>
    </div>
    </div>
  )
}
