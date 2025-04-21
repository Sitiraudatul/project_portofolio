import React from "react";
import SkillCard from "./SkillCard"; // pastikan path-nya sesuai
import htmlImg from "../assets/images/4.png";
import phpImg from "../assets/images/php_img.png";
import bootstrapImg from "../assets/images/2.png";
import pythonImg from "../assets/images/python.jpeg";
import jsImg from "../assets/images/js_img.png";
import mysqlImg from "../assets/images/MySQL.png";
import profileImg from "../assets/images/d1.jpg"; // ✅ Import gambar profil

const skills = [
  {
    title: "HTML",
    image: htmlImg,
    description:
      "Saya memahami struktur dasar website dan pengaturan elemen-elemen HTML untuk membangun sebuah halaman yang rapi dan mudah dipahami.",
  },
  {
    title: "PHP",
    image: phpImg,
    description:
      "Saya familiar dengan PHP sebagai bahasa pemrograman server-side untuk pengembangan aplikasi web dinamis.",
  },
  {
    title: "Bootstrap",
    image: bootstrapImg,
    description:
      "Dengan menggunakan Bootstrap, saya mampu membuat tampilan website yang responsif dan menarik untuk berbagai ukuran layar.",
  },
  {
    title: "Python",
    image: pythonImg,
    description:
      "Saya mengasah keterampilan Python untuk mendalami bidang data science dan machine learning.",
  },
  {
    title: "JavaScript",
    image: jsImg,
    description:
      "Saya sedang mengembangkan kemampuan dalam menggunakan JavaScript untuk interaksi lebih dinamis pada halaman web.",
  },
  {
    title: "MySQL",
    image: mysqlImg,
    description:
      "Saya memahami konsep dasar database dan menggunakan MySQL untuk pengelolaan data pada aplikasi web.",
  },
];

export default function Profile() {
  return (
    <div id="profile" className="section pb-32">
      {" "}
      {/* Tambah jarak bawah */}
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        {/* Judul Section */}
        <div className="font-secondary text-center font-bold mb-12">
          <h4 className="text-secondary mb-3">About Me</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[18px]">
            Halo, saya Siti Raudatul, saat ini saya sedang menempuh pendidikan di Institut
            Teknologi Nasional Bandung, jurusan Informatika. Saya memiliki ketertarikan dalam
            pengembangan web dan teknologi. Saat ini, saya sedang mengembangkan
            keterampilan di berbagai bidang, seperti HTML, CSS, Bootstrap, PHP,
            MySQL, JavaScript, dan Python. Meskipun masih dalam tahap
            pembelajaran, saya berkomitmen untuk terus mengasah kemampuan saya
            dalam dunia pengembangan perangkat lunak.
          </h2>
        </div>

        {/* Foto dan Skill Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Foto dan Nama */}
          <div className="text-center w-full max-w-[400px] mx-auto">
            <div className="min-w-[300px] bg-gradient rounded-full overflow-hidden">
              <img src={profileImg} alt="profile" />
            </div>
            <h2 className="text-gradient font-[50px] mt-[20px]">
              Siti Raudatul Jannah Fadilah
            </h2>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start max-w-[700px] mx-auto mb-16">
            {skills.map((skill, index) => (
              <div key={index} className="h-full">
                <SkillCard
                  title={skill.title}
                  image={skill.image}
                  description={skill.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
