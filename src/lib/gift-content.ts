export type GiftConfig = {
  herName: string;
  hisName: string;
  birthdayLabel: string;
  birthdayISO: string;
  secretQuestion: string;
  secretAnswer: string;
  letter: string;
  promise: string;
};

export type Moment = {
  id: string;
  kicker: string;
  title: string;
  when: string;
  body: string;
  image: string;
};

export type Reason = {
  id: string;
  title: string;
  body: string;
};

export type Wish = {
  id: string;
  x: number;
  y: number;
  title: string;
  body: string;
};

export type Parcel = {
  id: string;
  kicker: string;
  title: string;
  body: string;
};

export const DEFAULT_CONFIG: GiftConfig = {
  herName: "亲爱的",
  hisName: "我",
  birthdayLabel: "今天",
  birthdayISO: "",
  secretQuestion: "",
  secretAnswer: "",
  letter: `{{her}}：

我没有办法把一整年的喜欢，装进一个盒子里。
所以我做了这个小小的地方——
像一封可以走进去的信。

有些话当面说会不好意思，写下来，又觉得刚好。
谢谢你还在。谢谢你让普通的日子变得值得被记住。

我不想写得太满。满了就假。
我只想让你知道：在我这里，你从来都不是一段插曲。

生日快乐。
愿你被世界温柔以待，
也愿我能一直站在那份温柔里。

—— {{him}}`,
  promise: `我不敢许下漂亮的空话。

我只答应你一件很小的事：
当你回头的时候，我都在。

剩下的日子，我们慢慢走。`,
};

export const CHAPTERS = [
  { id: "cover", label: "封面", numeral: "I" },
  { id: "letter", label: "信", numeral: "II" },
  { id: "moments", label: "我们", numeral: "III" },
  { id: "reasons", label: "因为", numeral: "IV" },
  { id: "wishes", label: "愿望", numeral: "V" },
  { id: "gifts", label: "礼物", numeral: "VI" },
  { id: "promise", label: "约定", numeral: "VII" },
] as const;

export const MOMENTS: Moment[] = [
  {
    id: "meet",
    kicker: "01",
    title: "一场没有预告的遇见",
    when: "起初",
    body: "后来我想，真正的遇见都很轻。没有配乐，没有刚好飘落的花瓣，只是某一天，世界的噪声忽然小了一点。",
    image: "/images/flowers.jpg",
  },
  {
    id: "walk",
    kicker: "02",
    title: "并排走的那段路",
    when: "后来",
    body: "谁走得快半步，谁又会回头等。这件事比任何誓言都更像喜欢。",
    image: "/images/morning.jpg",
  },
  {
    id: "rain",
    kicker: "03",
    title: "那场不算浪漫的雨",
    when: "某日",
    body: "伞不够大，裤脚湿了，谁都没有抱怨。雨停的时候，路边的灯还亮着。",
    image: "/images/rain.jpg",
  },
  {
    id: "cook",
    kicker: "04",
    title: "一锅说不上名字的晚饭",
    when: "平常",
    body: "盐放多了也没有关系。厨房里的声音，比外面的世界更像家。",
    image: "/images/kitchen.jpg",
  },
  {
    id: "trip",
    kicker: "05",
    title: "窗口外面一直在动",
    when: "一次出发",
    body: "车票还在口袋里皱着。重要的不是去了哪里，是你可以在移动的风景旁边，安心地发呆。",
    image: "/images/train.jpg",
  },
  {
    id: "night",
    kicker: "06",
    title: "窗台那支花",
    when: "夜里",
    body: "城市在玻璃外面自己亮着。房间里只剩下水和花茎，还有一种愿意把夜晚分给对方的安静。",
    image: "/images/window.jpg",
  },
  {
    id: "today",
    kicker: "07",
    title: "到今天",
    when: "此刻",
    body: "海会退下去，天会暗下来。我仍想把这一天郑重地交给你。",
    image: "/images/dusk.jpg",
  },
];

export const REASONS: Reason[] = [
  { id: "r1", title: "你说话时会轻轻皱眉", body: "那是认真，不是脾气。我喜欢你把一件事当真的样子。" },
  { id: "r2", title: "你把日子过得很仔细", body: "一杯水、一封邮件、出门前的那三十秒。你让普通的事情也有了秩序。" },
  { id: "r3", title: "你记得我随口说过的话", body: "连我自己都忘了。你却像收藏邮票一样，把它们留着。" },
  { id: "r4", title: "你让沉默变得安全", body: "不是冷场。是可以一起什么都不说，也不用找话题来填。" },
  { id: "r5", title: "你会回头等", body: "哪怕只慢半步。被等待，是一种被选择。" },
  { id: "r6", title: "你对小东西更温柔", body: "流浪猫、旧杯子、用完的票根。心细的人，喜欢起来也可靠。" },
  { id: "r7", title: "你生气也仍然讲道理", body: "这比从不生气更难得。我不必害怕诚实。" },
  { id: "r8", title: "你愿意把脆弱给我看", body: "不是为了被修理，只是允许我在场。这是很深的信任。" },
  { id: "r9", title: "你点的那份总是更好吃", body: "我可以承认。也可以再要一口。" },
  { id: "r10", title: "你唱歌跑调也不在意", body: "房间因此变得不像舞台，更像我们住的地方。" },
  { id: "r11", title: "你让我想把明天过好", body: "不是鸡汤。是真的想早一点起来，把事情做完，好见面。" },
  { id: "r12", title: "你在，就够了", body: "其他的形容词都会过期。这一句，我想留得久一点。" },
];

export const WISHES: Wish[] = [
  { id: "w1", x: 18, y: 16, title: "睡到自然醒", body: "至少有几个早晨，不被闹钟打断。" },
  { id: "w2", x: 38, y: 10, title: "少一点内耗", body: "想清楚就好。不必把每一件事都反复预演。" },
  { id: "w3", x: 58, y: 18, title: "被好运撞到", body: "小的那种也行。绿灯、空座位、刚好够用的钱。" },
  { id: "w4", x: 78, y: 12, title: "去想去的地方", body: "地图上那些被圈过的点，今年可以兑现其中一个。" },
  { id: "w5", x: 22, y: 36, title: "身体轻快", body: "走得动，睡得着，天气变化时少一点抱怨。" },
  { id: "w6", x: 46, y: 30, title: "有人懂你的沉默", body: "不必解释也可以被领会。我申请在列。" },
  { id: "w7", x: 70, y: 38, title: "一件新的爱好", body: "跟我无关也很好。只属于你的、可以发呆的那种。" },
  { id: "w8", x: 86, y: 32, title: "不被随便比较", body: "你不是谁的版本。你是你。" },
  { id: "w9", x: 14, y: 58, title: "口袋里总有甜的", body: "字面意思。糖、水果、或者一句刚好的话。" },
  { id: "w10", x: 40, y: 62, title: "冬天有暖手", body: "手套、热饮，以及可以握住的那只手。" },
  { id: "w11", x: 64, y: 56, title: "夏天有晚风", body: "下班之后也不必立刻回家的那种风。" },
  { id: "w12", x: 84, y: 66, title: "每天有一点喜欢的事", body: "很小就行。足够让这一天被记住。" },
];

export const WISH_EDGES: [string, string][] = [
  ["w1", "w2"],
  ["w2", "w3"],
  ["w3", "w4"],
  ["w1", "w5"],
  ["w2", "w6"],
  ["w3", "w7"],
  ["w5", "w6"],
  ["w6", "w7"],
  ["w7", "w8"],
  ["w5", "w9"],
  ["w6", "w10"],
  ["w7", "w11"],
  ["w9", "w10"],
  ["w10", "w11"],
  ["w11", "w12"],
];

export const PARCELS: Parcel[] = [
  {
    id: "p1",
    kicker: "其一",
    title: "可以兑现的小事",
    body: "无限拥抱一次（有效期：很长）。\n一顿你不用洗碗的晚饭。\n一次说走就走的短途，目的地你定。\n听你讲一整晚，中途不解决问题，只陪着。\n坏天气专属热饮，外带毯子。",
  },
  {
    id: "p2",
    kicker: "其二",
    title: "想对你说的二十个字",
    body: "谢谢你愿意把普通的日子，分给我一半。",
  },
  {
    id: "p3",
    kicker: "其三",
    title: "一张空白的未来",
    body: "这里故意留白。\n你想去的地方、想学的事、想过的生活，都可以写在下一页——写在我们以后的日子里。",
  },
];

export function fillTemplate(text: string, config: GiftConfig) {
  return text
    .replaceAll("{{her}}", config.herName)
    .replaceAll("{{him}}", config.hisName);
}

export function nextChapterLabel(index: number) {
  const next = CHAPTERS[index + 1];
  if (!next) return null;
  const map: Record<string, string> = {
    letter: "读信",
    moments: "故事",
    reasons: "因为",
    wishes: "星图",
    gifts: "拆礼物",
    promise: "约定",
  };
  return map[next.id] ?? next.label;
}
