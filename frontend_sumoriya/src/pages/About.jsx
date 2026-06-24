import React from 'react'
import { Leaf, Award, Users, Globe } from 'lucide-react'

const About = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-primary-dark text-white" style={{ backgroundColor: 'var(--primary-dark)', padding: '5rem 0' }}>
        <div className="container text-center">
          <h1 className="text-white" style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>Pioneering Organic Agriculture in India</h1>
          <p className="max-w-3xl mx-auto" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.9 }}>
            Sumoriya Organic Agro Gold India Pvt Ltd is on a mission to modernize farming, bringing high-yield, low-space mushroom cultivation to the forefront of rural and urban agriculture in Rajasthan.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card border-primary" style={{ borderTop: '4px solid var(--primary)' }}>
            <h2 className="text-primary mb-3">Our Vision</h2>
            <p className="text-muted leading-relaxed">
              To be India's leading comprehensive organic platform, creating a sustainable agricultural ecosystem where every farmer—regardless of land size—can generate substantial, stable income while contributing to the nation's nutritional security.
            </p>
          </div>
          <div className="card border-primary" style={{ borderTop: '4px solid var(--secondary)' }}>
            <h2 className="text-secondary mb-3">Our Mission</h2>
            <p className="text-muted leading-relaxed">
              To empower individuals and communities through education, end-to-end infrastructural support, and guaranteed market linkage (buyback) for premium organic mushrooms, turning agriculture into a highly profitable and resilient enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Why Rajasthan */}
      <section className="bg-primary-light" style={{ backgroundColor: 'rgba(45, 80, 22, 0.05)', padding: '4rem 0' }}>
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1596700812739-1fb4372579df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Rajasthan Agriculture" className="rounded-lg shadow-lg w-full" style={{ border: '2px solid var(--secondary)' }}/>
          </div>
          <div>
            <h2 className="text-primary mb-4">Focusing on Rajasthan</h2>
            <p className="text-muted mb-4">
              Rajasthan faces unique challenges: water scarcity, arid land, and fluctuating temperatures. Traditional farming struggles under these conditions.
            </p>
            <p className="text-muted mb-4">
              Mushroom cultivation is the perfect antidote. It requires virtually no fertile land and thousands of liters less water compared to traditional crops like wheat. Our climate-controlled indoor setups completely neutralize external weather factors.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded text-center shadow-sm">
                <Leaf className="text-primary mx-auto mb-2" size={32} />
                <div className="font-bold">90% Less Water</div>
                <div className="text-xs text-muted">Than traditional crops</div>
              </div>
              <div className="bg-white p-4 rounded text-center shadow-sm">
                <Globe className="text-secondary mx-auto mb-2" size={32} />
                <div className="font-bold">Zero Soil Req.</div>
                <div className="text-xs text-muted">Grown vertically indoors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight Strip */}
      <section className="section bg-white border-y" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-4xl text-primary font-bold mb-2">500+</div>
            <div className="text-muted">Active Farmers</div>
          </div>
          <div>
            <div className="text-4xl text-primary font-bold mb-2">50T</div>
            <div className="text-muted">Monthly Production</div>
          </div>
          <div>
            <div className="text-4xl text-primary font-bold mb-2">100%</div>
            <div className="text-muted">Buyback Rate</div>
          </div>
          <div>
            <div className="text-4xl text-primary font-bold mb-2">5+</div>
            <div className="text-muted">Expert Agronomists</div>
          </div>
        </div>
      </section>

      {/* Leadership/Team placeholder */}
      <section className="section container text-center">
        <h2 className="section-title">Leadership Team</h2>
        <p className="text-muted max-w-2xl mx-auto mb-8">
          Our team blends deep agricultural expertise with modern business acumen. We are farmers, technologists, and market experts dedicated to your success.
        </p>
        <div className="flex justify-center flex-wrap gap-8">
          <div className="text-center">
            <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center text-gray-400">
              <Users size={48} />
            </div>
            <h4 className="mb-1 text-primary">Founder & CEO</h4>
            <p className="text-xs text-muted">Pioneering Visionary</p>
          </div>
          {/* Add more leadership cards if needed */}
        </div>
      </section>
    </div>
  )
}

export default About
