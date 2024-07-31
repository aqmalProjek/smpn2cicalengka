import React from 'react'
import Container from '../Container'
import { Card } from 'flowbite-react'
import { CgWebsite } from 'react-icons/cg'
import { FaHandshakeAngle, FaStreetView, FaUniversalAccess, FaUsers } from 'react-icons/fa6'
import { RiSpeakFill } from 'react-icons/ri'
import { TbBrandMinecraft } from 'react-icons/tb'
import { FaLuggageCart } from 'react-icons/fa'

const Digitalisasi = () => {
  return (
    <section className="flex w-full justify-center md:pt-20" id="kurikulum">
        <Container className="">
          <div className="flex justify-between gap-5 flex-col lg:flex-row w-full text-center">
            <div className="flex flex-col w-full items-center justify-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">Wakil Kepala Bidang Sekolah</h2>
              <p className="font-normal md:text-base text-sm text-gray-700 w-full md:max-w-[450px] mt-2.5">
              Kenali staff dan penanggung jawab kami
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 items-center justify-center mt-10">
            <Card href="#" className="max-w-sm h-full">
              <FaStreetView className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              KURIKULUM
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Program Kurikulum Sekolah Menengah Pertama Cicalengka 2 Kabupaten Bandung
              </p>
            </Card>
            <Card href="#" className="max-w-sm h-full">
              <FaUniversalAccess className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Kesiswaan
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Program Kesiswaan Sekolah Menengah Pertama Negeri 2 Cicalengka Kabupaten Bandung
              </p>
            </Card>
            <Card href="#" className="max-w-sm h-full">
            <FaUsers  className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Humas
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Program Humas Sekolah Menengah Pertama Negeri 2 Cicalengka Kabupaten Bandung
              </p>
            </Card>
            <Card href="#" className="max-w-sm h-full">
              <FaLuggageCart className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sapras
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Program Sapras Sekolah Menengah Pertama Negeri 2 Cicalengka Kabupaten Bandung.
              </p>
            </Card>
          </div>
        </Container>
      </section>
  )
}

export default Digitalisasi