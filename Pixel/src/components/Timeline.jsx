import React from 'react'
import './Timeline.css'

const TimelineData=[
    {
        title:'Notices',
        dates: 'efkufgwefk'
    },{
        title:'Notices',
        dates: 'efkufgwefk'
    },{
        title:'Notices',
        dates: 'efkufgwefk'
    },{
        title:'Notices',
        dates: 'efkufgwefk'
    },{
        title:'Notices',
        dates: 'efkufgwefk'
    }
]

const Timeline=()=>{
    return(
        <div className='containerEvent'>
            <h1>Event Timeline</h1>
            <br></br>
            {TimelineData.map((data,i)=>{
            return(
                <div className='timebox'>
                <h2>{data.title}</h2>
                <p>{data.dates}</p>
                </div>
            )
        })}
        </div>
    )
}

export default Timeline