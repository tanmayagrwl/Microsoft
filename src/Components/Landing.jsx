import React from 'react'
import Landingimg from '../assets/landingss.png'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
        <div className="flex flex-col items-center w-screen justify-center h-[70vh]">
            <div className='text-3xl md:6xl lg:text-7xl font-serif'>It's all here with</div>
            <div className='text-3xl md:6xl lg:text-7xl font-serif pt-5'>Microsoft Account</div>
            <div className='flex justify-center text-md sm:text-md pl-8 pr-8 pt-8 text-center md:text-xl lg:text-2xl'>Your Microsoft account connects all your Microsoft apps and services.</div>
            <div className='flex justify-center text-md sm:text-md pl-8 pt-2 pr-8 text-center md:text-xl lg:text-2xl'>Sign in to manage your account.</div>
            <div className='pt-10'>
            <Link to="/login">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button> </Link>
            
            </div>
            
        </div>
        <div className='w-screen pb-32'>
            <img src={Landingimg} className='' alt="" />
        </div>
        
    </>
  )
}

export default Landing