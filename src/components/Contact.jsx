function handleSubmit(e) {
  e.preventDefault()
  const form = e.target
  const name = form.querySelector('input[type="text"]').value
  const paket = form.querySelector('select').value
  const pesan = form.querySelector('textarea').value
  const text = `Halo RA Ray Studio! Saya ${name}. Saya tertarik dengan ${paket}.${pesan ? '\n\nPesan: ' + pesan : ''}`
  window.open(`https://wa.me/6281646914942?text=${encodeURIComponent(text)}`, '_blank')
}

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

const PAKET_OPTIONS = [
  { value: 'basic', label: 'Paket Basic' },
  { value: 'couple', label: 'Paket Couple' },
  { value: 'group', label: 'Paket Group' },
  { value: 'event', label: 'Paket Event' },
  { value: 'content', label: 'Content Creator' },
  { value: 'premium', label: 'Paket Premium' },
]

export default function Contact() {
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
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="No. WhatsApp" />
            <select required defaultValue="">
              <option value="" disabled>
                Pilih Paket
              </option>
              {PAKET_OPTIONS.map((o, i) => (
                <option key={i} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <textarea placeholder="Pesan atau pertanyaan..." rows={4}></textarea>
            <button type="submit" className="btn btn-primary">
              <i className="fab fa-whatsapp"></i> Kirim via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
