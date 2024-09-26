import React from 'react'
import "./contact.css"
import msg from "../../assets/msg-icon.png"
import mail from "../../assets/mail-icon.png"
import phone from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
import { useTranslation } from 'react-i18next'


function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de676efe-5b30-47ae-a02d-be943b9281cf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const { t } = useTranslation();
  
    return (
      <div className='contact'>
      <div className="contact-col">
        <h3>{t('contact.header')} <img src={msg} alt="" /></h3>
        <p>{t('contact.intro')}</p>
        <ul>
          <li><img src={mail} alt="" /><a href="mailto:Thepenafinance@gmail.com">Thepenafinance@gmail.com</a></li>
          <li><img src={phone} alt="" /><a href="tel:+17863288321">+1 786-328-8321</a></li>
          <li><img src={location} alt="address" /><span>Miami, FL, <br /> United States</span></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>{t('contact.form.nameLabel')}</label>
          <input type="text" name='name' placeholder={t('contact.form.namePlaceholder')} required />
          <label>{t('contact.form.phoneLabel')}</label>
          <input type="tel" name='phone' placeholder={t('contact.form.phonePlaceholder')} required />
          <label>{t('contact.form.emailLabel')}</label>
          <input type="email" name='email' placeholder={t('contact.form.emailPlaceholder')} required />
          <label>{t('contact.form.messageLabel')}</label>
          <textarea name="message" rows="6" placeholder={t('contact.form.messagePlaceholder')} required></textarea>
          <button type='submit' className='btn dark-btn'>{t('contact.form.submitButton')} <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    )
}

export default Contact