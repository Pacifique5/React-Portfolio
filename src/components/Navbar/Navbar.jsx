import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiFolder, FiMail, FiSun, FiMoon, FiMessageCircle } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "experience", "projects", "testimonials", "contact"];
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
    { name: "Testimonials", href: "#testimonials", icon: <FiMessageCircle /> },
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
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button onClick={toggleTheme} className={styles.themeToggle}>
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </motion.li>
        </ul>

        <div className={styles.mobileActions}>
          <motion.button
            onClick={toggleTheme}
            className={styles.themeToggleMobile}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </motion.button>
          <motion.button
            className={styles.mobileMenuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
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
