import React from 'react'
import LOGO from '../images/HomeLogo.png'
import { FaCaretRight, FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhoneSquare, FaPinterest, FaTwitter } from 'react-icons/fa'
import { GrLocationPin } from "react-icons/gr";

export default function Footer() {
  return (
    <div className='bg-[#344E41] w-full h-[500px] flex flex-col justify-evenly items-center'>
        <div className=' flex justify-center items-center'>
            <div className='w-[400px] h-[265px] flex flex-col justify-between'>
                <img src={LOGO} className='text-3xl' alt="" />
                <p className='text-xl text-white'>The best accommodation service application</p>
                <p className='text-xl text-white'>Of all the apartments and hotels in Indonesia</p>
                <div className='w-[114px] h-[20px] text-[#F3ECDC] flex  justify-evenly items-center'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaPinterest />
                </div>
            </div>
            <div className='w-[253px] h-[264px] flex flex-col justify-evenly items-center'>
                <div>
                    <p className='text-2xl text-[#F3ECDC]'>Quick Links</p>
                </div>
                <div className='h-[200px] flex flex-col justify-evenly items-center'>
                    <div className='flex justify-center'>
                        <FaCaretRight className='text-[#F3ECDC]' />
                        <p className='text-white'>Home</p>
                    </div>
                    <div className='flex justify-center'>
                        <FaCaretRight className='text-[#F3ECDC]' />
                        <p className='text-white'>About US</p>
                    </div>
                    <div className='flex justify-center'>
                        <FaCaretRight className='text-[#F3ECDC]' />
                        <p className='text-white'>Our Service</p>
                    </div>
                    <div className='flex justify-center'>
                        <FaCaretRight className='text-[#F3ECDC]' />
                        <p className='text-white'>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className='w-[253px] h-[264px] flex flex-col justify-evenly items-center'>
                <div>
                    <p className='text-2xl text-[#F3ECDC]'>Site Links</p>
                </div>
                <div className='h-[200px] flex flex-col justify-evenly items-center'>
                    <div className='flex justify-center'>
                        <FaCaretRight className='text-[#F3ECDC]' />
                        <p className='text-white'>Terms and Conditions</p>
                    </div>
                    <div className='flex justify-center'>
                        <FaCaretRight className='text-[#F3ECDC]' />
                        <p className='text-white'>Disclaimer</p>
                    </div>
                    <div className='flex justify-center'>
                        <FaCaretRight className='text-[#F3ECDC]' />
                        <p className='text-white'>GDPR</p>
                    </div>
                    <div className='flex justify-center'>
                        <FaCaretRight className='text-[#F3ECDC]' />
                        <p className='text-white'>Rules of Usage</p>
                    </div>
                </div>
            </div>
            <div className='w-[253px] h-[264px] flex flex-col justify-evenly items-center'>
                <div>
                    <p className='text-2xl text-[#F3ECDC]'>Stay with Us</p>
                </div>
                <div className='h-[200px] flex flex-col justify-evenly items-center'>
                    <div className='flex justify-center'>
                        <GrLocationPin className='text-[#F3ECDC]' />
                        <p className='text-white'>Jakarta, Indonesia</p>
                    </div>
                    <div className='flex justify-center'>
                        <FaEnvelope className='text-[#F3ECDC]' />
                        <p className='text-white'>Hello@Email.com</p>
                    </div>
                    <div className='flex justify-center'>
                        <FaPhoneSquare className='text-[#F3ECDC]' />
                        <p className='text-white'>( +62 ) 123 456 789</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center text-2xl'>
            <p className='text-white'>Copyrights</p>
        </div>
    </div>
  )
}
