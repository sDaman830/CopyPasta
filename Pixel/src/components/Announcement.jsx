import React from 'react'
import { useState } from 'react'
import './Announcement.css'

const DownloadsData=[
        {
            "id": "64950d1c721e1699599c35db",
            "confId": "647f315f62cdb3a26174fc38",
            "title": "History",
            "metaDescription": "from 1989",
            "description": "NPSC came into existence in the early 1970’s, amidst criticism about the gross inequalities and disparities in the educational system; thus bringing into sharp focus an ideological debate regarding the role of the English Medium Private Schools and the desirability of exercising a greater regulatory control over their functioning. It was also a time to implement the recommendations of the Kothari Education Commission Report of 1964/6.  What followed was a concurrence of some of the leading unaided recognized schools in the capital to establish an association of privately managed recognized schools so that collective action could be taken on some of the vital issues affecting their functioning keeping the Constitution of Indian Public Schools Conference as a guide, a committee was drawn up.",
            "feature": true,
            "sequence": 0,
            "new": true,
            "hidden": false,
            "link": null,
            "createdAt": "2023-06-23T03:10:17.793Z",
            "updatedAt": "2023-06-23T03:12:28.458Z"
        },
        {
            "id": "64950d8a721e1699599c35e4",
            "confId": "647f315f62cdb3a26174fc38",
            "title": "Vision",
            "metaDescription": "To movitate young researches",
            "description": "National, making a mark in education at the national level by enrolling schools not only from Delhi but from other states and Indian Schools abroad.  Progressive, in the belief that we would act as pacesetters and sow seeds of good ideas and practices in education.  Reach out, into the community by setting up a number of community and school linkages and work in partnership with less endowed institutions to improve the general quality of education.  Preserve, basic traditions and cultural values of our democratic and secular society, impart good human and social values.  Initiate, programs for both teachers and students for the introduction of progressive ideas, values and new learning- teaching methodologies in our institutions.",
            "feature": true,
            "sequence": 1,
            "new": true,
            "hidden": false,
            "link": null,
            "createdAt": "2023-06-23T03:12:07.671Z",
            "updatedAt": "2023-06-23T03:13:03.171Z"
        },
        {
            "id": "64950e0e721e1699599c35ef",
            "confId": "647f315f62cdb3a26174fc38",
            "title": "Paper submission extended",
            "metaDescription": "Extended date: 23-08-2023",
            "description": "the submission of paper has been extended to 23-08-2023",
            "feature": true,
            "sequence": 2,
            "new": true,
            "hidden": false,
            "link": null,
            "createdAt": "2023-06-23T03:14:17.954Z",
            "updatedAt": "2023-06-23T03:14:17.954Z"
        },
]

export default function Accordion(){
    
    const [selected, setSelected]=useState(null)

    const toggle=(i)=>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className="accordWrapper">
            <div className='accord'>
        {DownloadsData.map((item,i)=>{
            return(
                <>
                <div className="item">
                <div className="title" onClick={()=> toggle(i)}>
                    <h2>{item.title}</h2>
                    <span>{selected===i ? '-':'+'}</span>
                </div>
                <div className={selected===i ? 'content show':'content'}>
                    <p>{item.links}</p>
                </div>
                </div>
                </>
            )
        })}
        </div>
    </div>
    )
    }