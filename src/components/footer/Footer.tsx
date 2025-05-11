import React from "react";

import AppStore from "../appstore";
import FaceBook from "../facebook";
import Instagram from "../instagram";
import PlayStore from "../playstore";
import Twitter from "../twitter";
import WindowStore from "../windowstore";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__links}>
        <li>
          <a href="/" className={styles.footer__link}>
            Home
          </a>
        </li>
        <li>
          <a href="/terms" className={styles.footer__link}>
            Terms and Conditions
          </a>
        </li>
        <li>
          <a href="/privacy" className={styles.footer__link}>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/collection" className={styles.footer__link}>
            Collection Statement
          </a>
        </li>
        <li>
          <a href="/help" className={styles.footer__link}>
            Help
          </a>
        </li>
        <li>
          <a href="/account" className={styles.footer__link}>
            Manage Account
          </a>
        </li>
      </ul>
      <div className={styles.footer__copyright}>
        <p>&copy; {new Date().getFullYear()} DEMO Streaming. All rights reserved.</p>
      </div>
      <div className={styles.footer__social}>
        <ul className={styles.footer__social_left}>
          <li>
            <FaceBook className={styles.footer__social_link} />
          </li>
          <li>
            <Twitter className={styles.footer__social_link} />
          </li>
          <li>
            <Instagram className={styles.footer__social_link} />
          </li>
        </ul>
        <ul className={styles.footer__social_right}>
          <li>
            <AppStore className={styles.footer__social_link} />
          </li>
          <li>
            <PlayStore className={styles.footer__social_link} />
          </li>
          <li>
            <WindowStore className={styles.footer__social_link} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
