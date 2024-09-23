import React from 'react'
import './about.css'
import aboutImg from '../../assets/about.png'

function About() {
    return (
        <div className="about">
            <div className="about-left">
                <img className='about-img' src={aboutImg} alt="" />
            </div>
            <div className="about-right">
                <div className="about-titles">
                    <h3>About PenaFinance </h3>
                    <h2>Helping you reach your financial goals.</h2>
                    </div>
                <p>we handle all aspects of tax preparation and filing. Whether you're managing personal or business taxes, we ensure everything is done accurately and on time. Our team specializes in maximizing your tax returns while helping you navigate complex tax laws with ease.</p>
                <p>Our credit repair services focus on improving your financial standing, including collections removal and disputing errors that may be hurting your credit score. We create tailored strategies to help you rebuild and maintain strong credit.</p>
                <p>In addition to accounting services, we offer assistance with business and personal loans and comprehensive financial advisory services. From bookkeeping to securing the right loan for your goals, we provide clear, expert advice to keep your finances on track.</p>
            </div>
        </div>
    )
}

export default About
