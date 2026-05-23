"use client";

import { useState } from "react";
import styles from "../admin.module.css";

export default function AdminHomepageBuilder() {
  const [blocks, setBlocks] = useState([
    { id: 1, type: 'hero', title: 'Main Hero Section', active: true },
    { id: 2, type: 'trust_badges', title: 'Trust Badges', active: true },
    { id: 3, type: 'trending_setups', title: 'Popular Setups Feed', active: true },
    { id: 4, type: 'categories', title: 'Shop by Categories', active: true },
    { id: 5, type: 'trending_products', title: 'Trending Products', active: true },
    { id: 6, type: 'spotlight', title: 'Creator Spotlight', active: false },
    { id: 7, type: 'newsletter', title: 'Newsletter CTA', active: true },
  ]);

  const toggleBlock = (id) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, active: !b.active } : b));
  };

  return (
    <>
      <header className={styles.topBar}>
        <div>
          <h1 className={styles.pageTitle}>Homepage Builder</h1>
          <p style={{ fontSize: '0.75rem', color: '#a0a0a0', marginTop: '2px' }}>Drag and drop blocks to restructure the homepage</p>
        </div>
        <div className={styles.topBarActions}>
          <button className={styles.btn + " " + styles.btnSecondary}>Preview Changes</button>
          <button className={styles.btn + " " + styles.btnPrimary}>Publish Live</button>
        </div>
      </header>

      <div className={styles.scrollArea}>
        <div className={styles.grid} style={{ gridTemplateColumns: '1fr 300px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {blocks.map((block, index) => (
              <div 
                key={block.id} 
                className={styles.card} 
                style={{ 
                  padding: '16px 24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  opacity: block.active ? 1 : 0.5,
                  cursor: 'grab',
                  borderLeft: block.active ? '4px solid #10b981' : '4px solid #4b5563'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" style={{ cursor: 'grab' }}><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>{block.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#a0a0a0', textTransform: 'uppercase', marginTop: '2px' }}>{block.type}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <button className={styles.btn + " " + styles.btnSecondary} style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
                    Configure
                  </button>
                  {/* Toggle Switch Mock */}
                  <div 
                    onClick={() => toggleBlock(block.id)}
                    style={{ 
                      width: '40px', height: '22px', borderRadius: '12px', 
                      background: block.active ? '#10b981' : 'rgba(255,255,255,0.1)', 
                      position: 'relative', cursor: 'pointer', transition: 'background 0.2s' 
                    }}
                  >
                    <div style={{ 
                      width: '18px', height: '18px', borderRadius: '50%', background: '#fff', 
                      position: 'absolute', top: '2px', left: block.active ? '20px' : '2px', 
                      transition: 'left 0.2s' 
                    }} />
                  </div>
                </div>
              </div>
            ))}
            
            <button className={styles.card} style={{ borderStyle: 'dashed', textAlign: 'center', cursor: 'pointer', background: 'transparent' }}>
              <span style={{ color: '#a0a0a0', fontWeight: 500 }}>+ Add New Block</span>
            </button>
          </div>

          <div className={styles.card} style={{ height: 'fit-content' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Block Library</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Hero Banner', 'Featured Setup', 'Product Grid', 'Custom HTML', 'Creator Row', 'Categories Grid'].map(type => (
                <div key={type} style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', fontSize: '0.8rem', color: '#a0a0a0', cursor: 'grab', border: '1px solid rgba(255,255,255,0.05)' }}>
                  ::: {type}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
