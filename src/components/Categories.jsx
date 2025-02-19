import React, { useState } from 'react'
import { FiHome, FiUmbrella, FiMapPin, FiCoffee, FiStar } from 'react-icons/fi'

const categories = [
  { icon: FiHome, name: 'Trending' },
  { icon: FiUmbrella, name: 'Beach' },
  { icon: FiMapPin, name: 'Camping' },
  { icon: FiStar, name: 'Luxe' },
  { icon: FiCoffee, name: 'Bed & breakfasts' },
]

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div className="py-4">
      <div className="category-scroll flex space-x-8 overflow-x-auto">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center min-w-[56px] cursor-pointer ${
              activeCategory === index ? 'border-b-2 border-black' : ''
            }`}
            onClick={() => setActiveCategory(index)}
          >
            <category.icon className={`h-6 w-6 ${
              activeCategory === index ? 'text-black' : 'text-gray-500'
            }`} />
            <span className={`mt-2 text-xs ${
              activeCategory === index ? 'text-black' : 'text-gray-500'
            }`}>
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
