import React from 'react'
import { FiShare, FiHeart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const ExperienceCard = ({ id, title, host, price, image, status, onShare }) => {
  const [isLiked, setIsLiked] = React.useState(false)
  const navigate = useNavigate()

  const handleClick = (e) => {
    // Prevent navigation if clicking share or like buttons
    if (e.target.closest('button')) {
      return
    }
    navigate(`/listing/${id}`)
  }

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <button 
            onClick={(e) => {
              e.stopPropagation()
              onShare()
            }}
            className="p-2 rounded-full bg-white opacity-70 hover:opacity-100"
          >
            <FiShare className="h-4 w-4" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation()
              setIsLiked(!isLiked)
            }}
            className="p-2 rounded-full bg-white opacity-70 hover:opacity-100"
          >
            <FiHeart 
              className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} 
            />
          </button>
        </div>
        {status && (
          <span className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-sm font-medium">
            {status}
          </span>
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-500">{host}</p>
        <p className="font-medium">{price}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
