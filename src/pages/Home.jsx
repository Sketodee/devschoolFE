import AdvisorTab from '../components/Home/AdvisorTab'
import Courses from '../components/Home/Courses'
import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import SophisticatedJumbotron from '../components/Home/SophisticatedJumbotron'

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
      <SophisticatedJumbotron/>
        <Courses />
        <div id="about">
          <AdvisorTab />
        </div>
    </div>
  )
}

export default Home