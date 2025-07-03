// app/layout.tsx
import './globals.css'; // สมมติว่ามีไฟล์ CSS หลักของคุณ
import Navbar from './components/Navbar'; // เส้นทางอาจแตกต่างกันไป
import Footer from './components/Footer'; // นำเข้า Footer

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <main>{children}</main> {/* เนื้อหาหลักของหน้าเว็บของคุณ */}
        <Footer /> {/* วาง Footer ไว้ที่นี่ */}
      </body>
    </html>
  );
}