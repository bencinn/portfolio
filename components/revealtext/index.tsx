"use client"
import { motion } from "framer-motion";
import { clsMerge } from "@/lib/clsxMerge";
import { HTMLAttributes } from "react";
export interface ComponentProps {
  text: String;
}

const Revealtext: React.FC<React.PropsWithChildren<HTMLAttributes<HTMLElement> & ComponentProps>> = ({
  text,
  className,
  ...props
}) => {
  const sentences = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.03
      }
    }
  }
  const letter = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
    }
  }
    return (
      <motion.div className={clsMerge("", className)} variants={sentences} initial="hidden" animate="visible">
    {text.split("").map((char, index) => {
      return (
        <motion.span variants={letter} key={char + "-" + index}>{char}</motion.span>
      )
    })}
  </motion.div>
)
};
export default Revealtext;
