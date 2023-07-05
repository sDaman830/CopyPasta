import React from 'react'
import './Timeline.css'
import { getevents } from '../apireq/getrequests';
import { useState,useEffect } from 'react';

const Timeline=()=>{
    const [events, setEvents] = useState([]);

    useEffect(() => {
     let mounted = true;
     getevents()
       .then(edata => {
         if(mounted) {
           setEvents(edata)
         }
       })
     return () => mounted = false;
   }, [])

    return(
        <div className='containerEvent'>
            <h1>Event Timeline</h1>
            <br></br>
            {events.map((edata,i)=>{
            return(
                <div className='timebox'>
                <h2>{edata.title}</h2>
                <p>{edata.date}</p>
                </div>
            )
        })}
        </div>
    )
}

export default Timeline