import React from 'react';
import { BookMarked, ChevronRight, ListFilter } from 'lucide-react';

export default function Sidebar({ modules, activeModuleId, setActiveModuleId, searchQuery }) {
  const filteredModules = modules.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="sidebar-nav">
      <div className="sidebar-title">
        <span>สารบัญเนื้อหา (12 บทสรุป)</span>
        <BookMarked size={16} />
      </div>

      {/* Quick Mobile Dropdown Selector */}
      <div className="mobile-topic-select-wrapper">
        <label className="mobile-topic-label">
          <ListFilter size={16} />
          <span>เลือกหัวข้ออ่านสรุป:</span>
        </label>
        <select
          className="mobile-topic-select"
          value={activeModuleId}
          onChange={(e) => setActiveModuleId(e.target.value)}
        >
          {modules.map((m) => (
            <option key={m.id} value={m.id}>
              {m.moduleNumber} - {m.title}
            </option>
          ))}
        </select>
      </div>

      {/* Topic List / Pills */}
      <ul className="topic-list">
        {filteredModules.map((m) => (
          <li key={m.id}>
            <button
              className={`topic-item-btn ${activeModuleId === m.id ? 'active' : ''}`}
              onClick={() => setActiveModuleId(m.id)}
            >
              <span className="topic-num">{m.moduleNumber}</span>
              <span className="topic-text">
                {m.title}
              </span>
              <ChevronRight size={14} opacity={0.6} />
            </button>
          </li>
        ))}

        {filteredModules.length === 0 && (
          <li style={{ padding: '16px', fontSize: '13px', color: '#64748b', textAlign: 'center' }}>
            ไม่พบหัวข้อที่ค้นหา "{searchQuery}"
          </li>
        )}
      </ul>
    </aside>
  );
}
