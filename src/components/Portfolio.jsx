const GALLERY_ITEMS = [
  { image: 'https://i.ibb.co.com/dwQpdXLd/489941186-18321559705205888-2963335975277554550-n.webp', label: 'Family Portrait Session', user: '@ra.raystudio' },
  { image: 'https://i.ibb.co.com/ynXtFX1K/495144479-17987879549813574-525589874276018655-n.webp', label: 'Best Friend Session', user: '@ra.raystudio' },
  { image: 'https://i.ibb.co.com/1JwCvNFx/image1.jpg', label: 'Self Portrait Session', user: '@ra.raystudio' },
  { image: 'https://i.ibb.co.com/LzB33MyP/649217877-17989641662941604-544502230071466217-n.webp', label: 'Best Friend Session', user: '@ra.raystudio' },
  { image: 'https://i.ibb.co.com/RkMtSnWX/659126050-18400217455196614-8422869397934961269-n.webp', label: 'With Friends', user: '@ra.raystudio' },
  { image: 'https://i.ibb.co.com/zWGVscF1/651555933-17975359367843153-4350027169318120957-n.webp', label: 'Brother And Sister Session', user: '@ra.raystudio' },
  { image: 'https://i.ibb.co.com/9k94MyCH/655713014-18194026192359332-2274048373785307088-n.jpg', label: 'Happy moment Shot', user: '@ra.raystudio' },
  { image: 'https://i.ibb.co.com/z0rDWht/654024844-18165380983412240-4959080272482353157-n.webp', label: 'Couple Shot', user: '@ra.raystudio' },
  { image: 'https://i.ibb.co.com/60Q8tYgD/649226551-17992363247928224-3861391758760528111-n.webp', label: 'Graduation Session', user: '@ra.raystudio' },
]
const DELAYS = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3']

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <div className="label">Portfolio</div>
          <h2>Our Best Shots</h2>
          <p>
            Karya terbaik dari para pengunjung yang telah mengabadikan momen
            spesial mereka di RA Ray Studio.
          </p>
        </div>
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`gallery-item reveal ${DELAYS[i % 3]}`}
            >
              <div className="gallery-placeholder">
                <img src ={item.image} alt={item.label}/>
              </div>
              <div className="overlay">
                <span>
                  <i className="fab fa-instagram"></i> {item.user}
                </span>
                <small>{item.label}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="gallery-cta reveal">
          <a
            href="https://instagram.com/ra.raystudio"
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
          >
            <i className="fab fa-instagram"></i> Lihat Semua di Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
