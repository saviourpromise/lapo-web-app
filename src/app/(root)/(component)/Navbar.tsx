'use client'
import React, { useState } from 'react';
// import Home from '../../../../public/asset/Home.svg';
// import Image from 'next/image';
import Searchbar from './Searchbar';
// import Notification from '../../../../public/asset/notification.svg';
// import Dropdown from '../../../../public/asset/Dropdown.svg';
import { IoMdMenu } from 'react-icons/io';
import LeftSideBar from './Leftsidebar';

const Navbar = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

return (
<div className='"hidden xl:flex xl:w-[82vw] md:w-full max-sm:w-full border-[#DEDEDF] bg-white border p-3 flex justify-between px-3'>
<div className="flex gap-1 items-center w-full">
{/* <Image src={Home} alt="Home" className="w-5 h-5 max-sm:w-7 max-sm:h-7" /> */}
<p className="text-[#001735] text-[14px] max-sm:text-[16px] font-medium">Dashboard</p>
</div>

<div className="flex items-center gap-6 w-[55%] max-sm:w-[40%]">
<Searchbar />
<div className="flex gap-6">
{/* <Image src={Notification} alt="Notification" className="w-8 h-8 max-sm:w-8 max-sm:h-8" width={40} height={40} />
<Image src={Dropdown} alt="Dropdown" className="w-8 h-8 max-sm:w-8 max-sm:h-8" width={40} height={40} /> */}
</div>
</div>

{/* Hamburger Menu */}
<div className='xl:hidden md:hidden max-sm:flex'>
<button className="text-2xl p-2">
<IoMdMenu onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
</button>
</div>

{/* Sidebar */}
{isSidebarOpen && (
<div>
<LeftSideBar />
</div>
)}
</div>
);
};
export default Navbar