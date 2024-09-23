import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Services' title='What We Offer' />
        <Services />
        <Title subtitle='About us' title='This Is What We Do' />
        <About />
        <Title subtitle='Testimonials' title='What Our Clients Say' />
      </div>
    </div>
  )
}

export default App