import React from 'react'
import Crousal from '../components/Crousal.jsx'
import SponsorHome from '../components/SponsorHome'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement.jsx'
import Timeline from '../components/Timeline'

const Home = () => {
  return (
    <>
      <Crousal />
      <Announcement />
      <Timeline />
      <SponsorHome />
      <Footer />
    </>
  )
}

export default Home