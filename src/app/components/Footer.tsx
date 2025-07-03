// src/component/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear(); // ดึงปีปัจจุบันอัตโนมัติ

  return (
    <footer className="bg-gray-800 text-white py-6 mt-12 shadow-inner">
      <div className="container mx-auto px-4 text-center">
        {/* ส่วนข้อมูลลิขสิทธิ์ */}
        <p className="text-sm">
          &copy; {currentYear} THANAPAT K. All rights reserved.
        </p>

        {/* อาจเพิ่มลิงก์โซเชียลมีเดียหรือลิงก์อื่นๆ ในอนาคต */}
        <div className="flex justify-center space-x-6 mt-4">
          {/* ตัวอย่างลิงก์โซเชียลมีเดีย (สามารถเพิ่ม icon ได้ในอนาคต) */}
          <a
            href="https://github.com/kkimm1112" // แทนที่ด้วย GitHub ของคุณ
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          
          {/* เพิ่มลิงก์อื่นๆ ได้ตามต้องการ */}
        </div>
      </div>
    </footer>
  );
  
}