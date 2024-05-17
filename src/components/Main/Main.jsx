// import React from 'react'

// export default function Main() {
//   return (
//     <
//         {/* Main section content */}
//       </div>
//   )
// }
'use client'
import { useEffect, useState } from 'react';

export default function HousesPage() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('/api/houses')
      .then(response => response.json())
      .then(data => setHouses(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Available Houses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {houses.map(house => (
          <div key={house.id} className="border p-4 rounded-lg shadow-lg">
            <img src={house.imageUrl} alt={house.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-2">{house.title}</h2>
            <p className="text-gray-700">{house.description}</p>
            <p className="text-lg font-bold mt-2">${house.price} per night</p>
            <p className="text-gray-600">{house.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}