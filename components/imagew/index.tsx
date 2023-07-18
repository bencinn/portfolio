"use client"

import { motion } from "framer-motion";

import { clsMerge } from "@/lib/clsxMerge";

import { ImgHTMLAttributes } from "react";

export interface ComponentProps {
  url: string;
}

const Gallery: React.FC<React.PropsWithChildren<ImgHTMLAttributes<HTMLImageElement> & ComponentProps>> = ({
  src,
  url,
  className,
  ...props
}) => {
    return (
  <motion.div className={clsMerge("h-auto w-1/2 lg:w-1/3 grid grid-col-5 grid-row-1 bg-white opacity-80 backdrop-blur-xl rounded-lg p-0", className)}>
    <motion.img src={src} className="rounded-lg w-auto col-span-4" />
    <motion.a className="w-auto" href={url} target="_blank">Visit URL</motion.a>
  </motion.div>
)
};
export default Gallery;
