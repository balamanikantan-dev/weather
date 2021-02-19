import React, { useEffect, useState } from 'react';
import Mani from '../Mani/Mani';
import Abhi from '../Abhi/Abhi';
import axios from "axios";


const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
        }
        function getPosition(position) {
            console.log(position.coords.latitude, position.coords.longitude);
            let loc = `http://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b6ce0db922efeb887782e1b76749bc61&units=metric`
            axios.get(loc)
                .then(response => {
                    // console.log(response)
                    setData(response.data.list);
                }) 
        }
    }, [])
    return (
        <div>
            <div>

                <div>
                    <Mani />

                    <div style={
                        {
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: "30px",
                            justifyContent: "space-evenly",
                            width: "90vw",
                            flexWrap: 'wrap',
                            alignItems: "center"

                        }
                    }>
                        {data.map(ele => {
                            return (<div style={
                                {
                                    width: "20%",
                                    borderRight: "ridge",
                                    marginBottom: "40px"
                                }
                            } >      <Abhi temperature={ele.main.temp}
                                timeOfDay={ele.dt_txt}
                                humidity={ele.main.humidity} />
                            </div>)

                        })}

                    </div>
                </div>


            </div>

        </div>
    )
}
export default Home;