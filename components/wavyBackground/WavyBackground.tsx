// components/WavyBackground.tsx
import React from 'react';
import styles from './WavyBackground.module.css';

interface WavyBackgroundProps {
  children: React.ReactNode;
}

const WavyBackground: React.FC<WavyBackgroundProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wavyContainer}>
        <div className={styles.topLine}></div>
        <div className={styles.wavySides}>
          <div className={styles.wavy}></div>
          <div className={styles.content}>{children}</div>
          <div className={styles.wavy}></div>
        </div>
        <div className={styles.bottomLine}></div>
      </div>
    </div>
  );
};

export default WavyBackground;
