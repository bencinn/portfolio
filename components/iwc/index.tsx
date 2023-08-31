"use client";

import { motion } from "framer-motion";

import { clsMerge } from "@/lib/clsxMerge";

import { HTMLAttributes } from "react";

import Gallery from "@/components/imagew";

export interface ComponentProps {
  title: String;
  description: String;
  imagesrc: string;
  url: string;
}

const Gridl: React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLImageElement> & ComponentProps>
> = ({ title, url, description, imagesrc, className, ...props }) => {
  return (
    <motion.div
      className={clsMerge(
        "h-auto w-auto flex justify-between items-center m-10 gap-10 flex-col-reverse lg:flex-row lg:mx-60",
        className,
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center lg:items-start justify-between lg:h-36 h-20">
        <span className="md:text-2xl lg:text-3xl md:font-semibold lg:font-bold text-slate-700">
          {title}
        </span>
        <span className="text-lg text-slate-700">{description}</span>
      </div>
      <Gallery src={imagesrc} className="flex-none" url={url} />
    </motion.div>
  );
};

export default Gridl;
