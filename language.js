const translations = {
  zh: {
    brandName: "读读说明书",
    footerCopyright: "© 2026 读读说明书",
    homeLabel: "返回首页",
    navLabel: "主导航",
    navExperiences: "旅程",
    navThinking: "思考",
    navPhotography: "摄影",
    navAbout: "关于",
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
    journey2021ReviewTitle: "2021年终总结",
    journey2021ReviewText: "用自己的身体和情绪经历这一年，然后继续游到海水变蓝。",
    journey2025ReviewTitle: "平静地，又一年过去",
    journey2025ReviewText: "回到成都、重新安顿生活，也慢慢找回热情、专注和对自己的信心。",
    thinkingWalkingTitle: "行走是一种思考方式",
    thinkingDesireTitle: "洗澡时的随想",
    aboutKicker: "个人档案",
    aboutTitle: "关于我",
    aboutNowTitle: "现在",
    aboutNowText: "目前生活在成都，从事金融数据研究。此前在字节跳动负责电商体验运营，也做过数据分析相关工作。",
    aboutWorkTitle: "擅长的事",
    aboutWorkText: "使用 SQL、Python 等工具理解数据，也擅长项目管理、结构化分析、快速学习和跨部门协作。",
    aboutLifeTitle: "工作之外",
    aboutLifeText: "打网球，也喜欢散步、电影、音乐、自然、机场和随时掏出手机拍照。行走通常是我整理思绪的方式。",
    aboutSiteTitle: "这个网站",
    aboutSiteText: "这里把职业经历、长期思考和生活片段放在一起。比起一份静态简历，我更希望它能持续记录一个人如何工作、如何生活，以及如何理解世界。",
    aboutContactTitle: "联系"
  },
  en: {
    brandName: "Craig Young",
    footerCopyright: "© 2026 Craig Young",
    homeLabel: "Back to home",
    navLabel: "Primary navigation",
    navExperiences: "Journey",
    navThinking: "Thinking",
    navPhotography: "Photography",
    navAbout: "About",
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
    journey2021ReviewTitle: "2021: A Year in Review",
    journey2021ReviewText: "Living through the year with my own body and emotions, then continuing until the sea turns blue.",
    journey2025ReviewTitle: "Quietly, Another Year Passed",
    journey2025ReviewText: "Returning to Chengdu, rebuilding daily life, and slowly recovering enthusiasm, focus, and trust in myself.",
    thinkingWalkingTitle: "Walking Is a Way of Thinking",
    thinkingDesireTitle: "A Thought in the Shower",
    aboutKicker: "Profile",
    aboutTitle: "About Me",
    aboutNowTitle: "Now",
    aboutNowText: "I live in Chengdu and work in financial data research. Previously, I worked on e-commerce experience operations at ByteDance and in data analysis.",
    aboutWorkTitle: "What I Do Well",
    aboutWorkText: "I use tools such as SQL and Python to understand data, with strengths in project management, structured analysis, fast learning, and cross-functional collaboration.",
    aboutLifeTitle: "Beyond Work",
    aboutLifeText: "I play tennis and enjoy walking, film, music, nature, airports, and taking photographs whenever something catches my eye. Walking is often how I organize my thoughts.",
    aboutSiteTitle: "This Website",
    aboutSiteText: "This is where career experiences, ongoing thoughts, and moments from life meet. Rather than a static resume, I want it to keep recording how a person works, lives, and understands the world.",
    aboutContactTitle: "Contact"
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
