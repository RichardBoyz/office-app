import { motion } from "framer-motion";

import React from "react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const animate = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 1,
    },
  };

  const slide = {
    initial: {
      y: "100vh",
    },
    enter: {
      y: "100vh",
      opacity: 1,
    },
    exit: {
      y: 0,
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        opacity: {
          duration: 0.5,
          delay: 1,
        },
      },
    },
  };

  const perspective = {
    initial: {
      y: 0,
      scale: 1,
    },
    enter: {
      y: 0,
      scale: 1,
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="inner flex-auto overflow-hidden">
      <motion.div {...animate(slide)} className="slide"></motion.div>
      <motion.div {...animate(perspective)} className="h-full">
        <motion.div {...animate(opacity)} className="h-full">
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageTransition;
