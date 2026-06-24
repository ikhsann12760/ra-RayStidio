const VALUES_DATA = [
  { icon: 'fa-check-circle', text: 'Bebas Ekspresi' },
  { icon: 'fa-check-circle', text: 'Tanpa Batas Waktu*' },
  { icon: 'fa-check-circle', text: 'Alat Profesional' },
  { icon: 'fa-check-circle', text: 'Hasil Instan' },
]

const STATS_DATA = [
  { number: '2.3K+', label: 'Instagram Followers' },
  { number: '348+', label: 'Posts & Portraits' },
  { number: '1K+', label: 'Happy Clients' },
  { number: '4.9', label: 'Rating dari Clients' },
]

export default function About() {
  return (
    <section className="section" id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="label">About</div>
          <h2>Cerita Kami</h2>
          <p>
            RA Ray Studio hadir untuk memberikan pengalaman berfoto yang berbeda
            — bebas, nyaman, dan menyenangkan.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <h3>
              Self Portrait Studio<br />
              di Hati Bandung
            </h3>
            <p>
              RA Ray Studio adalah self portrait studio yang berlokasi di
              d&apos;BoTaniCa Mall Bandung (lantai FF, dekat kereta anak). Kami
              percaya bahwa setiap orang memiliki sisi terbaiknya sendiri — dan
              dengan konsep self photo studio, kamu bisa mengabadikan momen
              tersebut tanpa rasa canggung.
            </p>
            <p>
              Cukup atur kamera, pose sesukamu, dan hasilnya langsung bisa kamu
              lihat. Tidak perlu fotografer, tidak perlu malu — waktumu,
              ekspresimu, hasilmu!
            </p>
            <div className="values">
              {VALUES_DATA.map((v, i) => (
                <div key={i} className="value-item">
                  <i className={`fas ${v.icon}`}></i>
                  <span>{v.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats reveal reveal-delay-2">
            {STATS_DATA.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="number">{s.number}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
