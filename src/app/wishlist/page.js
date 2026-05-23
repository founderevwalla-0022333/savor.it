"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function LegacyWishlistPage() {
  useEffect(() => {
    redirect("/saved");
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">
      <div className="text-center space-y-2">
        <div className="w-10 h-10 border-2 border-t-transparent border-[#2E7D32] rounded-full animate-spin mx-auto"></div>
        <p className="text-xs text-[#888888] font-medium tracking-wide">Syncing your personal vault...</p>
      </div>
    </div>
  );
}
