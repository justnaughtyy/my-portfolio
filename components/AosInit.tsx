"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, // ระยะเวลาอนิเมชัน (มิลลิวินาที)
      once: false,   // ให้ทำงานแค่ครั้งเดียวตอนเลื่อนลงมาเจอ หรือทำงานทุกครั้งที่เลื่อนผ่าน
      easing: 'ease-in-out',
      offset: 100,   // เลื่อนลงมา 100px ถึงจะเริ่มทำงาน
    });
  }, []);

  return null;
}