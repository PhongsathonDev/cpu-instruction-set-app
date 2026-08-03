import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, CheckCircle2, Cpu, HardDrive, Zap } from 'lucide-react';

export default function CpuCycleSimulator() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const steps = [
    {
      code: "1. IAC",
      name: "Instruction Address Calculation",
      phase: "FETCH PHASE",
      desc: "CPU คำนวณหาแอดเดรสของคำสั่งถัดไปจากรีจิสเตอร์ Program Counter (PC)",
      registers: { PC: "0010h", MAR: "----", MBR: "----", IR: "----", ACC: "0000h" },
      busState: "Address Bus: Idle | Data Bus: Idle | Control Bus: Idle",
      analogy: "CPU: 'ฉันจะไปหยิบคำสั่งถัดไปจากที่ไหนนะ? (ดูที่ PC = 0010h)'"
    },
    {
      code: "2. IF",
      name: "Instruction Fetch",
      phase: "FETCH PHASE",
      desc: "ส่งแอดเดรส 0010h ไปที่ MAR -> สั่งอ่านหน่วยความจำ -> ดึงคำสั่ง [ADD R1, 1000h] ใส่ใน IR และอัปเดต PC เป็น 0011h",
      registers: { PC: "0011h (PC++)", MAR: "0010h", MBR: "[ADD R1, 1000h]", IR: "[ADD R1, 1000h]", ACC: "0000h" },
      busState: "Address Bus: 0010h | Data Bus: [ADD R1, 1000h] | Control Bus: READ",
      analogy: "CPU: 'เจอที่อยู่แล้ว! ดึงคำสั่งมาเก็บใส่กระเป๋า (IR) แล้วอัปเดต PC++ เตรียมพร้อมรอบหน้า'"
    },
    {
      code: "3. IOD",
      name: "Instruction Operation Decoding",
      phase: "DECODE PHASE",
      desc: "Control Unit ถอดรหัสคำสั่งใน IR แยก OpCode (ADD) และ Operand (R1, 1000h)",
      registers: { PC: "0011h", MAR: "0010h", MBR: "[ADD R1, 1000h]", IR: "[ADD R1, 1000h]", ACC: "0000h" },
      busState: "OpCode: ADD (0001b) | Target Reg: R1 | Mem Addr: 1000h",
      analogy: "CPU: 'มาแกะดูซิ! OpCode คือ ADD (บวก) และ Operand สั่งให้ไปเอาข้อมูลที่ 1000h มาใส่ R1'"
    },
    {
      code: "4. OAC",
      name: "Operand Address Calculation",
      phase: "EXECUTE PHASE",
      desc: "คำนวณที่อยู่จริง (Effective Address - EA) ของข้อมูล Operand ใน RAM (ในที่นี้ EA = 1000h)",
      registers: { PC: "0011h", MAR: "1000h (EA)", MBR: "[ADD R1, 1000h]", IR: "[ADD R1, 1000h]", ACC: "0000h" },
      busState: "Address Bus: 1000h (Effective Address Calculated)",
      analogy: "CPU: 'ต้องไปเอาข้อมูลที่ตำแหน่ง RAM 1000h งั้นเอา 1000h ไปใส่ MAR เพื่อเตรียมอ่าน'"
    },
    {
      code: "5. OF",
      name: "Operand Fetch",
      phase: "EXECUTE PHASE",
      desc: "อ่านข้อมูลจริงจาก RAM ที่ตำแหน่ง 1000h (สมมติได้ค่า 42) มาใส่ใน MBR และ Register ภายใน",
      registers: { PC: "0011h", MAR: "1000h", MBR: "42 (Data)", IR: "[ADD R1, 1000h]", ACC: "0000h" },
      busState: "Address Bus: 1000h | Data Bus: 42 | Control Bus: READ",
      analogy: "CPU: 'อ่านข้อมูลจาก RAM ตำแหน่ง 1000h ได้ค่า 42 มาแล้ว หยิบใส่รีจิสเตอร์!'"
    },
    {
      code: "6. DO",
      name: "Data Operation",
      phase: "EXECUTE PHASE",
      desc: "ส่งข้อมูล 42 และค่าเดิมใน R1 (สมมติเดิมมีค่า 8) ให้ ALU คำนวณบวกกัน (8 + 42 = 50)",
      registers: { PC: "0011h", MAR: "1000h", MBR: "42", IR: "[ADD R1, 1000h]", ACC: "50 (ALU Result)" },
      busState: "ALU Op: ADD (8 + 42) -> Temp Result: 50",
      analogy: "CPU: 'ให้ ALU คำนวณบวกเลขเลย! 8 + 42 ได้ผลลัพธ์เป็น 50'"
    },
    {
      code: "7. OS",
      name: "Operand Store",
      phase: "EXECUTE PHASE",
      desc: "นำผลลัพธ์ 50 จาก ALU ไปบันทึกเก็บใน Register R1 ตามที่ระบุในคำสั่ง",
      registers: { PC: "0011h", MAR: "1000h", MBR: "50", IR: "[ADD R1, 1000h]", R1: "50 (Stored)" },
      busState: "Internal Bus: Write 50 to R1",
      analogy: "CPU: 'เขียนผลลัพธ์ 50 กลับลงใน R1 เสร็จสิ้นภารกิจคำสั่งนี้!'"
    },
    {
      code: "8. LOOP",
      name: "Loop Back to IAC",
      phase: "CYCLE RESET",
      desc: "วัฏจักรเสร็จสิ้น 1 รอบ CPU วนกลับไปที่ขั้นตอน IAC เพื่อประมวลผลคำสั่งถัดไปจาก PC (0011h)",
      registers: { PC: "0011h", MAR: "----", MBR: "----", IR: "----", R1: "50" },
      busState: "Ready for Next Cycle",
      analogy: "CPU: 'งานเสร็จแล้ว วนกลับไปหาคำสั่งถัดไปที่ 0011h ต่อไปเลย!'"
    }
  ];

  const currentStep = steps[activeStepIndex];

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % steps.length);
  };

  const handleReset = () => {
    setActiveStepIndex(0);
  };

  return (
    <div className="sim-container">
      <div className="sim-header">
        <h2>🔄 จำลองขั้นตอนการทำงานของ CPU (Instruction Cycle Simulator)</h2>
        <p style={{ color: '#64748b', marginTop: '6px', fontSize: '14px' }}>
          ทดลองกดดูทีละขั้นตอนเพื่อทำความเข้าใจการส่งผ่านข้อมูลใน 8 กระบวนการย่อยของ CPU
        </p>
      </div>

      <div className="sim-steps-grid">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className={`sim-step-card ${activeStepIndex === idx ? 'active' : ''}`}
            onClick={() => setActiveStepIndex(idx)}
          >
            <div className="sim-step-code">{s.code}</div>
            <div className="sim-step-name">{s.name}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
        <button className="btn-primary" onClick={handleNext}>
          <Play size={16} />
          ขั้นตอนถัดไป ({activeStepIndex + 1}/{steps.length})
        </button>
        <button className="btn-secondary" onClick={handleReset}>
          <RotateCcw size={16} />
          เริ่มต้นใหม่
        </button>
      </div>

      <div className="sim-active-detail">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span className="module-badge">{currentStep.phase}</span>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{currentStep.code}: {currentStep.name}</h3>
          </div>
          <p style={{ fontSize: '15px', color: '#334155', marginBottom: '16px', lineHeight: '1.6' }}>
            {currentStep.desc}
          </p>

          <div className="callout callout-purple">
            <strong>เรื่องเล่า CPU:</strong> {currentStep.analogy}
          </div>

          <div style={{ marginTop: '16px', padding: '12px 16px', background: '#e0e7ff', borderRadius: '8px', color: '#3730a3', fontSize: '13px', fontFamily: 'JetBrains Mono' }}>
            ⚡ {currentStep.busState}
          </div>
        </div>

        <div className="register-box">
          <div className="register-title">
            <Cpu size={16} />
            สถานะ CPU Registers (การเปลี่ยนแปลงค่า)
          </div>

          <div className="register-grid">
            {Object.entries(currentStep.registers).map(([regName, regVal]) => (
              <div key={regName} className="reg-item">
                <span className="reg-name">{regName}</span>
                <span className="reg-val">{regVal}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', marginBottom: '8px' }}>
              จำลองคำสั่งปัจจุบันใน RAM
            </div>
            <div style={{ background: '#0f172a', color: '#38bdf8', padding: '10px 14px', borderRadius: '6px', fontFamily: 'JetBrains Mono', fontSize: '13px' }}>
              RAM [0010h] : ADD R1, 1000h<br />
              RAM [1000h] : 42 (Value)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
