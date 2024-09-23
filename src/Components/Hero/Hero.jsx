import React from 'react'
import "../Hero/hero.css"
import darkArrow from "../../assets/dark-arrow.png"

function Hero() {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Building Your Finances with Expert Care - Taxes, Credit, and Beyond.</h1>
                <p>At Pena Finance, we specialize in taxes, accounting, credit repair, and personalized financial services.
                 Our expert team is dedicated to helping you achieve financial clarity and success, no matter your goals.
                 Let us guide you on your journey to financial wellness.</p>
                 <button className='btn'>Get Started Today! <img src={darkArrow} alt="" /> </button>
            </div>
        </div>
    )
}

export default Hero