import React from 'react'
import mslogo from '../assets/microsoft_logo.svg'
function SlideE() {
  return (
    <>
        <div className='pt-0 lg:pt-32 h-96 flex flex-col justify-center items-center '>
            <img src={mslogo} className='pb-16' alt="" />

            <div className='pb-16 text-2xl'>Your Microsoft account connects all your Microsoft apps and services.</div>
            <span className=''>
                <button className='bg-sky-500 pl-3 pr-3 pt-1 pb-1 mr-3 rounded-sm hover:bg-sky-600 hover:underline '>Sign in</button>
                <button className='border-black border pl-3 pr-3 pt-1 pb-1 mr-3 rounded-sm hover:underline hover:bg-[#E2E2E2]'>Create an Account</button>
            </span>
        </div>
    </>
  )
}

export default SlideE