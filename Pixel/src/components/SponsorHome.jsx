import React from 'react'
import './SponsorHome.css'

const SponsorLogoData=[
    {
        id: 1,
        logoURL: 'https://www.r10htc2023.org/images/Sponsor/maggenome.png'
    },{
        id: 2,
        logoURL: 'https://www.r10htc2023.org/images/Sponsor/maggenome.png'
    },{
        id: 3,
        logoURL: 'https://www.r10htc2023.org/images/Sponsor/maggenome.png'
    },
]
const SponsorHome=()=>{
    return(
        <div className='majboori'>
        <h1>Our Sponsors</h1>
        <div className='containersponsor'>
            {SponsorLogoData.map((ldata,id)=>{
            return(
                <div className='sponimg'>
                <img src={ldata.logoURL} alt="sponsors"/>
                </div>
            )
        })}
        
        </div>
        <br></br>
        <button className='sponHome'>Check out our Sponsors</button>
        </div>
    )
}
export default SponsorHome