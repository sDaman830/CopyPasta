import React from 'react'
import { useState } from 'react'
import './Announcement.css'

const DownloadsData=[
    [
        {
            "id": "648e91fb15868a27f2d4844a",
            "confId": "647f315f62cdb3a26174fc38",
            "title": "Paper Submission deadline",
            "date": "2023-08-01T00:00:00.000Z",
            "sequence": 0,
            "extended": false,
            "newDate": null,
            "completed": false,
            "featured": true,
            "createdAt": "2023-06-18T05:11:19.933Z",
            "updatedAt": "2023-06-18T05:11:19.933Z"
        },
        {
            "id": "648e923b15868a27f2d4844f",
            "confId": "647f315f62cdb3a26174fc38",
            "title": "Paper acceptance intimation",
            "date": "2023-09-01T00:00:00.000Z",
            "sequence": 1,
            "extended": false,
            "newDate": null,
            "completed": false,
            "featured": true,
            "createdAt": "2023-06-18T05:12:25.347Z",
            "updatedAt": "2023-06-18T05:12:25.347Z"
        },
        {
            "id": "648e926715868a27f2d48453",
            "confId": "647f315f62cdb3a26174fc38",
            "title": "paper registration starts",
            "date": "2023-08-07T00:00:00.000Z",
            "sequence": 2,
            "extended": false,
            "newDate": null,
            "completed": false,
            "featured": true,
            "createdAt": "2023-06-18T05:13:07.945Z",
            "updatedAt": "2023-06-18T05:13:55.043Z"
        },
        {
            "id": "648e929615868a27f2d48458",
            "confId": "647f315f62cdb3a26174fc38",
            "title": "Paper registration ends",
            "date": "2023-08-14T00:00:00.000Z",
            "sequence": 3,
            "extended": false,
            "newDate": null,
            "completed": false,
            "featured": true,
            "createdAt": "2023-06-18T05:13:55.043Z",
            "updatedAt": "2023-06-18T05:13:55.043Z"
        },
        {
            "id": "649503e9721e1699599c35af",
            "confId": "6492f77d1cc9629afd1c7008",
            "title": "Conf-2 paper submission",
            "date": "2023-09-01T00:00:00.000Z",
            "sequence": 0,
            "extended": false,
            "newDate": null,
            "completed": false,
            "featured": true,
            "createdAt": "2023-01-01T00:00:00.000Z",
            "updatedAt": "2023-01-01T00:00:00.000Z"
        }
    ]
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