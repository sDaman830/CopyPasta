import React from 'react'
import { useState,useEffect } from 'react'
import './Announcement.css'
import  {getannounce} from '../apireq/getrequests'

export default function announcement(){
    
    const [selected, setSelected]=useState(null)
    const [announce, setAnnounce] = useState([]);

    useEffect(() => {
     let mounted = true;
     getannounce()
       .then(andata => {
         if(mounted) {
           setAnnounce(andata)
         }
       })
     return () => mounted = false;
   }, [])

    const toggle=(i)=>{
        if(selected===i){
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className="accordWrapper">
            <h1 className='AnnounceHeading'>Announcements</h1>
            <div className='accord'>
        {announce.map((andata,i)=>{
            return(
                <>
                <div className="item">
                <div className="title" onClick={()=> toggle(i)}>
                    <h2>{andata.title}</h2>
                    <span>{selected===i ? '-':'+'}</span>
                </div>
                <div className={selected===i ? 'content show':'content'}>
                    <p>{andata.description}</p>
                </div>
                </div>
                </>
            )
        })}
        
        </div>
    </div>
    )
    }