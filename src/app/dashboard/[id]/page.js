// app/houses/[id]/page.js
import { notFound } from 'next/navigation';

async function getHouse(id) {
  const res = await fetch(`http://localhost:3000/api/houses?id=${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch house');
  }
  const house = await res.json();
  if (!house || house.error) {
    return null;
  }
  return house;
}

export default async function HouseDetail({ params }) {
  const { id } = params;
  const house = await getHouse(id);

  if (!house) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{house.title}</h1>
      <img src={house.imageUrl} alt={house.title} className="w-full h-96 object-cover rounded-lg mb-4" />
      <p className="text-lg font-bold mt-2">${house.price_per_night} per night</p>
      <p className="text-gray-600">{house.location}</p>
      <p className="mt-4">{house.description}</p>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Amenities</h2>
        <ul className="list-disc pl-5">
          {house.amenities.map((amenity, index) => (
            <li key={index} className="text-gray-700">{amenity}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Host</h2>
        <p className="text-gray-700">{house.host}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Availability</h2>
        <p className="text-gray-700">From: {house.available_from}</p>
        <p className="text-gray-700">To: {house.available_to}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Rating</h2>
        <p className="text-gray-700">{house.rating} / 5</p>
      </div>
    </div>
  );
}
