import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, TrendingUp, Users, CheckCircle, Clock, BookOpen, Star } from 'lucide-react'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <div className="hero-badge">🌱 Trusted by 350+ Farmers</div>
            <h1 className="hero-title">
              Ghar se shuru karo mushroom farming — <span className="text-secondary">mahine mein kamaao Rs 20,000+</span>
            </h1>
            <p className="hero-subtitle">
              Join Rajasthan's fastest-growing network of mushroom entrepreneurs. We provide complete setup kits, hands-on training, and a 100% buyback guarantee!
            </p>
            <div className="hero-actions">
              <Link to="/services/setup-kits" className="btn btn-primary">
                View Setup Kits <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Book Free Consultation
              </Link>
            </div>
            <div className="trust-indicators mt-4">
              <div className="trust-item">
                <TrendingUp className="text-secondary" size={24} />
                <span>350+ Units Running</span>
              </div>
              <div className="trust-item">
                <Users className="text-secondary" size={24} />
                <span>3 Associated Companies</span>
              </div>
              <div className="trust-item">
                <ShieldCheck className="text-secondary" size={24} />
                <span>Buyback Guarantee</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper fade-in" style={{animationDelay: '0.2s'}}>
            <div className="hero-img-frame mt-4 md:mt-0">
              <img src="/images/hero_mushroom.png" alt="Mushroom Farming Indoor Setup" className="hero-image" />
              <div className="floating-card">
                <div className="flex items-center gap-1">
                  <Star className="text-secondary" fill="var(--secondary)" size={16} />
                  <Star className="text-secondary" fill="var(--secondary)" size={16} />
                  <Star className="text-secondary" fill="var(--secondary)" size={16} />
                  <Star className="text-secondary" fill="var(--secondary)" size={16} />
                  <Star className="text-secondary" fill="var(--secondary)" size={16} />
                </div>
                <p className="font-heading font-bold mt-1">"Life-changing income"</p>
                <p className="text-sm text-muted">- Ramesh, Jaipur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title fade-in">Our Core Services</h2>
          <p className="text-center text-muted mb-4 max-w-2xl mx-auto">Everything you need to step into the profitable world of organic mushroom farming, right from the comfort of your empty rooms.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {/* Card 1 */}
            <div className="card service-card fade-in" style={{animationDelay: '0.1s'}}>
              <div className="card-icon bg-primary-light text-primary">
                <TrendingUp size={32} />
              </div>
              <h3>Setup Kits</h3>
              <p className="price-tag">Rs 60,000 - 2,00,000</p>
              <p className="text-muted mt-2 mb-3">Complete end-to-end infrastructure for your mushroom farm. Includes racks, climate control, spawn, and sprayers.</p>
              <ul className="service-features text-sm">
                <li><CheckCircle size={16} className="text-primary" /> Turnkey installation</li>
                <li><CheckCircle size={16} className="text-primary" /> Premium quality spawns</li>
                <li><CheckCircle size={16} className="text-primary" /> 1-year equipment warranty</li>
              </ul>
              <Link to="/services/setup-kits" className="link-arrow mt-3">Learn more <ArrowRight size={16}/></Link>
            </div>

            {/* Card 2 */}
            <div className="card service-card fade-in" style={{animationDelay: '0.2s'}}>
              <div className="card-icon bg-secondary-light text-secondary-dark">
                <BookOpen size={32} />
              </div>
              <h3>Training Program</h3>
              <p className="price-tag">Rs 10,000 - 15,000</p>
              <p className="text-muted mt-2 mb-3">Master the art and science of mushroom farming with expert-led online and practical offline classes.</p>
              <ul className="service-features text-sm">
                <li><CheckCircle size={16} className="text-primary" /> Online/Offline batches</li>
                <li><CheckCircle size={16} className="text-primary" /> Hands-on experience</li>
                <li><CheckCircle size={16} className="text-primary" /> Certification on completion</li>
              </ul>
              <Link to="/services/training" className="link-arrow mt-3">Learn more <ArrowRight size={16}/></Link>
            </div>

            {/* Card 3 */}
            <div className="card service-card fade-in" style={{animationDelay: '0.3s'}}>
              <div className="card-icon bg-gray-light text-text-main">
                <Users size={32} />
              </div>
              <h3>Consultation</h3>
              <p className="price-tag">Rs 1,000 - 2,000</p>
              <p className="text-muted mt-2 mb-3">Get 1-on-1 personalized guidance from Surendra Dodwariya to troubleshoot farm issues or plan business scaling.</p>
              <ul className="service-features text-sm">
                <li><CheckCircle size={16} className="text-primary" /> Video call sessions</li>
                <li><CheckCircle size={16} className="text-primary" /> Farm setup blueprint</li>
                <li><CheckCircle size={16} className="text-primary" /> Disease management</li>
              </ul>
              <Link to="/services/consultation" className="link-arrow mt-3">Learn more <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="process-tracker">
            <div className="process-step fade-in" style={{animationDelay: '0.1s'}}>
              <div className="step-number">1</div>
              <h4>Consultation & Space Check</h4>
              <p className="text-sm text-muted">We evaluate your available space (even a 10x10 room works!).</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step fade-in" style={{animationDelay: '0.2s'}}>
              <div className="step-number">2</div>
              <h4>Training & Setup</h4>
              <p className="text-sm text-muted">You learn the skills while our team installs the complete kit.</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step fade-in" style={{animationDelay: '0.3s'}}>
              <div className="step-number">3</div>
              <h4>Growth Phase</h4>
              <p className="text-sm text-muted">Follow our daily checklist. Mushrooms harvest in 25-30 days.</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step fade-in" style={{animationDelay: '0.4s'}}>
              <div className="step-number">4</div>
              <h4>Buyback & Profits</h4>
              <p className="text-sm text-muted">We buy the dry mushrooms back at a guaranteed price. You earn!</p>
            </div>
          </div>
          <div className="mt-4 text-center">
             <Link to="/how-it-works" className="btn btn-outline">See Detailed Process</Link>
          </div>
        </div>
      </section>

      {/* Buyback CTA Banner */}
      <section className="section buyback-cta">
        <div className="container flex-col md-flex-row items-center justify-between gap-4">
          <div className="text-content">
            <ShieldCheck size={48} className="text-secondary mb-2" />
            <h2 className="text-white font-heading text-3xl font-bold mb-2">100% Buyback Guarantee</h2>
            <p className="text-white text-opacity-90 max-w-2xl mb-4">
              Market ki tension khatam! We sign a legal agreement to buy back the mushrooms you produce at a pre-decided rate, ensuring your income is safe and secure.
            </p>
            <Link to="/buyback" className="btn btn-secondary">Read Agreement Details</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
