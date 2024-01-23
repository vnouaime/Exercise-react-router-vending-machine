import React from "react";
import { Link } from 'react-router-dom'
import './VendingMachine.css'

/**
 * Displays picture of vending machine and snacks available with links to individual page
 * 
 */
const VendingMachine = () => {
    return (
        <>
            <img 
                className="vendingMachine"
                src="https://evending.com/cdn/shop/files/combinationvendingmachine_4_-min_2048x2048_eb6e4951-49b1-46c4-a333-53718102fbc3.webp?v=1689927091" alt="vending machine"
            />

            <h2>Choose a Snack!</h2>

            <p><Link to="/soda">Soda</Link></p>
            <p><Link to="/chips">Chips</Link></p>
            <p><Link to="/candy">Candy</Link></p>
            
        </>
    )
}

export default VendingMachine;