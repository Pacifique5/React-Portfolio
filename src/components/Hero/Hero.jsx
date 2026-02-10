import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section className={styles.container}>
      <div ref={cursorRef} className={styles.customCursor} />
      
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className={styles.greeting}>
          <span className={styles.wave}>👋</span> Hello, I'm
        </motion.div>

        <motion.h1 variants={itemVariants} className={styles.title}>
          <span className={styles.gradientText}>Pacifique Mugisha</span>
        </motion.h1>

        <motion.div variants={itemVariants} className={styles.subtitle}>
          <span className={styles.typewriter}>Full-Stack Developer | AI Enthusiast</span>
          <span className={styles.cursor}>|</span>
        </motion.div>

        <motion.p variants={itemVariants} className={styles.description}>
          Passionate Full-Stack Web Developer and AI Developer from Rwanda 🇷🇼. 
          Building innovative web applications with Next.js, React, Node.js, Java, and Python. 
          Experienced in AI health systems, open-source projects, and creating impactful tech solutions.
        </motion.p>

        <motion.div variants={itemVariants} className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>25+</span>
            <span className={styles.statLabel}>Certificates</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>8+</span>
            <span className={styles.statLabel}>Major Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.buttons}>
          <a href="#contact" className={styles.primaryBtn}>
            <FiMail />
            <span>Get In Touch</span>
          </a>
          <a
            href="/MUGISHA PACIFIQUE.pdf"
            download="MUGISHA_PACIFIQUE_CV.pdf"
            className={styles.secondaryBtn}
          >
            <FiDownload />
            <span>Download CV</span>
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.socialLinks}>
          <a
            href="https://github.com/mfique"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            title="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mugisha-pacifique-142b0931b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            title="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:pacifiquem58@gmail.com"
            className={styles.socialIcon}
            title="Email"
          >
            <FiMail />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.5,
        }}
      >
        <div className={styles.imageWrapper}>
          <motion.div
            className={styles.glowRing}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <img
            src={getImageUrl("hero/heroImage.png")}
            alt="Pacifique Mugisha"
            className={styles.heroImg}
          />
        </div>
      </motion.div>

      <div className={styles.floatingElements}>
        <motion.div
          className={styles.floatingCircle}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={styles.floatingSquare}
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={styles.floatingTriangle}
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className={styles.backgroundGradient} />
    </section>
  );
};
