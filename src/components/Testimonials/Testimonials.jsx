import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import styles from "./Testimonials.module.css";
import testimonials from "../../data/testimonials.json";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={styles.container} id="testimonials" ref={ref}>
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
          Testimonials
        </motion.span>
        <h2 className={styles.title}>What People Say</h2>
        <p className={styles.subtitle}>
          Don't just take my word for it - hear from clients and colleagues
        </p>
      </motion.div>

      <div className={styles.testimonialWrapper}>
        <motion.button
          className={styles.navButton}
          onClick={prevTestimonial}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiChevronLeft />
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.testimonialCard}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.quote}>"</div>
            <div className={styles.stars}>
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FiStar key={i} className={styles.star} />
              ))}
            </div>
            <p className={styles.text}>{currentTestimonial.text}</p>
            <div className={styles.author}>
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className={styles.avatar}
              />
              <div className={styles.authorInfo}>
                <h4 className={styles.name}>{currentTestimonial.name}</h4>
                <p className={styles.role}>{currentTestimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          className={styles.navButton}
          onClick={nextTestimonial}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiChevronRight />
        </motion.button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className={styles.backgroundDecor} />
      <div className={styles.backgroundDecor} />
    </section>
  );
};
