import { useState } from 'react'

const CETAK_OPTIONS = [
  { value: 'cetak-3r', label: 'Cetak 3R (Rp11.000)' },
  { value: 'cetak-4r', label: 'Cetak 4R (Rp13.000)' },
  { value: 'cetak-5r', label: 'Cetak 5R (Rp15.000)' },
  { value: 'cetak-4x', label: 'Cetak 4x (Rp15.000)' },
  { value: 'cetak-8rp', label: 'Cetak 8RP (Rp75.000)' },
]

const PAKET_OPTIONS = [
  { value: 'self-foto', label: 'Self Foto (Rp20K / Rp60K)' },
  { value: 'ruang-mini', label: 'Ruang Mini (Rp20K/orang)' },
  { value: 'spotlight', label: 'Spotlight (Rp20K/orang)' },
  { value: 'strip', label: 'Strip (Rp10K/orang)' },
  { value: 'promo-pelajar', label: 'Promo Pelajar (Rp20K/orang)' },
  { value: 'cetak', label: 'Cetak Gambar (Rp11K - Rp75K)' },
]

const CONTACT_DETAILS = [
  { icon: 'fab fa-instagram', label: 'Instagram', value: '@ra.raystudio' },
  { icon: 'fab fa-whatsapp', label: 'WhatsApp', value: '+62 816-4691-4942' },
  { icon: 'fas fa-map-marker-alt', label: 'Lokasi', value: "d'BoTaniCa Mall Bandung, Lantai FF" },
  { icon: 'far fa-clock', label: 'Jam Operasional', value: 'Setiap Hari: 10:00 - 21:00 WIB' },
]

const SOCIAL_LINKS = [
  { href: 'https://instagram.com/ra.raystudio', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://wa.me/6281646914942', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
  { href: 'https://tiktok.com/@ra.raystudio', icon: 'fab fa-tiktok', label: 'TikTok' },
]

export default function Contact() {
  const [paket, setPaket] = useState('')
  const [tipeCetak, setTipeCetak] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const f = e.target
    const name = f.querySelector('input[placeholder="Nama"]').value
    const email = f.querySelector('input[type="email"]').value
    const hp = f.querySelector('input[type="tel"]').value
    const pesan = f.querySelector('textarea').value
    let text = `Halo RA Ray Studio!\n\n`
    text += `Nama: ${name}\n`
    text += `Email: ${email}\n`
    text += `No. HP: ${hp}\n`
    text += `Paket: ${PAKET_OPTIONS.find(o => o.value === paket)?.label || paket}\n`
    if (paket === 'cetak' && tipeCetak) {
      text += `Tipe Cetak: ${CETAK_OPTIONS.find(o => o.value === tipeCetak)?.label || tipeCetak}\n`
    }
    if (pesan) text += `\nPesan: ${pesan}`
    window.open(`https://wa.me/6281646914942?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <div className="label">Contact</div>
          <h2>Get in Touch</h2>
          <p>
            Booking sekarang atau tanya-tanya dulu! Kami siap membantu.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Hubungi Kami</h3>
            <p>
              Ada pertanyaan atau mau booking? Jangan ragu untuk menghubungi
              kami melalui salah satu kontak di bawah ini!
            </p>
            <div className="contact-details">
              {CONTACT_DETAILS.map((d, i) => (
                <div key={i} className="contact-item">
                  <div className="icon-circle">
                    <i className={d.icon}></i>
                  </div>
                  <div>
                    <div className="detail-label">{d.label}</div>
                    <div className="detail-value">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links">
              {SOCIAL_LINKS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nama" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="No. HP" required />
            <select required value={paket} onChange={e => { setPaket(e.target.value); setTipeCetak('') }}>
              <option value="" disabled>Pilih Paket</option>
              {PAKET_OPTIONS.map((o, i) => (
                <option key={i} value={o.value}>{o.label}</option>
              ))}
            </select>
            <select required value={tipeCetak} onChange={e => setTipeCetak(e.target.value)}>
              <option value="" disabled>Pilih Tipe Cetak</option>
              {CETAK_OPTIONS.map((o, i) => (
                <option key={i} value={o.value}>{o.label}</option>
              ))}
            </select>
            <textarea placeholder="Pesan..." rows={4}></textarea>
            <button type="submit" className="btn btn-primary">
              <i className="fab fa-whatsapp"></i> Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
