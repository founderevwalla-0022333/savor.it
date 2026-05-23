"use client";

import { WishlistProvider } from "@/context/WishlistContext";
import Toast from "@/components/Toast/Toast";

export default function ClientLayout({ children }) {
  return (
    <WishlistProvider>
      {children}
      <Toast />
    </WishlistProvider>
  );
}
