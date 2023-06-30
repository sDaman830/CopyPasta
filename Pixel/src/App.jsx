import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Announcement from './components/Announcement.jsx'
import Timeline from './components/Timeline.jsx'
import SponsorHome from './components/SponsorHome.jsx'
import Footer from './components/Footer.jsx'


function App() {
    return(
        <>
        <Navbar />
        <Announcement />
        <Timeline />
        <SponsorHome />
        <Footer />
        </>
    )
}

export default App
