import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import './Map.css';
import axios from "axios";

const Map = () => {
    let newDate = new Date()
    const [weather, setWeather] = useState({});
    const [currentPos, setCurrentPos] = useState()
    const [isVisible, setIsVisible] = useState(true);
    const handleClick = (event) => {
        alert('ganavi')
        setCurrentPos(event.latlng)

    }

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click(e) {
                console.log(e)
                setCurrentPos(e.latlng)
                setPosition(e.latlng)

            },

        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )

    }


    async function buttonClick() {
        setCurrentPos(false);
        setIsVisible(false);
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${currentPos.lat}&lon=${currentPos.lng}&appid=b6ce0db922efeb887782e1b76749bc61&units=metric`)
        setWeather(response.data)
        console.log(response.data)
    }
    function butClick() {
        setIsVisible(true);
        setWeather({})
    }
    const [position, setPosition] = useState([12, 77.304470])
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
        }
        function getPosition(position) {
            console.log(position.coords.latitude, position.coords.longitude);
            setPosition([position.coords.latitude, position.coords.longitude])



        }
    }, [])

    return (
        <div>
            <section style={{ display: 'flex' }}>
                <h1>Map</h1>

                {currentPos ?
                    <button className="but" variant="primary" onClick={buttonClick}>Search</button>
                    : null}

                {Object.keys(weather).length === 0 ? null : <button className="but" variant="primary" onClick={butClick}>Cancel</button>}
            </section>
            <div style={{ width: "100vw", height: "90vh" }}>
                {/* <LeafletMap center={[12, 77.304470]}
                    zoom={16} onClick={handleClick}>
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {currentPos && <Marker position={currentPos} draggable={true}>
                        <Popup position={currentPos}>
                            Current location: <pre>{JSON.stringify(currentPos, null, 2)}</pre>
                        </Popup>
                    </Marker>}
                </LeafletMap> */}

                {isVisible ? <MapContainer style={{ height: '80vh' }} onClick={handleClick} center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {currentPos && <Marker position={currentPos} draggable={true}>
                        <Popup position={currentPos}>
                            Current location: <pre>{JSON.stringify(currentPos, null, 2)}</pre>
                        </Popup>
                    </Marker>}
                    <LocationMarker />

                </MapContainer>
                    : <div>
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    <span style={
                                        { color: "white", fontSize: "20px" }
                                    }>{weather.name}</span> <br></br>
                                    <span style={
                                        { color: 'gray', fontSize: "15px" }
                                    }> as of {`${newDate}`}IST</span><br></br>
                                    <span style={
                                        { color: "white", fontSize: "60px" }
                                    }>{weather?.main?.temp}<sup>o</sup></span><br></br>
                                    <span style={
                                        { color: "white", fontSize: "20px" }
                                    }>{weather?.weather?.length > 0 && weather?.weather[0]?.main}</span><br></br>
                                    <span style={
                                        { color: "white", fontSize: "15px", textTransform: "capitalize" }
                                    }>{weather?.weather?.length > 0 && weather?.weather[0]?.description}</span>
                                </p>
                            </header>
                            <section>
                                <div className="card-content">
                                    <div className="content">
                                        Today's Forecast for {weather.name}

                                    </div>

                                </div>
                            </section>


                        </div>
                    </div>}
            </div>
        </div>
    )
}
export default Map;