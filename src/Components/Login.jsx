import React from 'react'
import mslogo from '../assets/microsoft_logo.svg'

function Login() {
  return (
    <>
        <div className="bg-gradient-to-br from-red-50 to-blue-50 via-green-50 h-screen flex flex-col items-center justify-center min-h-screen ">
            
                <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                    <div className="flex items-center justify-center mb-4">
                        <img className="w-16 h-16 mr-2" src={mslogo} alt="Logo" />
                        <h2 className="text-lg md:text-2xl font-bold">Microsoft</h2>
                    </div>
                        <form>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email Address </label>
                                <input className="appearance-none border-b-2 border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" id="email" type="email" placeholder="Enter your email address" />
                            </div>
                            <div className="flex items-center justify-center md:justify-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Sign In
                                </button>
                            </div>
                        </form>
                </div>
            </div>
    </>
  )
}

export default Login