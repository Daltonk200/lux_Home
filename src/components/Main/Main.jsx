'use client'
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { homeContext } from '../Context';
import Image from 'next/image';

const Houses = () => {
  const [favorites,setFavorites] = useContext(homeContext);
  console.log(favorites);

  const addToFavorites = (item)=>{
    const  liked = favorites.find(items=>items.id === item.id);
    if(liked){
         alert('Already in Favorites') 
    }else{
      setFavorites(prev=>[...prev,item])
      alert('Added to favorites')
    }
  }
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Fetch houses data from your API
    fetch('/api/houses')
      .then(response => response.json())
      .then(data => setHouses(data));
  }, []);

  return (
    <div  className="container float-right mt-[20vh] p-4 h-screen overflow-y-scroll pb-[10rem] ">
      {/* <h1 className="text-3xl font-bold mb-6">Available Houses</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {houses.map(house => (
          <>
           
            <div className="border p-4 rounded-lg shadow-lg overflow-hidden group">
              
              <div className="relative  overflow-hidden h-48 rounded-t-lg">
              <label className="ui-bookmark z-20 absolute right-3"  onClick={()=> addToFavorites(house)}>
                   <input type="checkbox" />
                   <div class="bookmark">
                     <svg
                       viewBox="0 0 16 16"
                       style={{marginTop:"4px"}}
                       class="bi bi-heart-fill"
                       height="25"
                       width="25"
                       xmlns="http://www.w3.org/2000/svg"
                       >
                       <path
                         d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                         fill-rule="evenodd"
                         ></path>
                     </svg>
                   </div>
              </label>
                {/* <span className='absolute top-0 right-3 z-10' onClick={()=> addToFavorites(house)} >
                <i class="fa-solid fa-heart"></i>             
                </span> */}
              <Link className='' key={house.id} href={`/dashboard/${house.id}`} legacyBehavior >
                <Image
                  src={house.imageUrl}
                  alt={house.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
              </div>
              <h2 className="text-xl font-semibold mt-2">{house.title}</h2>
              <p className="text-gray-700">{house.description}</p>
              <p className="text-lg font-bold mt-2">${house.price_per_night} per night</p>
              <p className="text-gray-600">{house.location}</p>
            </div>

          
          </>
        ))}
      </div>
    </div>
  );
};

export default Houses;
