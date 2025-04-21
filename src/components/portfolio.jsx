import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const projects = [
  {
    title: "Website Pemrograman Web",
    image: ["images/pemweb.jpg"],
    description: "Website toko bunga dengan fitur CRUD.",
    fullDescription:
      "Website toko bunga berbasis PHP OOP dan MySQL. Memiliki fitur lengkap seperti registrasi, login, transaksi pembelian bunga, dan dashboard admin dengan CRUD produk. Dibuat menggunakan HTML, CSS, Bootstrap, dan PHP murni dengan konsep OOP dan koneksi database menggunakan MySQLi.",
  },
  {
    title: "Project IOT",
    image: ["images/iot1.jpg", "images/iot2.jpg", "images/iot3.jpg"],
    description: "Sistem alarm rumah otomatis & River Cleaner IOT.",
    fullDescription:
      "Project terdiri dari 2 alat IOT: (1) Sistem alarm rumah berbasis sensor gerak dan notifikasi melalui smartphone, serta (2) River Cleaner yang dapat mendeteksi sampah di sungai dan secara otomatis mengangkatnya menggunakan lengan mekanik. Proyek dikerjakan dengan ESP32, sensor ultrasonic, servo, dan koneksi Blynk.",
  },
  {
    title: "Aplikasi Delphi",
    image: ["images/delphi.jpg"],
    description: "Aplikasi GUI manajemen data sekolah.",
    fullDescription:
      "Aplikasi desktop berbasis Delphi yang digunakan untuk memanajemen data sekolah. Fitur mencakup input dan pengelolaan data siswa, guru, mata pelajaran, dan jadwal. Data disimpan dalam database lokal, dan antarmuka dibuat dengan komponen GUI seperti form input, tabel, serta menu navigasi."
  },  
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project === selectedProject ? null : project); // toggle
  };

  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
        <div className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]">
          <div className="order-2 lg:order-1 mt-5">
            <h4 className="text-secondary font-secondary text-[24px]">
              Recent Work
            </h4>
            <div className="text-gradient font-primary maxw-[700px] mx-auto text-[24px]">
              Berikut beberapa proyek yang pernah saya kerjakan.
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white p-5 rounded-lg shadow-lg group h-full cursor-pointer"
                onClick={() => handleClick(project)} // ✅ argument event
              >
                {project.image.length > 1 ? (
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000 }}
                    className="mb-4"
                  >
                    {project.image.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={`${project.title} - ${i}`}
                          className="w-full h-[200px] object-cover rounded-md"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <img
                    src={project.image[0]}
                    alt={project.title}
                    className="w-full h-[200px] object-cover rounded-md mb-4"
                  />
                )}

                <h4 className="text-gradient text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedProject && (
  <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-inner">
    <h3 className="text-2xl font-bold mb-4 text-center text-primary">Detail Project</h3>

    <div className="text-center mb-6">
      <h4 className="text-xl font-semibold text-gradient mb-2">{selectedProject.title}</h4>
      <p className="text-gray-700 max-w-[700px] mx-auto">{selectedProject.fullDescription}</p>
    </div>

    <div className="text-center mt-4">
      <button
        className="px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition"
        onClick={() => setSelectedProject(null)}
      >
        Kembali ke daftar project
      </button>
    </div>
  </div>
)}

      </div>
    </div>
  );
}
