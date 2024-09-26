import React from 'react'
import "../Hero/hero.css"
import darkArrow from "../../assets/dark-arrow.png"
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t } = useTranslation();
    return (
        <div className='hero container'>
        <div className="hero-text">
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.description')}</p>
            <button className='btn'>
                <Link to="contact" smooth={true} offset={-260} duration={500}>
                    {t('hero.button')} <img src={darkArrow} alt="" />
                </Link>
            </button>
        </div>
    </div>
    )
}

export default Hero