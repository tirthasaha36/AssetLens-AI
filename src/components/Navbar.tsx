"use client";

import Link from "next/link";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Home size={28} />
          </div>
          <span className={styles.logoText}>
            AssetLens AI
          </span>
        </Link>

        {/* Desktop Links */}
        <div className={styles.links}>
          <Link href="#features" className={styles.link}>Features</Link>
          <Link href="#how-it-works" className={styles.link}>How it works</Link>
          <Link href="#about" className={styles.link}>About</Link>
          <button className={styles.btnStarted}>Get Started</button>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Simple CSS Display */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#features" className={styles.link} onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#how-it-works" className={styles.link} onClick={() => setIsOpen(false)}>How it works</Link>
          <Link href="#about" className={styles.link} onClick={() => setIsOpen(false)}>About</Link>
          <button className={styles.btnStarted} style={{ width: '100%' }}>Get Started</button>
        </div>
      )}
    </nav>
  );
}
