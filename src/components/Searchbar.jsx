import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
    const[input,setInput]=useState("")
    const fetchData=()=>{
        
    }
  return (
   <>
   <div className="h-10  py-3 absolute left-[10px]">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-4 focus:bg-[white] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg> */}
          <FaSearch/>
        </div>
        <input
          type="text"
          placeholder="Search for products,brands and more"
          value={input}
          className="text-slate-500 w-full h-10 font-normal bg-[#F5F5F6] pl-[40px] rounded focus:bg-[white] focus:outline-none focus:border-[2px]"
          onChange={(e)=>setInput(e.target.value)}
        ></input>
   </>
  )
}

export default Searchbar