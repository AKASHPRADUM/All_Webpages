import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id='footer'>
      <ul className="allLinks">
        <li><a href="https://pradumdubey.in" className='btn1' target="_blank" rel="noreferrer">View MY Portfolio</a></li>
        <li><a href="https://certificates.pradumdubey.in" className='btn1' target="_blank" rel="noreferrer">All Certificates</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100004863979450" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/pradum_kymar_dubey/" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://www.twitter.com/intent/tweet?screen_name=Pradum12613076" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
      </div>
      <div className="footer_copyright">&#169; by Pradum Kumar Dubey</div>
    </footer>
  )
}

export default Footer;
