import React from "react";

import styles from "./PlayStore.module.css";

interface PlayStoreProps {
  className?: string;
}

const PlayStore: React.FC<PlayStoreProps> = ({className}) => {
  return (
    <a
      href="https://play.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.icon_playstore} ${className}`}
    >
      PlayStore
    </a>
  );
};

export default PlayStore;
