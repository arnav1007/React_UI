import React from 'react';
import styles from '../styles/FeatureCard.module.css';

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.featureCard}>
      <img loading="lazy" src={icon} alt="" className={styles.featureIcon} />
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
      
    </div>
  );
};