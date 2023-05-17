import React from 'react'
import mePic from './ME1578989925359_2.jpg'
import {AiOutlineMail, AiFillBell} from "react-icons/ai";


const NavBar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-gray-200 text-gray-800 xl:text-[30px] md:text-[18px] sm:text-[15px] py-3'>
            <div className="flex justify-between">
            <img src={mePic} className='rounded-full w-20 h-20' alt='/'></img>
            <p className='flex items-center'>Gava's admin dashboard</p>
            <div className="flex justify-between">
            <button onClick={() => window.location = 'mailto:gavanescuvlad@yahoo.com'}><AiOutlineMail size={'3rem'}></AiOutlineMail></button>
            <button><AiFillBell size={'3rem'}></AiFillBell></button>
            </div>
            </div>
        </nav>
    )
}

export default NavBar