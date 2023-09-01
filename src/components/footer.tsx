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
    <footer className="flex flex-col text-white w-full bg-primary-blue">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 items-center">
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
          <div className="flex items-end gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-8 h-8 bg-white rounded-full"
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>

          <form className=" font-secondary flex flex-col w-full max-w-lg gap-3 justify-end items-start">
            <p className=" text-orange-500">Newsletter sign-up</p>
            <div className="relative flex justify-center items-center">
              <input
                className="relative bg-primary-blue px-10 py-3  border border-gray-300 rounded-3xl w-[400px] FF6452
            focus:outline-none focus:ring-1 focus:ring-red-500"
                required
                placeholder="Enter your postcode"
              />
              <button
                type="submit"
                className={`absolute right-2 py-1 px-4 bg-orange-500 hover:bg-red-700 text-white text-sm sm:text-base font-semibold rounded-3xl border border-transparent 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
