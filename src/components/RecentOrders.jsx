import React, { useEffect, useState } from 'react'
import { getOrders } from '../API/API'
import { AiFillRest } from 'react-icons/ai'


const RecentOrders = () => {
    const [dataSource, setDataSource] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setDataSource(data)
            });
    }, [])

    return (
        <>
            <div className='flex flex-col text-bold text-[35px] m-4'>Recent orders</div>
            <span className='border-b-4 border-gray-700 text-[25px]'>
                <span className='flex justify-between'>Product Name
                    <span>Price</span>
                    <span>Category</span>
                </span>
            </span>
            {/* <div className='grid xl:grid-cols-3 md:grid-cols-2 flex justify-center'> */}
            <div className='flex flex-col border-gray-400'>

                {dataSource && dataSource.slice(6, 14).map((product) => {
                    return [
                        <>
                            <div className='grid grid-cols-3 flex flex-grow border-gray-400'>
                                <p className='flex justify-center items-center text-center text-[20px] bg-gray-200 p-2 m-2'>{product.title}</p>
                                <p className='flex justify-center items-center text-[20px] bg-gray-200 p-2 m-2'>${product.price}</p>
                                <p className='flex justify-center items-center text-[20px] bg-gray-200 p-2 m-2'>{product.category}</p>
                            </div>
                        </>
                    ]
                })}
                {/* </div> */}
                {/* <div className='flex flex-col border-gray-400'>
                <p className='flex border-b-4 border-gray-700 justify-center text-[25px]'>Price</p>
                {dataSource && dataSource.slice(6, 14).map((product) => {
                    return [
                        <>
                        <p className='flex justify-center items-center text-[20px] bg-gray-200 p-2 m-2'>${product.price}</p>
                        </>
                    ]
                })}
            </div>
                <div className='flex flex-col border-gray-400'>
                <p className='flex border-b-4 border-gray-700 justify-center text-[25px]'>Category</p>
                {dataSource && dataSource.slice(6, 14).map((product) => {
                    return [
                        <>
                        <p className='flex justify-center items-center text-[20px] bg-gray-200 p-2 m-2'>{product.category}</p>
                        </>
                    ]
                })}
            </div> */}
            </div>
        </>
    )
}

export default RecentOrders