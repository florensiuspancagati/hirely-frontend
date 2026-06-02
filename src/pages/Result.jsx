import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Result.css";

const Result = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = localStorage.getItem('accessToken') !== null;

  // TAMBAHAN UNTUK BACKEND
  const location = useLocation();
  const analysesResult = location.state || JSON.parse(localStorage.getItem("analysesResult") || "null");

  // Cek apakah user sudah login saat halaman dimuat
  // useEffect(() => {
  //   const loggedIn = localStorage.getItem("isLoggedIn");
  //   if (loggedIn === "true") {
  //     setIsUserLoggedIn(true);
  //   }
  // }, []);

  // const mockResult = {
  //   score: 80,
  //   totalIssues: 5,
  //   minorIssues: ["Format tidak standar ATS", "Penggunaan bahasa campuran"],
  //   saranPerbaikan: [
  //     "Ganti deskripsi 'Pernah buat web' menjadi 'Mengembangkan web responsif menggunakan React yang meningkatkan efisiensi 20%'.",
  //     "Gunakan format Bullet Points untuk setiap pencapaian.", // Data Premium 1
  //   ],
  //   rekomendasiSkill: [
  //     "Pelajari State Management (Redux/Zustand) karena sering dicari di loker ini.",
  //     "Sertifikasi React Advanced sangat disarankan untuk menutup gap skill.", // Data Premium 2
  //   ],
  // };

  // INI GUARD UNTUK ANALISIS
  if (!analysesResult) {
    return (
      <div className="result-container">
        <h2>Data hasil analisis tidak ditemukan</h2>
        <button onClick={() => {
          localStorage.removeItem("analysesResult");
          navigate("/")
        }}>
          Kembali ke Home
        </button>
      </div>
    );
  }

  return (
    <div className="result-container fade-in">
      <div className="result-header">
        <h2>Hasil Analisis CV</h2>
        <button className="btn-outline" onClick={() => {
          localStorage.removeItem("analysesResult");
          navigate("/")
        }}>
          <i className="fa-solid fa-rotate-right"></i> Unggah CV Baru
        </button>
      </div>

      <div className="result-grid">
        <div className="score-section">
          <div className="score-card">
            <h3>Match Score</h3>
            <div className="score-circle">
              {/* result di ambil dari const analysesResult */}
              <span className="score-number">{analysesResult.score}</span>
              <span className="score-max">/100</span>
            </div>
            <p className="issue-count">
              {analysesResult.missingSkills.length} Issue Ditemukan
            </p>
          </div>

          <div className="issue-card">
            <h3>Ringkasan Issue</h3>
            <div className="issue-tags">
              {analysesResult.missingSkills.map((item, index) => (
                <span key={index} className="tag">
                  <i className="fa-solid fa-triangle-exclamation"></i> {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-section">
          {/* Konten Gratis (Selalu Tampil) */}
          <div className="teaser-content">
            <div className="insight-box">
              <h4>Saran Perbaikan </h4>
              <p className="preview-text">{analysesResult.improvements.map((item, index) => (
                  <span key={index} className="tag-improvement">
                    {item}
                  </span>
                ))}
              </p>
            </div>
            <div className="insight-box">
              <h4>Rekomendasi Skill </h4>
              <p className="preview-text">{analysesResult.recommendedSkills.map((item, index) => (
                  <span key={index} className="tag-improvement">
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* =================================LOGIKA PERCABANGAN: Jika belum login, tampilkan blur. Jika sudah, tampilkan detail.======================== */}
          {!isUserLoggedIn ? (
            <div className="locked-area">
              <div className="fading-content">
                <div className="insight-box mock">
                  <h4>
                    <i className="fa-solid fa-wand-magic-sparkles"></i>{" "}
                    Perbaikan Struktur (Terkunci)
                  </h4>
                  <p className="preview-text">
                    Gunakan format Bullet Points untuk setiap pencapaian.
                    Hindari paragraf panjang yang sulit dibaca ATS...
                  </p>
                </div>
              </div>
              <div className="locked-overlay">
                <div className="lock-icon-wrapper">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <h3>Ingin melihat lebih lengkap?</h3>
                <p>
                  Temukan sisa saran perbaikan dan rekomendasi skill lainnya
                  dengan masuk ke akunmu.
                </p>
                <Link to="/login" className="btn-primary">
                  Masuk / Daftar Sekarang
                </Link>
              </div>
            </div>
          ) : (
            /* =================================TAMPILAN JIKA SUDAH LOGIN (Gembok Hilang)================================= */
            <div
              className="unlocked-area fade-in"
              style={{ marginTop: "20px" }}
            >
              <div className="insight-box" style={{ borderColor: "#10b981" }}>
                {" "}
                {/* Warna hijau sukses */}
                <h4>
                  <i
                    className="fa-solid fa-wand-magic-sparkles"
                    style={{ color: "#10b981" }}
                  ></i>{" "}
                  Perbaikan Struktur (Premium)
                </h4>
                <p className="preview-text">{analysesResult.improvements.map((item, index) => (
                    <span key={index} className="tag-improvement">
                      {item}
                    </span>
                  ))}
                </p>
              </div>
              <div className="insight-box" style={{ borderColor: "#10b981" }}>
                <h4>
                  <i
                    className="fa-solid fa-code"
                    style={{ color: "#10b981" }}
                  ></i>{" "}
                  Rekomendasi Kursus (Premium)
                </h4>
                <p className="preview-text">{analysesResult.recommendedSkills.map((item, index) => (
                    <span key={index} className="tag-improvement">
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
