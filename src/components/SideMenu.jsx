import React from 'react'
import { HiSquares2X2, HiOutlineShoppingCart,HiOutlineUser,HiOutlineSquare3Stack3D } from "react-icons/hi2";

const SideMenu = () => {
    return (
        <div className='drawer-navigation border-r max-w-[150px]'>
            <button className='flex justify-center items-center pr-4'><HiSquares2X2 size={40}></HiSquares2X2>Dashboard</button>
            <button className="flex justify-center items-center pr-4"><HiOutlineShoppingCart size={40} />Orders</button>
            <button className="flex justify-center items-center pr-4"><HiOutlineUser size={40}></HiOutlineUser>Customers</button>
            <button className="flex justify-center items-center pr-4"><HiOutlineSquare3Stack3D size={40}></HiOutlineSquare3Stack3D>Inventory</button>
        </div>
    )
}

export default SideMenu