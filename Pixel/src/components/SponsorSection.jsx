import React from 'react'
import './SponsorSection.css'

const TitleSponsorData=[
    [
        {
            "id": "648c5e593b0c1e0d8803731b",
            "confId": "647f315f62cdb3a26174fc38",
            "name": "Redbull",
            "type": "Title Sponsors",
            "logo": "https://www.r10htc2023.org/images/Sponsor/maggenome.png",
            "sequence": 0,
            "featured": true,
            "createdAt": "2023-06-16T13:06:30.320Z",
            "updatedAt": "2023-06-18T04:26:47.569Z"
        },
        {
            "id": "648e878a15868a27f2d4841e",
            "confId": "647f315f62cdb3a26174fc38",
            "name": "Marwadi Technologies",
            "type": "Title Sponsors",
            "logo": "https://www.r10htc2023.org/images/Sponsor/marwadi_technologies.png",
            "sequence": 1,
            "featured": true,
            "createdAt": "2023-01-01T00:00:00.000Z",
            "updatedAt": "2023-01-01T00:00:00.000Z"
        },
        {
            "id": "649507d2721e1699599c35d0",
            "confId": "6492f77d1cc9629afd1c7008",
            "name": "NITJ",
            "type": "Title Sponsors",
            "logo": "https://www.nitj.ac.in/public/assets/images/logo_250.png",
            "sequence": 0,
            "featured": true,
            "createdAt": "2023-01-01T00:00:00.000Z",
            "updatedAt": "2023-01-01T00:00:00.000Z"
        },
        
    ]
]

const PlatinumSponsorData=[
    {
        "id": "64950ca1721e1699599c35d5",
        "confId": "6492f77d1cc9629afd1c7008",
        "name": "NITJ-2",
        "type": "Platinum Sponsors",
        "logo": "https://www.nitj.ac.in/clubs/img/Seed%20Logo.png",
        "sequence": 0,
        "featured": true,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    {
        "id": "648e87d015868a27f2d48422",
        "confId": "647f315f62cdb3a26174fc38",
        "name": "Lifeactivus",
        "type": "Platinum Sponsors",
        "logo": "https://www.r10htc2023.org/images/Sponsor/Lifeactivus.png",
        "sequence": 0,
        "featured": true,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    {
        "id": "648e8a1a15868a27f2d48427",
        "confId": "647f315f62cdb3a26174fc38",
        "name": "SSIP",
        "type": "Platinum Sponsors",
        "logo": "https://www.r10htc2023.org/images/Sponsor/SSIP.png",
        "sequence": 1,
        "featured": true,
        "createdAt": "2023-06-18T04:37:42.987Z",
        "updatedAt": "2023-06-18T04:37:42.987Z"
    },
    {
        "id": "648e8a5215868a27f2d4842b",
        "confId": "647f315f62cdb3a26174fc38",
        "name": "K7 International",
        "type": "Platinum Sponsors",
        "logo": "https://www.r10htc2023.org/images/Sponsor/K7.jpg",
        "sequence": 0,
        "featured": true,
        "createdAt": "2023-06-18T04:38:39.282Z",
        "updatedAt": "2023-06-18T04:38:39.282Z"
    }
]


const SponsorSection = () => {
  return (
    <div className='SponsorContain'>
        <h1 className='TitleSpon'>Title Sponsors</h1>
        <div className='containersponsor'>
            {TitleSponsorData[0].map((Tdata) => {
                return (
                    <div className='sponimg' key={Tdata.id}>
                        <img className='Sponimage' src={Tdata.logo} alt="sponsors" />
                    </div>
                );
            })}
        </div>
        <br></br>

        <h1 className='PlatinumSpon'>Platinum Sponsors</h1>
        <div className='containersponsor'>
            {PlatinumSponsorData.map((Pdata,id)=>{
            return(
                <div className='sponimg'>
                <img className='Sponimage' src={Pdata.logo} alt="sponsors"/>
                </div>
            )
        })}
        </div>
        <br></br>

    </div>
  )
}

export default SponsorSection