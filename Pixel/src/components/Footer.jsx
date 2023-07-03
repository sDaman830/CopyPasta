import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
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
          <Link className="FooterLinks" to="/">
            <p>Home</p>
          </Link>
          <Link className="FooterLinks" to="/speakers">
            <p>Speakers</p>
          </Link>
          <Link className="FooterLinks" to="/committee">
            <p>Committee</p>
          </Link>
          <Link className="FooterLinks" to="/awards">
            <p>Awards</p>
          </Link>
          <Link className="FooterLinks" to="/contact">
            <p>Contact Us</p>
          </Link>
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
