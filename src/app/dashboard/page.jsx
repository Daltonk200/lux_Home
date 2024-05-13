import React from 'react'
import Sidebar from '@/components/NavBar/Sidebar/Sidebar'

export default function page() {
  return (
      <main className='flex w-full h-96'>
         <Sidebar/>
         <div className="flex-1 bg-red-400 p-4">
        {/* Main section content */}
      </div>
      </main> 
 )
}
