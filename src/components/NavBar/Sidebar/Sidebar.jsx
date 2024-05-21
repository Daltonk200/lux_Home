'use client'
import React from 'react';
import Link from 'next/link';


// test
const Sidebar = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <div
        className={`w-16 float-left min-h-[80vh] bg-gray-800  mt-[20vh] transition-all duration-300  ${
          isHovered ? 'w-48' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col  h-full">
          <Link href='/dashboard'>

          <div className="my-2 flex justify-center items-center hover:outline rounded">
          <i className=' flex fa-solid fa-house w-8 h-8 items-center'/>
            {isHovered && <span className="text-white ml-3">Houses</span>}
          </div>
          </Link>

          <Link href='/search'>
          <div className="my-2  flex justify-center items-center hover:outline rounded">
          <i class="fa-solid fa-magnifying-glass flex w-8 h-8 items-center"/>      
            {isHovered && <span className="text-white ml-3">Search</span>}
          </div>
          </Link>
           <Link href='/favorites'>
          <div className="my-2  flex justify-center items-center hover:outline rounded">
          <i class="flex  fa-solid fa-bookmark w-8 h-8 items-center"/>
            {isHovered && <span className="text-white -mr-4">Favorites</span>}
          </div>
           </Link>
           <Link href='/map'>
          <div className="my-2  flex justify-center items-center hover:outline rounded">
          <i className="flex  fa-regular fa-map w-8 h-8 items-center"/>
            {isHovered && <span className="text-white ml-3">Maps</span>}
          </div>
           </Link>
   
      
        </div>
      </div>
      
      </>
  );
};

export default Sidebar;
