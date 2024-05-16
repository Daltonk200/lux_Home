import React, { useState } from 'react'

export default function Filter(){

    const [isOpen,setIsOpen]= useState(false);

    const toggleFilter = () =>{
        setIsOpen(!isOpen)
    };
  
return (
    <div className="fixed top-0 right-0 bottom-0 z-50 bg-gray-200 w-64 overflow-y-auto transition-transform duration-300 transform translate-x-0 sm:translate-x-full sm:w-96" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
      {/* Sidebar content */}
    </div>
  );
};
