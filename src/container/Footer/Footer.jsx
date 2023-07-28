import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';


const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
      <h1 className='app__footer-headtext'>Contact</h1>
      <p className='p__opensans'>9 W 53rd New York, Ny 10019, USA</p>
      <p className='p__opensans'>+51 963458664</p>
      <p className='p__opensans'>+51 963467488</p>
      </div>
      <div className='app__footer-links_logo'>
          <img src={images.gericht} alt='footer_logo' />
          <p className='p__opensans'>歌えるようになりたいと思って何度も聞いているけれど、どうしても歌っている</p>
          <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}} />
          <div className='app__footer-links_icons'>
            <FiFacebook/>
            <FiTwitter />
            <FiInstagram />
          </div>
      </div>
      
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
      <p className='p__opensans'> Monday-Friday:</p>
      <p className='p__opensans'>08:00am -12:00 Pm</p>
      <p className='p__opensans'> Saturday-Sunday:</p>
      <p className='p__opensans'>07:00am -11:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
