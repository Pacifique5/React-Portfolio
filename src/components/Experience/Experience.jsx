import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiBriefcase } from "react-icons/fi";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className={styles.container} id="experience" ref={ref}>
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
          Skills & Experience
        </motion.span>
        <h2 className={styles.title}>My Expertise</h2>
        <p className={styles.subtitle}>
          Technologies I work with and companies I've contributed to
        </p>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.skillsSection}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.sectionTitle}>
            <div className={styles.sectionIcon}>
              <FiCode />
            </div>
            <span>Tech Stack</span>
          </div>

          <motion.div
            className={styles.skills}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skills.map((skill, id) => (
              <motion.div
                key={id}
                className={styles.skill}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.historySection}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.sectionTitle}>
            <div className={styles.sectionIcon}>
              <FiBriefcase />
            </div>
            <span>Work History</span>
          </div>

          <motion.ul
            className={styles.history}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {history.map((historyItem, id) => (
              <motion.li
                key={id}
                className={styles.historyItem}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <div className={styles.backgroundDecor} />
      <div className={styles.backgroundDecor} />
    </section>
  );
};
