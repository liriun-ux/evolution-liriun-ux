"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Description from "../header/description";
import ButtonVerMas from "../header/button-ver-mas";
import ThemeToggle from "./ThemeToggle";

// --- Datos de navegación centralizados: un solo lugar para editar los links ---
const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/web-especializada", label: "Web Especializada" },
  { href: "/proceso", label: "Proceso" },
  { href: "/sobre-liriun-ux", label: "Sobre Liriun" },
];

// --- Tipos ---
interface NavLink {
  href: string;
  label: string;
}

interface NavLinksProps {
  links: NavLink[];
  pathname: string;
  getClassName: (active: boolean) => string;
  onLinkClick?: () => void;
}

// --- Componente interno reutilizable para renderizar los links ---
function NavLinks({ links, pathname, getClassName, onLinkClick }: NavLinksProps) {
  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={getClassName(pathname === href)}
          onClick={onLinkClick}
        >
          {label}
        </Link>
      ))}
    </>
  );
}

// --- Componente interno para los íconos de redes sociales ---
const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/tu-pagina", icon: "/img/facebookDark.svg", alt: "facebook de liriun-ux", label: "Facebook" },
  { href: "https://www.tiktok.com/@tu-usuario", icon: "/img/tiktok.svg", alt: "tiktok de liriun-ux", label: "TikTok" },
  { href: "https://www.liriun-ux.tecnologia.bo", icon: "/img/web-icon.svg", alt: "Sitio web de LIRIUN-UX", label: "Sitio web de LIRIUN-UX" },
];

function SocialIcons() {
  return (
    <>
      {SOCIAL_LINKS.map(({ href, icon, alt, label }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <Image className="nav-base--icon" src={icon} alt={alt} width={30} height={30} />
        </a>
      ))}
    </>
  );
}

export default function Header2() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Cierra el menú automáticamente si cambia la ruta (por ejemplo, con back/forward)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="header__wrapper">
        {/* 1. IZQUIERDA: LIRUN-UX */}
        <div className={`header__brand z-80 ${isVisible ? "header__brand--visible" : "header__brand--hidden"}`}>
          <Link href="/" className="header__brand-title">
            <Image
              src="/img/lirum_ux4.png"
              alt="LIRUN-UX Logo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 180px"
            />
          </Link>
        </div>

        {/* 2. CENTRO: Links */}
        <nav className={`header__nav ${isVisible ? "header__nav--visible" : "header__nav--hidden"}`}>
          <NavLinks
            links={NAV_LINKS}
            pathname={pathname}
            getClassName={(active) =>
              ` header__link ${isVisible ? "header__item--visible" : "header__item--hidden"} ${active ? "active" : ""}`
            }
          />
        </nav>

        {/* 3. DERECHA: Button Contact */}
        <div className={`header__action z-80 ${isVisible ? "header__action--visible" : "header__action--hidden"}`}>
            <ThemeToggle/>
          <Link href="#contacto" className="header__button z-80">
            Contacto
          </Link>
          <button
            className="header__link button-menu z-80"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            menu
          </button>
        </div>

        <div className={`overlay ${isOpen ? "open" : ""}`}>
          <div className="modal">
            <div className="modal-content">
              <section className="nav-base">
                <div className="nav-base--content">
                  {/* PARTE IZQUIERDA */}
                  <nav className="nav-base--left" aria-label="Navegación principal">
                    <NavLinks
                      links={NAV_LINKS}
                      pathname={pathname}
                      getClassName={(active) =>
                        `res-base--button nav-base-section-button ${active ? "active" : ""}`
                      }
                      onLinkClick={() => setIsOpen(false)}
                    />
                  </nav>

                  {/* PARTE DERECHA */}
                  <div className="nav-base--right">
                    <Description
                      className="res-base--description"
                      text="Un sitio web bien diseñado es la base de todo lo que viste aquí: SEO, IA, redes sociales y más. Descubre cómo LIRIUN-UX puede construir esa base sólida para tu marca."
                      highlights={[{ text: "sitio web" }, { text: "LIRIUN-UX" }]}
                    />
                    <ButtonVerMas title="Visitar LIRIUN-UX" href="https://www.liriun-ux.tecnologia.bo" />
                  </div>

                  {/* Footer */}
                  <footer className="nav-base--footer">
                    <small className="nav-base--reserve display">© LIRIUN-UX</small>
                    <small className="nav-base--create-movil display">© creado por LIRIUN-UX</small>
                    <nav className="nav-base--icons" aria-label="Redes sociales y sitio web">
                      <SocialIcons />
                    </nav>
                    <small className="nav-base--create display">Creado por LIRIUN-UX</small>
                  </footer>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
