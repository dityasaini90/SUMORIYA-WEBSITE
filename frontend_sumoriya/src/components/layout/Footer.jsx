import { Link } from 'react-router-dom'
import { Sprout, MapPin, Phone, Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="container grid md:grid-cols-4 gap-4 footer-content">
        
        {/* Brand & Mission */}
        <div>
          <Link to="/" className="footer-logo">
            <img src="/logo.png" alt="Sumoriya Organic Logo" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1) drop-shadow(0px 0px 1px var(--secondary))' }} />
            <span>Sumoriya Organic</span>
          </Link>
          <p className="footer-desc mt-2">
            Ghar se shuru karo mushroom farming. We provide setup kits, training, and consultation across Rajasthan.
          </p>
          <div className="social-links flex gap-1 mt-2">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">X</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/success-stories">Success Stories</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><Link to="/services/setup-kits">Setup Kits</Link></li>
            <li><Link to="/services/training">Training Program</Link></li>
            <li><Link to="/services/consultation">Consultation</Link></li>
            <li><Link to="/buyback">Buyback Guarantee</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li className="flex items-center gap-1">
              <MapPin size={18} className="text-secondary" />
              <span>Jaipur, Rajasthan, India</span>
            </li>
            <li className="flex items-center gap-1">
              <Phone size={18} className="text-secondary" />
              <span>+91 99999 99999</span>
            </li>
            <li className="flex items-center gap-1">
              <Mail size={18} className="text-secondary" />
              <span>info@sumoriya.com</span>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <div className="container flex justify-between items-center" style={{flexWrap: 'wrap', gap: '1rem'}}>
          <p>&copy; {new Date().getFullYear()} Sumoriya Organic Agro Gold India Pvt Ltd. All rights reserved.</p>
          <p>Created by Antigravity</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
