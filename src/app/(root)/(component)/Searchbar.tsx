'use client';
import React from 'react'
import { FiSearch } from "react-icons/fi";
import notify from "../../../../public/asset/notify.svg"
import user from "../../../../public/asset/use.svg"
import Image from 'next/image';

const Searchbar = () => {
return (
    <div className='flex gap-4'>
       
    
<div className="flex items-center border border-[#D0D5DD] rounded-full px-3 py-2 w-full max-w-xs shadow-sm max-sm:hidden">
<FiSearch className="text-gray-500 mr-2" />
<input
type="text"
placeholder="Search..."
className="flex-1 outline-none text-gray-700"
/>

</div>
<Image src={notify} alt='notify' />
<Image src={user} alt='user' />
</div>
)
}

export default Searchbar