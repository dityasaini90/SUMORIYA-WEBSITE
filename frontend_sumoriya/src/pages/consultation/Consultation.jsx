import React from 'react'
import { MapPin, PhoneCall, TrendingUp } from 'lucide-react'

const Consultation = () => {
  return (
    <div className="fade-in">
      <section className="bg-primary-light" style={{ backgroundColor: 'rgba(45, 80, 22, 0.05)', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Farm Consultation Services</h1>
          <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Maximize your yield with expert guidance. Whether you are facing diseases or simply want to scale up, our agronomists are here to help.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp size={48} className="text-secondary" />
            </div>
            <h3>Farm Optimization</h3>
            <p className="text-muted text-sm mt-2">
              We analyze your current setup and provide a strategic report highlighting areas for improvement, cost saving, and yield maximization.
            </p>
          </div>
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <MapPin size={48} className="text-secondary" />
            </div>
            <h3>On-Site Visits</h3>
            <p className="text-muted text-sm mt-2">
              Have our senior agronomists visit your farm. We test your soil, water quality, and environmental metrics physically.
            </p>
          </div>
          <div className="card text-center">
            <div className="flex justify-center mb-4">
              <PhoneCall size={48} className="text-secondary" />
            </div>
            <h3>Tele-Consulting</h3>
            <p className="text-muted text-sm mt-2">
              Quick and effective problem-solving over video calls. Show us the issue over smartphone, and get instant remedies.
            </p>
          </div>
        </div>
      </section>

      <section className="section container form-section card" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <h2 className="text-center mb-4">Request a Consultation call</h2>
        <form className="flex flex-col gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="p-3 border rounded" required />
            <input type="text" placeholder="Your Phone Number" className="p-3 border rounded" required />
          </div>
          <input type="text" placeholder="Your Location / City" className="p-3 border rounded" required />
          <textarea placeholder="Describe the issue or assistance required (e.g., Contamination in crop, Scaling up plan)" rows="4" className="p-3 border rounded" required></textarea>
          <button type="submit" className="btn btn-primary justify-center mt-2">Submit Request</button>
        </form>
      </section>
    </div>
  )
}

export default Consultation
