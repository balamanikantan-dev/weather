import React, { useState } from "react";
import axios from "axios";
import './City.css'

const City = (props) => {
    let newDate = new Date()
    const [weather, setWeather] = useState({});
    const [isVisible, setIsVisible] = useState(false);


    function inputChangedHandler(event) {
        setSearch(event.target.value)

    }
    const [search, setSearch] = useState("")
    async function searchHandler() {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b6ce0db922efeb887782e1b76749bc61&units=metric`)
        setWeather(response.data)
        setIsVisible(true)
    }


    return (

        <div>

            <div className="ci">
            <label  className="bel" for="Search" >Enter the Place :</label>
                <input className="lab" id="Search" type="text" name="search" onChange={inputChangedHandler} placeholder="Enter the Place"></input><br></br>
                <button className="but" variant="primary" onClick={searchHandler}>Search</button>
            </div>


            {isVisible ? <div>
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
            </div> : null}
        </div>
    )
}
export default City;