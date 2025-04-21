import React from "react";

import { TypeAnimation } from "react-type-animation";
export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center"
    >
      <div className="w-full">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello,
          <div>
            <TypeAnimation
              sequence={[
                "I am Siti Raudatul",
                3000,
                "Here’s my personal portfolio website",
                3000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="ml-3 text-secondary"
            />
          </div>
        </div>
        <div className="max-w-[750px] text-center mx-auto mt-5">
          Ini adalah website portofolio pribadi aku. Aku Siti Raudatul,
          mahasiswa jurusan Informatika yang suka bikin website dan belajar
          hal-hal baru di dunia teknologi. Yuk intip hasil karya aku di sini!
        </div>
      </div>
    </div>
  );
}
