import React from 'react'
import { useState } from 'react'
import './Announcement.css'

const DownloadsData=[
    {
        title:'Notices',
        links: 'efkufgwefk'
    },{
        title:'Notices',
        links: 'efkufgwefk'
    },{
        title:'Notices',
        links: 'efkufgwefk'
    },{
        title:'Notices',
        links: 'efkufgwefk'
    }
]

const announcement=()=>{
    
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
            <h1 className='announcement'>Announcements</h1>
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
    export default announcement