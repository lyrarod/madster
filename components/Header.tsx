"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          opacity: { duration: 1 },
          ease: "easeInOut",
        },
      }}
    >
      <Link href={"/"}>
        <Image
          src={"/assets/logo_madster.png"}
          alt="madster Logo"
          width={194}
          height={42}
        />
      </Link>
    </motion.header>
  );
}
