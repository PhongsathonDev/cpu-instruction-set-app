import React, { useState } from 'react';
import { Layers, RotateCcw, ArrowRight, ArrowLeft, RefreshCw } from 'lucide-react';

export default function FlashcardsView() {
  const [cardIdx, setCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cards = [
    { front: "OpCode คืออะไร?", back: "รหัสส่วนต้นของคำสั่งที่บอก CPU ว่าจะต้องดำเนินการ 'ปฏิบัติการ (Operation)' อะไร เช่น ADD, SUB, LOAD, MOVE" },
    { front: "Operand คืออะไร?", back: "ส่วนที่ระบุข้อมูล ค่าคงที่ หรือที่อยู่ (Address) ของข้อมูลที่จะถูก OpCode นำไปใช้งาน" },
    { front: "Instruction Cycle มี 2 ระยะหลักอะไรบ้าง?", back: "Fetch Cycle (ดึงคำสั่งจาก RAM) และ Execute Cycle (ตีความและปฏิบัติการ)" },
    { front: "IAC (Instruction Address Calculation) ทำหน้าที่อะไร?", back: "คำนวณหาแอดเดรสของคำสั่งถัดไปที่จะดึงจาก RAM โดยใช้ค่าใน Program Counter (PC)" },
    { front: "IF (Instruction Fetch) ทำหน้าที่อะไร?", back: "อ่านคำสั่งจาก RAM มาเก็บไว้ใน Instruction Register (IR) และเพิ่มค่า PC ขึ้นอัตโนมัติ (PC++)" },
    { front: "IOD (Instruction Operation Decoding) ทำหน้าที่อะไร?", back: "Control Unit วิเคราะห์แยก OpCode และ Operand ใน IR เพื่อทำความเข้าใจว่าต้องทำอะไร" },
    { front: "OAC (Operand Address Calculation) ทำหน้าที่อะไร?", back: "คำนวณหาที่อยู่จริง (Effective Address - EA) ของข้อมูลตัวถูกดำเนินการใน RAM" },
    { front: "OF (Operand Fetch) ทำหน้าที่อะไร?", back: "อ่านข้อมูล Operand จาก RAM ที่ตำแหน่ง EA นำมาเก็บใน Register ภายใน CPU" },
    { front: "DO (Data Operation) ทำหน้าที่อะไร?", back: "เรียกใช้ ALU เพื่อคำนวณทางคณิตศาสตร์หรือตรรกะระดับบิต" },
    { front: "OS (Operand Store) ทำหน้าที่อะไร?", back: "นำผลลัพธ์ที่คำนวณได้ไปเขียนบันทึกเก็บใน Register หรือ RAM" },
    { front: "Immediate Addressing Mode คืออะไร?", back: "ข้อมูลบรรจุอยู่ในคำสั่งเลยโดยตรง ไม่ต้องเข้าถึง RAM หรือ Register (เร็วที่สุด)" },
    { front: "Register Addressing Mode คืออะไร?", back: "ข้อมูลอยู่ใน Register ภายใน CPU อ้างถึงด้วยชื่อ Register (เร็วมาก)" },
    { front: "Direct Addressing Mode คืออะไร?", back: "คำสั่งระบุที่อยู่จริง (Effective Address) ใน RAM โดยตรง" },
    { front: "Register Indirect Addressing Mode คืออะไร?", back: "คำสั่งระบุชื่อ Register แต่ใน Register นั้นบรรจุแอดเดรส RAM ของข้อมูลจริง" },
    { front: "Indexed Addressing Mode สูตรว่าอย่างไร?", back: "Effective Address (EA) = (ค่าใน Index Register) + Offset" },
    { front: "Relative Addressing Mode สูตรว่าอย่างไร?", back: "Effective Address (EA) = (ค่าใน Program Counter - PC) + Offset (ทำให้เกิด Relocatable Code)" },
    { front: "Stack Addressing Mode ทำงานแบบใด?", back: "ทำงานแบบ LIFO (Last In, First Out) อ้างอิงข้อมูลบนสุดผ่าน Stack Pointer (SP) โดยปริยาย" },
    { front: "1-Address Instruction อ้างอิงอะไรโดยปริยาย?", back: "อ้างอิง Accumulator Register (AC) เสมอ" },
    { front: "Skip Instruction ทำอย่างไรกับ PC เมื่อเงื่อนไขจริง?", back: "เพิ่มค่า PC เป็น 2 เท่า (PC = PC + 2) เพื่อข้ามคำสั่งถัดไป 1 บรรทัด" },
    { front: "คำสั่ง CALL ต่างจาก JUMP อย่างไร?", back: "CALL จะบันทึก Return Address ลงบน Stack ก่อนกระโดด เพื่อให้คำสั่ง RET สามารถกระโดดกลับมาทำงานต่อได้" }
  ];

  const current = cards[cardIdx];

  const handleNext = () => {
    setIsFlipped(false);
    setCardIdx(prev => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCardIdx(prev => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div style={{ padding: '24px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a' }}>🎴 Flashcards ทบทวนความจำก่อนสอบ</h2>
        <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
          คลิกที่การ์ดเพื่อพลิกดูคำตอบ ({cardIdx + 1} / {cards.length})
        </p>
      </div>

      <div className="flashcard-wrapper">
        <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
          <span className="card-side-tag">
            {isFlipped ? 'เฉลย / คำอธิบาย' : 'คำถาม / นิยามศัพท์'}
          </span>

          <h3 style={{ fontSize: isFlipped ? '16px' : '20px', color: isFlipped ? '#0f172a' : '#4f46e5', fontWeight: '700', lineHeight: '1.6' }}>
            {isFlipped ? current.back : current.front}
          </h3>

          <div style={{ marginTop: '24px', fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <RefreshCw size={14} /> คลิกเพื่อพลิกการ์ด
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
          <button className="btn-secondary" onClick={handlePrev}>
            <ArrowLeft size={16} /> การ์ดก่อนหน้า
          </button>

          <button className="btn-primary" onClick={handleNext}>
            การ์ดถัดไป <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
