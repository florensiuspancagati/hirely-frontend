import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

import { logoutByBackend } from "../services/authentications-services";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isLogin = localStorage.getItem('accessToken') !== null;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutByBackend();
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      if (localStorage.getItem('analysesResult')) {
        localStorage.removeItem('analysesResult');
      }
      
      alert('Berhasil logout');
      navigate('/');
      window.location.reload();
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsMobile(false)}>
          <div className="logo-icon">
            <img src={logo} alt="" />
          </div>
          <span className="logo-text">Cerovix</span>
        </Link>

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/about">Tentang</Link>
          </li>
          <li>
            <Link to="/team">Tim Kami</Link>
          </li>

          {/* LOGIKA NAVBAR: Tampil beda jika login */}
          {isLogin ? (
            <>
              {/* Fitur Riwayat disembunyikan sementara untuk rilis mendatang */}
              {/* <li><Link to="/history" style={{color: 'var(--accent-orange)'}}>Riwayat Analisis</Link></li> */}

              <li>
                <button
                  onClick={handleLogout}
                  className="login-btn"
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="login-btn">
                Masuk
              </Link>
            </li>
          )}
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
