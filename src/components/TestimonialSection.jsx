import React from "react";
import styles from "../styles/TestimonialSection.module.css";

export const TestimonialSection = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3cf526df6f8ca88c6c3d03dff81443b4f0e0d3b04c41d668933c788698252ea?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
          alt="Company logo"
          className={styles.companyLogo}
        />
        <blockquote className={styles.quote}>
          We've been using Untitled to kick start every new project and can't
          imagine working without it.
        </blockquote>
        <div className={styles.author}>
          <div className={styles.avatar}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/851abdd322c66b105c0607069433e93bb36af774d429c6402f52489abf11bb44?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
              alt="Candice Wu"
              className={styles.avatarImage}
            />
            <div className={styles.avatarBorder} />
          </div>
          <div className={styles.authorInfo}>
            <div className={styles.name}>Candice Wu</div>
            <div className={styles.role}>Product Manager, Sisyphus</div>
          </div>
        </div>
      </div>
    </section>
  );
};
