'use client'
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';

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

async function getReviews(houseId) {
  const res = await fetch(`/api/reviews?houseId=${houseId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch reviews');
  }
  return await res.json();
}

export default async function HouseDetail({ params }) {
  const { id } = params;
  const house = await getHouse(id);

  if (!house) {
    notFound();
  }

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ user: '', rating: 5, comment: '' });

  useEffect(() => {
    async function fetchReviews() {
      const reviews = await getReviews(id);
      setReviews(reviews);
    }
    fetchReviews();
  }, [id]);

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newReview, houseId: id })
    });

    if (res.ok) {
      const updatedReviews = await getReviews(id);
      setReviews(updatedReviews);
    } else {
      alert('Failed to add review');
    }
  };

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
      <div className="mt-4">
        <h2 className="text-xl font-bold">Reviews</h2>
        <ul className="list-disc pl-5">
          {reviews.map((review, index) => (
            <li key={index} className="text-gray-700">
              <strong>{review.user}</strong> rated it {review.rating}/5: {review.comment}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="user"
              value={newReview.user}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              value={newReview.rating}
              onChange={handleChange}
              min="1"
              max="5"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
