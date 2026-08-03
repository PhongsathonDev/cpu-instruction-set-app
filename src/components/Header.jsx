import React from 'react';
import { BookOpen, Cpu, Calculator, HelpCircle, Layers, Search, Sparkles, Sliders } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, searchQuery, setSearchQuery, totalQuestions }) {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="brand-logo">
          <div className="logo-badge">CS 3106</div>
          <div className="title-group">
            <h1>บทที่ 3: ชุดคำสั่งและวัฏจักรคำสั่งของ CPU</h1>
            <p>Computer System Organization | เอกสารทบทวนสอบแบบละเอียด 100%</p>
          </div>
        </div>

        <div className="header-search">
          <div className="search-input-wrapper">
            <Search size={16} color="#64748b" />
            <input
              type="text"
              placeholder="ค้นหาคำศัพท์ (เช่น OAC, OpCode, Array)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ fontSize: '12px', color: '#94a3b8', background: '#cbd5e1', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="nav-tabs-wrapper">
        <nav className="nav-tabs">
          <button
            className={`tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
            onClick={() => setActiveTab('summary')}
          >
            <BookOpen size={18} />
            สรุปเนื้อหา 12 บท
          </button>

          <button
            className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
            onClick={() => setActiveTab('quiz')}
          >
            <HelpCircle size={18} />
            คลังข้อสอบเตรียมสอบ
            <span className="tab-badge" style={{ background: '#dcfce7', color: '#15803d' }}>{totalQuestions} ข้อ</span>
          </button>

          <button
            className={`tab-btn ${activeTab === 'cycle-sim' ? 'active' : ''}`}
            onClick={() => setActiveTab('cycle-sim')}
          >
            <Cpu size={18} />
            จำลอง CPU Cycle
            <span className="tab-badge">Interactive</span>
          </button>

          <button
            className={`tab-btn ${activeTab === 'address-calc' ? 'active' : ''}`}
            onClick={() => setActiveTab('address-calc')}
          >
            <Calculator size={18} />
            คำนวณ 7 Addressing Modes
          </button>

          <button
            className={`tab-btn ${activeTab === 'format-tool' ? 'active' : ''}`}
            onClick={() => setActiveTab('format-tool')}
          >
            <Sliders size={18} />
            เปรียบเทียบ 1-4 Address Formats
          </button>

          <button
            className={`tab-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
            onClick={() => setActiveTab('flashcards')}
          >
            <Layers size={18} />
            Flashcards
          </button>
        </nav>
      </div>
    </header>
  );
}
