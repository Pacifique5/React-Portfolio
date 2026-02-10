import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiFolder, FiMail } from "react-icons/fi";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: <FiHome /> },
    { name: "About", href: "#about", icon: <FiUser /> },
    { name: "Experience", href: "#experience", icon: <FiBriefcase /> },
    { name: "Projects", href: "#projects", icon: <FiFolder /> },
    { name: "Contact", href: "#contact", icon: <FiMail /> },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <a href="#home" className={styles.logo} onClick={() => handleNavClick("#home")}>
          <div className={styles.logoIcon}>💼</div>
          <span className={styles.logoText}>Portfolio</span>
        </a>

        <ul className={styles.menuItems}>
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                className={activeSection === item.name.toLowerCase() ? styles.active : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className={styles.mobileMenuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={`${styles.overlay} ${menuOpen ? styles.visible : ""}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <ul className={styles.mobileMenuItems}>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className={activeSection === item.name.toLowerCase() ? styles.active : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
