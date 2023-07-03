import React from 'react'
import './Timeline.css'

const TimelineData=[
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

const Timeline=()=>{
    return(
        <div className='containerEvent'>
            <h1>Event Timeline</h1>
            <br></br>
            {TimelineData.map((data,i)=>{
            return(
                <div className='timebox'>
                <h2>{data.title}</h2>
                <p>{data.date}</p>
                </div>
            )
        })}
        </div>
    )
}

export default Timeline