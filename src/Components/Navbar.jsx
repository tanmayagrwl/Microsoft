import React from 'react'
import MSLogo from '../assets/microsoftlogo.png';
import searchlogo from '../assets/search_logo.png';
import addacc from '../assets/add_account.png';
function Navbar() {
  return (
    <>
        <div id='navbar'  className='flex flex-row w-screen h-20vh items-center justify-between text-lg pt-2'>
            <div className='flex flex-row h-max items-center pl:10 sm:pl-10 lg:pl-10'>
                <h1 className=' mr-4 font-bold text-white'></h1>
                <img src={MSLogo} alt=""  className='  pr-4  h-5' />
                
                <h1 className=' mr-4 font-bold '>|</h1>
                <h1 className=' mr-4 font-bold hidden sm:hidden md:flex '>Account</h1>
                <h1 className='text-sm mr-4'> Help</h1>
            </div>
            <div className='flex flex-row h-max items-center sm:pr-10 lg:pr-20'>
                <img src={searchlogo} alt=""  className='h-3 pr-6 sm:pr-6 lg:pr-2' />
                <h1 className='text-sm pr-5 hidden sm:hidden lg:flex'> Search</h1>
                <img src={addacc} alt=""  className='h-3 pr-5' />
                <h1 className='text-sm pr-10 hidden sm:hidden lg:flex'> Sign In</h1>

            </div>
            
        </div>
    </>
  )
}

export default Navbar