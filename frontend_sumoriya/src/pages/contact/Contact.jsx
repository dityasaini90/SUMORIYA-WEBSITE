import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <div className="fade-in">
      <section className="bg-primary-light" style={{ backgroundColor: 'rgba(45, 80, 22, 0.05)', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Us</h1>
          <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We're here to answer all your questions. Get in touch with our team today.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Information */}
          <div>
            <h2 className="mb-6">Get in Touch</h2>
            <p className="text-muted mb-8">
              Whether you want to start a new farm, have queries about our buyback policy, or need consultation, we are just a call or email away.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-full text-white mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Head Office</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Sumoriya Organic Agro Gold India Pvt Ltd.<br/>
                    Plot No. 45, Agro Industrial Area,<br/>
                    Jaipur - 302001, Rajasthan, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-full text-white mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Phone</h4>
                  <p className="text-muted text-sm">+91 98765 43210 (Sales)<br/>+91 98765 43211 (Support)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-full text-white mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-muted text-sm">info@sumoriyaorganic.com<br/>support@sumoriyaorganic.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-full text-white mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="mb-1">Working Hours</h4>
                  <p className="text-muted text-sm">Monday - Saturday: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="card shadow-lg p-8">
            <h3 className="mb-6">Send us a Message</h3>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input type="text" className="w-full p-3 border rounded focus:outline-none focus:border-primary" placeholder="Enter your full name" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input type="tel" className="w-full p-3 border rounded focus:outline-none focus:border-primary" placeholder="Your phone number" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email (Optional)</label>
                  <input type="email" className="w-full p-3 border rounded focus:outline-none focus:border-primary" placeholder="Your email address" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">City/Village</label>
                <input type="text" className="w-full p-3 border rounded focus:outline-none focus:border-primary" placeholder="Where are you located?" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">I am interested in:</label>
                <select className="w-full p-3 border rounded focus:outline-none focus:border-primary text-muted">
                  <option>Setup Kits & Farming</option>
                  <option>Training Programs</option>
                  <option>Consultation Services</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea className="w-full p-3 border rounded focus:outline-none focus:border-primary" rows="4" placeholder="Any specific requirements or questions?"></textarea>
              </div>

              <button type="submit" className="btn btn-primary mt-2">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact
