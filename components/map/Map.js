import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import classes from './Map.module.css';
import { useState } from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

function Map(){
    const position = [47.33572685157286, 19.753010272096798];

    const navigateToGoogleMaps = () => {
      window.open("https://maps.google.com?q="+position[0]+","+position[1] );
    }

    return (
        <MapContainer className={classes.main} center={position} zoom={17.3} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}  eventHandlers={{ click: navigateToGoogleMaps }}>
                <Popup >
                    Oázis pizzéria <br /> és  <br /> Vendéglő
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;