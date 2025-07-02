// app/page.tsx หรือ src/app/page.tsx
import ProjectsSection from './components/ProjectsSection'; // ตรวจสอบ path ให้ถูกต้อง

export default function HomePage() {
  return (
    <div>
      {/* ส่วนอื่นๆ ของ Home Page เช่น Hero Section, About Section */}

      <ProjectsSection /> {/* เพิ่มส่วนแสดงผลงานตรงนี้ */}

      {/* ส่วนอื่นๆ ของ Home Page */}
    </div>
  );
}