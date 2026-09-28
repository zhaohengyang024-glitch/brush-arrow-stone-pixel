import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as ChevronLeft, i as ChevronRight, r as PenLine, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bq1fqN11.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:opacity-90",
			paper: "bg-paper text-ink hover:opacity-90",
			ghost: "bg-transparent text-fg hover:bg-surface",
			outline: "border border-border bg-transparent text-fg hover:bg-surface",
			ink: "bg-ink text-paper hover:opacity-90"
		},
		size: {
			default: "h-11 px-5 rounded-md text-sm",
			sm: "h-9 px-3 rounded-sm text-sm",
			lg: "h-12 px-6 rounded-lg text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Dust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": "true",
		children: Array.from({ length: 10 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dust-speck" }, i))
	});
}
var DEFAULT_CONFIG = {
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

剩下的日子，我们慢慢走。`
};
var CHAPTERS = [
	{
		id: "cover",
		label: "封面",
		numeral: "I"
	},
	{
		id: "letter",
		label: "信",
		numeral: "II"
	},
	{
		id: "moments",
		label: "我们",
		numeral: "III"
	},
	{
		id: "reasons",
		label: "因为",
		numeral: "IV"
	},
	{
		id: "wishes",
		label: "愿望",
		numeral: "V"
	},
	{
		id: "gifts",
		label: "礼物",
		numeral: "VI"
	},
	{
		id: "promise",
		label: "约定",
		numeral: "VII"
	}
];
var MOMENTS = [
	{
		id: "meet",
		kicker: "01",
		title: "一场没有预告的遇见",
		when: "起初",
		body: "后来我想，真正的遇见都很轻。没有配乐，没有刚好飘落的花瓣，只是某一天，世界的噪声忽然小了一点。",
		image: "/images/flowers.jpg"
	},
	{
		id: "walk",
		kicker: "02",
		title: "并排走的那段路",
		when: "后来",
		body: "谁走得快半步，谁又会回头等。这件事比任何誓言都更像喜欢。",
		image: "/images/morning.jpg"
	},
	{
		id: "rain",
		kicker: "03",
		title: "那场不算浪漫的雨",
		when: "某日",
		body: "伞不够大，裤脚湿了，谁都没有抱怨。雨停的时候，路边的灯还亮着。",
		image: "/images/rain.jpg"
	},
	{
		id: "cook",
		kicker: "04",
		title: "一锅说不上名字的晚饭",
		when: "平常",
		body: "盐放多了也没有关系。厨房里的声音，比外面的世界更像家。",
		image: "/images/kitchen.jpg"
	},
	{
		id: "trip",
		kicker: "05",
		title: "窗口外面一直在动",
		when: "一次出发",
		body: "车票还在口袋里皱着。重要的不是去了哪里，是你可以在移动的风景旁边，安心地发呆。",
		image: "/images/train.jpg"
	},
	{
		id: "night",
		kicker: "06",
		title: "窗台那支花",
		when: "夜里",
		body: "城市在玻璃外面自己亮着。房间里只剩下水和花茎，还有一种愿意把夜晚分给对方的安静。",
		image: "/images/window.jpg"
	},
	{
		id: "today",
		kicker: "07",
		title: "到今天",
		when: "此刻",
		body: "海会退下去，天会暗下来。我仍想把这一天郑重地交给你。",
		image: "/images/dusk.jpg"
	}
];
var REASONS = [
	{
		id: "r1",
		title: "你说话时会轻轻皱眉",
		body: "那是认真，不是脾气。我喜欢你把一件事当真的样子。"
	},
	{
		id: "r2",
		title: "你把日子过得很仔细",
		body: "一杯水、一封邮件、出门前的那三十秒。你让普通的事情也有了秩序。"
	},
	{
		id: "r3",
		title: "你记得我随口说过的话",
		body: "连我自己都忘了。你却像收藏邮票一样，把它们留着。"
	},
	{
		id: "r4",
		title: "你让沉默变得安全",
		body: "不是冷场。是可以一起什么都不说，也不用找话题来填。"
	},
	{
		id: "r5",
		title: "你会回头等",
		body: "哪怕只慢半步。被等待，是一种被选择。"
	},
	{
		id: "r6",
		title: "你对小东西更温柔",
		body: "流浪猫、旧杯子、用完的票根。心细的人，喜欢起来也可靠。"
	},
	{
		id: "r7",
		title: "你生气也仍然讲道理",
		body: "这比从不生气更难得。我不必害怕诚实。"
	},
	{
		id: "r8",
		title: "你愿意把脆弱给我看",
		body: "不是为了被修理，只是允许我在场。这是很深的信任。"
	},
	{
		id: "r9",
		title: "你点的那份总是更好吃",
		body: "我可以承认。也可以再要一口。"
	},
	{
		id: "r10",
		title: "你唱歌跑调也不在意",
		body: "房间因此变得不像舞台，更像我们住的地方。"
	},
	{
		id: "r11",
		title: "你让我想把明天过好",
		body: "不是鸡汤。是真的想早一点起来，把事情做完，好见面。"
	},
	{
		id: "r12",
		title: "你在，就够了",
		body: "其他的形容词都会过期。这一句，我想留得久一点。"
	}
];
var WISHES = [
	{
		id: "w1",
		x: 18,
		y: 16,
		title: "睡到自然醒",
		body: "至少有几个早晨，不被闹钟打断。"
	},
	{
		id: "w2",
		x: 38,
		y: 10,
		title: "少一点内耗",
		body: "想清楚就好。不必把每一件事都反复预演。"
	},
	{
		id: "w3",
		x: 58,
		y: 18,
		title: "被好运撞到",
		body: "小的那种也行。绿灯、空座位、刚好够用的钱。"
	},
	{
		id: "w4",
		x: 78,
		y: 12,
		title: "去想去的地方",
		body: "地图上那些被圈过的点，今年可以兑现其中一个。"
	},
	{
		id: "w5",
		x: 22,
		y: 36,
		title: "身体轻快",
		body: "走得动，睡得着，天气变化时少一点抱怨。"
	},
	{
		id: "w6",
		x: 46,
		y: 30,
		title: "有人懂你的沉默",
		body: "不必解释也可以被领会。我申请在列。"
	},
	{
		id: "w7",
		x: 70,
		y: 38,
		title: "一件新的爱好",
		body: "跟我无关也很好。只属于你的、可以发呆的那种。"
	},
	{
		id: "w8",
		x: 86,
		y: 32,
		title: "不被随便比较",
		body: "你不是谁的版本。你是你。"
	},
	{
		id: "w9",
		x: 14,
		y: 58,
		title: "口袋里总有甜的",
		body: "字面意思。糖、水果、或者一句刚好的话。"
	},
	{
		id: "w10",
		x: 40,
		y: 62,
		title: "冬天有暖手",
		body: "手套、热饮，以及可以握住的那只手。"
	},
	{
		id: "w11",
		x: 64,
		y: 56,
		title: "夏天有晚风",
		body: "下班之后也不必立刻回家的那种风。"
	},
	{
		id: "w12",
		x: 84,
		y: 66,
		title: "每天有一点喜欢的事",
		body: "很小就行。足够让这一天被记住。"
	}
];
var WISH_EDGES = [
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
	["w11", "w12"]
];
var PARCELS = [
	{
		id: "p1",
		kicker: "其一",
		title: "可以兑现的小事",
		body: "无限拥抱一次（有效期：很长）。\n一顿你不用洗碗的晚饭。\n一次说走就走的短途，目的地你定。\n听你讲一整晚，中途不解决问题，只陪着。\n坏天气专属热饮，外带毯子。"
	},
	{
		id: "p2",
		kicker: "其二",
		title: "想对你说的二十个字",
		body: "谢谢你愿意把普通的日子，分给我一半。"
	},
	{
		id: "p3",
		kicker: "其三",
		title: "一张空白的未来",
		body: "这里故意留白。\n你想去的地方、想学的事、想过的生活，都可以写在下一页——写在我们以后的日子里。"
	}
];
function fillTemplate(text, config) {
	return text.replaceAll("{{her}}", config.herName).replaceAll("{{him}}", config.hisName);
}
function nextChapterLabel(index) {
	const next = CHAPTERS[index + 1];
	if (!next) return null;
	return {
		letter: "读信",
		moments: "故事",
		reasons: "因为",
		wishes: "星图",
		gifts: "拆礼物",
		promise: "约定"
	}[next.id] ?? next.label;
}
var useGift = create()(persist((set) => ({
	opened: false,
	chapter: 0,
	flipped: {},
	revealed: {},
	unwrapped: {},
	reply: "",
	replySaved: false,
	secretPassed: false,
	config: DEFAULT_CONFIG,
	open: () => set({
		opened: true,
		chapter: 0
	}),
	setChapter: (n) => set({ chapter: n }),
	toggleFlip: (id) => set((s) => ({ flipped: {
		...s.flipped,
		[id]: !s.flipped[id]
	} })),
	revealWish: (id) => set((s) => ({ revealed: {
		...s.revealed,
		[id]: true
	} })),
	unwrap: (id) => set((s) => ({ unwrapped: {
		...s.unwrapped,
		[id]: true
	} })),
	setReply: (value) => set({
		reply: value,
		replySaved: false
	}),
	saveReply: () => set({ replySaved: true }),
	patchConfig: (patch) => set((s) => ({ config: {
		...s.config,
		...patch
	} })),
	reseal: () => set({
		opened: false,
		chapter: 0,
		secretPassed: false
	}),
	resetProgress: () => set({
		opened: false,
		chapter: 0,
		flipped: {},
		revealed: {},
		unwrapped: {},
		reply: "",
		replySaved: false,
		secretPassed: false
	})
}), { name: "yuni-gift-v1" }));
function CoverChapter({ onNext }) {
	const herName = useGift((s) => s.config.herName);
	const birthdayLabel = useGift((s) => s.config.birthdayLabel);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pb-28 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/dusk.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in text-xs tracking-[0.4em] text-muted",
						children: birthdayLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "rise-in mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl",
						tabIndex: -1,
						children: [
							herName,
							"，",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"生日快乐"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in mt-6 font-latin text-xl italic text-primary",
						style: { animationDelay: "120ms" },
						children: "for you"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in mx-auto mt-8 max-w-sm text-sm leading-relaxed text-muted",
						style: { animationDelay: "200ms" },
						children: "七封短笺，一些旧日，和我对你接下来一年的盼望。慢慢看就好。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in mt-10",
						style: { animationDelay: "320ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "paper",
							size: "lg",
							onClick: onNext,
							children: "翻开"
						})
					})
				]
			})
		]
	});
}
function LetterChapter() {
	const config = useGift((s) => s.config);
	const letter = fillTemplate(config.letter, config);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-5 pb-28 pt-16 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.3em] text-subtle",
				children: "II · 信"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-3xl font-medium text-fg",
				tabIndex: -1,
				children: "写给你"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "paper-sheet mt-8 flex-1 rounded-xl px-6 py-8 sm:px-10 sm:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg leading-8 whitespace-pre-line text-ink",
					children: letter
				})
			})
		]
	});
}
function MomentsChapter() {
	const [active, setActive] = (0, import_react.useState)(MOMENTS[0].id);
	const moment = MOMENTS.find((m) => m.id === active) ?? MOMENTS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 pb-28 pt-16 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.3em] text-subtle",
				children: "III · 我们"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-3xl font-medium text-fg",
				tabIndex: -1,
				children: "一些不必盛大的日子"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-xl bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: moment.image,
						alt: "",
						className: "aspect-photo w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "px-5 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] text-subtle",
								children: moment.when
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-xl text-fg",
								children: moment.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: moment.body
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-1",
					children: MOMENTS.map((item) => {
						const selected = item.id === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActive(item.id),
							className: cn("flex min-h-14 w-full items-center gap-4 rounded-lg px-4 py-3 text-left transition-colors duration-150", selected ? "bg-surface text-fg" : "text-muted hover:bg-bg-elevated hover:text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm tabular-nums text-primary",
								children: item.kicker
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-sm",
								children: item.title
							})]
						}) }, item.id);
					})
				})]
			})
		]
	});
}
function ReasonsChapter() {
	const flipped = useGift((s) => s.flipped);
	const toggleFlip = useGift((s) => s.toggleFlip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 pb-28 pt-16 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.3em] text-subtle",
				children: "IV · 因为"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-3xl font-medium text-fg",
				tabIndex: -1,
				children: "十二件很小的事"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-sm text-muted",
				children: "点开看看背面。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-3",
				children: REASONS.map((reason, i) => {
					const isFlipped = Boolean(flipped[reason.id]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "h-40 sm:h-44",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleFlip(reason.id),
							className: cn("flip-card h-full w-full", isFlipped && "is-flipped"),
							"aria-pressed": isFlipped,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flip-inner block h-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flip-face flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-4 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm text-primary",
										children: String(i + 1).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-base leading-snug text-fg",
										children: reason.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flip-back flip-face flex h-full flex-col justify-center rounded-lg bg-paper p-4 text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm leading-relaxed text-ink",
										children: reason.body
									})
								})]
							})
						})
					}, reason.id);
				})
			})
		]
	});
}
function WishesChapter() {
	const revealed = useGift((s) => s.revealed);
	const revealWish = useGift((s) => s.revealWish);
	const [active, setActive] = (0, import_react.useState)(null);
	const current = WISHES.find((w) => w.id === active);
	const count = WISHES.filter((w) => revealed[w.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-dvh overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/stars.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 pb-28 pt-16 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] text-subtle",
						children: "V · 愿望"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-3xl font-medium text-fg",
						tabIndex: -1,
						children: "她的星图"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"点亮一颗星。已点亮 ",
							count,
							" / ",
							WISHES.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-6 aspect-constellation w-full sm:aspect-photo",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 100 80",
							className: "absolute inset-0 size-full overflow-visible",
							"aria-hidden": "true",
							children: WISH_EDGES.map(([a, b]) => {
								const pa = WISHES.find((w) => w.id === a);
								const pb = WISHES.find((w) => w.id === b);
								if (!pa || !pb) return null;
								const lit = revealed[a] && revealed[b];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: pa.x,
									y1: pa.y,
									x2: pb.x,
									y2: pb.y,
									stroke: lit ? "var(--color-primary)" : "var(--color-subtle)",
									strokeOpacity: lit ? .85 : .28,
									strokeWidth: "0.28"
								}, `${a}-${b}`);
							})
						}), WISHES.map((wish, i) => {
							const lit = Boolean(revealed[wish.id]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									revealWish(wish.id);
									setActive(wish.id);
								},
								className: cn("absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full", !lit && "star-idle"),
								style: {
									left: `${wish.x}%`,
									top: `${wish.y}%`
								},
								"aria-label": wish.title,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block rounded-full", lit ? "size-3 bg-primary" : "size-2 bg-fg/80") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: i + 1
								})]
							}, wish.id);
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 min-h-24 rounded-lg border border-border bg-bg-elevated/80 px-5 py-4",
						children: [current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-fg",
							children: current.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: current.body
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "从任意一颗星开始。"
						}), count === WISHES.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-primary",
							children: "这一年，都给你。"
						}) : null]
					})
				]
			})
		]
	});
}
function GiftsChapter() {
	const unwrapped = useGift((s) => s.unwrapped);
	const unwrap = useGift((s) => s.unwrap);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 pb-28 pt-16 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.3em] text-subtle",
				children: "VI · 礼物"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-3xl font-medium text-fg",
				tabIndex: -1,
				children: "三份不必拆包装纸的礼物"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-sm text-muted",
				children: "点一下，打开就好。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4 md:grid-cols-3",
				children: PARCELS.map((parcel) => {
					const open = Boolean(unwrapped[parcel.id]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => unwrap(parcel.id),
						className: cn("flex min-h-72 w-full flex-col overflow-hidden rounded-xl border border-border text-left transition-[transform,opacity] duration-200", open ? "bg-paper" : "bg-surface"),
						"aria-expanded": open,
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex h-full flex-col p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-[0.2em] text-ink-muted",
									children: parcel.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-3 font-display text-xl text-ink",
									children: parcel.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-4 flex-1 text-sm leading-relaxed whitespace-pre-line text-ink",
									children: parcel.body
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex min-h-72 flex-1 flex-col justify-end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/gift.jpg",
									alt: "",
									className: "absolute inset-0 size-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative z-10 p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tracking-[0.2em] text-muted",
										children: parcel.kicker
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block font-display text-xl text-fg",
										children: parcel.title
									})]
								})
							]
						})
					}) }, parcel.id);
				})
			})
		]
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-lg border border-border bg-bg-elevated px-3 py-3 text-sm text-fg", "placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", className),
		...props
	});
}
function PromiseChapter() {
	const config = useGift((s) => s.config);
	const reply = useGift((s) => s.reply);
	const replySaved = useGift((s) => s.replySaved);
	const setReply = useGift((s) => s.setReply);
	const saveReply = useGift((s) => s.saveReply);
	const promise = fillTemplate(config.promise, config);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/window.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-5 pb-28 pt-16 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] text-subtle",
						children: "VII · 约定"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-3xl font-medium text-fg",
						tabIndex: -1,
						children: "剩下的路，慢慢走"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "paper-sheet mt-8 rounded-xl px-6 py-8 sm:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg leading-8 whitespace-pre-line text-ink",
							children: promise
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 font-display text-sm text-ink-muted",
							children: ["—— ", config.hisName]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-xl border border-border bg-bg-elevated/80 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "如果你愿意，可以把想说的话留在这里。只有这台设备看得到。"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								className: "mt-3 border-transparent bg-paper font-display text-ink placeholder:text-ink-muted",
								value: reply,
								onChange: (e) => setReply(e.target.value),
								placeholder: "写给未来的我们。"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "paper",
									onClick: saveReply,
									disabled: !reply.trim(),
									children: "留下"
								}), replySaved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-primary",
									children: "我收到了。"
								}) : null]
							})
						]
					})
				]
			})
		]
	});
}
function Book() {
	const chapter = useGift((s) => s.chapter);
	const setChapter = useGift((s) => s.setChapter);
	const regionRef = (0, import_react.useRef)(null);
	function go(next) {
		const clamped = Math.max(0, Math.min(CHAPTERS.length - 1, next));
		if (clamped === chapter) return;
		setChapter(clamped);
	}
	(0, import_react.useEffect)(() => {
		regionRef.current?.scrollTo({ top: 0 });
		(regionRef.current?.querySelector("h1"))?.focus({ preventScroll: true });
	}, [chapter]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.key === "ArrowRight") go(chapter + 1);
			if (e.key === "ArrowLeft") go(chapter - 1);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [chapter]);
	const nextLabel = nextChapterLabel(chapter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: regionRef,
			className: "min-h-dvh overflow-y-auto",
			style: { paddingBottom: "env(safe-area-inset-bottom)" },
			children: [
				chapter === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverChapter, { onNext: () => go(1) }) : null,
				chapter === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterChapter, {}) : null,
				chapter === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MomentsChapter, {}) : null,
				chapter === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReasonsChapter, {}) : null,
				chapter === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishesChapter, {}) : null,
				chapter === 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftsChapter, {}) : null,
				chapter === 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromiseChapter, {}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "pointer-events-none fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-1 px-2 pt-8 sm:px-4",
			style: {
				background: "linear-gradient(to top, var(--color-bg) 0%, color-mix(in oklab, var(--color-bg) 70%, transparent) 55%, transparent 100%)",
				paddingBottom: "max(1rem, env(safe-area-inset-bottom))"
			},
			"aria-label": "章节",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					className: "pointer-events-auto shrink-0",
					onClick: () => go(chapter - 1),
					disabled: chapter === 0,
					"aria-label": "上一章",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "pointer-events-auto flex items-center justify-center",
					children: CHAPTERS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(i),
						className: "flex size-8 items-center justify-center sm:size-11",
						"aria-label": item.label,
						"aria-current": i === chapter ? "page" : void 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-2.5 rounded-full transition-[width,background-color] duration-200", i === chapter ? "w-5 bg-primary sm:w-6" : "w-2.5 bg-subtle/50") })
					}) }, item.id))
				}),
				nextLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					className: "pointer-events-auto h-11 shrink-0 px-2 sm:px-3",
					onClick: () => go(chapter + 1),
					"aria-label": nextLabel,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-sm sm:inline",
						children: nextLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex size-11 shrink-0" })
			]
		})]
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-bg-elevated px-3 text-sm text-fg", "placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-muted", className),
		...props
	});
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-bg/80", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(92vw,34rem)] max-h-[86dvh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-border bg-bg-elevated p-6 shadow-lift", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-4 right-4 flex size-11 items-center justify-center rounded-md text-muted hover:bg-surface hover:text-fg",
			"aria-label": "关闭",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-5 pr-10", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-medium text-fg", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("mt-1 text-sm text-muted", className),
		...props
	});
}
function CustomizeDialog() {
	const config = useGift((s) => s.config);
	const patchConfig = useGift((s) => s.patchConfig);
	const reseal = useGift((s) => s.reseal);
	const resetProgress = useGift((s) => s.resetProgress);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(config);
	function onOpenChange(next) {
		if (next) setDraft(useGift.getState().config);
		setOpen(next);
	}
	function save() {
		patchConfig(draft);
		setOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon",
				className: "fixed bottom-4 left-4 z-40 text-subtle opacity-50 hover:opacity-100",
				"aria-label": "编辑这份礼物",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "编辑这份礼物" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "改成你们的名字、日期和真心话。保存后会留在这台设备上。" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "她的称呼",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.herName,
						onChange: (e) => setDraft({
							...draft,
							herName: e.target.value
						}),
						maxLength: 20
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "你的署名",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.hisName,
						onChange: (e) => setDraft({
							...draft,
							hisName: e.target.value
						}),
						maxLength: 20
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "生日文案",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.birthdayLabel,
						onChange: (e) => setDraft({
							...draft,
							birthdayLabel: e.target.value
						}),
						placeholder: "今天 / 十月一日"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "解锁日期（可选，留空即刻可看）",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: draft.birthdayISO,
						onChange: (e) => setDraft({
							...draft,
							birthdayISO: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "开场提问（可选）",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.secretQuestion,
						onChange: (e) => setDraft({
							...draft,
							secretQuestion: e.target.value
						}),
						placeholder: "只有她知道的问题"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "答案",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.secretAnswer,
						onChange: (e) => setDraft({
							...draft,
							secretAnswer: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
					label: "信",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: draft.letter,
						onChange: (e) => setDraft({
							...draft,
							letter: e.target.value
						}),
						className: "min-h-44 font-display leading-relaxed"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-subtle",
						children: [
							"可用 ",
							"{{her}}",
							" 和 ",
							"{{him}}",
							" 自动代入称呼。"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "约定",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: draft.promise,
						onChange: (e) => setDraft({
							...draft,
							promise: e.target.value
						}),
						className: "font-display leading-relaxed"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: save,
							className: "flex-1",
							children: "保存"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => {
								reseal();
								setOpen(false);
							},
							children: "重看拆封"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => {
								setDraft(DEFAULT_CONFIG);
								patchConfig(DEFAULT_CONFIG);
								resetProgress();
								setOpen(false);
							},
							children: "恢复默认"
						})
					]
				})
			]
		})] })]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function Envelope() {
	const herName = useGift((s) => s.config.herName);
	const open = useGift((s) => s.open);
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	function handleOpen() {
		if (leaving) return;
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			open();
			return;
		}
		setLeaving(true);
		window.setTimeout(() => open(), 520);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-dvh overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/envelope.jpg",
				alt: "",
				className: `absolute inset-0 size-full object-cover transition-[transform,filter,opacity] duration-500 ease-out ${leaving ? "scale-105 opacity-40 blur-sm" : "scale-100 opacity-100"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col items-center justify-end px-6 pb-24 pt-20 text-center sm:justify-center sm:pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in text-xs tracking-[0.35em] text-muted uppercase",
						style: { animationDelay: "80ms" },
						children: "For you"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in mt-6 font-display text-sm text-muted",
						style: { animationDelay: "160ms" },
						children: "致"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "rise-in mt-2 font-display text-4xl font-medium tracking-wide text-fg sm:text-5xl",
						style: { animationDelay: "240ms" },
						children: herName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in mt-8 h-px w-16 bg-primary/70",
						style: { animationDelay: "320ms" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in mt-8 max-w-xs text-sm leading-relaxed text-muted",
						style: { animationDelay: "400ms" },
						children: "一份只写给你的生日礼物。轻轻打开就好。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in mt-10",
						style: { animationDelay: "520ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "paper",
							size: "lg",
							onClick: handleOpen,
							className: "min-w-44",
							children: "打开信封"
						})
					})
				]
			})
		]
	});
}
function startOfDay(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	if (!y || !m || !d) return null;
	return new Date(y, m - 1, d);
}
function useLockState() {
	const iso = useGift((s) => s.config.birthdayISO);
	const question = useGift((s) => s.config.secretQuestion);
	const passed = useGift((s) => s.secretPassed);
	return {
		lockedUntil: (0, import_react.useMemo)(() => {
			if (!iso) return null;
			const date = startOfDay(iso);
			if (!date) return null;
			const now = /* @__PURE__ */ new Date();
			const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
			return date.getTime() > today.getTime() ? date : null;
		}, [iso]),
		needsSecret: Boolean(question.trim()) && !passed,
		question: question.trim()
	};
}
function CountdownGate({ until }) {
	const herName = useGift((s) => s.config.herName);
	const remaining = useRemaining(until);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/stars.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in text-xs tracking-[0.35em] text-muted",
						children: "FOR YOU"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "rise-in mt-6 font-display text-3xl font-medium sm:text-4xl",
						children: [herName, "，还没到那一天"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in mt-4 text-sm leading-relaxed text-muted",
						children: "信封还封着。等到生日当天，再轻轻打开。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise-in mt-10 grid grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeCell, {
								label: "天",
								value: remaining.days
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeCell, {
								label: "时",
								value: remaining.hours
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeCell, {
								label: "分",
								value: remaining.minutes
							})
						]
					})
				]
			})
		]
	});
}
function SecretGate() {
	const question = useGift((s) => s.config.secretQuestion);
	const answer = useGift((s) => s.config.secretAnswer);
	const pass = () => useGift.setState({ secretPassed: true });
	const [value, setValue] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	function submit(e) {
		e.preventDefault();
		if (!(value.trim().toLowerCase() === answer.trim().toLowerCase() && value.trim().length > 0)) {
			setError(true);
			return;
		}
		pass();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative isolate flex min-h-dvh flex-col items-center justify-center bg-bg px-6 text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.3em] text-muted",
					children: "一道小小的门"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-2xl font-medium",
					children: "先回答一句"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: question
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-8 flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value,
							onChange: (e) => {
								setValue(e.target.value);
								setError(false);
							},
							placeholder: "写在这里",
							autoComplete: "off",
							"aria-invalid": error
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary",
							children: "再想一想。答案很轻的。"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "paper",
							children: "进入"
						})
					]
				})
			]
		})
	});
}
function TimeCell({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-bg-elevated/80 px-2 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-3xl tabular-nums text-fg",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-xs text-subtle",
			children: label
		})]
	});
}
function useRemaining(until) {
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(Date.now()), 3e4);
		return () => window.clearInterval(id);
	}, []);
	const ms = Math.max(0, until.getTime() - now);
	return {
		days: Math.floor(ms / 864e5),
		hours: Math.floor(ms % 864e5 / 36e5),
		minutes: Math.floor(ms % 36e5 / 6e4)
	};
}
function GiftApp() {
	const opened = useGift((s) => s.opened);
	const { lockedUntil, needsSecret } = useLockState();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [lockedUntil ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownGate, { until: lockedUntil }) : needsSecret ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecretGate, {}) : opened ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Envelope, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomizeDialog, {})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftApp, {});
}
//#endregion
export { Home as component };
