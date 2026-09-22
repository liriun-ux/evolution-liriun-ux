'use client';

import React, { AnchorHTMLAttributes } from 'react';

interface CenteredLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** ID de la sección sin el '#' (ej: "section1") */
  targetId: string;
  children: React.ReactNode;
}

export const CenteredLink: React.FC<CenteredLinkProps> = ({
  targetId,
  children,
  onClick,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Ejecutamos cualquier evento onClick personalizado si existe
    if (onClick) onClick(e);

    const element = document.getElementById(targetId);
    if (element) {
      // Centra verticalmente el elemento en la pantalla
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });

      // Opcional: Actualiza el hash en la URL sin salto repentino
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};
