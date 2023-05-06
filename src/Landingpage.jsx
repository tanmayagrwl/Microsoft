import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import SlideB from './Components/SlideB/SlideB'
import sb1 from './assets/sb1.png'
import sb2 from './assets/sb2.png'
import sb3 from './assets/sb3.png'
import sb4 from './assets/sb4.png'
import SlideC from './Components/SlideC/SlideC'
import SlideD from './Components/SlideD/SlideD'
import SlideE from './Components/SlideE'
import Footer from './Components/Footer'


const datasb = [
    {
        img : sb1,
        name : "Microsoft 365 apps",
        desc : "Get access to free online versions of Outlook, Word, Excel, and PowerPoint.",
    },
    {
      img : sb2,
      name : "5 GB of cloud storage",
      desc : "Save your files and photos and access them from any device, anywhere.",
    },
    {
    img : sb3,
    name : "Microsoft Rewards",
    desc : "Earn points that can be redeemed for gift cards, nonprofit donations, and sweepstakes entries.",
    },
    {
      img : sb4,
      name : "Xbox network",
      desc : "Your account gives you access to the Xbox network and community.",
    },
  ];


function Landingpage() {
  return (
    <div className='overflow-x-hidden scroll-smooth '>
        <Navbar />
        <Landing />
        <SlideB datasb = {datasb}  />
        <SlideC />
        <SlideD />
        <SlideE />
        <Footer />
    </div>
  )
}

export default Landingpage