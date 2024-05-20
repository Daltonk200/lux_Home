'use client'
import React from 'react';
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
          <div className="my-2 flex justify-center items-center hover:outline rounded">
          <i className=' flex fa-solid fa-house w-8 h-8 items-center'></i>

            {/* <img src="/icon1.svg" alt="Icon 1" className="  w-8 h-8" /> */}
            {isHovered && <span className="text-white ml-3">Home</span>}
          </div>

          <div className="my-2  flex justify-center items-center hover:outline rounded">
          <i className=' flex fa-solid fa-house w-8 h-8 items-center'></i>
            {/* <img src="/icon2.svg" alt="Icon 2"  /> */}
            {isHovered && <span className="text-white ml-3">HOME</span>}
          </div>

          <div className="my-2  flex justify-center items-center hover:outline rounded">
          <i className=' flex fa-solid fa-house w-8 h-8 items-center'></i>
            {/* <img src="/icon2.svg" alt="Icon 2"  /> */}
            {isHovered && <span className="text-white ml-3">HOME</span>}
          </div>
          <div className="my-2  flex justify-center items-center hover:outline rounded">
          <i className=' flex fa-solid fa-house w-8 h-8 items-center'></i>
            {/* <img src="/icon2.svg" alt="Icon 2"  /> */}
            {isHovered && <span className="text-white ml-3">HOME</span>}
          </div>

          <div className="my-2  flex justify-center items-center hover:outline rounded">
          <i className=' flex fa-solid fa-house w-8 h-8 items-center'></i>
            {/* <img src="/icon2.svg" alt="Icon 2"  /> */}
            {isHovered && <span className="text-white ml-3">HOME</span>}
          </div>
          {/* Add more icons here */}
        </div>
      </div>
      
      </>
  );
};

export default Sidebar;
