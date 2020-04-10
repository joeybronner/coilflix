import React from 'react';

import PlayLogo from '../static/images/play-button.svg';
import AddLogo from '../static/images/add.svg';


export default function Header(props) {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(../static/images/header.png)`,
    backgroundPosition: "center",
  }

  return (
    <header style={backgroundStyle} className="header">
      <div className="header__container">
        <h1 className="header__container-heading">Popchain – In pop we trust</h1>
        <button onClick={() => window.open('https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=f7bab6e9-6b1b-40d3-9801-a4bbee933ec7', '_blank')} className="header__container-btnPlay">
          <PlayLogo className="header__container-btnMyList-play" />
          Play
        </button>

        <button onClick={() => window.open('https://www.sap.com/dmc/exp/2017_04_coil_directory/#/d/projects?id=f7bab6e9-6b1b-40d3-9801-a4bbee933ec7', '_blank')} className="header__container-btnMyList">
          <AddLogo className="header__container-btnMyList-add" />
          My List
        </button>
        <p className="header__container-overview">Partner STMS and COIL jointly prototyped a solution for customer Nataïs, a popcorn producer. The solution provides consumers with product transparency from farmer to point-of-sale (POS) through a QR code scan. This helps Nataïs to properly position its high quality products while communicating directly with the consumer (B2B and B2B2C) on its environment-friendly practices and commitment to economic durability for all players.</p>
      </div>
      <div className="header--fadeBottom"></div>
    </header>
  )
}