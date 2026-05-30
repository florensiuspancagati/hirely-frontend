import React from "react";
import "../styles/ManualForm.css";

const ManualForm = ({ isOpen, onClose, onSave }) => {
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
            onSave(); /* BARU: Memanggil fungsi save dari Home */
            onClose(); /* BARU: Menutup modal otomatis */
          }}
        >
          <div className="form-group-row">
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input type="text" placeholder="" required />
            </div>
            <div className="form-group">
              <label>Posisi Target</label>
              <input type="text" placeholder="" required />
            </div>
          </div>

          <div className="form-group">
            <label>Pendidikan Terakhir</label>
            <input type="text" placeholder="S1 Teknik Informatika" required />
          </div>

          <div className="form-group">
            <label>Ringkasan Pengalaman</label>
            <textarea
              rows="4"
              placeholder="Ceritakan proyek atau pekerjaanmu..."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Keahlian (Skills)</label>
            <input type="text" placeholder="React, Node.js, UI/UX" required />
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
