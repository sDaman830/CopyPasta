import React from 'react'
import HeroComponent from '../components/HeroComponent.jsx'
import Crousal from '../components/Crousal.jsx'
import SponsorHome from '../components/SponsorHome'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement.jsx'
import Timeline from '../components/Timeline'

const Home = () => {
  return (
    <div className='HomeCenter'>
      <HeroComponent />
      <Announcement />
      <Timeline />
      <SponsorHome />
      <Footer />
    </div>
  )
}

export default Home