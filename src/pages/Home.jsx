import React from 'react'
import Categories from '../components/Categories'
import ExperienceGrid from '../components/ExperienceGrid'

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Categories />
      <ExperienceGrid />
    </main>
  )
}

export default Home
