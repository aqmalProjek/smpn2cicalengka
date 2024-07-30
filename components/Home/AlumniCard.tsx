"use client";

import { Card } from "flowbite-react";

export default function AlumniCard() {
  return (
    <Card
      href="#"
      className="flex w-full h-full justify-center items-center border-none shadow-none text-center"
    >
      <div className="w-full text-center flex items-center justify-center">
        <div className="w-[80%] ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            Tesmianti Rara
          </h5>
          <p className="font-normal text-gray-700  text-center ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium qui incidunt, dolor, ea cumque similique enim minima
            iure fugit id quae possimus necessitatibus sapiente. Deleniti nulla
            quisquam quos ut minus?
          </p>
        </div>
      </div>
    </Card>
  );
}
