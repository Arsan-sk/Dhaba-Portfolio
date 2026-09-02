import { Link } from 'react-router-dom'
import { BUSINESS, getPhoneURL, getDirectionsURL, getWhatsAppURL } from '../../data/business'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      
      <div className="container">
        {/* Top Section */}
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-n">N</span>
            </div>
            <div className="footer__brand-info">
              <h2 className="footer__name font-display">Dilli Darbar</h2>
              <p className="footer__tagline font-display">Come Hungry.</p>
            </div>
          </div>

          <div className="footer__grid">
            {/* Navigation */}
            <div className="footer__col">
              <h3 className="footer__col-title">Explore</h3>
              <Link to="/" className="footer__link">Home</Link>
              <Link to="/menu" className="footer__link">Menu</Link>
              <Link to="/gallery" className="footer__link">Gallery</Link>
              <Link to="/book" className="footer__link">Book a Table</Link>
            </div>

            {/* Visit */}
            <div className="footer__col">
              <h3 className="footer__col-title">Visit Us</h3>
              <p className="footer__text">{BUSINESS.address.line1}</p>
              <p className="footer__text">{BUSINESS.address.line2}</p>
              <a href={getDirectionsURL()} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--accent">
                Get Directions →
              </a>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3 className="footer__col-title">Contact</h3>
              <a href={getPhoneURL()} className="footer__link">{BUSINESS.phone}</a>
              <a href={getWhatsAppURL()} target="_blank" rel="noopener noreferrer" className="footer__link">WhatsApp</a>
              <p className="footer__text footer__hours">{BUSINESS.hours.display}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.</p>
          <p className="footer__made">Crafted with 🔥 and a lot of hunger.</p>
        </div>
      </div>
    </footer>
  )
}
