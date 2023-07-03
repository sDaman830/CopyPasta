import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AwardPage from './pages/AwardPage'
import ContactPage from './pages/ContactPage'
import CommitteePage from './pages/CommitteePage.jsx'

function App() {
    return(
        <>
        <Navbar />
        <CommitteePage />
        <Footer />
        </>
    )
}

export default App
