import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiPhone,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual EmailJS or backend API)
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

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
      <ToastContainer theme="dark" />
      
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
          Get In Touch
        </motion.span>
        <h2 className={styles.title}>Let's Work Together</h2>
        <p className={styles.subtitle}>
          Have a project in mind? Let's create something amazing together!
        </p>
      </motion.div>

      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className={styles.infoSection} variants={itemVariants}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FiMapPin />
            </div>
            <div className={styles.infoText}>
              <h3>Location</h3>
              <p>Kigali, Rwanda</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FiMail />
            </div>
            <div className={styles.infoText}>
              <h3>Email</h3>
              <p>pacifiquem58@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FiPhone />
            </div>
            <div className={styles.infoText}>
              <h3>Phone</h3>
              <p>+250 795 653 123</p>
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
            <a
              href="mailto:pacifiquem58@gmail.com"
              className={styles.socialLink}
            >
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.form
          className={styles.form}
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <FiUser className={styles.inputIcon} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <FiMail className={styles.inputIcon} />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <FiMessageSquare className={styles.inputIcon} />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <FiMessageSquare className={styles.inputIcon} />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className={styles.textarea}
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner} />
                Sending...
              </>
            ) : (
              <>
                <FiSend />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
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
