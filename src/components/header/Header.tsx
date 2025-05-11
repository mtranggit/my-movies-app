import React from "react";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <a href="/" className={styles.header__link}>
          <h1>DEMO Streaming</h1>
        </a>
      </div>
      <ul className={styles.header__links}>
        <li>
          <a href="/login" className={styles.header__link}>
            Log in
          </a>
        </li>
        <li>
          <a href="/free-trial" className={styles.header__promo}>
            Start your free trial
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
