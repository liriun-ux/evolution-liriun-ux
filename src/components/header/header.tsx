
"use client"
import Modal from "./Menu";
import Link from "next/link";
import NavHeaderLinks from "./NavLinks-header";
export default function Header() {
  return (
    <header className="header">
      <Link className="logo display" href="/">
      LIRIUN<span className="logo-acent">-UX</span>
      </Link>
      <Modal/>
      <NavHeaderLinks/>
    </header>
  );
}
