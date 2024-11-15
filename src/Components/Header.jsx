import React from 'react';
import './Header.css';
import logo from '../Components/logo.png'
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <button className="button">
          <a className='text-logo' href="https://x.com/fwogonstx/status/1856754650881347970?s=46"><BsTwitterX /></a>
          <a className='text-logo' href="https://t.me/+rdRP4VGHVx0yYWM0"><BiLogoTelegram /></a>
          Join us!
        </button>

        <div className="logo">
          <div className="logo-circle">
            <img 
              src={logo} 
              alt="Frog" 
              style={{ width: 32, height: 32 }}
            />
          </div>
          <span className="logo-text">STXFWOG</span>
        </div>

        <button className="button">
          Buy Token
          <a className='text-logo' href="https://stx.city/bonding-curve/SPNT6E9ZDHQ5BKRZQ0M6ZDFFZXCPN4DTZ600VYDC.fwog-stxcity-dex/SPNT6E9ZDHQ5BKRZQ0M6ZDFFZXCPN4DTZ600VYDC.fwog-stxcity/SP2BN9JN4WEG02QYVX5Y21VMB2JWV3W0KNHPH9R4P"><IoArrowRedoCircleOutline /></a>
        </button>
      </div>
    </header>
  );
};

export default Header;