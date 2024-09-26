import React from 'react';
import './about.css';
import aboutImg from '../../assets/about.png';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
    
    return (
        <div className="about">
            <div className="about-left">
                <img className='about-img' src={aboutImg} alt="" />
            </div>
            <div className="about-right">
                <div className="about-titles">
                    <h3>{t('about.title')}</h3>
                    <h2>{t('about.subtitle')}</h2>
                </div>
                <p>{t('about.paragraph1')}</p>
                <p>{t('about.paragraph2')}</p>
                <p>{t('about.paragraph3')}</p>
            </div>
        </div>
    );
}

export default About;
