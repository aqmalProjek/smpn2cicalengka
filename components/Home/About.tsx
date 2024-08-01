import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Button } from "flowbite-react";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full flex min-h-56  md:pt-12 pt-6 items-center md:mb-96 lg:mb-0" id="about">
      <Container className="bg-white relative">
        <div className="md:w-[75%] lg:w-[800px] w-full bg-white relative z-0 ">
          <Image
            src={"/bg_smp.jpg"}
            alt="Shoes"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover"
            style={{ width: "100%" }}
          />
        </div>
        <div className="md:absolute z-10 md:top-5 right-0 box-border p-10 bg-white md:max-w-[50%] h-full flex flex-col gap-3 justify-between">
          <div className="h-full flex flex-col gap-3 w-full">
            <span className="text-sm tracking-wide text-gray-500 dark:text-gray-400">
              SEKILAS MENGENAI SMPN 2 CICALENGKA
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              KEPALA SEKOLAH
            </h2>
            <p className="font-normal md:text-base text-sm text-gray-700 dark:text-gray-400">
            Sampurasun. Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa atas karunia dan hidayah-Nya, sehingga kita semua dapat membaktikan segala hal yang kita miliki untuk kemajuan dunia pendidikan. Apapun bentuk dan sumbangsih yang kita berikan, jika dilandasi niat yang tulus tanpa memandang imbalan, akan menghasilkan mahakarya agung sebagai bekal kita dan generasi setelah kita. Pendidikan adalah harga mati untuk menjadi pondasi bangsa dan negara dalam menghadapi perkembangan zaman, seiring dengan penguasaan teknologi untuk dimanfaatkan sebaik mungkin sehingga menciptakan iklim kondusif dalam ranah keilmuan. Dengan konsep yang kontekstual dan efektif, kami mengejawantahkan nilai-nilai pendidikan yang tertuang dalam visi misi SMP Negeri 2 Cicalengka sebagai panduan hukum dalam menjabarkan tujuan hakiki pendidikan. Kami menyambut baik terbitnya Website smpn2cicalengka.com ini dan berharap dapat memberikan peningkatan layanan pendidikan kepada siswa, orangtua, dan masyarakat pada umumnya.
            </p>
          </div>
          <Button
            color="warning"
            className="lg:max-w-[40%] max-w-[60%] rounded-none text-sm md:text-base"
            as={Link} href="/kepsek"
          >
            Selengkapnya &gt;
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default About;
