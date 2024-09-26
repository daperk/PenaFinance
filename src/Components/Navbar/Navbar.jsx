import React, { useEffect, useRef, useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menuicon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileMenu(false); // Close menu if click is outside
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside); // Handle outside clicks

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside); // Cleanup event listener
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev); // Toggle menu visibility
  };

  const handleMenuItemClick = () => {
    setMobileMenu(false); // Close menu when a menu item is clicked
  };

  // i18n translations and language change handler
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav ref={navbarRef} className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img className='logo' src={logo} alt="" />
      </Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500} onClick={handleMenuItemClick}>{t('Home')}</Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-260} duration={500} onClick={handleMenuItemClick}>{t('Services')}</Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-180} duration={500} onClick={handleMenuItemClick}>{t('About us')}</Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={handleMenuItemClick}>{t('Testimonials')}</Link>
        </li>
        {/* <li>
          <div className="language-switcher">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('es')}>ES</button>
          </div>
        </li> */}
        <li>
          <button className='btn'>
            <Link to="contact" smooth={true} offset={-260} duration={500} onClick={handleMenuItemClick}>{t('Contact us')}</Link>
          </button>
        </li>
        <li>
          <div className="language-switcher">
            <button className='btn' onClick={() => changeLanguage('en')}>EN</button>
            <button className='btn' onClick={() => changeLanguage('es')}>ES</button>
          </div>
        </li>
      </ul>
      <img src={menuicon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
