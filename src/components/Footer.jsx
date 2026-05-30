import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Kolom 1: Brand & Alamat */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-text">Cerovix</span>
          </div>
          <p className="footer-desc">
            Sistem analisis CV cerdas berbasis AI untuk mendeteksi{" "}
            <i>skill gap</i> dan mengoptimalkan peluang karirmu.
          </p>
          <div className="footer-address">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              Cerovix Tech Hub
              <br />
              Jl. Prof. Dr. Hamka No. 123, Air Tawar
              <br />
              Padang, Sumatera Barat 25131
            </p>
          </div>
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div className="footer-col links-col">
          <h4>Eksplorasi</h4>
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/how-it-works">Cara Kerja</Link>
            </li>{" "}
            {/* Link halaman baru */}
            <li>
              <Link to="/about">Tentang Kami</Link>
            </li>
            <li>
              <Link to="/team">Profil Tim</Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak & Sosial Media */}
        <div className="footer-col contact-col">
          <h4>Hubungi Kami</h4>
          <ul className="contact-info">
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:hello@cerovix.ai">hello@cerovix.ai</a>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+6281234567890">+62 812-3456-7890</a>
            </li>
          </ul>

          <div className="footer-socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bagian Bawah: Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Cerovix Team. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
