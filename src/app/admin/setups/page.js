"use client";

import { useState } from "react";
import styles from "../admin.module.css";
import Link from "next/link";

export default function AdminSetups() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>Setups & Inspiration</h1>
        <div className={styles.topBarActions}>
          <Link href="/admin/setups/new" className={styles.btn + " " + styles.btnPrimary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Create Setup
          </Link>
        </div>
      </header>

      <div className={styles.scrollArea}>
        
        {/* Content Pipeline Tabs */}
        <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '24px' }}>
          {[
            { id: 'all', label: 'All Published' },
            { id: 'drafts', label: 'Drafts (3)' },
            { id: 'scheduled', label: 'Scheduled (1)' },
            { id: 'ideas', label: 'Ideas Board' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0 0 12px 0',
                color: activeTab === tab.id ? '#fff' : '#666',
                fontWeight: activeTab === tab.id ? 600 : 500,
                borderBottom: activeTab === tab.id ? '2px solid #fff' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.grid + " " + styles.gridCols3}>
          {[
            { id: 1, title: 'Minimal Desk Setup for Productivity', views: '23.4K', saves: 1240, status: 'Published', img: '/images/setups/minimal.jpg' },
            { id: 2, title: 'Gaming Battlestation RGB', views: '45.2K', saves: 3210, status: 'Published', img: '/images/setups/gaming.jpg' },
            { id: 3, title: 'Study & Productivity Cozy', views: '18.7K', saves: 890, status: 'Published', img: '/images/setups/cozy.jpg' },
            { id: 4, title: 'Content Creator Studio', views: '0', saves: 0, status: 'Draft', img: '/images/setups/creator.jpg' },
          ].map((setup) => (
            <div key={setup.id} className={styles.card} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '160px', background: 'rgba(255,255,255,0.05)', position: 'relative' }}>
                {/* Image Placeholder */}
                <span style={{ 
                  position: 'absolute', top: '12px', right: '12px',
                  padding: '4px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 600,
                  background: setup.status === 'Published' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(245, 158, 11, 0.9)',
                  color: '#fff', backdropFilter: 'blur(4px)'
                }}>
                  {setup.status}
                </span>
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '8px', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{setup.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#a0a0a0' }}>
                  <span>👁 {setup.views} views</span>
                  <span>♥ {setup.saves} saves</span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '12px 16px', display: 'flex', gap: '8px' }}>
                <button className={styles.btn + " " + styles.btnSecondary} style={{ flex: 1, justifyContent: 'center', fontSize: '0.75rem', padding: '6px' }}>Edit Builder</button>
                <button className={styles.btn + " " + styles.btnSecondary} style={{ flex: 1, justifyContent: 'center', fontSize: '0.75rem', padding: '6px' }}>Analytics</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
