import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02,
      });
    }

    return () => {
      if (cardRef.current?.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(project.imageSrc)}
          alt={project.title}
          className={styles.image}
        />
        <div className={styles.imageOverlay} />
        <div className={styles.quickLinks}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickLink}
          >
            <FiExternalLink />
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickLink}
          >
            <FiGithub />
          </a>
        </div>
        <span className={styles.badge}>Featured</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {project.title}
          <FiArrowUpRight className={styles.titleIcon} />
        </h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.skills}>
          {project.skills.map((skill, id) => (
            <span key={id} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.primary}`}
          >
            <FiExternalLink />
            <span>Live Demo</span>
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FiGithub />
            <span>Source</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
