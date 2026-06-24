const FOOTER_LINKS = [
  { href: 'https://instagram.com/ra.raystudio', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://wa.me/6281646914942', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
  { href: 'https://tiktok.com/@ra.raystudio', icon: 'fab fa-tiktok', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#" className="logo" style={{ display: 'inline-block', marginBottom: 16 }}>
          RA <span>Ray</span> Studio
        </a>
        <p>&copy; 2026 RA Ray Studio. Self Portrait Studio di d&apos;BoTaniCa Mall Bandung.</p>
        <div className="footer-links">
          {FOOTER_LINKS.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener">
              <i className={link.icon}></i> {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
