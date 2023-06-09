"use client";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Contact from "@/components/sections/contacts/contact";
import Hero from "@/components/sections/contacts/hero";
import Map from "@/components/sections/contacts/map";
import Profile from "@/components/sections/contacts/profile";
import { useEffect } from "react";

const contacts = [
  {
    title: "Kunjungi Kami",
    description:
      "Lihat langsung pabrik fasilitas produksi kami yang sudah tersertifikasi BPOM dan terjamin mutunya. SHUN menyambut hangat segala kunjungan dari anda untuk bisa berbincang langsung atau berkonsultasi dengan tim konsultan kami yang berpengalaman.",
    image: "visit-bg.png",
    background: "#FFEED3",
  },
  {
    title: "Hubungi Kami",
    description:
      "Hubungi kami langsung melalui kontak di bawah atau kunjungi kami di alamat berikut. PT Satu Hati Untuk Negeri Kawasan Pergudangan dan Industri SIRIE Blok E no 16 Desa Rangkah Kidul Sidoarjo. Telp: Whatsapp: +62 818-511-744",
    image: "contact-bg.png",
    background: "#FFEED3",
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-[56px] md:pt-[64px]">
        <Hero />
        {contacts.map((item, index) => {
          return <Contact items={item} index={index} key={index} />;
        })}
        <Profile />
        <Map />
      </main>
      <Footer />
    </>
  );
}
