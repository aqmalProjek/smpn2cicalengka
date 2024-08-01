import Link from "next/link";
import {
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavabarComponent() {
  return (
    <Navbar fluid className="text-xl tengah z-50 mb-20 fixed bg-slate-800">
      <NavbarBrand as={Link} href="/" className="">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
          SMPN2 CICALENGKA
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="">
        <NavbarLink className="text-base text-white" href="/" as={Link}>
          Beranda
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#about" as={Link}>
          About
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#kurikulum" as={Link}>
          Kurikulum
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#visi" as={Link}>
          Visi & Misi
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#berita" as={Link}>
          Berita
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#eskul" as={Link}>
          Eskul
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#alumni" as={Link}>
          Alumni
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
