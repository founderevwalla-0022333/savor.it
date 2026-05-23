"use client";

import { useState } from "react";
import styles from "../admin.module.css";
import { Plus, Tag, Edit, Trash2, X, Save } from "lucide-react";

const INIT_CATEGORIES = [
  { id: 1, name: "Monitors", slug: "monitors", emoji: "🖥️", count: 82 },
  { id: 2, name: "Keyboards", slug: "keyboards", emoji: "⌨️", count: 124 },
  { id: 3, name: "Mouse", slug: "mouse", emoji: "🖱️", count: 67 },
  { id: 4, name: "Lighting", slug: "lighting", emoji: "💡", count: 91 },
  { id: 5, name: "Desks", slug: "desks", emoji: "🪑", count: 45 },
  { id: 6, name: "Accessories", slug: "accessories", emoji: "🔌", count: 110 },
];

const INIT_MOODS = [
  { id: 1, name: "Minimal", slug: "minimal", count: 48, color: "#818cf8" },
  { id: 2, name: "Dark Mode", slug: "dark-mode", count: 72, color: "#374151" },
  { id: 3, name: "RGB Gaming", slug: "rgb-gaming", count: 91, color: "#ef4444" },
  { id: 4, name: "Cozy", slug: "cozy", count: 38, color: "#f59e0b" },
  { id: 5, name: "White & Clean", slug: "white-clean", count: 55, color: "#e0e0e0" },
  { id: 6, name: "Studio Pro", slug: "studio-pro", count: 27, color: "#34d399" },
];

const INIT_TAGS = [
  "work-from-home", "gaming", "streaming", "photography", "coding",
  "music-production", "minimalist", "budget", "premium", "standing-desk",
  "ergonomic", "dual-monitor", "ultrawide",
];

export default function AdminCategories() {
  const [activeTab, setActiveTab] = useState("categories");
  const [categories, setCategories] = useState(INIT_CATEGORIES);
  const [moods, setMoods] = useState(INIT_MOODS);
  const [tags, setTags] = useState(INIT_TAGS);
  const [showModal, setShowModal] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [form, setForm] = useState({ name: "", slug: "", emoji: "", color: "#6366f1" });

  const handleFormChange = (field, value) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "name") {
        updated.slug = value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      }
      return updated;
    });
  };

  const handleSave = () => {
    if (!form.name) return;
    if (activeTab === "categories") {
      setCategories((prev) => [...prev, { id: Date.now(), ...form, count: 0 }]);
    } else if (activeTab === "moods") {
      setMoods((prev) => [...prev, { id: Date.now(), ...form, count: 0 }]);
    }
    setShowModal(false);
    setForm({ name: "", slug: "", emoji: "", color: "#6366f1" });
    // Supabase: await supabase.from('categories').insert([{ name, slug, ... }]);
  };

  const handleDeleteCategory = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };
  const handleDeleteMood = (id) => {
    setMoods((prev) => prev.filter((m) => m.id !== id));
  };
  const handleAddTag = () => {
    const t = newTag.trim().toLowerCase().replace(/\s+/g, "-");
    if (t && !tags.includes(t)) {
      setTags((prev) => [...prev, t]);
      setNewTag("");
    }
  };
  const handleDeleteTag = (tag) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const tabs = [
    { id: "categories", label: "Primary Categories" },
    { id: "moods", label: "Moods & Aesthetics" },
    { id: "tags", label: "Discovery Tags" },
  ];

  return (
    <>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>Taxonomy & Tags</h1>
        <div className={styles.topBarActions}>
          {activeTab !== "tags" && (
            <button
              onClick={() => setShowModal(true)}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              <Plus size={14} strokeWidth={2.5} />
              New {activeTab === "categories" ? "Category" : "Mood"}
            </button>
          )}
        </div>
      </header>

      <div className={styles.scrollArea}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Tab */}
        {activeTab === "categories" && (
          <div className={styles.card} style={{ padding: 0, overflow: "hidden" }}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Slug</th>
                  <th>Products</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.id}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "1.2rem" }}>{cat.emoji}</span>
                        <span style={{ fontWeight: 600, color: "#e0e0e0" }}>{cat.name}</span>
                      </div>
                    </td>
                    <td>
                      <span className={styles.linkPill}>/{cat.slug}</span>
                    </td>
                    <td>
                      <span style={{ color: "#c0c0c0" }}>{cat.count} products</span>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "4px" }}>
                        <button className={`${styles.btn} ${styles.btnGhost}`} style={{ padding: "5px" }}>
                          <Edit size={13} />
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(cat.id)}
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

        {/* Moods Tab */}
        {activeTab === "moods" && (
          <div className={`${styles.grid} ${styles.gridCols3}`}>
            {moods.map((mood) => (
              <div key={mood.id} className={styles.card} style={{
                borderColor: mood.color + "30",
                background: mood.color + "08",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    background: mood.color + "20",
                    color: mood.color,
                    border: `1px solid ${mood.color}40`,
                  }}>
                    {mood.name}
                  </span>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <button className={`${styles.btn} ${styles.btnGhost}`} style={{ padding: "4px" }}>
                      <Edit size={12} />
                    </button>
                    <button
                      onClick={() => handleDeleteMood(mood.id)}
                      className={`${styles.btn} ${styles.btnGhost}`}
                      style={{ padding: "4px", color: "#804040" }}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#606060" }}>
                  /{mood.slug} · {mood.count} setups
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tags Tab */}
        {activeTab === "tags" && (
          <div className={styles.card}>
            <p style={{ fontSize: "0.8rem", color: "#606060", marginBottom: "18px" }}>
              Tags help users discover setups and products through search and filtering.
            </p>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              <input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                placeholder="Add new tag (e.g. minimalist, dual-monitor)"
                className={styles.input}
                style={{ flex: 1 }}
              />
              <button onClick={handleAddTag} className={`${styles.btn} ${styles.btnPrimary}`}>
                <Plus size={13} /> Add Tag
              </button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {tags.map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "5px 10px",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: "0.78rem",
                    color: "#c0c0c0",
                  }}
                >
                  <Tag size={10} />
                  #{tag}
                  <button
                    onClick={() => handleDeleteTag(tag)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#505050", padding: 0, display: "flex" }}
                  >
                    <X size={11} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>
                New {activeTab === "categories" ? "Category" : "Mood / Aesthetic"}
              </h2>
              <button onClick={() => setShowModal(false)} className={`${styles.btn} ${styles.btnGhost}`} style={{ padding: "6px" }}>
                <X size={16} />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGrid}>
                <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                  <label className={styles.label}>Name *</label>
                  <input
                    value={form.name}
                    onChange={(e) => handleFormChange("name", e.target.value)}
                    className={styles.input}
                    placeholder={activeTab === "categories" ? "e.g. Monitors" : "e.g. Minimal"}
                    autoFocus
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Slug</label>
                  <input
                    value={form.slug}
                    onChange={(e) => handleFormChange("slug", e.target.value)}
                    className={styles.input}
                    placeholder="auto-generated"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>{activeTab === "categories" ? "Emoji" : "Color"}</label>
                  {activeTab === "categories" ? (
                    <input
                      value={form.emoji}
                      onChange={(e) => handleFormChange("emoji", e.target.value)}
                      className={styles.input}
                      placeholder="🖥️"
                    />
                  ) : (
                    <input
                      type="color"
                      value={form.color}
                      onChange={(e) => handleFormChange("color", e.target.value)}
                      style={{ height: "40px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", cursor: "pointer", width: "100%" }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button onClick={() => setShowModal(false)} className={`${styles.btn} ${styles.btnSecondary}`}>
                Cancel
              </button>
              <button onClick={handleSave} className={`${styles.btn} ${styles.btnPrimary}`}>
                <Save size={13} /> Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
