'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import Image from 'next/image'
import { sidebarLinks } from '../lib/constants'
import Lapo_Logo from '../../../../public/asset/Lapo_Logo.svg'
import Logout from '../../../../public/asset/logout.svg'
import Cardifra from '../../../../public/asset/cardinfra.svg'


const LeftSideBar = () => {
const pathname = usePathname()
return (
<div>
<nav className="hidden lg:flex px-3 py-6 flex-col justify-between min-w-[18vw] bg-dark-4 border border-[#DEDEDF] bg-white">
<div className="flex flex-col gap-11">
<Link href='/' className="flex gap-3 items-center">
<Image src={Lapo_Logo} alt="Logo" width={170} height={36} />
</Link>


<ul className="flex flex-col gap-3">
{sidebarLinks.map((link) => {
const isActive = pathname === link.route
return (
<li className={`rounded-lg base-medium hover:bg-[#F6F6F6] hover:border hover:border-[#E2E2E2] transition group ${isActive && 'bg-[#F6F6F6] border border-[#E2E2E2]'}`} key={link.label}>
<Link href={''} className='flex gap-4 items-center p-[0.85rem]'>
<Image src={link.imgURL} alt="" className={`w-5 h-5 group-hover:invert-white ${isActive && 'invert-white'}`} />
<p className='text-[14px] font-medium text-[#014DAF] '>{link.label}</p>
</Link>
</li>
)
})}
</ul>
</div>
<button className="flex gap-2 items-center mt-40 mb-20">
<Image src={Logout} alt=""/>
<p className="font-medium">Logout</p>
</button>

<div>
<p className='text-[#808080] text-[10px] font-medium'>POWERED BY</p>
<Image src={Cardifra} alt='Cardinfra' className='mt-2' width={120} height={120}/>
</div>
</nav>


</div>
)
}

export default LeftSideBar
