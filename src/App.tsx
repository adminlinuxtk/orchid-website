import { useState, useEffect, useCallback } from 'react'
import './App.css'

/* ===== ICON COMPONENTS ===== */
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg>
)
const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
)
const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
)
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)
const IconCompass = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
)
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
)
const IconKitchen = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
)
const IconRefresh = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
)
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
)
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
)
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
)
const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
)
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

/* ===== SCROLL REVEAL HOOK ===== */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => elements.forEach((el) => observer.unobserve(el))
  }, [])
}

/* ===== NAVBAR ===== */
interface NavbarProps {
  currentPage: string
  navigate: (page: string) => void
}

function Navbar({ currentPage, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const navLinks = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About' },
    { page: 'services', label: 'Services' },
    { page: 'careers', label: 'Careers' },
    { page: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (page: string) => {
    navigate(page)
    closeMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <a href="#home" className="navbar-logo" aria-label="Orchid Home Health Services home" onClick={(e) => { e.preventDefault(); handleNavClick('home') }}>
          <img src="/orchid-website/images/orchid-logo.png" alt="Orchid Home Health Services" />
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.page}
              href={`#${link.page}`}
              className={currentPage === link.page ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.page) }}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+17172083060" className="navbar-cta" aria-label="Call (717) 208-3060">
            <IconPhone /> (717) 208-3060
          </a>
        </div>

        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`navbar-mobile${menuOpen ? ' open' : ''}`} role="menu">
        {navLinks.map((link) => (
          <a
            key={link.page}
            href={`#${link.page}`}
            className={currentPage === link.page ? 'active' : ''}
            role="menuitem"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.page) }}
          >
            {link.label}
          </a>
        ))}
        <a href="tel:+17172083060" className="mobile-cta" onClick={closeMenu}>
          <IconPhone /> (717) 208-3060
        </a>
      </div>
    </nav>
  )
}

/* ===== HERO — Split Layout ===== */
function Hero({ navigate }: { navigate: (page: string) => void }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-text">
          <span className="hero-tag reveal">Lancaster PA's Trusted Home Care</span>
          <h1 className="reveal reveal-delay-1">
            You can't always be there.<br /><strong>But we can.</strong>
          </h1>
          <p className="reveal reveal-delay-2">
            Premium home care services in the comfort of your home — hourly care, companion care, homemaker services, and more.
          </p>
          <div className="hero-buttons reveal reveal-delay-3">
            <a href="#services" className="btn-primary" onClick={(e) => { e.preventDefault(); navigate('services') }}>Our Services</a>
            <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); navigate('contact') }}>Contact Us</a>
          </div>
        </div>
        <div className="hero-image-wrap reveal reveal-delay-2">
          <img src="/orchid-website/images/hero-care.jpg" alt="Caregiver assisting senior at home" />
          <div className="hero-stats">
            <div className="hero-stat"><strong>11</strong><span>Counties</span></div>
            <div className="hero-stat"><strong>24/7</strong><span>Available</span></div>
            <div className="hero-stat"><strong>Licensed</strong><span>& Insured</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== ABOUT ===== */
function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title reveal">About Orchid Home Health Services</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Quality care from local experts — licensed, bonded, and insured
        </p>
        <div className="about-grid">
          <div className="about-image reveal reveal-delay-2">
            <img src="/orchid-website/images/senior-care.jpg" alt="Caregiver assisting senior" />
          </div>
          <div className="about-text">
            <p className="reveal reveal-delay-2">
              Orchid Home Health Services is the highest quality home care provider in Lancaster, Pennsylvania. We help people who need support with daily activities like cooking, cleaning, and bathing. Our agency is run by local experts with many years of experience in the home health profession.
            </p>
            <p className="reveal reveal-delay-3">
              We are available 24/7 — from hourly services to specialized care. Quality care, safety, and privacy are our top priorities. Every client receives a custom care plan tailored to their specific needs.
            </p>
            <div className="about-badges reveal reveal-delay-4">
              <span className="about-badge"><IconCheck /> Experienced Caregivers</span>
              <span className="about-badge"><IconCheck /> State Licensed</span>
              <span className="about-badge"><IconCheck /> Bonded</span>
              <span className="about-badge"><IconCheck /> OLTL Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== MISSION & VISION ===== */
function Mission() {
  return (
    <section id="mission" className="mission section">
      <div className="container">
        <div className="mission-grid">
          <div className="mission-card reveal reveal-delay-1">
            <div className="icon"><IconHeart /></div>
            <h3>Our Mission</h3>
            <p>To provide the highest quality home care service to individuals who need support in their daily life.</p>
          </div>
          <div className="mission-card reveal reveal-delay-2">
            <div className="icon"><IconEye /></div>
            <h3>Our Vision</h3>
            <p>To become the leading provider of quality home care services to the communities we serve.</p>
          </div>
          <div className="mission-belief reveal reveal-delay-3">
            <p>Instead of a nursing home or medical facility, we believe your loved ones deserve to stay home and get the care they need.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== SERVICES ===== */
function Services() {
  const services = [
    {
      icon: <IconClock />,
      title: 'Hourly Home Care',
      desc: 'Flexible hourly care program. Choose your own schedule with custom plans adjustable at any time. Support for daily routines on an hourly or as-needed basis.',
      image: '/orchid-website/images/hero-care.jpg',
    },
    {
      icon: <IconUsers />,
      title: 'Companion Care',
      desc: 'Help with reading, getting mail, running errands, shopping, social media and email assistance, and friendly conversation.',
      image: '/orchid-website/images/companion-care.jpg',
    },
    {
      icon: <IconKitchen />,
      title: 'Homemaker Services',
      desc: 'Meal preparation, laundry, cleaning, changing bed linens, and supporting safe recovery after hospital discharge.',
      image: '/orchid-website/images/homemaker.jpg',
    },
    {
      icon: <IconRefresh />,
      title: 'Respite Care',
      desc: 'Short-term or emergency relief for primary caregivers when they need to take a break or focus on their personal lives.',
      image: '/orchid-website/images/respite-care.jpg',
    },
    {
      icon: <IconUser />,
      title: 'Personal Care',
      desc: 'Medication reminders, bathing assistance, dressing & grooming, transportation, feeding, and specialized care for dementia and stroke recovery.',
      image: '/orchid-website/images/personal-care.jpg',
    },
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title reveal">Our Services</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Comprehensive home health care tailored to your needs
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.title} className={`service-card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="service-image">
                <img src={s.image} alt={s.title} loading="lazy" decoding="async" />
              </div>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== WHY CHOOSE US ===== */
function WhyChoose() {
  const items = [
    { icon: <IconStar />, title: 'Daily Care', desc: 'Experts' },
    { icon: <IconClock />, title: 'Available', desc: '24/7' },
    { icon: <IconUsers />, title: 'Skilled', desc: 'Caregivers' },
    { icon: <IconCompass />, title: 'Balanced', desc: 'Care' },
  ]

  return (
    <section id="why-choose" className="why-choose section">
      <div className="container">
        <h2 className="section-title reveal">Why Choose Us</h2>
        <p className="why-headline reveal reveal-delay-1">We are always here for you and your loved ones — any time, anywhere.</p>
        <div className="why-grid">
          {items.map((item, i) => (
            <div key={item.title} className={`why-card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== SERVICE AREA ===== */
function ServiceArea() {
  const counties = [
    'Adams', 'Cumberland', 'Dauphin', 'Franklin', 'Fulton',
    'Huntingdon', 'Juniata', 'Lancaster', 'Lebanon', 'Perry', 'York',
  ]

  return (
    <section id="service-area" className="service-area section">
      <div className="container">
        <h2 className="section-title reveal">Service Area</h2>
        <p className="section-subtitle reveal reveal-delay-1">Proudly serving counties across Pennsylvania</p>
        <div className="county-tags reveal reveal-delay-2">
          {counties.map((county) => (
            <span key={county} className="county-tag">{county}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== INSURANCE ===== */
function Insurance() {
  const plans = ['Private Pay', 'UPMC Health Plan', 'Medicaid', 'PA Health and Wellness', 'AmeriHealth']

  return (
    <section id="insurance" className="insurance section">
      <div className="container">
        <h2 className="section-title reveal">Insurance Accepted</h2>
        <p className="section-subtitle reveal reveal-delay-1">We work with a variety of insurance providers</p>
        <div className="insurance-badges reveal reveal-delay-2">
          {plans.map((plan) => (
            <span key={plan} className="insurance-badge">{plan}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== CAREERS ===== */
function Careers() {
  return (
    <section id="careers" className="careers section">
      <div className="container">
        <h2 className="section-title reveal">Join Our Team</h2>
        <p className="section-subtitle reveal reveal-delay-1">Make a difference in someone's life every day</p>
        <div className="careers-wrapper">
          <div className="careers-content reveal reveal-delay-2">
            <p>Do you love helping people in their daily lives? Orchid Home Health Services is looking for dedicated, caring, and helpful caregivers to join our growing team.</p>
            <p>We are an equal opportunity employer committed to a drug-free workplace.</p>
            <div className="careers-benefits">
              <span>Competitive Salaries</span>
              <span>Great Benefits</span>
              <span>Drug-Free Workplace</span>
            </div>
            <a href="#" className="btn-primary" onClick={(e) => { e.preventDefault(); alert('Application link coming soon! Please call (717) 208-3060 for inquiries.') }}>
              Apply Now
            </a>
          </div>
          <div className="careers-image reveal reveal-delay-3">
            <img src="/orchid-website/images/companion-care.jpg" alt="Caregiver providing companion care" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== CONTACT ===== */
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title reveal">Contact Us</h2>
        <p className="section-subtitle reveal reveal-delay-1">Get in touch — we're here to help</p>
        <div className="contact-grid">
          <div className="contact-info reveal reveal-delay-2">
            <div className="contact-item">
              <div className="icon"><IconMapPin /></div>
              <div>
                <h4>Address</h4>
                <p>2638 Columbia Ave, Lancaster PA 17603</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><IconPhone /></div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+17172083060">(717) 208-3060</a>
                <p style={{ marginTop: 2, color: 'var(--ink-secondary)' }}>(717) 435-9796</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><IconMail /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:info@orchidhomehs.com">info@orchidhomehs.com</a>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.123!2d-76.306!3d40.038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAyJzE2LjgiTiA3NsKwMTgnMjEuNiJX!5e0!3m2!1sen!2sus!4v1"
                title="Orchid Home Health Services location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="contact-form reveal reveal-delay-3" onSubmit={handleSubmit} aria-label="Contact form">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required aria-required="true" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required aria-required="true" />
            <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required aria-required="true" />
            <button type="submit">
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p>
              Orchid Home Health Services provides premium home care in Lancaster, PA and surrounding counties. Licensed, bonded, and insured.
            </p>
            <p>
              <a href="mailto:info@orchidhomehs.com">info@orchidhomehs.com</a> &middot; <a href="tel:+17172083060">(717) 208-3060</a>
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Follow us on Facebook" title="Facebook"><IconFacebook /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Hourly Home Care</a></li>
              <li><a href="#services">Companion Care</a></li>
              <li><a href="#services">Homemaker Services</a></li>
              <li><a href="#services">Respite Care</a></li>
              <li><a href="#services">Personal Care</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#service-area">Service Area</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Orchid Home Health Services &middot; Design by Tapash K.
        </div>
      </div>
    </footer>
  )
}

/* ===== PAGE COMPONENTS ===== */
function HomePage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <main>
      <Hero navigate={navigate} />
      <About />
      <Mission />
    </main>
  )
}

function AboutPage() {
  return (
    <main>
      <About />
      <ServiceArea />
    </main>
  )
}

function ServicesPage() {
  return (
    <main>
      <Services />
      <WhyChoose />
      <Insurance />
    </main>
  )
}

function CareersPage() {
  return (
    <main>
      <Careers />
    </main>
  )
}

function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  )
}

/* ===== APP ===== */
function App() {
  const [page, setPage] = useState<string>('home')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') || 'home'
    setPage(hash)
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home'
      setPage(hash)
      setTimeout(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) entry.target.classList.add('visible')
            })
          },
          { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        )
        const elements = document.querySelectorAll('.reveal:not(.visible)')
        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
      }, 50)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = useCallback((page: string) => {
    window.location.hash = page
    setPage(page)
  }, [])

  useScrollReveal()

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage navigate={navigate} />
      case 'about': return <AboutPage />
      case 'services': return <ServicesPage />
      case 'careers': return <CareersPage />
      case 'contact': return <ContactPage />
      default: return <HomePage navigate={navigate} />
    }
  }

  return (
    <>
      <Navbar currentPage={page} navigate={navigate} />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
