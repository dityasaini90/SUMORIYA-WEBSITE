import React from 'react'
import { BookOpen, Users, Video, CalendarCheck } from 'lucide-react'

const Training = () => {
  return (
    <div className="fade-in">
      <section className="bg-primary-light" style={{ backgroundColor: 'rgba(45, 80, 22, 0.05)', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Expert Training Programs</h1>
          <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Knowledge is the highest yielding fertilizer. We provide hands-on, practical training led by real agronomists to ensure your farm thrives from day one.
          </p>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Our Programs</h2>
        <div className="grid md:grid-cols-2 gap-4">
          
          {/* Offline Training */}
          <div className="card flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-light p-3 rounded-full" style={{ backgroundColor: 'rgba(45, 80, 22, 0.1)' }}>
                <Users size={32} className="text-primary" />
              </div>
              <h3>On-Site Bootcamp</h3>
            </div>
            <p className="text-muted mb-4 flex-grow">
              Join us at our model farm in Rajasthan for an intensive 3-day bootcamp. Get your hands dirty, learn substrate preparation, spawning, climate control, and harvesting techniques from industry experts.
            </p>
            <ul className="mb-4 text-sm gap-2 flex flex-col">
              <li className="flex gap-2 items-center"><CalendarCheck size={16} className="text-secondary" /> Duration: 3 Days</li>
              <li className="flex gap-2 items-center"><Users size={16} className="text-secondary" /> Batch Size: 15-20 max</li>
            </ul>
            <button className="btn btn-primary w-full">Book Offline Training</button>
          </div>

          {/* Online Training */}
          <div className="card flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-light p-3 rounded-full" style={{ backgroundColor: 'rgba(45, 80, 22, 0.1)' }}>
                <Video size={32} className="text-primary" />
              </div>
              <h3>Online Masterclass</h3>
            </div>
            <p className="text-muted mb-4 flex-grow">
              Can't make it to the farm? No problem. Our comprehensive online masterclass features high-quality video modules, live Q&A sessions, and downloadable resources. Learn at your own pace from anywhere.
            </p>
            <ul className="mb-4 text-sm gap-2 flex flex-col">
              <li className="flex gap-2 items-center"><BookOpen size={16} className="text-secondary" /> 20+ HD Video Modules</li>
              <li className="flex gap-2 items-center"><Video size={16} className="text-secondary" /> Weekly Live Q&A</li>
            </ul>
            <button className="btn btn-outline w-full">Enroll Online</button>
          </div>

        </div>
      </section>
      
      <section className="section container text-center bg-light rounded-lg" style={{ padding: '3rem', margin: '2rem auto' }}>
        <h2 className="mb-4">Need personalized guidance?</h2>
        <p className="mb-4 text-muted">We also offer one-on-one consultation for specific problems and customized farm designs.</p>
        <a href="/services/consultation" className="btn btn-secondary">Explore Consultation Services</a>
      </section>
    </div>
  )
}

export default Training
