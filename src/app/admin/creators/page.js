"use client";

import styles from "../admin.module.css";

export default function AdminCreators() {
  return (
    <>
      <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>Creators Directory</h1>
        <div className={styles.topBarActions}>
          <button className={styles.btn + " " + styles.btnPrimary}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add Creator
          </button>
        </div>
      </header>

      <div className={styles.scrollArea}>
        
        <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#a0a0a0' }}>
                <th style={{ padding: '16px 24px', fontWeight: 500 }}>Creator</th>
                <th style={{ padding: '16px 24px', fontWeight: 500 }}>Setups Published</th>
                <th style={{ padding: '16px 24px', fontWeight: 500 }}>Total Views</th>
                <th style={{ padding: '16px 24px', fontWeight: 500 }}>Status</th>
                <th style={{ padding: '16px 24px', fontWeight: 500 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Aarav Mehta', setups: 12, views: '154K', status: 'Verified' },
                { name: 'Ravi Kumar', setups: 5, views: '45K', status: 'Pending' },
                { name: 'Priya Sharma', setups: 8, views: '89K', status: 'Verified' },
              ].map((creator, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', transition: 'background 0.2s', ':hover': { background: 'rgba(255,255,255,0.02)' } }}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#fff' }}>
                        {creator.name.charAt(0)}
                      </div>
                      <div style={{ fontWeight: 600, color: '#fff' }}>{creator.name}</div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', color: '#a0a0a0' }}>{creator.setups} setups</td>
                  <td style={{ padding: '16px 24px', color: '#a0a0a0' }}>{creator.views}</td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      fontSize: '0.7rem', 
                      fontWeight: 600,
                      background: creator.status === 'Verified' ? 'rgba(56, 189, 248, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                      color: creator.status === 'Verified' ? '#38bdf8' : '#f59e0b'
                    }}>
                      {creator.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <button style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}
