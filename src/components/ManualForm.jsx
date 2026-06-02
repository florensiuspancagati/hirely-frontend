/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/ManualForm.css";

const ManualForm = ({ isOpen, onClose, onSave }) => {
  // !!!STATE UNTUK KIRIM DATA KE HOME, DAN DIAKSES OLEH BACKEND
  const [formData, setFormData] = React.useState({
    fullname: "",
    position: "",
    education: "",
    experience: "",
    skill: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Jika modal tidak terbuka, jangan tampilkan apapun
  if (!isOpen) return null;

  return (
    <div className="modal-overlay fade-in" onClick={onClose}>
      {/* stopPropagation agar ketika form diklik, modal tidak tertutup */}
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="manual-form-header">
          <h3>Input Data Manual</h3>
          <p>Masukkan data Anda di sini.</p>
        </div>

        <form
          className="manual-form-body"
          onSubmit={(e) => {
            e.preventDefault();
            onSave(formData); /* BARU: Memanggil fungsi save dari Home */
            onClose(); /* BARU: Menutup modal otomatis */
          }}
        >
          <div className="form-group-row">
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="John/Jane Doe"
                required
              />
            </div>

            <div className="form-group">
              <label>Posisi Target</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Software Engineer"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Pendidikan Terakhir</label>
            <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Bachelor of Computer Science"
                required
              />
          </div>

          <div className="form-group">
            <label>Ringkasan Pengalaman</label>
            <textarea
              rows="4"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Manage a large project..."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Keahlian (Skills)</label>
            <input
                type="text"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                placeholder="MongoDB, Express.Js, React.Js, Node.Js"
                required
              />
          </div>

          <div className="manual-form-actions">
            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManualForm;
