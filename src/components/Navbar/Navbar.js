"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWishlist } from "@/context/WishlistContext";
import SearchModal from "@/components/SearchModal/SearchModal";
import { SITE } from "@/data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { totalCount } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navLinks = [
    { label: "Setups", href: "/category/all" },
    { label: "Categories", href: "/category/all" },
    { label: "Products", href: "/category/all" },
    { label: "Brands", href: "/category/all" },
    { label: "Inspiration", href: "/category/all" },
    { label: "Deals", href: "/category/all" },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          {/* Mobile menu button */}
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className={styles.logoIcon}>
              <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
              <path d="M8 12L16 6L24 12V20L16 26L8 20V12Z" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M16 6V26" stroke="white" strokeWidth="1.5" />
              <path d="M8 12L24 20" stroke="white" strokeWidth="1.5" />
              <path d="M24 12L8 20" stroke="white" strokeWidth="1.5" />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#4F8CFF" />
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.logoText}>THE SETUP VAULT</span>
          </Link>

          {/* Desktop nav links */}
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className={styles.navRight}>
            {/* Search bar (desktop) — opens modal */}
            <button className={styles.searchBar} onClick={() => setSearchOpen(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <span className={styles.searchPlaceholder}>Search setups, products...</span>
              <kbd className={styles.searchKbd}>⌘K</kbd>
            </button>

            {/* Search icon (mobile) */}
            <button className={styles.iconBtn} onClick={() => setSearchOpen(true)} aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Wishlist */}
            <Link href="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {totalCount > 0 && <span className={styles.badge}>{totalCount}</span>}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuInner}>
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className={styles.mobileMenuLink}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
