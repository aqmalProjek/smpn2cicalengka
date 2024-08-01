import Container from "@/components/Container";
import { Button, FloatingLabel } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMPN 2 CICALENGKA Sejarah",
  description: "SMPN 2 CICALENGKA, Sejarah SMPN 2 CICALENGKA",
  creator: "Muchamad Aqmal Hidayat",
  authors: [
    {
      name: "Muchamad Aqmal Hidayat",
      url: "https://www.linkedin.com/in/muchamad-aqmal-7840332b5/",
    },
  ],
  icons: "/logo.png"
};

const page = () => {
  return (
    <section className="pt-10">
      <Container className="">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wider">
          SMPN 2 CICALENGKA Sejarah & Infromasi lengkap
        </h1>
        <div className="w-full bg-white relative z-0 mt-10">
          <Image
            src={"/bg_smp.jpg"}
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
            SMPN 2 Cicalengka adalah sebuah sekolah SMP negeri yang yang
            lokasinya berada di Kp. Sumelap, Kab. Bandung.
          </h2>
          <p className="mb-5 font-normal text-justify text-gray-700 dark:text-gray-400">
            SMPN 2 Cicalengka mendapat status akreditasi{" "}
            <b> grade A dengan nilai 88 (akreditasi tahun 2013)</b> dari BAN-S/M
            (Badan Akreditasi Nasional) Sekolah/Madrasah.
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15839.809285029736!2d107.8476059!3d-7.0148902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c61a65dd49d5%3A0x3c762c2261f43304!2sSmp%20negeri%202%20Cicalengka!5e0!3m2!1sid!2sid!4v1722474488677!5m2!1sid!2sid"
            height={500}
            
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
};

export default page;
