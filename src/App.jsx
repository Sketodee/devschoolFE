import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import SchoolOfProduct from './pages/SchoolOfProduct'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<SchoolOfProduct />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
