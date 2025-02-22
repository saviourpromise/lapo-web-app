import React from 'react'
// import Ana from '../../../../../../../public/asset/analytic.svg'
// import ArrowUp from '../../../../../../../public/asset/arrowup.svg'
// import Image from 'next/image'
import { Analytic } from '@/app/(root)/lib/constants'
const Analytics = () => {
return (
<div >
<p className='my-3 max-sm:my-5'>Analytics</p>
<div className='grid xl:grid-cols-4 md:grid-cols-2 gap-3 max-sm:grid-cols-1'>
{Analytic.map((item, index) => (
<div className='border-[3px] border-[#E2E2E2] rounded-lg px-4 py-2 bg-white ' key={index}>
{/* <Image src={item.imageUrl} alt='Analytics' className='my-2'/> */}
<p className='my-2 text-[15px] font-medium'>{item.label}</p>

<div className='flex justify-between items-center my-2'>
<h1 className='text-[24px] font-bold'>{item.total}</h1>
<div className='flex gap-4 items-center'>
<div className='flex items-center gap-2'>
{/* <Image src={ArrowUp} alt='Arrow up'/> */}
<p className='text-[#29A174] text-[14px] font-medium'>+{item.margin}</p>
</div>
<p className='text-[14px] font-medium'>{item.month}</p>
</div>
</div>
</div>
))}
</div>

</div>
)
}

export default Analytics