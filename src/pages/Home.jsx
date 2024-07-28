import AdvisorTab from '../components/Home/AdvisorTab'
import Courses from '../components/Home/Courses'
import Jumbotron from '../components/Home/Jumbotron'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Jumbotron />
        <Courses />
        <AdvisorTab />
    </div>
  )
}

export default Home