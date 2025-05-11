import React from "react";

import styles from "./Facebook.module.css";

interface FacebookProps {
  className?: string;
}

const Facebook: React.FC<FacebookProps> = ({className}) => {
  return (
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.icon_facebook} ${className}`}
    >
      Facebook
    </a>
  );
};

export default Facebook;
