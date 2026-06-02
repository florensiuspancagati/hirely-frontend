/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HowItWorks from "../components/HowItWorks";
import ManualForm from "../components/ManualForm";
import "../styles/Home.css";

// !!!IMPORT SERVICES: KONEKSI KE SERVER BACKEND
import analyseCvFromBackend from "../services/analyses-services";

const Home = () => {
  const [jobDesc, setJobDesc] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. STATE BARU: Untuk mengecek apakah form manual sudah diisi
  const [isManualFilled, setIsManualFilled] = useState(false);

  // !!!STATE UNTUK MENERIMA DATA DARI POP UP FORM, LALU AKAN DI KIRIM KE BACKEND
  const [manualData, setManualData] = useState({
    fullname: "",
    position: "",
    education: "",
    experience: "",
    skill: "",
  })

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (
        file.type === "application/pdf" ||
        file.name.toLowerCase().endsWith(".pdf")
      ) {
        setCvFile(file);
      } else {
        alert(
          "Mohon maaf, sistem kami saat ini hanya menerima file dalam format PDF.",
        );
        e.target.value = null;
        setCvFile(null);
      }
    }
  };

  const handleCheck = async (e) => {
    e.preventDefault();

    // 2. VALIDASI BARU SESUAI ALUR
    if (!jobDesc) {
      alert("Tolong masukkan deskripsi pekerjaan (Jobdesc) terlebih dahulu.");
      return;
    }
    if (!isManualFilled) {
      alert(
        "Tolong isi 'Deskripsi CV Secara Singkat' terlebih dahulu melalui tombol yang disediakan.",
      );
      return;
    }
    if (!cvFile) {
      alert("Tolong upload file CV PDF Anda sebagai pelengkap.");
      return;
    }

    // !!!TRY CATCH UNTUK PROSES FETCH KE BACKEND
    try {
      setIsAnalyzing(true);
      
      const analysesResult = await analyseCvFromBackend({
        jobDescription: jobDesc,
        fullname: manualData.fullname,
        position: manualData.position,
        education: manualData.education,
        experience: manualData.experience,
        skill: manualData.skill,
        cv: cvFile,
      });
      // console.log(analysesResult);

      // !!!SIMPAN KE LOCALSTORAGE SUPAYA GA HILANG PAS REFRESH
      localStorage.setItem("analysesResult", JSON.stringify(analysesResult.data.analyses));

      // !!!KITA KIRIM DATA HASIL ANALISIS KE RESULT.JSX
      navigate("/result", {
        state: analysesResult.data.analyses,
      });
      // console.log("Data siap dikirim:", { jobDesc, cvFile, manualData });

    } catch (error) {
      console.error(error);
      alert(error.message)

    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <div className="home-container fade-in">
        {isAnalyzing ? (
          <div className="loading-screen">
            <div className="loader-circle"></div>
            <h2 className="loading-text">AI sedang menganalisis CV-mu...</h2>
            <p>Mencocokkan kata kunci dan mendeteksi skill gap.</p>
          </div>
        ) : (
          <div className="hero-section">
            <div className="hero-text">
              <h1>
                Ketahui Seberapa Relevan CV-mu dengan{" "}
                <span>Pekerjaan Impian.</span>
              </h1>
              <p>
                Dukung karirmu dengan analisis AI. Temukan <i>skill gap</i>-mu
                dan dapatkan rekomendasi belajar yang tepat agar lolos screening
                ATS.
              </p>
            </div>

            <div className="hero-form">
              <form onSubmit={handleCheck}>
                <div className="form-group">
                  <label htmlFor="jobdesc">Deskripsi Pekerjaan (Jobdesc)</label>
                  <textarea
                    id="jobdesc"
                    placeholder="Paste deskripsi pekerjaan dari LinkedIn, Glints, dll di sini..."
                    value={jobDesc}
                    onChange={(e) => setJobDesc(e.target.value)}
                    rows="4"
                  ></textarea>

                  {/* 3. TOMBOL MANUAL BARU DI BAWAH JOBDESC */}
                  <button
                    type="button"
                    className={`btn-manual-trigger ${isManualFilled ? "filled" : ""}`}
                    onClick={() => setIsModalOpen(true)}
                  >
                    <i
                      className={`fa-solid ${isManualFilled ? "fa-check-circle" : "fa-pen-to-square"}`}
                    ></i>
                    {isManualFilled
                      ? " Deskripsi CV Sudah Tersimpan"
                      : " Deskripsi CV Secara Singkat"}
                  </button>
                </div>

                <div className="form-group">
                  <label>Upload CV (Hanya PDF)</label>
                  <div className="upload-area">
                    <input
                      type="file"
                      id="cv-upload"
                      accept=".pdf,application/pdf"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="cv-upload" className="upload-label">
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                      <br />
                      {cvFile ? (
                        <span className="file-name">{cvFile.name}</span>
                      ) : (
                        <span>
                          Klik atau Drag & Drop CV Anda di sini
                          <br />
                          <small>Hanya PDF (Maksimal 2MB)</small>
                        </span>
                      )}
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn-check">
                  Mulai Analisis <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {!isAnalyzing && <HowItWorks />}

      {/* 4. PASSING FUNGSI onSave KE MODAL */}
      <ManualForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(data) => {
          console.log("manual data: ", data);
          setManualData(data);
          setIsManualFilled(true);
        }}
      />
    </>
  );
};

export default Home;
