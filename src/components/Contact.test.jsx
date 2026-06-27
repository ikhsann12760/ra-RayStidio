import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('renders contact section with heading', () => {
    render(<Contact />)
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText('Hubungi Kami')).toBeInTheDocument()
  })

  it('renders all contact details', () => {
    render(<Contact />)
    expect(screen.getByText('@ra.raystudio')).toBeInTheDocument()
    expect(screen.getByText("d'BoTaniCa Mall Bandung, Lantai FF")).toBeInTheDocument()
    expect(screen.getByText('Setiap Hari: 10:00 - 21:00 WIB')).toBeInTheDocument()
  })

  it('renders form with all required fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Nama')).toBeRequired()
    expect(screen.getByPlaceholderText('Email')).toBeRequired()
    expect(screen.getByPlaceholderText('No. HP')).toBeRequired()
    expect(screen.getByText('Kirim via WhatsApp')).toBeInTheDocument()
  })

  it('has a select for choosing a package', () => {
    render(<Contact />)
    const paketSelect = screen.getByDisplayValue('Pilih Paket')
    expect(paketSelect).toBeInTheDocument()
  })

  it('submit button has WhatsApp icon', () => {
    render(<Contact />)
    const btn = screen.getByText('Kirim via WhatsApp')
    expect(btn.closest('button')).toHaveClass('btn-primary')
  })

  it('renders social media links', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('WhatsApp')).toBeInTheDocument()
    expect(screen.getByLabelText('TikTok')).toBeInTheDocument()
  })
})
