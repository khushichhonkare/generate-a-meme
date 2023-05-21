import React from "react"
import "./header.css"
import img from "../HeaderComponents/troll-face.png"
export default function Header() {
    return (
        <header className="header">
            <img 
                src = {img} 
                className="header--image"
                alt=" "
            />
            <h2 className="header--title">Meme Generator</h2>
            
        </header>
    )
}