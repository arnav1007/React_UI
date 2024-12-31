import React from 'react';
import { BlogCard } from './BlogCard';
import styles from '../styles/BlogSection.module.css';

const blogPosts = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7491097c5472acc6c9d9910c756c56c490c3de33545340da58d22d33da6572d?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
    category: "Design",
    title: "UX review presentations",
    description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: {
      name: "Olivia Rhye",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/02c4567487b9ea1a34b2703eaf98e96d1ff74836c7df36b033e9eff1121ad0e4?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
    },
    date: "20 Jan 2024"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/39a958e6d2140564067e30b7a49dd198f07ac2ed0e3d08477cc83846e1aebc0a?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
    category: "Product",
    title: "Migrating to Linear 101",
    description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: {
      name: "Phoenix Baker",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/527476339baa31ebabf281480ab9e3ce0b8639b134c9f89a3664a59a62a68c00?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
    },
    date: "19 Jan 2024"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc98b89b3ad20d2c9307c48ab9cebf41dc4d0db5410b118040e07155d84666d5?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
    category: "Software Engineering",
    title: "Building your API stack",
    description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: {
      name: "Lana Steiner",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/35f3a9f20cc099634dd4f1b5c0c05f5577f24aa7999f6b89016aef92b89027f5?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
    },
    date: "18 Jan 2024"
  }
];

export const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <div className={styles.blogHeader}>
          <div>
            <span className={styles.blogSubheading}>Our blog</span>
            <h2 className={styles.blogHeading}>Latest blog posts</h2>
            <p className={styles.blogDescription}>
              Tool and strategies modern teams need to help their companies grow.
            </p>
          </div>
          <button className={styles.viewAllButton}>View all posts</button>
        </div>
        
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};