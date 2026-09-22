import React from 'react';
import Link from 'next/link';

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
              ¿Listo para empezar tu próximo proyecto?
            </p>
            <Link href="/contacto" className="footer-cta-button">
              Contactar ahora
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
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-icon"
            >
            F
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="footer-social-icon"
            >
            T
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-icon"
            >
            I
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
