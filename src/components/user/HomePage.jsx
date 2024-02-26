import React from 'react';
import TopHeader from '../TopHeader';
import Footer from './Footer';
import Logo from '../images/HomeLogo.png';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaCalendarAlt, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { FaAward } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import Service1 from '../images/service1.png';
import Service2 from '../images/service2.png';
import Service3 from '../images/service3.png';
import Service4 from '../images/service4.png';
import Service5 from '../images/service5.png';
import Service6 from '../images/service6.jpeg'
import ALogo from '../images/ALogo.png'
import Logo2 from '../images/Logo.png'

export default function HomePage() {
  return (
    <div className='home h-screen w-full' >
        <div className='home-main min-h-screen w-full flex flex-col gap-10 bg'>
            <TopHeader />
            <div className='flex justify-evenly items-center' >
                <div className='flex justify-center items-center'>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <ul className='nav-items flex justify-center items-center gap-9 text-2xl text-[#F3ECDC]'>
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
                    <p className='text-xl text-[#588157]'>THE BEST PLACE TO RENT AN APARTMENT IN INDONESIA</p>
                    <h1 className='text-6xl text-[#F3ECDC]'>Hey, <span className='text-[#588157]'>Find</span> Your Dream <br /><span className='text-[#588157]'>Apartment Here..</span></h1>
                    <p className='text-xl text-[#FFFFFF]'>Your Dream Home, Just One Click Away: Discover Comfort <br />in Every Apartment in Indonesia</p>
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
        <div className='w-full h-[730px] bg-[#F3ECDC] flex flex-col justify-around items-center'>
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
        <div className='w-full h-[700px] bg-[#F3ECDC] flex flex-col justify-around items-center'>
            <div className='flex flex-col gap-4 items-center'>
                <p className='text-[#A3B18A] text-xl'>The service we provide</p>
                <h1 className='text-[#2D2D2D] text-4xl'>Services That Support</h1>
            </div>
            <div className='w-full flex justify-evenly items-center'>
                <div className='bg-[#344E41] w-80 h-72 flex flex-col justify-around items-center rounded-2xl'>
                    <img src={ALogo} alt="" />
                    <p className='text-2xl'>Best Apartment</p>
                    <p className='text-xl'>Providing a list of the best <br />apartments across Indonesia:</p>
                    <button className='w-52 rounded-2xl p-2 bg-[#588157] text-[#F3ECDC]'>See more</button>
                </div>
                <div className='bg-[#F9F9F9] w-80 h-72 flex flex-col justify-around items-center rounded-2xl'>
                    <HiMiniHome className='text-6xl text-[#A3B18A]' />
                    <p className='text-[#2D2D2D] text-2xl'>Modern Room</p>
                    <p className='text-[#6E6E6E] text-xl'>Providing a room that is modern <br />and meets your dreams</p>
                    <button className='w-52 rounded-2xl p-2 bg-[#588157] text-[#F3ECDC]'>See more</button>
                </div>
                <div className='bg-[#F9F9F9] w-80 h-72 flex flex-col justify-around items-center rounded-2xl'>
                    <img src={Logo2} alt="" />
                    <p className='text-[#2D2D2D] text-2xl'>Complete Facilities</p>
                    <p className='text-[#6E6E6E] text-xl'>Providing all supporting and<br /> adequate facilities</p>
                    <button className='w-52 rounded-2xl p-2 bg-[#588157] text-[#F3ECDC]'>See more</button>
                </div>
            </div>
        </div>
        <div className='w-full h-[730px] flex justify-around items-center bg-[#F3ECDC]'>
            <div className='flex items-center w-[600px]'>
                <img src={Service5} className='relative' alt="" />
                <img src={Service4} className='absolute z-10 ml-48 mt-52' alt="" />
                {/* <div className='bg-[#344E41] w-40 h-24 rounded-xl absolute flex flex-col justify-center items-center mx-14 mt-[400px]'>
                    <p className='text-[#A3B18A] text-3xl'>99 <sub>%</sub></p>
                    <p className='text-[#F3ECDC] text-xl'>Customer Like</p>
                </div> */}
            </div>
            <div className='w-[600px] h-[500px] flex flex-col justify-around'>
                <p className='text-[#A3B18A] text-xl'>The Best Services</p>
                <h1 className='text-[#2D2D2D] text-5xl'>We Provide the Best <br />Apartments and Services</h1>
                <p className='text-[#6E6E6E] text-xl'>Providing the best service until you get the apartment of your dreams</p>
                <div className='flex'>
                    <FaAward className='text-[#A3B18A] text-xl' /> 
                    <p className='text-[#2D2D2D] text-xl ml-5'>The Best Apartment Service in Indonesia</p>
                </div>
                <div className='flex'>
                    <FaCalendarAlt className='text-[#A3B18A] text-xl' /> 
                    <p className='text-[#2D2D2D] text-xl ml-5'>We are ready to serve you for more than 15 years</p>
                </div>
                <button className='w-52 rounded-2xl p-2 bg-[#588157] text-[#F3ECDC]'>View more</button>
            </div>
        </div>
        <div className='bg-[#344E41] w-full h-[700px] flex justify-around items-center'>
            <div className='w-[750px] h-[600px] flex flex-col justify-evenly items-center ml-5'>
                <p className='text-[#A3B18A] text-xl'>Why should you use our services</p>
                <p className='text-[#F3ECDC] text-5xl'>We provide the best service results for your apartment</p>
                <div className='w-[700px] flex justify-evenly items-center gap-5'>
                    <img src={Service6} className='w-72 rounded-xl' alt="" />
                    <div className='flex flex-col items-center justify-evenly h-[400px]'>
                        <div className='flex items-center justify-evenly w-[300px]'>
                            <FaShieldAlt className='text-[#A3B18A] text-5xl' />
                            <div className='flex flex-col items-center'>
                                <h1 className='text-[#F3ECDC] text-2xl'>Service Warranty</h1>
                                <p className='text-[#FFFFFFBF] text-xl'>Getting security</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-evenly w-[400px]'>
                            <AiOutlineBars className='text-[#A3B18A] text-5xl' />
                            <div className='flex flex-col items-center'>
                                <h1 className='text-[#F3ECDC] text-2xl'>List of the Best Apartments</h1>
                                <p className='text-[#FFFFFFBF] text-xl'>The best apartment in Indonesia</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-evenly w-[350px]'>
                            <TiMessages className='text-[#A3B18A] text-5xl' />
                            <div className='flex flex-col items-center'>
                                <h1 className='text-[#F3ECDC] text-2xl'>Free Consultation</h1>
                                <p className='text-[#FFFFFFBF] text-xl'>Best consultation available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-around items-center bg-[#3A5A40] rounded-2xl h-[500px] w-[400px]'>
                <FaQuoteLeft />
                <p className='text-2xl text-white'>"Adequate facilities in a modern place."</p>
                <p className='text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='w-[300px] h-[150px] flex flex-col justify-center items-center '>
                    <div className='flex justify-center items-center'>
                        <FaCheckCircle className='text-[#F3ECDC]' />
                        <p className='text-xl'>24 Hours Consultation</p>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <FaCheckCircle className='text-[#F3ECDC]' />
                        <p className='text-xl'>Certification Team</p>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <FaCheckCircle className='text-[#F3ECDC]' />
                        <p className='text-xl'>More Office Branch</p>
                    </div>
                    <div className='flex justify-evenly items-center'>
                        <FaCheckCircle className='text-[#F3ECDC]' />
                        <p className='text-xl'>Best Work Result</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
