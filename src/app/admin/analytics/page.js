"use client";

import { useState } from "react";
import styles from "../admin.module.css";
import {
  BarChart2,
  MousePointerClick,
  Eye,
  Heart,
  Award,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// ── Mock Data ──────────────────────────────────────────────────
const weeklyData = [
  { day: "Mon", clicks: 820, views: 3400, saves: 210 },
  { day: "Tue", clicks: 1240, views: 4800, saves: 340 },
  { day: "Wed", clicks: 960, views: 3900, saves: 280 },
  { day: "Thu", clicks: 1680, views: 6200, saves: 480 },
  { day: "Fri", clicks: 1420, views: 5700, saves: 390 },
  { day: "Sat", clicks: 2100, views: 8100, saves: 620 },
  { day: "Sun", clicks: 1850, views: 7400, saves: 540 },
];

const platformData = [
  { name: "Amazon", value: 64, color: "#FF9900" },
  { name: "Flipkart", value: 23, color: "#2874F0" },
  { name: "Brand Sites", value: 13, color: "#6366f1" },
];

const topProducts = [
  { name: "Logitech MX Master 3S", clicks: 4200, conv: 4.2, change: 12 },
  { name: "Keychron K2 Wireless", clicks: 3150, conv: 3.8, change: 8 },
  { name: "BenQ ScreenBar Halo", clicks: 2840, conv: 5.1, change: 22 },
  { name: "Autonomous SmartDesk Pro", clicks: 1200, conv: 1.2, change: -5 },
  { name: "LG UltraGear 27\" 4K", clicks: 980, conv: 2.4, change: 3 },
];

const PERIODS = ["Last 7 Days", "Last 30 Days", "Last 3 Months", "This Year"];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#161620", border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "8px", padding: "10px 14px", fontSize: "0.78rem",
    }}>
      <p style={{ color: "#808080", marginBottom: "6px" }}>{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} style={{ color: entry.color, margin: "2px 0" }}>
          {entry.name}: {entry.value?.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

const PieTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#161620", border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "8px", padding: "8px 12px", fontSize: "0.78rem",
    }}>
      <span style={{ color: payload[0].payload.color }}>
        {payload[0].name}: {payload[0].value}%
      </span>
    </div>
  );
};

export default function AdminAnalytics() {
  const [period, setPeriod] = useState("Last 7 Days");

  const statCards = [
    { label: "Affiliate Clicks", value: "45.2K", change: "+24%", positive: true, icon: MousePointerClick, color: "#fbbf24" },
    { label: "Setup Views", value: "128.4K", change: "+12%", positive: true, icon: Eye, color: "#818cf8" },
    { label: "Saves (Wishlist)", value: "8.9K", change: "+34%", positive: true, icon: Heart, color: "#f472b6" },
    { label: "Top Platform", value: "Amazon", change: "64% share", positive: true, icon: Award, color: "#34d399" },
  ];

  return (
    <>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>Analytics & Performance</h1>
        <div className={styles.topBarActions}>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className={styles.select}
            style={{ width: "160px" }}
          >
            {PERIODS.map((p) => <option key={p}>{p}</option>)}
          </select>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            <Download size={13} /> Export CSV
          </button>
        </div>
      </header>

      <div className={styles.scrollArea}>

        {/* Stat Cards */}
        <div className={`${styles.grid} ${styles.gridCols4}`}>
          {statCards.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statIcon} style={{ background: s.color + "18" }}>
                  <Icon size={15} color={s.color} strokeWidth={2} />
                </div>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={`${styles.statChange} ${s.positive ? styles.statChangeUp : styles.statChangeDown}`}>
                  {s.positive ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
                  {s.change}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Chart */}
        <div className={styles.chartCard} style={{ marginTop: "20px" }}>
          <h3 className={styles.chartTitle}>Traffic Overview</h3>
          <p className={styles.chartSubtitle}>Page views, affiliate clicks & saves — {period}</p>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={weeklyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                {[
                  { id: "gViews", color: "#818cf8" },
                  { id: "gClicks", color: "#fbbf24" },
                  { id: "gSaves", color: "#f472b6" },
                ].map((g) => (
                  <linearGradient key={g.id} id={g.id} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={g.color} stopOpacity={0.25} />
                    <stop offset="95%" stopColor={g.color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="day" tick={{ fill: "#505050", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#505050", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="views" name="Views" stroke="#818cf8" strokeWidth={2} fill="url(#gViews)" dot={false} />
              <Area type="monotone" dataKey="clicks" name="Clicks" stroke="#fbbf24" strokeWidth={2} fill="url(#gClicks)" dot={false} />
              <Area type="monotone" dataKey="saves" name="Saves" stroke="#f472b6" strokeWidth={2} fill="url(#gSaves)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom Row: Top Products + Platform Split */}
        <div className={`${styles.grid}`} style={{ gridTemplateColumns: "1fr 300px", marginTop: "20px" }}>

          {/* Top Products Table */}
          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>Top Converting Products</h3>
            <p className={styles.chartSubtitle}>Ranked by affiliate clicks this period</p>
            <table className={styles.table} style={{ marginTop: "8px" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Clicks</th>
                  <th>Conv. %</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((p, i) => (
                  <tr key={p.name}>
                    <td style={{ color: "#404040", fontWeight: 700 }}>0{i + 1}</td>
                    <td style={{ fontWeight: 500, color: "#e0e0e0" }}>{p.name}</td>
                    <td>{p.clicks.toLocaleString()}</td>
                    <td><span style={{ color: "#34d399", fontWeight: 600 }}>{p.conv}%</span></td>
                    <td>
                      <span style={{
                        fontSize: "0.72rem", fontWeight: 600, padding: "2px 6px", borderRadius: "4px",
                        color: p.change >= 0 ? "#34d399" : "#f87171",
                        background: p.change >= 0 ? "rgba(52,211,153,0.08)" : "rgba(248,113,113,0.08)",
                      }}>
                        {p.change >= 0 ? "↑" : "↓"} {Math.abs(p.change)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Platform Pie Chart */}
          <div className={styles.chartCard}>
            <h3 className={styles.chartTitle}>Platform Split</h3>
            <p className={styles.chartSubtitle}>Clicks by affiliate platform</p>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {platformData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<PieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
              {platformData.map((p) => (
                <div key={p.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, display: "inline-block" }} />
                    <span style={{ fontSize: "0.8rem", color: "#c0c0c0" }}>{p.name}</span>
                  </div>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, color: p.color }}>{p.value}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
