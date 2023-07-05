import "./crousal.css";
import { getimages } from '../apireq/getrequests';
import { useState,useEffect } from 'react';

const imageLinks = [
  {
    imgLink:"car2.svg"
  }
];

function extractImageLinks(images) {
  return images.map((image) => image.imgLink);
}

const images = extractImageLinks(imageLinks);

export default function Crousal() {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="ContainCarousel">
    <div className="crousal-container">
      <div
        className="crousal-image"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((image, index) => (
          <>
            <img
              className="image-div"
              key={index}
              src={images[curr]}
              alt={`Slide ${index}`}
            />
          </>
        ))}
      </div>

      <SvgLeft handlePrev={prev} />
      <SvgRight Handlenext={next} />
      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === curr ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

function SvgLeft({ handlePrev }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.3"
      stroke="currentColor"
      className="crousal-btn prev"
      onClick={handlePrev}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function SvgRight({ Handlenext }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.2"
      stroke="currentColor"
      className="crousal-btn next"
      onClick={Handlenext}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
