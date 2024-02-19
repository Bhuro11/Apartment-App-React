import React from 'react'
import Logo from '../images/HomeLogo.png'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='m-0'>
        <div className='home flex justify-evenly items-center' style = {{
               backgroundImage:
               'url("")',
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
            }}>
            <div className='flex justify-center items-center'>
                <img src={Logo} alt="" />
            </div>
            <div>
                <ul className='flex justify-center items-center gap-5'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/">ABOUT US</Link></li>
                    <li><Link to="/">OUR SERVICE</Link></li>
                    <li><Link to="/">CONTACT US</Link></li>
                </ul>
            </div>
            <div>
                <button className='bg-white text-black p-2 text-xl'>Get Started</button>
            </div>
        </div>
    </div>
  )
}
