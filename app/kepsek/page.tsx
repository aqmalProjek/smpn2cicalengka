import Container from "@/components/Container";
import { Button, FloatingLabel } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMPN 2 CICALENGKA KEPSEK",
  description: "SMPN 2 CICALENGKA, Kepala sekolah SMPN 2 CICALENGKA",
  creator: "Muchamad Aqmal Hidayat",
  authors: [
    {
      name: "Muchamad Aqmal Hidayat",
      url: "https://www.linkedin.com/in/muchamad-aqmal-7840332b5/",
    },
  ],
};

const page = () => {
  return (
    <section className="pt-10">
      <Container className="">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wider">
          KEPALA SEKOLAH SMPN 2 CICALENGKA
        </h1>
        <div className="w-full bg-white relative z-0 mt-10">
          <Image
            src={"/kepsek.png"}
            alt="Shoes"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover rounded"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-full pt-10">
          <h2 className="mb-5 font-bold text-lg text-justify text-gray-700 dark:text-gray-400">
            Sampurasun
          </h2>
          <p className="mb-5 font-normal text-justify text-gray-700 dark:text-gray-400">
            Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa atas
            karunia dan hidayah-Nya, sehingga kita semua dapat membaktikan
            segala hal yang kita miliki untuk kemajuan dunia pendidikan. Apapun
            bentuk dan sumbangsih yang kita berikan, jika dilandasi niat yang
            tulus tanpa memandang imbalan apapun akan menghasilkan mahakarya
            yang agung untuk bekal kita dan generasi setelah kita.
          </p>

          <p className="mb-5 font-normal text-justify text-gray-700 dark:text-gray-400">
            Pendidikan adalah harga mati untuk menjadi pondasi bangsa dan negara
            dalam menghadapi perkembangan zaman. Hal ini seiring dengan
            penguasaan teknologi untuk dimanfaatkan sebaik mungkin, sehingga
            menciptakan iklim kondusif dalam ranah keilmuan. Dengan konsep yang
            kontekstual dan efektif, kami mengejewantahkan nilai-nilai
            pendidikan yang tertuang dalam visi misi SMP Negeri 2 Cicalengka,
            sebagai panduan hukum dalam menjabarkan tujuan hakiki pendidikan.
          </p>
          <p className="mb-5 font-normal text-justify text-gray-700 dark:text-gray-400">
            Kami Menyambut baik terbitnya Website smpn2cicalengka.com ini.
            Dengan dipublikasikannya website ini, sekolah berharap dapat
            memberikan Peningkatan layanan pendidikan kepada siswa, orangtua,
            dan masyarakat pada umumnya.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default page;
