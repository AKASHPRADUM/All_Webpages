import React from 'react'
import './portfolio.css'
import IMG1 from '../../portfolio1.jpg'
import IMG2 from '../../portfolio2.jpg'
import IMG3 from '../../portfolio3.jpg'
import IMG4 from '../../portfolio4.jpg'
import IMG5 from '../../portfolio5.png'
import IMG6 from '../../portfolio6.jpg'
import IMG7 from '../../portfolio7.jpg'
import IMG8 from '../../portfolio8.jpg'
import IMG9 from '../../portfolio9.png'
import IMG10 from '../../portfolio10.jpg'
import IMG11 from '../../portfolio11.jpg'
import IMG12 from '../../portfolio1.jpg'

const portfolioData = [
  {
    imgsrc: IMG7,
    imgalt: "Img 7",
    name: "Personal Portfolio",
    link1: "https://github.com/AKASHPRADUM/Portfolio-React.git",
    link2: "https://pradumdubey.in"
  },
  {
    imgsrc: IMG1,
    imgalt: "Img 1",
    name: "Banking-System",
    link1: "https://github.com/AKASHPRADUM/Banking-System.git",
    link2: "https://banking-system-8u69.onrender.com"
  },
  {
    imgsrc: IMG2,
    imgalt: "Img 2",
    name: "Login Page",
    link1: "https://github.com/AKASHPRADUM/No.2-Login-page.git",
    link2: "https://loginpage.pradumdubey.in"
  },
  {
    imgsrc: IMG8,
    imgalt: "Img 8",
    name: "House Sell Page",
    link1: "https://github.com/AKASHPRADUM/No.1-pratice-House-Sell-Page.git",
    link2: "https://house.pradumdubey.in"
  },
  {
    imgsrc: IMG9,
    imgalt: "Img 9",
    name: "Photoshop Responsive",
    link1: "https://github.com/AKASHPRADUM/Photoshop-responsive.git",
    link2: "https://responsive.pradumdubey.in"
  },
  {
    imgsrc: IMG10,
    imgalt: "Img 10",
    name: "Tribute to Albert Einstein",
    link1: "https://github.com/AKASHPRADUM/no.4-Tribute-Albert_Einstein.git",
    link2: "https://akashpradum.github.io/no.4-Tribute-Albert_Einstein/"
  },
  {
    imgsrc: IMG6,
    imgalt: "Img 6",
    name: "Multiimage Show",
    link1: "https://github.com/AKASHPRADUM/No.5-Multiimage-Show.git",
    link2: "https://akashpradum.github.io/No.5-Multiimage-Show/"
  },
  {
    imgsrc: IMG2,
    imgalt: "Img 2",
    name: "Restorent Front Page",
    link1: "https://github.com/AKASHPRADUM/No.7-Restorent-Front-Page.git",
    link2: "https://akashpradum.github.io/No.7-Restorent-Front-Page/"
  },
  {
    imgsrc: IMG11,
    imgalt: "Img 11",
    name: "Dice Game",
    link1: "https://github.com/AKASHPRADUM/Dice-Challenge.git",
    link2: "https://akashpradum.github.io/Dice-Challenge/"
  },
  {
    imgsrc: IMG2,
    imgalt: "Img 2",
    name: "Landing Page",
    link1: "https://github.com/AKASHPRADUM/No.6-Landing-Page.git",
    link2: "https://landingpage.pradumdubey.in"
  },
  {
    imgsrc: IMG3,
    imgalt: "Img 3",
    name: "Analog and Digital Clock",
    link1: "https://github.com/AKASHPRADUM/Analog-and-Digital-Clock.git",
    link2: "https://clock.pradumdubey.in"
  },
  {
    imgsrc: IMG4,
    imgalt: "Img 4",
    name: "Drum Kit",
    link1: "https://github.com/AKASHPRADUM/Drum-Kit.git",
    link2: "http://drum-kit.pradumdubey.in"
  },
  {
    imgsrc: IMG5,
    imgalt: "Img 5",
    name: "Survey Form",
    link1: "https://github.com/AKASHPRADUM/No.3-Servay-Form.git",
    link2: "https://servay.pradumdubey.in"
  },
  {
    imgsrc: IMG6,
    imgalt: "Img 6",
    name: "Style Confrence",
    link1: "https://github.com/AKASHPRADUM/Style-Confrance.git",
    link2: "https://confrence.pradumdubey.in"
  },
  {
    imgsrc: IMG12,
    imgalt: "Img 12",
    name: "All Certificate",
    link1: "https://github.com/AKASHPRADUM/Certificate.git",
    link2: "https://certificates.pradumdubey.in"
  }
];
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Pradum Kumar Dubey</h2>
      <div className="container portfolio_container">
        {portfolioData.map((alldata) =>
          <article className='portfolio_item'>
            <div className="portfolio_item_image">
              <img src={alldata.imgsrc} alt={alldata.imgalt} />
            </div>
            <h3>{alldata.name}</h3>
            <div className="portfolio_item_link">
              <a href={alldata.link1} className='btn' target="_blank" rel="noreferrer">Github</a>
              <a href={alldata.link2} className='btn btn-primary' target="_blank" rel="noreferrer">live Demo</a>
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Portfolio;
