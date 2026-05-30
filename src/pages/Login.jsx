import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // SIMULASI LOGIN NYATA: Menyimpan status login di memori browser
    localStorage.setItem("isLoggedIn", "true");

    if (isLogin) {
      alert("Login Berhasil! Mengalihkan ke Beranda...");
      navigate("/"); // Ubah redirect ke Beranda (atau bisa ke /history nanti)
    } else {
      alert("Registrasi Berhasil! Anda langsung login.");
      navigate("/");
    }

    // Refresh halaman sedikit agar Navbar mendeteksi perubahan status
    window.location.reload();
  };

  return (
    <div className="auth-container fade-in">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLogin ? "Selamat Datang Kembali" : "Buat Akun Baru"}</h2>
          <p>
            {isLogin
              ? "Masuk untuk melihat detail analisis CV kamu."
              : "Daftar untuk membuka semua fitur AI CV Analyzer."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label>Nama Lengkap</label>
              <div className="input-with-icon">
                <i className="fa-regular fa-user"></i>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                />
              </div>
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <div className="input-with-icon">
              <i className="fa-regular fa-envelope"></i>
              <input
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-with-icon">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-auth">
            {isLogin ? "Masuk ke Dashboard" : "Daftar Sekarang"}
          </button>
        </form>

        <div className="auth-toggle">
          <p>
            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
            <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
              {isLogin ? "Daftar di sini" : "Masuk di sini"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
