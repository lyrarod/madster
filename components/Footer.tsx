"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      viewport={{ amount: 0.15, once: true }}
    >
      <div className="container flex flex-col items-center p-6 sm:p-0">
        <div className="flex flex-col flex-wrap items-center justify-center mt-4 sm:mt-12 text-footer-head-100">
          <Image
            src={"/assets/logo_madster.png"}
            alt="Logo Footer Image"
            width={194}
            height={42}
          />
        </div>

        <div className="flex justify-center sm:justify-between flex-wrap mt-10 sm:mt-14 text-footer-head-100 gap-y-8 w-min sm:w-full">
          <div className="text-center sm:text-left">
            <strong className="text-footer-head flex mb-2 sm:mb-10">
              Links Principais
            </strong>
            <ul className="flex flex-col gap-y-2 md:gap-y-5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Ferramenta</Link>
              </li>
              <li>
                <Link href={"/"}>Preços</Link>
              </li>

              <li>
                <Link href={"/"}>Contato</Link>
              </li>
            </ul>
          </div>

          <div className="sm:text-left flex flex-col items-center sm:items-start">
            <strong className="text-footer-head flex mb-2 sm:mb-10">
              Cases
            </strong>
            <ul className="flex w-max flex-col gap-y-2 md:gap-y-5 text-center sm:text-left">
              <li>
                <Link href={"/"}>Geração de Leads B2B</Link>
              </li>
              <li>
                <Link href={"/"}>Geração de Leads em Software</Link>
              </li>
              <li>
                <Link href={"/"}>Geração de Leads em Imobiliária</Link>
              </li>
              <li>
                <Link href={"/"}>Cases de Sucesso</Link>
              </li>
            </ul>
          </div>

          <div className="sm:text-left flex flex-col items-center sm:items-start">
            <strong className="text-footer-head flex mb-2 sm:mb-10">
              Materiais
            </strong>
            <ul className="flex flex-col gap-y-2 md:gap-y-5 text-center sm:text-left">
              <li>
                <Link href={"/"}>Blog</Link>
              </li>
              <li>
                <Link href={"/"}>Parcerias com Agências</Link>
              </li>
              <li>
                <Link href={"/"}>Guia Definitivo do Marketing</Link>
              </li>
              <li>
                <Link href={"/"}>Materiais Gratuitos</Link>
              </li>
            </ul>
          </div>

          <div className="sm:text-left flex flex-col items-center sm:items-start">
            <strong className="text-footer-head flex mb-3 sm:mb-6">
              Siga a Madster
            </strong>

            <div className="flex gap-x-4">
              <a href="https://linkedin.com" target="_blank">
                <div className="w-[46px] h-[46px] bg-slate-100 rounded-full grid place-items-center hover:shadow hover:bg-slate-200 transition">
                  <FaLinkedinIn size={"1rem"} />
                </div>
              </a>

              <a href="https://facebook.com" target="_blank">
                <div className="w-[46px] h-[46px] bg-slate-100 rounded-full grid place-items-center hover:shadow hover:bg-slate-200 transition">
                  <FaFacebookF size={"1rem"} />
                </div>
              </a>

              <a href="https://instagram.com" target="_blank">
                <div className="w-[46px] h-[46px] bg-slate-100 rounded-full grid place-items-center hover:shadow hover:bg-slate-200 transition">
                  <FaInstagram size={"1rem"} />
                </div>
              </a>
            </div>

            <div className="mt-4 sm:mt-6 text-[15px] flex flex-col items-center sm:items-start w-max">
              <p>
                <span className="text-black">E-mail:</span>&nbsp;
                <span>contato@madster.com.br</span>
              </p>
              <p className="flex mt-1 sm:mt-3">
                <span className="text-black">Telefone:</span>&nbsp;
                <span>(42) 98828-2222</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t mt-4 sm:mt-20 text-footer-head-100">
        <div className="container flex items-center justify-center sm:justify-between sm:py-10 text-sm flex-wrap p-8 sm:p-0 gap-y-4 text-center">
          <p className="font-medium">
            Copyright &copy; 2015 - 2022 Todos os direitos reservados |{" "}
            <Link href={`/`}>
              <span className="text-footer-blue font-semibold">Madster</span>
            </Link>
          </p>
          <p className="text-slate-400">
            Rua Madster, 22 - Centro - Curitiba PR - CEP: 22010-220 | Termos de
            uso
          </p>
        </div>
      </div>
    </motion.section>
  );
}
