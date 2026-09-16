
"use client";

import { useState } from "react";
import NavBase from "./nav-base";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menuButton" aria-label="Abrir menú" onClick={() => setIsOpen(true)}>
        <span   className={`barra ${isOpen ? "open" : ""}`}></span>
        <span   className={`barra ${isOpen ? "open" : ""}`}></span>
        <span   className={`barra ${isOpen ? "open" : ""}`}></span>
      </button>
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <div className="modal">
          
          <div className="modal-content">
            <NavBase/>
          </div>

        </div>
      </div>
      <span className={`closeIcon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
          <span></span>
          <span></span>
    </span>

    </>
  );
}
