import React from 'react'
import './Contacts.css'
import { useEffect, useState } from 'react';
import { baseUrl, conferencesUrl, apiKey, confId } from '../../api';
import  {getcontacts} from '../apireq/getrequests'


function Contacts(){
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
     let mounted = true;
     getcontacts()
       .then(cdata => {
         if(mounted) {
           setContacts(cdata)
         }
       })
     return () => mounted = false;
   }, [])
  return (
        <>
        <div className='Majboorhumein'>
        {contacts.map((cdata,id)=>{
            return(
                <>
                
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
                        <a href={cdata.profileLink}>Profile</a>
                    </div>
                </div>
                </>   
            )
        })}
        </div>
    </>
  )
}

export default Contacts