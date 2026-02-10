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
            with a passion for creating beautiful, functional, and user-centered
            digital experiences. With expertise in modern web technologies, I
            bring ideas to life through clean code and innovative solutions.
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
                  Next.js, and modern CSS frameworks
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
                  Developing fast and scalable back-end systems, RESTful APIs,
                  and database architectures
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
                <h3>UI/UX Designer</h3>
                <p>
                  Designing intuitive interfaces and creating comprehensive
                  design systems for seamless experiences
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
          <div className={styles.statNumber}>4+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>50+</div>
          <div className={styles.statLabel}>Projects Done</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>15+</div>
          <div className={styles.statLabel}>Technologies</div>
        </div>
      </motion.div>

      <div className={styles.backgroundDecor} />
      <div className={styles.backgroundDecor} />
    </section>
  );
};
