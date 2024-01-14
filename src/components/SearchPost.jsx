import React from 'react'
import { Icon } from '@iconify/react';

export default function SearchPost() {
  return (
    <div className='lg:w-[100%] w-[95%] flex bg-[#ffffff30] items-center justify-between rounded-md'>
      <input type="text" placeholder="Search for a post..." className='pl-3 py-4 min-w-[50%] bg-transparent  outline-none text-white'/>
      <div className='flex items-center gap-x-3'>
        <div className='w-[2%] h-8 border-r-[1px] border-[#989898c3]'></div>
        <button>
        <Icon icon="tabler:search" color="rgba(217, 217, 217, 0.6)" width={25} className='mr-3'/>
        </button>
      </div>
    </div>
  )
}
