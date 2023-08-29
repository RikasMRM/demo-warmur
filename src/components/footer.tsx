"use client";
import {
  logo,
  socialMedia,
  footerLinks,
  copyrightSign,
} from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const Footer = () => {
  return (
    <footer className="max-container bg-black w-full">
      <div className="flex justify-between items-start gap-20 mt-10 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </Link>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link: any) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((icon) => (
            <div
              className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              key={icon.alt}
            >
              <Image src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>

        <div className="lg:max-w-[30%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button
              label="Submit"
              fullWidth
              iconURL={undefined}
              backgroundColor={undefined}
              textColor={undefined}
              borderColor={undefined}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
