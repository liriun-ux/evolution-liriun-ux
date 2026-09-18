"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-base--left" aria-label="Navegación principal">
      <Link href="/" className={`res-base--button nav-base-section-button ${pathname === "/" ? "active" : ""}`}>
          Inicio
      </Link>

      <Link href="/web-especializada" className={`res-base--button nav-base-section-button ${pathname === "/web-especializada" ? "active" : ""}`}>
          Web Especializada
      </Link>

      <Link href="/proceso" className={`res-base--button nav-base-section-button ${pathname === "/proceso" ? "active" : ""}`}>
          Proceso
      </Link>

      <Link href="/sobre-liriun-ux" className={`res-base--button nav-base-section-button ${pathname === "/sobre-liriun-ux" ? "active" : ""}`}>
          Sobre Liriun
      </Link>

    </nav>
  );
}
