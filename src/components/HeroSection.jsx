import React from "react";
import styles from "../styles/HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeLabel}>New feature</span>
            <div className={styles.badgeMessage}>
              <span>Check out the team dashboard</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6fd8438924596bbd29923cdeb945711cfb0b9cd60ccb8083596db39e90fd100?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
                alt=""
                className={styles.badgeIcon}
              />
            </div>
          </div>
          <h1 className={styles.heading}>
            Beautiful analytics to grow smarter
          </h1>
          <p className={styles.description}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className={styles.actions}>
            <button className={styles.demoButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/784427ed17dff740476480dcb80dbf4802a2d80830154327e6ca7b66b4ecab7a?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
                alt=""
                className={styles.demoIcon}
              />
              <span>Demo</span>
            </button>
            <button className={styles.signupButton}>Sign up</button>
          </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aace1e679cfb262d683ff61c29718a02584539f99d9382c10c8d7fff96ed454f?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
          alt="Analytics dashboard preview"
          className={styles.image}
        />
      </div>
    </section>
  );
};
