import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from "react-icons/fi";
import styles from "./Footer.module.css";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.brand}>
            <div className={styles.logoIcon}>💼</div>
            <h3 className={styles.brandName}>Pacifique Mugisha</h3>
          </div>
          <p className={styles.tagline}>
            Full-Stack Developer & AI Enthusiast from Rwanda 🇷🇼 | Building innovative solutions with modern technologies
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/mfique"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mugisha-pacifique-142b0931b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:pacifiquem58@gmail.com"
              className={styles.socialLink}
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Get In Touch</h4>
          <ul className={styles.contactList}>
            <li>
              <span>Email:</span>
              <a href="mailto:pacifiquem58@gmail.com">pacifiquem58@gmail.com</a>
            </li>
            <li>
              <span>Location:</span>
              <p>Kigali, Rwanda 🇷🇼</p>
            </li>
            <li>
              <span>Phone:</span>
              <p>+250 795 653 123</p>
            </li>
            <li>
              <span>Available for:</span>
              <p>Remote Internships & Freelance</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2026 Pacifique Mugisha. Made with <FiHeart className={styles.heart} /> in Rwanda 🇷🇼
        </p>
        <motion.button
          className={styles.scrollTop}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp />
        </motion.button>
      </div>
    </footer>
  );
};
