"use client"
import React from "react"
import Image from 'next/image';
import notify from "../../../../../public/asset/notify.svg"
import user from "../../../../../public/asset/use.svg"
import sidebarIcon from '../../../../../public/asset/credit-card-pos.svg'

const CardProfile = () => {
    return(
        <div>
            <div className="flex px-6 py-4 justify-between bg-white">
<div className="flex gap-1 items-center w-full">
<Image src={sidebarIcon} alt="sidebarIcon" className="w-5 h-5 max-sm:w-7 max-sm:h-7" />
<p className="text-[#001735] text-[12px] max-sm:text-[16px] font-medium">Card Profile</p>
</div>

<div className="flex gap-4">
    <Image src={notify} alt="" />
    <Image src={user} alt="" />
</div>
</div>
        </div>
    )
}

export default CardProfile