import React, { useRef } from 'react'
import "./testimonials.css"
import back from '../../assets/back-icon.png'
import next from '../../assets/next-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import { useTranslation } from 'react-i18next'


function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideFoward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const { t } = useTranslation();

  return (
    <div className='testimonials'>
      <img src={next} alt="" className='next-btn' onClick={slideFoward} />
      <img src={back} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider" >
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user1} alt="review" />
                <div>
                  <h3>Carla M.</h3>
                  <span>Miami, FL</span>
                </div>
              </div>
              <p>{t('testimonialsc.testimonial1')}</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user2} alt="review" />
                <div>
                  <h3>James T.</h3>
                  <span>Miami, FL</span>
                </div>
              </div>
              <p>{t('testimonialsc.testimonial2')}</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user3} alt="review" />
                <div>
                  <h3>Andres P.</h3>
                  <span>Miami, FL</span>
                </div>
              </div>
              <p>{t('testimonialsc.testimonial3')}</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user4} alt="review" />
                <div>
                  <h3>NLG Agency</h3>
                  <span>Miami, FL</span>
                </div>
              </div>
              <p>{t('testimonialsc.testimonial4')}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials