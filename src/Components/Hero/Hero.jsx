import React from 'react'
import "../Hero/hero.css"
import darkArrow from "../../assets/dark-arrow.png"
import { Link } from 'react-scroll'

function Hero() {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Building Your Finances with Expert Care - Taxes, Credit, and Beyond.</h1>
                <p>At Pena Finance, we specialize in taxes, accounting, credit repair, and personalized financial services.
                 Our expert team is dedicated to helping you achieve financial clarity and success, no matter your goals.
                 Let us guide you on your journey to financial wellness.</p>
                 <button className='btn'><Link to="contact" smooth={true} offset={-260} duration={500}>Get Started Today! <img src={darkArrow} alt="" /> </Link></button>
            </div>
        </div>
    )
}

export default Hero