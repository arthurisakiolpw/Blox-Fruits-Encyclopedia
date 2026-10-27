export type FightingStyle={name:string;sea:string;teacher:string;location:string;beli:number|null;fragments:number|null;requirements:string;notes:string;moves:{key:string;name:string;mastery:number}[]};
export const fightingStyles:FightingStyle[]=[
  {
    "name": "Combat",
    "sea": "First Sea",
    "teacher": "Starting style",
    "location": "เริ่มเกม",
    "beli": 0,
    "fragments": 0,
    "requirements": "ได้รับอัตโนมัติ",
    "notes": "คำเตือนจากประสบการณ์ผู้เล่น: ผู้เล่นเลเวล 3000 รายงานว่ากลับมาใช้ Combat ได้ด้วยการรีเซ็ตที่ Prison แต่เลเวล 2995 ไม่สำเร็จ และมีผู้เล่นเลเวล 2800 เสียผล Dragon จากการทดลอง ห้ามลบผลมีค่าเพื่อทดสอบ วิธีนี้ยังไม่ยืนยันจากแหล่งทางการ",
    "moves": [
      {
        "key": "Z",
        "name": "Quick Tackle",
        "mastery": 1
      },
      {
        "key": "X",
        "name": "Ground Smash",
        "mastery": 20
      }
    ]
  },
  {
    "name": "Dark Step",
    "sea": "First Sea",
    "teacher": "Dark Step Teacher",
    "location": "Pirate Village",
    "beli": 150000,
    "fragments": 0,
    "requirements": "ไม่มี",
    "notes": "มี 4 สกิล; ใช้ปลดล็อก Death Step",
    "moves": [
      {
        "key": "Z",
        "name": "Flying Kick",
        "mastery": 1
      },
      {
        "key": "X",
        "name": "Breakdance",
        "mastery": 40
      },
      {
        "key": "C",
        "name": "Barrage",
        "mastery": 80
      },
      {
        "key": "V",
        "name": "Overheat",
        "mastery": 150
      }
    ]
  },
  {
    "name": "Electric",
    "sea": "First Sea",
    "teacher": "Mad Scientist",
    "location": "Skylands",
    "beli": 500000,
    "fragments": 0,
    "requirements": "ไม่มี",
    "notes": "ใช้ปลดล็อก Electric Claw",
    "moves": []
  },
  {
    "name": "Water Kung Fu",
    "sea": "First Sea",
    "teacher": "Water Kung Fu Teacher",
    "location": "Underwater City",
    "beli": 750000,
    "fragments": 0,
    "requirements": "ไม่มี",
    "notes": "ใช้ปลดล็อก Sharkman Karate",
    "moves": []
  },
  {
    "name": "Advanced Combat",
    "sea": "First Sea",
    "teacher": "Secrets Master",
    "location": "Middle Town",
    "beli": 0,
    "fragments": 0,
    "requirements": "ทำ Island Secrets 40/40 เควส รวม The Finale จากนั้นผ่านภารกิจ Awakened Boss ของ Secrets Master",
    "notes": "ฟรี 0 Beli และ 0 Fragments; ต้องใช้ Combat ธรรมดาเก็บ Awakened Boss Index ให้ครบ 10 ชนิดไม่ซ้ำกัน; บอสชนิดเดิมที่กำจัดซ้ำไม่นับเพิ่ม; ดูรายชื่อและวิธีเปิดบอสใน awakenedBosses.ts",
    "moves": [{"key":"Z","name":"Meteor Tackle","mastery":0},{"key":"X","name":"Ground Breaker","mastery":100},{"key":"C","name":"Charged Punch","mastery":200}]
  },
  {
    "name": "Dragon Breath",
    "sea": "Second Sea",
    "teacher": "Sabi",
    "location": "Kingdom of Rose",
    "beli": 0,
    "fragments": 1500,
    "requirements": "เข้าถึง Second Sea",
    "notes": "ใช้ปลดล็อก Dragon Talon",
    "moves": []
  },
  {
    "name": "Superhuman",
    "sea": "Second Sea",
    "teacher": "Martial Arts Master",
    "location": "Snow Mountain",
    "beli": 3000000,
    "fragments": 0,
    "requirements": "Dark Step, Electric, Water Kung Fu, Dragon Breath อย่างละ Mastery 300",
    "notes": "เป็นเงื่อนไขของ Godhuman",
    "moves": []
  },
  {
    "name": "Death Step",
    "sea": "Second Sea",
    "teacher": "Phoeyu, the Reformed",
    "location": "Ice Castle",
    "beli": 2500000,
    "fragments": 5000,
    "requirements": "Dark Step Mastery 400 และ Library Key",
    "notes": "มี 4 สกิล",
    "moves": []
  },
  {
    "name": "Sharkman Karate",
    "sea": "Second Sea",
    "teacher": "Sharkman Teacher",
    "location": "Forgotten Island",
    "beli": 2500000,
    "fragments": 5000,
    "requirements": "Water Kung Fu Mastery 400 และ Water Key จาก Tide Keeper",
    "notes": "ต้องส่ง Water Key ให้ครู",
    "moves": []
  },
  {
    "name": "Electric Claw",
    "sea": "Third Sea",
    "teacher": "Previous Hero",
    "location": "Floating Turtle",
    "beli": 3000000,
    "fragments": 5000,
    "requirements": "Electric Mastery 400 และเควสวิ่งจับเวลา",
    "notes": "ต้องผ่านเควสของ Previous Hero",
    "moves": [
      {
        "key": "Z",
        "name": "Electric Rampage",
        "mastery": 110
      },
      {
        "key": "X",
        "name": "Lightning Thrust",
        "mastery": 220
      },
      {
        "key": "C",
        "name": "Thunderclap and Flash",
        "mastery": 330
      }
    ]
  },
  {
    "name": "Dragon Talon",
    "sea": "Third Sea",
    "teacher": "Uzoth",
    "location": "Hydra Island",
    "beli": 3000000,
    "fragments": 5000,
    "requirements": "Dragon Breath Mastery 400 และ Fire Essence",
    "notes": "ต้องมอบ Fire Essence ให้ Uzoth",
    "moves": []
  },
  {
    "name": "Godhuman",
    "sea": "Third Sea",
    "teacher": "Ancient Monk",
    "location": "Floating Turtle",
    "beli": 5000000,
    "fragments": 5000,
    "requirements": "Superhuman, Death Step, Sharkman Karate, Electric Claw, Dragon Talon อย่างละ Mastery 400; Fish Tail ×20, Magma Ore ×20, Dragon Scale ×10, Mystic Droplet ×10",
    "notes": "ต้องเตรียมวัตถุดิบครบทั้ง 4 ชนิด",
    "moves": []
  },
  {
    "name": "Sanguine Art",
    "sea": "Third Sea",
    "teacher": "Shafi",
    "location": "Tiki Outpost",
    "beli": 5000000,
    "fragments": 5000,
    "requirements": "Leviathan Heart, Dark Fragment ×2, Demonic Wisp ×20, Vampire Fang ×20",
    "notes": "ต้องหา Leviathan Heart",
    "moves": []
  }
];
