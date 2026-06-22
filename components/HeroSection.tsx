"use client";

import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <div>
      <h1>
        <TypeAnimation
          sequence={[
            // ข้อความที่ 1
            "I'm Frontend Web\u00A0Developer",
            1000,
          ]}
          wrapper="span" // ให้ครอบข้อความด้วย Tag <span>
          speed={25} // ความเร็วในการพิมพ์ (ยิ่งน้อยยิ่งเร็ว)
          style={{ fontWeight: 'bold', color: '#fff'}}
          repeat={Infinity} // ให้วนลูปไปเรื่อยๆ (ถ้าอยากให้พิมพ์รอบเดียวจบ ใส่ 0)
        />
      </h1>
    </div>
  );
}