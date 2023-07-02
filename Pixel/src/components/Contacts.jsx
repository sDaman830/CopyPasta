import React from 'react'
import './Contacts.css'

const ContactData=[
    {
            "id": "64930c74f0dbc80781333343",
            "confId": "647f315f62cdb3a26174fc38",
            "title": "For registration related queries",
            "name": "Dr Hari murugan",
            "designation": "Assistant Professor",
            "imgLink": "https://v1.nitj.ac.in/images/faculty/19121531636.jpg",
            "institute": "NITJ",
            "profileLink": "https://v1.nitj.ac.in/index.php/nitj_cinfo/FacultyList/6",
            "phone": "0424 2351210",
            "email": "mail@gmail.com",
            "fax": "test",
            "feature": true,
            "sequence": 0,
            "createdAt": "2023-06-21T14:42:56.489Z",
            "updatedAt": "2023-06-23T03:44:52.025Z"
        },
        {
            "id": "64931156bee7a8459309682c",
            "confId": "647f315f62cdb3a26174fc38",
            "title": "For accomodation related queries",
            "name": "Dr Pahuja",
            "designation": "Associate Professor",
            "imgLink": "https://v1.nitj.ac.in/images/faculty/18022167136.png",
            "institute": "NITJ",
            "profileLink": "https://v1.nitj.ac.in/index.php/nitj_cinfo/FacultyList/5",
            "phone": "0424-2351210",
            "email": "test@gmail.com",
            "fax": "test",
            "feature": true,
            "sequence": 0,
            "createdAt": "2023-06-21T15:03:50.870Z",
            "updatedAt": "2023-06-23T03:27:05.682Z"
        },
        {
            "id": "649311d7c04a83075464bf41",
            "confId": "647f315f62cdb3a26174fc38",
            "title": "For guest house booking",
            "name": "Dr K C sharma",
            "designation": "Assistant Professor",
            "imgLink": "https://v1.nitj.ac.in/images/faculty/20072386548.jpg",
            "institute": "NITJ",
            "profileLink": "https://v1.nitj.ac.in/index.php/nitj_cinfo/FacultyList/4",
            "phone": "0424-2352110",
            "email": "mail2@gmail.com",
            "fax": "test",
            "feature": true,
            "sequence": 0,
            "createdAt": "2023-06-21T15:05:59.017Z",
            "updatedAt": "2023-06-23T03:27:05.682Z"
        }
    
]

const Contacts = () => {
  return (
    <div className='ContactContainer'>
        {ContactData.map((cdata,id)=>{
            return(
                <>
                <div className='Majboorhumein'>
                <h1 className='ContactTitle'>{cdata.title}</h1>
                <div className='ContactBox'>
                    <div className='Contactimg'>
                        <img className='ContactImage' src={cdata.imgLink} alt='Contacts' />
                    </div> 
                    <div className='ContactDesc'>
                        <h3>{cdata.name}</h3>
                        <p>{cdata.designation}</p>
                        <p>{cdata.institute}</p>
                        <p>{cdata.phone}</p>
                        <p>{cdata.email}</p>
                        <p>{cdata.fax}</p>
                        <p>{cdata.profileLink}</p>
                    </div>
                </div>
                </div>
                </>   
            )
        })}
    </div>
  )
}

export default Contacts