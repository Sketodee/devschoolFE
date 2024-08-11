
import AdvisorTab from '../components/Home/AdvisorTab'
import Courses from '../components/Home/Courses'
import Jumbotron from '../components/Home/Jumbotron'
import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
        <Jumbotron />
        <Courses />
        <div id="about">
          <AdvisorTab />
        </div>
    </div>
  )
}

export default Home