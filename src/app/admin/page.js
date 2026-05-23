"use client";

import { useState, useEffect } from "react";
import styles from "./admin.module.css";
import Link from "next/link";
import {
  Package,
  Layers,
  MousePointerClick,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  ExternalLink,
  RefreshCw,
  Activity,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ── Mock data (swapped for Supabase calls when ready) ──
const trafficData = [
  { day: "Mon", views: 1200, clicks: 340 },
  { day: "Tue", views: 1850, clicks: 520 },
  { day: "Wed", views: 1400, clicks: 410 },
  { day: "Thu", views: 2200, clicks: 680 },
  { day: "Fri", views: 1950, clicks: 590 },
  { day: "Sat", views: 3100, clicks: 920 },
  { day: "Sun", views: 2600, clicks: 780 },
];

const recentActivity = [
  { action: "New Setup Published", target: "Minimal White Desk 2025", type: "setup", time: "2m ago", color: "#6366f1" },
  { action: "Product Added", target: "Keychron Q1 Pro", type: "product", time: "1h ago", color: "#34d399" },
  { action: "Affiliate Clicked", target: "LG UltraGear 27\" — Amazon", type: "click", time: "2h ago", color: "#fbbf24" },
  { action: "Creator Verified", target: "Aarav Mehta (@aarvxyz)", type: "creator", time: "5h ago", color: "#f472b6" },
  { action: "Category Created", target: "Aesthetic Lighting", type: "category", time: "1d ago", color: "#818cf8" },
];

const topProducts = [
  { name: "Logitech MX Master 3S", clicks: 4200, rate: "4.2%" },
  { name: "Keychron K2 Wireless", clicks: 3150, rate: "3.8%" },
  { name: "BenQ ScreenBar Halo", clicks: 2840, rate: "5.1%" },
  { name: "Autonomous SmartDesk Pro", clicks: 1200, rate: "1.2%" },
];

// ── Custom Tooltip ──────────────────────────────────────
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "#161620",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "8px",
        padding: "10px 14px",
        fontSize: "0.78rem",
      }}>
        <p style={{ color: "#808080", marginBottom: "6px" }}>{label}</p>
        <p style={{ color: "#818cf8" }}>Views: {payload[0]?.value?.toLocaleString()}</p>
        <p style={{ color: "#34d399" }}>Clicks: {payload[1]?.value?.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    products: 1248,
    setups: 342,
    clicks: 45200,
    conversion: 3.8,
  });
  const [loading, setLoading] = useState(false);

  // Swap this useEffect for real Supabase calls
  useEffect(() => {
    // Example:
    // const { data } = await supabase.from('products').select('count');
    // setStats({ products: data[0].count, ... });
  }, []);

  const statCards = [
    {
      label: "Total Products",
      value: stats.products.toLocaleString(),
      change: "+12%",
      positive: true,
      icon: Package,
      iconBg: "rgba(99,102,241,0.12)",
      iconColor: "#818cf8",
    },
    {
      label: "Total Setups",
      value: stats.setups.toLocaleString(),
      change: "+8%",
      positive: true,
      icon: Layers,
      iconBg: "rgba(52,211,153,0.12)",
      iconColor: "#34d399",
    },
    {
      label: "Affiliate Clicks",
      value: (stats.clicks / 1000).toFixed(1) + "K",
      change: "+24%",
      positive: true,
      icon: MousePointerClick,
      iconBg: "rgba(251,191,36,0.12)",
      iconColor: "#fbbf24",
    },
    {
      label: "Conversion Rate",
      value: stats.conversion + "%",
      change: "-1%",
      positive: false,
      icon: TrendingUp,
      iconBg: "rgba(244,114,182,0.12)",
      iconColor: "#f472b6",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>Overview</h1>
        <div className={styles.topBarActions}>
          {loading && (
            <span style={{ color: "#606060", fontSize: "0.78rem", display: "flex", alignItems: "center", gap: "6px" }}>
              <RefreshCw size={12} className={styles.spinning} /> Syncing...
            </span>
          )}
          <Link
            href="/admin/products/new"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            <Plus size={14} strokeWidth={2.5} />
            Quick Add
          </Link>
        </div>
      </header>

      <div className={styles.scrollArea}>
        {/* Stat Cards */}
        <div className={`${styles.grid} ${styles.gridCols4}`}>
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className={styles.statCard}>
                <div
                  className={styles.statIcon}
                  style={{ background: stat.iconBg }}
                >
                  <Icon size={16} color={stat.iconColor} strokeWidth={2} />
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div
                  className={`${styles.statChange} ${stat.positive ? styles.statChangeUp : styles.statChangeDown}`}
                >
                  {stat.positive ? (
                    <ArrowUpRight size={11} />
                  ) : (
                    <ArrowDownRight size={11} />
                  )}
                  {stat.change} this month
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts + Activity Row */}
        <div
          className={styles.grid}
          style={{ gridTemplateColumns: "2fr 1fr", marginTop: "20px" }}
        >
          {/* Traffic Chart */}
          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>Traffic & Clicks</h3>
            <p className={styles.chartSubtitle}>Past 7 days performance</p>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={trafficData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis
                  dataKey="day"
                  tick={{ fill: "#505050", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis tick={{ fill: "#505050", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="#6366f1"
                  strokeWidth={2}
                  fill="url(#gViews)"
                  dot={false}
                  activeDot={{ r: 4, fill: "#6366f1" }}
                />
                <Area
                  type="monotone"
                  dataKey="clicks"
                  stroke="#34d399"
                  strokeWidth={2}
                  fill="url(#gClicks)"
                  dot={false}
                  activeDot={{ r: 4, fill: "#34d399" }}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div style={{ display: "flex", gap: "18px", marginTop: "10px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.74rem", color: "#818cf8" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6366f1", display: "inline-block" }} />
                Page Views
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.74rem", color: "#34d399" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
                Affiliate Clicks
              </span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className={styles.chartCard}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h3 className={styles.chartTitle}>Recent Activity</h3>
                <p className={styles.chartSubtitle}>Latest actions</p>
              </div>
              <Activity size={15} color="#404040" />
            </div>
            {recentActivity.map((activity, i) => (
              <div key={i} className={styles.activityItem}>
                <span
                  className={styles.activityDot}
                  style={{ background: activity.color }}
                />
                <div>
                  <div className={styles.activityText}>{activity.action}</div>
                  <div className={styles.activityTime}>{activity.target} · {activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products Table */}
        <div className={styles.chartCard} style={{ marginTop: "20px" }}>
          <div className={styles.sectionHeader}>
            <div>
              <h3 className={styles.chartTitle}>Top Converting Products</h3>
              <p className={styles.chartSubtitle}>By affiliate link clicks this month</p>
            </div>
            <Link href="/admin/analytics" className={`${styles.btn} ${styles.btnSecondary}`} style={{ fontSize: "0.75rem" }}>
              View All <ExternalLink size={11} />
            </Link>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Clicks</th>
                <th>Conv. Rate</th>
                <th>Revenue Est.</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p, i) => (
                <tr key={i}>
                  <td style={{ color: "#404040", fontWeight: 700, width: "40px" }}>0{i + 1}</td>
                  <td style={{ fontWeight: 600, color: "#e0e0e0" }}>{p.name}</td>
                  <td>{p.clicks.toLocaleString()}</td>
                  <td>
                    <span style={{ color: "#34d399", fontWeight: 600 }}>{p.rate}</span>
                  </td>
                  <td style={{ color: "#818cf8" }}>
                    ₹{(p.clicks * 4.2 * 0.6).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Links Grid */}
        <div className={`${styles.grid} ${styles.gridCols4}`} style={{ marginTop: "20px" }}>
          {[
            { label: "Add Product", desc: "Quick-add a new item", href: "/admin/products/new", color: "#6366f1" },
            { label: "Build Setup", desc: "Create a curated setup", href: "/admin/setups/new", color: "#34d399" },
            { label: "Upload Media", desc: "Add images to library", href: "/admin/media", color: "#fbbf24" },
            { label: "Edit Homepage", desc: "Configure layout blocks", href: "/admin/homepage", color: "#f472b6" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className={styles.card} style={{ textDecoration: "none", display: "block" }}>
              <div style={{
                width: "30px", height: "30px",
                borderRadius: "8px",
                background: link.color + "18",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "12px",
              }}>
                <Plus size={14} color={link.color} />
              </div>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#e0e0e0", marginBottom: "4px" }}>{link.label}</div>
              <div style={{ fontSize: "0.75rem", color: "#606060" }}>{link.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
