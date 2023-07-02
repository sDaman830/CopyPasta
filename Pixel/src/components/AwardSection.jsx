import React from 'react';
import './AwardSection.css';

const AwardData = [
  {
    "id": "648da5c1ec47fc67d749566e",
    "confId": "647f315f62cdb3a26174fc38",
    "title1": "Best Paper Award-2",
    "title2": "Theme: AI",
    "description": "Best papers will be awarded for the team which shows innovation in their area and industry ready solutions",
    "sequence": 1,
    "featured": true,
    "new": true,
    "hidden": false,
    "link": null,
    "createdAt": "2023-06-17T12:23:25.848Z",
    "updatedAt": "2023-06-17T12:24:44.826Z"
  },
  {
    "id": "648da681ec47fc67d7495678",
    "confId": "647f315f62cdb3a26174fc38",
    "title1": "The Best Poster Presentation Award",
    "title2": "Poster",
    "description": "There will be a poster session at the conference and this award is dedicated to the poster presenters in the conference. The best poster presentation will be selected among all the researchers in the session.",
    "sequence": 2,
    "featured": true,
    "new": true,
    "hidden": false,
    "link": null,
    "createdAt": "2023-06-17T12:26:38.192Z",
    "updatedAt": "2023-06-17T12:26:38.192Z"
  },
  {
    "id": "648e826715868a27f2d48402",
    "confId": "647f315f62cdb3a26174fc38",
    "title1": "Travel Grants",
    "title2": "Limited",
    "description": "We offer limited travel grants to the student participants for attending the conference. We will offer travel grants for a lump sum amount to the eligible and selected candidates under this travel grant. The form for the same will be opened in April 2023.",
    "sequence": 3,
    "featured": true,
    "new": true,
    "hidden": false,
    "link": null,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  },
  {
    "id": "648e829f15868a27f2d48407",
    "confId": "647f315f62cdb3a26174fc38",
    "title1": "Registration Grants",
    "title2": "Limited",
    "description": "We offer limited registration grants to the student participants. We will reimburse the registered amount under this registration grant. The form will be opened in April 2023.",
    "sequence": 4,
    "featured": true,
    "new": true,
    "hidden": false,
    "link": null,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
];

const AwardSection = () => {
  return (
    <div className='AwardContainer'>
      {AwardData.map((award) => (
        <div className='AwardBox' key={award.id}>
          <div className='AwardName'>
            
            <div className='Atitle'>
            <h3 className='Atitle1'>{award.title1}</h3>
            </div>
            
            <div className='Atitle'>
            <h3 className='Atitle2'>{award.title2}</h3>
            </div>
          
          </div>
          <div className='AwardDesc'>
            <p className='Apara'>{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AwardSection;
