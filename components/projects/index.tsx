"use client";

import { motion } from "framer-motion";
import { Fragment, ImgHTMLAttributes } from "react";
export interface ComponentProps {}

const Projects: React.FC<
  React.PropsWithChildren<ImgHTMLAttributes<HTMLImageElement> & ComponentProps>
> = ({ src, className, ...props }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 items-center">
      {[
        ["Github", "Hansnnn (@Bencinn)", "https://github.com/bencinn"],
        ["E-Mail", "iloveheapsort@gmail.com", "mailto:iloveheapsort@gmail.com"],
      ].map((object, _) => (
        <Fragment key={object[0]}>
          <div>{object[0]}</div>
          <motion.a
            className="p-3 bg-slate-300 bg-opacity-30 rounded-full flex items-center gap-6 h-15 col-span-3"
            href={object[2]}
            target="__blank"
            whileHover={{ scale: 1.05 }}
          >
            {object[1]}
          </motion.a>
        </Fragment>
      ))}
    </div>
  );
};
export default Projects;
