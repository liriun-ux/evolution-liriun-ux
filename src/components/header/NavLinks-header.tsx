"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavHeaderLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-header" aria-label="Navegación principal">
      <Link href="/" className={`nav-header--button ${pathname === "/" ? "active" : ""}`}>
          Inicio
      </Link>

      <Link href="/web-especializada" className={`nav-header--button  ${pathname === "/web-especializada" ? "active" : ""}`}>
          Web Especializada
      </Link>

      <Link href="/proceso" className={`nav-header--button ${pathname === "/proceso" ? "active" : ""}`}>
          Proceso
      </Link>

      <Link href="/sobre-liriun-ux" className={`nav-header--button ${pathname === "/sobre-liriun-ux" ? "active" : ""}`}>
          Sobre Liriun
      </Link>
    </nav>
  );
}
