import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loader.module.css";

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.particles}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={styles.particle} />
            ))}
          </div>

          <motion.div
            className={styles.content}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.logoContainer}>
              <div className={styles.orbitRing} />
              <div className={styles.orbitRing} />
              <div className={styles.orbitRing} />
              <motion.div
                className={styles.logo}
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💼
              </motion.div>
            </div>

            <div className={styles.textContainer}>
              <motion.h2
                className={styles.text}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Pacifique Mugisha
              </motion.h2>
              <motion.p
                className={styles.subtext}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Full-Stack Developer | AI Enthusiast
              </motion.p>
            </div>

            <motion.div className={styles.progressBar}>
              <motion.div
                className={styles.progress}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.3, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
