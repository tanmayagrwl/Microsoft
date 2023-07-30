import React from "react"
import MSLogo from "../assets/microsoftlogo.png"
import searchlogo from "../assets/search_logo.png"
import addacc from "../assets/add_account.png"
function Navbar() {
  return (
    <>
      <div
        id="navbar"
        className="flex flex-row w-full h-[7vh] items-center justify-between text-lg sticky top-0 z-50 bg-white"
      >
        <div className="flex flex-row h-max items-center pl:10 sm:pl-10 lg:pl-10">
          <h1 className=" mr-4 font-bold text-white"></h1>
          <img src={MSLogo} alt="" className="  pr-4  h-5" />

          <h1 className=" mr-4 font-bold ">|</h1>
          <h1 className=" mr-4 font-bold hidden sm:hidden md:flex hover:underline cursor-pointer">
            Account
          </h1>
          <h1 className="text-sm mr-4 hover:underline cursor-pointer"> Help</h1>
        </div>
        <div className="flex flex-row h-max items-center sm:pr-10 lg:pr-20 cursor-pointer">
          <img
            src={searchlogo}
            alt=""
            className="h-3 pr-6 sm:pr-6 lg:pr-2 cursor-pointer"
          />
          <h1 className="text-sm pr-5 hidden sm:hidden lg:flex hover:underline cursor-pointer">
            {" "}
            Search
          </h1>
          <img src={addacc} alt="" className="h-3 cursor-pointer pr-5" />
          <h1 className="text-sm pr-10 hidden sm:hidden cursor-pointer lg:flex hover:underline">
            {" "}
            Sign In
          </h1>
        </div>
      </div>
    </>
  )
}

export default Navbar
