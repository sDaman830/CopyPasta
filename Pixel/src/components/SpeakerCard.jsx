import React from "react";
import { useState } from "react";
import "./Card.css";
import { getspeakers } from '../apireq/getrequests';
import { useEffect } from 'react';

export default function SpeakerCard() {
  const [open, isSetOpen] = useState(0);
  const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
     let mounted = true;
     getspeakers()
       .then(spdata => {
         if(mounted) {
           setSpeakers(spdata)
         }
       })
     return () => mounted = false;
   }, [])

  function handleClick(id) {
    isSetOpen(id);
  }

  function handleCloseModal() {
    isSetOpen(0);
  }
  return (
    <div className="Speakercontainer">
      {speakers.length &&
        speakers.map((spdata, i) => (
          <SpeakerInstance>
            <CardDetails
              handleClick={handleClick}
              id={i + 1}
              person={speakers[i]}
            />
            <Modal
              open={open}
              handleCloseModal={handleCloseModal}
              id={i + 1}
              person={speakers[i]}
            />
          </SpeakerInstance>
        ))}
    </div>
  );
}

function SpeakerInstance({ children }) {
  return <>{children}</>;
}

function CardDetails({ handleClick, person, id }) {
  return (
    <div className="speaker-card card">
      <div className="speaker-card-image">
        <img className="committie-speaker-card-images"
          src={person.ImgLink}
          alt={person.Name}
        />
      </div>
      <h2 className="speaker-name">{person.Name}</h2>
      <div className="speaker-content">
        <p>
          {person.Designation}
          <span> ({person.Institute})</span>
        </p>
        <button className="btn" onClick={() => handleClick(id)}>
          Know More
        </button>
      </div>
    </div>
  );
}

function Modal({ open, handleCloseModal, person, id }) {
  return (
    <>
      {open === id && (
        <div className={`modal `}>
          <button class="close-modal" onClick={() => handleCloseModal()}>
            &times;
          </button>

          <div className="speaker-card-image ">
            <img className="committie-speaker-card-images" src={person.ImgLink} alt={person.Name} />
          </div>
          <h2 className="speaker-name">{person.Name}</h2>
          <p>
            {person.Designation}
            <span> ({person.Institute})</span>
          </p>
          <PersonDetails person={person} />
        </div>
      )}
    </>
  );
}

function PersonDetails({ person }) {
  return (
    <div className="modal-speaker-content">
      <p className="modal-titles">
        Profile Link : <a href={person.ImgLink}>{person.Name}</a>
      </p>
      <p className="modal-titles">
        Tittle<span> : {person.TalkTitle}</span>
      </p>
      <p className="modal-titles">
        Abstract : <span>{person.Abstract}</span>
      </p>
      <p className="modal-titles">
        Bio : <span>{person.Bio}</span>
      </p>
    </div>
  );
}
