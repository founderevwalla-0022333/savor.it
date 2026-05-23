"use client";

import { useState, useRef } from "react";
import styles from "../admin.module.css";
import {
  Upload,
  Search,
  Image as ImageIcon,
  Trash2,
  Copy,
  Check,
  Grid,
  List,
  Filter,
} from "lucide-react";

const MOCK_MEDIA = [
  { id: 1, name: "minimal-desk-setup.webp", size: "1.2 MB", dims: "1920×1080", type: "image", url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80" },
  { id: 2, name: "keychron-k2-top.webp", size: "856 KB", dims: "1440×960", type: "image", url: "https://images.unsplash.com/photo-1588900000449-59cfe68cde8b?w=400&q=80" },
  { id: 3, name: "lg-monitor-front.webp", size: "2.1 MB", dims: "2560×1440", type: "image", url: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80" },
  { id: 4, name: "setup-wide-shot.webp", size: "3.4 MB", dims: "4096×2304", type: "image", url: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&q=80" },
  { id: 5, name: "mx-master-3s.webp", size: "720 KB", dims: "1200×800", type: "image", url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80" },
  { id: 6, name: "benq-screenbar.webp", size: "1.05 MB", dims: "1600×900", type: "image", url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80" },
];

export default function AdminMedia() {
  const [media, setMedia] = useState(MOCK_MEDIA);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const filtered = media.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopyUrl = (item) => {
    navigator.clipboard.writeText(item.url);
    setCopied(item.id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleDelete = (id) => {
    setMedia((prev) => prev.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
    // Supabase: await supabase.storage.from('media').remove([path]);
  };

  const handleUpload = async (files) => {
    if (!files.length) return;
    setUploading(true);
    // Supabase upload:
    // for (const file of files) {
    //   const { data, error } = await supabase.storage.from('media').upload(file.name, file);
    //   if (!error) { // fetch and add to list }
    // }
    await new Promise((r) => setTimeout(r, 1200));
    // Mock add
    const newItems = Array.from(files).map((f, i) => ({
      id: Date.now() + i,
      name: f.name,
      size: (f.size / 1024 / 1024).toFixed(1) + " MB",
      dims: "—",
      type: "image",
      url: URL.createObjectURL(f),
    }));
    setMedia((prev) => [...newItems, ...prev]);
    setUploading(false);
  };

  return (
    <>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>
          Media Library
          <span style={{ marginLeft: "8px", fontSize: "0.75rem", color: "#606060", fontWeight: 400 }}>
            ({filtered.length} files)
          </span>
        </h1>
        <div className={styles.topBarActions}>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => handleUpload(e.target.files)}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className={`${styles.btn} ${styles.btnPrimary}`}
            disabled={uploading}
          >
            <Upload size={13} />
            {uploading ? "Uploading..." : "Upload Files"}
          </button>
        </div>
      </header>

      <div className={styles.scrollArea}>
        {/* Toolbar */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px", alignItems: "center" }}>
          <div className={styles.searchBar} style={{ flex: 1, maxWidth: "380px" }}>
            <Search size={14} />
            <input
              type="text"
              placeholder="Search files..."
              className={styles.input}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ background: "rgba(255,255,255,0.03)", border: "none" }}
            />
          </div>
          <select className={styles.select} style={{ width: "130px" }}>
            <option>All Types</option>
            <option>Images</option>
            <option>Videos</option>
          </select>
          <div style={{ display: "flex", gap: "4px" }}>
            <button
              onClick={() => setViewMode("grid")}
              className={`${styles.btn} ${viewMode === "grid" ? styles.btnSecondary : styles.btnGhost}`}
              style={{ padding: "7px 10px" }}
            >
              <Grid size={14} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`${styles.btn} ${viewMode === "list" ? styles.btnSecondary : styles.btnGhost}`}
              style={{ padding: "7px 10px" }}
            >
              <List size={14} />
            </button>
          </div>
        </div>

        {/* Drop Zone */}
        <div
          className={`${styles.uploadZone} ${dragging ? styles.uploadZoneDragging : ""}`}
          style={{ marginBottom: "20px", padding: "20px" }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            handleUpload(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
        >
          <p style={{ fontSize: "0.8rem", color: "#505050", margin: 0, display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
            <Upload size={14} />
            Drag & drop images here, or click to browse · WebP recommended · Max 10MB
          </p>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className={`${styles.grid} ${styles.gridCols4}`}>
            {filtered.map((item) => (
              <div
                key={item.id}
                className={styles.card}
                style={{
                  padding: 0,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: selected?.id === item.id ? "1px solid rgba(99,102,241,0.5)" : undefined,
                }}
                onClick={() => setSelected(selected?.id === item.id ? null : item)}
              >
                <div style={{ height: "140px", background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                  <img
                    src={item.url}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
                <div style={{ padding: "10px 12px" }}>
                  <div style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#d0d0d0",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: "0.68rem", color: "#505050", marginTop: "2px" }}>
                    {item.size} · {item.dims}
                  </div>
                  <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleCopyUrl(item); }}
                      className={`${styles.btn} ${styles.btnGhost}`}
                      style={{ padding: "4px 6px", fontSize: "0.68rem", flex: 1 }}
                    >
                      {copied === item.id ? <Check size={11} color="#34d399" /> : <Copy size={11} />}
                      {copied === item.id ? "Copied!" : "URL"}
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                      className={`${styles.btn} ${styles.btnGhost}`}
                      style={{ padding: "4px 6px", color: "#804040" }}
                    >
                      <Trash2 size={11} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className={styles.card} style={{ padding: 0, overflow: "hidden" }}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "50px" }}>Preview</th>
                  <th>File Name</th>
                  <th>Dimensions</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div style={{ width: "40px", height: "40px", borderRadius: "6px", overflow: "hidden", background: "rgba(255,255,255,0.05)" }}>
                        <img src={item.url} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    </td>
                    <td style={{ fontWeight: 500, color: "#e0e0e0", fontSize: "0.82rem" }}>{item.name}</td>
                    <td style={{ fontSize: "0.78rem" }}>{item.dims}</td>
                    <td style={{ fontSize: "0.78rem" }}>{item.size}</td>
                    <td>
                      <div style={{ display: "flex", gap: "4px" }}>
                        <button
                          onClick={() => handleCopyUrl(item)}
                          className={`${styles.btn} ${styles.btnSecondary}`}
                          style={{ padding: "5px 8px", fontSize: "0.72rem" }}
                        >
                          {copied === item.id ? <Check size={11} color="#34d399" /> : <Copy size={11} />}
                          Copy URL
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className={`${styles.btn} ${styles.btnGhost}`}
                          style={{ padding: "5px", color: "#804040" }}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
