'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Fetch houses data from your API
    fetch('/api/houses')
      .then(response => response.json())
      .then(data => setHouses(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Available Houses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {houses.map(house => (
          <Link key={house.id} href={`/dashboard/${house.id}`} legacyBehavior>
            <a className="border p-4 rounded-lg shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden h-48 rounded-t-lg">
                <img
                  src={house.imageUrl}
                  alt={house.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h2 className="text-xl font-semibold mt-2">{house.title}</h2>
              <p className="text-gray-700">{house.description}</p>
              <p className="text-lg font-bold mt-2">${house.price_per_night} per night</p>
              <p className="text-gray-600">{house.location}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Houses;
