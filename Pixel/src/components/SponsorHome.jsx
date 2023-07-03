import React from 'react'
import './SponsorHome.css'
import {Link} from 'react-router-dom'

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
        <div className='majboorSponHome'>
        <h1>Our Sponsors</h1>
        <div className='containersponsorHome'>
            {SponsorLogoData.map((ldata,id)=>{
            return(
                <div className='sponimg'>
                <img className='Sponimage' src={ldata.logoURL} alt="sponsors"/>
                </div>
            )
        })}
        
        </div>
        <br></br>
        <Link to="/awards">
        <button className='sponHome'>Check out our Sponsors</button>
        </Link>
        </div>
    )
}
export default SponsorHome