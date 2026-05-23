"use client";

import React from 'react';
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import MobileNav from "./MobileNav";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  
  // Clean, self-contained layout for studio route
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) {
    return <div className="studio-only-wrapper w-full h-screen overflow-hidden bg-[#f4f4f5]">{children}</div>;
  }

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen relative overflow-x-hidden w-full">
        {/* Desktop TopBar */}
        <TopBar />
        
        {/* Page Content */}
        <main className="flex-1 pb-24 lg:pb-16">
          {children}
        </main>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
}
