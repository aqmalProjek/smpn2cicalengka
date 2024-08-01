import React from "react";
import Container from "../Container";
import { Button, Card } from "flowbite-react";
import Image from "next/image";

const Aktifity = () => {
  return (
    <section className="mt-10" id="berita">
      <Container className="box-border ">
        <div className="grid md:grid-cols-2 gap-1 p-5">
          <div className="h-full ">
            <h3 className="text-2xl tracking-wide font-bold">
             Berita Terkini SMP 2 CICALENGKA
            </h3>
            <Card
              className="w-full shadow-none rounded-none p-5 h-full"
              renderImage={() => (
                <div className="w-full  relative">
                  <Image
                    src={"/paskibra.jpg"}
                    alt="Shoes"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Andika Putra Juara 3 Tingkat Kabupaten Bandung
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem quos voluptates eos illum officiis vitae laborum sunt corporis. Tempore?
              </p>
              <Button
                color="warning"
                className="lg:max-w-[40%] max-w-[60%] rounded-none text-sm md:text-base"
              >
                Baca Selengkapnya &gt;
              </Button>
            </Card>
          </div>
          <div className="mt-5 md:mt-0">
            <h3 className="text-2xl tracking-wide font-bold mt-16 md:mt-0">
              Berita Lainya
            </h3>
            <div className="grid gap-3">
              <Card
                href="#"
                className="w-full shadow-none rounded-none border-none"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 Juara 2 Basket
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
              <Card
                href="#"
                className="w-full shadow-none rounded-none border-none"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 Juara 1 futsal
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
              <Card
                href="#"
                className="w-full shadow-none rounded-none border-none"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Juara 2 Kejuraun
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
              <Card
                href="#"
                className="w-full shadow-none rounded-none border-none"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Juara 1 Bahasa Jepang
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Aktifity;
