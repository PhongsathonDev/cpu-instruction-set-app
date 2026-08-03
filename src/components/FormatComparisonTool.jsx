import React, { useState } from 'react';
import { Sliders, Layers, ArrowRight, Check, X } from 'lucide-react';

export default function FormatComparisonTool() {
  const [selectedFormat, setSelectedFormat] = useState('3-address');

  const formatData = {
    '4-address': {
      title: "4-Address Instruction (คำสั่งแบบ 4 ที่อยู่)",
      structure: "[ OpCode | Dest Addr | Src1 Addr | Src2 Addr | Next Instr Addr ]",
      example: "ADD R1, R2, R3, LABEL_NEXT",
      meaning: "นำค่า R2 + R3 ไปเก็บใน R1 แล้วกระโดดไปทำคำสั่งที่ LABEL_NEXT ต่อ",
      linesCount: 1,
      instrSizeBytes: "8 - 12 Bytes (ใหญ่มาก)",
      pros: ["ชัดเจน ไม่ต้องพึ่งพาระบบ PC เพิ่มค่าอัตโนมัติในการหาคำสั่งถัดไป"],
      cons: ["ขนาดคำสั่งใหญ่มาก เปลืองพื้นที่ RAM และประมวลผลซับซ้อน ไม่นิยมใน CPU สมัยใหม่"]
    },
    '3-address': {
      title: "3-Address Instruction (คำสั่งแบบ 3 ที่อยู่)",
      structure: "[ OpCode | Dest Addr | Src1 Addr | Src2 Addr ]",
      example: "ADD R1, R2, R3",
      meaning: "นำค่า R2 + R3 ไปเก็บใน R1 ส่วนคำสั่งถัดไปใช้ PC เพิ่มค่าขึ้นอัตโนมัติ (PC+1)",
      linesCount: 1,
      instrSizeBytes: "4 - 6 Bytes (ปานกลาง)",
      pros: ["ยืดหยุ่นมาก สามารถรับข้อมูล 2 ตัวแล้วเก็บผลในสถานที่ 3 ได้เลย ทำให้โค้ดสั้นอ่านง่าย"],
      cons: ["คำสั่งยังคงมีขนาดค่อนข้างใหญ่หากระบุที่อยู่ RAM"]
    },
    '2-address': {
      title: "2-Address Instruction (คำสั่งแบบ 2 ที่อยู่)",
      structure: "[ OpCode | Dest/Src1 Addr | Src2 Addr ]",
      example: "ADD R1, R2",
      meaning: "นำค่า R2 บวกกับ R1 แล้วเขียนผลลัพธ์ทับกลับไปใน R1 (R1 = R1 + R2)",
      linesCount: "1 - 2 (หากต้องย้ายค่าเดิม)",
      instrSizeBytes: "3 - 4 Bytes (เล็ก)",
      pros: ["คำสั่งขนาดเล็กลง ประหยัดพื้นที่หน่วยความจำ"],
      cons: ["Operand ตัวแรกจะถูกเขียนทับด้วยผลลัพธ์ หากต้องการใช้ค่าเดิม ต้องใช้คำสั่ง MOVE คัดลอกไว้ก่อน"]
    },
    '1-address': {
      title: "1-Address Instruction (คำสั่งแบบ 1 ที่อยู่ - Accumulator)",
      structure: "[ OpCode | Src Addr ]",
      example: "LOAD B\nADD C\nSTORE A",
      meaning: "อ้างอิงรีจิสเตอร์พิเศษ Accumulator (AC) โดยปริยาย (AC = AC + M[C])",
      linesCount: "3 บรรทัด (เพื่อทำงานเท่า 1 คำสั่งของ 3-Address)",
      instrSizeBytes: "1 - 2 Bytes (เล็กที่สุด)",
      pros: ["คำสั่ง 1 คำสั่งมีขนาดเล็กที่สุด ประหยัดพื้นที่ RAM"],
      cons: ["การคำนวณซับซ้อนต้องใช้โค้ดหลายบรรทัด มีการโหลด/เก็บข้อมูลเข้าออก Accumulator บ่อย ทำให้ทำงานช้า"]
    }
  };

  const current = formatData[selectedFormat];

  return (
    <div className="sim-container">
      <div className="sim-header">
        <h2>📊 เครื่องมือเปรียบเทียบรูปแบบคำสั่งตามจำนวนที่อยู่ (Instruction Formats)</h2>
        <p style={{ color: '#64748b', marginTop: '6px', fontSize: '14px' }}>
          เปรียบเทียบความแตกต่างระหว่างคำสั่งแบบ 4, 3, 2, และ 1-Address (ข้อดี ข้อเสีย ขนาดคำสั่ง vs ความยาวโค้ด)
        </p>
      </div>

      <div className="fmt-selector-grid">
        {[
          { id: '4-address', name: '4-Address' },
          { id: '3-address', name: '3-Address (นิยม)' },
          { id: '2-address', name: '2-Address (นิยม)' },
          { id: '1-address', name: '1-Address (AC)' }
        ].map(fmt => (
          <button
            key={fmt.id}
            className={`sim-step-card ${selectedFormat === fmt.id ? 'active' : ''}`}
            onClick={() => setSelectedFormat(fmt.id)}
          >
            <div className="sim-step-code" style={{ fontSize: '14px' }}>{fmt.name}</div>
          </button>
        ))}
      </div>

      <div className="sim-active-detail">
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>
            {current.title}
          </h3>

          <div className="callout callout-info" style={{ fontFamily: 'JetBrains Mono', fontSize: '13px' }}>
            <strong>โครงสร้างคำสั่ง:</strong> {current.structure}
          </div>

          <div style={{ background: '#0f172a', color: '#f8fafc', padding: '16px', borderRadius: '8px', fontFamily: 'JetBrains Mono', margin: '16px 0' }}>
            <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '4px' }}>// ตัวอย่าง Assembly Code:</div>
            <pre style={{ color: '#38bdf8', fontSize: '14px' }}>{current.example}</pre>
          </div>

          <p style={{ fontSize: '14px', color: '#475569', marginBottom: '16px' }}>
            <strong>ความหมาย:</strong> {current.meaning}
          </p>

          <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
            <div style={{ background: '#f1f5f9', padding: '10px 14px', borderRadius: '6px', flex: 1 }}>
              <span style={{ color: '#64748b' }}>จำนวนบรรทัดโค้ด:</span> <strong>{current.linesCount}</strong>
            </div>
            <div style={{ background: '#f1f5f9', padding: '10px 14px', borderRadius: '6px', flex: 1 }}>
              <span style={{ color: '#64748b' }}>ขนาดต่อ 1 คำสั่ง:</span> <strong>{current.instrSizeBytes}</strong>
            </div>
          </div>
        </div>

        <div>
          <div style={{ background: '#ecfdf5', border: '1px solid #6ee7b7', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#047857', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={16} /> ข้อดี (Pros)
            </div>
            <ul style={{ paddingLeft: '20px', fontSize: '13px', color: '#065f46' }}>
              {current.pros.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>

          <div style={{ background: '#fff1f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '16px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#b91c1c', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <X size={16} /> ข้อเสีย (Cons)
            </div>
            <ul style={{ paddingLeft: '20px', fontSize: '13px', color: '#9f1239' }}>
              {current.cons.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
