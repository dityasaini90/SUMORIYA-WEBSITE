import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '+919358463311'
  const message = encodeURIComponent("Hello, I'm interested in mushroom farming setup")

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
      className="whatsapp-float"
    >
      <MessageCircle size={32} />
      <span className="sr-only">Contact us on WhatsApp</span>
    </a>
  )
}

const styles = {
  button: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '60px',
    height: '60px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    zIndex: 1000,
    transition: 'transform 0.3s ease',
  }
}

// Add tiny hover animation via standard global CSS if needed.
// Inline hover isn't easily supported in standard react without state, so it relies on class 'whatsapp-float'.

export default WhatsAppButton
