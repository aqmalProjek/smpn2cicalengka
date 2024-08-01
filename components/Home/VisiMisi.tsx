import React from "react";
import Container from "../Container";
import InfoPokok from "./InfoPokok";

const VisiMisi = () => {
  return (
    <section className="mt-10" id="visi">
      <Container className="bg-violet-200 box-border pb-10">
        <div className="w-[100%] relative flex">
          <div className="w-[20%] h-3 bg-white"></div>
          <div className="w-[60%] h-3 bg-violet-700"></div>
          <div className="w-[20%] h-3 bg-amber-400"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-1 p-5">
          <div>
            <h3 className="text-sm tracking-wide font-bold">VISI</h3>
            <p className="md:text-base text-sm pl-5 mt-5">
            Sebagai Sekolah yang mengemban amanat pembangunan sumber daya manusia melalui ikhtiar bersama untuk meningkatkan mutu pendidikan, ilmu pengetahuan, dan teknologi, maka visi SMP Negeri 2 Cicalengka adalah: :
            </p>
            <q className="md:text-base text-sm pl-5 mt-5">Berbudaya, disiplin, berprestasi yang berwawasan teknologi.</q>
            <h3 className="text-sm tracking-wide font-bold">SEJARAH</h3>
            <p className="md:text-base text-sm pl-5 mt-5">
              SMP Negeri 2 Cicalengka didirikan pada tanggal 29 Desember 2010
              berdasarkan Surat Keputusan (SK) Pendirian Sekolah Nomor
              421.2/Kep.469-Disdikbud/2010. SK Izin Operasional sekolah juga
              dikeluarkan pada tanggal yang sama.
            </p>

            <h3 className="text-sm tracking-wide font-bold">Data Pokok</h3>
            <InfoPokok />
          </div>
          <div>
            <h3 className="text-sm tracking-wide font-bold mt-5 md:mt-0">
              MISI
            </h3>
            <ol className="md:text-base text-sm pl-5 mt-5 list-decimal">
              <li>
                Membentuk Insan yang Beriman dan Bertaqwa Kepada Tuhan Yang Maha
                Esa Membentuk Insan yang Berjiwa Demokratis, kerja sama dan
                Peduli Lingkungan
              </li>
              <li>
                Membentuk Insan yang Senantiasa Menghormati Orang Tua, Guru, dan
                Sesama
              </li>
              <li>
                Membentuk Insan yang Kreatif Dan lnovatif Dengan Ilmu
                Pengetahuan, dan Teknologi
              </li>
              <li>
                Membentuk Insan yang Berkarakter Disiplin, Jujur, Kerja Keras,
                dan Tanggung Jawab
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisiMisi;
