'use client'
import React from 'react'
import { useState } from 'react'
// import Date from '../../../../../public/asset/date.svg'
import Image from 'next/image'
import { QuickAccess } from '../lib/constants'
import { IoIosArrowForward } from 'react-icons/io'
import Analytics from "@/app/(root)/(pages)/(components)/analytics/page"
import SalesBarChart from '@/app/(root)/(pages)/(components)/barchart/page'
import CardRequest from '@/app/(root)/(pages)/(components)/cardRequest/page'
import SalesLineChart from '@/app/(root)/(pages)/(components)/linegragh/page'
import SalesPieChart from '@/app/(root)/(pages)/(components)/piechart/page'

const Home = () => {

    return (
        <div className='scrollbar mx-3 overflow-y-auto max-h-[650px]'>
            <style jsx>{`
.scrollbar::-webkit-scrollbar {
display: none;
}
.post-car {
-ms-overflow-style: none; /* Internet Explorer 10+ */
scrollbar-width: none; /* Firefox */
}
`}</style>
            <div className='flex justify-between my-2 items-center max-sm:flex-col'>
                <div>
                    <p className='text-[#121212] text-[18px] font-bold '>Hi Nazeer, what would you like to do today?</p>
                    <p className='text-[14px] font-medium text-[#121212 mt-1'>Last login: 26/11/2024 14:39:58</p>
                </div>

                <button className='border border-[#D0D5DD] flex gap-3 px-2 py-1 items-center rounded-lg max-sm:mb-3 max-sm:mt-3'>
                    <div className='flex gap-1 items-center'>
                        {/* <Image src={Date} alt='date' /> */}
                        <p className='text-[12px] font-medium text-[#121212]'>Today</p>
                    </div>
                    |
                    <div>
                        <p className='text-[12px] font-medium text-[#121212]'>11 Nov 2024</p>
                    </div>
                </button>
            </div>

            <div className='border-[3px] border-[#E2E2E2] rounded-lg p-4 bg-white'>
                <p className='text-[#121212] text-[16px] font-medium'>Your Quick Access</p>

                <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-3 mt-4 max-sm:grid-cols-1'>
                    {QuickAccess.map((items, index) => (
                        <div className='bg-[#F1F7FF] flex items-center p-4 gap-4 rounded-md ' key={index}>
                            {/* <Image src={items.imageUrl} alt='Images' /> */}
                            <div className='flex gap-1 items-center'>
                                <p className=' font-medium text-[#121212] text-[15px] '>{items.label}</p>
                                <IoIosArrowForward size={16} color="#000" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <Analytics />

                <div className='grid grid-cols-2 items-center gap-3 max-sm:grid-cols-1'>
                    <SalesBarChart />
                    <CardRequest />
                </div>

                <div className='grid grid-cols-2 items-center gap-3 max-sm:grid-cols-1'>
                    <SalesLineChart />
                    <SalesPieChart />
                </div>
            </div>
        </div>
    )
}

export default Home