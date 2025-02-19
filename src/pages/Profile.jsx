import React from 'react'
import { FiUser, FiHome, FiHeart, FiSettings } from 'react-icons/fi'

const Profile = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <FiUser className="w-8 h-8" />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Guest</h1>
            <p className="text-gray-500">View and edit profile</p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { icon: FiHome, text: 'Trips' },
            { icon: FiHeart, text: 'Wishlists' },
            { icon: FiSettings, text: 'Account Settings' }
          ].map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center p-4 hover:bg-gray-50 rounded-lg"
            >
              <item.icon className="w-6 h-6" />
              <span className="ml-4">{item.text}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Profile
