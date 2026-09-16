import Link from "next/link";

interface ButtonVerMasProps {
  title?: string;
  className?: string;
  href?: string;
}

export default function ButtonVerMas({
  title = "Aprender más",
  className = "",
  href = "",
}: ButtonVerMasProps) {
  return (
    <Link
      href={href}
      className={`res-base--button ${className}`}
    >
      {title}
    </Link>
  );
}
