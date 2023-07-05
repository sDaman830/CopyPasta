import React from 'react';
import './AwardSection.css';
import { getawards } from '../apireq/getrequests';
import { useState,useEffect } from 'react';

const AwardSection = () => {
  const [awards, setAwards] = useState([]);

    useEffect(() => {
     let mounted = true;
     getawards()
       .then(adata => {
         if(mounted) {
           setAwards(adata)
         }
       })
     return () => mounted = false;
   }, [])
  return (
    <div className='Majb'>
    <h1 className="AwardsPHeading">Awards</h1>
    <div className='AwardContainer'>
      
      {awards.map((adata) => (
        <div className='AwardBox' key={adata.id}>
          <div className='AwardName'>
            
            <div className='Atitle'>
            <h3 className='Atitle1'>{adata.title1}</h3>
            </div>
            
            <div className='Atitle'>
            <h3 className='Atitle2'>{adata.title2}</h3>
            </div>
          
          </div>
          <div className='AwardDesc'>
            <p className='Apara'>{adata.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default AwardSection;
