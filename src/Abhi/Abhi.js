import React from "react";
const abhi = (props) => {
    return (

        <div style={
            {
                paddingTop: "10px"

            }
        }>
            <span style={
                { color: "red" ,fontSize: "18px"}
            }>Time : {props.timeOfDay}</span> <br></br>
            <span style={
                { color: "blue", fontSize: "20px" }
            }>Temperature : {props.temperature}<sup>o</sup></span> <br></br>

            <img style={{ width: "20%" }} src="https://i.pinimg.com/originals/fd/bb/ac/fdbbac00b8feb7bc831ad470e5d13e43.png" alt="ma"></img><br></br>
            <span style={
                { color: "black",fontSize: "18px" }
            }>Humidity : {props.humidity}</span>
        </div>
    )

}
export default abhi;