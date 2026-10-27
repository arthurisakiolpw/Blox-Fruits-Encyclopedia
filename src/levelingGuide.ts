export type LevelStop={sea:string;min:number;max:number;island:string};
// Approximate leveling route; quest requirements may differ by patch.
export const levelingRoute:LevelStop[]=[
  {
    "sea": "First Sea",
    "min": 1,
    "max": 10,
    "island": "Starter Island"
  },
  {
    "sea": "First Sea",
    "min": 10,
    "max": 30,
    "island": "Jungle"
  },
  {
    "sea": "First Sea",
    "min": 30,
    "max": 60,
    "island": "Pirate Village"
  },
  {
    "sea": "First Sea",
    "min": 60,
    "max": 90,
    "island": "Desert"
  },
  {
    "sea": "First Sea",
    "min": 90,
    "max": 120,
    "island": "Frozen Village"
  },
  {
    "sea": "First Sea",
    "min": 120,
    "max": 150,
    "island": "Marine Fortress"
  },
  {
    "sea": "First Sea",
    "min": 150,
    "max": 190,
    "island": "Lower Skylands"
  },
  {
    "sea": "First Sea",
    "min": 190,
    "max": 250,
    "island": "Prison"
  },
  {
    "sea": "First Sea",
    "min": 250,
    "max": 300,
    "island": "Colosseum"
  },
  {
    "sea": "First Sea",
    "min": 300,
    "max": 375,
    "island": "Magma Village"
  },
  {
    "sea": "First Sea",
    "min": 375,
    "max": 450,
    "island": "Underwater City"
  },
  {
    "sea": "First Sea",
    "min": 450,
    "max": 625,
    "island": "Upper Skylands"
  },
  {
    "sea": "First Sea",
    "min": 625,
    "max": 700,
    "island": "Fountain City"
  },
  {
    "sea": "Second Sea",
    "min": 700,
    "max": 875,
    "island": "Kingdom of Rose"
  },
  {
    "sea": "Second Sea",
    "min": 875,
    "max": 950,
    "island": "Green Zone"
  },
  {
    "sea": "Second Sea",
    "min": 950,
    "max": 1000,
    "island": "Graveyard"
  },
  {
    "sea": "Second Sea",
    "min": 1000,
    "max": 1100,
    "island": "Snow Mountain"
  },
  {
    "sea": "Second Sea",
    "min": 1100,
    "max": 1250,
    "island": "Hot and Cold"
  },
  {
    "sea": "Second Sea",
    "min": 1250,
    "max": 1350,
    "island": "Cursed Ship"
  },
  {
    "sea": "Second Sea",
    "min": 1350,
    "max": 1425,
    "island": "Ice Castle"
  },
  {
    "sea": "Second Sea",
    "min": 1425,
    "max": 1500,
    "island": "Forgotten Island"
  },
  {
    "sea": "Third Sea",
    "min": 1500,
    "max": 1575,
    "island": "Port Town"
  },
  {
    "sea": "Third Sea",
    "min": 1575,
    "max": 1700,
    "island": "Hydra Island"
  },
  {
    "sea": "Third Sea",
    "min": 1700,
    "max": 1775,
    "island": "Great Tree"
  },
  {
    "sea": "Third Sea",
    "min": 1775,
    "max": 1975,
    "island": "Floating Turtle"
  },
  {
    "sea": "Third Sea",
    "min": 1975,
    "max": 2075,
    "island": "Haunted Castle"
  },
  {
    "sea": "Third Sea",
    "min": 2075,
    "max": 2450,
    "island": "Sea of Treats"
  },
  {
    "sea": "Third Sea",
    "min": 2450,
    "max": 2600,
    "island": "Tiki Outpost"
  },
  {
    "sea": "Third Sea",
    "min": 2600,
    "max": 2800,
    "island": "Submerged Island"
  }
];
export const finaleSequence=["Starter Island","Jungle","Pirate Village","Desert","Frozen Village","Marine Fortress","Lower Skylands","Prison","Colosseum","Magma Village","Underwater City","Upper Skylands","Fountain City"];
export const finaleGuide={name:'The Finale',fromLevel:2995,toLevel:3000,location:'Middle Town',requirement:'Complete the 39 First Sea Island Secrets',stepsTh:['ทำ Island Secrets ทั้ง 39 เควสก่อน','ไปที่ Teleporter ใน Middle Town','กดเลือกชื่อเกาะตามลำดับการฟาร์มเลเวล 1–700','เมื่อเลือกเกาะแล้ว ไม่ต้องวาร์ป ให้กดเกาะถัดไปทันที','กดครบตามลำดับเพื่อแก้ปริศนา'],noteTh:'ลำดับได้รับการยืนยันจากผู้เล่น; ยังไม่ได้ตรวจสอบกับประกาศทางการ'};
