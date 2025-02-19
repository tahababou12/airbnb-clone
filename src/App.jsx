import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Hosting from './pages/Hosting'
import Profile from './pages/Profile'
import SearchResults from './pages/SearchResults'
import ListingDetail from './pages/ListingDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
