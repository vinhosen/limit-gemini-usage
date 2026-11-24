# Limit Gemini Usage (PWA)

🌐 **Live Web App & PWA:** https://vinhosen.github.io/limit-gemini-usage/

เว็บแอป PWA สำหรับติดตามโควตาการใช้งาน Gemini (**5-Hour Limit** และ **Weekly Limit**) ดีไซน์ **Liquid Glass × Material Design 3** อ้างอิงแรงบันดาลใจจาก [GeminiUsageAndroid](https://github.com/punnagun094/GeminiUsageAndroid)

## ✨ ฟีเจอร์หลัก (Features)

- **📲 ติดตั้งเป็นแอป (PWA Installable):** รองรับ `manifest.webmanifest`, Service Worker (`sw.js`) สำหรับใช้งานออฟไลน์, ปุ่มติดตั้งแอป (`Install App`) และคู่มือติดตั้งบน iOS Safari
- **📊 Dual-Quota Tracking:** แสดงแถบ Progress ของทั้ง **รอบ 5 ชั่วโมง (5-Hour Limit)** และ **ขีดจำกัดรายสัปดาห์ (Weekly Limit)**
- **⏱️ Real-Time Reset Countdown:** ตัวนับถอยหลังเวลา Reset แบบเรียลไทม์ทุกวินาที
- **🔄 3 วิธีซิงค์ข้อมูล:**
  - **ซิงค์จากคลิปบอร์ด (Clipboard Sync):** วางข้อความจาก `gemini.google.com/usage` แล้ววิเคราะห์อัตโนมัติ (รองรับทั้งภาษาไทยและอังกฤษ)
  - **กรอก / แก้ไขค่าเอง (Manual Edit):** ปรับเปอร์เซ็นต์และเวลาที่เหลือผ่าน Slider ได้ทันที
  - **One-Tap Bookmarklet:** กด Bookmark 1 ครั้งบนหน้า Gemini Usage เพื่อส่งค่ากลับมาอัปเดตทันที
- **🕒 ประวัติการอัปเดตล่าสุด:** เก็บข้อมูลทั้งหมดใน `localStorage` บนอุปกรณ์ 100% ไม่ส่งข้อมูลออกไปเซิร์ฟเวอร์ภายนอก
- **🌐 สลับภาษา TH / EN และโหมด Light / Dark**
