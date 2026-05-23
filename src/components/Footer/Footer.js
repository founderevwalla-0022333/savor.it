import Link from "next/link";
import { SITE } from "@/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#footerLogoGrad)" />
              <path d="M8 12L16 6L24 12V20L16 26L8 20V12Z" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M16 6V26" stroke="white" strokeWidth="1.5" />
              <path d="M8 12L24 20" stroke="white" strokeWidth="1.5" />
              <path d="M24 12L8 20" stroke="white" strokeWidth="1.5" />
              <defs>
                <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#4F8CFF" />
                </linearGradient>
              </defs>
            </svg>
            <span>THE SETUP VAULT</span>
          </div>
          <p className={styles.tagline}>{SITE.description}</p>
          <div className={styles.socials}>
            {["Instagram", "Twitter", "YouTube", "Pinterest"].map((s) => (
              <a key={s} href="#" className={styles.socialLink} aria-label={s}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className={styles.linksGrid}>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/category/all">About Us</Link>
            <Link href="/category/all">Contact Us</Link>
            <Link href="/category/all">Blog</Link>
            <Link href="/category/all">Privacy Policy</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Categories</h4>
            <Link href="/category/gaming">Gaming Setups</Link>
            <Link href="/category/minimal">Minimal Setups</Link>
            <Link href="/category/study">Study Setups</Link>
            <Link href="/category/creator">Creator Setups</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Customer</h4>
            <Link href="/category/all">Affiliate Disclosure</Link>
            <Link href="/category/all">Terms of Use</Link>
            <Link href="/category/all">Refund Policy</Link>
            <Link href="/category/all">Disclaimer</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>We're Here to Help</h4>
            <a href="mailto:support@thesetupvault.com">support@thesetupvault.com</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
