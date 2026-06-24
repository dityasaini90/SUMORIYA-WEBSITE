import React from 'react'
import { ClipboardCheck, Hammer, Sprout, BadgeIndianRupee } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardCheck size={40} />,
      title: "1. Consultation & Booking",
      desc: "Contact our team, discuss your available space and budget. We'll recommend the best setup kit and book your slots for training and installation."
    },
    {
      icon: <Hammer size={40} />,
      title: "2. Setup & Training",
      desc: "Our experts arrive at your location to construct your climate-controlled unit. Simultaneously, you undergo hands-on cultivation training."
    },
    {
      icon: <Sprout size={40} />,
      title: "3. Cultivation Cycle",
      desc: "You start the cultivation process. Our support team remains available via call or WhatsApp to solve any issues and monitor your progress during the 30-45 day cycle."
    },
    {
      icon: <BadgeIndianRupee size={40} />,
      title: "4. Harvest & Buyback",
      desc: "Once harvested, dry the mushrooms according to our protocol. We then buy back your entire produce at pre-decided competitive market rates, ensuring zero market-finding hassle."
    }
  ]

  return (
    <div className="fade-in">
      <section className="bg-primary-light" style={{ backgroundColor: 'rgba(45, 80, 22, 0.05)', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How It Works</h1>
          <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We've simplified the process of commercial mushroom farming into four easy steps. From your first call to your first paycheck, we hold your hand.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="grid md:grid-cols-4 gap-4 mt-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute" style={{ top: '20%', left: '10%', right: '10%', height: '2px', backgroundColor: 'var(--border-color)', zIndex: -1 }}></div>

          {steps.map((step, index) => (
            <div key={index} className="card text-center relative bg-white">
              <div className="mx-auto bg-primary-light text-primary flex items-center justify-center rounded-full mb-4" style={{ width: '80px', height: '80px', backgroundColor: 'rgba(45, 80, 22, 0.1)', margin: '0 auto 1rem auto' }}>
                {step.icon}
              </div>
              <h3 className="mb-2 text-lg">{step.title}</h3>
              <p className="text-muted text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white text-center py-12 px-4 mt-8" style={{ backgroundColor: 'var(--primary)', padding: '3rem 1rem' }}>
        <h2 className="text-white mb-4">Ready to take the first step?</h2>
        <p className="mb-6 max-w-2xl mx-auto">Our agronomy experts are waiting to help you design your future.</p>
        <a href="/contact" className="btn btn-secondary">Get In Touch Now</a>
      </section>
    </div>
  )
}

export default HowItWorks
