import React from 'react'
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
return (
<div className="flex items-center border border-[#D0D5DD] rounded-full px-3 py-2 w-full max-w-xs shadow-sm max-sm:hidden">
<FiSearch className="text-gray-500 mr-2" />
<input
type="text"
placeholder="Search..."
className="flex-1 outline-none text-gray-700"
/>


</div>
)
}

export default Searchbar