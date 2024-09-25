import React, { useEffect, useState } from 'react'
import "./navbar.css"
import logo from '../../assets/logo.png'
import menuicon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
       <Link to="hero" smooth={true} offset={0} duration={500}><img className='logo' src={logo} alt="" /></Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'} >
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="services" smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to="about"  smooth={true} offset={-260} duration={500}>About us</Link></li>
        <li><Link to="testimonials"  smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><button className='btn'><Link to="contact" smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
      </ul>
      <img src={menuicon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar