import React from 'react'
import './header.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header-socials">
    <a href="https://linkedin.com/in/pradum-dubey-55009a1ba" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    <a href="https://github.com/AKASHPRADUM" target="_blank" rel="noreferrer"><FaGithub /></a>
    <a href="https://www.instagram.com/pradum_kymar_dubey/" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial
