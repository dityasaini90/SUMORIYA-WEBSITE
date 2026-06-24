import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Sprout } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Sumoriya Organic Logo" style={{ height: '60px', width: 'auto' }} />
          <span className="navbar-logo-text">Sumoriya Organic</span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="navbar-desktop">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/services/setup-kits" className="navbar-link">Setup Kits</Link>
          <Link to="/services/training" className="navbar-link">Training</Link>
          <Link to="/buyback" className="navbar-link">Buyback</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Contact Us</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="navbar-mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu fade-in">
          <Link to="/" className="navbar-mobile-link" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="navbar-mobile-link" onClick={closeMenu}>About Us</Link>
          <Link to="/services/setup-kits" className="navbar-mobile-link" onClick={closeMenu}>Setup Kits</Link>
          <Link to="/services/training" className="navbar-mobile-link" onClick={closeMenu}>Training</Link>
          <Link to="/services/consultation" className="navbar-mobile-link" onClick={closeMenu}>Consultation</Link>
          <Link to="/how-it-works" className="navbar-mobile-link" onClick={closeMenu}>How It Works</Link>
          <Link to="/buyback" className="navbar-mobile-link" onClick={closeMenu}>Buyback Guarantee</Link>
          <Link to="/success-stories" className="navbar-mobile-link" onClick={closeMenu}>Success Stories</Link>
          <Link to="/contact" className="navbar-mobile-link" onClick={closeMenu}>Contact Us</Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
