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

      <Link href="/producto" className={`nav-header--button  ${pathname === "/producto" ? "active" : ""}`}>
          Producto 
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
