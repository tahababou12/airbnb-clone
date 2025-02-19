import React, { useState, useEffect } from 'react'
import ExperienceCard from './ExperienceCard'

const initialExperiences = [
  {
    id: 1,
    title: 'Haunt the Beetlejuice house',
    host: 'Hosted by Delia Deetz',
    price: '$0 per guest',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    status: 'Live',
    category: 'Trending'
  },
  {
    id: 2,
    title: 'Join the Living Room Session with Doja Cat',
    host: 'Hosted by Doja Cat',
    price: 'Sold out',
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    category: 'Luxe'
  },
  {
    id: 3,
    title: "Stay in Prince's Purple Rain house",
    host: 'Hosted by Wendy And Lisa',
    price: 'Sold out',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    category: 'Beach'
  }
]

const ExperienceGrid = () => {
  const [experiences, setExperiences] = useState(initialExperiences)
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    if (activeCategory) {
      const filtered = initialExperiences.filter(exp => exp.category === activeCategory)
      setExperiences(filtered)
    } else {
      setExperiences(initialExperiences)
    }
  }, [activeCategory])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
      {experiences.map((experience) => (
        <ExperienceCard 
          key={experience.id} 
          {...experience}
          onShare={() => {
            alert(`Sharing ${experience.title}`)
          }}
        />
      ))}
    </div>
  )
}

export default ExperienceGrid
