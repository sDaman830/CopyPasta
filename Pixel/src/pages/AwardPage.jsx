import React from "react";
import AwardSection from "../Components/AwardSection";
import SponsorSection from "../Components/SponsorSection";
import FooterW from "../components/FooterW";
import './AwardPage.css'

const AwardPage=()=>{
    return(
    <div className="AwardsBG">
    <AwardSection />
    <SponsorSection />
    <FooterW />
    </div>
    )
}

export default AwardPage