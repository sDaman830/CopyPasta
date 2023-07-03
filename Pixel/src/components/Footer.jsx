import React, { useEffect } from "react";
import "./Footer.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
  return (
    <>
      <div className="Footercontainer">
        <div className="divLink">
          <h1 className="FooterLogo">Conference</h1>
          <br></br>
          <a className="FooterLinks" href="/">
            <p>Home</p>
          </a>
          <a className="FooterLinks" href="/">
            <p>Speakers</p>
          </a>
          <a className="FooterLinks" href="/">
            <p>Committee</p>
          </a>
          <a className="FooterLinks" href="/">
            <p>Awards</p>
          </a>
          <a className="FooterLinks" href="/">
            <p>Contact Us</p>
          </a>
        </div>

        <div>
          <Mapty />
        </div>
      </div>

      <div className="footerLast">
        <div className="leftLast">
          <p>Copyright@{new Date().getFullYear()} All Rights Reserved CopyPasta</p>
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
