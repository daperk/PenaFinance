import React from 'react'
import "./testimonials.css"
import back from '../../assets/back-icon.png'
import next from '../../assets/next-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'


function Testimonials() {
  const slideFoward = () => {
  }
  const slideBackward = () => {
  }

  return (
    <div className='testimonials'>
      <img src={next} alt="" className='next-btn' onClick={slideFoward}/>
      <img src={back} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user1} alt="review" />
                <div>
                  <h3>Carla M.</h3>
                  <span>Miami, FL</span>
                </div>
              </div>
              <p>I never thought tax season could be so easy! The folks at Pena Finance were super friendly and really helped me get the most out of my return. I'm so grateful!</p>
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
              <p>Pena Finance feels like part of my team! They handle all my accounting needs with care and really understand my business. I can focus on what I do best, knowing they've got my back.</p>
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
              <p>I was struggling with my credit score, but Pena Finance came to the rescue! They took the time to explain everything and helped me remove negative items. My score has never been better!</p>
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
              <p>I can't thank Pena Finance enough for helping me secure a business loan! They made the process feel so simple and stress-free. I really felt supported the whole way through!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials