import React from "react"
import { Link } from "react-router-dom"
import "./Soda.css"

/**
 * Returns description, image of snack, and back button to go back to vending machine. 
 */
const Soda = () => {
    const sodaImage = `https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/208206/208206`

    return (
        <>
            <h1>SODA</h1>
            <img className={sodaImage} src={sodaImage} alt="soda"/>
            <p><Link to="/">GO BACK</Link></p>
        </>
    )
}

export default Soda;