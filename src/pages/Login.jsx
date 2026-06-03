import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Login.css";

// !!!IMPORT SERVICES: TO LOGIN BY BACKEND
import { loginByBackend, registerByBackend } from '../services/authentications-services.js';

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // !!!REAL LOGIN LOGIC
      if (isLogin) {
        const loginResult = await loginByBackend({ email, password });
        
        localStorage.setItem("accessToken", loginResult.data.accessToken);
        localStorage.setItem("refreshToken", loginResult.data.refreshToken);
        
        alert("Login berhasil");
        
        navigate(redirectTo);
        window.location.reload();
        
        return;
      }

      // !!!REAL REGISTER LOGIC
      const registerResult = await registerByBackend({ fullname, username, email, password });

      alert(registerResult.message || 'Register berhasil');
      
      setFullname('');
      setUsername('');
      setEmail('');
      setPassword('');

      setIsLogin(true);
    } catch (error) {
      alert(error.message);
    }
  };

  // Display
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
          {/* bagian ini tampil saat register */}
          {!isLogin &&
            (
              <div className="form-group">
                <label>Nama Lengkap</label>
                <div className="input-with-icon">
                  <i className="fa-regular fa-user"></i>
                  <input
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required={!isLogin}
                  />
                </div>
              </div>
            )
          }

          {!isLogin &&
            (
              <div className="form-group">
                <label>Username</label>
                <div className="input-with-icon">
                  <i className="fa-regular fa-user"></i>
                  <input
                    type="text"
                    placeholder="Masukkan username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required={!isLogin}
                  />
                </div>
              </div>
            )
          }

          {/* bagian ini tampil saat login */}
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
