import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LogoSection } from "./components/LogoSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { BlogSection } from "./components/BlogSection";
import styles from "./styles/LandingPage.module.css";

 const App = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <main>
        <HeroSection />
        <LogoSection />
        <FeaturesSection />
        <TestimonialSection />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default App