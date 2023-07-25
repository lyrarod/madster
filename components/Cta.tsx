"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Cta() {
  return (
    <section className="bg-hero-bg w-full md:h-[736px] md:mt-10 flex items-center px-1 sm:px-0 py-4 sm:py-0 md:p-0">
      <div className="container flex md:items-center md:justify-stretch flex-wrap md:flex-nowrap">
        <motion.div
          className="w-full md:min-w-[739px] h-auto md:-ml-[100px]"
          initial={{ opacity: 0, x: "-60px" }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ amount: 0.3, once: true }}
        >
          <Image
            src={"/assets/comparativo_img_CTA_madster.png"}
            alt="CTA Image"
            width={739}
            height={687}
          />
        </motion.div>

        <motion.div
          className="md:pl-16 text-text-color flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: "60px" }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ amount: 0.3, once: true }}
        >
          <h2 className="text-2xl md:text-[42px] leading-tight font-medium">
            Pronto para triplicar sua
            <br />
            <span className="font-bold text-3xl md:text-[42px]">
              Geração de Leads?
            </span>
          </h2>

          <p className="text-lg md:text-2xl font-medium mt-3 md:mt-2">
            Criação e ativação em{" "}
            <span className="font-extrabold">4 minutos.</span>
          </p>

          <hr className="w-full md:w-[630px] h-[2px] bg-gray-300 my-6" />

          <div className="flex flex-wrap justify-center gap-6 md:gap-4">
            <button className="bg-bg-cta hover:bg-sky-600 transition text-white py-6 md:py-0 px-8 text-lg uppercase tracking-wider font-bold rounded-full">
              Ver Demonstração
            </button>
            <Image src={"/assets/selo_RD.png"} alt="" width={205} height={73} />
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap items-center justify-center text-text-color text-base font-semibold min-w-min">
              <div className="flex items-center justify-center">
                <Image
                  src={"/assets/no-card-dark.webp"}
                  alt="no-credit-card-icon"
                  width={16}
                  height={16}
                />
                <span className="font-black ml-2">Não</span>&nbsp;é necessário
                Cartão de Crédito
              </div>

              <span className="mx-2 hidden sm:block">|</span>

              <div className="flex items-center justify-center gap-x-2">
                <Image
                  src={"/assets/rating.webp"}
                  alt="rating-image"
                  width={92}
                  height={16}
                />
                <span className="">4.9/5 média de satisfação</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
