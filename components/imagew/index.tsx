"use client";

import { motion } from "framer-motion";

import { clsMerge } from "@/lib/clsxMerge";

import { ImgHTMLAttributes } from "react";

export interface ComponentProps {
  url: string;
}

const Gallery: React.FC<
  React.PropsWithChildren<ImgHTMLAttributes<HTMLImageElement> & ComponentProps>
> = ({ src, url, className, ...props }) => {
  return (
    <motion.div
      className={clsMerge(
        "group w-auto lg:w-1/3 bg-white opacity-80 backdrop-blur-xl rounded-lg place-content-center flex flex-col",
        className,
      )}
    >
      <motion.img src={src} className="rounded-lg" />
      {
        // <motion.img src={src} className="rounded-lg w-full h-full fixed group-hover:relative object-cover" />
        // <motion.a className="" href={url} target="_blank">Visit URL</motion.a>
      }
    </motion.div>
  );
};
export default Gallery;
