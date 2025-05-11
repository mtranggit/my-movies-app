import React from "react";

import styles from "./WindowStore.module.css";

interface WindowStoreProps {
  className?: string;
}

const WindowStore: React.FC<WindowStoreProps> = ({className}) => {
  return (
    <a
      href="https://apps.microsoft.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.icon_windowstore} ${className}`}
    >
      WindowStore
    </a>
  );
};

export default WindowStore;
