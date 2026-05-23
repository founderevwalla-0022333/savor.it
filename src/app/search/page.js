"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import BottomNav from "@/components/BottomNav/BottomNav";
import { setups, products } from "@/data";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredSetups = query.length >= 2
    ? setups.filter((s) =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const filteredProducts = query.length >= 2
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container" style={{ paddingTop: "24px", minHeight: "80vh" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px 20px",
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-md)",
            marginBottom: "24px",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search setups, products, categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              style={{
                flex: 1,
                fontSize: "1rem",
                color: "var(--text-primary)",
                background: "none",
                border: "none",
                outline: "none",
              }}
            />
            {query && (
              <button onClick={() => setQuery("")} style={{ color: "var(--text-tertiary)" }}>✕</button>
            )}
          </div>

          {query.length < 2 && (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <p style={{ color: "var(--text-tertiary)", fontSize: "0.88rem" }}>
                Type at least 2 characters to search
              </p>
            </div>
          )}

          {filteredSetups.length > 0 && (
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "12px", color: "var(--text-secondary)" }}>
                Setups ({filteredSetups.length})
              </h3>
              {filteredSetups.map((s) => (
                <Link
                  key={s.id}
                  href={`/setup/${s.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px",
                    borderRadius: "var(--radius-sm)",
                    marginBottom: "4px",
                    transition: "background 0.15s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-card)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <img src={s.image} alt={s.title} style={{ width: 48, height: 36, borderRadius: 6, objectFit: "cover" }} />
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{s.title}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>{s.tags.join(", ")}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "12px", color: "var(--text-secondary)" }}>
                Products ({filteredProducts.length})
              </h3>
              {filteredProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px",
                    borderRadius: "var(--radius-sm)",
                    marginBottom: "4px",
                    transition: "background 0.15s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-card)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <img src={p.image} alt={p.name} style={{ width: 40, height: 40, borderRadius: 6, objectFit: "cover" }} />
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{p.name}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}>{p.category}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {query.length >= 2 && filteredSetups.length === 0 && filteredProducts.length === 0 && (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "12px" }}>🔍</span>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>No results found</h3>
              <p style={{ color: "var(--text-tertiary)", fontSize: "0.85rem" }}>
                Try different keywords or browse categories
              </p>
            </div>
          )}
        </div>
      </main>
      <BottomNav />
    </>
  );
}
