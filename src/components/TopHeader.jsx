import React from 'react'
import { FaEnvelope, FaInstagram, FaPhoneSquareAlt, FaPinterest, FaTwitter } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className='flex justify-center m-0'>
        <div className='m-0 h-14 w-[1240px] bg-[#588157] flex justify-between items-center gap-3'>
            <div className='flex justify-center items-center gap-6 ml-5 text-xl text-white'>
                <div className='flex justify-center items-center gap-2'>
                    <FaEnvelope />
                    <p>bhargavtalpada2004@gmail.com</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaPhoneSquareAlt />
                    <p>(+91) 72039 13274</p>
                </div>                
            </div>
            <div className='flex justify-center items-center gap-3 mr-5 text-xl text-white'>
                <FaInstagram />
                <FaTwitter />
                <FaPinterest />
            </div>
        </div>
    </div>
  )
}
