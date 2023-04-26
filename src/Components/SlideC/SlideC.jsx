import React from 'react'
import sc1 from './sc1.png';
import sc2 from './sc2.png';
import sc3 from './sc3.png';

function SlideC() {
  return (
    <>
        <div className="flex flex-col items-center w-screen justify-center pt-36">

            <div className='text-3xl md:6xl lg:text-7xl font-serif'>Uniquely Yours</div>
            <div className='flex justify-center text-md sm:text-md  pr-4 pl-4 lg:pl-80 lg:pr-80 pt-12 text-center md:text-xl lg:text-2xl '>Take control of your data with privacy settings you can customize, and get personalized recommendations from your account checkup.</div>
        </div>



    <div className='flex flex-col-reverse sm:flex-col md:flex-row justify-between pl-4 pr-4 lg:pl-28 lg:pr-48 pt-8 sm:pt-8 md:pt-24'>
        <div className='flex flex-col justify-center lg:pr-64 md:pr-36 pl-4 lg:pl-0 pr-0 '>
            <div className='font-semibold text-2xl md:text-5xl lg:text-6xl mb-8 '>Security your way</div>
            <div className='text-xl'>Choose security and privacy settings that work best for you and rest easy with automatic alerts for unusual or suspicious account activity.</div>
        </div>
        <img src={sc1} alt="" className='rounded-md shadow-lg over:shadow-2xl h-72 md:h-80 w-full sm:w-full md:w-96 mb-8 sm:mb-0 md:mb-0 md:mr-8 lg:mr-0' />
    </div>


    <div className='flex flex-col sm:flex-col md:flex-row justify-between pl-4 pr-4 lg:pl-28 lg:pr-48 pt-8 sm:pt-8 md:pt-24'>
            <img src={sc2} alt="" className='rounded-md shadow-lg over:shadow-2xl h-72 md:h-80 w-full sm:w-full md:w-96 mb-8 sm:mb-0 md:mb-0 md:ml-8 lg:ml-0' />

        <div className='flex flex-col justify-center lg:pl-64 md:pl-36 pr-4 lg:pr-0 pl-0  '>
            <div className='font-semibold text-2xl md:text-5xl lg:text-6xl mb-8 '>Break free from passwords</div>
            <div className='text-xl'>Make your account even more secure with optional passwordless sign-in.</div>
        </div>
    </div>

    <div className='flex flex-col-reverse sm:flex-col md:flex-row justify-between pl-4 pr-4 lg:pl-28 lg:pr-48 pt-8 sm:pt-8 md:pt-24'>
        <div className='flex flex-col justify-center lg:pr-64 md:pr-36 pl-4 lg:pl-0 pr-0 '>
            <div className='font-semibold text-2xl md:text-5xl lg:text-6xl mb-8 '>One place to manage it all</div>
            <div className='text-xl'>Manage your account from a single dashboard, including payment information, purchases, subscriptions, and more.</div>
        </div>
        <img src={sc3} alt="" className='rounded-md shadow-lg over:shadow-2xl h-72 md:h-80 w-full sm:w-full md:w-96 mb-8 sm:mb-0 md:mb-0 md:mr-8 lg:mr-0' />
    </div>


    </>
  )
}

export default SlideC