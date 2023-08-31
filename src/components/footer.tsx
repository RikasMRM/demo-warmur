"use client";
import {
  logo,
  socialMedia,
  footerLinks,
  copyrightSign,
} from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-white w-full bg-primary-blue mt-5">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={logo}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-white">
            Warmur 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-6 text-white min-w-[170px]"
            >
              {/* <h3 className="font-bold">{item.title}</h3> */}
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link key={link.title} href={link.url} className="text-white">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-8 h-8 bg-white rounded-full"
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
          <div className="lg:max-w-[30%] w-full h-[20%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
            <div className="flex max-sm:justify-end items-center max-sm:w-full">Enter your email</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
