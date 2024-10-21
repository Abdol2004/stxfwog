import React from 'react';
import './Hero.css';
import { IoArrowRedo } from "react-icons/io5";
const FrogSection = () => {
  return (
    <section className="frog-section">
      <div className="frog-container">
        <img src="./images/frog-1.png" alt="Decorative frog" className="frog-decorative frog-top-left" />
        <img src="./images/frog-2.png" alt="Decorative frog" className="frog-decorative frog-top-right" />
        <img src="./images/frog-3.png" alt="Decorative frog" className="frog-decorative frog-bottom-left" />
        <img src="./images/frog-4.png" alt="Decorative frog" className="frog-decorative frog-bottom-right" />

        <img src="./images/hero.png" alt="Unleash your inner desire for freedom" className="main-image" />

        <p className="description">
        Train your fwog from a dark fwog to a crypto superstar. Upgrade, complete quests, invite friends, and become the ultimate Fwog Baby!
        </p>

        <button className="cta-button">
          Join Us  Now
          <a className='img' href=""><IoArrowRedo /></a>
        </button>
      </div>
    </section>
  );
};

export default FrogSection;
