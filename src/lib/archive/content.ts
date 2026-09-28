import type {
  Achievement,
  AppId,
  ArchiveConfig,
  AudioClip,
  Capsule,
  Coupon,
  DictEntry,
  Photo,
  Place,
  Plan,
  Secret,
  TimelineEvent,
} from "@/lib/archive/types";

export const DEFAULT_CONFIG: ArchiveConfig = {
  herName: "亲爱的",
  hisName: "我",
  startISO: "2023-08-14",
  birthdayISO: "",
  birthdayLabel: "今天",
  lockQuestion: "我们第一次见面，是哪一天？",
  lockAnswer: "2023.08.14",
  keyword: "yuni",
  letter: `{{her}}：

我没有办法把一整年的喜欢，装进一个盒子里。
所以我做了这个小小的地方——
像一封可以走进去的信，也像一份会自己长大的档案。

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
  hiddenLetter: `这里没有照片，没有数据，也没有倒计时。
只有一句话：

遇见你之后，我很少羡慕别人。`,
};

export const BRANCHES = ["相识", "热恋", "日常", "旅行", "未来"] as const;

export const TIMELINE: TimelineEvent[] = [
  {
    id: "meet",
    date: "2023-08-14",
    hash: "a1c0ffee",
    commit: "第一次见面",
    plus: ["认识了一个特别的人", "世界的噪声忽然小了一点"],
    body: "后来我想，真正的遇见都很轻。没有配乐，没有刚好飘落的花瓣，只是某一天，你从门那边走过来。",
    branch: "相识",
    image: "/images/flowers.jpg",
    mood: "轻",
  },
  {
    id: "chat",
    date: "2023-08-21",
    hash: "b2e11eaf",
    commit: "第一次认真聊天",
    plus: ["话题从天气走到很晚", "我开始期待下一次"],
    body: "那天我说了很多不重要的话。重要的是，你听完了。",
    branch: "相识",
    mood: "暖",
  },
  {
    id: "date",
    date: "2023-09-02",
    hash: "c3dinners",
    commit: "第一次约会",
    plus: ["一起吃了火锅", "她说了太多次“好撑”"],
    body: "盐和辣椒都有点过。谁都没有抱怨。那一晚的路灯，现在想起来还是亮的。",
    branch: "热恋",
    image: "/images/kitchen.jpg",
    mood: "饱",
  },
  {
    id: "walk",
    date: "2023-10-09",
    hash: "d4pace01",
    commit: "并排走的那段路",
    plus: ["谁快半步", "谁又会回头等"],
    body: "这件事比任何誓言都更像喜欢。",
    branch: "日常",
    image: "/images/morning.jpg",
    mood: "稳",
  },
  {
    id: "rain",
    date: "2024-03-17",
    hash: "e5rain77",
    commit: "那场不算浪漫的雨",
    plus: ["伞不够大", "裤脚湿了"],
    body: "雨停的时候，路边的灯还亮着。我们谁都没有把这件事做成电影。它自己就是。",
    branch: "日常",
    image: "/images/rain.jpg",
    mood: "湿",
  },
  {
    id: "trip",
    date: "2024-06-18",
    hash: "f6track9",
    commit: "窗口外面一直在动",
    plus: ["车票还在口袋里皱着", "她在移动的风景旁边安心发呆"],
    body: "重要的不是去了哪里，是你可以不用表演。",
    branch: "旅行",
    image: "/images/train.jpg",
    mood: "远",
  },
  {
    id: "night",
    date: "2024-11-03",
    hash: "a7window",
    commit: "窗台那支花",
    plus: ["城市在玻璃外面自己亮着", "房间里只剩下水和花茎"],
    body: "有一种愿意把夜晚分给对方的安静。",
    branch: "日常",
    image: "/images/window.jpg",
    mood: "静",
  },
  {
    id: "today",
    date: "2025-08-14",
    hash: "b8still1",
    commit: "到今天",
    plus: ["main 还在开发", "没有准备合并到别人的生活里"],
    body: "海会退下去，天会暗下来。我仍想把这一天郑重地交给你。",
    branch: "未来",
    image: "/images/dusk.jpg",
    mood: "郑重",
  },
];

export const PHOTOS: Photo[] = [
  {
    id: "p-flowers",
    date: "2023-08-14",
    title: "一场没有预告的遇见",
    place: "起初",
    mood: "轻",
    caption: "后来我想，真正的遇见都很轻。",
    unsaid: "那天我其实有点紧张。我没有表现得很明显，但我已经记住你了。",
    image: "/images/flowers.jpg",
    tags: ["开始", "花"],
  },
  {
    id: "p-morning",
    date: "2023-10-09",
    title: "并排走的那段路",
    place: "某条小路",
    mood: "稳",
    caption: "谁走得快半步，谁又会回头等。",
    unsaid: "当时很想牵你的手。后来牵了。还是想。",
    image: "/images/morning.jpg",
    tags: ["路", "日常"],
  },
  {
    id: "p-rain",
    date: "2024-03-17",
    title: "那场不算浪漫的雨",
    place: "回家的路上",
    mood: "湿",
    caption: "伞不够大，裤脚湿了，谁都没有抱怨。",
    unsaid: "我喜欢你把一件狼狈的事过成普通的样子。",
    image: "/images/rain.jpg",
    tags: ["雨"],
  },
  {
    id: "p-kitchen",
    date: "2024-05-17",
    title: "一锅说不上名字的晚饭",
    place: "厨房",
    mood: "家",
    caption: "盐放多了也没有关系。",
    unsaid: "厨房里的声音，比外面的世界更像家。",
    image: "/images/kitchen.jpg",
    tags: ["吃", "家"],
  },
  {
    id: "p-train",
    date: "2024-06-18",
    title: "窗口外面一直在动",
    place: "去某座城的车上",
    mood: "远",
    caption: "车票还在口袋里皱着。",
    unsaid: "我看着你发呆，没有把这件事说出来。现在说。",
    image: "/images/train.jpg",
    tags: ["旅行"],
  },
  {
    id: "p-window",
    date: "2024-11-03",
    title: "窗台那支花",
    place: "房间",
    mood: "静",
    caption: "城市在玻璃外面自己亮着。",
    unsaid: "你睡着之后，我有时候会偷偷看很久。",
    image: "/images/window.jpg",
    tags: ["夜"],
  },
  {
    id: "p-dusk",
    date: "2025-08-14",
    title: "到今天",
    place: "还是这里",
    mood: "郑重",
    caption: "我仍想把这一天郑重地交给你。",
    unsaid: "如果可以重新运行一次程序，我还是会走向你。",
    image: "/images/dusk.jpg",
    tags: ["现在"],
  },
  {
    id: "p-gift",
    date: "待拆",
    title: "还没打开的那一份",
    place: "以后",
    mood: "盼",
    caption: "有些礼物不必包装纸。",
    unsaid: "这一份，想慢慢给你。",
    image: "/images/gift.jpg",
    tags: ["礼物"],
  },
];

export const SECRETS: Secret[] = [
  { id: "s1", title: "第一次见你", body: "第一次见你的时候，我其实有点紧张。不是舞台那种，是生怕自己显得太普通。" },
  { id: "s2", title: "第二次晚安", body: "你第二次说晚安的时候，我已经开始期待第三次了。" },
  { id: "s3", title: "睡着以后", body: "你睡着之后，我有时候会偷偷看很久。不是监视。是确认这件事是真的。" },
  { id: "s4", title: "一句很久的话", body: "有一次你说了一句话，我记了很久，但一直没告诉你。就是这一句：谢谢你还在。" },
  { id: "s5", title: "皱眉", body: "你说话时会轻轻皱眉。那是认真，不是脾气。我喜欢你把一件事当真的样子。" },
  { id: "s6", title: "随口", body: "你记得我随口说过的话。连我自己都忘了。你却像收藏邮票一样，把它们留着。" },
  { id: "s7", title: "沉默", body: "你让沉默变得安全。不是冷场。是可以一起什么都不说，也不用找话题来填。" },
  { id: "s8", title: "回头", body: "你会回头等。哪怕只慢半步。被等待，是一种被选择。" },
  { id: "s9", title: "小东西", body: "你对小东西更温柔。流浪猫、旧杯子、用完的票根。心细的人，喜欢起来也可靠。" },
  { id: "s10", title: "讲道理", body: "你生气也仍然讲道理。这比从不生气更难得。我不必害怕诚实。" },
  { id: "s11", title: "跑调", body: "你唱歌跑调也不在意。房间因此变得不像舞台，更像我们住的地方。" },
  { id: "s12", title: "明天", body: "你让我想把明天过好。不是鸡汤。是真的想早一点起来，把事情做完，好见面。" },
];

export const PLACES: Place[] = [
  {
    id: "shanghai",
    city: "上海",
    lit: true,
    date: "2024-06-18",
    event: "第一次把路走得很长的约会",
    weather: "下雨",
    steps: "13842",
    food: "那家很辣的店",
    impression: "她穿了一件浅色的衣服。伞不够大。谁都没有把这件事做成电影。",
    image: "/images/rain.jpg",
  },
  {
    id: "kitchen-city",
    city: "那间厨房",
    lit: true,
    date: "2024-05-17",
    event: "一锅说不上名字的晚饭",
    weather: "室内",
    food: "盐放多了的那一锅",
    impression: "厨房里的声音，比外面的世界更像家。",
    image: "/images/kitchen.jpg",
  },
  {
    id: "train-city",
    city: "在路上",
    lit: true,
    date: "2024-06-18",
    event: "窗口外面一直在动",
    weather: "晴",
    impression: "车票还在口袋里皱着。",
    image: "/images/train.jpg",
  },
  { id: "sea", city: "?????", lit: false },
  { id: "next-city", city: "?????", lit: false },
  { id: "mountain", city: "?????", lit: false },
];

export const COUPONS: Coupon[] = [
  { id: "c1", title: "免生气一次券", body: "有效期：很长。使用时请当面出示，并允许我先把话说完。" },
  { id: "c2", title: "奶茶一杯券", body: "甜度你定。珍珠可加。不许说“随便”。" },
  { id: "c3", title: "按摩三十分钟券", body: "肩膀优先。中途可以改口要小腿。" },
  { id: "c4", title: "一个愿望券", body: "一个不太离谱、我能办到的愿望。办不到的，我会认真改成办得到的。" },
  { id: "c5", title: "陪逛街券", body: "不催。不叹气。可以提袋子。可以在店门口当衣架。" },
  { id: "c6", title: "立刻道歉券", body: "先道歉，再解释。解释也可以没有。" },
  { id: "c7", title: "看电影券", body: "座位你挑。如果是爱情片，我保证不提前剧透自己的感想。" },
  { id: "c8", title: "吃夜宵券", body: "坏天气专属。外带毯子。洗完碗的人是我。" },
];

export const PLANS: Plan[] = [
  { id: "pl1", title: "一起去看海", body: "不一定要很远。要能听见。" },
  { id: "pl2", title: "一起跨年", body: "倒计时的时候站在旁边就好。" },
  { id: "pl3", title: "去一座还没去过的城", body: "地图上那些被圈过的点，先兑现其中一个。" },
  { id: "pl4", title: "拍一组不算正式的合照", body: "不必很像写真。像我们即可。" },
  { id: "pl5", title: "一起看一次日出", body: "可以很困。可以不说话。" },
  { id: "pl6", title: "再一起过一个生日", body: "这一份档案，希望明年还开着。" },
];

export const CAPSULES: Capsule[] = [
  {
    id: "cap-year",
    title: "写给明年的她",
    unlockAfterDays: 365,
    preview: "只有到了恋爱的下一个整年，才能打开。",
    body: "不知道明年的我们是什么样。也不知道这一年会发生什么。但我希望你打开这里的时候，我们还是在一起。",
  },
  {
    id: "cap-1000",
    title: "第一千天",
    unlockAfterDays: 1000,
    preview: "该内容将在恋爱第 1000 天解锁。",
    body: "一千天听起来像一个很大的数字。过起来，其实是很多个普通的早晨。谢谢你把它们分给我。",
  },
  {
    id: "cap-2027",
    title: "2027 年的一封",
    unlockISO: "2027-09-28",
    preview: "写于今天。只有到了那一天才能打开。",
    body: "如果你还愿意，我希望依然每天和你说晚安。",
  },
];

export const DICTIONARY: DictEntry[] = [
  {
    id: "d1",
    word: "随便",
    pos: "副词，不可信",
    def: "表面上没有偏好，实际上有一份已经想好的菜单。",
    usage: "“随便。”（十分钟后：就这家。）",
    related: "不饿 / 没生气 / 她",
  },
  {
    id: "d2",
    word: "没生气",
    pos: "形容词，高风险",
    def: "正在生气，但给了你一次把事情做对的机会。",
    usage: "“我没生气。”（请立刻道歉。）",
    related: "立刻道歉券",
  },
  {
    id: "d3",
    word: "我不饿",
    pos: "状态，短暂",
    def: "此刻不饿。十分钟后会认真考虑你盘子里的那一口。",
    usage: "“我不饿。”（请把好吃的分过去。）",
    related: "夜宵券",
  },
  {
    id: "d4",
    word: "笨蛋",
    pos: "名词，亲称",
    def: "某位经常忘记带东西、但被允许被这样叫的人。",
    usage: "“你怎么又忘了。”",
    related: "可爱 / 固执 / 她",
  },
  {
    id: "d5",
    word: "在",
    pos: "动词，核心",
    def: "不需要解释的陪伴。比“爱”更不容易过期。",
    usage: "“我在。”",
    related: "约定",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: "a-meet", title: "第一次见面", body: "系统初始化完成。", requireEvent: "meet" },
  { id: "a-date", title: "第一次约会", body: "main 分支增加一次提交。", requireEvent: "date" },
  { id: "a-trip", title: "第一次旅行", body: "地图上点亮了一座城。", requireEvent: "trip" },
  { id: "a-100", title: "100 天", body: "还早。但已经不是偶然。", requireDays: 100 },
  { id: "a-365", title: "365 天", body: "四季都见过了。", requireDays: 365 },
  { id: "a-520", title: "520 天", body: "这个数字有点俏皮。我们允许。", requireDays: 520 },
  { id: "a-1000", title: "1000 天", body: "档案开始变厚。", requireDays: 1000 },
  { id: "a-hidden", title: "????", body: "条件未知。", hidden: true },
];

export const AUDIO: AudioClip[] = [
  { id: "au1", title: "第一次叫我名字", note: "待收录。把那段音频放进档案后，这里会出现播放器。" },
  { id: "au2", title: "她突然笑了", note: "待收录。最好是没有准备的那一声。" },
  { id: "au3", title: "某次旅行", note: "车窗、风、谁在旁边说话。" },
  { id: "au4", title: "那天晚上", note: "不一定要听得清内容。" },
  { id: "au5", title: "我想对你说", note: "一段我亲自说的话。还没有录。会补上。" },
];

export const FORTUNES = [
  "今天也很想你。",
  "你知道吗，我还是觉得遇见你很幸运。",
  "绿灯、空座位、刚好够用的运气，都分你一点。",
  "少一点内耗。想清楚就好。",
  "口袋里总有甜的。字面意思也可以。",
  "如果今天有点累，就把事情放下。我在。",
  "被好运撞到。小的那种也行。",
  "你不是谁的版本。你是你。",
  "走得动，睡得着，就很好。",
  "每天有一点喜欢的事。很小就行。",
];

export const SYSTEM_QUOTES = [
  "检测到你今天也来看我了。",
  "Someone is currently being loved very much.",
  "找不到不爱你的理由。",
  "Relationship still ONLINE.",
  "main branch is still under development.",
];

export const WEATHER_LINES = [
  { sky: "晴", line: "今日天气：适合想你。", hug: 100, miss: 86, sulk: 4 },
  { sky: "多云", line: "云不多。刚好能把日子过慢一点。", hug: 88, miss: 70, sulk: 6 },
  { sky: "小雨", line: "当前天气：小雨。推荐活动：抱一下。", hug: 100, miss: 92, sulk: 3 },
  { sky: "夜", line: "城市自己亮着。房间里可以什么都不做。", hug: 96, miss: 80, sulk: 2 },
];

export const APP_CATALOG: {
  id: AppId;
  label: string;
  kicker: string;
  dock?: boolean;
}[] = [
  { id: "letter", label: "情书", kicker: "Mail", dock: true },
  { id: "timeline", label: "提交记录", kicker: "Git" },
  { id: "album", label: "相册", kicker: "Photos" },
  { id: "stats", label: "数据", kicker: "Stats" },
  { id: "secrets", label: "秘密", kicker: "Hidden" },
  { id: "replay", label: "重来一次", kicker: "Replay" },
  { id: "random", label: "随机回忆", kicker: "Shuffle", dock: true },
  { id: "map", label: "地图", kicker: "Map" },
  { id: "coupons", label: "兑换券", kicker: "Tickets" },
  { id: "plans", label: "未来", kicker: "Soon" },
  { id: "capsules", label: "胶囊", kicker: "Time" },
  { id: "dictionary", label: "词典", kicker: "Lexicon" },
  { id: "weather", label: "天气", kicker: "Climate" },
  { id: "achievements", label: "成就", kicker: "Log" },
  { id: "audio", label: "声音", kicker: "Tape" },
  { id: "birthday", label: "生日", kicker: "Day", dock: true },
  { id: "fortune", label: "今日", kicker: "Note" },
  { id: "settings", label: "设置", kicker: "Sys", dock: true },
];

export function fillTemplate(text: string, config: ArchiveConfig) {
  return text
    .replaceAll("{{her}}", config.herName)
    .replaceAll("{{him}}", config.hisName);
}

export function normalizeKey(value: string) {
  return value.trim().toLowerCase().replace(/[.\-/年日月\s]/g, "");
}
