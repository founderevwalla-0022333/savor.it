"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [savedSetups, setSavedSetups] = useState([]);
  const [savedProducts, setSavedProducts] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedSetups = localStorage.getItem("tsv_savedSetups");
      const storedProducts = localStorage.getItem("tsv_savedProducts");
      const storedRecent = localStorage.getItem("tsv_recentlyViewed");
      if (storedSetups) setSavedSetups(JSON.parse(storedSetups));
      if (storedProducts) setSavedProducts(JSON.parse(storedProducts));
      if (storedRecent) setRecentlyViewed(JSON.parse(storedRecent));
    } catch (e) {
      console.warn("Failed to load saved data:", e);
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("tsv_savedSetups", JSON.stringify(savedSetups));
  }, [savedSetups]);

  useEffect(() => {
    localStorage.setItem("tsv_savedProducts", JSON.stringify(savedProducts));
  }, [savedProducts]);

  useEffect(() => {
    localStorage.setItem("tsv_recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  // Toast auto-dismiss
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 2200);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
  }, []);

  const toggleSetup = useCallback((setupId) => {
    setSavedSetups((prev) => {
      const exists = prev.includes(setupId);
      if (exists) {
        showToast("Setup removed from wishlist");
        return prev.filter((id) => id !== setupId);
      } else {
        showToast("Setup saved to wishlist ♥");
        return [...prev, setupId];
      }
    });
  }, [showToast]);

  const toggleProduct = useCallback((productId) => {
    setSavedProducts((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast("Product removed from wishlist");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Product saved to wishlist ♥");
        return [...prev, productId];
      }
    });
  }, [showToast]);

  const isSetupSaved = useCallback((setupId) => savedSetups.includes(setupId), [savedSetups]);
  const isProductSaved = useCallback((productId) => savedProducts.includes(productId), [savedProducts]);

  const addToRecentlyViewed = useCallback((item) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((i) => !(i.id === item.id && i.type === item.type));
      return [item, ...filtered].slice(0, 12);
    });
  }, []);

  const totalCount = savedSetups.length + savedProducts.length;

  return (
    <WishlistContext.Provider
      value={{
        savedSetups,
        savedProducts,
        recentlyViewed,
        toggleSetup,
        toggleProduct,
        isSetupSaved,
        isProductSaved,
        addToRecentlyViewed,
        totalCount,
        toastMessage,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
