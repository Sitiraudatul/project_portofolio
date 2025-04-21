import React from "react";
import { BsGithub, BsLinkedin} from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";

export default function Header() {
  return (
    <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0 ">
      <div className="flex justify-between py-5 items-center">
        {/* Kiri - Judul */}
        <div
          className="text-gradient font-secondary"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a href="/">
            <h1 className="text-[30px] leading-none font-bold">Sirajafa's</h1>
            <h4 className="font-normal leading-none">PORTOFOLIO</h4>
          </a>
        </div>

        {/* Kanan - Icons dan Toggle */}
        <div
          className="flex items-center space-x-3"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a
            href="https://github.com/Sitiraudatul"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/siti-raudatul-jannah-fadilah-627b05321/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href="mailto:sitiraudatuljannahfadilah@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineAlternateEmail size={20} />
          </a>

          <a
            href="https://www.instagram.com/sirajafa_?igsh=MTN6YjZ4cGViaXd5aA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
