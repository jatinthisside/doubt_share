import React from 'react'
import { Link } from 'react-router-dom'

export default function FilterTab({text}) {
  return (
    <>
        <Link to="#">
            <div className='text-white bg-[#776A49] inline-block lg:px-8 px-5 py-1 rounded-full lg:text-base text-xs'>
                {text}
            </div>
        </Link>
    </>
  )
}
