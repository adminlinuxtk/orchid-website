import { useState, useEffect, useCallback } from 'react'
import './App.css'

/* ===== ICON COMPONENTS (inline SVGs for zero deps) ===== */
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

const IconTwitter = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
)

/* ===== CUSTOM HOOK: Scroll Reveal ===== */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}

/* ===== NAVBAR ===== */
function Navbar() {
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
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#careers', label: 'Careers' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <a href="#home" className="navbar-logo" aria-label="Orchid Home Health Services home">
          <img src="/orchid-website/images/orchid-logo.png" alt="Orchid Home Health Services" />
          <span>Orchid Home<br />Health Services</span>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a href="tel:+17172083060" className="navbar-phone" aria-label="Call (717) 208-3060">
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
          <a key={link.href} href={link.href} role="menuitem" onClick={closeMenu}>{link.label}</a>
        ))}
        <a href="tel:+17172083060" className="mobile-phone" onClick={closeMenu}>
          <IconPhone /> (717) 208-3060
        </a>
      </div>
    </nav>
  )
}

/* ===== HERO ===== */
function Hero() {
  return (
    <section id="home" className="hero hero-bg">
      <div className="hero-content">
        <h1 className="reveal">You can't always be there.<br />But we can.</h1>
        <p className="reveal reveal-delay-1">We provide services in the comfort of home.</p>
        <div className="hero-buttons reveal reveal-delay-2">
          <a href="#services" className="btn-primary">Our Services</a>
          <a href="#contact" className="btn-secondary">Contact Us</a>
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
        <div className="about-content-wrapper">
          <div className="about-image reveal reveal-delay-1">
            <img src="/orchid-website/images/senior-care.jpg" alt="Caregiver assisting senior" />
          </div>
          <div className="about-content">
            <p className="reveal reveal-delay-1">
              Orchid Home Health Services is highest quality home care service provider located in Lancaster Pennsylvania. We provide services to the people who need help on their daily works like cooking, cleaning, bathing etc. Our agency is run by local experts who have many years of experience in the home health profession. We are a licensed, bonded and insured. Quality care, safety and privacy of our client is our main priority. We provide custom care plan for each client's who need specific services.
            </p>
            <p className="reveal reveal-delay-2">
              At Orchid Home Health services, we are available 24/7 for an hourly services to specialized care.
            </p>
            <div className="about-badges reveal reveal-delay-3">
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
          <div className="mission-card mission reveal reveal-delay-1">
            <div className="icon"><IconHeart /></div>
            <h3>Our Mission</h3>
            <p>To provide highest quality home care service to individuals who need support in their daily life.</p>
          </div>
          <div className="mission-card vision reveal reveal-delay-2">
            <div className="icon"><IconEye /></div>
            <h3>Our Vision</h3>
            <p>To become leading provider of quality home care services to the community we serve.</p>
          </div>
          <div className="mission-belief reveal reveal-delay-3">
            <p>Instead of living in nursing home or medical facility, we believe your loved ones deserve to stay home and get all the care they deserve.</p>
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
      desc: 'Hourly care program allows you to choose your own schedule. Custom plans for each client, adjustable at any time. Our caregivers provide support to normal daily routines on an hourly or as-needed basis.',
      image: '/orchid-website/images/hero-care.jpg',
    },
    {
      icon: <IconUsers />,
      title: 'Companion Care',
      desc: 'Help with reading, getting mail, running errands, shopping, assistance with social media and email, and more.',
      image: '/orchid-website/images/companion-care.jpg',
    },
    {
      icon: <IconKitchen />,
      title: 'Homemaker Services',
      desc: 'Meal preparation, laundry, cleaning, changing bed, and more. Supporting safe recovery after hospital discharge.',
      image: '/orchid-website/images/homemaker.jpg',
    },
    {
      icon: <IconRefresh />,
      title: 'Respite Care',
      desc: 'Short-term or emergency relief for caregivers when they need to take a break or focus on their personal life.',
      image: '/orchid-website/images/respite-care.jpg',
    },
    {
      icon: <IconUser />,
      title: 'Personal Care',
      desc: 'Medication reminders, bathing assistance, dressing & grooming, transportation assistance, feeding, and more. Specialized care for dementia, stroke recovery, and more.',
      image: '/orchid-website/images/personal-care.jpg',
    },
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title reveal">Our Services</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Comprehensive home health care services tailored to your needs
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card service-card-with-image reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="service-image">
                <img src={s.image} alt={s.title} />
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
    <section id="why-choose" className="why-choose section why-choose-bg">
      <div className="container">
        <h2 className="section-title reveal">Why Choose Us</h2>
        <p className="why-headline reveal reveal-delay-1">We are always here for you and your loved ones any time, anywhere.</p>
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
            <p>Do you love helping people in their daily life? At Orchid Home Health Services, we are looking for dedicated, caring and helpful caregivers.</p>
            <p>We are an equal opportunity employer.</p>
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
            <img src="/orchid-website/images/companion-care.jpg" alt="Caregiver providing companion care" />
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
                <p style={{ marginTop: 2, color: 'var(--text-secondary)' }}>(717) 435-9796</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><IconMail /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:info@orchidhomehs.com">info@orchidhomehs.com</a>
              </div>
            </div>
            <div className="contact-map" aria-label="Google Map showing Orchid Home Health Services location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.123!2d-76.306!3d40.038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAyJzE2LjgiTiA3NsKwMTgnMjEuNiJX!5e0!3m2!1sen!2sus!4v1"
                title="Orchid Home Health Services location on Google Maps"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="contact-form reveal reveal-delay-3" onSubmit={handleSubmit} aria-label="Contact form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
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
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; 2024 Orchid Home Health Services</p>
            <p><a href="mailto:info@orchidhomehs.com">info@orchidhomehs.com</a> &middot; <a href="tel:+17172083060">(717) 208-3060</a></p>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Follow us on Facebook" title="Facebook"><IconFacebook /></a>
            <a href="#" aria-label="Follow us on Twitter" title="Twitter"><IconTwitter /></a>
          </div>
        </div>
        <div className="footer-bottom">
          Design by Tapash K.
        </div>
      </div>
    </footer>
  )
}

/* ===== APP ===== */
function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        <WhyChoose />
        <ServiceArea />
        <Insurance />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
