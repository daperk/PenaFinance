import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
   <div>
      <Navbar />
      <Hero />
      <div className="container">
        {/* Translating Titles and Subtitles */}
        <Title subtitle={t('services.subtitle')} title={t('services.title')} />
        <Services />
        <About />
        <Title subtitle={t('testimonials.subtitle')} title={t('testimonials.title')} />
        <Testimonials />
        <Title subtitle={t('contact.subtitle')} title={t('contact.title')} />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App