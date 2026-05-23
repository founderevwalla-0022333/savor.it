"use client";

import { useWishlist } from "@/context/WishlistContext";
import styles from "./Toast.module.css";

export default function Toast() {
  const { toastMessage } = useWishlist();

  if (!toastMessage) return null;

  return (
    <div className={styles.toast} key={toastMessage}>
      <span className={styles.icon}>✓</span>
      <span className={styles.text}>{toastMessage}</span>
    </div>
  );
}
