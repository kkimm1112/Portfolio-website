// src/lib/projects.ts
export interface Project {
  id: string;
  imageSrc: string;
  title: string;
  category?: string;
  description: string;
  technologies: string[];
  apkDownloadUrl?: string; // Optional for mobile apps
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
    imageSrc: "/images/img-appPOS/img1.jpg",
    title: "App POS - minimart: Manage products and sales",
    category: "Mobile UI",
    description: `
      โปรเจกต์นี้เป็นการออกแบบและสร้างแอปพลิเคชัน POS สำหรับร้านมินิมาร์ทที่มีฟังก์ชันการจัดการสินค้าและการขาย บนสมาร์ทโฟน
      <br/><br/>
      **ความท้าทาย:** การออกแบบ UI ที่ใช้งานง่ายสำหรับผู้ใช้ที่ไม่คุ้นเคยกับเทคโนโลยี, การจัดการข้อมูลสินค้าที่มีจำนวนมาก, และการทำให้แอปพลิเคชันทำงานได้รวดเร็วและมีประสิทธิภาพ
      <br/><br/>
      **ฟังก์ชันการใช้งาน:** การเพิ่มและแก้ไขข้อมูลสินค้า, การจัดการสต็อกสินค้า, การสร้างรายงานการขาย, และการทำงานแบบออฟไลน์
    `,
    technologies: ["Figma", "Flutter", "Andriod Studio", "Prototyping"],
    apkDownloadUrl: "/downloads/app-release.apk",
    galleryImages: [
      "/images/img-appPOS/img1.jpg",
      "/images/img-appPOS/img2.jpg",
      "/images/img-appPOS/img3.jpg",
      "/images/img-appPOS/img4.jpg",
      "/images/img-appPOS/img5.jpg",
      "/images/img-appPOS/img6.jpg",
    ],
  },
  {
    id: "website-development",
    imageSrc: "/images/workShopAPI.png",
    title: "E-Commerce Website: workshop from learn",
    category: "Web Development",
    description: `
      โปรเจกต์นี้เป็นการทดสอบการพัฒนาเว็บไซต์อีคอมเมิร์ซโดยใช้ mock API เพื่อดึงข้อมูลสินค้าและจัดการตะกร้าสินค้า
      <br/><br/>
      **ความท้าทาย:** ออกแบบ UI เว็บไซต์, การจัดการ API สำหรับการดึงข้อมูลสินค้า
      <br/><br/>
      **ฟังก์ชันการใช้งาน:** เพิ่ม-ลบสินค้าในตะกร้า
    `,
    technologies: ["HTML", "CSS", "JavaScript", "mockAPI"],
    
    galleryImages: [
      "/images/workShopAPI.png",
      
    ],
  },
  {
    id: "webmovie",
    imageSrc: "/images/webmovie.png",
    title: "Web Movie: learn HTML CSS JavaScript",
    category: "Web Development",
    description: `
      โปรเจกต์นี้เป็นการเขียนโปรแกรมด้วย HTML CSS JavaScript เพื่อเรียนรู้การใช้งาน
      <br/><br/>
      **ความท้าทาย:** ออกแบบ UI เว็บไซต์, การแทรกวิดีโอจากแหล่งอื่น
      <br/><br/>
      **ฟังก์ชันการใช้งาน:** เปิดดูหน้าตัวอย่างหนัง
    `,
    technologies: ["HTML", "CSS", "JavaScript"],
    
    galleryImages: [
      "/images/webmovie.png",
      "/images/carpage.jpeg",
      
    ],
  },
  // เพิ่มโปรเจกต์อื่นๆ ตามต้องการ
];

export function getProjectById(id: string) {
  return allProjectsData.find((project) => project.id === id);
}