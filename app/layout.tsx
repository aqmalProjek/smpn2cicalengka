import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavabarComponent from "@/components/Navbar";
import FooterCustom from "@/components/Home/FooterCustom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMPN 2 CICALENGKA",
  description: "SMPN 2 Cicalengka atau sekolah menengah pertama 2 Cicalengka, adalah salah satu smp yang ada di cicalengka yang terletak di desa margaasih. atau alamat lengkap nya adalah SMPN 2 CICALENGKA Kp. Sumelap, Margaasih, Kec. Cicalengka, Kab. Bandung Prov. Jawa Barat",
  creator: "Muchamad Aqmal Hidayat",
  authors: [{name: "Muchamad Aqmal Hidayat", url: "https://www.linkedin.com/in/muchamad-aqmal-7840332b5/"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
      <meta name="google-site-verification" content="axNmUpn2RwwQizgq4MVCSJIX94FB3gDYpMIVUplhumM" />
      </head>
      <body className={inter.className}>
        <NavabarComponent />
        <main className="pt-12">{children}</main>
        <FooterCustom />
      </body>
    </html>
  );
}
