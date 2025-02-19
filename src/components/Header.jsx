import React, { useState } from 'react'
import { FiGlobe, FiMenu, FiUser } from 'react-icons/fi'
import { FaAirbnb } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useState({
    location: '',
    dates: '',
    guests: ''
  })
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/search', { 
      state: searchParams
    })
  }

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <FaAirbnb className="h-8 w-8 text-[#ff385c]" />
            <span className="text-[#ff385c] text-xl font-bold ml-2">airbnb</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center shadow-sm border rounded-full p-2 hover:shadow-md">
            <input
              type="text"
              placeholder="Anywhere"
              className="px-4 font-medium border-none focus:outline-none"
              value={searchParams.location}
              onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
            />
            <span className="border-l h-6"></span>
            <input
              type="text"
              placeholder="Any week"
              className="px-4 font-medium border-none focus:outline-none"
              value={searchParams.dates}
              onChange={(e) => setSearchParams({...searchParams, dates: e.target.value})}
            />
            <span className="border-l h-6"></span>
            <input
              type="text"
              placeholder="Add guests"
              className="px-4 font-medium text-gray-500 border-none focus:outline-none"
              value={searchParams.guests}
              onChange={(e) => setSearchParams({...searchParams, guests: e.target.value})}
            />
            <button type="submit" className="bg-[#ff385c] p-2 rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/hosting"
              className="hidden md:block font-medium hover:bg-gray-100 px-4 py-2 rounded-full"
            >
              Airbnb your home
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiGlobe className="h-5 w-5" />
            </button>
            <div className="relative">
              <button 
                className="flex items-center space-x-2 border rounded-full p-2 hover:shadow-md"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <FiMenu className="h-5 w-5" />
                <FiUser className="h-5 w-5" />
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <Link 
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {/* Add logout logic */}}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
