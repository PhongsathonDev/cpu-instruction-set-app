import React, { useState } from 'react';
import { Calculator, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

export default function AddressCalculator() {
  const [selectedMode, setSelectedMode] = useState('immediate');
  const [constantVal, setConstantVal] = useState(50);
  const [regVal, setRegVal] = useState(1000);
  const [pcVal, setPcVal] = useState(200);
  const [spVal, setSpVal] = useState(0x7FFF);

  // Simulated memory bank
  const memoryBank = {
    50: "50 (Immediate Value)",
    1000: "255 (Data at 1000)",
    1050: "999 (Data at 1050)",
    250: "777 (Data at PC+50)",
  };

  const calculateEffectiveAddress = () => {
    switch (selectedMode) {
      case 'immediate':
        return {
          formula: "ขอบเขตคำสั่งโดยตรง (embedded value)",
          ea: `ค่าคงที่ ${constantVal}`,
          val: `${constantVal}`,
          explanation: "ไม่ต้องคำนวณแอดเดรส ข้อมูลพร้อมใช้งานในตัวคำสั่งเลย (เร็วที่สุด)"
        };
      case 'register':
        return {
          formula: "ระบุชื่อ Register",
          ea: `Register R1`,
          val: `ค่าใน R1 = ${regVal}`,
          explanation: "ไม่ต้องเข้าถึง RAM ข้อมูลอยู่ใน Register R1 ภายใน CPU"
        };
      case 'direct':
        return {
          formula: `EA = Address (${constantVal})`,
          ea: `${constantVal}h`,
          val: memoryBank[constantVal] || `[Data at RAM ${constantVal}]`,
          explanation: "คำสั่งระบุที่อยู่ RAM ตรงๆ 100% นำค่านักไปอ่าน RAM ได้ทันที"
        };
      case 'register-indirect':
        return {
          formula: `EA = (Register R1) = ${regVal}`,
          ea: `${regVal}h`,
          val: memoryBank[regVal] || `[Data at RAM ${regVal}]`,
          explanation: `อ่านค่าจาก R1 ได้ ${regVal} แล้วนำ ${regVal} ไปใช้เป็นแอดเดรสอ่าน RAM`
        };
      case 'indexed':
        const indexEa = regVal + constantVal;
        return {
          formula: `EA = (Index Reg R1) + Offset = ${regVal} + ${constantVal}`,
          ea: `${indexEa}h`,
          val: memoryBank[indexEa] || `[Data at RAM ${indexEa}]`,
          explanation: `นำค่าใน R1 (${regVal}) บวกกับ Offset (${constantVal}) ได้แอดเดรสจริง = ${indexEa}`
        };
      case 'relative':
        const relEa = pcVal + constantVal;
        return {
          formula: `EA = (Program Counter) + Offset = ${pcVal} + ${constantVal}`,
          ea: `${relEa}h`,
          val: memoryBank[relEa] || `[Instruction/Data at ${relEa}]`,
          explanation: `นำค่าปัจจุบันใน PC (${pcVal}) บวกกับ Offset (${constantVal}) ได้แอดเดรสจริง = ${relEa} ( Relocatable Code)`
        };
      case 'stack':
        return {
          formula: `EA = Stack Pointer (SP) = 0x${spVal.toString(16).toUpperCase()}`,
          ea: `0x${spVal.toString(16).toUpperCase()}`,
          val: "[Top Value on Stack]",
          explanation: "ไม่ระบุแอดเดรสในคำสั่ง แต่อ้างอิงตำแหน่งบนสุดของ Stack ผ่าน SP โดยปริยาย"
        };
      default:
        return {};
    }
  };

  const result = calculateEffectiveAddress();

  return (
    <div className="sim-container">
      <div className="sim-header">
        <h2>🧮 เครื่องมือคำนวณตำแหน่งแอดเดรสจริง (Effective Address - $EA$)</h2>
        <p style={{ color: '#64748b', marginTop: '6px', fontSize: '14px' }}>
          ทดลองปรับเปลี่ยนโหมดและค่าของ Register/Offset เพื่อดูว่า CPU คำนวณหาแอดเดรสจริง ($EA$) อย่างไร
        </p>
      </div>

      <div className="calc-modes-grid">
        {[
          { id: 'immediate', name: '1. Immediate', label: 'ทันที' },
          { id: 'register', name: '2. Register', label: 'รีจิสเตอร์' },
          { id: 'direct', name: '3. Direct', label: 'โดยตรง' },
          { id: 'register-indirect', name: '4. Reg Indirect', label: 'ทางอ้อม' },
          { id: 'indexed', name: '5. Indexed', label: 'ดัชนี' },
          { id: 'relative', name: '6. Relative', label: 'สัมพันธ์' },
          { id: 'stack', name: '7. Stack', label: 'สแตก' }
        ].map(mode => (
          <button
            key={mode.id}
            className={`sim-step-card ${selectedMode === mode.id ? 'active' : ''}`}
            onClick={() => setSelectedMode(mode.id)}
          >
            <div className="sim-step-code" style={{ fontSize: '13px' }}>{mode.name}</div>
            <div className="sim-step-name">{mode.label}</div>
          </button>
        ))}
      </div>

      <div className="sim-active-detail">
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: '#4f46e5' }}>
            ⚙️ ปรับตั้งค่าตัวแปรในคำสั่งและ CPU
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>
                ค่าคงที่ในคำสั่ง (Constant / Offset / Address Field): <strong>{constantVal}</strong>
              </label>
              <input
                type="range"
                min="0"
                max="2000"
                step="10"
                value={constantVal}
                onChange={(e) => setConstantVal(Number(e.target.value))}
                style={{ width: '100%', marginTop: '6px' }}
              />
            </div>

            {(selectedMode === 'register' || selectedMode === 'register-indirect' || selectedMode === 'indexed') && (
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>
                  ค่าที่บรรจุอยู่ใน Register R1: <strong>{regVal}</strong>
                </label>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={regVal}
                  onChange={(e) => setRegVal(Number(e.target.value))}
                  style={{ width: '100%', marginTop: '6px' }}
                />
              </div>
            )}

            {selectedMode === 'relative' && (
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>
                  ตำแหน่งปัจจุบันใน Program Counter (PC): <strong>{pcVal}</strong>
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={pcVal}
                  onChange={(e) => setPcVal(Number(e.target.value))}
                  style={{ width: '100%', marginTop: '6px' }}
                />
              </div>
            )}
          </div>
        </div>

        <div style={{ background: '#ffffff', border: '2px solid #6366f1', borderRadius: '12px', padding: '20px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#6366f1', textTransform: 'uppercase', marginBottom: '8px' }}>
            📌 ผลการคำนวณ EFFECTIVE ADDRESS (EA)
          </div>

          <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', marginBottom: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '12px', color: '#64748b' }}>สูตรการคำนวณ:</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontWeight: '700', fontSize: '14px', color: '#0f172a' }}>{result.formula}</div>
          </div>

          <div style={{ background: '#ecfdf5', padding: '12px', borderRadius: '8px', marginBottom: '12px', border: '1px solid #6ee7b7' }}>
            <div style={{ fontSize: '12px', color: '#047857' }}>ที่อยู่จริง (Effective Address):</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontWeight: '700', fontSize: '16px', color: '#065f46' }}>{result.ea}</div>
          </div>

          <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '8px', border: '1px solid #93c5fd' }}>
            <div style={{ fontSize: '12px', color: '#1e40af' }}>ข้อมูลที่ได้ (Fetched Operand):</div>
            <div style={{ fontFamily: 'JetBrains Mono', fontWeight: '700', fontSize: '16px', color: '#1d4ed8' }}>{result.val}</div>
          </div>

          <p style={{ marginTop: '16px', fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>
            💡 {result.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}
