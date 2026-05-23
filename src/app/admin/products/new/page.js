"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../admin.module.css";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Globe,
  Link2,
  Image,
  Tag,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Upload,
} from "lucide-react";

const CATEGORIES = [
  "Monitors", "Keyboards", "Mouse", "Headphones", "Webcams",
  "Lighting", "Desks", "Chairs", "Microphones", "Speakers",
  "Accessories", "Cable Management", "Storage", "Hubs & Docks",
];

export default function QuickAddProduct() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showSEO, setShowSEO] = useState(false);
  const [showAffiliates, setShowAffiliates] = useState(true);

  const [form, setForm] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    description: "",
    status: "draft",
    // Affiliates
    amazon_url: "",
    amazon_label: "Buy on Amazon",
    flipkart_url: "",
    flipkart_label: "Buy on Flipkart",
    brand_url: "",
    brand_label: "Brand Website",
    // SEO
    meta_title: "",
    meta_description: "",
    slug: "",
    og_image: "",
    tags: "",
    // Content
    short_desc: "",
    featured: false,
  });

  const handleChange = (field, value) => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      // Auto-generate slug from name
      if (field === "name") {
        updated.slug = value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        if (!prev.meta_title) updated.meta_title = value;
      }
      return updated;
    });
  };

  const handleSave = async (status = "draft") => {
    setSaving(true);
    try {
      // ── Supabase Insert (uncomment when ready) ─────────────────
      // const { createClient } = await import("@/utils/supabase/client");
      // const supabase = createClient();
      // const { data, error } = await supabase.from("products").insert([{
      //   name: form.name,
      //   category: form.category,
      //   brand: form.brand,
      //   price: parseFloat(form.price) || 0,
      //   description: form.description,
      //   short_description: form.short_desc,
      //   status: status,
      //   slug: form.slug,
      //   meta_title: form.meta_title || form.name,
      //   meta_description: form.meta_description,
      //   tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
      //   featured: form.featured,
      //   amazon_url: form.amazon_url,
      //   flipkart_url: form.flipkart_url,
      //   brand_url: form.brand_url,
      // }]).select();
      // if (error) throw error;

      // Mock save delay
      await new Promise((r) => setTimeout(r, 800));
      setSaved(true);
      setTimeout(() => {
        router.push("/admin/products");
      }, 1000);
    } catch (err) {
      alert("Error saving: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const inputProps = (field) => ({
    value: form[field],
    onChange: (e) => handleChange(field, e.target.value),
    className: styles.input,
  });

  return (
    <>
      {/* Top Bar */}
      <header className={styles.topBar}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link href="/admin/products" className={`${styles.btn} ${styles.btnGhost}`} style={{ padding: "6px" }}>
            <ArrowLeft size={16} />
          </Link>
          <h1 className={styles.pageTitle}>
            {form.name || "New Product"}
          </h1>
          {form.status === "draft" && (
            <span className={`${styles.badge} ${styles.badgeDraft}`}>Draft</span>
          )}
        </div>
        <div className={styles.topBarActions}>
          <button
            onClick={() => handleSave("draft")}
            disabled={saving}
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            {saving ? "Saving..." : "Save Draft"}
          </button>
          <button
            onClick={() => handleSave("published")}
            disabled={saving || !form.name}
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            <Save size={13} />
            {saved ? "Saved!" : saving ? "Publishing..." : "Publish"}
          </button>
        </div>
      </header>

      <div className={styles.scrollArea}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "20px", maxWidth: "1200px" }}>

          {/* ── LEFT COLUMN ─────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Core Info */}
            <div className={styles.card}>
              <div className={styles.formSectionTitle}>Core Information</div>
              <div className={styles.formGrid}>
                <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                  <label className={styles.label}>Product Name *</label>
                  <input
                    {...inputProps("name")}
                    placeholder="e.g. LG UltraGear 27&quot; 4K IPS Monitor"
                    style={{ fontSize: "1rem", fontWeight: 500 }}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Brand</label>
                  <input {...inputProps("brand")} placeholder="e.g. LG, Keychron, Logitech" />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    className={styles.select}
                  >
                    <option value="">Select category...</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                  <label className={styles.label}>Short Description (shown on cards)</label>
                  <input
                    {...inputProps("short_desc")}
                    placeholder="One-line description shown in product cards"
                  />
                </div>
                <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                  <label className={styles.label}>Full Description</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className={styles.textarea}
                    placeholder="Detailed description, key specs, why it's worth buying..."
                    style={{ minHeight: "120px" }}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Price (₹)</label>
                  <input
                    {...inputProps("price")}
                    type="number"
                    placeholder="e.g. 26999"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Tags (comma-separated)</label>
                  <input
                    {...inputProps("tags")}
                    placeholder="monitor, 4k, ips, gaming"
                  />
                </div>
              </div>
            </div>

            {/* Affiliate Links */}
            <div className={styles.card}>
              <button
                onClick={() => setShowAffiliates((v) => !v)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", color: "inherit", padding: 0,
                }}
              >
                <div className={styles.formSectionTitle} style={{ margin: 0, display: "flex", alignItems: "center", gap: "7px" }}>
                  <Link2 size={13} />
                  Affiliate Links
                </div>
                {showAffiliates ? <ChevronUp size={14} color="#606060" /> : <ChevronDown size={14} color="#606060" />}
              </button>

              {showAffiliates && (
                <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    { platform: "Amazon", urlField: "amazon_url", labelField: "amazon_label", color: "#FF9900", placeholder: "https://amazon.in/dp/..." },
                    { platform: "Flipkart", urlField: "flipkart_url", labelField: "flipkart_label", color: "#2874F0", placeholder: "https://flipkart.com/..." },
                    { platform: "Brand Site", urlField: "brand_url", labelField: "brand_label", color: "#6366f1", placeholder: "https://brand.com/product..." },
                  ].map((aff) => (
                    <div key={aff.platform} style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "10px",
                      padding: "14px",
                    }}>
                      <div style={{
                        display: "flex", alignItems: "center", gap: "8px",
                        marginBottom: "10px",
                        fontSize: "0.78rem", fontWeight: 600, color: aff.color,
                      }}>
                        <span style={{
                          width: "6px", height: "6px", borderRadius: "50%",
                          background: aff.color, display: "inline-block"
                        }} />
                        {aff.platform}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 180px", gap: "10px" }}>
                        <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                          <label className={styles.label}>Affiliate URL</label>
                          <input {...inputProps(aff.urlField)} placeholder={aff.placeholder} />
                        </div>
                        <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                          <label className={styles.label}>Button Label</label>
                          <input {...inputProps(aff.labelField)} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SEO Panel */}
            <div className={styles.card}>
              <button
                onClick={() => setShowSEO((v) => !v)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", color: "inherit", padding: 0,
                }}
              >
                <div className={styles.formSectionTitle} style={{ margin: 0, display: "flex", alignItems: "center", gap: "7px" }}>
                  <Globe size={13} />
                  SEO & Discovery
                </div>
                {showSEO ? <ChevronUp size={14} color="#606060" /> : <ChevronDown size={14} color="#606060" />}
              </button>

              {showSEO && (
                <div className={styles.formGrid} style={{ marginTop: "18px" }}>
                  <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                    <label className={styles.label}>URL Slug</label>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <span style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "8px 0 0 8px",
                        padding: "9px 12px",
                        fontSize: "0.78rem",
                        color: "#505050",
                        borderRight: "none",
                        whiteSpace: "nowrap",
                      }}>
                        /product/
                      </span>
                      <input
                        {...inputProps("slug")}
                        placeholder="auto-generated-from-name"
                        style={{ borderRadius: "0 8px 8px 0" }}
                      />
                    </div>
                  </div>
                  <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                    <label className={styles.label}>Meta Title</label>
                    <input {...inputProps("meta_title")} placeholder="SEO page title (60 chars max)" />
                    <span style={{ fontSize: "0.68rem", color: form.meta_title?.length > 60 ? "#f87171" : "#505050" }}>
                      {form.meta_title?.length || 0}/60 characters
                    </span>
                  </div>
                  <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                    <label className={styles.label}>Meta Description</label>
                    <textarea
                      value={form.meta_description}
                      onChange={(e) => handleChange("meta_description", e.target.value)}
                      className={styles.textarea}
                      placeholder="Brief description for search engines (160 chars max)"
                      style={{ minHeight: "70px" }}
                    />
                    <span style={{ fontSize: "0.68rem", color: form.meta_description?.length > 160 ? "#f87171" : "#505050" }}>
                      {form.meta_description?.length || 0}/160 characters
                    </span>
                  </div>
                  <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                    <label className={styles.label}>OG Image URL</label>
                    <input {...inputProps("og_image")} placeholder="https://... (social share image)" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN ─────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Status Card */}
            <div className={styles.card}>
              <div className={styles.formSectionTitle}>Publish Settings</div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Status</label>
                <select
                  value={form.status}
                  onChange={(e) => handleChange("status", e.target.value)}
                  className={styles.select}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "8px" }}>
                <div>
                  <div style={{ fontSize: "0.82rem", color: "#c0c0c0", fontWeight: 500 }}>Featured Product</div>
                  <div style={{ fontSize: "0.72rem", color: "#606060", marginTop: "2px" }}>Show on homepage hero</div>
                </div>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => handleChange("featured", e.target.checked)}
                  />
                  <span className={styles.toggleSlider} />
                </label>
              </div>
            </div>

            {/* Media Upload */}
            <div className={styles.card}>
              <div className={styles.formSectionTitle} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <Image size={13} />
                Product Image
              </div>
              <div
                className={styles.uploadZone}
                style={{ padding: "24px" }}
                onDragOver={(e) => e.preventDefault()}
              >
                <Upload size={20} color="#404040" style={{ margin: "0 auto 10px" }} />
                <p style={{ fontSize: "0.8rem", color: "#505050", margin: 0, textAlign: "center" }}>
                  Drop image here, or{" "}
                  <span style={{ color: "#818cf8", cursor: "pointer" }}>browse</span>
                </p>
                <p style={{ fontSize: "0.7rem", color: "#404040", margin: "6px 0 0", textAlign: "center" }}>
                  WebP recommended · Max 5MB
                </p>
              </div>
              <p style={{ fontSize: "0.68rem", color: "#404040", marginTop: "10px", textAlign: "center" }}>
                Or paste a Supabase Storage URL below
              </p>
              <input
                placeholder="https://supabase.co/storage/..."
                className={styles.input}
                style={{ marginTop: "8px" }}
              />
            </div>

            {/* AI Quick-fill hint */}
            <div className={styles.card} style={{ background: "rgba(99,102,241,0.06)", borderColor: "rgba(99,102,241,0.15)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Sparkles size={15} color="#818cf8" style={{ flexShrink: 0, marginTop: "1px" }} />
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#818cf8", marginBottom: "4px" }}>
                    AI Auto-Fill (Coming soon)
                  </div>
                  <p style={{ fontSize: "0.72rem", color: "#505070", lineHeight: 1.55, margin: 0 }}>
                    Paste an Amazon URL to automatically fill product details, specs, images, and SEO fields.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
