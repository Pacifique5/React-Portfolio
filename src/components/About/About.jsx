import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiServer, FiLayout } from "react-icons/fi";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className={styles.container} id="about" ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className={styles.sectionLabel}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.span>
        <h2 className={styles.title}>Who I Am</h2>
        <p className={styles.subtitle}>
          Passionate developer crafting digital experiences
        </p>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow} />
            <img
              src={getImageUrl("about/8.png")}
              alt="About me"
              className={styles.aboutImage}
            />
          </div>
        </motion.div>

        <motion.div
          className={styles.textSection}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p variants={itemVariants} className={styles.description}>
            I'm a <span className={styles.highlight}>full-stack developer</span>{" "}
            and <span className={styles.highlight}>AI enthusiast</span> from Rwanda 🇷🇼, 
            currently studying Advanced Software Engineering at Rwanda Coding Academy. 
            With expertise in modern web technologies and AI, I bring ideas to life through 
            clean code and innovative solutions. I've completed internships at ALX Africa, 
            Code Alpha, ThinkCyber, and Harvard Remote Internship.
          </motion.p>

          <ul className={styles.aboutItems}>
            <motion.li
              variants={itemVariants}
              className={styles.aboutItem}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.itemIcon}>
                <FiCode />
              </div>
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  Building responsive and optimized user interfaces with React,
                  Next.js, Tailwind CSS, and modern design systems. Experienced in
                  creating beautiful, accessible web applications.
                </p>
              </div>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className={styles.aboutItem}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.itemIcon}>
                <FiServer />
              </div>
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  Developing fast and scalable back-end systems with Node.js, Express,
                  Django, Laravel, and Java. Expert in RESTful APIs, database design
                  (PostgreSQL, MongoDB, MySQL), and cloud deployment.
                </p>
              </div>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className={styles.aboutItem}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.itemIcon}>
                <FiLayout />
              </div>
              <div className={styles.aboutItemText}>
                <h3>AI Developer</h3>
                <p>
                  Building intelligent systems with TensorFlow, OpenAI APIs, and
                  machine learning. Specialized in AI health systems, data analysis,
                  and prompt engineering for real-world applications.
                </p>
              </div>
            </motion.li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className={styles.stats}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className={styles.statCard}>
          <div className={styles.statNumber}>25+</div>
          <div className={styles.statLabel}>Certificates</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>8+</div>
          <div className={styles.statLabel}>Major Projects</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>7+</div>
          <div className={styles.statLabel}>Internships</div>
        </div>
      </motion.div>

      <div className={styles.backgroundDecor} />
      <div className={styles.backgroundDecor} />
    </section>
  );
};
