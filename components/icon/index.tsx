"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.css";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#E0C3FC",
  },
};

export default function MainIcon() {
  return (
    <a className={styles.container} href="/">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="26px"
        whileHover={{ scale: 1.2 }}
        className={styles.item}
      >
        <motion.path
          d="M0 0H50L25 25 50 50H0Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </a>
  );
}
