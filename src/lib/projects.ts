export interface Project {
  id: string;
  imageSrc: string;
  title: string;
  category?: string;
  description: string;
  technologies: string[];
  galleryImages: string[];
}

export const allProjectsData: Project[] = [
  {
    id: "project-alpha",
    imageSrc: "/images/webpageSeniorProject.jpg",
    title: "Senior Project: Smart Bottle Redeem Point System",
    description: `
      โปรเจกต์นี้เป็นโปรเจกต์จบการศึกษาที่พัฒนาระบบที่สามารถตรวจแยกขวดพลาสติกสำหรับรีไซเคิลได้โดยนำเทคโนโลยี Image Processing มาใช้และพัฒนาเว็บแอปพลิเคชันสำหรับเก็บคะแนนสะสมของผู้ใช้
      <br/><br/>
      **ความท้าทาย:** งบประมาณจำกัด, การออกแบบ UI ที่ใช้งานง่ายสำหรับผู้ใช้ทั่วไป, และการทำงานร่วมกับเทคโนโลยี Image Processing ที่ต้องการความแม่นยำสูงโดยต้องทำงานบนอุปกรณ์ที่มีข้อจำกัดด้านฮาร์ดแวร์
      <br/><br/>
      **โซลูชัน:** การออกแบบ UI ที่เรียบง่ายและใช้งานง่าย, การใช้เทคโนโลยี Image Processing ที่เหมาะสมกับฮาร์ดแวร์ที่มีอยู่, และการพัฒนาเว็บแอปพลิเคชันที่สามารถเข้าถึงได้จากทุกอุปกรณ์, การออกแบบ flow การทำงาน
    `,
    technologies: ["Figma", "Sketchup", "User Research", "Prototyping", "Usability Testing"],
    galleryImages: [
      "/images/img-senior/circuitAll.JPG",
      "/images/img-senior/homepage.jpg",
      "/images/img-senior/machine.jpg",
    ],
  },
  {
    id: "mobile-app-redesign",
    imageSrc: "/images/project-2.jpg",
    title: "Mobile App Redesign: Enhancing User Engagement",
    category: "Mobile UI",
    description: `
      โปรเจกต์นี้เป็นการปรับปรุงดีไซน์แอปพลิเคชันมือถือที่มีอยู่เดิม เพื่อเพิ่มการมีส่วนร่วมของผู้ใช้และปรับปรุงประสบการณ์โดยรวม. เราได้วิเคราะห์ข้อมูลผู้ใช้, ระบุจุดที่ต้องปรับปรุง, และนำเสนอดีไซน์ใหม่ที่ทันสมัยและใช้งานง่ายขึ้น. ผลลัพธ์คือการเพิ่มขึ้นของเวลาที่ผู้ใช้ใช้ในแอปและอัตราการกลับมาใช้งานซ้ำ.
      <br/><br/>
      **ความท้าทาย:** การปรับปรุงดีไซน์โดยไม่กระทบต่อฟังก์ชันการทำงานหลักและรักษาความคุ้นเคยของผู้ใช้เดิม.
      <br/><br/>
      **โซลูชัน:** การออกแบบที่เน้นความสะอาด, การใช้ภาพประกอบที่น่าสนใจ, และการปรับปรุง Navigation ให้ใช้งานง่ายขึ้น.
    `,
    technologies: ["Adobe XD", "Mobile UI", "User Flow", "A/B Testing"],
    galleryImages: [
      "/images/project-2-detail-1.jpg",
      "/images/project-2-detail-2.jpg",
    ],
  },
  // เพิ่มโปรเจกต์อื่นๆ ตามต้องการ
];

export function getProjectById(id: string) {
  return allProjectsData.find((project) => project.id === id);
}