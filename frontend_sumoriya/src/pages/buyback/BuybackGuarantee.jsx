import React from 'react'
import { ShieldCheck, TrendingUp, Handshake } from 'lucide-react'

const BuybackGuarantee = () => {
  return (
    <div className="fade-in">
      <section className="bg-primary-light" style={{ backgroundColor: 'rgba(45, 80, 22, 0.05)', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>100% Buyback Guarantee</h1>
          <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Never worry about finding buyers. We focus on markets, so you can focus on farming.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="mb-4">Guaranteed returns, Zero market risk</h2>
            <p className="text-muted mb-4">
              The biggest challenge in agriculture is finding the right buyer at the right price. With Sumoriya's Buyback Agreement, we sign a legal contract to purchase your entire 'A' grade mushroom harvest.
            </p>
            <p className="text-muted mb-4">
              By controlling the supply chain from spawn to export, we offer our farmers stable pricing, immune to local market fluctuations.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="flex items-center gap-3"><ShieldCheck className="text-secondary" /> Legally binding agreements</li>
              <li className="flex items-center gap-3"><TrendingUp className="text-secondary" /> Pre-fixed, highly competitive rates</li>
              <li className="flex items-center gap-3"><Handshake className="text-secondary" /> Transparent grading and instant payments</li>
            </ul>
          </div>
          <div className="bg-light p-8 rounded-lg card">
            <h3 className="mb-2 border-b pb-2">Current Buyback Rates (Approx.)</h3>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-medium">Oyster Mushroom (Dry)</span>
              <span className="text-primary font-bold">₹300 - ₹350 / kg</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-medium">Button Mushroom (Fresh)</span>
              <span className="text-primary font-bold">₹120 - ₹150 / kg</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="font-medium">Milky Mushroom (Fresh)</span>
              <span className="text-primary font-bold">₹150 - ₹180 / kg</span>
            </div>
            <p className="text-xs text-muted mt-4">*Note: Rates fluctuate slightly based on seasonal export demand and quality grading. Exact rates are frozen at the time of contract.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BuybackGuarantee
