import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

beforeEach(() => {
  window.scrollY = 0
})

const getAllNavLinks = () =>
  document.querySelectorAll('.nav a, .mobile-nav a')

describe('Header', () => {
  it('renders logo with correct text', () => {
    render(<Header />)
    const logo = screen.getByRole('link', { name: /RA Ray Studio/i })
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveClass('logo')
  })

  it('renders all navigation links in both navs', () => {
    render(<Header />)
    const links = getAllNavLinks()
    const navLabels = ['Home', 'Portfolio', 'About', 'Services', 'Contact']
    navLabels.forEach((label) => {
      const matching = Array.from(links).filter((l) => l.textContent === label)
      expect(matching).toHaveLength(2)
    })
  })

  it('renders nav-toggle button', () => {
    render(<Header />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toBeInTheDocument()
  })

  it('mobile overlay is hidden by default', () => {
    render(<Header />)
    const overlay = document.querySelector('.mobile-overlay')
    expect(overlay).not.toHaveClass('open')
  })

  it('opens mobile overlay when toggle is clicked', async () => {
    render(<Header />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await userEvent.click(toggle)
    const overlay = document.querySelector('.mobile-overlay')
    expect(overlay).toHaveClass('open')
  })

  it('closes mobile overlay when toggle is clicked twice', async () => {
    render(<Header />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await userEvent.click(toggle)
    await userEvent.click(toggle)
    const overlay = document.querySelector('.mobile-overlay')
    expect(overlay).not.toHaveClass('open')
  })

  it('closes mobile overlay when a nav link in mobile nav is clicked', async () => {
    render(<Header />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await userEvent.click(toggle)
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a')
    await userEvent.click(mobileNavLinks[0])
    const overlay = document.querySelector('.mobile-overlay')
    expect(overlay).not.toHaveClass('open')
  })

  it('closes mobile overlay when overlay background is clicked', async () => {
    render(<Header />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await userEvent.click(toggle)
    const overlay = document.querySelector('.mobile-overlay')
    fireEvent.click(overlay)
    expect(overlay).not.toHaveClass('open')
  })

  it('adds scrolled class when window scrolls past 50px', () => {
    render(<Header />)
    const header = document.querySelector('.header')
    expect(header).not.toHaveClass('scrolled')
    fireEvent.scroll(window, { target: { scrollY: 100 } })
    expect(header).toHaveClass('scrolled')
  })

  it('adds nav-open class when mobile menu is open', async () => {
    render(<Header />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await userEvent.click(toggle)
    const header = document.querySelector('.header')
    expect(header).toHaveClass('nav-open')
  })

  it('toggle button has active class when menu is open', async () => {
    render(<Header />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).not.toHaveClass('active')
    await userEvent.click(toggle)
    expect(toggle).toHaveClass('active')
  })

  it('body has no-scroll class when menu is open', async () => {
    render(<Header />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await userEvent.click(toggle)
    expect(document.body).toHaveClass('no-scroll')
    await userEvent.click(toggle)
    expect(document.body).not.toHaveClass('no-scroll')
  })
})
