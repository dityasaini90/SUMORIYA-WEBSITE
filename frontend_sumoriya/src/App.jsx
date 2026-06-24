import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import SetupKits from './pages/setup-kits/SetupKits'
import Training from './pages/training/Training'
import Consultation from './pages/consultation/Consultation'
import HowItWorks from './pages/how-it-works/HowItWorks'
import BuybackGuarantee from './pages/buyback/BuybackGuarantee'
import SuccessStories from './pages/success-stories/SuccessStories'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/setup-kits" element={<SetupKits />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/consultation" element={<Consultation />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/buyback" element={<BuybackGuarantee />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
