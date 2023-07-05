import React from "react";
import "./Card.css";
import '/index.js';
import { getcommittee } from '../apireq/getrequests';
import { useState,useEffect } from 'react';

export default function Committee() {
  const [committee, setCommittee] = useState([]);

    useEffect(() => {
     let mounted = true;
     getcommittee()
       .then(comdata => {
         if(mounted) {
           setCommittee(comdata)
         }
       })
     return () => mounted = false;
   }, [])
  return (
    <div className="CommHeader">
    <h1 className="CommHeading">Committee Members</h1>
    <div className="Commcontainer">
      {committee?.map((comdata) => (
        <CommitieeCard
          name={comdata.Name}
          imageLink={comdata.ImgLink}
          Designation={comdata.Designation}
          Institute={comdata.Institute}
          ProfileLink={comdata.ProfileLink}
        />
      ))}
    </div>
    </div>
  );
}

function CommitieeCard({
  name,
  imageLink,
  Designation,
  Institute,
  ProfileLink,
}) {
  return (
    <div className="commitiee-card card">
      <div className="card-image">
        <img
          className="committie-speaker-card-images"
          src={imageLink}
          alt={name}
        />
      </div>
      <div>
        <h2 className="commitiee-title">{name}</h2>
        <div className="card-content">
          <p>{`${Designation} (${Institute})`}</p>
          <a className="card-link" style={{ color: "#364fc7" }} href={ProfileLink}>
            Profile Link
          </a>
        </div>
      </div>
    </div>
  );
}
