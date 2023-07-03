import React from 'react'
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import SpeakerHeading from './pages/SpeakerHeading.jsx'
import CommitteePage from './pages/CommitteePage.jsx'
import AwardPage from './pages/AwardPage.jsx'
import ContactPage from './pages/ContactPage.jsx'



function App() {
    return(
        <BrowserRouter>
        <header>
            <nav>
                <Navbar />
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<SpeakerHeading />} />
            <Route path="/committee" element={<CommitteePage />} />
            <Route path="/awards" element={<AwardPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App
