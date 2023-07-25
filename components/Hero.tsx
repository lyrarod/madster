"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="h-[360px] md:h-[604px] bg-hero-bg flex items-center justify-center flex-col select-none">
      <motion.span
        className="border-2 rounded-bl-md rounded-t-2xl rounded-r-2xl border-blue-third px-4 py-1 uppercase text-blue-third text-sm font-bold md:font-extrabold"
        initial={"initial"}
        animate={"animate"}
        variants={fadeIn()}
      >
        webinars exclusivos
      </motion.span>

      <div className="text-center flex flex-col gap-y-4 mt-5">
        <motion.h1
          className="text-2xl md:text-5xl font-medium text-text-color text-center"
          variants={fadeIn("up", 0.1)}
          initial={"initial"}
          animate={"animate"}
        >
          Menos Conversinha,
        </motion.h1>

        <motion.div
          className="relative -mt-2 md:mt-0"
          variants={fadeIn("up", 0.2)}
          initial={"initial"}
          animate={"animate"}
        >
          <h1 className="text-4xl md:text-[90px] leading-none font-extrabold w-fit bg-gradient-to-r from-blue-primary via-blue-primary to-blue-secondary bg-clip-text text-transparent">
            Mais Conversão
          </h1>
          <img
            src="/assets/asset-header.png"
            alt=""
            className="w-[20px] md:w-fit absolute -right-2 md:-right-4 top-0 md:top-1"
          />
        </motion.div>
      </div>

      <motion.hr
        className="w-[80%] md:w-[740px] h-[2px] bg-gray-300 mt-8 mb-5 flex"
        variants={fadeIn("up", 0.3)}
        initial={"initial"}
        animate={"animate"}
      ></motion.hr>

      <motion.p
        className="px-12 md:p-0 text-center text-sm md:text-lg font-semibold text-text-color-50"
        variants={fadeIn("up", 0.4)}
        initial={"initial"}
        animate={"animate"}
      >
        Conheça as estratégias que{" "}
        <strong className="text-text-color">mudaram o jogo</strong> e como
        aplicá-las no seu negócio
      </motion.p>
    </section>
  );
}
