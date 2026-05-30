import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Import Komponen & Halaman
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Result from "./pages/Result";
import Login from "./pages/Login";

// Kita buat komponen pembungkus (AppContent) agar bisa menggunakan useLocation
const AppContent = () => {
  const location = useLocation();

  // DAFTAR HALAMAN TANPA FOOTER:
  // Masukkan path halaman yang TIDAK ingin menampilkan footer ke dalam array ini
  const hideFooterRoutes = ["/login", "/result", "/about"];

  // Cek apakah path saat ini ada di dalam array di atas
  const showFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />

      {/* Area konten utama */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<Login />} />
          {/* Tambahkan route lain di sini */}
        </Routes>
      </main>

      {/* Tampilkan Footer HANYA jika showFooter bernilai true */}
      {showFooter && <Footer />}
    </>
  );
};

// Komponen Utama App
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
