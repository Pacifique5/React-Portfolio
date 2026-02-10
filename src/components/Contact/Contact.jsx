import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowRight,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <footer id="contact" className={styles.container} ref={ref}>
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className={styles.textSection} variants={itemVariants}>
          <span className={styles.sectionLabel}>Get In Touch</span>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.description}>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to{" "}
            <span className={styles.highlight}>reach out</span> and let's create
            something amazing together!
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FiMapPin />
              </div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Kigali, Rwanda</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FiMail />
              </div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>pacifiquem58@gmail.com</span>
              </div>
            </div>
          </div>

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
          </div>
        </motion.div>

        <motion.div className={styles.linksSection} variants={itemVariants}>
          <ul className={styles.links}>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=pacifiquem58@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <div className={styles.linkIcon}>
                  <FiMail />
                </div>
                <div className={styles.linkContent}>
                  <span className={styles.linkTitle}>Email Me</span>
                  <span className={styles.linkDescription}>
                    Drop me a message anytime
                  </span>
                </div>
                <FiArrowRight className={styles.linkArrow} />
              </a>
            </motion.li>

            <motion.li variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <a
                href="https://www.linkedin.com/in/mugisha-pacifique-142b0931b/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <div className={styles.linkIcon}>
                  <FiLinkedin />
                </div>
                <div className={styles.linkContent}>
                  <span className={styles.linkTitle}>LinkedIn</span>
                  <span className={styles.linkDescription}>
                    Let's connect professionally
                  </span>
                </div>
                <FiArrowRight className={styles.linkArrow} />
              </a>
            </motion.li>

            <motion.li variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <a
                href="https://github.com/mfique"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <div className={styles.linkIcon}>
                  <FiGithub />
                </div>
                <div className={styles.linkContent}>
                  <span className={styles.linkTitle}>GitHub</span>
                  <span className={styles.linkDescription}>
                    Check out my code
                  </span>
                </div>
                <FiArrowRight className={styles.linkArrow} />
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
      >
        <p className={styles.footerText}>
          Designed & Built with <span className={styles.footerHeart}>♥</span> by
          Pacifique Mugisha © 2026
        </p>
      </motion.div>

      <div className={styles.backgroundDecor} />
      <div className={styles.backgroundDecor} />
    </footer>
  );
};
