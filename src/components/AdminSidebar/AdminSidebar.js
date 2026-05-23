"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./AdminSidebar.module.css";
import { createClient } from "@/utils/supabase/client";
import {
  LayoutDashboard,
  Package,
  Layers,
  BarChart2,
  Tag,
  Image,
  Users,
  Home,
  Link2,
  Settings,
  ChevronRight,
  Zap,
  LogOut,
} from "lucide-react";

const navGroups = [
  {
    label: "Core",
    items: [
      { name: "Dashboard", href: "/admin", icon: LayoutDashboard, exact: true },
      { name: "Products", href: "/admin/products", icon: Package },
      { name: "Setups", href: "/admin/setups", icon: Layers },
    ],
  },
  {
    label: "Content",
    items: [
      { name: "Homepage Builder", href: "/admin/homepage", icon: Home },
      { name: "Categories & Tags", href: "/admin/categories", icon: Tag },
      { name: "Media Library", href: "/admin/media", icon: Image },
    ],
  },
  {
    label: "Growth",
    items: [
      { name: "Analytics", href: "/admin/analytics", icon: BarChart2 },
      { name: "Creators", href: "/admin/creators", icon: Users },
      { name: "Affiliate Links", href: "/admin/affiliates", icon: Link2 },
    ],
  },
  {
    label: "System",
    items: [
      { name: "Settings", href: "/admin/settings", icon: Settings },
    ],
  },
];

export default function AdminSidebar({ user }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const isActive = (href, exact) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href) && pathname !== "/admin";
  };

  // Derive initials and display name from user
  const userEmail = user?.email || "";
  const displayName = user?.user_metadata?.full_name || userEmail.split("@")[0] || "Admin";
  const initials = displayName.slice(0, 1).toUpperCase();

  return (
    <nav className={styles.sidebar}>
      {/* Brand */}
      <div className={styles.brand}>
        <div className={styles.brandIcon}>
          <Zap size={16} strokeWidth={2.5} />
        </div>
        <div className={styles.brandText}>
          <span className={styles.brandName}>Setup Vault</span>
          <span className={styles.brandTag}>Content OS</span>
        </div>
      </div>

      {/* Nav */}
      <div className={styles.navArea}>
        {navGroups.map((group) => (
          <div key={group.label} className={styles.navGroup}>
            <span className={styles.navGroupLabel}>{group.label}</span>
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}
                >
                  <Icon
                    size={15}
                    strokeWidth={active ? 2.2 : 1.8}
                    className={styles.navIcon}
                  />
                  <span className={styles.navLabel}>{item.name}</span>
                  {active && (
                    <ChevronRight size={12} className={styles.navChevron} />
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer with real user + logout */}
      <div className={styles.sidebarFooter}>
        <div className={styles.footerUser}>
          <div className={styles.footerAvatar}>{initials}</div>
          <div className={styles.footerInfo}>
            <span className={styles.footerName}>{displayName}</span>
            <span className={styles.footerRole}>{userEmail}</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className={styles.logoutBtn}
          title="Sign out"
        >
          <LogOut size={14} />
        </button>
      </div>
    </nav>
  );
}
