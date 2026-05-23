"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/data";
import styles from "./SetupCard.module.css";

export default function SetupCard({ setup, variant = "default" }) {
  const { isSetupSaved, toggleSetup } = useWishlist();
  const saved = isSetupSaved(setup.id);

  return (
    <Link href={`/setup/${setup.slug}`} className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.imageWrap}>
        <img src={setup.image} alt={setup.title} className={styles.image} loading="lazy" />
        <div className={styles.overlay}>
          <div className={styles.topRow}>
            {setup.tags.slice(0, 1).map((tag) => (
              <span key={tag} className={styles.tag}>{tag.toUpperCase()}</span>
            ))}
            <button
              className={`${styles.saveBtn} ${saved ? styles.saved : ""}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSetup(setup.id);
              }}
              aria-label={saved ? "Unsave setup" : "Save setup"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{setup.title}</h3>
        <p className={styles.keywords}>
          {setup.keywords ? setup.keywords.join(" · ") : setup.tags.slice(0, 3).join(" · ")}
        </p>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
            {setup.views}
          </span>
          <span className={styles.metaItem}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            {setup.saves}
          </span>
          <span className={styles.metaItem}>
            ◈ {formatPrice(setup.estimatedCost)}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* Compact variant for "More Setups You'll Love" */
export function SetupCardCompact({ setup }) {
  const { isSetupSaved, toggleSetup } = useWishlist();
  const saved = isSetupSaved(setup.id);

  return (
    <Link href={`/setup/${setup.slug}`} className={styles.compact}>
      <div className={styles.compactImage}>
        <img src={setup.image} alt={setup.title} loading="lazy" />
        <button
          className={`${styles.compactSave} ${saved ? styles.saved : ""}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSetup(setup.id);
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div className={styles.compactInfo}>
        <h4 className={styles.compactTitle}>{setup.title}</h4>
        <div className={styles.compactMeta}>
          <span>★ {(4 + Math.random()).toFixed(1)}</span>
          <span>♥ {setup.saves}</span>
          <span>👁 {setup.views}</span>
        </div>
      </div>
    </Link>
  );
}
