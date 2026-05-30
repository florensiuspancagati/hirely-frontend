import React from "react";
import "../styles/Team.css";
import fatahul from "../../public/FotoTeam/Fatahul.png";

const Team = () => {
  const teamCategories = [
    {
      category: "Team Full-Stack Developer",
      icon: "fa-solid fa-layer-group",
      members: [
        {
          name: "Fatahul Fahmi",
          id: "xxxxx",
          image: fatahul,
          univ: "Universitas Negeri Padang",
          major: "Teknik Informatika",
          quote: '"UI/UX Enthusiast & Frontend Specialist."',
          role: "Frontend",
        },
        {
          name: "Anggota BE",
          id: "xxxxx",
          univ: "Universitas ...",
          major: "Jurusan ...",
          quote: '"Database Architect & API Integrity."',
          role: "Backend",
        },
      ],
    },
    {
      category: "Data Science",
      icon: "fa-solid fa-chart-network",
      members: [
        {
          name: "Anggota DS 1",
          id: "DS-001",
          univ: "Universitas ...",
          major: "Jurusan ...",
          quote: '"Data processing for better insights."',
          role: "Analyst",
        },
        {
          name: "Anggota DS 2",
          id: "DS-002",
          univ: "Universitas ...",
          major: "Jurusan ...",
          quote: '"Analyzing patterns in recruitment data."',
          role: "Data Eng.",
        },
      ],
    },
    {
      category: "AI - Engineer",
      icon: "fa-solid fa-microchip",
      members: [
        {
          name: "Anggota AI 1",
          id: "AI-001",
          univ: "Universitas ...",
          major: "Jurusan ...",
          quote: '"Model Training & Match Score Accuracy."',
          role: "ML Eng.",
        },
        {
          name: "Anggota AI 2",
          id: "AI-002",
          univ: "Universitas ...",
          major: "Jurusan ...",
          quote: '"NLP & CV Parsing Algorithm Expert."',
          role: "NLP Eng.",
        },
      ],
    },
  ];

  return (
    <div className="team-container fade-in">
      <div className="team-header">
        <h1>
          Di Balik Layar <span>CeroVix</span>
        </h1>
        <p>
          Kolaborasi lintas jalur Dicoding Camp untuk solusi rekrutmen masa
          depan.
        </p>
        <div className="group-id-badge">Group ID: XXX-XXX</div>
      </div>

      <div className="team-wrapper">
        {teamCategories.map((group, index) => (
          <div className="team-group-section" key={index}>
            {/* Header Divisi dengan efek garis menyala */}
            <div className="division-header">
              <div className="division-title">
                <i className={group.icon}></i>
                <h2>{group.category}</h2>
              </div>
              <div className="glowing-line"></div>
            </div>

            {/* Grid 2 Kolom per Divisi */}
            <div className="cinematic-grid">
              {group.members.map((member, idx) => (
                <div className="cinematic-card" key={idx}>
                  {/* INOVASI 1: Area Foto Super Besar */}
                  <div className="card-photo-area">
                    {/* LOGIKA PERCABANGAN FOTO */}
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`Foto ${member.name}`}
                        className="real-photo"
                      />
                    ) : (
                      <i className="fa-solid fa-user-astronaut placeholder-icon"></i>
                    )}

                    <div className="photo-fade-overlay"></div>

                    <div className="floating-role">
                      <span className="id-text">{member.id}</span>
                      <span className="role-text">{member.role}</span>
                    </div>
                  </div>

                  {/* INOVASI 2: Area Teks Elegan */}
                  <div className="card-text-area">
                    <h3 className="member-name">{member.name}</h3>

                    <div className="member-edu">
                      <p className="univ">{member.univ}</p>
                      <p className="major">{member.major}</p>
                    </div>

                    <div className="member-quote">
                      <i className="fa-solid fa-quote-left"></i>
                      <p>{member.quote}</p>
                    </div>

                    <div className="member-socials">
                      <button>
                        <i className="fa-brands fa-linkedin-in"></i>
                      </button>
                      <button>
                        <i className="fa-brands fa-github"></i>
                      </button>
                      <button>
                        <i className="fa-brands fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
