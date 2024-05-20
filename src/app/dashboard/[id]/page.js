'use client'
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

async function fetchHouse(id) {
  const res = await fetch(`http://localhost:3000/api/houses?id=${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch house');
  }
  const house = await res.json();
  return house;
}

async function fetchReviews(houseId) {
  const res = await fetch(`/api/reviews?houseId=${houseId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch reviews');
  }
  return await res.json();
}

export default function HouseDetail({ params }) {
  const { id } = params;
  const [house, setHouse] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ user: '', rating: 5, comment: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const houseData = await fetchHouse(id);
        if (!houseData || houseData.error) {
          notFound();
          return;
        }
        setHouse(houseData);
        const reviewsData = await fetchReviews(id);
        setReviews(reviewsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id]);

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newReview, houseId: id })
      });

      if (res.ok) {
        const updatedReviews = await fetchReviews(id);
        setReviews(updatedReviews);
      } else {
        alert('Failed to add review');
      }
    } catch (err) {
      alert('An error occurred while adding the review');
    }
  };

  if (loading) return <div>loading</div>;
  
  if (error) return <div><dotlottie-player src="https://lottie.host/d7c1de9f-aae6-406b-b48d-5c11133a965a/xX2pa79hdA.json" background="transparent" speed="1" style={{width: '300px', height: '300px'}} loop autoplay></dotlottie-player></div>;

  return (
    <div className="container mx-auto p-4 h-screen overflow-y-scroll ">
      <h1 className="text-3xl font-bold mb-6">{house.title}</h1>
      <img src={house.imageUrl} alt={house.title} width={200} height={200} className="w-[12rem] h-96 object-cover rounded-lg mb-4" />
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black"
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black"
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
