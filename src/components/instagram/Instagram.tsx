import React from "react";

import styles from "./Instagram.module.css";

interface InstagramProps {
  className?: string;
}

const Instagram: React.FC<InstagramProps> = ({className}) => {
  return (
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.icon_instagram} ${className}`}
    >
      Instagram
    </a>
  );
};

export default Instagram;
