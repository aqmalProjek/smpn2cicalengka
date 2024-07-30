"use client";

import Jumbotron from "@/components/Jumbotron";
import About from "@/components/Home/About";
import Container from "@/components/Container";
import Digitalisasi from "@/components/Home/Digitalisasi";
import VisiMisi from "@/components/Home/VisiMisi";
import EskulCard from "@/components/Home/EskulCard";
import Aktifity from "@/components/Home/Aktifity";
import { Carousel } from "flowbite-react";
import AlumniCard from "@/components/Home/AlumniCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <About />
      <Digitalisasi />
      <VisiMisi />
      <Aktifity />
      <section
        className="flex flex-col w-full justify-center pt-20"
        id="social"
      >
        <div className="flex justify-between gap-5 flex-col lg:flex-row w-full text-center">
          <div className="flex flex-col w-full items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
              Ekstrakurikuler
            </h2>
          </div>
        </div>
        <Container className="">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 mt-10">
            <EskulCard gambar="/eskul/badminton.jpg" judulEskul="Batminton" deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae." /> 
            <EskulCard gambar="/eskul/paskibra.jpg" judulEskul="Paskibra" deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae." />
            <EskulCard gambar="/eskul/jc.jpg" judulEskul="Japanese Club" deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae." />
            <EskulCard gambar="/eskul/catur.jpg" judulEskul="Catur" deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae." />
            <EskulCard gambar="/eskul/basket.jpg" judulEskul="Basket" deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae." />
            <EskulCard gambar="/eskul/futsal.jpg" judulEskul="Futsal" deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae." />
          </div>
        </Container>
      </section>
      <section>
        <Container className="flex flex-col w-full pt-20">
        <div className="flex justify-between gap-5 flex-col lg:flex-row w-full text-center">
            <div className="flex flex-col w-full items-center justify-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">Alumni</h2>
              <p className="font-normal md:text-base text-sm text-gray-700 w-full md:max-w-[450px] mt-2.5">
              Apa kata alumni mengenai sekolah kami
              </p>
            </div>
          </div>
          <Carousel leftControl={<div className="h-12 w-12 flex items-center justify-center bg-gray-400 rounded-full">
              <FaArrowLeft />
          </div>} rightControl={<div className="h-12 w-12 flex items-center justify-center bg-gray-400 rounded-full">
              <FaArrowRight />
          </div>}>
            <AlumniCard />
            <AlumniCard />
            <AlumniCard />
            <AlumniCard />
          </Carousel>
        </Container>
      </section>
    </>
  );
}
