import React from 'react'
import { Icon } from '@iconify/react';

export default function BackBtn(props) {
  return (
    <>
        <button className="flex bg-slate-500 gap-x-1 rounded-md items-center lg:px-4 lg:py-2 px-2 py-2 lg:ml-4 lg:self-start self-center hover:bg-[#7a75ab9c] transition-all duration-300">
        <Icon icon={props.icon} color={props.color} width={18}/>
            <p className="text-primary lg:block hidden">{props.text}</p>
        </button>
    </>
  )
}
