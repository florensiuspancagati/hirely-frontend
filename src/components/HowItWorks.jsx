import React from "react";
import "../styles/HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      icon: "fa-solid fa-file-arrow-up",
      title: "1. Input Data",
      desc: "Unggah CV kamu (PDF) dan masukkan deskripsi pekerjaan (Jobdesc) dari lowongan incaranmu.",
    },
    {
      icon: "fa-solid fa-brain",
      title: "2. Pemrosesan AI",
      desc: "Sistem NLP kami akan mengekstrak informasi penting, pengalaman, dan kata kunci dari CV-mu.",
    },
    {
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "3. Deteksi Skill Gap",
      desc: "AI mencocokkan profilmu dengan kriteria perusahaan untuk menemukan keahlian yang masih kurang.",
    },
    {
      icon: "fa-solid fa-bullseye",
      title: "4. Hasil & Rekomendasi",
      desc: "Dapatkan skor kecocokan (Match Score) dan rekomendasi perbaikan CV yang bisa langsung diterapkan.",
    },
  ];

  return (
    <section className="hiw-section fade-in" id="how-it-works">
      <div className="hiw-container">
        <div className="hiw-header">
          <h2>
            Bagaimana <span>Cerovix</span> Bekerja?
          </h2>
          <p>
            Hanya 4 langkah cerdas untuk mengoptimalkan peluang karirmu melewati
            sistem ATS.
          </p>
        </div>

        <div className="hiw-grid">
          {steps.map((step, index) => (
            <div className="hiw-card" key={index}>
              <div className="hiw-icon-box">
                <i className={step.icon}></i>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
