import React, { useState } from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import SchoolOfProduct from './pages/SchoolOfProduct'
import SchoolOfEngineering from './pages/SchoolOfEngineering'
import SuccessStories from './components/Home/SuccessStories'
import SchoolOfData from './pages/SchoolOfData'
import Navbar2 from './components/Navbar2'
import HelpPage from './pages/HelpPage'
import AdvisorTab from './components/Home/AdvisorTab'
import ApplicationModal from './components/ApplicationModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ParticleBg from './components/ParticleBg'


function App() {
  return (
    // < className='min-h-screen flex flex-col'>
      <div className="">
        <Navbar2 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<SchoolOfProduct />} />
          <Route path='/engineering' element={<SchoolOfEngineering/>} />
          <Route path='/data' element={<SchoolOfData/>} />
          <Route path='/help' element={<HelpPage/>} />
          <Route path="/about" element={<AdvisorTab />} />
        </Routes>
        <SuccessStories />
        <Footer />
        <ApplicationModal />
        <ToastContainer />
      </div>
  )
}

export default App
