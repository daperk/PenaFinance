import React from 'react'
import "./services.css"
import service1 from '../../assets/service-1.png'
import service2 from '../../assets/service-2.png'
import service3 from '../../assets/service-3.png'
import service_icon1 from '../../assets/service-icon-1.png'
import service_icon2 from '../../assets/service-icon-2.png'
import service_icon3 from '../../assets/service-icon-3.png'

function Services() {
  return (
    <div className='services'>
      <div className="service">
        <img src={service1} alt="" />
        <div className="caption">
          <img src={service_icon1} alt="" />
          <p>Taxes</p>
        </div>
      </div>
      <div className="service">
        <img src={service2} alt="" />
        <div className="caption">
          <img src={service_icon2} alt="" />
          <p>Credit repair</p>
        </div>
      </div>
      <div className="service">
        <img src={service3} alt="" />
        <div className="caption">
          <img src={service_icon3} alt="" />
          <p>Accounting</p>
        </div>
      </div>
    </div>
  )
}

export default Services