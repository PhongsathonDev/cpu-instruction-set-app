export const quizQuestions = [
  // --- 1. Instruction Set Basics (Obj 1) ---
  {
    id: 1,
    question: "1. ชุดคำสั่ง (Instruction Set) หมายถึงข้อใดที่ถูกต้องและครบถ้วนที่สุด?",
    options: [
      "ก. ส่วนของหน่วยความจำหลักสำหรับเก็บโปรแกรมทั้งหมด",
      "ข. กลุ่มของคำสั่งทั้งหมดที่กำหนดการทำงานให้แก่ CPU",
      "ค. ระบบการจัดการข้อมูลเข้าและข้อมูลออกของคอมพิวเตอร์",
      "ง. กลุ่มของรีจิสเตอร์ที่ใช้ในการควบคุมการทำงานของระบบ"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 1] Instruction Set คือกลุ่มของคำสั่งพื้นฐานทั้งหมดที่ CPU สามารถเข้าใจและปฏิบัติตามได้ เปรียบเสมือนภาษาเฉพาะของ CPU (หน้า 4)",
    category: "1. Instruction Set Basics (ข้อ 1)"
  },
  {
    id: 2,
    question: "2. ภาษาประเภทใดที่ CPU สามารถประมวลผลคำสั่งได้โดยตรงโดยไม่ต้องผ่านการแปลรหัส?",
    options: [
      "ก. High-Level Language (ภาษาชั้นสูง)",
      "ข. Machine Code / Object Code (ภาษาเครื่อง)",
      "ค. Assembly Language (ภาษาแอสเซมบลี)",
      "ง. Natural Language (ภาษาธรรมชาติ)"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 1] CPU สามารถประมวลผลได้เฉพาะ Machine Code / Object Code ที่ถูกแปลโดย Compiler หรือ Assembler แล้วเท่านั้น (หน้า 4)",
    category: "1. Instruction Set Basics (ข้อ 1)"
  },

  // --- 2. OpCode & Operand Functions (Obj 2) ---
  {
    id: 3,
    question: "3. OpCode (Operation Code) มีหน้าที่สำคัญที่สุดในคำสั่งเครื่องอย่างไร?",
    options: [
      "ก. ระบุแอดเดรสของคำสั่งถัดไปที่ CPU ต้องดึงมาใช้งาน",
      "ข. ระบุรหัสที่บอกประเภทของการดำเนินการที่ CPU ต้องปฏิบัติ",
      "ค. ระบุขนาดและชนิดของข้อมูลที่ใช้ในการประมวลผลคำสั่ง",
      "ง. จัดเก็บผลลัพธ์ของการประมวลผลข้อมูลสุดท้ายของคำสั่ง"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 2] OpCode คือรหัสบอก CPU ว่าจะต้องดำเนินการ 'ปฏิบัติการ (Operation)' อะไร เช่น ADD, SUB, LOAD (หน้า 4)",
    category: "2. OpCode & Operand (ข้อ 2)"
  },
  {
    id: 4,
    question: "4. Operand ในโครงสร้างคำสั่งทำหน้าที่หลักอย่างไร?",
    options: [
      "ก. ระบุตำแหน่งของตัวถูกดำเนินการเพื่อใช้ในการประมวลผล",
      "ข. กำหนดสัญญาณควบคุมสำหรับส่วนควบคุม (Control Unit)",
      "ค. เป็นรหัสที่บอกว่า CPU ต้องทำการกระโดดหรือไม่กระโดด",
      "ง. ทำหน้าที่เป็นตัวควบคุมความเร็วของระบบสัญญาณนาฬิกา"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 2] Operand ทำหน้าที่ระบุข้อมูล ค่าคงที่ หรือตำแหน่งที่อยู่ (Address) ของข้อมูลที่จะนำไปใช้คำนวณ (หน้า 4)",
    category: "2. OpCode & Operand (ข้อ 2)"
  },

  // --- 3. Instruction Cycle Overview (Obj 3) ---
  {
    id: 5,
    question: "5. วัฏจักรคำสั่งของ CPU แบ่งออกเป็นสองขั้นตอนหลักตามลำดับอย่างไร?",
    options: [
      "ก. Data Operation Cycle และ Store Cycle",
      "ข. Interrupt Cycle และ Indirection Cycle",
      "ค. Fetch Cycle (การดึงคำสั่ง) และ Execute Cycle (การปฏิบัติการ)",
      "ง. Operand Fetch Cycle และ Operand Store Cycle"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 3] วัฏจักรคำสั่งพื้นฐานประกอบด้วย 2 ระยะหลักคือ Fetch Cycle (ดึงคำสั่งจากหน่วยความจำ) และ Execute Cycle (ถอดรหัสและประมวลผล) (หน้า 5-6)",
    category: "3. Instruction Cycle (ข้อ 3)"
  },
  {
    id: 6,
    question: "6. CPU จะดำเนินกระบวนการในวัฏจักรคำสั่งวนซ้ำไปเรื่อยๆ จนกระทั่งเกิดเหตุการณ์ใด?",
    options: [
      "ก. พบคำสั่งย้ายข้อมูล (MOVE)",
      "ข. พบคำสั่งหยุดทำงาน (HALT) หรือมีการปิดเครื่อง",
      "ค. เกิดกระบวนการ Instruction Fetch",
      "ง. มีการเพิ่มค่าใน Program Counter (PC)"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 3] วงรอบวัฏจักรคำสั่งจะทำงานต่อเนื่องจนกว่าจะพบคำสั่งระบุให้หยุดทำงาน (HALT Instruction) หรือปิดเครื่อง (หน้า 5)",
    category: "3. Instruction Cycle (ข้อ 3)"
  },

  // --- 4. Instruction Address Calculation (IAC) (Obj 4) ---
  {
    id: 7,
    question: "7. กระบวนการ Instruction Address Calculation (IAC) มีบทบาทหลักใด?",
    options: [
      "ก. ตีความรหัสคำสั่งที่ดึงเข้ามาใน Instruction Register",
      "ข. คำนวณหาตำแหน่งที่อยู่ของคำสั่งถัดไปที่ CPU จะต้องดึงมา",
      "ค. อ่านข้อมูลของตัวถูกดำเนินการจากตำแหน่งที่กำหนดไว้",
      "ง. บันทึกผลลัพธ์ของการประมวลผลลงในหน่วยความจำหลัก"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 4] IAC เป็นขั้นตอนแรกที่ CPU คำนวณหาตำแหน่งที่อยู่ของคำสั่งถัดไปที่จะดึง โดยอ้างอิงค่าจาก Program Counter (PC) (หน้า 7)",
    category: "4. IAC Process (ข้อ 4)"
  },
  {
    id: 8,
    question: "8. ในขั้นตอน Instruction Address Calculation (IAC) CPU จะใช้ข้อมูลจากรีจิสเตอร์ใดเป็นหลัก?",
    options: [
      "ก. Instruction Register (IR)",
      "ข. Memory Buffer Register (MBR)",
      "ค. Program Counter (PC)",
      "ง. Stack Pointer (SP)"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 4] CPU ใช้ค่าในรีจิสเตอร์ Program Counter (PC) ในการชี้และคำนวณตำแหน่งคำสั่งถัดไปในขั้นตอน IAC (หน้า 7)",
    category: "4. IAC Process (ข้อ 4)"
  },

  // --- 5. Instruction Fetch (IF) (Obj 5) ---
  {
    id: 9,
    question: "9. การทำงานหลักในขั้นตอน Instruction Fetch (IF) คือข้อใด?",
    options: [
      "ก. อ่านรหัสคำสั่งจากหน่วยความจำมาไว้ใน Instruction Register (IR)",
      "ข. คำนวณแอดเดรสจริงของ Operand ก่อนการประมวลผลทันที",
      "ค. วิเคราะห์รหัส OpCode เพื่อแยกส่วนของการดำเนินการ",
      "ง. เพิ่มค่าของรีจิสเตอร์ Program Counter (PC) เป็นสองเท่า"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 5] IF คือการอ่าน (ดึง) คำสั่งจากตำแหน่งในหน่วยความจำ (ผ่าน MAR, MBR) เข้ามาเก็บไว้ใน Instruction Register (IR) (หน้า 7-8)",
    category: "5. IF Process (ข้อ 5)"
  },
  {
    id: 10,
    question: "10. เหตุการณ์ใดเกิดขึ้นกับ Program Counter (PC) ในระหว่างขั้นตอน Instruction Fetch (IF)?",
    options: [
      "ก. ค่า PC ถูกกำหนดเป็นศูนย์เสมอ",
      "ข. ค่า PC ถูกเพิ่มขึ้นอัตโนมัติ (PC++) เพื่อเตรียมพร้อมชี้คำสั่งถัดไป",
      "ค. ค่า PC ถูกย้ายไปเก็บไว้ใน Accumulator",
      "ง. ค่า PC จะถูกลบออกเมื่อดึงคำสั่งเสร็จ"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 5] ในขั้นตอน IF ค่าใน Program Counter (PC) จะถูกอัปเดตเพิ่มขึ้นอัตโนมัติ เพื่อชี้ไปยังคำสั่งถัดไปสำหรับรอบหน้า (หน้า 8)",
    category: "5. IF Process (ข้อ 5)"
  },

  // --- 6. Instruction Operation Decoding (IOD) (Obj 6) ---
  {
    id: 11,
    question: "11. Instruction Operation Decoding (IOD) มีวัตถุประสงค์เพื่ออะไร?",
    options: [
      "ก. บันทึกค่ารีจิสเตอร์ PC ลงในหน่วยความจำ Stack",
      "ข. วิเคราะห์คำสั่งเพื่อทราบประเภทของ Operation และ Operand",
      "ค. ดึงข้อมูล Operand จากหน่วยความจำมาไว้ใน CPU",
      "ง. ใช้ในการส่งผลลัพธ์การดำเนินการกลับไปยังหน่วยความจำ"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 6] IOD เป็นขั้นตอนที่ Control Unit ถอดรหัสคำสั่งใน IR เพื่อแยกส่วน OpCode ออกจาก Operand และทำความเข้าใจภารกิจ (หน้า 8)",
    category: "6. IOD Process (ข้อ 6)"
  },
  {
    id: 12,
    question: "12. วงจรส่วนใดใน CPU ที่ทำหน้าที่หลักในกระบวนการ Instruction Operation Decoding (IOD)?",
    options: [
      "ก. Arithmetic Logic Unit (ALU)",
      "ข. Control Unit (CU) / Instruction Decoder",
      "ค. Input/Output Controller",
      "ง. General Purpose Register"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 6] Control Unit (หน่วยควบคุม) ทำหน้าที่ตีความและถอดรหัสคำสั่งในกระบวนการ IOD (หน้า 8)",
    category: "6. IOD Process (ข้อ 6)"
  },

  // --- 7. Execute Process (Obj 7) ---
  {
    id: 13,
    question: "13. ขั้นตอน Execute (การปฏิบัติการ) เป็นการทำงานใด?",
    options: [
      "ก. CPU ตรวจสอบสถานะของ Interrupt Flag และ Data Flag",
      "ข. CPU กำหนดค่าเริ่มต้นใหม่ให้กับ Accumulator Register",
      "ค. CPU สลับการทำงานจาก User Mode ไปยัง Kernel Mode",
      "ง. CPU สั่งให้วงจรภายในปฏิบัติตาม OpCode ที่ถูกตีความแล้ว"
    ],
    correctIndex: 3,
    explanation: "[วัตถุประสงค์ข้อ 7] Execute เป็นขั้นตอนลงมือทำจริง โดย CPU ส่งสัญญาณควบคุมให้ส่วนต่างๆ ปฏิบัติตามคำสั่งที่ถอดรหัสได้ (หน้า 8)",
    category: "7. Execute Process (ข้อ 7)"
  },
  {
    id: 14,
    question: "14. หากคำสั่งเป็นคำสั่งทางคณิตศาสตร์ ในขั้นตอน Execute ข้อมูลจะถูกส่งไปยังส่วนใด?",
    options: [
      "ก. Control Unit (CU)",
      "ข. Program Counter (PC)",
      "ค. Arithmetic Logic Unit (ALU)",
      "ง. Stack Pointer (SP)"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 7] หากคำสั่งเป็นคณิตศาสตร์หรือตรรกะ ข้อมูลจะถูกส่งไปประมวลผลที่ Arithmetic Logic Unit (ALU) (หน้า 8)",
    category: "7. Execute Process (ข้อ 7)"
  },

  // --- 8. Operand Address Calculation (OAC) (Obj 8) ---
  {
    id: 15,
    question: "15. Operand Address Calculation (OAC) เป็นการดำเนินการใด?",
    options: [
      "ก. การตรวจสอบความถูกต้องของรหัส OpCode ที่ถูกดึงมา",
      "ข. การคำนวณตำแหน่งที่อยู่ของคำสั่งถัดไปโดยใช้ PC",
      "ค. การหาตำแหน่งที่อยู่จริง (Effective Address) ของตัวถูกดำเนินการ",
      "ง. การแปลงข้อมูลจากรูปแบบหนึ่งไปสู่อีกรูปแบบหนึ่งก่อนใช้"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 8] OAC คือขั้นตอนคำนวณหาตำแหน่งที่อยู่จริง (Effective Address - EA) ของ Operand ที่ต้องใช้คำนวณ (หน้า 9)",
    category: "8. OAC Process (ข้อ 8)"
  },
  {
    id: 16,
    question: "16. กระบวนการ OAC จะเกิดขึ้นเมื่อใดในการประมวลผลคำสั่ง?",
    options: [
      "ก. เกิดขึ้นเสมอในระยะ Fetch Cycle",
      "ข. เกิดขึ้นในระยะ Execute เมื่อ Operand ไม่ได้เป็นข้อมูลตรงๆ หรือต้องคำนวณแอดเดรส",
      "ค. เกิดขึ้นหลังจบกระบวนการ Operand Store (OS)",
      "ง. เกิดขึ้นเฉพาะเมื่อเกิด Interrupt เท่านั้น"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 8] OAC เกิดขึ้นในระยะ Execute เมื่อ Operand ระบุในรูปแบบที่ต้องคำนวณที่อยู่จริงก่อน (เช่น Indirect, Indexed, Relative) (หน้า 9)",
    category: "8. OAC Process (ข้อ 8)"
  },

  // --- 9. Operand Fetch (OF) (Obj 9) ---
  {
    id: 17,
    question: "17. กระบวนการ Operand Fetch (OF) มีจุดประสงค์เพื่ออะไร?",
    options: [
      "ก. ดึงข้อมูลจริงของตัวถูกดำเนินการจากหน่วยความจำมาที่ CPU",
      "ข. อ่านรหัสคำสั่งจากหน่วยความจำหลักมาไว้ในรีจิสเตอร์ PC",
      "ค. ส่งสัญญาณควบคุมไปยัง I/O Module เพื่อเริ่มต้นการทำงาน",
      "ง. ทำการบันทึกผลลัพธ์สุดท้ายของการดำเนินการลงในหน่วยความจำ"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 9] OF คือการนำที่อยู่จริงที่คำนวณได้จาก OAC ไปอ่าน (ดึง) ข้อมูล Operand จากหน่วยความจำหลักมาเก็บใน Register ภายใน CPU (หน้า 9)",
    category: "9. OF Process (ข้อ 9)"
  },
  {
    id: 18,
    question: "18. ข้อแตกต่างสำคัญระหว่าง Instruction Fetch (IF) กับ Operand Fetch (OF) คืออะไร?",
    options: [
      "ก. IF ดึงข้อมูล ส่วน OF ดึงคำสั่ง",
      "ข. IF ดึงรหัสคำสั่ง (Instruction) ส่วน OF ดึงข้อมูลตัวถูกดำเนินการ (Operand)",
      "ค. IF ใช้ ALU ส่วน OF ใช้ Program Counter",
      "ง. ทั้งคู่ทำงานเหมือนกันทุกประการไม่มีข้อแตกต่าง"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 9] IF ทำหน้าที่ดึง 'คำสั่ง' มาเก็บใน IR แต่ OF ทำหน้าที่ดึง 'ข้อมูล Operand' มาเตรียมคำนวณ (หน้า 9)",
    category: "9. OF Process (ข้อ 9)"
  },

  // --- 10. Data Operation (DO) (Obj 10) ---
  {
    id: 19,
    question: "19. ส่วนสำคัญที่เข้ามามีบทบาทหลักในขั้นตอน Data Operation (DO) คืออะไร?",
    options: [
      "ก. Memory Buffer Register (MBR)",
      "ข. Program Counter (PC)",
      "ค. Instruction Register (IR)",
      "ง. Arithmetic Logic Unit (ALU)"
    ],
    correctIndex: 3,
    explanation: "[วัตถุประสงค์ข้อ 10] DO เป็นขั้นตอนที่ CPU ลงมือประมวลผลข้อมูลจริง โดยเรียกใช้วงจร ALU ในการคำนวณหรือเปรียบเทียบ (หน้า 10)",
    category: "10. DO Process (ข้อ 10)"
  },
  {
    id: 20,
    question: "20. หากคำสั่งเป็นคำสั่ง SHIFT หรือ ROTATE การประมวลผลบิตจะเกิดขึ้นในขั้นตอนใด?",
    options: [
      "ก. Instruction Address Calculation (IAC)",
      "ข. Instruction Operation Decoding (IOD)",
      "ค. Data Operation (DO)",
      "ง. Operand Store (OS)"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 10] การเลื่อนบิต (Shift) หรือหมุนบิต (Rotate) เป็นส่วนหนึ่งของการปฏิบัติการกับข้อมูล ซึ่งทำในขั้นตอน DO (หน้า 10)",
    category: "10. DO Process (ข้อ 10)"
  },

  // --- 11. Operand Store (OS) (Obj 11) ---
  {
    id: 21,
    question: "21. Operand Store (OS) คือขั้นตอนใดในการประมวลผลคำสั่ง?",
    options: [
      "ก. การบันทึกผลลัพธ์ที่ได้จากการประมวลผลลงในตำแหน่งที่กำหนด",
      "ข. การย้ายข้อมูลจากรีจิสเตอร์หนึ่งไปยังอีกรีจิสเตอร์หนึ่ง",
      "ค. การคำนวณแอดเดรสที่อยู่ของคำสั่งถัดไปในวัฏจักร",
      "ง. การตรวจสอบสถานะของอุปกรณ์ Input/Output"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 11] OS คือขั้นตอนนำผลลัพธ์ที่ได้จาก DO ไปเขียนบันทึกกลับลงใน Register, RAM หรือพอร์ต I/O (หน้า 10)",
    category: "11. OS Process (ข้อ 11)"
  },
  {
    id: 22,
    question: "22. ผลลัพธ์ที่ได้จากขั้นตอน DO ในกระบวนการ OS สามารถนำไปบันทึกที่ใดได้บ้าง?",
    options: [
      "ก. บันทึกลงใน Instruction Register (IR) เท่านั้น",
      "ข. บันทึกลงใน Register ภายใน CPU, RAM หลัก, หรือพอร์ต I/O",
      "ค. บันทึกลงใน Program Counter (PC) เสมอ",
      "ง. ไม่สามารถบันทึกได้ ต้องส่งออกจอภาพทันที"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 11] ผลลัพธ์สามารถเขียนกลับลง Register, RAM (ผ่าน Address/Data Bus) หรือส่งไปพอร์ต I/O (หน้า 10)",
    category: "11. OS Process (ข้อ 11)"
  },

  // --- 12. Operation Code Field (Obj 12) ---
  {
    id: 23,
    question: "23. ส่วนประกอบคำสั่ง Operation Code มีความจำเป็นอย่างไร?",
    options: [
      "ก. ใช้ในการอ้างถึงตำแหน่งของข้อมูลทั้งหมดในหน่วยความจำ",
      "ข. เป็นรหัสสำคัญที่ใช้ในการบอกถึงกิจกรรมที่ต้องปฏิบัติ",
      "ค. ใช้ในการควบคุมความเร็วสัญญาณนาฬิกาของ CPU",
      "ง. ใช้ในการระบุว่าต้องมีการอ้างถึง Operand กี่ตัว"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 12] OpCode เป็นกริยาสำคัญที่สุดของคำสั่งเครื่อง เพื่อระบุกิจกรรมที่ CPU ต้องทำ (หน้า 11)",
    category: "12. OpCode Component (ข้อ 12)"
  },
  {
    id: 24,
    question: "24. หาก OpCode ในคำสั่งคือ 0001 และ 0010 ในสถาปัตยกรรมตัวอย่าง อาจหมายถึงคำสั่งใดตามลำดับ?",
    options: [
      "ก. JUMP และ CALL",
      "ข. ADD (บวก) และ SUB (ลบ)",
      "ค. LOAD และ STORE",
      "ง. IN และ OUT"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 12] ตัวอย่างในสไลด์ระบุว่า OpCode 0001 หมายถึง ADD และ 0010 หมายถึง SUB (หน้า 4, 11)",
    category: "12. OpCode Component (ข้อ 12)"
  },

  // --- 13. Operand Reference Field (Obj 13) ---
  {
    id: 25,
    question: "25. ส่วนประกอบ การอ้างถึงตัวถูกดำเนินการ (Operand Reference) มีบทบาทอย่างไร?",
    options: [
      "ก. ระบุขนาดของรหัสคำสั่งในหน่วยความจำหลัก",
      "ข. ระบุตำแหน่งของข้อมูลที่ต้องการนำมาใช้หรือบันทึกผล",
      "ค. ทำหน้าที่ในการควบคุมลำดับของการทำงานแบบ Pipeline",
      "ง. ใช้ในการกำหนดสถาปัตยกรรมของหน่วยความจำแคช"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 13] Operand Reference ทำหน้าที่บอกว่าปฏิบัติการนั้นทำกับข้อมูลอะไร หรือข้อมูลอยู่ที่ไหน (หน้า 11)",
    category: "13. Operand Reference (ข้อ 13)"
  },
  {
    id: 26,
    question: "26. ข้อมูลประเภทใดบ้างที่อาจถูกบรรจุอยู่ในฟิลด์ Operand Reference?",
    options: [
      "ก. Immediate Value, Memory Address, Register Name, I/O Port",
      "ข. รหัส OpCode และ Control Signal เท่านั้น",
      "ค. สัญญาณ นาฬิกาและ Interrupt Flag",
      "ง. สถาปัตยกรรม บัสข้อมูลเท่านั้น"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 13] Operand Reference อาจบรรจุ ค่าคงที่ตรงๆ, ที่อยู่ RAM, ชื่อ Register, หรือพอร์ต I/O (หน้า 11)",
    category: "13. Operand Reference (ข้อ 13)"
  },

  // --- 14. Next Instruction Reference (Obj 14) ---
  {
    id: 27,
    question: "27. การอ้างถึงคำสั่งถัดไป (Next Instruction Reference) ส่วนใหญ่ถูกกำหนดไว้อย่างไรในคำสั่งส่วนมาก?",
    options: [
      "ก. ถูกกำหนดโดย Stack Pointer ที่ชี้ไปยังคำสั่งถัดไป",
      "ข. ถูกกำหนดให้เป็นคำสั่งที่อยู่ติดกันในหน่วยความจำ (PC+1)",
      "ค. ถูกระบุโดย Address Field ขนาดใหญ่ในรหัสคำสั่ง",
      "ง. ถูกกำหนดโดย I/O Controller ผ่านทาง Control Bus"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 14] คำสั่งส่วนใหญ่ใช้ลำดับต่อเนื่องใน RAM โดย Program Counter (PC) จะเพิ่มค่าขึ้นเองอัตโนมัติ (PC+1) (หน้า 12)",
    category: "14. Next Instruction Reference (ข้อ 14)"
  },
  {
    id: 28,
    question: "28. ในกรณีใดที่ส่วนประกอบ Next Instruction Reference จะมีความสำคัญและจำเป็นอย่างยิ่ง?",
    options: [
      "ก. คำสั่งย้ายข้อมูล (MOVE)",
      "ข. คำสั่งคำนวณบวกลบ (ADD/SUB)",
      "ค. คำสั่งควบคุมทิศทางโปรแกรม เช่น Branch, Jump, Call",
      "ง. คำสั่งแปลงข้อมูล (Conversion)"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 14] คำสั่งควบคุมทิศทาง (Branch/Jump/Call) จำเป็นต้องระบุที่อยู่ใหม่ที่ต้องกระโดดไปปฏิบัติคำสั่งต่อ (หน้า 12)",
    category: "14. Next Instruction Reference (ข้อ 14)"
  },

  // --- 15. Operation Repertory Design (Obj 15) ---
  {
    id: 29,
    question: "29. การออกแบบชุดคำสั่ง Operation Repertory เกี่ยวข้องกับสิ่งใด?",
    options: [
      "ก. การกำหนดจำนวนและประเภทของคำสั่งที่ CPU สามารถทำได้",
      "ข. การออกแบบจำนวนของ Memory Access Cycle ที่อนุญาต",
      "ค. การกำหนดขนาดของรีจิสเตอร์ที่มองเห็นได้โดยโปรแกรมเมอร์",
      "ง. การเลือกใช้ระบบ Bus แบบ Address Bus หรือ Data Bus"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 15] Operation Repertory คือรายการความสามารถทั้งหมดว่า CPU นั้นจะสามารถทำปฏิบัติการอะไรได้บ้าง (หน้า 12)",
    category: "15. Operation Repertory Design (ข้อ 15)"
  },
  {
    id: 30,
    question: "30. สิ่งใดคือข้อพิจารณาหลักในการออกแบบ Operation Repertory สำหรับสถาปัตยกรรม CPU?",
    options: [
      "ก. ความถี่ในการใช้งานและความซับซ้อนของแต่ละปฏิบัติการ (CISC vs RISC)",
      "ข. สีของชิปประมวลผล",
      "ค. ขนาดของพาวเวอร์ซัพพลาย",
      "ง. ชนิดของแป้นพิมพ์ที่เชื่อมต่อ"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 15] การออกแบบพิจารณาความถี่ในการใช้งาน (คำสั่งใช้บ่อยควรทำให้เร็ว) และความซับซ้อน (RISC vs CISC) (หน้า 12-13)",
    category: "15. Operation Repertory Design (ข้อ 15)"
  },

  // --- 16. Data Type Design (Obj 16) ---
  {
    id: 31,
    question: "31. การออกแบบชุดคำสั่งในส่วนของ Data Type หมายถึงสิ่งใด?",
    options: [
      "ก. รูปแบบทางกายภาพของแพ็กเกจ CPU ที่ใช้",
      "ข. ชนิดของข้อมูลที่ OpCode สามารถจัดการได้ เช่น ตัวเลข ตัวอักษร",
      "ค. วิธีการจัดการสัญญาณ Interrupt ที่เข้ามาสู่ CPU",
      "ง. ลำดับการเข้าถึงข้อมูลในหน่วยความจำแคชระดับต่างๆ"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 16] Data Type คือชนิดของข้อมูลที่ CPU รองรับการประมวลผล เช่น Integer, Floating-Point, Character, Boolean (หน้า 13)",
    category: "16. Data Type Design (ข้อ 16)"
  },
  {
    id: 32,
    question: "32. มาตรฐานใดมักถูกนำมาใช้สำหรับการจัดเก็บและประมวลผลข้อมูลตัวเลขทศนิยม (Floating-Point) ใน CPU?",
    options: [
      "ก. ASCII Format",
      "ข. Unicode Standard",
      "ค. IEEE 754 Format",
      "ง. BCD (Binary Coded Decimal)"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 16] ข้อมูลตัวเลขทศนิยม (Floating-Point) มักจัดเก็บตามมาตรฐาน IEEE 754 format (หน้า 13)",
    category: "16. Data Type Design (ข้อ 16)"
  },

  // --- 17. Instruction Format Design (Obj 17) ---
  {
    id: 33,
    question: "33. Instruction Format (รูปแบบคำสั่ง) จะกำหนดอะไรในการออกแบบชุดคำสั่ง?",
    options: [
      "ก. ความเร็วสัญญาณนาฬิกาสูงสุดที่ CPU สามารถทำงานได้",
      "ข. โครงสร้าง ขนาดของฟิลด์ OpCode และ Address ในคำสั่ง",
      "ค. อัตราส่วนของการทำงานแบบ Pipelining ใน CPU",
      "ง. วิธีการสร้างวงจรควบคุม (Control Unit) ให้ทำงานอย่างรวดเร็ว"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 17] Instruction Format กำหนดว่า 1 คำสั่งจะมีขนาดกี่บิต และแบ่งฟิลด์ OpCode กับ Operand อย่างไร (หน้า 13)",
    category: "17. Instruction Format Design (ข้อ 17)"
  },
  {
    id: 34,
    question: "34. สิ่งใดคือปัจจัยสำคัญที่ต้องพิจารณาเมื่อเลือกกำหนดขนาดความยาวของ Instruction Format?",
    options: [
      "ก. ความสมดุลระหว่างจำนวนปฏิบัติการที่รองรับ, จำนวน Operand ที่อ้างอิงได้, และขนาดโดยรวมของคำสั่ง",
      "ข. ขนาดกระดาษที่พิมพ์คู่มือ",
      "ค. จำนวนปุ่มบนคีย์บอร์ด",
      "ง. ความเร็วของการ์ดจอ"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 17] ต้องสมดุลระหว่างจำนวน OpCode, จำนวน Operand Field, และขนาดคำสั่งรวม ไม่ให้เปลือง RAM (หน้า 14)",
    category: "17. Instruction Format Design (ข้อ 17)"
  },

  // --- 18. Register Design (Obj 18) ---
  {
    id: 35,
    question: "35. การออกแบบชุดคำสั่งในส่วนของ Register มีความเกี่ยวข้องกับอะไร?",
    options: [
      "ก. กำหนดขนาดความจุของหน่วยความจำหลัก (Main Memory)",
      "ข. กำหนดจำนวน ขนาด และหน้าที่ของรีจิสเตอร์ที่โปรแกรมเมอร์มองเห็นและใช้งานได้",
      "ค. การกำหนดว่าควรมีหน่วยความจำแคชกี่ระดับในระบบ",
      "ง. การเลือกใช้เทคโนโลยีการผลิตชิป Microprocessor"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 18] การออกแบบ Register กำหนดจำนวนและหน้าที่ของรีจิสเตอร์ด่วนภายใน CPU เพื่อใช้พักข้อมูล (หน้า 14)",
    category: "18. Register Design (ข้อ 18)"
  },
  {
    id: 36,
    question: "36. การเพิ่มจำนวนรีจิสเตอร์ภายใน CPU ให้มีจำนวนมากขึ้นส่งผลดีอย่างไรต่อคำสั่งเครื่อง?",
    options: [
      "ก. ช่วยลดการเข้าถึงหน่วยความจำหลักที่ช้ากว่า และทำให้คำสั่งสั้นลงได้ (เช่น 3-Address)",
      "ข. ทำให้ CPU ปิดการทำงานของวงจร ALU",
      "ค. ทำให้โปรแกรมมีขนาดใหญ่ขึ้น 10 เท่าเสมอ",
      "ง. ทำให้ไม่สามารถใช้คำสั่ง Jump ได้"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 18] รีจิสเตอร์ที่มากช่วยลดการอ่าน RAM ที่ช้า และช่วยให้การระบุ Operand ในคำสั่งสั้นลง (หน้า 14)",
    category: "18. Register Design (ข้อ 18)"
  },

  // --- 19. Addressing Design (Obj 19) ---
  {
    id: 37,
    question: "37. การออกแบบชุดคำสั่งในส่วนของ Addressing มีวัตถุประสงค์ใด?",
    options: [
      "ก. กำหนดวิธีการที่ Operand ถูกอ้างถึงหรือระบุตำแหน่งที่อยู่",
      "ข. กำหนดขนาดของคำสั่งเครื่องให้มีขนาดเท่ากันทั้งหมด",
      "ค. กำหนดรูปแบบของการทำงานแบบ Parallel Processing",
      "ง. กำหนดลำดับความสำคัญของ Interrupt Signal"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 19] Addressing คือการออกแบบเทคนิควิธีการต่างๆ ที่ CPU ใช้ค้นหาตำแหน่งข้อมูล (Addressing Modes) (หน้า 14)",
    category: "19. Addressing Design (ข้อ 19)"
  },
  {
    id: 38,
    question: "38. เปรียบเทียบ Addressing Mode ในสถาปัตยกรรม CPU เหมือนกับสิ่งใด?",
    options: [
      "ก. วิธีการระบุที่อยู่ของสิ่งของในโกดังสินค้า (หน่วยความจำ)",
      "ข. สวิตช์เปิดปิดไฟในบ้าน",
      "ค. เครื่องคิดเลขแบบพกพา",
      "ง. สายเคเบิลเชื่อมต่ออินเทอร์เน็ต"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 19] สไลด์เปรียบเทียบ Addressing Mode เหมือน 'วิธีการระบุที่อยู่' ของสิ่งของในโกดังสินค้า (หน้า 14)",
    category: "19. Addressing Design (ข้อ 19)"
  },

  // --- 20. Data Transfer Operation (Obj 20) ---
  {
    id: 39,
    question: "39. คำสั่งในกลุ่ม Data Transfer มีจุดประสงค์หลักเพื่ออะไร?",
    options: [
      "ก. ย้ายข้อมูลระหว่างส่วนประกอบต่าง ๆ โดยไม่มีการเปลี่ยนค่า",
      "ข. เปรียบเทียบค่าข้อมูลสองค่าเพื่อตั้งค่า Flag ของ CPU",
      "ค. ดำเนินการทางคณิตศาสตร์เช่นการบวกและการลบเท่านั้น",
      "ง. ควบคุมการทำงานของอุปกรณ์ I/O ที่เชื่อมต่อกับระบบ"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 20] Data Transfer ทำหน้าที่ย้ายข้อมูลจากจุดหนึ่งไปอีกจุดหนึ่งโดยไม่เปลี่ยนแปลงค่าข้อมูลเลย (หน้า 15)",
    category: "20. Data Transfer Operation (ข้อ 20)"
  },
  {
    id: 40,
    question: "40. คำสั่ง LOAD, STORE, MOVE จัดอยู่ในคำสั่งประเภทใดตามลำดับการทำงาน?",
    options: [
      "ก. LOAD: RAM->Reg, STORE: Reg->RAM, MOVE: Reg->Reg",
      "ข. LOAD: Reg->RAM, STORE: RAM->Reg, MOVE: I/O->RAM",
      "ค. LOAD: Reg->Reg, STORE: I/O->Reg, MOVE: RAM->RAM",
      "ง. ทุกคำสั่งทำงานย้ายข้อมูลเฉพาะภายใน RAM เท่านั้น"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 20] LOAD ย้ายจาก RAM ลง Reg, STORE ย้ายจาก Reg ลง RAM, MOVE ย้ายระหว่าง Reg (หน้า 15)",
    category: "20. Data Transfer Operation (ข้อ 20)"
  },

  // --- 21. Arithmetic Operation (Obj 21) ---
  {
    id: 41,
    question: "41. คำสั่ง ADD, SUBTRACT, MULTIPLY, DIVIDE จัดอยู่ในประเภทใด?",
    options: [
      "ก. Logical Operation",
      "ข. Data Transfer Operation",
      "ค. System Control Operation",
      "ง. Arithmetic Operation"
    ],
    correctIndex: 3,
    explanation: "[วัตถุประสงค์ข้อ 21] เป็นคำสั่งคำนวณทางตัวเลข ดำเนินการโดยวงจร ALU จัดเป็น Arithmetic Operation (หน้า 16)",
    category: "21. Arithmetic Operation (ข้อ 21)"
  },
  {
    id: 42,
    question: "42. คำสั่ง ADD AX, BX มีผลการทำงานอย่างไร?",
    options: [
      "ก. นำค่าใน BX มาบวกกับ AX แล้วเก็บผลลัพธ์ไว้ใน AX",
      "ข. นำค่าใน AX ไปเก็บใน BX โดยไม่บวกเลข",
      "ค. ลบค่าใน BX ออกจาก AX แล้วเก็บใน BX",
      "ง. สลับค่าระหว่าง AX และ BX"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 21] ADD AX, BX นำค่าใน BX มาบวกกับ AX แล้วเขียนผลลัพธ์ทับไว้ใน AX (หน้า 16)",
    category: "21. Arithmetic Operation (ข้อ 21)"
  },

  // --- 22. Logical Operation (Obj 22) ---
  {
    id: 43,
    question: "43. คำสั่ง AND, OR, NOT, XOR จัดอยู่ใน Operation ประเภทใด?",
    options: [
      "ก. Conversion Operation",
      "ข. Arithmetic Operation",
      "ค. Logical Operation",
      "ง. Input/Output Operation"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 22] คำสั่งปฏิบัติการบูลีนระดับบิตจัดอยู่ในกลุ่ม Logical Operation (หน้า 16)",
    category: "22. Logical Operation (ข้อ 22)"
  },
  {
    id: 44,
    question: "44. คำสั่ง COMPARE (CMP) มีลักษณะการทำงานเฉพาะตัวอย่างไร?",
    options: [
      "ก. นำค่าสองค่ามาเปรียบเทียบแล้วตั้งค่าใน Flag Register โดยไม่เปลี่ยนค่าตัวแปรเดิม",
      "ข. ทำการลบข้อมูลต้นทางทิ้งทันที",
      "ค. ย้ายข้อมูลไปที่พอร์ตเครื่องพิมพ์",
      "ง. แปลงเลขฐานสองเป็นเลขฐานสิบ"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 22] COMPARE เปรียบเทียบค่าเพื่อตั้งค่าใน Flag Register สำหรับตัดสินใจกระโดด โดยไม่แก้ไขค่าตัวแปรเดิม (หน้า 17)",
    category: "22. Logical Operation (ข้อ 22)"
  },

  // --- 23. System Control Operation (Obj 23) ---
  {
    id: 45,
    question: "45. คำสั่งประเภท System Control มีวัตถุประสงค์เพื่ออะไร?",
    options: [
      "ก. ใช้ในการเข้ารหัสข้อมูลก่อนส่งไปยัง I/O Module",
      "ข. ใช้ในการเปลี่ยนแปลงลำดับการประมวลผลหรือควบคุมสถานะ CPU/ระบบ",
      "ค. ใช้ในการจัดการหน่วยความจำเสมือนของระบบปฏิบัติการ",
      "ง. ใช้สำหรับการอ้างถึงข้อมูลแบบทันที (Immediate Value)"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 23] System Control ทำหน้าที่ควบคุมสถานะของ CPU และระบบโดยรวม เช่น HALT, NOP, Privileged instructions (หน้า 17)",
    category: "23. System Control (ข้อ 23)"
  },
  {
    id: 46,
    question: "46. คำสั่ง NOP (No Operation) มีประโยชน์อย่างไรในการเขียนโปรแกรมคำสั่งเครื่อง?",
    options: [
      "ก. เป็นคำสั่งว่างเปล่า ไม่ทำอะไร ใช้ในการหน่วงเวลา หรือเว้นช่องว่างสำหรับปรับแก้โค้ด",
      "ข. คำนวณรากที่สองของตัวเลข",
      "ค. รีเซ็ตระบบหน่วยความจำหลัก",
      "ง. ส่งข้อมูลออกพอร์ต I/O"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 23] NOP (No Operation) เป็นคำสั่งว่างเปล่าที่ประมวลผลโดยไม่ส่งผลกระทบต่อข้อมูล ใช้หน่วงเวลาหรือเว้นช่องว่าง (หน้า 17-18)",
    category: "23. System Control (ข้อ 23)"
  },

  // --- 24. Input/Output Operation (Obj 24) ---
  {
    id: 47,
    question: "47. คำสั่ง IN และ OUT ใช้ในการสื่อสารกับอุปกรณ์ภายนอก จัดอยู่ในประเภทใด?",
    options: [
      "ก. Conversion Operation",
      "ข. System Control Operation",
      "ค. Arithmetic Operation",
      "ง. Input/Output Operation"
    ],
    correctIndex: 3,
    explanation: "[วัตถุประสงค์ข้อ 24] IN (รับข้อมูลจากพอร์ต I/O) และ OUT (ส่งข้อมูลไปพอร์ต I/O) จัดอยู่ใน Input/Output Operation (หน้า 18)",
    category: "24. I/O Operation (ข้อ 24)"
  },
  {
    id: 48,
    question: "48. คำสั่ง IN AL, 60h มีผลการทำงานอย่างไร?",
    options: [
      "ก. อ่านข้อมูลจากพอร์ต I/O หมายเลข 60h เข้ามาเก็บไว้ในรีจิสเตอร์ AL",
      "ข. ส่งข้อมูลใน AL ไปยังพอร์ต 60h",
      "ค. บวกค่า 60h เข้ากับ AL",
      "ง. กระโดดไปทำคำสั่งบรรทัดที่ 60h"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 24] IN AL, 60h สั่งให้ CPU รับ (อ่าน) ข้อมูลจากพอร์ต I/O 60h เข้ามาเก็บใน Register AL (หน้า 18-19)",
    category: "24. I/O Operation (ข้อ 24)"
  },

  // --- 25. Conversion Operation (Obj 25) ---
  {
    id: 49,
    question: "49. คำสั่งที่ใช้ในการ แปลงข้อมูล จาก ASCII เป็น Binary จัดอยู่ใน Operation ประเภทใด?",
    options: [
      "ก. Logical Operation",
      "ข. System Control Operation",
      "ค. Conversion Operation",
      "ง. Data Transfer Operation"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 25] คำสั่งแปลงรูปแบบจัดเก็บข้อมูลจากชนิดหนึ่งเป็นอีกชนิดหนึ่ง จัดเป็น Conversion Operation (หน้า 19)",
    category: "25. Conversion Operation (ข้อ 25)"
  },
  {
    id: 50,
    question: "50. ตัวอย่างคำสั่ง FILD และ FIST ในสถาปัตยกรรม x86 ทำหน้าที่แปลงข้อมูลอย่างไร?",
    options: [
      "ก. FILD แปลง Integer เป็น Float, FIST แปลง Float เป็น Integer",
      "ข. FILD แปลงข้อความ เป็น ทศนิยม",
      "ค. FIST แปลง Binary เป็น BCD",
      "ง. ทั้งสองคำสั่งใช้สำหรับลบข้อมูลทศนิยม"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 25] FILD โหลด Integer แปลงเป็น Floating-point และ FIST เก็บ Floating-point แปลงกลับเป็น Integer (หน้า 19)",
    category: "25. Conversion Operation (ข้อ 25)"
  },

  // --- 26. Unconditional & Conditional Branch (Obj 26) ---
  {
    id: 51,
    question: "51. Unconditional Branch คือคำสั่งควบคุมระบบแบบใด?",
    options: [
      "ก. กระโดดไปยังแอดเดรสที่ระบุหากรีจิสเตอร์เป็นศูนย์",
      "ข. กระโดดไปยังแอดเดรสที่กำหนดไว้เสมอโดยไม่มีเงื่อนไข",
      "ค. ข้ามคำสั่งถัดไปหากเงื่อนไขที่กำหนดเป็นจริง",
      "ง. หยุดการทำงานของ CPU เพื่อรอสัญญาณ Interrupt"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 26] Unconditional Branch (เช่น JUMP) เปลี่ยนค่า PC กระโดดไปที่แอดเดรสใหม่ทันทีโดยไม่ตรวจเงื่อนไข (หน้า 20)",
    category: "26. Branch Control (ข้อ 26)"
  },
  {
    id: 52,
    question: "52. Conditional Branch มีกลไกการทำงานอย่างไรเมื่อเงื่อนไขที่กำหนดเป็นเท็จ (False)?",
    options: [
      "ก. CPU ไม่เปลี่ยนค่า PC แต่ปล่อยให้ PC เพิ่มขึ้นตามปกติเพื่อทำคำสั่งถัดไป",
      "ข. CPU จะรีเซ็ตเครื่องทันที",
      "ค. CPU จะกระโดดไปแอดเดรสแรกของ RAM",
      "ง. CPU จะหยุดทำงานตลอดกาล"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 26] หากเงื่อนไขเป็นเท็จ CPU จะไม่เปลี่ยนค่า PC แต่ปล่อยให้ PC เพิ่มค่าตามปกติเพื่อทำคำสั่งถัดไปในลำดับเดิม (หน้า 20)",
    category: "26. Branch Control (ข้อ 26)"
  },

  // --- 27. Skip Instruction (Obj 27) ---
  {
    id: 53,
    question: "53. คำสั่ง Skip (ข้ามคำสั่งถัดไปหากเงื่อนไขจริง) มีผลต่อ Program Counter (PC) อย่างไร?",
    options: [
      "ก. PC ถูกเพิ่มค่าให้ข้ามคำสั่งถัดไป (PC = PC + 2)",
      "ข. PC ถูกกำหนดค่าใหม่ตามแอดเดรสที่ระบุในคำสั่ง",
      "ค. PC ถูกบันทึกไว้ใน Stack ก่อนการข้ามคำสั่ง",
      "ง. PC ถูกกำหนดให้เป็นศูนย์เพื่อหยุดการทำงาน"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 27] เมื่อคำสั่ง Skip ทำงานแล้วเงื่อนไขเป็นจริง CPU จะเพิ่มค่า PC ให้ข้ามคำสั่งติดกันไป 1 บรรทัด (PC = PC + 2) (หน้า 21)",
    category: "27. Skip Instruction (ข้อ 27)"
  },
  {
    id: 54,
    question: "54. ข้อแตกต่างสำคัญระหว่างคำสั่ง Branch กับคำสั่ง Skip คืออะไร?",
    options: [
      "ก. Skip ต้องระบุแอดเดรสปลายทางเสมอ แต่ Branch ไม่ต้องระบุ",
      "ข. Branch ระบุแอดเดรสปลายทางชัดเจน แต่ Skip ไม่ได้ระบุแอดเดรสปลายทาง เป็นเพียงการข้ามไปข้างหน้า 1 คำสั่ง",
      "ค. Branch ใช้เฉพาะกับคณิตศาสตร์ ส่วน Skip ใช้กับ I/O",
      "ง. Skip ทำงานช้ากว่า Branch 10 เท่าเสมอ"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 27] Branch ระบุที่อยู่ใหม่ชัดเจน แต่ Skip ไม่ต้องระบุที่อยู่ เพียงข้ามไปข้างหน้า 1 คำสั่งเท่านั้น (หน้า 21)",
    category: "27. Skip Instruction (ข้อ 27)"
  },

  // --- 28. Procedure Call (Obj 28) ---
  {
    id: 55,
    question: "55. คำสั่ง Procedure Call มีหน้าที่หลักอย่างไรในการทำงานของโปรแกรม?",
    options: [
      "ก. สั่งให้ CPU หยุดการทำงานชั่วคราวเพื่อประหยัดพลังงาน",
      "ข. บันทึกตำแหน่งสุดท้ายของโปรแกรมลงในรีจิสเตอร์ IR",
      "ค. เรียกใช้ Interrupt Service Routine (ISR) ทันที",
      "ง. บันทึก Return Address ลงใน Stack แล้วกระโดดไปทำ Subroutine"
    ],
    correctIndex: 3,
    explanation: "[วัตถุประสงค์ข้อ 28] Procedure Call (CALL) นำค่า Return Address ไป Push ลง Stack แล้วเปลี่ยน PC กระโดดไปจุดเริ่มต้นของโปรแกรมย่อย (หน้า 22-23)",
    category: "28. Procedure Call (ข้อ 28)"
  },
  {
    id: 56,
    question: "56. เมื่อคำสั่ง Procedure Call ทำงาน ข้อมูลใดจะถูกนำไป Push ผลักลงบน Stack Memory?",
    options: [
      "ก. ค่าใน Instruction Register (IR)",
      "ข. ค่า Return Address (ตำแหน่งคำสั่งถัดไปจาก PC)",
      "ค. ค่าใน Accumulator ทั้งหมด",
      "ง. ค่าใน Status Register เท่านั้น"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 28] CPU นำค่าปัจจุบันของ Program Counter (PC) ซึ่งเป็น Return Address ไป Push ลงบน Stack (หน้า 23)",
    category: "28. Procedure Call (ข้อ 28)"
  },

  // --- 29. Subroutine Call & Return (Obj 29) ---
  {
    id: 57,
    question: "57. หน้าที่หลักของ Subroutine Call คล้ายกับ Procedure Call อย่างไร?",
    options: [
      "ก. Subroutine Call ไม่มีการบันทึก PC ลงใน Stack เลย",
      "ข. ทั้งสองคำสั่งใช้การบันทึกตำแหน่งกลับ (Return Address) เพื่อกระโดดไปทำชุดคำสั่งย่อย และสามารถกลับมาทำโปรแกรมหลักต่อได้",
      "ค. Subroutine Call ใช้ได้เฉพาะกับคำสั่งแบบ 1-Address เท่านั้น",
      "ง. Procedure Call ใช้สำหรับโปรแกรมระดับ Kernel เท่านั้น"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 29] ทั้งสองคำสั่งเป็นคำสั่งประเภทเดียวกัน คือใช้จัดการการเรียกใช้และกลับจากโปรแกรมย่อย (หน้า 22)",
    category: "29. Subroutine Call (ข้อ 29)"
  },
  {
    id: 58,
    question: "58. เมื่อ Subroutine ทำงานจบถึงคำสั่ง RETURN (RET) CPU จะดำเนินการอย่างไรเพื่อกลับสู่โปรแกรมหลัก?",
    options: [
      "ก. ทำการ Pop ค่า Return Address บนสุดของ Stack นำกลับมาใส่ใน Program Counter (PC)",
      "ข. ล้างหน่วยความจำ RAM ทั้งหมด",
      "ค. รีเซ็ตค่า Stack Pointer เป็นศูนย์",
      "ง. กระโดดไปที่คำสั่งแรกสุดของโปรแกรมหลักเสมอ"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 29] คำสั่ง RET จะ Pop ค่า Return Address จาก Stack ใส่กลับลงใน PC ทำให้กลับไปรันต่อจากจุดที่ค้างไว้ได้ (หน้า 23)",
    category: "29. Subroutine Call (ข้อ 29)"
  },

  // --- 30. Input/Output Control Commands (Obj 30) ---
  {
    id: 59,
    question: "59. คำสั่งควบคุมอุปกรณ์ Input/Output มีบทบาทใดที่สำคัญ?",
    options: [
      "ก. ใช้ในการเข้ารหัสข้อมูลที่รับมาจาก I/O Module",
      "ข. ใช้ในการคำนวณแอดเดรสของ I/O Port โดยใช้ PC",
      "ค. ใช้ในการจัดลำดับความสำคัญของ Interrupt ที่เข้ามา",
      "ง. ใช้ในการเริ่มต้น หยุด หรือตรวจสอบสถานะของอุปกรณ์ I/O"
    ],
    correctIndex: 3,
    explanation: "[วัตถุประสงค์ข้อ 30] คำสั่งควบคุม I/O ส่งออกไปยัง I/O Module เพื่อสั่งให้อุปกรณ์ เริ่ม/หยุด ทำงาน หรือสอบถามสถานะ (หน้า 25)",
    category: "30. I/O Control (ข้อ 30)"
  },
  {
    id: 60,
    question: "60. เหตุใด CPU จึงไม่สื่อสารกับอุปกรณ์ I/O โดยตรง แต่ต้องสื่อสารผ่าน I/O Module / Controller?",
    options: [
      "ก. เพราะความเร็วแตกต่างกันมาก, อุปกรณ์มีความหลากหลาย, และมีความซับซ้อนในการจัดการบัฟเฟอร์/สัญญาณ",
      "ข. เพราะ I/O Module ราคาถูกกว่า",
      "ค. เพราะ CPU ไม่มีบัสข้อมูล",
      "ง. เพราะ RAM ไม่ยอมให้ CPU ทำงานตรงกับอุปกรณ์"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 30] เหตุผลคือ ความเร็วที่ต่างกันมาก (CPU เร็ว อุปกรณ์ช้า), ความหลากหลายของอุปกรณ์, และความซับซ้อนในการจัดการ (หน้า 24-25)",
    category: "30. I/O Control (ข้อ 30)"
  },

  // --- 31. 4-Address Instruction (Obj 31) ---
  {
    id: 61,
    question: "61. ในคำสั่งแบบ 4-Address Instruction แอดเดรสตำแหน่งที่สี่ทำหน้าที่อะไร?",
    options: [
      "ก. ระบุตำแหน่งที่อยู่ของคำสั่งถัดไปที่จะถูกดึงมาประมวลผล (Next Instruction Address)",
      "ข. ระบุตำแหน่งของรีจิสเตอร์ Stack Pointer ที่ใช้งาน",
      "ค. ระบุขนาดของข้อมูล Operand ที่จะถูกนำมาใช้",
      "ง. ระบุประเภทของ Control Signal ที่ต้องการส่งออกไป"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 31] 4-Address Instruction มี 4 ฟิลด์แอดเดรส: Dest, Src1, Src2, และ Next Instruction Address (ตำแหน่งที่สี่) (หน้า 27)",
    category: "31. 4-Address Format (ข้อ 31)"
  },
  {
    id: 62,
    question: "62. ข้อเสียหลักที่สำคัญที่สุดของคำสั่งแบบ 4-Address Instruction คืออะไร?",
    options: [
      "ก. คำสั่งมีขนาดใหญ่มาก เปลืองพื้นที่หน่วยความจำ RAM และซับซ้อน จึงไม่นิยมใช้ใน CPU สมัยใหม่",
      "ข. ไม่สามารถคำนวณการบวกเลขได้",
      "ค. ทำให้โปรแกรมทำงานเร็วเกินไป",
      "ง. ต้องพึ่งพา Program Counter ตลอดเวลา"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 31] คำสั่ง 4-Address มีขนาดใหญ่มาก เปลือง RAM ซับซ้อน จึงไม่นิยมใช้ใน CPU สมัยใหม่ (หน้า 27)",
    category: "31. 4-Address Format (ข้อ 31)"
  },

  // --- 32. 3-Address Instruction (Obj 32) ---
  {
    id: 63,
    question: "63. คำสั่งแบบ 3-Address Instruction ในรูปแบบ ADD A, B, C หมายถึงอะไร?",
    options: [
      "ก. นำค่าใน B บวกกับ C แล้วเก็บผลลัพธ์ไว้ในตำแหน่ง A (A = B + C)",
      "ข. นำค่าใน A บวกกับ B แล้วเก็บผลลัพธ์ไว้ในตำแหน่ง C (C = A + B)",
      "ค. นำค่าคงที่ C บวกกับ A แล้วเก็บในรีจิสเตอร์ B",
      "ง. โหลดค่า A, B, C มาไว้ในรีจิสเตอร์ CPU พร้อมกัน"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 32] 3-Address Format สั่งให้ Dest = Src1 + Src2 ดังนั้น ADD A, B, C หมายถึงเอา B + C ไปเก็บใน A (หน้า 28)",
    category: "32. 3-Address Format (ข้อ 32)"
  },
  {
    id: 64,
    question: "64. ในคำสั่งแบบ 3-Address Instruction คำสั่งถัดไปจะถูกกำหนดอย่างไร?",
    options: [
      "ก. ถูกกำหนดโดย Program Counter (PC) เพิ่มค่าขึ้นอัตโนมัติ",
      "ข. ต้องระบุในฟิลด์ที่ 4 เสมอ",
      "ค. กำหนดโดย Stack Pointer",
      "ง. กำหนดโดย I/O Module"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 32] 3-Address ไม่ต้องใส่ที่อยู่คำสั่งถัดไปในคำสั่ง แต่ใช้ PC เพิ่มค่าขึ้นอัตโนมัติ (หน้า 28)",
    category: "32. 3-Address Format (ข้อ 32)"
  },

  // --- 33. 2-Address Instruction (Obj 33) ---
  {
    id: 65,
    question: "65. ข้อเสียหลักของ 2-Address Instruction เมื่อเทียบกับ 3-Address คืออะไร?",
    options: [
      "ก. คำสั่งมีความซับซ้อนในการตีความสูงมากเกินไป",
      "ข. ต้องใช้คำสั่งย้ายข้อมูล (MOVE) เพิ่มเพื่อรักษาค่าเริ่มต้น เนื่องจาก Operand ตัวแรกจะถูกเขียนทับด้วยผลลัพธ์",
      "ค. ไม่สามารถใช้กับ Logical Operation ที่ซับซ้อนได้",
      "ง. ใช้พื้นที่หน่วยความจำในการจัดเก็บข้อมูลน้อยเกินไป"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 33] 2-Address คำนวณ Dest/Src1 = Dest/Src1 + Src2 ทำให้ Operand ตัวแรกโดนเขียนทับ ต้องใช้ MOVE คัดลอกหากต้องการใช้ค่าเดิม (หน้า 28)",
    category: "33. 2-Address Format (ข้อ 33)"
  },
  {
    id: 66,
    question: "66. คำสั่ง ADD R1, R2 แบบ 2-Address Instruction มีผลการทำงานอย่างไร?",
    options: [
      "ก. R1 = R1 + R2 (นำค่า R2 บวกกับ R1 แล้วเก็บผลลัพธ์ทับใน R1)",
      "ข. R2 = R1 + R2",
      "ค. R1 = R2",
      "ง. R2 = R1"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 33] 2-Address คำสั่ง ADD R1, R2 นำค่า R2 บวกกับ R1 แล้วเขียนผลลัพธ์ทับลงใน R1 (หน้า 28)",
    category: "33. 2-Address Format (ข้อ 33)"
  },

  // --- 34. 1-Address Instruction (Obj 34) ---
  {
    id: 67,
    question: "67. ในคำสั่งแบบ 1-Address Instruction Operand อีกตัวหนึ่งถูกระบุโดยปริยายว่าเป็นอะไร?",
    options: [
      "ก. หน่วยความจำหลัก (Main Memory)",
      "ข. Stack Pointer Register",
      "ค. Accumulator Register (รีจิสเตอร์ตัวสะสม AC)",
      "ง. Instruction Register"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 34] 1-Address Instruction จะอ้างอิงรีจิสเตอร์พิเศษ Accumulator (AC) โดยปริยายเสมอ (หน้า 29)",
    category: "34. 1-Address Format (ข้อ 34)"
  },
  {
    id: 68,
    question: "68. ข้อใดคือความสัมพันธ์ของจำนวน Address ในคำสั่งกับประสิทธิภาพโดยรวม?",
    options: [
      "ก. Address มาก -> คำสั่งขนาดใหญ่ โปรแกรมสั้น | Address น้อย -> คำสั่งขนาดเล็ก โปรแกรมยาวขึ้นและต้องเข้าถึง RAM/AC บ่อย",
      "ข. Address ยิ่งน้อย โปรแกรมยิ่งสั้นลงเสมอ",
      "ค. Address มากทำให้คำสั่งทำงานช้าลง 100 เท่าเสมอ",
      "ง. จำนวน Address ไม่ส่งผลต่อขนาดคำสั่งหรือความยาวโปรแกรม"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 34] Address มากทำให้คำสั่งใหญ่แต่โปรแกรมสั้น ส่วน Address น้อยทำให้คำสั่งเล็กแต่ต้องใช้หลายบรรทัดโปรแกรมจึงยาว (หน้า 29)",
    category: "34. 1-Address Format (ข้อ 34)"
  },

  // --- 35. Immediate Addressing Mode (Obj 35) ---
  {
    id: 69,
    question: "69. Immediate Addressing Mode แอดเดรสฟิลด์ (Address Field) ของคำสั่งบรรจุอะไร?",
    options: [
      "ก. ที่อยู่ของรีจิสเตอร์ที่เก็บข้อมูลจริง",
      "ข. ที่อยู่ของหน่วยความจำที่เก็บข้อมูล",
      "ค. ข้อมูลจริง (ค่าคงที่) ที่จะนำมาใช้ในการดำเนินการโดยตรง",
      "ง. ที่อยู่ของคำสั่งถัดไปที่จะต้องกระโดดไป"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 35] Immediate Mode ข้อมูลจริง (ค่าคงที่) ถูกบรรจุอยู่ในตัวคำสั่งเลย ไม่ต้องไปอ่านที่ไหนเพิ่ม (หน้า 30)",
    category: "35. Immediate Mode (ข้อ 35)"
  },
  {
    id: 70,
    question: "70. สิ่งใดคือข้อดีที่สำคัญที่สุดของ Immediate Addressing Mode?",
    options: [
      "ก. เข้าถึงข้อมูลได้เร็วที่สุด เพราะไม่ต้องเสียเวลาอ่านหน่วยความจำหลักหรือรีจิสเตอร์เพิ่มเติม",
      "ข. สามารถเก็บข้อมูลขนาดใหญ่ไม่จำกัดบิตได้",
      "ค. สามารถย้ายตำแหน่งข้อมูลในขณะรันโปรแกรมได้",
      "ง. เหมาะสำหรับใช้กับตัวแปรที่เปลี่ยนค่าตลอดเวลา"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 35] ข้อดีคือเร็วที่สุดเพราะข้อมูลพร้อมใช้ทันทีในตัวคำสั่ง ไม่ต้องเข้าถึง RAM หรือ Register (หน้า 31)",
    category: "35. Immediate Mode (ข้อ 35)"
  },

  // --- 36. Register Addressing Mode (Obj 36) ---
  {
    id: 71,
    question: "71. ใน Register Addressing Mode แอดเดรสฟิลด์ของคำสั่งระบุอะไร?",
    options: [
      "ก. หมายเลขหรือชื่อของรีจิสเตอร์ที่เก็บข้อมูลที่จะนำมาใช้",
      "ข. ตำแหน่งที่อยู่จริงในหน่วยความจำหลัก",
      "ค. ค่าคงที่ที่ต้องนำมาบวกกับ PC",
      "ง. ที่อยู่ของ Input/Output Port"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 36] Register Mode ส่วน Operand Field จะระบุชื่อหรือหมายเลขรีจิสเตอร์ภายใน CPU ที่เก็บข้อมูลนั้น (หน้า 31)",
    category: "36. Register Mode (ข้อ 36)"
  },
  {
    id: 72,
    question: "72. ข้อใดคือความแตกต่างระหว่าง Immediate Addressing Mode และ Register Addressing Mode?",
    options: [
      "ก. Immediate ข้อมูลอยู่ในตัวคำสั่ง (ค่าคงที่) | Register ข้อมูลอยู่ในรีจิสเตอร์ที่คำสั่งชี้ไป (ตัวแปร)",
      "ข. Immediate อยู่ใน RAM ส่วน Register อยู่ใน Harddisk",
      "ค. Register เร็วที่สุด ส่วน Immediate ช้าที่สุด",
      "ง. ทั้งสองโหมดต้องเข้าถึง RAM 2 ครั้งเท่ากัน"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 36] Immediate ข้อมูลอยู่ในตัวคำสั่งเลย (ค่าคงที่) ส่วน Register ข้อมูลอยู่ในรีจิสเตอร์ที่คำสั่งชี้ไป (ตัวแปร) (หน้า 32)",
    category: "36. Register Mode (ข้อ 36)"
  },

  // --- 37. Direct Addressing Mode (Obj 37) ---
  {
    id: 73,
    question: "73. ลักษณะเด่นของการกำหนดแอดเดรสแบบ Direct Addressing Mode คือข้อใด?",
    options: [
      "ก. แอดเดรสฟิลด์ระบุตำแหน่งที่อยู่จริง (Effective Address) ของ Operand ในหน่วยความจำหลักโดยตรง",
      "ข. ต้องมีการเข้าถึงหน่วยความจำสองครั้งก่อนได้ข้อมูล",
      "ค. ข้อมูลจริงที่ต้องการถูกเก็บอยู่ในรหัสคำสั่งเลย",
      "ง. แอดเดรสถูกคำนวณจากค่าใน PC บวกกับค่าคงที่"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 37] Direct Addressing Mode มีลักษณะเด่นคือ Operand Field ระบุตำแหน่งที่อยู่จริงใน RAM ตรงๆ (หน้า 32-33)",
    category: "37. Direct Mode (ข้อ 37)"
  },
  {
    id: 74,
    question: "74. คำสั่ง LOAD A, 1000h ใน Direct Addressing Mode หมายถึงการทำงานใด?",
    options: [
      "ก. โหลดข้อมูลที่เก็บอยู่ในตำแหน่งหน่วยความจำ 1000h มาไว้ในรีจิสเตอร์ A",
      "ข. โหลดตัวเลข 1000 ใส่ใน A",
      "ค. เอาค่า A ไปเก็บที่ตำแหน่ง 1000h",
      "ง. เพิ่มค่า A ขึ้นอีก 1000"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 37] LOAD A, 1000h ใน Direct Mode สั่งให้ CPU อ่านข้อมูลจากแอดเดรส RAM 1000h มาใส่ใน Register A (หน้า 32)",
    category: "37. Direct Mode (ข้อ 37)"
  },

  // --- 38. Register Indirect Addressing Mode (Obj 38) ---
  {
    id: 75,
    question: "75. Register Indirect Addressing Mode แอดเดรสฟิลด์ในคำสั่งทำหน้าที่อะไร?",
    options: [
      "ก. ระบุหมายเลขรีจิสเตอร์ที่เก็บตำแหน่งที่อยู่จริง (Effective Address) ของ Operand ในหน่วยความจำ",
      "ข. บรรจุข้อมูลจริง (Immediate Value) ที่จะนำมาใช้ทันที",
      "ค. ชี้ไปยังตำแหน่งของ Stack ที่เก็บ Return Address",
      "ง. ระบุ Offset ที่ต้องนำมาบวกกับ Base Register"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 38] Register Indirect สั่งระบุชื่อรีจิสเตอร์ แต่ค่าภายในรีจิสเตอร์นั้นเป็นที่อยู่ RAM ของข้อมูลจริง (หน้า 33-34)",
    category: "38. Reg Indirect Mode (ข้อ 38)"
  },
  {
    id: 76,
    question: "76. ข้อแตกต่างหลักในการเข้าถึงข้อมูลระหว่าง Direct Addressing และ Register Indirect Addressing คือข้อใด?",
    options: [
      "ก. Direct ชี้ไปที่แอดเดรส RAM โดยตรง | Register Indirect ชี้ไปที่รีจิสเตอร์ที่บรรจุแอดเดรส RAM ไว้ ซึ่งช่วยเพิ่มความยืดหยุ่นในการวนลูป",
      "ข. Direct ใช้กับ Register ส่วน Indirect ใช้กับ RAM",
      "ค. Register Indirect ไม่ต้องอ่าน RAM เลย",
      "ง. Direct ทำงานช้ากว่า Register Indirect 10 เท่าเสมอ"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 38] Direct ชี้แอดเดรส RAM ตรงๆ ส่วน Register Indirect ชี้ไปที่รีจิสเตอร์ที่เก็บแอดเดรส RAM ไว้ ช่วยให้ยืดหยุ่นวนลูปง่าย (หน้า 34-35)",
    category: "38. Reg Indirect Mode (ข้อ 38)"
  },

  // --- 39. Indexed Addressing Mode (Obj 39) ---
  {
    id: 77,
    question: "77. การคำนวณแอดเดรสจริงใน Indexed Addressing Mode มีสูตรการคำนวณอย่างไร?",
    options: [
      "ก. แอดเดรสจริง (EA) = (ค่าใน Index Register) + Offset (ค่าคงที่ในคำสั่ง)",
      "ข. แอดเดรสจริง (EA) = (ค่าใน PC) + Offset",
      "ค. แอดเดรสจริง (EA) = (ค่าใน Stack Pointer)",
      "ง. แอดเดรสจริง (EA) = (ค่าคงที่ในคำสั่ง)"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 39] Indexed Mode คำนวณจาก: Effective Address (EA) = (Index Register Content) + Offset (หน้า 35-36)",
    category: "39. Indexed Mode (ข้อ 39)"
  },
  {
    id: 78,
    question: "78. Indexed Addressing Mode มักถูกนำไปประยุกต์ใช้งานในกรณีใดได้ดีที่สุด?",
    options: [
      "ก. การเข้าถึงค่าคงที่เดี่ยว",
      "ข. การเข้าถึงสมาชิกของโครงสร้างข้อมูลแบบอาเรย์ (Array / Table)",
      "ค. การจัดการกับ Stack Pointer ในการเรียกใช้ Subroutine",
      "ง. การกระโดดแบบไม่มีเงื่อนไข"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 39] Indexed Addressing เหมาะสำหรับการเข้าถึงสมาชิกใน Array หรือ Table เพียงปรับเปลี่ยนค่าดัชนีใน Index Register (หน้า 37)",
    category: "39. Indexed Mode (ข้อ 39)"
  },

  // --- 40. Relative Addressing Mode (Obj 40) ---
  {
    id: 79,
    question: "79. Relative Addressing Mode มีสูตรการคำนวณแอดเดรสจริงอย่างไร?",
    options: [
      "ก. แอดเดรสจริง (EA) = (ค่าใน Instruction Register) + Offset",
      "ข. แอดเดรสจริง (EA) = (ค่าใน Stack Pointer) + Offset",
      "ค. แอดเดรสจริง (EA) = (ค่าใน Accumulator) + Offset",
      "ง. แอดเดรสจริง (EA) = (ค่าใน Program Counter - PC) + Offset"
    ],
    correctIndex: 3,
    explanation: "[วัตถุประสงค์ข้อ 40] Relative Mode คำนวณจาก: Effective Address (EA) = (Program Counter Content) + Offset (หน้า 37-38)",
    category: "40. Relative Mode (ข้อ 40)"
  },
  {
    id: 80,
    question: "80. ข้อดีที่สำคัญที่สุดของการใช้ Relative Addressing Mode คืออะไร?",
    options: [
      "ก. สามารถอ้างถึงหน่วยความจำขนาดใหญ่ได้อย่างไร้ขีดจำกัด",
      "ข. ช่วยให้โปรแกรมเป็น Relocatable Code สามารถโหลดไปรันที่ตำแหน่งใดใน RAM ก็ได้โดยไม่ต้องแก้ไขโค้ด",
      "ค. ทำให้การเรียกใช้ I/O Port มีความรวดเร็วและปลอดภัยขึ้น",
      "ง. เป็นโหมดเดียวที่ใช้ในการกระโดดแบบมีเงื่อนไขในโปรแกรม"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 40] อ้างอิงแอดเดรสสัมพันธ์กับ PC ทำให้โค้ดเป็น Relocatable โหลดลงตำแหน่งใดใน RAM ก็รันได้ทันที (หน้า 38)",
    category: "40. Relative Mode (ข้อ 40)"
  },

  // --- 41. Stack Addressing Mode (Obj 41) ---
  {
    id: 81,
    question: "81. ใน Stack Addressing Mode คำสั่ง PUSH มีผลต่อ Stack Pointer (SP) อย่างไร?",
    options: [
      "ก. SP ถูกปรับค่าให้ชี้ไปยังตำแหน่งใหม่ก่อนการบันทึกข้อมูล",
      "ข. SP ถูกกำหนดค่าใหม่จาก Operand ที่ระบุในคำสั่ง",
      "ค. SP ถูกเพิ่มค่าขึ้นโดยไม่คำนึงถึงขนาดของข้อมูล",
      "ง. SP ไม่เปลี่ยนแปลงเลยในระหว่างการทำ PUSH"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 41] PUSH จะทำการปรับลด/ขยับค่า SP ให้ชี้ไปยังตำแหน่งใหม่บนสุดของ Stack ก่อนเขียนข้อมูล (หน้า 39)",
    category: "41. Stack Mode (ข้อ 41)"
  },
  {
    id: 82,
    question: "82. เหตุผลที่คำสั่งใน Stack Addressing Mode (เช่น PUSH AX, POP BX) ไม่ต้องมี Address Field คืออะไร?",
    options: [
      "ก. เพราะ Operand ถูกกำหนดโดยปริยายว่าเป็นข้อมูลที่อยู่บนสุดของ Stack ผ่าน Stack Pointer (SP)",
      "ข. เพราะข้อมูลอยู่ใน RAM เสมอ",
      "ค. เพราะคำสั่ง Stack ทำงานเฉพาะในโหมด Kernel",
      "ง. เพราะไม่มีการดึงข้อมูลใดๆ"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 41] ไม่ต้องระบุที่อยู่ เพราะเข้าใจกันโดยปริยายว่าทำงานกับข้อมูลบนสุดของ Stack ผ่าน SP เสมอ (หน้า 39)",
    category: "41. Stack Mode (ข้อ 41)"
  },

  // --- Extended Questions 83-100 covering deeper nuances of Objectives 1-41 ---
  {
    id: 83,
    question: "83. เมื่อเกิด Interrupt แทรกเข้ามาในระหว่างการประมวลผล CPU จะตอบสนองในระยะใดของ Instruction Cycle?",
    options: [
      "ก. Fetch Cycle",
      "ข. Execute Cycle",
      "ค. Interrupt Cycle",
      "ง. Data Operation Cycle"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 3] CPU จะตอบสนองสัญญาณ Interrupt ใน Interrupt Cycle เพื่อบันทึกสถานะเดิมก่อนสลับไปทำงาน Interrupt Handler (หน้า 49)",
    category: "3. Instruction Cycle (ข้อ 3)"
  },
  {
    id: 84,
    question: "84. คำสั่ง ADD R1, #50 ในที่นี้ Operand ตัวที่สอง (#50) ใช้ Addressing Mode ใด?",
    options: [
      "ก. Register Addressing Mode",
      "ข. Direct Addressing Mode",
      "ค. Immediate Addressing Mode",
      "ง. Relative Addressing Mode"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 35] สัญลักษณ์ #50 บ่งบอกว่าเป็นค่าคงที่บรรจุในคำสั่งโดยตรง จึงเป็น Immediate Addressing Mode (หน้า 31, 49)",
    category: "35. Immediate Mode (ข้อ 35)"
  },
  {
    id: 85,
    question: "85. โครงสร้างหน่วยความจำแบบ Stack ทำงานด้วยกลไกการเข้าถึงข้อมูลแบบใด?",
    options: [
      "ก. FIFO (First In, First Out)",
      "ข. LIFO (Last In, First Out - เข้าทีหลังออกก่อน)",
      "ค. Random Access",
      "ง. Sequential Access"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 41] Stack เป็นโครงสร้างข้อมูลแบบ LIFO (Last In, First Out) เหมือนการซ้อนจาน (หน้า 22, 39)",
    category: "41. Stack Mode (ข้อ 41)"
  },
  {
    id: 86,
    question: "86. สัญญาณประเภทใดที่ CPU ส่งไปยังส่วนต่างๆ ของระบบคอมพิวเตอร์เพื่อควบคุมลำดับการทำงานในวัฏจักรคำสั่ง?",
    options: [
      "ก. Data Signals",
      "ข. Instruction Signals",
      "ค. Control Signals (ส่งจาก Control Unit)",
      "ง. Status Signals"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 3] Control Signals ส่งกำกับการทำงานในแต่ละขั้นตอนของวัฏจักรจาก Control Unit (หน้า 6)",
    category: "3. Instruction Cycle (ข้อ 3)"
  },
  {
    id: 87,
    question: "87. คำสั่งประเภทใดต่อไปนี้ที่จัดอยู่ในกลุ่ม Privileged Instructions (คำสั่งสิทธิ์พิเศษ)?",
    options: [
      "ก. คำสั่ง ADD และ SUB",
      "ข. คำสั่งเกี่ยวกับระบบปฏิบัติการ (Kernel Mode) เช่น การจัดการสิทธิ์ฮาร์ดแวร์และหน่วยความจำ",
      "ค. คำสั่ง PUSH และ POP",
      "ง. คำสั่ง NOP"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 23] Privileged Instructions เป็นคำสั่งสิทธิ์พิเศษที่ต้องใช้สิทธิ์ระบบปฏิบัติการในการเข้าถึงฮาร์ดแวร์โดยตรง (หน้า 17)",
    category: "23. System Control (ข้อ 23)"
  },
  {
    id: 88,
    question: "88. รีจิสเตอร์ใดทำหน้าที่เป็นเนื้อที่พักข้อมูลชั่วคราวในการรับส่งข้อมูลระหว่าง CPU กับหน่วยความจำหลัก?",
    options: [
      "ก. Instruction Register (IR)",
      "ข. Memory Buffer Register (MBR)",
      "ค. Program Counter (PC)",
      "ง. Flag Register"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 5] Memory Buffer Register (MBR) ทำหน้าที่เป็นรีจิสเตอร์พักข้อมูลที่รับส่งกับหน่วยความจำหลัก (หน้า 8)",
    category: "5. IF Process (ข้อ 5)"
  },
  {
    id: 89,
    question: "89. การเปรียบเทียบ RISC และ CISC คำสั่งประเภทใดที่เน้นคำสั่งพื้นฐานจำนวนมากแต่ประมวลผลได้อย่างรวดเร็ว?",
    options: [
      "ก. CISC (Complex Instruction Set Computer)",
      "ข. RISC (Reduced Instruction Set Computer)",
      "ค. MISC (Minimum Instruction Set)",
      "ง. VLIW (Very Long Instruction Word)"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 15] RISC เน้นคำสั่งพื้นฐานขนาดเล็กจำนวนมากแต่ทำได้รวดเร็ว ส่วน CISC มีคำสั่งซับซ้อนมาก (หน้า 13)",
    category: "15. Operation Repertory Design (ข้อ 15)"
  },
  {
    id: 90,
    question: "90. ในการสั่งงานพอร์ต I/O สัญญาณควบคุมใดที่ถูกส่งไปบน Control Bus เมื่อ CPU ต้องการเขียนข้อมูลออกไปยังอุปกรณ์?",
    options: [
      "ก. Read signal",
      "ข. Write signal",
      "ค. Interrupt signal",
      "ง. Reset signal"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 30] สัญญาณ Write signal จะถูกส่งบน Control Bus เพื่อสั่งเขียนข้อมูลออกไปยังอุปกรณ์ I/O (หน้า 26)",
    category: "30. I/O Control (ข้อ 30)"
  },
  {
    id: 91,
    question: "91. หากต้องการตรวจดูว่าเครื่องพิมพ์พร้อมรับข้อมูลเพื่อพิมพ์งานหรือไม่ CPU จะส่งคำสั่งชนิดใดไปอ่าน Status Register?",
    options: [
      "ก. Control Command (Reset)",
      "ข. Test / Status Command (Ready/Busy check)",
      "ค. Arithmetic Command (ADD)",
      "ง. Conversion Command"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 30] CPU ส่งคำสั่ง Test/Status Command เพื่ออ่านค่า Status Register เช็ก Ready/Busy หรือ Error (หน้า 25)",
    category: "30. I/O Control (ข้อ 30)"
  },
  {
    id: 92,
    question: "92. รูปแบบคำสั่งแบบใดที่มีการใช้งานใน CPU ยุคปัจจุบันมากที่สุดร่วมกับการใช้ Register จำนวนมาก?",
    options: [
      "ก. 4-Address และ 0-Address",
      "ข. 3-Address หรือ 2-Address",
      "ค. 1-Address เท่านั้น",
      "ง. 4-Address เท่านั้น"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 31] ปัจจุบัน CPU ส่วนใหญ่ใช้รูปแบบ 3-Address หรือ 2-Address ร่วมกับการใช้ Register จำนวนมาก (หน้า 29)",
    category: "32. 3-Address Format (ข้อ 32)"
  },
  {
    id: 93,
    question: "93. คำสั่ง BNE LABEL_A (Branch If Not Equal) ใน Relative Addressing Mode คำนวณแอดเดรสเป้าหมายอย่างไร?",
    options: [
      "ก. EA = (PC ปัจจุบัน) + Offset ไปยัง LABEL_A",
      "ข. EA = (SP) + 10",
      "ค. EA = (Accumulator)",
      "ง. EA = 1000h เสมอ"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 40] BNE ใน Relative Mode คำนวณแอดเดรสจาก: EA = (PC Content) + Offset จากตำแหน่งปัจจุบันไปยัง LABEL_A (หน้า 38)",
    category: "40. Relative Mode (ข้อ 40)"
  },
  {
    id: 94,
    question: "94. โหมดการกำหนดแอดเดรสแบบใดที่มีความเร็วช้ากว่า Direct Addressing เล็กน้อยเนื่องจากต้องเข้าถึง Register ก่อน แล้วจึงเข้าถึง RAM?",
    options: [
      "ก. Immediate Addressing Mode",
      "ข. Register Addressing Mode",
      "ค. Register Indirect Addressing Mode",
      "ง. Stack Addressing Mode"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 38] Register Indirect ช้ากว่า Direct เล็กน้อยเพราะต้องเสียเวลาอ่านค่าใน Register 1 ครั้งเพื่อเอาแอดเดรสไปอ่าน RAM (หน้า 35)",
    category: "38. Reg Indirect Mode (ข้อ 38)"
  },
  {
    id: 95,
    question: "95. รีจิสเตอร์ชนิดใดที่คอยเก็บผลลัพธ์จากการคำนวณทางคณิตศาสตร์และตรรกะในระบบคำสั่งแบบ 1-Address?",
    options: [
      "ก. Instruction Register (IR)",
      "ข. Accumulator Register (AC)",
      "ค. Memory Address Register (MAR)",
      "ง. Program Counter (PC)"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 34] ในสถาปัตยกรรมแบบ 1-Address ผลลัพธ์จากการประมวลผลจะถูกเก็บไว้ใน Accumulator Register (AC) เสมอ (หน้า 29)",
    category: "34. 1-Address Format (ข้อ 34)"
  },
  {
    id: 96,
    question: "96. หาก R2 มีค่า 1000h และคำสั่งคือ LOAD R1, 10[R2] ใน Indexed Addressing Mode แอดเดรสจริง (EA) จะมีค่าเท่าใด?",
    options: [
      "ก. 1000h",
      "ข. 1010h (1000h + 10h)",
      "ค. 10h",
      "ง. 2000h"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 39] EA = (Index Register R2) + Offset = 1000h + 10h = 1010h (หน้า 37)",
    category: "39. Indexed Mode (ข้อ 39)"
  },
  {
    id: 97,
    question: "97. การแปลงข้อมูลจากเลขฐานสอง (Binary) เป็น BCD (Binary Coded Decimal) จัดอยู่ในคำสั่งประเภทใด?",
    options: [
      "ก. Operation Data Transfer",
      "ข. Operation Arithmetic",
      "ค. Operation Conversion",
      "ง. Operation System Control"
    ],
    correctIndex: 2,
    explanation: "[วัตถุประสงค์ข้อ 25] การแปลงเลขฐาน เช่น Binary to BCD จัดเป็น Operation Conversion (คำสั่งแปลงข้อมูล) (หน้า 19)",
    category: "25. Conversion Operation (ข้อ 25)"
  },
  {
    id: 98,
    question: "98. เมื่อ CPU ดึงคำสั่งจาก MBR ไปเก็บไว้ใน IR แล้ว เหตุการณ์ใดจะเกิดขึ้นถัดมากับค่าใน Program Counter (PC)?",
    options: [
      "ก. ค่าใน PC จะถูกล้างเป็น 0000h",
      "ข. ค่าใน PC จะถูกเพิ่มขึ้นอัตโนมัติเพื่อชี้ไปยังตำแหน่งคำสั่งถัดไปสำหรับรอบต่อไป",
      "ค. ค่าใน PC จะถูกส่งออกไปยังพอร์ตเครื่องพิมพ์",
      "ง. ค่าใน PC จะหยุดการอัปเดตอย่างถาวร"
    ],
    correctIndex: 1,
    explanation: "[วัตถุประสงค์ข้อ 5] ในขั้นตอน IF ค่า PC จะถูกเพิ่มขึ้นอัตโนมัติ (PC++) เพื่อเตรียมพร้อมสำหรับรอบหน้าทันที (หน้า 8)",
    category: "5. IF Process (ข้อ 5)"
  },
  {
    id: 99,
    question: "99. คำสั่ง TRAP หรือ Supervisor Call (SVC) มีหน้าที่คล้ายคลึงกับสิ่งใดในการขอรับบริการจากระบบปฏิบัติการ?",
    options: [
      "ก. การเรียกสายด่วนไปยังผู้ดูแลระบบ (OS Kernel) เพื่อขอทำกิจกรรมที่โปรแกรมผู้ใช้ปกติไม่มีสิทธิ์ทำ",
      "ข. การลบไฟล์ในฮาร์ดดิสก์",
      "ค. การปิดหน้าจอภาพ",
      "ง. การบวกตัวเลขสองตัว"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 23] SVC/TRAP เปรียบเหมือนการเรียกสายด่วนขอให้ OS Kernel ทำงานที่มีสิทธิ์พิเศษให้โปรแกรมผู้ใช้ (หน้า 18)",
    category: "23. System Control (ข้อ 23)"
  },
  {
    id: 100,
    question: "100. สรุปความแตกต่างที่สำคัญที่สุดระหว่าง Direct Addressing และ Register Addressing คือข้อใด?",
    options: [
      "ก. Direct ระบุตำแหน่งข้อมูลอยู่ในหน่วยความจำหลัก (RAM) | Register ระบุตำแหน่งข้อมูลอยู่ในรีจิสเตอร์ภายใน CPU ซึ่งทำงานได้รวดเร็วกว่า",
      "ข. Direct อยู่ใน CPU ส่วน Register อยู่ใน RAM",
      "ค. Direct ใช้คำสั่ง PUSH ส่วน Register ใช้คำสั่ง JUMP",
      "ง. ทั้งสองโหมดไม่มีความแตกต่างกันเลย"
    ],
    correctIndex: 0,
    explanation: "[วัตถุประสงค์ข้อ 36, 37] Direct ข้อมูลอยู่ใน RAM ส่วน Register ข้อมูลอยู่ในรีจิสเตอร์ของ CPU ซึ่งเข้าถึงได้รวดเร็วกว่ามาก (หน้า 31-33)",
    category: "36. Register Mode (ข้อ 36)"
  }
];


export const quizQuestionsSet1 = quizQuestions.map(q => ({
  ...q,
  setId: 1,
  setName: 'ชุดที่ 1: คลังข้อสอบทบทวน (100 ข้อ)'
}));

export const quizQuestionsSet2 = [
  {
    "id": 101,
    "question": "1. ชุดคำสั่ง (Instruction Set) หมายถึงข้อใดถูกต้องที่สุด?",
    "options": [
      "ก. กลุ่มโปรแกรมประยุกต์ทั้งหมดที่ติดตั้งอยู่ในฮาร์ดดิสก์",
      "ข. ชุดข้อมูลที่จัดเก็บอยู่ในหน่วยความจำแคชของ CPU",
      "ค. กลุ่มคำสั่งพื้นฐานทั้งหมดที่ CPU สามารถเข้าใจและปฏิบัติตามได้",
      "ง. ลำดับของคำสั่งที่เขียนด้วยภาษาระดับสูงโดยโปรแกรมเมอร์"
    ],
    "correctIndex": 2,
    "explanation": "ชุดคำสั่ง (Instruction Set) คือกลุ่มของคำสั่งพื้นฐานทั้งหมดที่ CPU ของคอมพิวเตอร์นั้นๆ สามารถเข้าใจและปฏิบัติตามได้ เปรียบเสมือนภาษาเฉพาะของ CPU",
    "category": "หมวดที่ 1: ความหมาย องค์ประกอบ OpCode/Operand",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 102,
    "question": "2. กระบวนการแปลงรหัสต้นฉบับ (Source Code) ไปเป็นภาษาเครื่องเพื่อส่งให้ CPU ประมวลผล ใช้ตัวแปลภาษาใด?",
    "options": [
      "ก. Compiler / Interpreter",
      "ข. Operating System",
      "ค. Linker / Loader",
      "ง. Control Unit"
    ],
    "correctIndex": 0,
    "explanation": "รหัสต้นฉบับภาษาระดับสูงจะถูกแปลผ่าน Compiler หรือ Interpreter เพื่อให้อยู่ในรูป Object Code (ภาษาเครื่อง) แล้วจึงส่งให้ CPU ประมวลผล",
    "category": "หมวดที่ 1: ความหมาย องค์ประกอบ OpCode/Operand",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 103,
    "question": "3. ส่วนประกอบสำคัญที่บอกให้ CPU รู้ว่าต้องทำการ \"ปฏิบัติการ\" (Operation) อะไรเรียกว่าอะไร?",
    "options": [
      "ก. Program Counter",
      "ข. Operand",
      "ค. Address Register",
      "ง. OpCode (Operation Code)"
    ],
    "correctIndex": 3,
    "explanation": "OpCode คือรหัสส่วนหนึ่งของคำสั่งที่บอก CPU ว่าต้องปฏิบัติการอะไร เช่น บวก (ADD), ลบ (SUB), โหลด (LOAD)",
    "category": "หมวดที่ 1: ความหมาย องค์ประกอบ OpCode/Operand",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 104,
    "question": "4. Operand ในโครงสร้างคำสั่งทำหน้าที่อะไร?",
    "options": [
      "ก. กำหนดประเภทของระบบปฏิบัติการ",
      "ข. ระบุข้อมูล หรือที่อยู่ (Address) ของข้อมูลที่ OpCode นำไปใช้",
      "ค. ถอดรหัสสัญญาณนาฬิกาของ CPU",
      "ง. เก็บผลลัพธ์การเปรียบเทียบตรรกะชั่วคราว"
    ],
    "correctIndex": 1,
    "explanation": "Operand เป็นส่วนที่ระบุ \"ข้อมูล\" หรือ \"ที่อยู่\" ของข้อมูลที่ OpCode นำไปใช้ในการปฏิบัติการ หรือระบุตำแหน่งจัดเก็บผลลัพธ์",
    "category": "หมวดที่ 1: ความหมาย องค์ประกอบ OpCode/Operand",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 105,
    "question": "5. ในคำสั่ง ADD A, B ข้อใดคือ OpCode และ Operand ตามลำดับ?",
    "options": [
      "ก. OpCode คือ A, B และ Operand คือ ADD",
      "ข. ทั้งหมดเป็น Operand",
      "ค. OpCode คือ ADD และ Operand คือ A, B",
      "ง. OpCode คือ ADD, A และ Operand คือ B"
    ],
    "correctIndex": 2,
    "explanation": "ในคำสั่ง ADD A, B คำสั่ง ADD คือ OpCode (รหัสปฏิบัติการ) ส่วน A และ B คือ Operand (ตัวถูกดำเนินการ)",
    "category": "หมวดที่ 1: ความหมาย องค์ประกอบ OpCode/Operand",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 106,
    "question": "6. วัฏจักรคำสั่งของ CPU (Instruction Cycle) ประกอบด้วย 2 ระยะหลักอะไรบ้างตามลำดับ?",
    "options": [
      "ก. Fetch Cycle และ Execute Cycle",
      "ข. Decode Cycle และ Execute Cycle",
      "ค. Store Cycle และ Fetch Cycle",
      "ง. Read Cycle และ Write Cycle"
    ],
    "correctIndex": 0,
    "explanation": "วัฏจักรคำสั่งพื้นฐานประกอบด้วย 2 ระยะหลัก คือ ระยะดึงคำสั่ง (Fetch Cycle) และระยะปฏิบัติการ (Execute Cycle)",
    "category": "หมวดที่ 2: วัฏจักรคำสั่ง CPU (Instruction Cycle)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 107,
    "question": "7. ในระยะ Fetch Cycle หน้าที่หลักของ CPU คือข้อใด?",
    "options": [
      "ก. ส่งสัญญาณประมวลผลไปยัง ALU",
      "ข. เขียนผลลัพธ์ลงในหน่วยความจำหลัก",
      "ค. ตรวจสอบสัญญาณขัดจังหวะ (Interrupt)",
      "ง. ดึงคำสั่งจากหน่วยความจำหลักตามตำแหน่งที่ PC ชี้อยู่มาเก็บใน IR"
    ],
    "correctIndex": 3,
    "explanation": "ระยะ Fetch คือการที่ CPU ดึงคำสั่งจากหน่วยความจำหลักโดยใช้ตำแหน่งจาก Program Counter (PC) มาเก็บไว้ใน Instruction Register (IR)",
    "category": "หมวดที่ 2: วัฏจักรคำสั่ง CPU (Instruction Cycle)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 108,
    "question": "8. เมื่อ CPU ประมวลผลคำสั่งในระยะ Execute เสร็จสิ้น จะเกิดกระบวนการใดต่อไปหากไม่มีคำสั่งหยุด?",
    "options": [
      "ก. หยุดการทำงานทันที (HALT)",
      "ข. วนกลับไประยะ Fetch เพื่อดึงคำสั่งถัดไป",
      "ค. รีเซ็ตค่าใน Register ทั้งหมดเป็นศูนย์",
      "ง. ส่งสัญญาณเตือนข้อผิดพลาด"
    ],
    "correctIndex": 1,
    "explanation": "เมื่อจบการ Execute CPU จะวนกลับไปที่ระยะ Fetch อีกครั้งเพื่อทำคำสั่งถัดไปตามลำดับ",
    "category": "หมวดที่ 2: วัฏจักรคำสั่ง CPU (Instruction Cycle)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 109,
    "question": "9. รีจิสเตอร์ใดทำหน้าที่เก็บ \"ตำแหน่งแอดเดรสของคำสั่งถัดไป\" ในวัฏจักรคำสั่ง?",
    "options": [
      "ก. Instruction Register (IR)",
      "ข. Memory Buffer Register (MBR)",
      "ค. Program Counter (PC)",
      "ง. Accumulator (AC)"
    ],
    "correctIndex": 2,
    "explanation": "Program Counter (PC) ทำหน้าที่เก็บที่อยู่ (Address) ของคำสั่งถัดไปที่จะถูกดึงมาประมวลผล",
    "category": "หมวดที่ 2: วัฏจักรคำสั่ง CPU (Instruction Cycle)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 110,
    "question": "10. วัฏจักรคำสั่งของ CPU จะสิ้นสุดลงเมื่อใด?",
    "options": [
      "ก. เมื่อพบคำสั่ง HALT หรือเมื่อปิดเครื่อง",
      "ข. เมื่อคำสั่งใน RAM หมด",
      "ค. เมื่อทำการ Execute คำสั่งแรกเสร็จ",
      "ง. เมื่อเกิดการคำนวณทางตรรกะ"
    ],
    "correctIndex": 0,
    "explanation": "วัฏจักรคำสั่งจะดำเนินต่อเนื่องเป็นวงจรวนซ้ำ จนกว่าจะพบคำสั่งที่ระบุให้หยุดการทำงาน (HALT Instruction) หรือปิดเครื่อง",
    "category": "หมวดที่ 2: วัฏจักรคำสั่ง CPU (Instruction Cycle)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 111,
    "question": "11. กระบวนการ Instruction Address Calculation (IAC) มีหน้าที่อย่างไร?",
    "options": [
      "ก. ตีความรหัสคำสั่งใน IR",
      "ข. ดึงข้อมูล Operand จาก RAM",
      "ค. บันทึกผลลัพธ์ลงใน Register",
      "ง. คำนวณหาตำแหน่งที่อยู่ของคำสั่งถัดไปที่จะดึงจากหน่วยความจำ"
    ],
    "correctIndex": 3,
    "explanation": "IAC เป็นขั้นตอนการคำนวณหรือหาตำแหน่งของคำสั่งถัดไปที่จะต้องดึงมาประมวลผล โดยอ้างอิงจากค่าใน PC",
    "category": "หมวดที่ 3: กระบวนการ IAC, IF, IOD, Execute",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 112,
    "question": "12. ในขั้นตอน Instruction Fetch (IF) รีจิสเตอร์ MAR และ MBR ทำหน้าที่อย่างไร?",
    "options": [
      "ก. MAR เก็บคำสั่ง, MBR เก็บแอดเดรส",
      "ข. MAR รับแอดเดรสจาก PC ไปชี้ RAM และ MBR รับรหัสคำสั่งที่อ่านได้จาก RAM",
      "ค. ทั้งคู่ทำหน้าที่คำนวณผลลัพธ์ทางคณิตศาสตร์",
      "ง. MBR ส่งสัญญาณควบคุมไปยัง Control Unit"
    ],
    "correctIndex": 1,
    "explanation": "ใน IF ค่าแอดเดรสจาก PC จะถูกส่งไป MAR เพื่อชี้ตำแหน่งใน RAM จากนั้น RAM จะส่งคำสั่งผ่าน Data Bus มาพักที่ MBR ก่อนย้ายไป IR",
    "category": "หมวดที่ 3: กระบวนการ IAC, IF, IOD, Execute",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 113,
    "question": "13. เมื่อกระบวนการ Instruction Fetch (IF) ดึงคำสั่งมาเก็บใน IR เรียบร้อยแล้ว ค่าใน Program Counter (PC) จะเป็นอย่างไร?",
    "options": [
      "ก. ถูกรีเซ็ตเป็น 0",
      "ข. ลดค่าลง 1 ตำแหน่ง",
      "ค. เพิ่มค่าขึ้นอัตโนมัติเพื่อชี้คำสั่งถัดไป",
      "ง. เท่าเดิมไม่เปลี่ยนแปลง"
    ],
    "correctIndex": 2,
    "explanation": "ในขณะหรือหลังจากการดึงคำสั่งสำเร็จ ค่าใน PC จะถูกเพิ่มขึ้นโดยอัตโนมัติเพื่อเตรียมชี้ไปยังคำสั่งถัดไป",
    "category": "หมวดที่ 3: กระบวนการ IAC, IF, IOD, Execute",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 114,
    "question": "14. กระบวนการ Instruction Operation Decoding (IOD) เกิดขึ้นที่หน่วยใดของ CPU?",
    "options": [
      "ก. Control Unit (หน่วยควบคุม)",
      "ข. Arithmetic Logic Unit (ALU)",
      "ค. Main Memory",
      "ง. Input/Output Module"
    ],
    "correctIndex": 0,
    "explanation": "Control Unit จะเป็นผู้รับคำสั่งจาก IR มาทำการวิเคราะห์และถอดรหัส (IOD)",
    "category": "หมวดที่ 3: กระบวนการ IAC, IF, IOD, Execute",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 115,
    "question": "15. วัตถุประสงค์หลักของ Instruction Operation Decoding (IOD) คืออะไร?",
    "options": [
      "ก. การคำนวณผลลัพธ์ของคำสั่งบวก",
      "ข. การบันทึกข้อมูลลงฮาร์ดดิสก์",
      "ค. การสลับโหมดการทำงานของ CPU",
      "ง. การแยกส่วน OpCode และ Operand ออกจากกันเพื่อดูว่าต้องทำอะไรกับข้อมูลใด"
    ],
    "correctIndex": 3,
    "explanation": "IOD คือการวิเคราะห์คำสั่งเพื่อแยกส่วน OpCode และ Operand ทำให้ CPU รู้ประเภทของการปฏิบัติการและแหล่งข้อมูล",
    "category": "หมวดที่ 3: กระบวนการ IAC, IF, IOD, Execute",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 116,
    "question": "16. ในขั้นตอน Execute (การปฏิบัติการ) หากคำสั่งเป็นประเภท Arithmetic หรือ Logical สัญญาณจะถูกส่งไปทำงานที่หน่วยใด?",
    "options": [
      "ก. Control Unit",
      "ข. Arithmetic Logic Unit (ALU)",
      "ค. Program Counter",
      "ง. Memory Address Register"
    ],
    "correctIndex": 1,
    "explanation": "ขั้นตอน Execute ของคำสั่งคำนวณหรือตรรกะ ข้อมูล Operand จะถูกส่งไปยัง ALU เพื่อทำการประมวลผล",
    "category": "หมวดที่ 3: กระบวนการ IAC, IF, IOD, Execute",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 117,
    "question": "17. หากคำสั่งในขั้นตอน Execute เป็นคำสั่งประเภท Data Transfer สิ่งที่จะเกิดขึ้นคือข้อใด?",
    "options": [
      "ก. ALU คำนวณผลคูณ",
      "ข. CPU หยุดการทำงานทันที",
      "ค. ข้อมูลถูกย้ายระหว่าง Register, Memory หรือ I/O",
      "ง. มีการแปลงเลขฐานสองเป็น BCD"
    ],
    "correctIndex": 2,
    "explanation": "หากเป็นคำสั่งย้ายข้อมูล ข้อมูลจะถูกขนส่งจากแหล่งต้นทางไปยังปลายทางโดยไม่มีการเปลี่ยนแปลงค่า",
    "category": "หมวดที่ 3: กระบวนการ IAC, IF, IOD, Execute",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 118,
    "question": "18. หากคำสั่งในขั้นตอน Execute เป็นคำสั่ง Branch (กระโดด) จะส่งผลต่อรีจิสเตอร์ใดโดยตรง?",
    "options": [
      "ก. Program Counter (PC)",
      "ข. Instruction Register (IR)",
      "ค. Stack Pointer (SP)",
      "ง. Memory Buffer Register (MBR)"
    ],
    "correctIndex": 0,
    "explanation": "คำสั่ง Branch จะเปลี่ยนแปลงค่าใน Program Counter (PC) เพื่อเปลี่ยนทิศทางการไหลของโปรแกรม",
    "category": "หมวดที่ 3: กระบวนการ IAC, IF, IOD, Execute",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 119,
    "question": "19. ลำดับขั้นตอนในระยะ Fetch-Execute พื้นฐานข้อใดเรียงถูกต้อง?",
    "options": [
      "ก. IF → IAC → Execute → IOD",
      "ข. IOD → IAC → IF → Execute",
      "ค. Execute → IOD → IF → IAC",
      "ง. IAC → IF → IOD → Execute"
    ],
    "correctIndex": 3,
    "explanation": "ลำดับกระบวนการทำงานคือ IAC (หาแอดเดรส) → IF (ดึงคำสั่ง) → IOD (ถอดรหัส) → Execute (ปฏิบัติการ)",
    "category": "หมวดที่ 3: กระบวนการ IAC, IF, IOD, Execute",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 120,
    "question": "20. ข้อใดคือตัวอย่างของคำสั่งที่ไม่มีระยะ Execute ที่ต้องพึ่งพา ALU?",
    "options": [
      "ก. ADD R1, R2",
      "ข. NOP (No Operation)",
      "ค. SUB R1, R2",
      "ง. AND R1, R2"
    ],
    "correctIndex": 1,
    "explanation": "คำสั่ง NOP เป็นคำสั่งว่างเปล่าที่ไม่ต้องใช้ ALU คำนวณ เพียงแค่ผ่านวัฏจักรเพื่อหน่วงเวลา",
    "category": "หมวดที่ 3: กระบวนการ IAC, IF, IOD, Execute",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 121,
    "question": "21. Operand Address Calculation (OAC) ทำหน้าที่อะไร?",
    "options": [
      "ก. คำนวณหาแอดเดรสของคำสั่งถัดไป",
      "ข. ถอดรหัส OpCode",
      "ค. คำนวณหาตำแหน่งที่อยู่จริง (Effective Address) ของ Operand ในหน่วยความจำ",
      "ง. บันทึกผลลัพธ์การคำนวณ"
    ],
    "correctIndex": 2,
    "explanation": "OAC คือการคำนวณหา Effective Address ของตัวถูกดำเนินการโดยอาศัย Addressing Mode ที่ระบุในคำสั่ง",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 122,
    "question": "22. กระบวนการ Operand Fetch (OF) แตกต่างจาก Instruction Fetch (IF) อย่างไร?",
    "options": [
      "ก. IF ดึงคำสั่งมาเก็บใน IR, OF ดึงข้อมูล (Operand) จากหน่วยความจำมาเตรียมประมวลผล",
      "ข. IF ดึงข้อมูล, OF ดึงคำสั่ง",
      "ค. IF ใช้ ALU, OF ใช้ Control Unit",
      "ง. ทั้งสองกระบวนการเหมือนกันทุกประการ"
    ],
    "correctIndex": 0,
    "explanation": "IF เป็นการดึง \"รหัสคำสั่ง\" ส่วน OF เป็นการดึง \"ข้อมูล (Operand)\" ที่จะนำมาประมวลผลจริง",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 123,
    "question": "23. ขั้นตอน Data Operation (DO) คือขั้นตอนใดในการประมวลผล?",
    "options": [
      "ก. การคำนวณแอดเดรสของสแตก",
      "ข. การส่งสัญญาณขัดจังหวะ",
      "ค. การย้ายรหัสคำสั่งเข้า IR",
      "ง. ขั้นตอนที่ CPU (ALU) ลงมือปฏิบัติตาม OpCode กับข้อมูล เช่น บวก ลบ ตรรกะ"
    ],
    "correctIndex": 3,
    "explanation": "DO (Data Operation) คือขั้นตอนการประมวลผลข้อมูลจริง โดยเรียกใช้ ALU",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 124,
    "question": "24. ขั้นตอน Operand Store (OS) มีบทบาทสำคัญอย่างไร?",
    "options": [
      "ก. อ่านข้อมูลจากแป้นพิมพ์",
      "ข. นำผลลัพธ์ที่ได้จากการประมวลผล (จาก DO) ไปจัดเก็บใน Register, RAM หรือส่งออก I/O",
      "ค. คำนวณแอดเดรสของคำสั่งถัดไป",
      "ง. ถอดรหัสคำสั่งตรรกะ"
    ],
    "correctIndex": 1,
    "explanation": "OS ทำหน้าที่บันทึกผลลัพธ์ที่ได้จากการประมวลผลลงในตำแหน่งจัดเก็บที่กำหนด",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 125,
    "question": "25. หากคำสั่งต้องใช้อาร์กิวเมนต์ 2 ตัว (Multiple Operands) กระบวนการ OAC และ OF จะทำงานอย่างไร?",
    "options": [
      "ก. ทำงานเพียงครั้งเดียวเสมอ",
      "ข. ไม่ต้องทำงานเลย",
      "ค. อาจต้องทำซ้ำมากกว่า 1 ครั้งเพื่อคำนวณและดึงข้อมูลแต่ละตัว",
      "ง. ทำงานขนานกันโดยไม่ต้องใช้ Bus"
    ],
    "correctIndex": 2,
    "explanation": "หากคำสั่งอ้างอิง Operand หลายตัว CPU ต้องทำ OAC และ OF วนซ้ำตามจำนวน Operand ที่ต้องใช้",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 126,
    "question": "26. การปฏิบัติการหมุนบิต (Rotate) หรือเลื่อนบิต (Shift) เกิดขึ้นในขั้นตอนย่อยใด?",
    "options": [
      "ก. Data Operation (DO)",
      "ข. IAC",
      "ค. OAC",
      "ง. OS"
    ],
    "correctIndex": 0,
    "explanation": "การดำเนินการทางตรรกะและการเลื่อนบิต/หมุนบิตถือเป็นการประมวลผลข้อมูลที่อยู่ในขั้นตอน DO",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 127,
    "question": "27. ข้อใดเรียงลำดับขั้นตอนย่อยในระยะ Execute ที่เกี่ยวข้องกับ Operand ได้ถูกต้อง?",
    "options": [
      "ก. DO → OS → OAC → OF",
      "ข. OF → OAC → OS → DO",
      "ค. OS → DO → OF → OAC",
      "ง. OAC → OF → DO → OS"
    ],
    "correctIndex": 3,
    "explanation": "ลำดับคือ OAC (หาแอดเดรสข้อมูล) → OF (ดึงข้อมูล) → DO (ประมวลผลข้อมูล) → OS (เก็บผลลัพธ์)",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 128,
    "question": "28. หากผลลัพธ์จากการประมวลผลในขั้นตอน DO ถูกนำไปเขียนลงใน RAM Bus ใดที่จะถูกใช้งานในขั้นตอน OS?",
    "options": [
      "ก. Data Bus และ Control Bus เท่านั้น",
      "ข. Address Bus, Data Bus และ Control Bus",
      "ค. ไม่ต้องใช้ Bus",
      "ง. Expansion Bus เท่านั้น"
    ],
    "correctIndex": 1,
    "explanation": "การเขียนข้อมูลกลับ RAM ต้องใช้ Address Bus ส่งตำแหน่ง, Data Bus ส่งข้อมูลผลลัพธ์ และ Control Bus ส่งสัญญาณ Write",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 129,
    "question": "29. กระบวนการ OAC จำเป็นต้องทำงานในกรณีใดมากที่สุด?",
    "options": [
      "ก. Immediate Addressing Mode",
      "ข. Register Addressing Mode",
      "ค. Indexed / Indirect Addressing Mode",
      "ง. NOP Instruction"
    ],
    "correctIndex": 2,
    "explanation": "OAC จำเป็นมากเมื่อใช้โหมดกำหนดแอดเดรสทางอ้อมหรือแบบดัชนี ซึ่งต้องมีการคำนวณหา Effective Address ก่อน",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 130,
    "question": "30. ข้อใดเป็นหน้าที่ของ OS (Operand Store) เมื่อผลลัพธ์ต้องแสดงออกทางหน้าจอ?",
    "options": [
      "ก. ส่งข้อมูลออกไปยัง I/O Port ของจอภาพ",
      "ข. ส่งข้อมูลไปยัง Accumulator",
      "ค. เขียนข้อมูลลง Program Counter",
      "ง. บันทึกข้อมูลลง Instruction Register"
    ],
    "correctIndex": 0,
    "explanation": "OS สามารถจัดเก็บผลลัพธ์ไปยัง Register, RAM หรือส่งออกไปยังอุปกรณ์ I/O ได้",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 131,
    "question": "31. ข้อใดกล่าวถึงกระบวนการ DO ได้ถูกต้องที่สุด?",
    "options": [
      "ก. ทำหน้าที่วิเคราะห์ OpCode",
      "ข. ดึงคำสั่งจาก RAM",
      "ค. เพิ่มค่า Stack Pointer",
      "ง. เรียกใช้งาน ALU เพื่อดำเนินการกับข้อมูล"
    ],
    "correctIndex": 3,
    "explanation": "ขั้นตอน DO เป็นการประมวลผลข้อมูลจริงโดยการทำงานของ ALU",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 132,
    "question": "32. เหตุใดคำสั่งบางคำสั่งจึงข้ามขั้นตอน OAC และ OF ไปได้?",
    "options": [
      "ก. เพราะ CPU เสีย",
      "ข. เพราะคำสั่งนั้นไม่มี Operand หรือ Operand อยู่ใน Register อยู่แล้ว",
      "ค. เพราะเป็นคำสั่งทางคณิตศาสตร์",
      "ง. ไม่สามารถข้ามได้เลย ต้องทำทุกคำสั่ง"
    ],
    "correctIndex": 1,
    "explanation": "หากคำสั่งไม่มี Operand (เช่น NOP) หรือข้อมูลอยู่ใน Register อยู่แล้ว ไม่จำเป็นต้องเข้าถึง RAM จึงข้าม OAC/OF ได้",
    "category": "หมวดที่ 4: กระบวนการ OAC, OF, DO, OS",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 133,
    "question": "33. โครงสร้างพื้นฐานของคำสั่งเครื่อง (Instruction Components) ประกอบด้วยส่วนสำคัญใดบ้าง?",
    "options": [
      "ก. Input, Process, Output",
      "ข. Header, Body, Footer",
      "ค. OpCode, Operand Reference, Next Instruction Reference",
      "ง. RAM, ROM, CPU"
    ],
    "correctIndex": 2,
    "explanation": "ส่วนประกอบคำสั่งประกอบด้วย OpCode (บอกสิ่งที่ทำ), Operand Reference (บอกข้อมูล/ตำแหน่ง) และ Next Instruction Reference (บอกคำสั่งถัดไป)",
    "category": "หมวดที่ 5: ส่วนประกอบของคำสั่ง (Components)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 134,
    "question": "34. เปรียบเทียบส่วนประกอบของคำสั่งกับโครงสร้างภาษา OpCode เปรียบได้กับส่วนใดของประโยค?",
    "options": [
      "ก. คำกริยา (Verb)",
      "ข. ประธาน (Subject)",
      "ค. คำนาม (Noun)",
      "ง. ส่วนขยาย (Adverb)"
    ],
    "correctIndex": 0,
    "explanation": "OpCode บอกว่า CPU ต้อง \"ทำอะไร\" จึงเปรียบเสมือนคำกริยาในประโยค",
    "category": "หมวดที่ 5: ส่วนประกอบของคำสั่ง (Components)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 135,
    "question": "35. ส่วน Operand Reference เปรียบได้กับส่วนใดของประโยคภาษา?",
    "options": [
      "ก. คำกริยา (Verb)",
      "ข. คำเชื่อม (Conjunction)",
      "ค. เครื่องหมายวรรคตอน",
      "ง. กรรม หรือส่วนขยาย (Object/Extension)"
    ],
    "correctIndex": 3,
    "explanation": "Operand Reference ระบุว่าต้อง \"กระทำกับอะไร/ที่ไหน\" จึงเปรียบเหมือนกรรมหรือส่วนขยาย",
    "category": "หมวดที่ 5: ส่วนประกอบของคำสั่ง (Components)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 136,
    "question": "36. Operand Reference สามารถระบุอยู่ในรูปแบบใดได้บ้าง?",
    "options": [
      "ก. ค่าข้อมูลโดยตรง (Immediate Value)",
      "ข. ถูกทุกข้อ",
      "ค. แอดเดรสหน่วยความจำ (Memory Address)",
      "ง. ชื่อรีจิสเตอร์ (Register Name)"
    ],
    "correctIndex": 1,
    "explanation": "Operand Reference สามารถเป็นได้ทั้งค่าคงที่โดยตรง แอดเดรสใน RAM หรือชื่อรีจิสเตอร์",
    "category": "หมวดที่ 5: ส่วนประกอบของคำสั่ง (Components)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 137,
    "question": "37. โดยปกติแล้ว ในคำสั่งทั่วไป ส่วน Next Instruction Reference ถูกกำหนดอย่างไร?",
    "options": [
      "ก. ต้องใส่แอดเดรสคำสั่งถัดไปไว้ในรหัสคำสั่งเสมอ",
      "ข. กำหนดโดยสุ่มโดยสแตก",
      "ค. ละไว้ในฐานที่เข้าใจ โดยให้ Program Counter (PC) เพิ่มค่าขึ้นเองตามลำดับ",
      "ง. กำหนดโดยอุปกรณ์ I/O"
    ],
    "correctIndex": 2,
    "explanation": "คำสั่งส่วนใหญ่ใช้การเพิ่มค่า PC (เช่น PC+1) โดยอัตโนมัติ จึงไม่ต้องระบุแอดเดรสคำสั่งถัดไปไว้ในตัวคำสั่งโดยตรง",
    "category": "หมวดที่ 5: ส่วนประกอบของคำสั่ง (Components)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 138,
    "question": "38. ในกรณีใดที่ส่วน Next Instruction Reference มีความจำเป็นอย่างยิ่งที่ต้องระบุแอดเดรสใหม่?",
    "options": [
      "ก. คำสั่งควบคุมการทำงาน เช่น Branch, Jump, Call",
      "ข. คำสั่งบวกเลข (ADD)",
      "ค. คำสั่งย้ายข้อมูล (MOVE)",
      "ง. คำสั่งเปรียบเทียบ (CMP)"
    ],
    "correctIndex": 0,
    "explanation": "คำสั่งควบคุมการทำงานจะต้องระบุแอดเดรสปลายทางใหม่เพื่อเปลี่ยนทิศทางการไหลของโปรแกรม",
    "category": "หมวดที่ 5: ส่วนประกอบของคำสั่ง (Components)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 139,
    "question": "39. OpCode ขนาด 4 บิต สามารถสร้างรหัสปฏิบัติการแตกต่างกันได้สูงสุดกี่คำสั่ง?",
    "options": [
      "ก. 4 คำสั่ง",
      "ข. 8 คำสั่ง",
      "ค. 32 คำสั่ง",
      "ง. 16 คำสั่ง (2^4)"
    ],
    "correctIndex": 3,
    "explanation": "จำนวนรูปแบบคำสั่งคำนวณจาก 2^n โดย n คือจำนวนบิต ดังนั้น 2^4 = 16 คำสั่ง",
    "category": "หมวดที่ 5: ส่วนประกอบของคำสั่ง (Components)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 140,
    "question": "40. หากคำสั่งบรรจุ Next Instruction Reference ไว้ในตัวคำสั่งทุกคำสั่ง จะส่งผลเสียอย่างไร?",
    "options": [
      "ก. โปรแกรมทำงานช้าลงอย่างมาก",
      "ข. คำสั่งจะมีขนาดใหญ่ขึ้น เปลืองพื้นที่หน่วยความจำ",
      "ค. CPU จะถอดรหัสไม่ได้",
      "ง. ไม่สามารถใช้รีจิสเตอร์ได้"
    ],
    "correctIndex": 1,
    "explanation": "การระบุแอดเดรสคำสั่งถัดไปทุกคำสั่งจะทำให้ฟิลด์คำสั่งยาวขึ้นมากและสิ้นเปลือง RAM",
    "category": "หมวดที่ 5: ส่วนประกอบของคำสั่ง (Components)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 141,
    "question": "41. การกำหนดว่า CPU จะต้องสามารถทำปฏิบัติการอะไรได้บ้าง (เช่น บวก ลบ คูณ หาร ย้ายข้อมูล) เรียกว่าอะไร?",
    "options": [
      "ก. Data Type",
      "ข. Instruction Format",
      "ค. Operation Repertory",
      "ง. Addressing"
    ],
    "correctIndex": 2,
    "explanation": "Operation Repertory คือรายการความสามารถทั้งหมดที่ CPU รองรับ",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 142,
    "question": "42. สิ่งสำคัญในการพิจารณาออกแบบ Operation Repertory คืออะไร?",
    "options": [
      "ก. สีของชิป CPU",
      "ข. ความถี่ในการใช้งานและความซับซ้อนของคำสั่ง (CISC vs RISC)",
      "ค. ขนาดของพาวเวอร์ซัพพลาย",
      "ง. ยี่ห้อของเมนบอร์ด"
    ],
    "correctIndex": 1,
    "explanation": "ผู้ออกแบบต้องพิจารณาความถี่ในการใช้งานและระดับความซับซ้อนของคำสั่ง",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 143,
    "question": "43. การออกแบบในส่วน Data Type เกี่ยวข้องกับเรื่องใด?",
    "options": [
      "ก. กำหนดชนิดของข้อมูลที่ CPU สามารถประมวลผลได้ เช่น Integer, Floating-Point, Character",
      "ข. กำหนดความเร็วบัส",
      "ค. กำหนดชนิดของพัดลมระบายความร้อน",
      "ง. กำหนดขนาดของสแตก"
    ],
    "correctIndex": 0,
    "explanation": "Data Type คือการกำหนดประเภทข้อมูลที่ OpCode สามารถจัดการได้",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 144,
    "question": "44. ข้อใด ไม่ใช่ ชนิดข้อมูลพื้นฐานที่ CPU ทั่วไปรองรับ?",
    "options": [
      "ก. Integer (จำนวนเต็ม)",
      "ข. Floating-Point (ทศนิยม)",
      "ค. Boolean (ตรรกะ)",
      "ง. Video Streaming Format"
    ],
    "correctIndex": 3,
    "explanation": "สตรีมมิ่งวิดีโอเป็นรูปแบบข้อมูลระดับแอปพลิเคชัน ไม่ใช่ชนิดข้อมูลพื้นฐานในระดับสถาปัตยกรรม CPU",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 145,
    "question": "45. Instruction Format (รูปแบบคำสั่ง) กำหนดสิ่งใด?",
    "options": [
      "ก. ความจุของฮาร์ดดิสก์",
      "ข. ความยาวบิตรวมของคำสั่งและการแบ่งช่องฟิลด์ (OpCode, Operand)",
      "ค. ภาษาโปรแกรมที่ใช้เขียน",
      "ง. ความเร็วของแรม"
    ],
    "correctIndex": 1,
    "explanation": "Instruction Format กำหนดโครงสร้าง ขนาดบิต และการแบ่งช่องข้อมูลในคำสั่ง",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 146,
    "question": "46. การออกแบบ Register ในชุดคำสั่งมีจุดประสงค์หลักเพื่ออะไร?",
    "options": [
      "ก. เพื่อเพิ่มความจุของ RAM",
      "ข. เพื่อใช้แสดงผลภาพ",
      "ค. เพื่อให้มีหน่วยความจำความเร็วสูงภายใน CPU ช่วยลดการเข้าถึง RAM",
      "ง. เพื่อควบคุมความเร็วพัดลม"
    ],
    "correctIndex": 2,
    "explanation": "การมีรีจิสเตอร์จำนวนมากภายใน CPU ช่วยเก็บข้อมูลชั่วคราวและลดการอ่านเขียน RAM ที่ช้ากว่า",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 147,
    "question": "47. การออกแบบ Addressing (การกำหนดแอดเดรส) หมายถึงข้อใด?",
    "options": [
      "ก. การกำหนดวิธีการที่ CPU ใช้ในการอ้างถึงหรือคำนวณหาตำแหน่ง Operand",
      "ข. การกำหนดตำแหน่งที่ตั้งของคอมพิวเตอร์",
      "ค. การส่งอีเมลในระบบ",
      "ง. การกำหนด IP Address ของเครือข่าย"
    ],
    "correctIndex": 0,
    "explanation": "Addressing คือวิธีการ/โหมดที่ใช้ในการระบุตำแหน่งของ Operand ในหน่วยความจำ",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 148,
    "question": "48. สถาปัตยกรรม CPU แบบ RISC และ CISC มีแนวคิดในการออกแบบ Operation Repertory ต่างกันอย่างไร?",
    "options": [
      "ก. RISC มีคำสั่งซับซ้อนมาก, CISC มีคำสั่งน้อย",
      "ข. RISC เน้นคำสั่งพื้นฐานขนาดเท่ากันทำงานเร็ว, CISC เน้นคำสั่งซับซ้อนจำนวนมาก",
      "ค. ทั้งคู่เหมือนกันทุกประการ",
      "ง. RISC ไม่ใช้ Register"
    ],
    "correctIndex": 1,
    "explanation": "RISC เน้นชุดคำสั่งขนาดเล็กและทำงานเร็ว ส่วน CISC เน้นคำสั่งซับซ้อนที่ทำงานได้หลากหลาย",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 149,
    "question": "49. หากต้องการให้คำสั่งมีขนาดบิตสั้นลง การออกแบบโครงสร้าง Register ควรกำหนดอย่างไร?",
    "options": [
      "ก. เพิ่ม Register เป็นล้านตัว",
      "ข. ใช้ RAM แทน Register",
      "ค. มี General Purpose Register จำนวนพอเหมาะ (เช่น 8–32 ตัว)",
      "ง. ไม่ต้องใช้ Register เลย"
    ],
    "correctIndex": 2,
    "explanation": "การระบุชื่อ Register ใช้บิตน้อยกว่า Memory Address (เช่น 16 Register ใช้เพียง 4 บิต) ทำให้คำสั่งสั้นลง",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 150,
    "question": "50. ปัจจัยใด ไม่ใช่ ปัจจัยหลักในการกำหนด Instruction Format?",
    "options": [
      "ก. จำนวนการปฏิบัติการที่ต้องการรองรับ",
      "ข. จำนวน Operand ที่ต้องอ้างอิง",
      "ค. ความยาวคำสั่งที่เหมาะสมกับ Bus",
      "ง. ความจุของ Power Supply"
    ],
    "correctIndex": 3,
    "explanation": "ขนาดและรูปแบบคำสั่งขึ้นอยู่กับ OpCode, Operand และ Bus ไม่เกี่ยวกับ Power Supply",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 151,
    "question": "51. การจัดเก็บข้อมูลชนิด Floating-Point ตามมาตรฐานสากลมักใช้มาตรฐานใด?",
    "options": [
      "ก. IEEE 754",
      "ข. ASCII",
      "ค. Unicode",
      "ง. BCD"
    ],
    "correctIndex": 0,
    "explanation": "รูปแบบข้อมูลทศนิยมในระดับฮาร์ดแวร์มักใช้มาตรฐาน IEEE 754",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 152,
    "question": "52. รีจิสเตอร์ประเภทใดที่โปรแกรมเมอร์ภาษาแอสเซมบลีสามารถมองเห็นและสั่งการได้โดยตรง?",
    "options": [
      "ก. Instruction Register (IR)",
      "ข. General-Purpose Register (เช่น AX, BX, R1, R2)",
      "ค. Memory Address Register (MAR)",
      "ง. Memory Buffer Register (MBR)"
    ],
    "correctIndex": 1,
    "explanation": "General-Purpose Register คือรีจิสเตอร์ทั่วไปที่โปรแกรมเมอร์สามารถอ้างอิงใช้งานในคำสั่งได้",
    "category": "หมวดที่ 6: การออกแบบชุดคำสั่ง (Set Design)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 153,
    "question": "53. คำสั่งประเภท Operation Data Transfer ทำหน้าที่อะไร?",
    "options": [
      "ก. คำนวณผลคูณ",
      "ข. ย้าย/ขนส่งข้อมูลระหว่างส่วนต่าง ๆ โดยไม่เปลี่ยนแปลงค่าข้อมูล",
      "ค. เปรียบเทียบตรรกะ",
      "ง. แปลงเลขฐานสอง"
    ],
    "correctIndex": 1,
    "explanation": "Data Transfer ทำหน้าที่ขนส่งข้อมูลจากจุดหนึ่งไปยังอีกจุดหนึ่งโดยค่าข้อมูลยังคงเดิม",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 154,
    "question": "54. คำสั่งใดต่อไปนี้จัดอยู่ในกลุ่ม Operation Data Transfer?",
    "options": [
      "ก. ADD, SUB",
      "ข. AND, OR",
      "ค. HALT, NOP",
      "ง. LOAD, STORE, MOVE"
    ],
    "correctIndex": 3,
    "explanation": "LOAD (ดึงจาก RAM ไป Register), STORE (เก็บจาก Register ไป RAM) และ MOVE (ย้ายระหว่าง Register) เป็นคำสั่งย้ายข้อมูล",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 155,
    "question": "55. คำสั่งประเภท Operation Arithmetic คือข้อใด?",
    "options": [
      "ก. คำสั่งย้ายข้อมูล",
      "ข. คำสั่งกระโดด",
      "ค. คำสั่งประมวลผลทางคณิตศาสตร์ เช่น บวก ลบ คูณ หาร ผ่าน ALU",
      "ง. คำสั่งขัดจังหวะ"
    ],
    "correctIndex": 2,
    "explanation": "Arithmetic Operation คือคำสั่งคำนวณตัวเลข เช่น ADD, SUB, MUL, DIV",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 156,
    "question": "56. คำสั่ง AND, OR, NOT, XOR จัดอยู่ใน Operation ประเภทใด?",
    "options": [
      "ก. Logical Operation (คำสั่งตรรกะ)",
      "ข. Data Transfer",
      "ค. Arithmetic Operation",
      "ง. Conversion Operation"
    ],
    "correctIndex": 0,
    "explanation": "คำสั่งดำเนินการทางบูลีนระดับบิตจัดเป็น Logical Operation",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 157,
    "question": "57. คำสั่ง COMPARE (CMP) มีหน้าที่หลักอย่างไรใน Logical Operation?",
    "options": [
      "ก. ย้ายข้อมูลไป RAM",
      "ข. เปรียบเทียบค่าสองค่าเพื่อตั้งค่าใน Flag Register สำหรับการตัดสินใจ",
      "ค. แปลงรหัสอักขระ",
      "ง. หยุดการทำงานของ CPU"
    ],
    "correctIndex": 1,
    "explanation": "CMP นำค่าสองค่ามาเปรียบเทียบกัน (โดยการลบทางตรรกะ) เพื่อตั้งค่า Flag (เช่น Zero Flag)",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 158,
    "question": "58. คำสั่งประเภท Operation System Control มีจุดประสงค์เพื่ออะไร?",
    "options": [
      "ก. คำนวณภาษี",
      "ข. ควบคุมและบริหารจัดการสถานะการทำงานของระบบหรือ CPU",
      "ค. ส่งข้อมูลออกพอร์ตปริ้นเตอร์",
      "ง. เปลี่ยนแปลงตัวอักษรพิมพ์เล็กเป็นพิมพ์ใหญ่"
    ],
    "correctIndex": 1,
    "explanation": "System Control เป็นคำสั่งบริหารจัดการระบบ เช่น การสลับโหมด, ปิดการขัดจังหวะ, หยุดระบบ",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 159,
    "question": "59. คำสั่ง HALT และ NOP จัดอยู่ในกลุ่มใด?",
    "options": [
      "ก. Operation Data Transfer",
      "ข. Operation Input/Output",
      "ค. Operation Conversion",
      "ง. Operation System Control"
    ],
    "correctIndex": 3,
    "explanation": "HALT (สั่งหยุด) และ NOP (ไม่ปฏิบัติการ/หน่วงเวลา) เป็นคำสั่งควบคุมระบบ",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 160,
    "question": "60. คำสั่ง IN และ OUT จัดอยู่ใน Operation ประเภทใด?",
    "options": [
      "ก. Operation Input/Output",
      "ข. Operation System Control",
      "ค. Operation Conversion",
      "ง. Operation Arithmetic"
    ],
    "correctIndex": 0,
    "explanation": "IN (รับข้อมูลจากพอร์ต I/O) และ OUT (ส่งข้อมูลออกพอร์ต I/O) เป็นคำสั่งจัดการ I/O",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 161,
    "question": "61. คำสั่งประเภท Operation Conversion ทำหน้าที่อย่างไร?",
    "options": [
      "ก. ย้ายข้อมูลจาก RAM ไป Register",
      "ข. แปลงรูปแบบหรือโครงสร้างจัดเก็บของข้อมูลจากชนิดหนึ่งไปอีกชนิดหนึ่งโดยค่าความหมายคงเดิม",
      "ค. กระโดดไปทำ Subroutine",
      "ง. เพิ่มค่าใน Program Counter"
    ],
    "correctIndex": 1,
    "explanation": "Conversion Operation ใช้แปลงรูปแบบข้อมูล เช่น ASCII เป็น Binary หรือ Integer เป็น Floating-Point",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 162,
    "question": "62. การแปลงข้อมูลจาก Binary เป็น BCD (Binary Coded Decimal) จัดเป็นคำสั่งประเภทใด?",
    "options": [
      "ก. System Control",
      "ข. Conversion Operation",
      "ค. Data Transfer",
      "ง. Logical Operation"
    ],
    "correctIndex": 1,
    "explanation": "การแปลงเลขฐานสองเป็น BCD ถือเป็นการแปลงรูปแบบข้อมูล (Conversion)",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 163,
    "question": "63. คำสั่ง LOAD R1, [1000h] หมายถึงอะไร และเป็นคำสั่งประเภทใด?",
    "options": [
      "ก. โหลดข้อมูลจาก R1 ไป RAM (Arithmetic)",
      "ข. บวกค่า 1000h เข้า R1 (Logical)",
      "ค. โหลดข้อมูลจากตำแหน่ง 1000h ใน RAM มาเก็บใน R1 (Data Transfer)",
      "ง. ส่งค่า R1 ออกหน้าจอ (I/O)"
    ],
    "correctIndex": 2,
    "explanation": "เป็นคำสั่งย้ายข้อมูล (Data Transfer) อ่านค่าจาก RAM ตำแหน่ง 1000h มาไว้ใน Register R1",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 164,
    "question": "64. คำสั่ง ENABLE INTERRUPTS จัดเป็นคำสั่งประเภทใด?",
    "options": [
      "ก. Operation Data Transfer",
      "ข. Operation System Control",
      "ค. Operation Input/Output",
      "ง. Operation Arithmetic"
    ],
    "correctIndex": 1,
    "explanation": "คำสั่ง เปิด/ปิด สัญญาณ Interrupt เป็นคำสั่งควบคุมสถานะระบบ (System Control)",
    "category": "หมวดที่ 7: ประเภทของการปฏิบัติการ (Operation Types)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 165,
    "question": "65. คำสั่ง Unconditional Branch (กระโดดแบบไม่มีเงื่อนไข) ทำงานอย่างไร?",
    "options": [
      "ก. ตรวจสอบ Zero Flag ก่อนกระโดด",
      "ข. ข้ามคำสั่งถัดไป 1 คำสั่ง",
      "ค. บันทึกค่า PC ลงใน Stack",
      "ง. เปลี่ยนค่าใน Program Counter (PC) ให้กระโดดไปแอดเดรสที่กำหนดทันทีโดยไม่ต้องตรวจเงื่อนไข"
    ],
    "correctIndex": 3,
    "explanation": "Unconditional Branch (เช่น JUMP Label) จะเปลี่ยนค่า PC เพื่อกระโดดทันทีโดยไม่มีเงื่อนไข",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 166,
    "question": "66. คำสั่ง Conditional Branch (กระโดดแบบมีเงื่อนไข) จะกระโดดเมื่อใด?",
    "options": [
      "ก. กระโดดตลอดเวลา",
      "ข. ตรวจสอบเงื่อนไข/Flag หากเป็นจริงจะเปลี่ยนค่า PC ไปยังแอดเดรสใหม่ หากเป็นเท็จจะทำคำสั่งถัดไปตามปกติ",
      "ค. กระโดดเมื่อเครื่องร้อน",
      "ง. กระโดดเฉพาะเมื่อเกิด Interrupt"
    ],
    "correctIndex": 1,
    "explanation": "Conditional Branch จะตรวจสอบเงื่อนไขก่อน หากเงื่อนไขเป็นจริงจึงจะเปลี่ยนค่า PC เพื่อกระโดด",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 167,
    "question": "67. คำสั่ง Skip (การข้ามคำสั่งถัดไป) มีหลักการทำงานอย่างไร?",
    "options": [
      "ก. หากเงื่อนไขเป็นจริง CPU จะปรับค่า PC ให้เพิ่มขึ้นเพื่อข้ามคำสั่งถัดไป 1 คำสั่ง (เช่น PC = PC + 2)",
      "ข. กระโดดไปยังแอดเดรสปลายทางที่ระบุในคำสั่ง",
      "ค. รีเซ็ตเครื่องใหม่",
      "ง. เรียกใช้ Subroutine"
    ],
    "correctIndex": 0,
    "explanation": "คำสั่ง Skip ไม่ต้องระบุแอดเดรสปลายทาง แต่จะปรับเพิ่มค่า PC เพื่อข้ามคำสั่งถัดไปโดยตรง",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 168,
    "question": "68. ข้อแตกต่างสำคัญระหว่างคำสั่ง Branch และ คำสั่ง Skip คือข้อใด?",
    "options": [
      "ก. Branch ใช้กับเลขจำนวนเต็ม Skip ใช้กับทศนิยม",
      "ข. Skip ทำงานช้ากว่า Branch",
      "ค. Branch ต้องระบุแอดเดรสปลายทาง ส่วน Skip ไม่ต้องระบุแอดเดรสปลายทางแต่ข้ามไปข้างหน้า 1 คำสั่ง",
      "ง. ทั้งสองคำสั่งเหมือนกันทุกประการ"
    ],
    "correctIndex": 2,
    "explanation": "Branch ระบุเป้าหมายตำแหน่งแอดเดรสชัดเจน ส่วน Skip แค่ข้ามคำสั่งถัดไป 1 คำสั่ง",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 169,
    "question": "69. เมื่อคำสั่ง Procedure Call หรือ Subroutine Call (CALL) ถูกเรียกใช้งาน CPU จะทำสิ่งใดก่อนกระโดดไปโปรแกรมย่อย?",
    "options": [
      "ก. ลบข้อมูลใน RAM",
      "ข. ส่งข้อมูลออกพอร์ต I/O",
      "ค. ปิดการทำงานของ CPU",
      "ง. บันทึกแอดเดรสย้อนกลับ (Return Address) ลงใน Stack"
    ],
    "correctIndex": 3,
    "explanation": "ก่อนกระโดดไป Subroutine คำสั่ง CALL จะนำค่า PC ปัจจุบัน (Return Address) ไป Push เก็บไว้บน Stack",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 170,
    "question": "70. โครงสร้างข้อมูลแบบใดที่ถูกนำมาใช้จัดการการเรียกดึง Return Address ในคำสั่ง Subroutine Call?",
    "options": [
      "ก. Queue (FIFO)",
      "ข. Stack (LIFO - Last In, First Out)",
      "ค. Array",
      "ง. Tree"
    ],
    "correctIndex": 1,
    "explanation": "Stack ทำงานแบบเข้าทีหลังออกก่อน (LIFO) เหมาะสมที่สุดในการเวียนเก็บและคืน Return Address",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 171,
    "question": "71. คำสั่งใดที่อยู่ตอนท้ายของ Subroutine เพื่อทำให้ CPU กระโดดกลับมาทำงานที่โปรแกรมหลัก?",
    "options": [
      "ก. RETURN (RET)",
      "ข. JUMP",
      "ค. SKIP",
      "ง. HALT"
    ],
    "correctIndex": 0,
    "explanation": "คำสั่ง RETURN (RET) จะทำหน้าที่ Pop ค่า Return Address จาก Stack กลับเข้า PC เพื่อทำงานต่อในโปรแกรมหลัก",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 172,
    "question": "72. เหตุใด CPU จึงไม่สื่อสารและควบคุมอุปกรณ์ I/O โดยตรง แต่ต้องผ่าน I/O Module / Controller?",
    "options": [
      "ก. อุปกรณ์ I/O มีราคาแพงกว่า",
      "ข. CPU ไม่มีสายไฟเชื่อมต่อ",
      "ค. อุปกรณ์ I/O มีความเร็วช้ากว่า CPU มาก และมีความหลากหลายของฮาร์ดแวร์",
      "ง. เป็นข้อกำหนดทางกฎหมาย"
    ],
    "correctIndex": 2,
    "explanation": "เนื่องจากอุปกรณ์ I/O ทำงานช้ากว่า CPU มาก และมีรูปแบบหลากหลาย CPU จึงใช้ I/O Module เป็นคนกลาง",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 173,
    "question": "73. คำสั่งควบคุมอุปกรณ์ I/O ประเภท Control Commands มีวัตถุประสงค์อะไร?",
    "options": [
      "ก. อ่านข้อมูลจากแป้นพิมพ์",
      "ข. สั่งตั้งค่าหรือเตรียมพร้อมอุปกรณ์ เช่น Reset, Start/Stop, Mode Setting",
      "ค. คำนวณค่าทางคณิตศาสตร์",
      "ง. แปลงเลขฐาน"
    ],
    "correctIndex": 1,
    "explanation": "Control Commands ใช้สั่งการคนกลาง (I/O Controller) ให้ตั้งค่าหรือควบคุมสถานะอุปกรณ์",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 174,
    "question": "74. คำสั่งควบคุมอุปกรณ์ I/O ประเภท Test/Status Commands ทำหน้าที่อะไร?",
    "options": [
      "ก. ลบไฟล์ในดิสก์",
      "ข. สั่งปิดเครื่อง",
      "ค. สอบถามสถานะของอุปกรณ์ เช่น Ready/Busy, Error (กระดาษหมด)",
      "ง. เพิ่มความเร็วพัดลม"
    ],
    "correctIndex": 2,
    "explanation": "Test/Status Commands อ่านค่าจาก Status Register เพื่อเช็กความพร้อมหรือข้อผิดพลาดของอุปกรณ์",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 175,
    "question": "75. เมื่อ CPU ทำคำสั่ง CALL Subroutine_A ค่าใน Stack Pointer (SP) จะเปลี่ยนแปลงอย่างไร?",
    "options": [
      "ก. SP ถูกปรับค่าชี้ไปยังตำแหน่งใหม่บน Stack เพื่อบันทึก Return Address",
      "ข. SP มีค่าเท่าเดิม",
      "ค. SP ถูกรีเซ็ตเป็นศูนย์",
      "ง. SP เปลี่ยนไปชี้ RAM ตำแหน่งสุดท้าย"
    ],
    "correctIndex": 0,
    "explanation": "การ Push ค่าลง Stack จะทำให้ SP ถูกปรับค่า (เช่น ลดค่าหรือเพิ่มค่าตามสถาปัตยกรรม) เพื่อรองรับข้อมูลใหม่",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 176,
    "question": "76. คำสั่ง BZ Label (Branch if Zero) เป็นคำสั่งประเภทใด?",
    "options": [
      "ก. Unconditional Branch",
      "ข. Skip",
      "ค. Conditional Branch",
      "ง. Data Transfer"
    ],
    "correctIndex": 2,
    "explanation": "BZ เป็นคำสั่งกระโดดแบบมีเงื่อนไข จะกระโดดก็ต่อเมื่อ Zero Flag เป็น 1",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 177,
    "question": "77. ข้อใดสรุป Flow การทำงานของการใช้ CALL และ RETURN ได้ถูกต้อง?",
    "options": [
      "ก. CALL → POP → Subroutine → PUSH → RETURN",
      "ข. CALL → PUSH PC ลง Stack → ทำ Subroutine → RETURN → POP กลับเข้า PC",
      "ค. PUSH → RETURN → CALL → POP",
      "ง. CALL → HALT → RETURN"
    ],
    "correctIndex": 1,
    "explanation": "CALL จะ PUSH Return Address ลง Stack ทำโปรแกรมย่อยเสร็จ เจอ RETURN จะ POP กลับเข้า PC",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 178,
    "question": "78. หากเครื่องพิมพ์กระดาษหมด คำสั่ง I/O ประเภทใดจะช่วยให้ CPU รับรู้ปัญหานี้?",
    "options": [
      "ก. Control Command",
      "ข. Test / Status Command",
      "ค. Data Transfer Command",
      "ง. Conversion Command"
    ],
    "correctIndex": 1,
    "explanation": "CPU จะอ่านค่า Error Flag จาก Status Register ผ่านทาง Status Command",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 179,
    "question": "79. ข้อดีหลักของการใช้ Subroutine ในการเขียนโปรแกรมคืออะไร?",
    "options": [
      "ก. ช่วยให้นำโค้ดที่ทำงานซ้ำๆ มาใช้ใหม่ได้ ไม่ต้องเขียนโค้ดเดิมซ้ำ ประหยัดพื้นที่",
      "ข. ทำให้ CPU ทำงานเร็วขึ้น 10 เท่า",
      "ค. ไม่ต้องใช้หน่วยความจำ RAM",
      "ง. ป้องกันไวรัสคอมพิวเตอร์"
    ],
    "correctIndex": 0,
    "explanation": "Subroutine ช่วยลดความซ้ำซ้อนของซอร์สโค้ดและประหยัดพื้นที่หน่วยความจำ",
    "category": "หมวดที่ 8: คำสั่งควบคุมระบบเชิงลึก (Branch, Subroutine, I/O)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 180,
    "question": "80. รูปแบบคำสั่งแบบ 4-Address Instruction ประกอบด้วยส่วนระบุแอดเดรสใดบ้าง?",
    "options": [
      "ก. Source1, Source2, Source3, Source4",
      "ข. Destination, Source1, Source2, Next Instruction Address",
      "ค. OpCode1, OpCode2, OpCode3, OpCode4",
      "ง. Memory1, Memory2, Memory3, Memory4"
    ],
    "correctIndex": 1,
    "explanation": "4-Address ประกอบด้วยที่เก็บผลลัพธ์ (Dest), แหล่งข้อมูล 2 ตัว (Src1, Src2) และแอดเดรสคำสั่งถัดไป (Next Instr)",
    "category": "หมวดที่ 9: รูปแบบคำสั่งตามจำนวนแอดเดรส (Address Formats)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 181,
    "question": "81. ข้อเสียหลักของคำสั่งแบบ 4-Address Instruction คืออะไร?",
    "options": [
      "ก. โปรแกรมอ่านยาก",
      "ข. ไม่สามารถคำนวณเลขได้",
      "ค. ต้องใช้ PC ตลอดเวลา",
      "ง. คำสั่งมีขนาดใหญ่มาก สิ้นเปลืองพื้นที่หน่วยความจำ ไม่นิยมใน CPU สมัยใหม่"
    ],
    "correctIndex": 3,
    "explanation": "เนื่องจากต้องระบุถึง 4 แอดเดรสในคำสั่งเดียว ทำให้ตัวคำสั่งยาวมาก สิ้นเปลือง RAM",
    "category": "หมวดที่ 9: รูปแบบคำสั่งตามจำนวนแอดเดรส (Address Formats)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 182,
    "question": "82. คำสั่งแบบ 3-Address Instruction ในรูปแบบ ADD A, B, C หมายถึงการทำงานใด?",
    "options": [
      "ก. A = B + C (นำค่า B บวก C แล้วเก็บผลลัพธ์ที่ A)",
      "ข. C = A + B",
      "ค. B = A + C",
      "ง. นำ A, B, C มาบวกกัน"
    ],
    "correctIndex": 0,
    "explanation": "รูปแบบคือ ADD Dest, Src1, Src2 ดังนั้น ADD A, B, C คือนำ B+C ไปเก็บไว้ที่ A",
    "category": "หมวดที่ 9: รูปแบบคำสั่งตามจำนวนแอดเดรส (Address Formats)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 183,
    "question": "83. ข้อดีสำคัญของคำสั่งแบบ 3-Address Instruction เมื่อเทียบกับ 2-Address คืออะไร?",
    "options": [
      "ก. คำสั่งสั้นกว่า",
      "ข. ไม่เขียนทับข้อมูลต้นทาง (Source) ทำให้รักษาค่าเดิมไว้ได้",
      "ค. ไม่ต้องใช้ OpCode",
      "ง. ประหยัด RAM มากที่สุด"
    ],
    "correctIndex": 1,
    "explanation": "3-Address แยกที่เก็บผลลัพธ์ (Dest) ออกจากแหล่งข้อมูล (Src1, Src2) ชัดเจน จึงไม่ทับข้อมูลเดิม",
    "category": "หมวดที่ 9: รูปแบบคำสั่งตามจำนวนแอดเดรส (Address Formats)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 184,
    "question": "84. คำสั่งแบบ 2-Address Instruction ในรูปแบบ ADD A, B ส่งผลอย่างไรต่อข้อมูล?",
    "options": [
      "ก. ผลลัพธ์ A + B จะถูกนำไปเขียนทับในตำแหน่ง A (A = A + B)",
      "ข. ผลลัพธ์จะถูกนำไปเก็บใน B",
      "ค. เกิดข้อผิดพลาด",
      "ง. ผลลัพธ์เก็บใน Accumulator"
    ],
    "correctIndex": 0,
    "explanation": "2-Address ใช้ฟิลด์แรกเป็นทั้ง Destination และ Source1 ดังนั้นผลลัพธ์จะเขียนทับตำแหน่ง A",
    "category": "หมวดที่ 9: รูปแบบคำสั่งตามจำนวนแอดเดรส (Address Formats)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 185,
    "question": "85. ข้อเสียของคำสั่งแบบ 2-Address Instruction คืออะไร?",
    "options": [
      "ก. คำสั่งมีขนาดใหญ่เกินไป",
      "ข. ใช้คำนวณคณิตศาสตร์ไม่ได้",
      "ค. หากต้องการรักษาข้อมูลเดิมใน Operand ตัวแรก ต้องใช้คำสั่งย้ายข้อมูล (MOVE) สำรองไว้ก่อน",
      "ง. ทำงานช้ากว่า 4-Address"
    ],
    "correctIndex": 2,
    "explanation": "เนื่องจากผลลัพธ์จะทับข้อมูลเดิม หากต้องการใช้ค่าเดิมอีก ต้องทำคำสั่ง MOVE คัดลอกไว้ก่อน",
    "category": "หมวดที่ 9: รูปแบบคำสั่งตามจำนวนแอดเดรส (Address Formats)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 186,
    "question": "86. คำสั่งแบบ 1-Address Instruction อาศัยรีจิสเตอร์พิเศษใดในการประมวลผลโดยปริยาย?",
    "options": [
      "ก. Program Counter (PC)",
      "ข. Accumulator (AC)",
      "ค. Stack Pointer (SP)",
      "ง. Instruction Register (IR)"
    ],
    "correctIndex": 1,
    "explanation": "1-Address จะระบุ Operand เพียงตัวเดียว ส่วน Operand อีกตัวและที่เก็บผลลัพธ์จะใช้อ้างอิงผ่าน Accumulator (AC) โดยอัตโนมัติ",
    "category": "หมวดที่ 9: รูปแบบคำสั่งตามจำนวนแอดเดรส (Address Formats)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 187,
    "question": "87. คำสั่ง ADD X ในสถาปัตยกรรมแบบ 1-Address Instruction มีความหมายตรงกับข้อใด?",
    "options": [
      "ก. AC = AC + M[X]",
      "ข. X = X + X",
      "ค. M[X] = AC + AC",
      "ง. PC = PC + X"
    ],
    "correctIndex": 0,
    "explanation": "นำค่าใน Accumulator บวกกับค่าในหน่วยความจำตำแหน่ง X แล้วนำผลลัพธ์เก็บกลับใน Accumulator",
    "category": "หมวดที่ 9: รูปแบบคำสั่งตามจำนวนแอดเดรส (Address Formats)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 188,
    "question": "88. หากเรียงลำดับรูปแบบคำสั่งตามขนาดความยาวบิตของคำสั่งจาก \"ใหญ่ที่สุดไปเล็กที่สุด\" ข้อใดถูกต้อง?",
    "options": [
      "ก. 1-Address → 2-Address → 3-Address → 4-Address",
      "ข. 3-Address → 4-Address → 1-Address → 2-Address",
      "ค. 4-Address → 3-Address → 2-Address → 1-Address",
      "ง. ทุกแบบมีขนาดเท่ากัน"
    ],
    "correctIndex": 2,
    "explanation": "จำนวนแอดเดรสที่ต้องระบุมาก จะทำให้คำสั่งมีความยาวบิตเพิ่มขึ้นตาม",
    "category": "หมวดที่ 9: รูปแบบคำสั่งตามจำนวนแอดเดรส (Address Formats)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 189,
    "question": "89. เหตุใดการใช้คำสั่งแบบ 1-Address ถึงอาจทำให้โปรแกรมโดยรวมมีความยาว (จำนวนบรรทัด) มากขึ้น?",
    "options": [
      "ก. เพราะคำสั่งประมวลผลได้ทีละขั้นตอน และต้องใช้คำสั่ง LOAD/STORE ผ่าน Accumulator บ่อยครั้ง",
      "ข. เพราะคำสั่งทำงานช้า",
      "ค. เพราะคำสั่งไม่มี OpCode",
      "ง. เพราะ CPU ไม่รองรับ"
    ],
    "correctIndex": 0,
    "explanation": "แม้ตัวคำสั่งจะสั้น แต่การคำนวณซับซ้อนจะต้องเขียนคำสั่งหลายบรรทัดเพื่อโหลดและเก็บข้อมูลผ่าน AC",
    "category": "หมวดที่ 9: รูปแบบคำสั่งตามจำนวนแอดเดรส (Address Formats)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 190,
    "question": "90. ใน Immediate Addressing Mode ข้อมูล Operand ถูกจัดเก็บไว้ที่ใด?",
    "options": [
      "ก. ใน RAM",
      "ข. ใน Register",
      "ค. บรรจุอยู่ภายในตัวคำสั่งโดยตรง (ค่าคงที่)",
      "ง. ใน Stack"
    ],
    "correctIndex": 2,
    "explanation": "Immediate Addressing Mode ตัว Operand คือข้อมูลจริงที่อยู่ในส่วนฟิลด์ของคำสั่งเลย",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 191,
    "question": "91. จุดเด่นที่สุดของ Immediate Addressing Mode คืออะไร?",
    "options": [
      "ก. อ้างอิงพื้นที่ RAM ได้ใหญ่มาก",
      "ข. เข้าถึงข้อมูลได้เร็วที่สุด เพราะไม่ต้องเข้าถึง RAM หรือ Register อื่นอีกเพื่อดึงข้อมูล",
      "ค. ข้อมูลปรับเปลี่ยนได้ขณะรันโปรแกรม",
      "ง. เหมาะกับการทำ Array"
    ],
    "correctIndex": 1,
    "explanation": "เป็นโหมดที่เร็วที่สุดเนื่องจากข้อมูลอยู่ในตัวคำสั่งที่ดึงมาใน IR เรียบร้อยแล้ว",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 192,
    "question": "92. ใน Register Addressing Mode (เช่น ADD R1, R2) ข้อมูล Operand เก็บอยู่ที่ใด?",
    "options": [
      "ก. ในรีจิสเตอร์ภายใน CPU ที่ระบุชื่อ",
      "ข. ในหน่วยความจำหลัก RAM",
      "ค. ในฮาร์ดดิสก์",
      "ง. ใน Instruction Register"
    ],
    "correctIndex": 0,
    "explanation": "ฟิลด์ Operand จะระบุชื่อ/หมายเลขของ Register ที่บรรจุข้อมูลจริงอยู่",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 193,
    "question": "93. ลักษณะเด่นของ Direct Addressing Mode คือข้อใด?",
    "options": [
      "ก. Operand ชี้ไปที่ Register",
      "ข. Operand เป็นค่าคงที่",
      "ค. Operand คำนวณจาก Stack",
      "ง. Operand ระบุตำแหน่งแอดเดรสจริง (Memory Address) ใน RAM โดยตรง"
    ],
    "correctIndex": 3,
    "explanation": "Direct Addressing Mode ส่วนฟิลด์ Operand จะระบุเลขแอดเดรสตรงๆ ของ RAM",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 194,
    "question": "94. Register Indirect Addressing Mode (เช่น LOAD R1, [R2]) มีกลไกการทำงานอย่างไร?",
    "options": [
      "ก. ฟิลด์ Operand ระบุชื่อ Register (R2) แต่ภายใน Register นั้นเก็บ \"แอดเดรสจริง\" ใน RAM อีกที",
      "ข. ข้อมูลอยู่ใน R2 โดยตรง",
      "ค. อ่านข้อมูลจากสแตก",
      "ง. ข้อมูลอยู่ในตัวคำสั่ง"
    ],
    "correctIndex": 0,
    "explanation": "คำสั่งชี้ไปที่ Register แต่ค่าใน Register นั้นคือแอดเดรสที่จะต้องไปดึงข้อมูลจาก RAM",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 195,
    "question": "95. การคำนวณแอดเดรสจริง (Effective Address) ใน Indexed Addressing Mode ใช้สูตรใด?",
    "options": [
      "ก. Effective Address = PC + SP",
      "ข. Effective Address = Index Register + Offset (ค่าคงที่ในคำสั่ง)",
      "ค. Effective Address = Accumulator + 1",
      "ง. Effective Address = RAM Address * 2"
    ],
    "correctIndex": 1,
    "explanation": "EA คำนวณจากการนำค่าใน Index Register มาบวกกับค่าคงที่ Offset เหมาะอย่างยิ่งกับการเข้าถึง Array",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 196,
    "question": "96. Relative Addressing Mode คำนวณแอดเดรสจริงอย่างไร และนิยมใช้กับงานประเภทใด?",
    "options": [
      "ก. EA = SP + Offset นิยมใช้กับ I/O",
      "ข. EA = Register + RAM นิยมใช้กับตัวแปรเดี่ยว",
      "ค. EA = PC + Offset นิยมใช้กับคำสั่ง Branch/Jump เพื่อให้โปรแกรม Relocatable (ย้ายตำแหน่งทำงานได้)",
      "ง. EA = PC * Offset นิยมใช้คำนวณคูณ"
    ],
    "correctIndex": 2,
    "explanation": "Relative คำนวณอ้างอิงจาก Program Counter (PC) ช่วยให้โปรแกรมย้ายไปรันที่แอดเดรสใดใน RAM ก็ได้",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 197,
    "question": "97. คำสั่ง PUSH AX ใน Stack Addressing Mode ทำไมจึงไม่ต้องมี Address Field ระบุตำแหน่งใน RAM?",
    "options": [
      "ก. เพราะข้อมูลถูกลบทิ้ง",
      "ข. เพราะ Operand ถูกกำหนดโดยปริยายว่าทำงานกับข้อมูลบนสุดของ Stack ผ่าน Stack Pointer (SP)",
      "ค. เพราะเป็นคำสั่งของ CPU",
      "ง. เพราะใช้ Direct Mode"
    ],
    "correctIndex": 1,
    "explanation": "Stack Mode อ้างอิงข้อมูลบนสุดของสแตกโดยปริยายผ่าน SP จึงไม่ต้องระบุแอดเดรสฟิลด์",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 198,
    "question": "98. คำสั่ง ADD R1, #50 ในที่นี้ #50 ใช้ Addressing Mode ใด?",
    "options": [
      "ก. Register Addressing Mode",
      "ข. Direct Addressing Mode",
      "ค. Relative Addressing Mode",
      "ง. Immediate Addressing Mode"
    ],
    "correctIndex": 3,
    "explanation": "สัญลักษณ์ # นำหน้าตัวเลขมักใช้ในภาษาแอสเซมบลีเพื่อระบุว่าเป็นค่าข้อมูลโดยตรง (Immediate Value)",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 199,
    "question": "99. ข้อใดเรียงลำดับความเร็วในการเข้าถึง Operand จาก \"เร็วที่สุดไปช้าที่สุด\" ได้ถูกต้อง?",
    "options": [
      "ก. Immediate → Register → Direct → Register Indirect",
      "ข. Direct → Immediate → Register Indirect → Register",
      "ค. Register Indirect → Direct → Register → Immediate",
      "ง. Register → Immediate → Direct → Register Indirect"
    ],
    "correctIndex": 0,
    "explanation": "Immediate เร็วสุดเพราะข้อมูลอยู่ในคำสั่ง → Register รองลงมา → Direct เข้าถึง RAM 1 ครั้ง → Register Indirect อ่าน Register ก่อนแล้วค่อยเข้าถึง RAM",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  },
  {
    "id": 200,
    "question": "100. หาก CPU ต้องการประมวลผลข้อมูลในโครงสร้าง Array 1 มิติ โหมดการกำหนดแอดเดรสแบบใดเหมาะสมและมีประสิทธิภาพดีที่สุด?",
    "options": [
      "ก. Immediate Addressing Mode",
      "ข. Indexed Addressing Mode",
      "ค. Direct Addressing Mode",
      "ง. Stack Addressing Mode"
    ],
    "correctIndex": 1,
    "explanation": "Indexed Addressing Mode ถูกออกแบบมาโดยเฉพาะสำหรับการอ้างอิงตำแหน่งของ Array/Table โดยใช้ออฟเซ็ตบวกกับดัชนี",
    "category": "หมวดที่ 10: โหมดการกำหนดแอดเดรส (Addressing Modes)",
    "setId": 2,
    "setName": "ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)"
  }
];

export const allQuizQuestions = [...quizQuestionsSet1, ...quizQuestionsSet2];

export const quizSets = [
  { id: 'all', name: 'ทุกชุดข้อสอบ (200 ข้อ)', count: 200 },
  { id: '1', name: 'ชุดที่ 1: คลังข้อสอบทบทวน (100 ข้อ)', count: 100 },
  { id: '2', name: 'ชุดที่ 2: ชุดคำสั่งและวัฏจักร CPU (100 ข้อ)', count: 100 }
];
