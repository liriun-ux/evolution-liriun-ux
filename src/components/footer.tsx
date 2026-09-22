import React from 'react';
import Link from 'next/link';
import FacebookIcon from '@/icons/facebook';
import TikTokIcon from '@/icons/tiktok';
import InstagramIcon from '@/icons/instagram';
import TikTokAltIcon from '@/icons/tiktokalt';
import WhatsAppIcon from '@/icons/WhatsAppIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* --- SECCIÓN SUPERIOR --- */}
        <div className="footer-top">
          
          {/* Lado Izquierdo: Navegación */}
          <nav aria-label="Navegación del Footer" className="footer-nav">
            <ul className="footer-nav-list">
              <li>
                <Link href="/" className="footer-nav-link">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/web-especializada" className="footer-nav-link">
                  web especializada
                </Link>
              </li>
              <li>
                <Link href="/proceso" className="footer-nav-link">
                  proceso
                </Link>
              </li>
              <li>
                <Link href="/sobre-liriun-ux" className="footer-nav-link">
                  sobre liriun
                </Link>
              </li>
            </ul>
          </nav>

          {/* Lado Derecho: Mensaje y Botón */}
          <div className="footer-cta">
            <p className="footer-cta-text">
              ¿Cómo hago para que mi negocio aparezca en Google?
              </p>
            <Link href="https://wa.me/59176760684?text=Hola, ¿Cómo hago para que mi negocio aparezca en Google?" className="footer-cta-button">
              <WhatsAppIcon className="icon-line"/> Contactar ahora
              
            </Link>
          </div>

        </div>

        {/* --- LÍNEA DIVISORA --- */}
        <hr className="footer-divider" />

        {/* --- SECCIÓN INFERIOR --- */}
        <div className="footer-bottom">
          
          {/* Span Izquierdo */}
          <span className="footer-span-left">
            © {new Date().getFullYear()} LIRIUN-UX. Todos los derechos reservados.
          </span>

          {/* Íconos de Redes Sociales (Centro) */}
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/liriun.ux.agenci"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-icon"
            >
            <FacebookIcon/>
            </a>
            <a
              href="https://www.tiktok.com/@liriunux"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tiktok"
              className="footer-social-icon"
            >
            <TikTokAltIcon/>
            </a>
            <a
              href="https://www.instagram.com/liriun.ux/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-icon"
            >
            <InstagramIcon/>
            </a>
          </div>

          {/* Span Derecho */}
          <span className="footer-span-right">
            No pierdas mas clientes
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
