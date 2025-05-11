import React from "react";

import styles from "./AppStore.module.css";

interface AppStoreProps {
  className?: string;
}

const AppStore: React.FC<AppStoreProps> = ({className}) => {
  return (
    <a
      href="https://itunes.apple.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.icon_appstore} ${className}`}
    >
      AppStore
    </a>
  );
};

export default AppStore;
