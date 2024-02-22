import React from 'react'
import TopHeader from '../TopHeader'
import Logo from '../images/HomeLogo.png'
import { Link } from 'react-router-dom'
import { FaQuoteLeft } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import Service1 from '../images/service1.png'
import Service2 from '../images/service2.png'
import Service3 from '../images/service3.png'

export default function HomePage() {
  return (
    <div className='home h-screen w-full' >
        <div className='min-h-screen w-full flex flex-col gap-10'>
            <TopHeader />
            <div className='flex justify-evenly items-center' >
                <div className='flex justify-center items-center'>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <ul className='nav-items flex justify-center items-center gap-9 text-2xl'>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/">ABOUT US</Link></li>
                        <li><Link to="/">OUR SERVICE</Link></li>
                        <li><Link to="/">CONTACT US</Link></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-white p-2 text-[#588157] rounded-3xl w-36 h-1/2'>Get Started</button>
                </div>
            </div>
            <div className=' w-[800px] mx-10 my-10 p-7 flex flex-col items-center gap-5'>
                <div className='flex flex-col gap-5'>
                    <p className='text-xl text-[#a3b18a]'>THE BEST PLACE TO RENT AN APARTMENT IN INDONESIA</p>
                    <h1 className='text-6xl text-[#F3ECDC]'>Hey, <span className='text-[#A3B18A]'>Find</span> Your Dream <br /><span className='text-[#A3B18A]'>Apartment Here..</span></h1>
                    <p className='text-xl text-[#FFFFFF]'>Your Dream Home, Just One Click Away: Discover Comfort <br />in Every Apartment in Indonesia.</p>
                </div>
                <div className='flex gap-5 '>
                    <button className='p-2 text-white rounded-3xl w-52 h-12 bg-[#588157]'>See More</button>
                    <button className='bg-white p-2 text-[#588157] rounded-3xl w-52 h-12'>Rent Now</button>
                </div>
            </div>
        </div>
        <div className='bg-[#344E41] flex justify-evenly items-center h-36 text-[#F3ECDC]'>
            <div className='flex flex-col items-center gap-3'>
                <p className='text-3xl'>386 <sup>+</sup></p>
                <p className='text-xl'>Best Apartments</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <p className='text-3xl'>56 <sup>+</sup></p>
                <p className='text-xl'>Our Partners</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <p className='text-3xl'>78K <sup>+</sup></p>
                <p className='text-xl'>Customer Likes</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <p className='text-3xl'>15 th <sup>+</sup></p>
                <p className='text-xl'>Best Experience</p>
            </div>
        </div>
        <div className='w-full h-[730px] bg-[#F3ECDC] flex flex-col justify-around'>
            <div className='ml-10 flex flex-col gap-5'>
                <p className='text-2xl text-[#A3B18A]'>Our Services</p>
                <h1 className='text-5xl text-[#2D2D2D]'>Dream Apartment and <br/> Modern Rooms</h1>
            </div>
            <div className='flex justify-evenly'>
                <div className=' w-[450px] h-80 rounded-2xl bg-[#344E41] flex flex-col justify-evenly'>
                    <FaQuoteLeft className='ml-5 text-[#DADADA]' />
                    <p className='text-2xl ml-5 text-[#FFFFFFBF]'>The best apartment services in Indonesia, absolutely love it..</p>
                    <h1 className='text-3xl ml-5 text-[#F3ECDC]'>Najwa Shihab</h1>
                </div>                    
                <div className='flex justify-between items-center '>
                    <img src={Service1} alt="" />
                    <img src={Service2} className='ml-5' alt="" />
                    <img src={Service3} className='ml-5' alt="" />
                </div>
            </div>
        </div>
        <div className='w-full h-[730px] bg-[#F3ECDC] flex flex-col justify-around items-center'>
            <div className='flex flex-col gap-4 items-center'>
                <p className='text-[#A3B18A] text-xl'>The service we provide</p>
                <h1 className='text-[#2D2D2D] text-4xl'>Services That Support</h1>
            </div>
            <div className='w-full flex justify-around items-center'>
                <div className='bg-[#344E41] w-80 h-72 flex flex-col justify-around items-center rounded-2xl'>
                    <p className='text-2xl'>Best Apartment</p>
                    <p className='text-xl'>Providing a list of the best <br />apartments across Indonesia:</p>
                    <button className='w-52 rounded-2xl p-2 bg-[#588157] text-[#F3ECDC]'>See more</button>
                </div>
                <div className='bg-[#F9F9F9] w-80 h-72 flex flex-col justify-around items-center rounded-2xl'>
                    <HiMiniHome className='text-4xl' />
                    <p className='text-[#2D2D2D] text-2xl'>Modern Room</p>
                    <p className='text-[#6E6E6E] text-xl'>Providing a room that is modern <br />and meets your dreams</p>
                    <button className='w-52 rounded-2xl p-2 bg-[#588157] text-[#F3ECDC]'>See more</button>
                </div>
                <div className='bg-[#F9F9F9] w-80 h-72 flex flex-col justify-around items-center rounded-2xl'>
                    <p className='text-[#2D2D2D] text-2xl'>Complete Facilities</p>
                    <p className='text-[#6E6E6E] text-xl'>Providing all supporting and<br /> adequate facilities.</p>
                    <button className='w-52 rounded-2xl p-2 bg-[#588157] text-[#F3ECDC]'>See more</button>
                </div>
            </div>
        </div>
    </div>
  )
}
