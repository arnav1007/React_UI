import React from "react";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Overview" },
        { label: "Features" },
        { label: "Solutions", badge: "New" },
        { label: "Tutorials" },
        { label: "Pricing" },
        { label: "Releases" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us" },
        { label: "Careers" },
        { label: "Press" },
        { label: "News" },
        { label: "Media kit" },
        { label: "Contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog" },
        { label: "Newsletter" },
        { label: "Events" },
        { label: "Help centre" },
        { label: "Tutorials" },
        { label: "Support" },
      ],
    },
    {
      title: "Use cases",
      links: [
        { label: "Startups" },
        { label: "Enterprise" },
        { label: "Government" },
        { label: "SaaS centre" },
        { label: "Marketplaces" },
        { label: "Ecommerce" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Twitter" },
        { label: "LinkedIn" },
        { label: "Facebook" },
        { label: "GitHub" },
        { label: "AngelList" },
        { label: "Dribbble" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms" },
        { label: "Privacy" },
        { label: "Cookies" },
        { label: "Licenses" },
        { label: "Settings" },
        { label: "Contact" },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {footerSections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h4 className={styles.sectionTitle}>{section.title}</h4>
              <ul className={styles.linkList}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button className={styles.link}>
                      {link.label}
                      {link.badge && (
                        <span className={styles.badge}>{link.badge}</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/105c0b187ec7920d0d201a70526cbba951e8673e937619122a234d667b366083?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
            alt="Company logo"
            className={styles.logo}
          />
          <p className={styles.copyright}>
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
