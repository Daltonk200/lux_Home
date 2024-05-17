'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

async function fetchHouses() {
  const res = await fetch('/api/houses');
  if (!res.ok) {
    throw new Error('Failed to fetch houses');
  }
  return await res.json();
}

export default function Home() {
  const [houses, setHouses] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ location: '', price: '' });

  useEffect(() => {
    async function loadHouses() {
      const fetchedHouses = await fetchHouses();
      setHouses(fetchedHouses);
    }
    loadHouses();
  }, []);

  const filteredHouses = houses.filter(house => {
    return (
      (house.title.toLowerCase().includes(search.toLowerCase()) || house.description.toLowerCase().includes(search.toLowerCase())) &&
      (filter.location === '' || house.location.toLowerCase().includes(filter.location.toLowerCase())) &&
      (filter.price === '' || house.price_per_night <= parseInt(filter.price))
    );
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6">Available Houses</h1>
      <div className="mb-4 flex outline">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by title or description"
          className="mx-12 border p-2 rounded-lg mb-2 text-black"
        />
        <input
          type="text"
          name="location"
          value={filter.location}
          onChange={handleFilterChange}
          placeholder="Filter by location"
          className="w-full border p-2 rounded-lg mb-2 text-black"
        />
        <input
          type="number"
          name="price"
          value={filter.price}
          onChange={handleFilterChange}
          placeholder="Filter by max price"
          className="w-full border p-2 rounded-lg text-black"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredHouses.map(house => (
          <Link href={`/dashboard/${house.id}`} key={house.id} legacyBehavior>
            <a className="border p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
              <img src={house.imageUrl} alt={house.title} className="w-full h-48 object-cover rounded-t-lg" />
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
}
