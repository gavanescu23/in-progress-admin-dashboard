import React from 'react'
import { HiCurrencyEuro } from "react-icons/hi2";
import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineSquare3Stack3D } from "react-icons/hi2";

const DashBoard = () => {
    return (
        <>
            <div className='flex flex-col text-bold text-[35px] m-4'>
                <p>Dashboard</p>
                <div className='flex justify-start text-[15px]'>
                    <div className='flex justify-center flex-col items-center border h-32 w-32 rounded-lg bg-gray-200 m-3 text-[20px]'><HiOutlineShoppingCart color='rgb(0, 255, 25)' size={40}></HiOutlineShoppingCart>Orders<p className='text-[18px]'>1,2345</p></div>
                    <div className='flex justify-center flex-col items-center border h-32 w-32 rounded-lg bg-gray-200 m-3 text-[20px]'><HiOutlineSquare3Stack3D color='rgb(140, 0, 255)' size={40}></HiOutlineSquare3Stack3D>Inventory <p className='text-[18px]'>1,2345</p></div>
                    <div className='flex justify-center flex-col items-center border h-32 w-32 rounded-lg bg-gray-200 m-3 text-[20px]'><HiOutlineUser color='rgb(0, 200, 255)' size={40}></HiOutlineUser>Customers <p className='text-[18px]'>1,2345</p></div>
                    <div className='flex justify-center flex-col items-center border h-32 w-32 rounded-lg bg-gray-200 m-3 text-[20px]'><HiCurrencyEuro color='rgb(255, 0, 0)' size={40}></HiCurrencyEuro>Revenue <p className='text-[18px]'>1,2345</p></div>
                </div>
            </div>

        </>
    )
}

export default DashBoard