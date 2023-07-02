import React, { useEffect } from "react";
import "./Footer.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
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
            <p>Contact Us</p>
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

        <div>
          <Mapty />
        </div>
      </div>

      <div className="footerLast">
        <div className="leftLast">
          <p>Copyright@{new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

function Mapty() {
    // Curr Poaitoion // 
  const position = [31.3959, 75.5358]
  return (
    <div className="map" id="map">
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>???</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Footer;
