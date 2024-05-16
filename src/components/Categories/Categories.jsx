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
    mt-[10vh]
    fixed
    py-5
    px-6
    bg-green-500
    
    lg:px-8 
    p-6  
    border
    border-t-0
    border-l-0 
    border-r-0
     border-b-gray-100
    '>
<i className="fa-regular fa-map bg-gray-500 p-2 rounded-lg"/>
<div className='flex border-2 border-red-300'>
  <div className="
 bg-gray-400
  mr-3
  rounded-lg
  px-2
  py-1
">
  Anything
  <i class="fa-solid fa-chevron-down"></i>  
</div>  
<input type="date" className='text-black mr-2 bg-gray-400 rounded-lg'/>
 
 <div className='
 bg-gray-400
 flex
 justify-between
 items-center
 px-2
 '>
    <span onClick={substract} className='px-2  rounded-lg text-red-400 bg-white mr-1 cursor-pointer'>-</span>
    <span>{count}guests</span>
    <span onClick={add} className='px-2  rounded-lg text-red-400 bg-white ml-1 cursor-pointer'>+</span>
 </div>

</div>
 <i class="fa-solid fa-filter bg-gray-500 p-2 rounded-lg " ></i>
 </div>
  )
}
