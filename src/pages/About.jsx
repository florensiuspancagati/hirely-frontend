import React from "react";
import "../styles/About.css";
import logoImg from "../assets/logo.png";

const About = () => {
  return (
    <div className="about-container fade-in">
      <div className="about-content">
        <div className="about-text">
          <h1>
            Tentang <span>CeroVix</span>
          </h1>
          <p className="lead">
            Mencari pekerjaan di era digital menuntut spesifikasi keahlian yang
            sangat presisi.
          </p>
          <p>
            Seringkali, kandidat potensial gagal melewati sistem pelacakan
            pelamar (ATS) hanya karena struktur CV dan penggunaan kata kunci
            yang tidak tepat, meskipun mereka memiliki keahlian yang mumpuni.
          </p>
          <p>
            Aplikasi ini dikembangkan untuk menjadi asisten karir cerdasmu.
            Menggunakan pemrosesan bahasa alami (NLP) dan teknologi AI, kami
            menganalisis kecocokan profilmu secara akurat dengan deskripsi
            pekerjaan yang beredar di platform penyedia kerja seperti LinkedIn
            dan Glints.
          </p>
          <p>
            Tujuan kami sederhana: Membantumu menemukan{" "}
            <span className="highlight">skill gap</span>, memberikan saran
            perbaikan yang konkret, dan meningkatkan peluangmu mendapatkan
            pekerjaan impian.
          </p>
        </div>

        <div className="about-visual">
          <div className="glowing-circle">
            <div className="logo-icon-large">
              <img className="about-logo-img" src={logoImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
