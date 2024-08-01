import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Button } from "flowbite-react";
import Link from "next/link";

const Jumbotron = () => {
  return (
    <section
      className=" w-full min-h-[70vh] bg-black max-h-[800px] relative"
      id="home"
    >
      <Image
        src="/bg_smp.jpg"
        alt="Gambaran event"
        fill
        objectFit="cover"
        priority={true}
        className="relative"
      />
      <div className="bg-white w-full h-full absolute z-10 top-0 flex gradient items-center ">
        <Container className="pl-5 md:pl-0 flex flex-col gap-2">
          <div className="flex flex-col text-white gap-2 max-w-[70%]">
            <small className="text-xs md:text-sm tracking-wide text-white ">
              SELAMAT DATANG DI WEBSITE
            </small>
            <h1 className="text-3xl md:text-5xl font-bold tracking-wider">
              SMPN 2 CICALENGKA
            </h1>
            <p className="md:text-base text-sm">
              Sekolah Menengah Pertama Negri 2 CICALENGKA adalah salah satu
              satuan pendidikan dengan jenjang SMP di Margaasih, Kec.
              Cicalengka, Kab. Bandung, Jawa Barat. Dalam menjalankan
              kegiatannya, SMPN 2 CICALENGKA berada di bawah naungan Kementerian
              Pendidikan dan Kebudayaan.
            </p>
          </div>
          <div className="flex max-w-[70%] gap-3">
            <Button color="blue" as={Link} href="/sejarah">Tentang Kami</Button>
            <Button color="blue">LMS</Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Jumbotron;
