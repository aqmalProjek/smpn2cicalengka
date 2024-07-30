import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Button } from "flowbite-react";

const About = () => {
  return (
    <section className="w-full flex min-h-56  md:pt-12 pt-6 items-center mb-96 lg:mb-0" id="about">
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
        <div className="absolute z-10 md:top-5 right-0 box-border p-10 bg-white md:max-w-[50%] h-full flex flex-col gap-3 justify-between">
          <div className="h-full flex flex-col gap-3 w-full">
            <span className="text-sm tracking-wide text-gray-500 dark:text-gray-400">
              SEKILAS MENGENAI SMPN 2 CICALENGKA
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              KEPALA SEKOLAH
            </h2>
            <p className="font-normal md:text-base text-sm text-gray-700 dark:text-gray-400">
            Assalamu’alaikum Wr. Wb
            Puji syukur bagi Allah Atas Anugrah yang diberikan kepada kita sehingga masih ada kesempatan bagi kita untuk berbuat yang terbaik. Hanya karena kesempatan dan izin Allah kita dapat melakukan perjuangan untuk mempersiapkan generasi bangsa yang berkualitas melalui dunia pendidikan. Kami keluarga besar SMP Negeri 1 Bandung mengucapkan selamat datang di web ini dan selamat bergabung dengan SMP Negeri 1 Bandung ini.
            </p>
          </div>
          <Button
            color="warning"
            className="lg:max-w-[40%] max-w-[60%] rounded-none text-sm md:text-base"
          >
            Selengkapnya &gt;
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default About;
