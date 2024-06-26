'use client'
import React, { useContext } from 'react'
import { homeContext } from '@/components/Context';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
const [favorites,setFavorites] = useContext(homeContext);
const deleted = (id)=>{
 const findId = favorites.findIndex(house=>house.id === id);
 if(findId !== -1){
    const updateFavorites = [
        ...favorites.slice(0,findId),
        ...favorites.slice(findId+1)
    ]
    setFavorites(updateFavorites)
 }
}
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6">Your Favorites Houses</h1>
    <div className="container h-screen overflow-y-scroll pb-[10rem] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map(items=>(
          <>
         <Link key={items.id} href={`/dashboard/${items.id}`} legacyBehavior >
         <a className="border p-4 rounded-lg shadow-lg overflow-hidden group">
           <div className="relative overflow-hidden h-48 rounded-t-lg">
             <Image
               src={items.imageUrl}
               alt={items.title}
               width={300}
               height={200}
               className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
             />
           </div>
           <h2 className="text-xl font-semibold mt-2">{items.title}</h2>
           <p className="text-gray-700">{items.description}</p>

           
           <div className="flex justify-between">
           <div>
           <p className="text-lg font-bold mt-2">${items.price_per_night} per night</p>
           <p className="text-gray-600">{items.location}</p>
           </div>
           <button className='px-2 py-0 my-1 rounded-lg bg-red-500' onClick={()=>deleted(items.id)}>Delete</button>
           </div>
         </a>
       </Link>
        </>
        ))}
           </div>
    </div>
    </div>
  );
}

export default Page