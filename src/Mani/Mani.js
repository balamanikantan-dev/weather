import React, { useEffect, useState } from "react";
import './Mani.css';
import axios from "axios";
const Mani = (props) => {
    let newDate = new Date()
    const [weather, setWeather] = useState({});
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
        }
        function getPosition(position) {
            console.log(position.coords.latitude, position.coords.longitude);
            let loc = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b6ce0db922efeb887782e1b76749bc61&units=metric`
            //    axios.get("http://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=b6ce0db922efeb887782e1b76749bc61&units=metric")
            axios.get(loc)
                .then(response => {
                    console.log(response)
                    setWeather(response.data)
                })
        }
    }, [])
    return (
        <div>


            <div>
                {/* <div>
        {JSON.stringify(weather, null, 4)}
      </div> */}
                <div>
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
                                    <span style={
                                        { color: "gray", fontSize: "20px" }
                                    }>Today's Forecast for {weather.name}</span>

                                </div>

                            </div>
                        </section>


                    </div>
                </div>
            </div>
        </div>
    )

}
export default Mani;