import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__logo">
        <Image layout="fixed" width={50} height={50} src={'/img/logo.png'} />
      </div>
      <p className="footer__logo--p">Yaniv Dev</p>
      <div className="footer__email">
        <p className="footer__email--p">enter your email for more info</p>
        <div className="footer__email__action">
          <input
            className="footer__email__action--email"
            type="email"
            placeholder="YOUR EMAIL"
          />
          <button
            className="footer__email__action--btn"
            placeholder="YOUR EMAIL"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="footer__follow">
        <h3>Follow me</h3>
        <div className="footer__follow--icons">
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </div>

      <div className="footer__call">
        <h3>Call me</h3>
        <p>054-7602025</p>
      </div>

      <div className="footer__bottom">
        <li>&copy; Yaniv Shabi Front-end/Fullstack Developer</li>
        <li>PRIVACY AND POLICY</li>
        <li>TERMS AND CONDITIONS</li>
        <li>About</li>
      </div>
    </footer>
  );
};

export default Footer;
