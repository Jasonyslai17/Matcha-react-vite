import React from "react"
import matchaIcon from "../images/matcha-icon.png"

export default function NavBar() {
    return (
        <div className="Navbar-container">
            <img src= {matchaIcon} className="matcha-icon"/>
            <h1>Matcha</h1>
        </div>
    )
}