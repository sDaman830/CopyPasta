import React from "react";
import './SpeakerHeading.css'
import SpeakerCard from "../components/SpeakerCard";
import FooterW from '../components/FooterW.jsx'

const SpeakerHeading=()=>{
    return(
        <>
        <div className="SpeakContainer">
            <div className="SpeakerInnerContainer">
            <h1 className="Sheading">KeyNote Speakers</h1>
            <SpeakerCard />
            </div>
        </div> 
        <FooterW />
        </>
    )
}

export default SpeakerHeading