"use client";
import Image from "next/image";

const excellences = [
  {
    image: "capacity-icon.svg",
    title: "Kapasitas Produksi Besar",
    description:
      "Dengan pengalaman yang mumpuni, Bekali produksi merk skin care dan kosmetik anda dengan tim yang mampu menangani semua kebutuhan anda",
  },
  {
    image: "license-icon.svg",
    title: "Perizinan Mudah dan Cepat",
    description:
      "Dengan pengalaman yang mumpuni, Bekali produksi merk skin care dan kosmetik anda dengan tim yang mampu menangani semua kebutuhan anda",
  },
  {
    image: "minimum-icon.svg",
    title: "Minimum MOQ Rendah",
    description:
      "Dengan pengalaman yang mumpuni, Bekali produksi merk skin care dan kosmetik anda dengan tim yang mampu menangani semua kebutuhan anda",
  },
  {
    image: "support-icon.svg",
    title: "Support Research and Development Produk",
    description:
      "Dengan pengalaman yang mumpuni, bekali produksi merk skin care dan kosmetik anda dengan tim yang mampu menangani semua kebutuhan anda",
  },
  {
    image: "assurance-icon.svg",
    title: "Jaminan Kualitas Pasti",
    description:
      "Dengan pengalaman yang mumpuni, Bekali produksi merk skin care dan kosmetik anda dengan tim yang mampu menangani semua kebutuhan anda",
  },
];

export default function Excellence() {
  return (
    <section className="w-full bg-[#FFEED3]">
      <div className="container mx-auto h-full max-w-6xl px-4 py-8 md:py-16">
        <div className="mb-8 flex justify-center">
          <h2 className="text-center text-2xl font-semibold text-[#000000] lg:text-4xl">
            Mengapa Memilih Kami?
          </h2>
        </div>
        <div className="-mx-4 flex h-full flex-wrap rounded-br-2xl border-r border-b border-[#E1AB81]">
          {excellences.map((item, index) => {
            return (
              <div
                className={`mb-4 px-4 md:mb-8 ${
                  excellences.length - 1 !== index
                    ? "w-full md:w-6/12"
                    : "w-full"
                }`}
                key={index}
              >
                <div className="flex">
                  <div className="mr-4">
                    <Image
                      priority
                      src={`/images/home/excellence/${item.image}`}
                      height="480"
                      width="480"
                      alt=""
                      className="h-8 min-h-[32px] w-8 min-w-[32px] md:h-10 md:min-h-[40px] md:w-10 md:min-w-[40px]"
                    />
                  </div>
                  <div>
                    <h2 className="mb-2 text-lg font-semibold text-[#000000] lg:text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-sm font-normal text-[#000000] lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
