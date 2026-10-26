export type Skill={key:string;name:string;mastery:number;descriptionTh:string};
export const magnetSkills:Skill[]=[
{key:'Z',name:'Scrap Arsenal',mastery:1,descriptionTh:'ยิงเศษโลหะเป็นกระสุนแม่เหล็ก หรือชาร์จยิงลำแสง'},
{key:'F',name:'Polarity Drive',mastery:75,descriptionTh:'พุ่งจับเป้าหมายหรือใช้เจ็ตแพ็กบิน'},
{key:'X',name:'Magnetic Overcharge',mastery:100,descriptionTh:'สร้างกรงแม่เหล็กกักเป้าหมาย'},
{key:'C',name:'Polarizing Drop',mastery:225,descriptionTh:'ยกและทุ่มเป้าหมาย หรือดึงเศษโลหะเข้าหาตัว'},
{key:'V',name:'Maximum Overdrive',mastery:300,descriptionTh:'รวบรวมเศษโลหะเพื่อแปลงร่างเป็นหุ่นยนต์'}
];
export type Enemy={id:number;en:string;th:string;level:number;island:string;sea:string;kind:'Enemy'|'Boss';source:string};
export const enemies:Enemy[]=[
{id:1,en:'Bandit',th:'โจร',level:5,island:'Pirate Starter',sea:'First Sea',kind:'Enemy',source:'https://bloxfruitswiki.org/wiki/enemies/'},
{id:2,en:'Monkey',th:'ลิง',level:14,island:'Jungle',sea:'First Sea',kind:'Enemy',source:'https://bloxfruitswiki.org/wiki/enemies/'},
{id:3,en:'Gorilla',th:'กอริลลา',level:20,island:'Jungle',sea:'First Sea',kind:'Enemy',source:'https://bloxfruitswiki.org/wiki/gorilla/'},
{id:4,en:'Pirate',th:'โจรสลัด',level:35,island:'Pirate Village',sea:'First Sea',kind:'Enemy',source:'https://bloxfruitswiki.org/wiki/enemies/'},
{id:5,en:'Brute',th:'อันธพาล',level:45,island:'Pirate Village',sea:'First Sea',kind:'Enemy',source:'https://bloxfruitswiki.org/wiki/enemies/'},
{id:6,en:'Desert Bandit',th:'โจรทะเลทราย',level:60,island:'Desert',sea:'First Sea',kind:'Enemy',source:'https://bloxfruitswiki.org/wiki/enemies/'},
{id:7,en:'Desert Officer',th:'นายทหารทะเลทราย',level:75,island:'Desert',sea:'First Sea',kind:'Enemy',source:'https://bloxfruitswiki.org/wiki/enemies/'},
{id:8,en:'Snow Bandit',th:'โจรหิมะ',level:90,island:'Frozen Village',sea:'First Sea',kind:'Enemy',source:'https://bloxfruitswiki.org/wiki/enemies/'},
{id:9,en:'Snowman',th:'มนุษย์หิมะ',level:100,island:'Frozen Village',sea:'First Sea',kind:'Enemy',source:'https://bloxfruitswiki.org/wiki/enemies/'},
{id:10,en:'The Gorilla King',th:'ราชากอริลลา',level:25,island:'Jungle',sea:'First Sea',kind:'Boss',source:'https://blox-fruitswiki.com/wiki/the-gorilla-king/'},
{id:11,en:'Chef',th:'เชฟ',level:55,island:'Pirate Village',sea:'First Sea',kind:'Boss',source:'https://bloxfruitswiki.org/wiki/tips-for-bosses/'},
{id:12,en:'Yeti',th:'เยติ (บอส)',level:105,island:'Frozen Village',sea:'First Sea',kind:'Boss',source:'https://bloxfruitswiki.org/wiki/tips-for-bosses/'}
];
export const magnetSource='https://bloxfruitswiki.org/wiki/magnet/';
