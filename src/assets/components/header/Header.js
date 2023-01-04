import React from 'react'
import HeaderSocial from './HeaderSocial'
import './header.css'
const header = () => {
  return (
    <header id='header'>
        <div className="container header-container">
            <HeaderSocial />
        </div>
    </header>
  )
}

export default header