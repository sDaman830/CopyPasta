import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Announcement from '../components/Announcement.jsx'
import SponsorHome from '../components/SponsorHome.jsx'
import Timeline from '../components/Timeline.jsx'

const Home = () => {
  return (
    <>
    <Announcement />
    <SponsorHome />
    <Timeline />
    <Footer />
    </>
  )
}

export default Home