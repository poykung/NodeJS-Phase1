/* โดยทั่วไปกระบวนการทำงานภายในโปรแกรมจะเป็นไปตามลำดับขั้นตอนที่กำหนดไว้ หมายถึง 
ต้องทำงานส่วนนี้ให้เสร็จก่อนจึงจะสามารถไปทำงานในส่วนถัดไปได้(Blocking) แต่การทำงานบางอย่างอาจจะต้องใช้เวลาจนกว่าการทำงานนั้นจะเสร็จสิ้น 
ถึงจะเริ่มต้นทำงานถัดไป ซึ่งทำให้เกิดความล่าช้าในการทำงาน ใน JavaScript จะจัดการกับปัญหาล่าช้าดังกล่าว โดยวิธีการทำงานที่เรียกว่า Non-Blocking หรือ Asynchronous
 
Non-Blocking I/O หรือ Asynchronous
หมายถึง เวลาที่เริ่มต้นกระบวนการประมวลผลหรือทำงานไปแล้ว ถ้างานนั้นยังไม่เสร็จหรือใช้ระยะเวลานาน จะข้ามไปทำงานถัดไปได้
แล้วค่อยกลับมาทำงานส่วนที่รอภายหลัง วิธีนี้ช่วยให้การทำงานมีความรวดเร็วยิ่งขึ้น เพราะไม่ต้องเสียเวลารอในบางขั้นตอน

Blocking หรือ Synchronous
การทำงานแบบตามลำดับ สมมุติว่ามีงาน A และงาน B โดยจำเริ่มทำงาน A ให้เสร็จสิ้นจึงจะสามารถทำงาน B หรืองานอื่นได้
สรุปคือ ต้องรอการทำงานก่อนหน้าให้เสร็จค่อยทำคำสั่งถัดไปได้
*/

