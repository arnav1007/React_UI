import React, { useState } from "react";
import styles from "../styles/Header.module.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", type: "link" },
    { label: "Products", type: "dropdown" },
    { label: "Resources", type: "dropdown" },
    { label: "Pricing", type: "link" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c3c1288069c3717c1788dd4db3414112a4cbc2b915d94b0833169130b0f4644?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
              alt="Company Logo"
              className={styles.logoImage}
            />
          </div>
          <nav className={`${styles.navigation} ${isMenuOpen ? styles.showMenu : ""}`}>
            {navigationItems.map((item, index) =>
              item.type === "dropdown" ? (
                <div key={index} className={styles.dropdownTrigger}>
                  <button className={styles.dropdownButton}>
                    <span>{item.label}</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6950ecb31c284909607359aa7e93f637fcc361cb6a8b3ca3a711b3f76044b1b?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
                      alt=""
                      className={styles.dropdownIcon}
                    />
                  </button>
                </div>
              ) : (
                <button key={index} className={styles.navButton}>
                  {item.label}
                </button>
              )
            )}
          </nav>
        </div>
        <div className={styles.userProfile}>
          <button className={styles.profileButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b80062129c78e32ab2b307a52715dd1d2178a73641a3b5416738045984441d56?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
              alt="User profile"
              className={styles.profileImage}
            />
            <div className={styles.profileBorder} />
          </button>
        </div>
        <button className={styles.hamburgerMenu} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </header>
  );
};
