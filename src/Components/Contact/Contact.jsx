import React from 'react'
import "./contact.css"
import msg from "../../assets/msg-icon.png"
import mail from "../../assets/mail-icon.png"
import phone from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"


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

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message! <img src={msg} alt="" /></h3>
                <p>Contact us today! We're here to answer any questions about our services and assist you with your financial goals. Whether you need tax advice, credit repair, or accounting services, our friendly team is ready to help. Fill out the form below, and we'll get back to you soon. Let's work together towards your financial success!</p>
                <ul>
                    <li><img src={mail} alt="" />Thepenafinance@gmail.com</li>
                    <li><img src={phone} alt="" />+1 786-328-8321</li>
                    <li><img src={location} alt="address" />Miami, FL, <br /> United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>
                    <label>Email</label>
                    <input type="Email" name='phone' placeholder='Enter Your Email' required/>
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact