import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const FooterCustom = () => {
  return (
    <Footer container className="mt-10">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <span className="self-center whitespace-nowrap text-2xl font-semibold ">
              SMPN2 CICALENGKA
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="Profile" />
              <FooterLinkGroup col>
                <FooterLink href="#">About SMPN 2 CICALENGKA</FooterLink>
                <FooterLink href="#">About Kepala Sekolah</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Social Media" />
              <FooterLinkGroup col>
                <FooterLink href="#">Facebook</FooterLink>
                <FooterLink href="#">Youtube</FooterLink>
                <FooterLink href="#">Linkedin</FooterLink>
                <FooterLink href="#">Instagram</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Usefull Link" />
              <FooterLinkGroup col>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Staff</FooterLink>
                <FooterLink href="#">Visi & Misi</FooterLink>
                <FooterLink href="#">Berita</FooterLink>
                <FooterLink href="#">Eskul</FooterLink>
                <FooterLink href="#">Alumni</FooterLink>
                <FooterLink href="#">Struktur</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="AqmalCode" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCustom;
