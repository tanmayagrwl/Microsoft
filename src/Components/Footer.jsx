import React from 'react'
import globe from '../assets/globe.png'

function Footer() {
  return (
    <>
        <div className='flex flex-col sm:flex-col text-sm lg:flex-row lg:flex justify-between'>
            <div className='flex flex-row justify-center sm:justify-center lg:justify-normal space-x-2 ml-10'>
                <img src={globe} className='  h-4' alt="" />
                <div className='hover:underline '>English (US)</div> 
            </div>
            <span className=' flex flex-col text-center sm:text-center lg:text-start sm:flex-col md:flex-row space-x-10 '>
                <div className='hover:underline ml-10'>privacy & cookies</div>
                <div className='hover:underline'>Terms of use</div>
                <div className='hover:underline'> Contact us</div>
                <div className='hover:underline'>Feedback</div>
                <div className='hover:underline'>© Microsoft 2023</div>
            </span>
        </div>
    </>
  )
}

export default Footer