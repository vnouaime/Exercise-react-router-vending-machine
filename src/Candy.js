import React from "react"
import { Link } from "react-router-dom"
import "./Candy.css"

/**
 * Returns description, image of snack, and back button to go back to vending machine. 
 */
const Candy = () => {
    const candyImage = `https://m.media-amazon.com/images/I/41NT7YN956L._AC_UF894,1000_QL80_.jpg`

    return (
        <>
            <h1>CANDY</h1>
            <img className={candyImage} src={candyImage} alt="candy"/>
            <p><Link to="/">GO BACK</Link></p>
        </>
    )
}

export default Candy;