import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiBriefcase, FiLayers, FiDatabase, FiTool } from "react-icons/fi";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Organize skills by category
  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: <FiLayers />,
      skills: skills.filter(s => 
        ["React", "NextJs", "HTML", "CSS", "Bootstrap", "JavaScript"].includes(s.title)
      )
    },
    backend: {
      title: "Backend & Databases",
      icon: <FiDatabase />,
      skills: skills.filter(s => 
        ["Node", "Python", "Java", "PHP", "MongoDB", "GraphQL"].includes(s.title)
      )
    },
    mobile: {
      title: "Mobile & Tools",
      icon: <FiTool />,
      skills: skills.filter(s => 
        ["Flutter", "React Native", "Figma", "C++"].includes(s.title)
      )
    }
  };

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

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
          Technologies I work with and my professional journey
        </p>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.skillsSection}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.sectionTitle}>
            <div className={styles.sectionIcon}>
              <FiCode />
            </div>
            <span>Tech Stack</span>
          </div>

          <div className={styles.skills}>
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.div
                key={key}
                className={styles.skillCategory}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <div className={styles.categoryTitle}>
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <span>{category.title}</span>
                </div>
                <div className={styles.skillGrid}>
                  {category.skills.map((skill, id) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.historySection}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.sectionTitle}>
            <div className={styles.sectionIcon}>
              <FiBriefcase />
            </div>
            <span>Professional Journey</span>
          </div>

          <div className={styles.timeline}>
            {history.map((item, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                variants={timelineVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <img
                      src={getImageUrl(item.imageSrc)}
                      alt={item.organisation}
                      className={styles.timelineLogo}
                    />
                    <div className={styles.timelineInfo}>
                      <h3 className={styles.timelineRole}>{item.role}</h3>
                      <p className={styles.timelineOrg}>{item.organisation}</p>
                    </div>
                  </div>
                  <span className={styles.timelineDate}>
                    {item.startDate} - {item.endDate}
                  </span>
                  <ul className={styles.timelineExperiences}>
                    {item.experiences.map((exp, id) => (
                      <li key={id}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className={styles.backgroundDecor} />
      <div className={styles.backgroundDecor} />
    </section>
  );
};
