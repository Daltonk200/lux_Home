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
      <div className="mb-4 flex outline justify-between items-center">
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
          className=" border p-2 rounded-lg mb-2 text-black"
        />
        <input
          type="number"
          name="price"
          value={filter.price}
          onChange={handleFilterChange}
          placeholder="Filter by max price"
          className=" border p-2 rounded-lg text-black"
        />
      </div>
      <div className='h-screen overflow-y-scroll container'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">{
        filteredHouses.length === 0?(
          <div style={{
            height:"80vh",
            width:"100vw",
            display:"grid",
            placeContent:"center"
          }}>
           <lottie-player src="https://lottie.host/263ab84d-bb40-487c-92ff-2641d0436695/vWicemBLFI.json" background="#FFFFFF" speed="1" style={{width: "300px", height: "300px"}} loop controls autoplay direction="1" mode="normal"></lottie-player>
          <h1>nothing</h1>
          </div>
        ):(
          <>
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
        </>
      )
    }

      </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8104217.885019919!2d6.99244191084835!3d7.338435970372511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613753703e0f21%3A0x2b03c44599829b53!2sCameroon!5e0!3m2!1sen!2scm!4v1716038587219!5m2!1sen!2scm" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </div>
  );
}
