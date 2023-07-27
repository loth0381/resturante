import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Soy cocinero de esos que les corre aceite por las venas, que cocinan más con las tripas que con la cabeza y que se comen la vida a bocados de placer.</p>
        <button type="button" className="custom__button">Saber mas</button>
      </div>

      <div className="app__aboutus-content_knife flex flex__Center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Soy cocinero de esos que les corre aceite por las venas, que cocinan más con las tripas que con la cabeza y que se comen la vida a bocados de placer.</p>
        <button type="button" className="custom__button">Saber mas</button>
      </div>

      
    </div>
  </div>
);

export default AboutUs;
