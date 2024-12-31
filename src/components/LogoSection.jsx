import React from "react";
import styles from "../styles/LogoSection.module.css";

export const LogoSection = () => {
  const logos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/04322aa649cba126b025e8b011ecbcfa41224659db030a84977eda791826d3df?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      alt: "Partner company logo 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/94f68aa06668b51f99066f6cfb981f5c2f7602cd31300306718040804b7f40ce?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      alt: "Partner company logo 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7565aabd685d9cc94b10d3280c860e2cea421b5db4341c614da999db8e77b4e?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      alt: "Partner company logo 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1117dd188bff9290f7cda131b9c85d4a962ff8e0711f32e7ddcac684e1488846?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      alt: "Partner company logo 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/76a3ea50454372993a8a32dbd3624f288ab65673cc66c4c65ff411e1de92eb18?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      alt: "Partner company logo 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecb21251296c67ef77568fb62ecfccbe635bc70ccccb97c8fc4dff86ca028b44?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      alt: "Partner company logo 6",
    },
  ];

  return (
    <section className={styles.logoSection}>
      <div className={styles.container}>
        <p className={styles.heading}>Join 4,000+ companies already growing</p>
        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={styles.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
