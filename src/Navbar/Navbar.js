import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../Mani/Mani.css'


const Navbar = (props) => {
    console.log(props)
    // let [car, setCar] = useState(window.location.pathname)
    let location = useLocation(), car = location.pathname;

    // useEffect(() => {
    //     setCar(window.location.pathname)
    // }, [window.location.pathname])
    return (
        <div>
            <div className="topnav">
                <Link className={car === '/' ? 'active' : null} to="/">Home</Link>
                <Link className={car === '/city' ? 'active' : null} to="/city">City</Link>
                <Link className={car === '/map' ? 'active' : null} to="/map">Map</Link>
                <Link className={car === '/about' ? 'active' : null} to="/about">About</Link>
            </div>
        </div>
    )
}
export default Navbar;