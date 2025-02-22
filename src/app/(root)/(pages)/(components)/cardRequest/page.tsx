"use client"
import React from 'react'
import DoubleArrow from '../../../../../../public/asset/doublearrow.svg'
import Image from 'next/image'
import { tableData } from '@/app/(root)/lib/constants'
const CardRequest = () => {
return (
<div className='scrollbar border-[3px] border-[#E2E2E2] rounded-lg px-4 py-2 bg-white my-3 max-sm:w-full '>

<div className='flex justify-between px-2'>
<p className='text-[18px] font-medium mt-1'>Recent Card Requests</p>
<Image src={DoubleArrow} alt='Double Arrow'/>
</div>

<div className=" container py-4 max-sm:w-full" style={{ width: "100%", height: 300 }} >
<div className="scrollbar overflow-x-auto" >
<style jsx>{`
.scrollbar::-webkit-scrollbar {
display: none;
}
.post-car {
-ms-overflow-style: none; /* Internet Explorer 10+ */
scrollbar-width: none; /* Firefox */
}
`}</style>
<table className="w-full border-collapse max-sm:w-full" >
{/* Table Header */}
<thead>
<tr className="bg-[#F1F7FF] text-black font-medium text-left border-b-[2px] border-gray-200 ">
<th className="py-4 px-4">Branch</th>
<th className="py-4 px-4">Card Type</th>
<th className="py-4 px-4">Quantity</th>
<th className="py-4 px-4">Checked</th>
<th className="py-4 px-4">Action</th>
</tr>
</thead>

{/* Table Body */}
<tbody>
{tableData.map((user, index) => (
<tr
key={index}
className={`border-b-[2px] border-gray-200 hover:bg-[#f1f7ffaf] transition`}
>
<td className="py-4 px-4 text-center">{user.name}</td>
<td className="py-4 px-4 text-center">{user.cardType}</td>
<td className="py-4 px-4 text-center">{user.qty}</td>
<td className="py-4 px-4 text-center">{user.check}</td>
<td className="py-4 px-4 font-semibold text-[#014DAF] text-center">{user.action}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>
)
}

export default CardRequest