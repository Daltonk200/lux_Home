import React from 'react'
import Sidebar from '@/components/NavBar/Sidebar/Sidebar'
import Main from '@/components/Main/Main'
import Categories from '@/components/Categories/Categories'
import NavBar from '@/components/NavBar/NavBar'



export default function page() {
  return (
    <>
    <NavBar />
    {/* <Categories/> */}
      
      <div className="flex" style={{
         alignItems:"start"

      }} >
         
         <Sidebar/>
         <Main/>
      </div>

      </>
 )
}
