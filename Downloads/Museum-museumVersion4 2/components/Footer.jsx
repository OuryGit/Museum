import styles from './Footer.module.css'
import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaInstagram />
          </a>
          <a href="tel:+1234567890" className={styles.socialIcon}>
            <FaPhoneAlt />
          </a>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaMapMarkerAlt />
          </a>
        </div>
        <div>&copy; Collège La Cité 2024</div><br />
        <div>Développé par Youssef El Ghazzali/Mamadou Oury Bah/Amadou Doumbia</div>

      </div>
    </footer>
  );
}
