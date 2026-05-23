"use client";

import { useState } from "react";
import styles from "../admin.module.css";
import {
  CheckCircle,
  XCircle,
  Loader,
  Database,
  ExternalLink,
  RefreshCw,
} from "lucide-react";

export default function AdminSettings() {
  const [status, setStatus] = useState(null); // null | 'loading' | 'ok' | 'error'
  const [result, setResult] = useState(null);

  const testConnection = async () => {
    setStatus("loading");
    setResult(null);
    try {
      const res = await fetch("/api/supabase-test");
      const data = await res.json();
      setResult(data);
      setStatus(data.connected ? "ok" : "error");
    } catch (err) {
      setResult({ error: err.message });
      setStatus("error");
    }
  };

  const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  return (
    <>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>Settings & Connections</h1>
      </header>

      <div className={styles.scrollArea}>
        {/* Supabase Connection Card */}
        <div className={styles.card} style={{ maxWidth: "640px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "10px",
              background: "rgba(62,207,142,0.12)", display: "flex",
              alignItems: "center", justifyContent: "center",
            }}>
              <Database size={18} color="#3ecf8e" />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "#fff" }}>
                Supabase Database
              </h2>
              <p style={{ margin: 0, fontSize: "0.75rem", color: "#606060", marginTop: "2px" }}>
                Backend, Auth & Storage
              </p>
            </div>

            {/* Live status dot */}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "7px" }}>
              {status === "ok" && (
                <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "#34d399" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399", display: "inline-block", boxShadow: "0 0 6px #34d399" }} />
                  Connected
                </span>
              )}
              {status === "error" && (
                <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "#f87171" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f87171", display: "inline-block" }} />
                  Failed
                </span>
              )}
              {status === null && (
                <span style={{ fontSize: "0.78rem", color: "#606060" }}>Not tested</span>
              )}
            </div>
          </div>

          {/* Env Info */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "8px",
            padding: "14px 16px",
            marginBottom: "16px",
          }}>
            <div style={{ fontSize: "0.72rem", color: "#606060", marginBottom: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Environment Variables
            </div>
            {[
              { key: "NEXT_PUBLIC_SUPABASE_URL", present: true },
              { key: "NEXT_PUBLIC_SUPABASE_ANON_KEY", present: true },
            ].map((env) => (
              <div key={env.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                <code style={{ fontSize: "0.78rem", color: "#c0c0c0" }}>{env.key}</code>
                <span style={{
                  fontSize: "0.7rem", fontWeight: 600, padding: "2px 7px", borderRadius: "4px",
                  background: env.present ? "rgba(52,211,153,0.1)" : "rgba(248,113,113,0.1)",
                  color: env.present ? "#34d399" : "#f87171",
                }}>
                  {env.present ? "✓ Set" : "✗ Missing"}
                </span>
              </div>
            ))}
          </div>

          {/* Test Button */}
          <button
            onClick={testConnection}
            disabled={status === "loading"}
            className={`${styles.btn} ${status === "ok" ? styles.btnSuccess : styles.btnPrimary}`}
            style={{ width: "100%", justifyContent: "center", padding: "10px" }}
          >
            {status === "loading" ? (
              <><RefreshCw size={14} style={{ animation: "spin 1s linear infinite" }} /> Testing connection...</>
            ) : status === "ok" ? (
              <><CheckCircle size={14} /> Connection verified — Test again</>
            ) : (
              <><Database size={14} /> Test Supabase Connection</>
            )}
          </button>

          {/* Result */}
          {result && (
            <div style={{
              marginTop: "14px",
              padding: "14px 16px",
              borderRadius: "8px",
              background: status === "ok" ? "rgba(52,211,153,0.06)" : "rgba(248,113,113,0.06)",
              border: `1px solid ${status === "ok" ? "rgba(52,211,153,0.2)" : "rgba(248,113,113,0.2)"}`,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                {status === "ok" ? (
                  <CheckCircle size={16} color="#34d399" style={{ flexShrink: 0, marginTop: "1px" }} />
                ) : (
                  <XCircle size={16} color="#f87171" style={{ flexShrink: 0, marginTop: "1px" }} />
                )}
                <div>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: status === "ok" ? "#34d399" : "#f87171", fontWeight: 600 }}>
                    {status === "ok" ? "Success" : "Connection Failed"}
                  </p>
                  <p style={{ margin: "6px 0 0", fontSize: "0.78rem", color: "#c0c0c0", lineHeight: 1.55 }}>
                    {result.message || result.error}
                  </p>
                  {result.hint && (
                    <p style={{ margin: "6px 0 0", fontSize: "0.72rem", color: "#808080" }}>
                      💡 {result.hint}
                    </p>
                  )}
                  {result.project_url && (
                    <a
                      href={`${result.project_url.replace(".supabase.co", ".supabase.com")}/editor`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkPill}
                      style={{ marginTop: "10px", display: "inline-flex" }}
                    >
                      Open Supabase Dashboard <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Schema Instructions */}
        <div className={styles.card} style={{ maxWidth: "640px", marginTop: "16px" }}>
          <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#e0e0e0", margin: "0 0 12px" }}>
            📋 Setup Checklist
          </h3>
          {[
            { label: "Supabase project created", done: true },
            { label: ".env.local has SUPABASE_URL + ANON_KEY", done: true },
            { label: "Run supabase_schema.sql in SQL Editor", done: false, action: "Open SQL Editor", url: "https://supabase.com/dashboard/project/kgrxvlcvkwnerhmbacfi/sql/new" },
            { label: "Enable Row Level Security on tables", done: false },
            { label: "Test connection above", done: status === "ok" },
          ].map((step, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{
                  width: "18px", height: "18px", borderRadius: "50%",
                  background: step.done ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${step.done ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.1)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.65rem", color: step.done ? "#34d399" : "#404040",
                  flexShrink: 0,
                }}>
                  {step.done ? "✓" : i + 1}
                </span>
                <span style={{ fontSize: "0.82rem", color: step.done ? "#808080" : "#c0c0c0", textDecoration: step.done ? "line-through" : "none" }}>
                  {step.label}
                </span>
              </div>
              {step.action && !step.done && (
                <a href={step.url} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`} style={{ fontSize: "0.72rem", padding: "4px 10px" }}>
                  {step.action} <ExternalLink size={10} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
