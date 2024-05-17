'use client'
import React, { useState } from 'react'
import Filter from '../Filter/Filter';



export default function Categories() {
   
    const [count, setCount]= useState(1);
    const add = ()=>{
        setCount(count + 1);
    };

    const substract = ()=>{
        if(count > 1){
            setCount(count - 1)
        };
    };


  return (
    <div className='
   flex
   justify-between
   items-center
    w-full
    h-[8vh]
    mt-[11vh]
    fixed
    py-5
    px-6
   
    
    lg:px-8 
    p-6  
    border
    border-t-0
    border-l-0 
    border-r-0
     border-b-gray-100
    '>
<i className="fa-regular fa-map bg-gray-500 p-2 rounded-lg"/>
<div className='flex transition p-3 rounded-xl hover:bg-white/90'>
  <div className="
 bg-white/90
 mr-3
  rounded-lg
  px-2
  py-1
  text-black
  
">
  Anything
  <i class="fa-solid fa-chevron-down ml-4"></i>  
</div>  
<input type="date" className='text-black mr-2  bg-white/90 rounded-lg'/>
 
 <div className='
 bg-white/90
 flex
 justify-between
 items-center
 px-2
 rounded-lg
 text-black
 '>
    <span onClick={substract} className='px-2  rounded-lg text-red-400 bg-white mr-1 cursor-pointer'>-</span>
    <span>{count} guests</span>
    <span onClick={add} className='px-2  rounded-lg text-red-400 bg-white ml-1 cursor-pointer'>+</span>
 </div>

</div>
 <i class="fa-solid fa-filter bg-gray-500 p-2 rounded-lg " ></i>
 </div>
  )
}
