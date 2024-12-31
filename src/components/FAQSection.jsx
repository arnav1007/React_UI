import React from "react";
import styles from "../styles/FAQSection.module.css";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      isOpen: true,
    },
    {
      question: "Can I change my plan later?",
      answer: "",
    },
    {
      question: "What is your cancellation policy?",
      answer: "",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "",
    },
    {
      question: "How does billing work?",
      answer: "",
    },
    {
      question: "How do I change my account email?",
      answer: "",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently asked questions</h2>
          <p className={styles.description}>
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button className={styles.question}>
                <span>{faq.question}</span>
                <img
                  src={
                    faq.isOpen
                      ? "https://cdn.builder.io/api/v1/image/assets/TEMP/f158c643bf35557644efd85aed2140e2395af90750b9cd2c37d4be2235cdd053?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
                      : "https://cdn.builder.io/api/v1/image/assets/TEMP/034d558ecc8566c111eb1646350dd49f20b73630b56f70d2d0f76e8ea3137818?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
                  }
                  alt=""
                  className={styles.icon}
                />
              </button>
              {faq.isOpen && <div className={styles.answer}>{faq.answer}</div>}
            </div>
          ))}
        </div>
        <div className={styles.support}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/07679c943868407b0e74c3f97ec0714f4799af9cc9cf38167f6accc0f93cdadc?placeholderIfAbsent=true&apiKey=5901bf0e0bc44a20b7d2ad6ee874a148"
            alt="Support"
            className={styles.supportIcon}
          />
          <h3 className={styles.supportTitle}>Still have questions?</h3>
          <p className={styles.supportText}>
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <button className={styles.supportButton}>Get in touch</button>
        </div>
      </div>
    </section>
  );
};
