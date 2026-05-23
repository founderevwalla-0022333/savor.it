"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  Tag, 
  Settings, 
  LogOut, 
  Search, 
  ShieldCheck 
} from 'lucide-react';

const AdminLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  // Dynamically determine active menu based on pathname
  let activeMenu = 'Dashboard';
  if (pathname.includes('/products')) activeMenu = 'Products';
  else if (pathname.includes('/setups')) activeMenu = 'Setups';
  else if (pathname.includes('/categories')) activeMenu = 'Categories';
  else if (pathname.includes('/settings')) activeMenu = 'Settings';

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/admin' },
    { id: 'products', label: 'Products & Gear', icon: <Package size={20} />, href: '/admin/products' },
    { id: 'setups', label: 'Setups & Vault', icon: <Layers size={20} />, href: '/admin/setups' },
    { id: 'categories', label: 'Categories', icon: <Tag size={20} />, href: '/admin/categories' },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '/admin/settings' },
  ];

  const handleLogout = async () => {
    document.cookie = "admin_bypass=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="flex h-screen bg-[#f4f4f5] font-sans selection:bg-black selection:text-white overflow-hidden w-full">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0a0a0a] text-white flex flex-col hidden md:flex shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800">
          <span className="text-xl font-black tracking-tighter uppercase flex items-center">
            Savor.it <span className="text-emerald-500 ml-1 animate-pulse">✦</span>
          </span>
          <span className="ml-2 text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-300 font-bold tracking-widest">
            ADMIN
          </span>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = activeMenu.toLowerCase() === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-white text-black font-bold shadow-md' 
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white font-medium'
                }`}
              >
                <span>{item.icon}</span>
                <span className="text-sm tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 py-2.5 rounded-xl transition-colors font-semibold text-sm"
          >
            <LogOut size={16} />
            <span>Secure Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* TOPBAR */}
        <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-8 z-10 shrink-0">
          <h1 className="text-lg font-black text-zinc-800 capitalize tracking-tight">
            {activeMenu} Overview
          </h1>
          
          <div className="flex items-center space-x-5">
            <div className="relative hidden sm:block">
              <input 
                type="text" 
                placeholder="Search database..." 
                className="bg-zinc-100 border-none rounded-full py-2 pl-10 pr-4 text-xs focus:ring-2 focus:ring-black outline-none w-64 transition-all"
              />
              <Search className="absolute left-3 top-2 text-zinc-400" size={16} />
            </div>

            <div className="flex items-center space-x-2 cursor-pointer bg-zinc-50 border border-zinc-200 py-1.5 px-3 rounded-full hover:bg-zinc-100 transition-colors">
              <ShieldCheck className="text-emerald-500" size={16} />
              <span className="text-xs font-bold text-zinc-700">Super Admin</span>
            </div>
          </div>
        </header>

        {/* DYNAMIC CONTENT */}
        <div className="flex-1 overflow-auto p-8 relative bg-[#f4f4f5]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
