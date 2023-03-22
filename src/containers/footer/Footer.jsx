import React from 'react'
import "./footer.css"
import Gpt3 from "../../assets/GPT-3.png"
const Footer = () => {
  return (
    <div className='gpt3_footer section_padding'>
      <div className="gpt3_footer-heading">
        <h1 className='gradient_text'>
          Do you want to step into the future before others.
        </h1>
      </div>

      <div className="gpt3_footer-btn">
        <p>Request early access</p>
      </div>

      <div className="gpt3_footer-links">
        <div className="gpt3_footer-links_logo">
          <img src={Gpt3} alt="links_logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved.</p>
        </div>
        <div className="gpt3_footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p> Counters </p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer-links-div">
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer-links-div">
          <h4>Get In Touch</h4>
          <p>Cretchterwoord K12 182 DK Alkandoc</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3_footer-copyright">
        <p>@2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer