import React, { useEffect, useState } from 'react'
import "./navbar.css"
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import Hero from '../Hero/Hero';

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img className='logo' src={logo} alt="" />
      <ul>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="services" smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to="about"  smooth={true} offset={-260} duration={500}>About us</Link></li>
        <li><Link to="testimonials"  smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><button className='btn'><Link to="contact" smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
      </ul>
    </nav>
  )
}

export default Navbar