"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import styles from "./styles.module.css";
import { WavyText } from "../heart";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "url(#pattern)",
  },
};

export default function BigIcon() {
  return (
    <div className="flex flex-col items-center gap-16">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 320"
        className={styles.item}
      >
        <motion.circle
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          xmlns="http://www.w3.org/2000/svg"
          cx="160"
          cy="160"
          r="157.5"
        />
        <defs>
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width="460"
            height="460"
          >
            <image
              href="https://avatars.githubusercontent.com/u/91706501"
              height={320}
              width={320}
            />
          </pattern>
        </defs>
      </motion.svg>
      <span className="font-bold text-6xl">
        I&apos;m <WavyText text="BenCinn" />
      </span>
      <span className="font-medium text-2xl">
        A front-end/full stack programmer
      </span>
    </div>
  );
}
