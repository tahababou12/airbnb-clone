import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiShare, FiHeart, FiArrowLeft } from 'react-icons/fi'

const ListingDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = React.useState(false)

  // In a real app, you would fetch the listing data based on the ID
  // For now, we'll use mock data
  const listing = {
    id: id,
    title: 'Haunt the Beetlejuice house',
    host: 'Hosted by Delia Deetz',
    price: '$0 per guest',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: 'Experience the supernatural charm of this iconic house from the movie Beetlejuice. Perfect for those who love the unusual and extraordinary.',
    amenities: ['Ghost-friendly', 'Supernatural views', 'Original architecture', 'Full haunted experience'],
    location: 'Winter River, Connecticut',
    rating: 4.9,
    reviews: 128,
    additionalImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3',
    ]
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center mb-6 text-gray-600 hover:text-gray-900"
      >
        <FiArrowLeft className="mr-2" /> Back
      </button>

      {/* Title Section */}
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold">{listing.title}</h1>
        <div className="flex space-x-4">
          <button 
            onClick={() => alert('Share this listing')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <FiShare className="mr-2" /> Share
          </button>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <FiHeart className={`mr-2 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} /> 
            Save
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <img 
          src={listing.image} 
          alt={listing.title}
          className="w-full h-[400px] object-cover rounded-lg col-span-2"
        />
        <div className="grid grid-cols-2 gap-4">
          {listing.additionalImages.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={`${listing.title} ${index + 2}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Listing Details */}
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-semibold mb-2">{listing.host}</h2>
            <div className="flex items-center text-gray-600">
              <span className="mr-2">★ {listing.rating}</span>
              <span>({listing.reviews} reviews)</span>
              <span className="mx-2">•</span>
              <span>{listing.location}</span>
            </div>
          </div>

          <div className="border-b pb-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <p className="text-gray-600">{listing.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
            <ul className="grid grid-cols-2 gap-4">
              {listing.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="mr-2">✓</span> {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Card */}
        <div className="sticky top-8">
          <div className="border rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-semibold">{listing.price}</span>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">★ {listing.rating}</span>
                <span className="mx-1">•</span>
                <span>{listing.reviews} reviews</span>
              </div>
            </div>

            <button className="w-full bg-[#ff385c] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ListingDetail
