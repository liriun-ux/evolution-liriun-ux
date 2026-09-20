
"use client";

import { useState } from "react";
import NavBase from "../header/nav-base";

export default function Modale() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
       <button  className={`header__link button-menu z-80 `} onClick={() => setIsOpen(!isOpen)}>
          menu
        </button>
          <div className={`overlay ${isOpen ? "open" : ""}`}>
              <div className="modal">
          
          <div className="modal-content">
            <NavBase/>
          </div>

        </div>
      </div>

    </>
  );
}
