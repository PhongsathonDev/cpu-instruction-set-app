import React from 'react';
import { BookOpen, FileText, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function SummaryViewer({ modules, activeModuleId, searchQuery }) {
  const displayModules = searchQuery
    ? modules.filter(m => 
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : modules.filter(m => m.id === activeModuleId);

  // Improved Markdown parser for headings, code blocks, bold, lists, and inline tags
  const renderMarkdown = (content) => {
    // Separate code blocks from regular text
    const codeBlockRegex = /```([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', text: content.substring(lastIndex, match.index) });
      }
      parts.push({ type: 'code', text: match[1].trim() });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < content.length) {
      parts.push({ type: 'text', text: content.substring(lastIndex) });
    }

    return parts.map((part, pIdx) => {
      if (part.type === 'code') {
        return (
          <div key={pIdx} className="code-block">
            <pre>{part.text}</pre>
          </div>
        );
      }

      // Process lines in text blocks
      const lines = part.text.split('\n');
      const elements = [];
      let currentList = null;

      lines.forEach((line, lIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          if (currentList) {
            elements.push(currentList);
            currentList = null;
          }
          return;
        }

        // Heading 3
        if (trimmed.startsWith('### ')) {
          if (currentList) { elements.push(currentList); currentList = null; }
          elements.push(
            <h3 key={`${pIdx}-${lIdx}`}>
              {trimmed.replace('### ', '')}
            </h3>
          );
          return;
        }

        // Heading 4
        if (trimmed.startsWith('#### ')) {
          if (currentList) { elements.push(currentList); currentList = null; }
          elements.push(
            <h4 key={`${pIdx}-${lIdx}`} style={{ color: '#4f46e5', margin: '20px 0 10px 0', fontSize: '15px', fontWeight: '700' }}>
              {trimmed.replace('#### ', '')}
            </h4>
          );
          return;
        }

        // HR
        if (trimmed === '---') {
          if (currentList) { elements.push(currentList); currentList = null; }
          elements.push(<hr key={`${pIdx}-${lIdx}`} style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />);
          return;
        }

        // Unordered list item
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const itemText = trimmed.replace(/^[-*]\s+/, '');
          if (!currentList || currentList.type !== 'ul') {
            if (currentList) elements.push(currentList);
            currentList = { type: 'ul', items: [itemText] };
          } else {
            currentList.items.push(itemText);
          }
          return;
        }

        // Ordered list item
        const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (olMatch) {
          const itemNum = parseInt(olMatch[1], 10);
          const itemText = olMatch[2];
          if (!currentList || currentList.type !== 'ol') {
            if (currentList) elements.push(currentList);
            currentList = { type: 'ol', start: itemNum, items: [{ num: itemNum, text: itemText }] };
          } else {
            currentList.items.push({ num: itemNum, text: itemText });
          }
          return;
        }

        // Paragraph
        if (currentList) { elements.push(currentList); currentList = null; }
        elements.push(
          <p key={`${pIdx}-${lIdx}`} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }} />
        );
      });

      if (currentList) {
        elements.push(currentList);
      }

      return elements.map((el, eIdx) => {
        if (el.type === 'ul') {
          return (
            <ul key={`list-${eIdx}`}>
              {el.items.map((it, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(it) }} />
              ))}
            </ul>
          );
        }
        if (el.type === 'ol') {
          return (
            <ol key={`list-${eIdx}`} start={el.start}>
              {el.items.map((it, i) => (
                <li key={i} value={it.num} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(it.text) }} />
              ))}
            </ol>
          );
        }
        return el;
      });
    });
  };

  const formatInlineMarkdown = (str) => {
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code style="background: #e0e7ff; color: #3730a3; padding: 2px 6px; border-radius: 4px; font-family: JetBrains Mono; font-size: 13px;">$1</code>');
  };

  return (
    <main className="summary-viewer">
      {displayModules.map((module) => (
        <article key={module.id} className="content-card">
          <div className="card-header">
            <div className="card-header-left">
              <span className="module-badge">MODULE {module.moduleNumber}</span>
              <h2 className="card-title">{module.title}</h2>
            </div>
            <span className="page-ref-badge">{module.pageRef}</span>
          </div>

          <div className="callout callout-info" style={{ marginBottom: '24px' }}>
            <strong>สรุปย่อ:</strong> {module.summary}
          </div>

          <div className="prose">
            {renderMarkdown(module.content)}
          </div>
        </article>
      ))}

      {displayModules.length === 0 && (
        <div className="content-card" style={{ textAlign: 'center', padding: '48px 24px' }}>
          <AlertTriangle size={48} color="#f59e0b" style={{ margin: '0 auto 16px auto' }} />
          <h3>ไม่พบข้อมูลที่ตรงกับคำค้นหา "{searchQuery}"</h3>
          <p style={{ color: '#64748b', marginTop: '8px' }}>ลองเปลี่ยนคำค้นหา หรือกดปุ่มรีเซ็ตการค้นหาที่แถบด้านบน</p>
        </div>
      )}
    </main>
  );
}
