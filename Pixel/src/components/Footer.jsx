import React from 'react'
import './Footer.css'

const Footer=()=>{
    return (
      <>
        <div className="container">
            <div className="divLink">
              <a href="/">
                <p>Home</p>
              </a>
              <a href="/">
                <p>Speakers</p>
              </a>
              <a href="/">
                <p>Committee</p>
              </a>
              <a href="/">
                <p>Awards</p>
              </a>
              <a href="/">
                <p>Contsct Us</p>
              </a>
            </div>
            
            <div className="divLink">
            <a href="/">
                <p>Home</p>
              </a>
              <a href="/">
                <p>Speakers</p>
              </a>
              <a href="/">
                <p>Committee</p>
              </a>
            </div>
            
            <div className="map">
                <h1>MAPTY-AKLEEM</h1>
            </div>
       </div>
       
      
      <div className="footerLast">
            <div className="leftLast">
              <p>
                Copyright@{new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
        </div>
    </>
     
    );
}
export default Footer
  