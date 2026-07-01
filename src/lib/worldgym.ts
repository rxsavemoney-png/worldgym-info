export const worldGymConfig = {
  brandName: "World Gym",
  logoSrc: "/worldgym/logo.png",
  tagline: "專屬諮詢網",
  lineUrl: "https://lin.ee/QFwp6N0",
  phone: "0923520145",
  lineId: "@05269abc",
  email: "yushunhuang496@gmail.com",
} as const;

export const navLinks = [
  { label: "最新優惠", href: "#promotions" },
  { label: "設備對比", href: "#branches" },
  { label: "方案收費", href: "#pricing" },
  { label: "入會流程", href: "#membership" },
] as const;

export const heroSlides = [
  { src: "/worldgym/hero/image_65a800.jpg", alt: "有氧跑步機區" },
  { src: "/worldgym/hero/image_65f97e.jpg", alt: "插銷式重訓器材區" },
  { src: "/worldgym/hero/image_65a805.jpg", alt: "草皮功能性訓練與多功能核心區" },
  { src: "/worldgym/hero/image_65f9a3.jpg", alt: "大型重訓機台區" },
  { src: "/worldgym/hero/image_65f99e.jpg", alt: "寬廣炫彩有氧團體教室" },
  { src: "/worldgym/hero/image_65f984.png", alt: "室內溫水游泳池區" },
] as const;

export const promotions = [
  {
    title: "免入會費",
    description: "限時活動，全方案免收入會費。",
  },
  {
    title: "當月贈品",
    description: "新會員加入即享當月專屬好禮。",
  },
  {
    title: "舊會員回歸",
    description: "回歸會員專屬優惠，重新啟動訓練。",
  },
  {
    title: "國軍專案",
    description: "現役軍人憑證件享專屬方案。",
  },
  {
    title: "觀光署專案",
    description: "交通部觀光署員工專屬福利。",
  },
] as const;

export type FacilityStatus =
  | { type: "yes" }
  | { type: "partial"; note: string }
  | { type: "no" };

export const facilityCompareColumns = [
  { key: "strengthCardio" as const, label: "重訓/有氧" },
  { key: "groupCardio" as const, label: "有氧團課" },
  { key: "spa" as const, label: "SPA/三溫暖" },
  { key: "pool" as const, label: "游泳池" },
  { key: "smallGroup" as const, label: "小班團課" },
];

/** 手機版直立清單顯示用標籤 */
export const facilityCompareMobileLabels: Record<
  (typeof facilityCompareColumns)[number]["key"],
  string
> = {
  strengthCardio: "重訓 / 有氧",
  groupCardio: "有氧團課",
  spa: "SPA / 三溫暖",
  pool: "游泳池",
  smallGroup: "小班專屬團課",
};

export const gymFacilityCompare = [
  {
    id: "elite",
    name: "Elite",
    tier: "最高級",
    positioning: "精華地段高規格",
    strengthCardio: { type: "yes" } satisfies FacilityStatus,
    groupCardio: { type: "yes" } satisfies FacilityStatus,
    spa: { type: "yes" } satisfies FacilityStatus,
    pool: { type: "partial", note: "部分館別有" } satisfies FacilityStatus,
    smallGroup: { type: "no" } satisfies FacilityStatus,
  },
  {
    id: "sport",
    name: "Sport",
    tier: "旗艦店",
    positioning: "大型多設施會館",
    strengthCardio: { type: "yes" } satisfies FacilityStatus,
    groupCardio: { type: "yes" } satisfies FacilityStatus,
    spa: { type: "yes" } satisfies FacilityStatus,
    pool: { type: "yes" } satisfies FacilityStatus,
    smallGroup: { type: "no" } satisfies FacilityStatus,
  },
  {
    id: "fitness",
    name: "一般館 / Fitness",
    tier: "標準會館",
    positioning: "標準商業健身房",
    strengthCardio: { type: "yes" } satisfies FacilityStatus,
    groupCardio: { type: "yes" } satisfies FacilityStatus,
    spa: { type: "yes" } satisfies FacilityStatus,
    pool: { type: "no" } satisfies FacilityStatus,
    smallGroup: { type: "no" } satisfies FacilityStatus,
  },
  {
    id: "express",
    name: "Express",
    tier: "快速運動",
    positioning: "高 CP 值簡配場館",
    strengthCardio: { type: "yes" } satisfies FacilityStatus,
    groupCardio: { type: "no" } satisfies FacilityStatus,
    spa: { type: "no" } satisfies FacilityStatus,
    pool: { type: "no" } satisfies FacilityStatus,
    smallGroup: { type: "no" } satisfies FacilityStatus,
  },
  {
    id: "fitzone",
    name: "FITZONE",
    tier: "小班制預約導向",
    positioning: "小班制預約導向",
    strengthCardio: { type: "partial", note: "僅心肺肌力區" } satisfies FacilityStatus,
    groupCardio: { type: "no" } satisfies FacilityStatus,
    spa: { type: "no" } satisfies FacilityStatus,
    pool: { type: "no" } satisfies FacilityStatus,
    smallGroup: { type: "yes" } satisfies FacilityStatus,
  },
] as const;

export const branchSelectionGuide = [
  {
    need: "想要設施最完整、空間感最好",
    pick: "優先選擇 Elite 或 Sport",
  },
  {
    need: "一般健身需求、據點多、CP 值高",
    pick: "一般館（Fitness）最實用",
  },
  {
    need: "只想規律重訓/有氧，不在意團課與額外設施",
    pick: "Express 最划算",
  },
  {
    need: "偏好跟著教練上小班團課",
    pick: "FITZONE 最符合需求",
  },
] as const;

export const pricingPlans = [
  {
    name: "單館使用",
    description: "限定單一館別，適合固定地點運動會員",
    highlight: false,
    features: ["固定單館訓練", "完整器材使用", "團體課程參與", "三溫暖設施"],
  },
  {
    name: "區域型方案",
    description: "可通用區域內所有館別，彈性高、便利性強",
    highlight: true,
    features: ["區域內多館通用", "工作地點彈性切換", "團體課程不限", "優先活動通知"],
  },
  {
    name: "全台方案",
    description: "一卡通全台 World Gym，無論出差旅行自由訓練",
    highlight: false,
    features: ["全台據點暢行", "出差旅行零間斷", "頂級會員禮遇", "專屬客服通道"],
  },
] as const;

export const feeNotes = [
  {
    term: "入會費",
    detail: "公司每月皆有活動折抵",
  },
  {
    term: "手續費",
    detail: "一次性收取行政資料建檔",
  },
  {
    term: "月費",
    detail: "依館型地點不同",
  },
  {
    term: "綁約",
    detail: "期間每月固定扣款，時間越長越優惠",
  },
] as const;

export const membershipSteps = [
  {
    step: 1,
    title: "加 LINE 詢問",
    description: "諮詢專員挑選最合適方案",
  },
  {
    step: 2,
    title: "專屬入會連結",
    description: "確定方案後獲得專屬連結",
  },
  {
    step: 3,
    title: "填寫基本資料",
    description: "輸入資料、合約簽名綁定扣款，完全保密",
  },
  {
    step: 4,
    title: "恭喜成為會員",
    description: "下載會員 APP 開始運動！",
  },
] as const;
