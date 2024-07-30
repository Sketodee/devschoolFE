
import AdvisorTab from '../components/Home/AdvisorTab'
import Courses from '../components/Home/Courses'
import Jumbotron from '../components/Home/Jumbotron'
import React from 'react'
import SuccessStories from '../components/Home/SuccessStories'

const Home = () => {
  return (
    <div>
        <Jumbotron />
        <Courses />
        <AdvisorTab />
        <SuccessStories />
    </div>
  )
}

export default Home