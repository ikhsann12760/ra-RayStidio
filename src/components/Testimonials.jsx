const TESTIMONIALS_DATA = [
  {
    stars: 5,
    quote:
      '"Seru banget! Fotonya bagus-bagus, bisa pose bebas tanpa malu karena sendirian. Recommend banget buat yang mau bikin konten IG!"',
    avatar: 'D',
    name: 'Dinda',
    handle: 'via Instagram DM',
  },
  {
    stars: 5,
    quote:
      '"Tempatnya nyaman, alatnya lengkap, dan harganya pas di kantong pelajar. Pasti balik lagi buat foto tema lain!"',
    avatar: 'R',
    name: 'Rafi',
    handle: 'via Google Review',
  },
  {
    stars: 5,
    quote:
      '"Pas buat foto keluarga! Anak-anak betah karena bisa gaya-gaya sendiri. Hasil fotonya jernih dan aesthetic banget."',
    avatar: 'S',
    name: 'Sari & Family',
    handle: 'via WhatsApp',
  },
  {
    stars: 5,
    quote:
      '"Sudah 3x ke sini! Tiap kali ada tema baru selalu seru. Tempatnya di mall jadi gampang dijangkau. Highly recommended!"',
    avatar: 'M',
    name: 'Mega',
    handle: 'via Instagram Review',
  },
]

const DELAYS = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4']

export default function Testimonials() {
  return (
    <section className="section" id="testimonials" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="label">Testimonials</div>
          <h2>Kata Mereka</h2>
          <p>
            Apa kata para pengunjung yang sudah merasakan serunya berfoto di RA
            Ray Studio.
          </p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((t, i) => (
            <div key={i} className={`testimonial-card reveal ${DELAYS[i]}`}>
              <div className="stars">
                {Array.from({ length: t.stars }, (_, j) => (
                  <i key={j} className="fas fa-star"></i>
                ))}
              </div>
              <blockquote>{t.quote}</blockquote>
              <div className="author">
                <div className="avatar">{t.avatar}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="handle">{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
