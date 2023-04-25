import React from 'react'

function Card(props) {
  return (
    <>
      <div className="flex flex-col m-4 hover:shadow-lg rounded-lg border max-w-sm ">
                <img src={props.img} className="rounded-sm w-full h-64 object-cover object-center" alt="Your image 1" />
                <h2 className="text-xl font-medium mt-4 ml-4">{props.name}</h2>
                <p className="text-gray-600 mt-2 ml-4 mr-4">{props.desc}</p>
      </div>
   
    </>
  )
}

export default Card