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

      <Link href="/producto" className={`res-base--button nav-base-section-button ${pathname === "/youtube" ? "active" : ""}`}>
          Producto
      </Link>

      <Link href="/proceso" className={`res-base--button nav-base-section-button ${pathname === "/tiktok" ? "active" : ""}`}>
          Proceso
      </Link>

      <Link href="/sobre-liriun-ux" className={`res-base--button nav-base-section-button ${pathname === "/facebook" ? "active" : ""}`}>
          Sobre Liriun
      </Link>

    </nav>
  );
}
