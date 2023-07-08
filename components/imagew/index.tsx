"use client"

import { motion } from "framer-motion";

import { clsMerge } from "@/lib/clsxMerge";

import { ImgHTMLAttributes } from "react";

export interface ComponentProps {
}

const Gallery: React.FC<React.PropsWithChildren<ImgHTMLAttributes<HTMLImageElement> & ComponentProps>> = ({
  src,
  className,
  ...props
}) => {
    return (
  <motion.div className={clsMerge("h-auto w-1/2 lg:w-1/3 flex justify-between items-center bg-white opacity-80 backdrop-blur-xl rounded-lg p-0", className)}>
    <motion.img src={src} className="rounded-lg w-auto" />
  </motion.div>
)
};
export default Gallery;
