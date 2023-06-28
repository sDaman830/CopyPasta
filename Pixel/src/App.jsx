import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Timeline from './components/Timeline.jsx'
import SponsorHome from './components/SponsorHome.jsx'
import Footer from './components/Footer.jsx'


function App() {
    return(
        <>
        <Navbar />
        <Timeline />
        <SponsorHome />
        <Footer />
        </>
    )
}

export default App
