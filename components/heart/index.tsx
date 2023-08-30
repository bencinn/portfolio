"use client";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

import { FC } from "react";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  duration?: number;
}

export const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  ...props
}: Props) => {
  const letters = Array.from(text);

  const container: Variants = {
    default: {},
    hover: (i: number = 1) => ({
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    default: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hover: {
      opacity: 1,
      y: -10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", overflow: "hidden", paddingTop: 10 }}
      variants={container}
      initial="default"
      whileHover="hover"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Heart: React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>
> = ({ className, ...props }) => {
  return (
    <div className="mb-5 grid text-center lg:mb-0 text-black">
      <>Made with</>
      <motion.span
        whileHover={{ scale: 1.2, rotate: 180, color: "red" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {"<3"}
      </motion.span>
      <WavyText text="By hansnnn" />
    </div>
  );
};
export default Heart;
