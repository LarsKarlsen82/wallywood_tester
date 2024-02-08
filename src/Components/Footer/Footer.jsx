// Info: Husk at installere: npm install react-icons

import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Wallywood</h3>
        <br />
        <p>Øster Uttrupvej 1 </p>
        <p>9000 Aalborg</p>
        <p>Danmark</p>
      </div>

      <div>
        <h3>CVR</h3>
        <p>MAIL:info@plakatshoppen.dk</p>
        <p>MOBIL: +454 9812 3456</p>
      </div>

      <div className={styles['social-media']}>
        <h3>Sociale medier</h3>
          <div className={styles['social-icons']}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={`${styles['social-icon']} ${styles['facebook']}`} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={`${styles['social-icon']} ${styles['linkedin']}`} />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={`${styles['social-icon']} ${styles['instagram']}`} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={`${styles['social-icon']} ${styles['twitter']}`} />
            </a>


          </div>

      </div>
    </footer>
  );
};

export default Footer;