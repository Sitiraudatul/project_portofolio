import React from "react";
import SkillCard from "./SkillCard"; // pastikan path-nya sesuai dengan lokasi file

const skills = [
  {
    title: "HTML",
    image: "images/4.png",
    description:
      "Saya memahami struktur dasar website dan pengaturan elemen-elemen HTML untuk membangun sebuah halaman yang rapi dan mudah dipahami.",
  },
  {
    title: "PHP",
    image: "images/php_img.png",
    description:
      "Saya familiar dengan PHP sebagai bahasa pemrograman server-side untuk pengembangan aplikasi web dinamis.",
  },
  {
    title: "Bootstrap",
    image: "images/2.png",
    description:
      "Dengan menggunakan Bootstrap, saya mampu membuat tampilan website yang responsif dan menarik untuk berbagai ukuran layar.",
  },
  {
    title: "Python",
    image: "images/python.jpeg",
    description:
      "Saya mengasah keterampilan Python untuk mendalami bidang data science dan machine learning.",
  },
  {
    title: "JavaScript",
    image: "images/js_img.png",
    description:
      "Saya sedang mengembangkan kemampuan dalam menggunakan JavaScript untuk interaksi lebih dinamis pada halaman web.",
  },
  {
    title: "MySQL",
    image: "images/MySQL.png",
    description:
      "Saya memahami konsep dasar database dan menggunakan MySQL untuk pengelolaan data pada aplikasi web.",
  },
];

export default function Profile() {
  return (
    <div id="profile" className="section pb-24">
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        {/* Judul Section */}
        <div className="font-secondary text-center font-bold mb-12">
          <h4 className="text-secondary mb-3">About Me</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[20px]">
            Halo, saya Siti Raudatul, mahasiswa Informatika di Institut
            Teknologi Nasional Bandung. Saya memiliki ketertarikan dalam
            pengembangan web dan teknologi. Saat ini, saya sedang mengembangkan
            keterampilan di berbagai bidang, seperti HTML, CSS, Bootstrap, PHP,
            MySQL, JavaScript, dan Python. Meskipun masih dalam tahap
            pembelajaran, saya berkomitmen untuk terus mengasah kemampuan saya
            dalam dunia pengembangan perangkat lunak.
          </h2>
        </div>

        {/* Foto dan Nama */}
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
            <div className="min-w-[300px] bg-gradient rounded-full overflow-hidden">
              <img src="images/d1.jpg" alt="profile" />
            </div>
            <h2 className="text-gradient font-[50px] mt-[20px]">
              Siti Raudatul Jannah Fadilah
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-[700px] mx-auto">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                image={skill.image}
                description={skill.description} // Kirimkan deskripsi ke SkillCard
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
