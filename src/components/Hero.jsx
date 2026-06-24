export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-camera"></i>&nbsp; Self Portrait Studio Bandung
          </div>
          <h1>
            Abadikan <span className="highlight">Dirimu</span>
            <br /> Sendiri, <span className="highlight">Tanpa</span> Batas
          </h1>
          <p>
            Self portrait studio pertama di d&apos;BoTaniCa Mall Bandung. Bebas
            berekspresi, waktumu kendalimu sendiri. Hasil foto profesional tanpa
            perlu malu dengan fotografer!
          </p>
          <div className="hero-buttons">
            <a
              href="https://instagram.com/ra.raystudio"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              <i className="fab fa-instagram"></i> Follow Instagram
            </a>
            <a
              href="https://wa.me/6281646914942"
              target="_blank"
              rel="noopener"
              className="btn btn-secondary"
            >
              <i className="fab fa-whatsapp"></i> Booking Now
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              src="https://i.ibb.co.com/Zpw74S4T/653585630-18073544150545705-5295787342271521591-n.webp"
              alt="RA Ray Studio"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius)' }}
            />
            <div className="floating-card floating-card-1">
              <i className="fas fa-star" style={{ color: '#f5c518' }}></i>
              <span>
                <strong>2.3K+</strong> Followers
              </span>
            </div>
            <div className="floating-card floating-card-2">
              <i className="fas fa-image" style={{ color: 'var(--accent)' }}></i>
              <span>
                <strong>348+</strong> Posts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
