// tailwind.config.js

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // สำหรับ App Router (src/app)
    './src/**/*.{js,ts,jsx,tsx,mdx}', // ครอบคลุม src/ (เผื่อมี components นอก app)
    './components/**/*.{js,ts,jsx,tsx,mdx}', // เผื่อมี components แยกออกมา (ถ้าไม่ได้อยู่ใน app)
    // เพิ่มเส้นทางอื่นๆ ที่คุณต้องการให้ Tailwind สแกน เช่น
    // './pages/**/*.{js,ts,jsx,tsx,mdx}', // ถ้ายังใช้ Pages Router ด้วย
  ],
  theme: {
    extend: {
      // คุณสามารถปรับแต่ง Theme ของ Tailwind ได้ที่นี่
      // เช่น colors, fonts, spacing, etc.
    },
  },
  plugins: [
    // คุณสามารถเพิ่ม Tailwind Plugins ที่นี่ได้
  ],
};
export default config;