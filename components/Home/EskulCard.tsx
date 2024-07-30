
import { Card } from "flowbite-react";

export default function EskulCard({judulEskul,deskripsi,gambar}: {judulEskul:string,deskripsi:string, gambar: string}) {
  return (
    <Card className="w-full py-5" imgSrc={gambar} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {judulEskul}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {deskripsi}
      </p>
    </Card>
  );
}
