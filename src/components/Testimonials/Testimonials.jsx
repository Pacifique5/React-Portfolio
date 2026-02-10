import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiStar } from "react-icons/fi";
import styles from "./Testimonials.module.css";
import testimonials from "../../data/testimonials.json";

export const Testimonials = () => {
  const scrollRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

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

      <div className={styles.scrollContainer} ref={scrollRef}>
        <div className={styles.scrollContent}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quote}>"</div>
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className={styles.star} />
                ))}
              </div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                <div className={styles.authorInfo}>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.backgroundDecor} />
      <div className={styles.backgroundDecor} />
    </section>
  );
};
