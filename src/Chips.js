import React from "react"
import { Link } from "react-router-dom"
import "./Chips.css"

/**
 * Returns description, image of snack, and back button to go back to vending machine. 
*/
const Chips = () => {
    const chipsImage = `https://m.media-amazon.com/images/I/91NjwbVi0+L._AC_UF1000,1000_QL80_.jpg`

    return (
        <>
            <h1>CHIPS</h1>
            <img className={chipsImage} src={chipsImage} alt="chips"/>
            <p><Link to="/">GO BACK</Link></p>
        </>
    )
}

export default Chips;