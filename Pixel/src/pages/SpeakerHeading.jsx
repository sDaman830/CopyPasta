import React from "react";
import './SpeakerHeading.css'
import SpeakerCard from "../Components/SpeakerCard";

const SpeakerHeading=()=>{
    return(
        <>
        <div className="SpeakContainer">
            <div className="SpeakerInnerContainer">
            <h1 className="Sheading">KeyNote Speakers</h1>
            <SpeakerCard />
            </div>
        </div> 
        </>
    )
}

export default SpeakerHeading