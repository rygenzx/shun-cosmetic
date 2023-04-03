"use client";
import Header from "@/components/layouts/header";
import Brand from "@/components/sections/home/brand";
import Certification from "@/components/sections/home/ceritification";
import Excellence from "@/components/sections/home/excellence";
import Hero from "@/components/sections/home/hero";
import Process from "@/components/sections/home/process";
import Product from "@/components/sections/home/product";
import Start from "@/components/sections/home/start";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-[56px] md:pt-[64px]">
        <Hero />
        <Excellence />
        <Brand />
        <Process />
        <Product />
        <Certification />
        <Start />
      </main>
    </>
  );
}
