export type CourseItem = {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  badge?: string;
};

export type CourseCategory = {
  id: string;
  title: string;
  accent: "emerald" | "purple" | "red" | "zinc" | "orange";
  courses: readonly CourseItem[];
};

export const courseCategories: readonly CourseCategory[] = [
  {
    id: "stretch",
    title: "靜態伸展課程",
    accent: "emerald",
    courses: [
      {
        id: "hatha",
        name: "哈達瑜珈",
        nameEn: "Hatha Yoga",
        description:
          "結合呼吸、冥想、體位法等，淨化強化每一個細胞，釋放潛在能量，消除焦慮。較適合銀髮族、家庭主婦或壓力大的上班族。",
      },
      {
        id: "flow",
        name: "動瑜珈",
        nameEn: "Flow Yoga",
        description:
          "動態的體位法練習，結合動作、呼吸與基礎對位規則，著重在呼吸帶領動作的流動感。",
      },
      {
        id: "yin",
        name: "陰瑜珈",
        nameEn: "Yin Yoga",
        description:
          "強調緩慢、柔和、延伸的動作，目標在伸展筋膜，達到深層放鬆與修復。",
      },
      {
        id: "restorative",
        name: "療癒瑜珈",
        nameEn: "Restorative Yoga",
        description:
          "以柔和的坐姿或躺姿，幫助身體回歸原來的狀態，配合深沉緩慢的呼吸，將專注力回歸身心。",
      },
      {
        id: "yogalates",
        name: "瑜珈提斯",
        nameEn: "Yogalates",
        description:
          "瑜伽的靜態肌力搭配皮拉提斯的動態動作，著重核心、骨骼整合、柔軟度與平衡，緩解肌肉關節疼痛。",
      },
      {
        id: "pilates",
        name: "皮拉提斯",
        nameEn: "Pilates",
        description:
          "依六大原則：專注、呼吸、核心、控制、精確、流暢，教導身體由穩定的核心帶動四肢有效移動。",
      },
      {
        id: "stretch-yoga",
        name: "瑜珈伸展",
        nameEn: "Stretch Yoga",
        description:
          "專注身體伸展與呼吸，以基礎體位法逐步增強肌力、彈性與柔軟度，緩解僵硬。",
      },
      {
        id: "core-mat",
        name: "墊上核心",
        nameEn: "Core Mat",
        description:
          "以自身體重為阻力，強化核心穩定，由內而外強化肌群，改善平衡與姿勢。",
      },
      {
        id: "fitness-yoga",
        name: "適能瑜珈",
        nameEn: "Fitness Yoga",
        description:
          "訓練柔軟度、強化背部、改善僵硬脊椎與關節，紓壓並預防運動傷害。",
      },
      {
        id: "gentle",
        name: "和緩瑜珈",
        nameEn: "Gentle Yoga",
        description:
          "又稱舒緩瑜珈，動作溫和緩慢，適合初學者或追求身心健康、透過伸展與專注達到平衡者。",
      },
    ],
  },
  {
    id: "dance",
    title: "舞動舞蹈課程",
    accent: "purple",
    courses: [
      {
        id: "hiphop",
        name: "流行街舞",
        nameEn: "Hip Hop",
        description:
          "用熱門流行舞曲、或是充滿感染力的節奏音樂，搭配身體律動、舞蹈基本動作反覆演練。",
      },
      {
        id: "ballroom",
        name: "國標舞",
        nameEn: "Ballroom Dance",
        description:
          "根據教學的不同有所謂男女對舞以及個人排舞，服裝上也有老師建議穿舞鞋來上課。",
      },
      {
        id: "belly",
        name: "中東肚皮舞",
        nameEn: "Belly Dance",
        description:
          "舞蹈訓練各部位的肌力，如頸部、肩部、腹部、腰部、臀部、及肩部的肌力與靈活性，同時雕塑腰部、髖部和腹部等部位，其中以腹部為中心，將身體分散不同的區域獨立協調和組合，形成特殊的柔美線條。",
      },
      {
        id: "jazz",
        name: "爵士舞",
        nameEn: "Jazz Dance",
        description:
          "節奏本身比較強勁、充滿動感、靈活、富饒的肢體活動，動作的本質是一種自由而純樸的表現，直接把內心的感受表達出來，舞蹈的動作及音樂極富節奏感，練習經常可達到身體放鬆及運動的效果。",
      },
      {
        id: "party",
        name: "熱舞派對",
        nameEn: "Dance Party",
        description:
          "會以最簡單的方式讓會員跟上，並加入適當的舞感使參與的會員們得到成就感，也利用簡單的變化讓身體適應不同的動作，啟動大小肌肉開啟神經肌肉的控制訓練。",
      },
      {
        id: "mv",
        name: "MV 舞蹈",
        nameEn: "MV Dance",
        description:
          "把熱門音樂錄影帶的舞蹈動作，用原汁原味，或是改得更簡單易學後的舞序教給學員，學習的過程中可以訓練肢體美感、身體協調性、對柔軟度和肌耐力也有幫助。",
      },
      {
        id: "social",
        name: "社交舞",
        nameEn: "Social Dance",
        description:
          "要與他人同歡共舞，只要見到面就可以來上一段舞蹈，在台灣幾種常見的社交舞分別是：恰恰、倫巴、三步吉魯巴、六步吉魯巴。",
      },
      {
        id: "zumba",
        name: "Zumba",
        nameEn: "Zumba",
        description:
          "通過混合低強度和高強度動作進行間歇式訓練，為全身性鍛煉，結合健身元素，每次離開課堂時都能提升能量和強大的力量。",
      },
    ],
  },
  {
    id: "cardio",
    title: "心肺肌力課程",
    accent: "red",
    courses: [
      {
        id: "sculpt",
        name: "全方位雕塑",
        nameEn: "Total Body Sculpt",
        description:
          "配合音樂，利用啞鈴、瑜珈球、藥球等阻力器材，進行肌力訓練。",
      },
      {
        id: "step",
        name: "階梯有氧",
        nameEn: "Step Move",
        description:
          "在高強度、低衝擊下，利用階梯踏板進行有氧運動。",
      },
      {
        id: "hilow",
        name: "活力有氧",
        nameEn: "Hi-Low",
        description:
          "在音樂伴隨下，將基本舞步、曼波、抬膝等組合成套組，達到燃脂效果。",
      },
      {
        id: "dance-aerobic",
        name: "舞動有氧",
        nameEn: "Dance Aerobic",
        description:
          "傳統有氧結合爵士、現代、拉丁、街舞等舞蹈元素。",
      },
      {
        id: "freestyle-step",
        name: "花式階梯",
        nameEn: "Freestyle Step",
        description:
          "在階梯踏板上進行高強度動作，加入舞蹈與協調訓練。",
      },
      {
        id: "yoga-ball",
        name: "瑜珈球",
        nameEn: "Yoga Ball",
        description:
          "融合太極、瑜伽、皮拉提斯，利用瑜珈球鍛鍊核心穩定與協調性。",
      },
      {
        id: "ball-sculpt",
        name: "球雕塑",
        nameEn: "Ball Sculpt",
        description:
          "利用球類道具雕塑肌肉，適合初學者或一般健身者。",
      },
      {
        id: "functional",
        name: "功能性訓練",
        nameEn: "Functional Training",
        description:
          "結合肌力、有氧、間歇與核心訓練，適合各程度學員。",
      },
    ],
  },
  {
    id: "spinning",
    title: "飛輪課程",
    accent: "zinc",
    courses: [
      {
        id: "interval",
        name: "間歇訓練",
        nameEn: "Interval",
        description:
          "間歇形式進行是在高強度後給予相等的休息時間，或是倍數的休息時間，並以此來做循環的一種訓練模式。",
      },
      {
        id: "fat-burning",
        name: "燃脂訓練",
        nameEn: "Fat Burning",
        description:
          "利用音樂來創造出不同的騎乘情境，讓課堂中運動的學員跟著音樂騎乘在平路、爬坡等等不同的地形，彷彿置身在戶外運動，用中低的運動強度來完成一堂課程，身體要消耗熱量，必須要透過「氧氣」來進行能量轉換。",
      },
    ],
  },
  {
    id: "lifestyle",
    title: "基礎樂活課程",
    accent: "orange",
    courses: [
      {
        id: "yoyo-stretch",
        name: "悠遊延展",
        nameEn: "Yo Yo Stretch",
        badge: "WOW",
        description:
          "50 分鐘課程，結合動態與靜態肌力伸展，以簡單重複動作幫助學員理解身體對位，改善姿勢，提升耐力、柔軟度、穩定度與敏捷度。",
      },
      {
        id: "aerobic-intro",
        name: "適能有氧肌力",
        nameEn: "Aerobic Intro",
        description:
          "基礎課程，將基本有氧舞步融入簡單組合，屬低衝擊、低強度訓練。",
      },
      {
        id: "yoga-basic",
        name: "瑜珈基礎",
        nameEn: "Yoga Basic",
        description:
          "專為初學者設計，挑選適合體位並詳細解說、深入教學，幫助初學者安全完成動作、學習瑜珈要領。",
      },
      {
        id: "step-intro",
        name: "入門階梯",
        nameEn: "Step Intro",
        description:
          "利用有氧階梯進行不同高度的上下踏步有氧運動，提升運動強度、強化下肢肌群與耐力，並學習安全踩階技巧。",
      },
    ],
  },
] as const;

const accentStyles = {
  emerald: {
    border: "border-emerald-600/60",
    dot: "bg-emerald-500",
    label: "text-emerald-500",
    ring: "hover:border-emerald-600/40",
  },
  purple: {
    border: "border-purple-600/60",
    dot: "bg-purple-500",
    label: "text-purple-400",
    ring: "hover:border-purple-600/40",
  },
  red: {
    border: "border-[#E31E24]/60",
    dot: "bg-[#E31E24]",
    label: "text-red-500",
    ring: "hover:border-[#E31E24]/40",
  },
  zinc: {
    border: "border-zinc-500/60",
    dot: "bg-zinc-400",
    label: "text-zinc-400",
    ring: "hover:border-zinc-500/40",
  },
  orange: {
    border: "border-orange-500/60",
    dot: "bg-orange-500",
    label: "text-orange-400",
    ring: "hover:border-orange-500/40",
  },
} as const;

export function getCategoryAccent(accent: CourseCategory["accent"]) {
  return accentStyles[accent];
}
