import React from 'react'
import sd1 from './sd1.png';
import sd2 from './sd2.png';
import sd3 from './sd3.png';


function SlideD() {
  return (
    <>
        <div className="flex flex-col items-center w-screen justify-center pb-10 pt-3 mt-28 lg:pt-60">
            <div className='text-3xl md:6xl lg:text-7xl font-serif'>Simplify your day</div>
            <div className='flex justify-center text-md sm:text-md  pr-4 pl-4 lg:pl-80 lg:pr-80 pt-12 text-center md:text-xl lg:text-2xl '>Access all your Microsoft apps, services, and games with one account.
            Whatever you’re doing, wherever you are, just go.</div> 
        </div>


        <div className='flex flex-col sm:flex-col md:flex-row justify-between pl-4 pr-4 lg:pl-28 lg:pr-48 pt-8 sm:pt-8 md:pt-24'>
            <img src={sd1} alt="" className='rounded-md shadow-lg over:shadow-2xl h-72 md:h-80 w-full sm:w-full md:w-96 mb-8 sm:mb-0 md:mb-0 md:ml-8 lg:ml-0' />

            <div className='flex flex-col justify-center lg:pl-64 md:pl-36 pr-4 lg:pr-0 pl-0 '>
                <div className='font-semibold text-2xl md:text-5xl lg:text-6xl mb-8 '>Sign in and go</div>
                <div className='text-xl'>Your account profile and preferences sync across all your devices. Wherever you are, it’s all here.</div>
            </div>
        </div>

      
        
        <div className='flex flex-col-reverse sm:flex-col md:flex-row justify-between pl-4 pr-4 lg:pl-28 lg:pr-48 pt-8 sm:pt-8 md:pt-24'>
        <div className='flex flex-col justify-center lg:pr-64 md:pr-36 pl-4 lg:pl-0 pr-0 '>
            <div className='font-semibold text-2xl md:text-5xl lg:text-6xl mb-8 '>Pick up where you left off</div>
            <div className='text-xl'>Your data is automatically synced to the cloud, so contacts, calendar, and files are always backed up, no matter what device you’re on.</div>
        </div>
        <img src={sd2} alt="" className='rounded-md shadow-lg over:shadow-2xl h-72 md:h-80 w-full sm:w-full md:w-96 mb-8 sm:mb-0 md:mb-0 md:mr-8 lg:mr-0' />
    </div>
        


        <div className='flex flex-col sm:flex-col md:flex-row justify-between pl-4 pr-4 lg:pl-28 lg:pr-48 pt-8 sm:pt-8 md:pt-24'>
            <img src={sd3} alt="" className='rounded-md shadow-lg over:shadow-2xl h-72 md:h-80 w-full sm:w-full md:w-96 mb-8 sm:mb-0 md:mb-0 md:ml-8 lg:ml-0' />

            <div className='flex flex-col justify-center lg:pl-64 md:pl-36 pr-4 lg:pr-0 pl-0 '>
                <div className='font-semibold text-2xl md:text-5xl lg:text-6xl mb-8 '>Keep it in the family</div>
                <div className='text-xl'>Easily create a family group and set parental controls like screen time limits and app filters for free with Microsoft Family Safety.</div>
            </div>
        </div>



    
    </>
  )
}

export default SlideD