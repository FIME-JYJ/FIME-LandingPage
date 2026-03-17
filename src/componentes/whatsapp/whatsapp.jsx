import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './whatsapp.css';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const phoneNumbers = [
    { number: '983507611', label: 'Ventas' },
    { number: '912195453', label: 'Cotizaciones' }
  ];
  const message = 'Hola, me interesa cotizar repuestos para camiones';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsAppClick = (phoneNumber) => {
    const whatsappUrl = `https://wa.me/51${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`whatsapp-button ${isVisible ? 'whatsapp-button--visible' : ''}`}>
      <div 
        className="whatsapp-button__wrapper"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="whatsapp-button__container">
          <FaWhatsapp className="whatsapp-button__icon" />
        </div>
        
        {/* Mensaje por defecto */}
        <div className={`whatsapp-default-message ${showTooltip ? 'whatsapp-default-message--hidden' : ''}`}>
          Cotiza aquí
        </div>
        
        {/* Tooltip con números */}
        <div className={`whatsapp-tooltip ${showTooltip ? 'whatsapp-tooltip--visible' : ''}`}>
          <div className="whatsapp-tooltip__content">
            <span className="whatsapp-tooltip__text">Cotiza con:</span>
            {phoneNumbers.map((phone) => (
              <div 
                key={phone.number}
                className="whatsapp-tooltip__option"
                onClick={() => handleWhatsAppClick(phone.number)}
              >
                <span className="whatsapp-tooltip__label">{phone.label}:</span>
                <span className="whatsapp-tooltip__number">{phone.number}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}