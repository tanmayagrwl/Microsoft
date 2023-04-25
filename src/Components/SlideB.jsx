import React from 'react'
import sb1 from '../assets/sb1.png'
import sb2 from '../assets/sb2.png'
function SlideB(props) {
  return (
    <>
        <div className="flex flex-col items-center w-screen justify-center pb-20">
            <div className='text-3xl md:6xl lg:text-7xl font-serif'>The best of Microsoft</div>
            <div className='flex justify-center text-md sm:text-md pl-8 pr-8 pt-8 text-center md:text-xl lg:text-2xl'>You get more for free when you sign in with your Microsoft account.</div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center items-center">

            <div className="flex flex-col m-4 hover:shadow-lg rounded-lg border max-w-sm ">
                <img src={props.img} className="rounded-sm w-full h-64 object-cover object-center" alt="Your image 1" />
                <h2 className="text-xl font-medium mt-4 ml-4">{props.name}</h2>
                <p className="text-gray-600 mt-2 ml-4 mr-4">{props.desc}</p>
            </div>

            <div className="flex flex-col m-4 hover:shadow-lg rounded-lg border max-w-sm">
                <img src={props.imgs} className="rounded-sm w-full h-64 object-cover object-center" alt="Your image 2" />
                <h2 className="text-xl font-medium mt-4 ml-4">{props.names}</h2>
                <p className="text-gray-600 mt-2 ml-4 mr-4">{props.descs}</p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center items-center">
            <div className="flex flex-col m-4 hover:shadow-lg rounded-lg border max-w-sm">
                <img src={props.imgt} className="rounded-sm w-full h-64 object-cover object-center" alt="Your image 1" />
                <h2 className="text-xl font-medium mt-4 ml-4">{props.namet}</h2>
                <p className="text-gray-600 mt-2 ml-4 mr-4">{props.desct}</p>
            </div>

            <div className="flex flex-col m-4 hover:shadow-lg rounded-lg border max-w-sm">
                <img src={props.imgu} className="rounded-sm w-full h-64 object-cover object-center" alt="Your image 2" />
                <h2 className="text-xl font-medium mt-4 ml-4">{props.nameu}</h2>
                <p className="text-gray-600 mt-2 ml-4 mr-4">{props.descu}</p>
            </div>
        </div>

        
    </>
  )
}

export default SlideB