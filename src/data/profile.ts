export type Education = {
  school: string;
  department: string;
};

export type Experience = {
  title: string;
  desc: string;
};

export type Expertise = {
  imageUrl: string;
  title: string;
  desc: string;
}

export type Profile = {
  education: Education[];
  experience: Experience[];
  expertise: Expertise[];
  introduce: string;
  swiperImage: Array<string>;
};

export const profile: Profile = {
  education: [
    {
      school: '國立高雄科技大學',
      department: '電腦與通訊工程 碩士',
    },
    {
      school: '長榮大學',
      department: '資訊管理 學士',
    },
    {
      school: '國立基隆高中',
      department: '普通科',
    },
  ],
  experience: [
    {
      title: '翰霖科技資訊股份有限公司 Java後端工程師',
      desc: '2025/10~至今',
    },
    {
      title: '宏益科技服務股份有限公司 Java後端工程師',
      desc: '2025/1~2025/9',
    },
    {
      title: '聰泰科技開發股份有限公司 Vue前端工程師',
      desc: '2023/4~2024/12',
    },
  ],
  expertise: [
    {
      imageUrl:'/Personal.jpg',
      title: '前端開發與 SEO 優化',
      desc: '建立響應式且高效能的網頁應用，專注於使用者體驗與介面細節，同時結合 SEO 最佳實踐（如語意化結構與效能優化），提升網站的搜尋排名與曝光度。'
    },
    {
      imageUrl:'/Personal.jpg',
      title: '後端開發',
      desc: '具備前後端整合能力，除了前端開發外，也專注於後端系統建置，包含 API 設計、資料庫管理與系統邏輯建構，打造穩定且具擴展性的伺服器端應用。'
    },
    {
      imageUrl:'/Personal.jpg',
      title: '雲端建置',
      desc: '熟悉 AWS 雲端平台，具備應用部署、主機管理與基本服務整合經驗，能建立穩定且具擴展性的雲端架構。'
    }
  ],
  introduce: '各位好，我是李尹覺，專業為軟體開發設計，專注於打造高效能與可擴展的網站系統。具備網頁、App獨立開發經驗，並且持續學習新技術，致力於提供穩定且具商業價值的解決方案。',
  swiperImage: [
    '/Personal.jpg',
    '/Personal2.jpg',
    '/Personal3.jpg',
    '/Personal4.jpg',
    '/Personal5.jpg',
  ]
};
