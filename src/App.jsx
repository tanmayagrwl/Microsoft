import './App.css'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import SlideB from './Components/SlideB'
import sb1 from './assets/sb1.png'
import sb2 from './assets/sb2.png'
import sb3 from './assets/sb3.png'
import sb4 from './assets/sb4.png'





const datasb = [
  {
      img : {sb1},
      name : "Microsoft 365 apps",
      desc : "Get access to free online versions of Outlook, Word, Excel, and PowerPoint.",
  },
  {
    img : {sb2},
    name : "5 GB of cloud storage",
    desc : "Save your files and photos and access them from any device, anywhere.",
  },
  {
  img : {sb3},
  name : "Microsoft Rewards",
  desc : "Earn points that can be redeemed for gift cards, nonprofit donations, and sweepstakes entries.",
  },
  {
    img : {sb4},
    name : "Xbox network",
    desc : "Your account gives you access to the Xbox network and community.",
  },
];






function App() {

  return (
    <>
      <Navbar />
      <Landing />
      
      <SlideB 
      img = {sb1}
      name = "Microsoft 365 apps"
      desc = "Get access to free online versions of Outlook, Word, Excel, and PowerPoint." 
      imgs = {sb2}
      names = "5 GB of cloud storage"
      descs = "Save your files and photos and access them from any device, anywhere."
      imgt = {sb3}
      namet = "Microsoft Rewards"
      desct= "Earn points that can be redeemed for gift cards, nonprofit donations, and sweepstakes entries." 
      imgu = {sb4}
      nameu = "Xbox network"
      descu = "Your account gives you access to the Xbox network and community."
      />


    </>
  )
}

export default App
