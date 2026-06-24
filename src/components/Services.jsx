const SERVICES_DATA = [
  {
    icon: 'fa-camera',
    title: 'Self Foto',
    desc: 'Sesi foto mandiri dengan konsep self portrait studio. Bebas berekspresi tanpa batas.',
    price: 'Rp20K / Rp60K',
  },
  {
    icon: 'fa-box',
    title: 'Ruang Mini',
    desc: 'Sewa ruang mini untuk sesi foto privat bersama teman atau keluarga.',
    price: 'Rp20K / orang',
  },
  {
    icon: 'fa-lightbulb',
    title: 'Spotlight',
    desc: 'Tambahan efek spotlight untuk hasil foto yang lebih dramatis dan profesional.',
    price: 'Rp20K / orang',
  },
  {
    icon: 'fa-scroll',
    title: 'Strip',
    desc: 'Cetak foto strip instan sebagai kenang-kenangan sesi fotomu.',
    price: 'Rp10K / orang',
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Promo Pelajar',
    desc: 'Promo spesial untuk pelajar. Abadikan momen sekolah dengan harga ramah kantong.',
    price: 'Rp20K / orang',
  },
  {
    icon: 'fa-print',
    title: 'Cetak Gambar',
    desc: 'Cetak 3R Rp11.000, Cetak 4R Rp13.000, Cetak 5R Rp15.000, Cetak 4x Rp15.000, Cetak 8RP (A4 + frame) Rp75.000',
    price: 'Rp11.000 - Rp75.000',
  },
]

const DELAYS = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3']

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header reveal">
          <div className="label">Services</div>
          <h2>Paket & Layanan</h2>
          <p>
            Pilih paket yang sesuai dengan kebutuhanmu. Semua sudah termasuk alat
            dan properti foto.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES_DATA.map((s, i) => (
            <div key={i} className={`service-card reveal ${DELAYS[i % 3]}`}>
              <div className="icon">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <div className="price">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
