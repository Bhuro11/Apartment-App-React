import React from 'react'
import TopHeader from '../TopHeader'
import Logo from '../images/HomeLogo.png'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='h-screen w-full ' >
        <div className='home min-h-screen w-full' style = {{
        backgroundImage:
        `url("https://www.thespruce.com/thmb/zVrZlbIOVmH172Gkju3uCMpX2sc=/2048x0/filters:no_upscale():max_bytes(150000):strip_icc()/lavender2-dd461d67ee8240d5bbca3e0b09e9c41c.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
     }}>
        <TopHeader />
        <div className='flex justify-around items-center mt-4' >
            <div className='flex justify-center items-center'>
                <img src={Logo} alt="" />
            </div>
            <div>
                <ul className='flex justify-center items-center gap-9 text-2xl text-white'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/">ABOUT US</Link></li>
                    <li><Link to="/">OUR SERVICE</Link></li>
                    <li><Link to="/">CONTACT US</Link></li>
                </ul>
            </div>
            <div>
                <button className='bg-white p-2 text-[#588157] border border-[#588157] rounded-3xl w-36'>Get Started</button>
            </div>
        </div>
        </div>
    </div>
  )
}
