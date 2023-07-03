import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import "./FooterW.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
  return (
    <>
      <div className="FootercontainerW">
        <div className="divLinkW">
          <h1 className="FooterLogoW">Conference</h1>
          <br></br>
          <Link className="FooterLinksW" to="/">
            <p>Home</p>
          </Link>
          <Link className="FooterLinksW" to="/speakers">
            <p>Speakers</p>
          </Link>
          <Link className="FooterLinksW" to="/committee">
            <p>Committee</p>
          </Link>
          <Link className="FooterLinksW" to="/awards">
            <p>Awards</p>
          </Link>
          <Link className="FooterLinksW" to="/contact">
            <p>Contact Us</p>
          </Link>
        </div>

        <div>
          <Mapty />
        </div>
      </div>

      <div className="footerLastW">
        <div className="leftLastW">
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
