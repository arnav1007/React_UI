import React from 'react';
import styles from '../styles/BlogCard.module.css';

export const BlogCard = ({ image, category, title, description, author, date }) => {
  return (
    <article className={styles.blogCard}>
      <img loading="lazy" src={image} alt="" className={styles.blogImage} />
      <div className={styles.blogContent}>
        <div className={styles.blogHeader}>
          <span className={styles.blogCategory}>{category}</span>
          <div className={styles.blogTitleWrapper}>
            <h3 className={styles.blogTitle}>{title}</h3>
            <div className={styles.iconWrapper}>
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d69f07ce58248e9832734d04d647a7484264b318a6af5a3b919ef1588adcfdff?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148" 
                alt="" 
                className={styles.linkIcon} 
                aria-hidden="true"
              />
            </div>
          </div>
          <p className={styles.blogDescription}>{description}</p>
        </div>
        <div className={styles.authorGroup}>
          <div className={styles.avatarWrapper}>
            <img 
              loading="lazy" 
              src={author.avatar} 
              alt={`${author.name}'s avatar`} 
              className={styles.authorAvatar} 
            />
            <div className={styles.avatarBorder} aria-hidden="true" />
          </div>
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>{author.name}</span>
            <time className={styles.postDate}>{date}</time>
          </div>
        </div>
      </div>
    </article>
  );
};