import React, { useState } from 'react'
import { Calculator } from 'lucide-react'
import './ROICalculator.css'

const ROICalculator = () => {
  const [investment, setInvestment] = useState(100000)

  // Mushroom production metrics assumption
  // For every 1 Lakh investment:
  // Production: ~100 kg dry mushrooms per month depending on area used (approx metric for UI)
  // Buyback rate: Rs 300 per kg dry
  // Monthly income: 1 Lakh -> ~30,000 RS / month
  // Just mathematical placeholders for visualization
  
  const estimatedMonthly = Math.round(investment * 0.3)
  const yearlyIncome = estimatedMonthly * 12
  const breakEvenMonths = Math.ceil(investment / estimatedMonthly)

  return (
    <div className="roi-calculator card">
      <div className="flex items-center gap-2 mb-4">
        <div className="icon-badge bg-primary-light text-primary">
          <Calculator size={24} />
        </div>
        <h3 style={{margin: 0}}>ROI Estimator</h3>
      </div>
      
      <div className="slider-container mb-4">
        <label className="flex justify-between font-heading font-medium mb-2">
          <span>Initial Setup Investment</span>
          <span className="text-primary font-bold">₹{investment.toLocaleString('en-IN')}</span>
        </label>
        <input 
          type="range" 
          min="50000" 
          max="500000" 
          step="10000"
          value={investment} 
          onChange={(e) => setInvestment(Number(e.target.value))}
          className="range-slider"
        />
        <div className="flex flex-row justify-between text-xs text-muted mt-1">
          <span>₹50K</span>
          <span>₹5L+</span>
        </div>
      </div>

      <div className="results-grid grid grid-cols-2 gap-2 mb-4">
        <div className="result-box p-3 bg-light rounded-lg">
          <span className="text-xs text-muted block">Expected Monthly Return</span>
          <strong className="text-lg text-primary">₹{estimatedMonthly.toLocaleString('en-IN')}</strong>
        </div>
        <div className="result-box p-3 bg-light rounded-lg">
          <span className="text-xs text-muted block">Expected Yearly Income</span>
          <strong className="text-lg text-primary">₹{yearlyIncome.toLocaleString('en-IN')}</strong>
        </div>
      </div>

      <div className="break-even-banner bg-secondary-light text-secondary-dark p-3 rounded-lg flex items-center justify-between text-sm font-medium">
        <span>Estimated Break-even Time</span>
        <span className="bg-white px-2 py-1 rounded badge-shadow">{breakEvenMonths} Months</span>
      </div>
      
      <p className="text-xs text-muted mt-4 text-center">
        *Disclaimer: Real results depend on crop health, environment care, and space efficiency.
      </p>
    </div>
  )
}

export default ROICalculator
