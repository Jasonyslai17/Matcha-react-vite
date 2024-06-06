import React from "react"
import JasonImage from "/images/Jason.png"

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card-badge"/>
            <img
                src={`/images/${props.image}`}
                className="card-image"
            />
            <div className="card-stats">
                <p className="card-name">{props.name}</p>
                <p className="card-instagram">{props.Instagram}</p>
            </div>
            <p className="card-description">{props.description}</p>
        </div>
    )
}