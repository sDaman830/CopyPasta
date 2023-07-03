import { useState } from "react";
import "./crousal.css";

// Object that API fetch //
const imageLinks = [
  {
    id: "6492f8634bd54b3b9c0906ec",
    confId: "647f315f62cdb3a26174fc38",
    name: "WIE",
    imgLink:
      "https://ieeewie.wpenginepowered.com/wp-content/uploads/woman_engineer_laptop.jpg",
    feature: true,
    sequence: 0,
    createdAt: "2023-06-21T13:17:21.096Z",
    updatedAt: "2023-06-23T03:37:04.142Z",
  },
  {
    id: "6492f9274bd54b3b9c0906f6",
    confId: "647f315f62cdb3a26174fc38",
    name: "Last year WIE",
    imgLink: "https://v1.nitj.ac.in/nitj_files/links/1_90512.JPG",
    feature: true,
    sequence: 1,
    createdAt: "2023-06-21T13:20:35.662Z",
    updatedAt: "2023-06-23T03:37:04.142Z",
  },
  {
    id: "6492f96f4bd54b3b9c0906fa",
    confId: "647f315f62cdb3a26174fc38",
    name: "WIE volunteers",
    imgLink: "https://v1.nitj.ac.in/nitj_files/links/2_64856.JPG",
    feature: true,
    sequence: 2,
    createdAt: "2023-06-21T13:21:48.254Z",
    updatedAt: "2023-06-23T03:37:04.142Z",
  },
];

function extractImageLinks(images) {
  return images.map((image) => image.imgLink);
}

const images = extractImageLinks(imageLinks);
console.log(images);

export default function Crousal() {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="crousal-container">
      <div
        className="crousal-image"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((image, index) => (
          <>
            <img
              className="image-div"
              width={1200}
              height={1200}
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
