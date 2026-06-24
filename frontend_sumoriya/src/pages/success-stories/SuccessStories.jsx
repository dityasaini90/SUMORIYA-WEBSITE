import React from 'react'

const SuccessStories = () => {
  const stories = [
    {
      name: "Ramesh Choudhary",
      location: "Jaipur, Rajasthan",
      quote: "Sumoriya gave me the exact blueprint. From a 10x10 empty shed, I am now earning ₹40,000 extra per month. The buyback guarantee means peace of mind for my family.",
      crop: "Oyster Mushrooms",
      invested: "₹1,00,000"
    },
    {
      name: "Sita Devi",
      location: "Jodhpur, Rajasthan",
      quote: "As a housewife, I wanted to support my husband's income without leaving home. The online training was perfect. I manage the climate control easily via my mobile.",
      crop: "Milky Mushrooms",
      invested: "₹50,000"
    },
    {
      name: "Amit Singh",
      location: "Udaipur, Rajasthan",
      quote: "I shifted from corporate life to agriculture. Sumoriya's large scale enterprise setup was flawless. Their agronomist's weekly visits ensured zero contamination loss.",
      crop: "Button & Oyster",
      invested: "₹5,00,000"
    }
  ]

  return (
    <div className="fade-in">
      <section className="bg-primary-light" style={{ backgroundColor: 'rgba(45, 80, 22, 0.05)', padding: '4rem 0' }}>
        <div className="container text-center">
          <h1 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Success Stories</h1>
          <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Don't just take our word for it. Read the stories of real farmers and entrepreneurs who transformed their lives with Sumoriya Organic Agro.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <div key={i} className="card">
              <div className="flex gap-2 text-secondary mb-4">
                 {'★'.repeat(5)}
              </div>
              <p className="italic text-muted mb-6" style={{ minHeight: '100px' }}>
                "{story.quote}"
              </p>
              <div className="border-t pt-4 border-gray-200">
                <h4 className="mb-1 text-primary">{story.name}</h4>
                <p className="text-xs text-muted mb-2">{story.location}</p>
                <div className="flex justify-between text-xs font-bold mt-2 bg-light p-2 rounded" style={{ backgroundColor: 'var(--bg-light)' }}>
                  <span>{story.crop}</span>
                  <span className="text-primary">Started: {story.invested}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-secondary text-white text-center py-12 mt-8" style={{ backgroundColor: 'var(--secondary)', padding: '3rem 1rem' }}>
        <h2 className="text-white mb-4">You could be our next success story!</h2>
        <a href="/contact" className="btn btn-primary bg-primary text-white border-none">Start Your Journey Today</a>
      </section>
    </div>
  )
}

export default SuccessStories
