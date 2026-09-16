"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-base--left" aria-label="Navegación principal">
      <Link href="/" className={`res-base--button nav-base-section-button ${pathname === "/" ? "active" : ""}`}>
          inicio
      </Link>

      <Link href="/youtube" className={`res-base--button nav-base-section-button ${pathname === "/youtube" ? "active" : ""}`}>
          Producto
      </Link>

      <Link href="/tiktok" className={`res-base--button nav-base-section-button ${pathname === "/tiktok" ? "active" : ""}`}>
          Proceso
      </Link>

      <Link href="/facebook" className={`res-base--button nav-base-section-button ${pathname === "/facebook" ? "active" : ""}`}>
          Sobre Liriun
      </Link>

    </nav>
  );
}
