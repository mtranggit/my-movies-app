import React from "react";

import styles from "./Twitter.module.css";

interface TwitterProps {
  className?: string;
}

const Twitter: React.FC<TwitterProps> = ({className}) => {
  return (
    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={`${styles.icon_twitter} ${className}`}>
      Twitter
    </a>
  );
};

export default Twitter;
