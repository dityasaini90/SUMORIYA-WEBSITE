import React from 'react'
import { CheckCircle, Info } from 'lucide-react'
import ROICalculator from '../../components/interactive/ROICalculator'

const SetupKits = () => {
  const kits = [
    {
      name: "Starter Kit",
      price: "₹50,000",
      features: [
        "Complete structural setup for 10x10 sq ft",
        "High-yield organic spawn (seeds)",
        "Humidity & temperature monitoring tools",
        "Basic training material"
      ],
      idealFor: "Beginners wanting to test the market.",
      recommended: false
    },
    {
      name: "Commercial Kit (Most Popular)",
      price: "₹2,00,000",
      features: [
        "Advanced climate-controlled setup for 500 sq ft",
        "Premium quality spawns and substrate",
        "Automated misting systems",
        "Comprehensive 3-day on-site training",
        "Priority buyback guarantee"
      ],
      idealFor: "Entrepreneurs ready for a steady income.",
      recommended: true
    },
    {
      name: "Agro Enterprise",
      price: "₹5,00,000+",
      features: [
        "Custom industrial setup (>1000 sq ft)",
        "Fully automated IoT climate control",
        "Dedicated agronomist consultation for 3 months",
        "Premium buyback rates & export assistance",
        "Marketing & branding support"
      ],
      idealFor: "Large scale farmers and big investors.",
      recommended: false
    }
  ]

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-primary-light" style={{ backgroundColor: 'rgba(45, 80, 22, 0.05)', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our setup kits</h1>
          <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We provide everything you need to start your successful organic mushroom farm. From structural materials to premium spawn, our kits are designed for maximum yield and ease of use.
          </p>
        </div>
      </section>

      {/* Pricing/Kits Section */}
      <section className="section container">
        <h2 className="section-title">Choose Your Kit</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {kits.map((kit, idx) => (
            <div key={idx} className={`card flex flex-col ${kit.recommended ? 'border-primary' : ''}`} style={kit.recommended ? { border: '2px solid var(--primary)' } : {}}>
              {kit.recommended && (
                <div className="bg-primary text-white text-center text-sm py-1 font-bold rounded-t-lg" style={{ margin: '-1.5rem -1.5rem 1.5rem -1.5rem' }}>
                  Most Recommended
                </div>
              )}
              <h3 className="text-center">{kit.name}</h3>
              <div className="text-center text-primary text-2xl font-bold mb-4">{kit.price}</div>
              <ul className="mb-4" style={{ flexGrow: 1 }}>
                {kit.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-1 items-center mb-2 text-sm">
                    <CheckCircle size={16} className="text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-light p-3 rounded mb-4 text-sm flex gap-1 items-start" style={{ backgroundColor: 'var(--bg-light)' }}>
                <Info size={16} className="text-primary mt-1" />
                <span className="text-muted"><strong>Ideal for:</strong> {kit.idealFor}</span>
              </div>
              <button className={`btn w-full ${kit.recommended ? 'btn-primary' : 'btn-outline'}`}>
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Section */}
      <section className="section container" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div>
            <h2 className="text-primary mb-4">Calculate Your Profits</h2>
            <p className="mb-4 text-muted">
              Curious about how much you can earn? Use our interactive calculator to estimate your returns based on your initial investment. Mushroom farming requires relatively low space but offers high profitability due to rapid growth cycles.
            </p>
            <ul className="mb-4">
              <li className="flex gap-2 items-center mb-2"><CheckCircle size={18} className="text-secondary"/> <span>High yield in small spaces</span></li>
              <li className="flex gap-2 items-center mb-2"><CheckCircle size={18} className="text-secondary"/> <span>30 to 45 day crop cycles</span></li>
              <li className="flex gap-2 items-center mb-2"><CheckCircle size={18} className="text-secondary"/> <span>Assured buyback guarantees income</span></li>
            </ul>
          </div>
          <div>
            <ROICalculator />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SetupKits
