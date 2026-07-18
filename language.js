const translations = {
  zh: {
    brandName: "读读说明书",
    footerCopyright: "© 2026 读读说明书",
    homeLabel: "返回首页",
    navLabel: "主导航",
    navExperiences: "旅程",
    navThinking: "思考",
    navPhotography: "摄影",
    heroQuoteLead: "保持好奇，",
    heroQuoteEnd: "持续创造。",
    homeKicker: "职业作品集",
    homeTitle: "把职业经历，做成可以被浏览的产品。",
    homeIntro: "每一段经历都浓缩成一个清晰案例：背景、挑战、方案、结果，以及我自己的复盘。",
    homeStatement: "传统简历负责概括。这个网页负责展开。我希望让别人不用从大段文字里提炼信息，而是顺着我设计好的路径，看见每个项目的核心价值。",
    experienceKicker: "人生轨迹",
    experienceCard: "记录职业选择，也记录生活中重要的转折与抵达。",
    thinkingKicker: "持续沉淀",
    thinkingCard: "关于工作、职业，也关于生活。",
    photographyCard: "分享我所看见并想要留下的瞬间。",
    lifeKicker: "生活记录",
    photographyCanvasLabel: "照片画布",
    closePhoto: "关闭照片",
    frameworkKicker: "案例展开方式",
    frameworkTitle: "每段经历，都沿着五个问题展开。",
    backgroundTitle: "背景",
    backgroundText: "为什么要做？当时处在什么阶段？",
    challengeTitle: "挑战",
    challengeText: "难点是什么？限制条件在哪里？",
    solutionTitle: "方案",
    solutionText: "如何拆解？做了什么关键判断？",
    resultTitle: "结果",
    resultText: "指标、效率、体验或业务有什么变化？",
    reviewTitle: "复盘",
    reviewText: "这件事沉淀了什么方法论？",
    timelineLabel: "旅程时间轴",
    timelineViewDetail: "查看完整章节 →",
    journey2020Title: "第一次选择",
    journey2020Text: "进入一个新的环境，开始学习如何把想法变成真正发生的事情。",
    journey2022Title: "新的阶段",
    journey2022Text: "责任变得更复杂，也开始形成自己的判断方式和工作方法。",
    journey2024Title: "重要转折",
    journey2024Text: "一次值得记住的变化，让职业与生活都走向了新的方向。",
    draft: "草稿",
    thinkingOne: "我如何判断一个项目是否值得做",
    thinkingTwo: "AI 进入工作流后，产品人的价值会怎么变化",
    thinkingThree: "从指标提升到系统建设：我理解的增长"
  },
  en: {
    brandName: "Craig Young",
    footerCopyright: "© 2026 Craig Young",
    homeLabel: "Back to home",
    navLabel: "Primary navigation",
    navExperiences: "Journey",
    navThinking: "Thinking",
    navPhotography: "Photography",
    heroQuoteLead: "Stay curious. ",
    heroQuoteEnd: "Keep creating.",
    homeKicker: "Career Portfolio",
    homeTitle: "Career stories, presented like products.",
    homeIntro: "Each experience becomes a focused case study: context, challenge, approach, outcome, and reflection.",
    homeStatement: "A resume summarizes. This website expands. It guides the reader through each project and brings its most important value into focus.",
    experienceKicker: "Life in Chapters",
    experienceCard: "The choices, turning points, and arrivals that shaped my path.",
    thinkingKicker: "Ongoing Notes",
    thinkingCard: "Notes on work, career, and life.",
    photographyCard: "Moments I noticed and wanted to keep.",
    lifeKicker: "Life, Observed",
    photographyCanvasLabel: "Photography canvas",
    closePhoto: "Close photo",
    frameworkKicker: "How Each Story Unfolds",
    frameworkTitle: "Every experience follows five questions.",
    backgroundTitle: "Context",
    backgroundText: "Why did this matter, and what stage were we in?",
    challengeTitle: "Challenge",
    challengeText: "What made the problem difficult? What were the constraints?",
    solutionTitle: "Approach",
    solutionText: "How did I break it down, and which decisions mattered most?",
    resultTitle: "Outcome",
    resultText: "What changed across metrics, efficiency, experience, or the business?",
    reviewTitle: "Reflection",
    reviewText: "What principles and methods came out of the work?",
    timelineLabel: "Journey timeline",
    timelineViewDetail: "View the full chapter →",
    journey2020Title: "First Choice",
    journey2020Text: "A new environment, and the beginning of learning how to turn ideas into things that truly happen.",
    journey2022Title: "A New Chapter",
    journey2022Text: "The responsibility grew more complex, and a personal way of thinking and working began to take shape.",
    journey2024Title: "Turning Point",
    journey2024Text: "A change worth remembering moved both work and life in a new direction.",
    draft: "Draft",
    thinkingOne: "How I decide whether a project is worth doing",
    thinkingTwo: "How AI changes the value of product work",
    thinkingThree: "From metric growth to system building"
  }
};

function setLanguage(language, persist = false) {
  const dictionary = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute("aria-label", value);
  });

  const button = document.querySelector("[data-language-toggle]");
  button.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换至中文");
  button.dataset.language = language;

  document.title = dictionary.brandName;
  if (persist) localStorage.setItem("portfolio-language", language);
  window.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: { language } }));
}

const savedLanguage = localStorage.getItem("portfolio-language");
const browserLanguage = (navigator.languages?.[0] || navigator.language || "en").toLowerCase();
const initialLanguage = savedLanguage === "zh" || savedLanguage === "en"
  ? savedLanguage
  : browserLanguage.startsWith("zh") ? "zh" : "en";
setLanguage(initialLanguage);

document.querySelector("[data-language-toggle]").addEventListener("click", (event) => {
  setLanguage(event.currentTarget.dataset.language === "zh" ? "en" : "zh", true);
});
