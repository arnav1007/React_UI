import React from "react";
import { FeatureCard } from "./FeatureCard";
import styles from "../styles/FeaturesSection.module.css";

export const FeaturesSection = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6df78b34723a6ee6d8d16e2da45af6d81fe1b2162a1cea476d310069f5a80ada?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b745861c7df85060684a1b1ec8e8a493ebf7c24372fd78c2a287c198082e5374?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/328d016e4952d45e705e5df35aecffc1e6ca023595bd8ace4ed6c0c97743b8a2?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },

    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6df78b34723a6ee6d8d16e2da45af6d81fe1b2162a1cea476d310069f5a80ada?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b745861c7df85060684a1b1ec8e8a493ebf7c24372fd78c2a287c198082e5374?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/328d016e4952d45e705e5df35aecffc1e6ca023595bd8ace4ed6c0c97743b8a2?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148",
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Features</span>
          <h2 className={styles.title}>
            Analytics that feels like it's from the future
          </h2>
          <p className={styles.description}>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
