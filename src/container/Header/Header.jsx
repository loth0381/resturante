import React from 'react';

import './Header.css';
import { images } from "../../constants"
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0" }}>Mi nombre es Salvatore Antonini y soy el orgulloso dueño de Traviatta Restaurante, establecimiento que abrirá sus puertas al público el día 20 de este mes en la dirección ya presentada.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
    <img src={images.welcome} alt='header images'/>
    </div>
  </div>
);

export default Header;
