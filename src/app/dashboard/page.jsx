import React from 'react'
import Sidebar from '@/components/NavBar/Sidebar/Sidebar'
import Main from '@/components/Main/Main'
import Categories from '@/components/Categories/Categories'
import NavBar from '@/components/NavBar/NavBar'



export default function page() {
  return (
    <>
    <NavBar />
    <Categories/>
      <main className='flex w-full h-[80vh] mt-[19vh] '>
         <Sidebar/>
         <Main/>
      </main> 
      </>
 )
}
