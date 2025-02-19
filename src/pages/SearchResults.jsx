import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ExperienceCard from '../components/ExperienceCard'

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const [filteredExperiences, setFilteredExperiences] = useState([])

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Search Results
        </h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border rounded-full hover:shadow-md">
            Price
          </button>
          <button className="px-4 py-2 border rounded-full hover:shadow-md">
            Type of place
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperiences.length > 0 ? (
          filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No results found
          </p>
        )}
      </div>
    </main>
  )
}

export default SearchResults
