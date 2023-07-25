import { Variants } from "framer-motion";

export const fadeIn = (
  direction: string = "up",
  delay: number = 0
): Variants => {
  return {
    initial: {
      y: direction === "up" ? 60 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.75,
        opacity: { duration: 1 },
        ease: "easeInOut",
      },
    },
  };
};
