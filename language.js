const translations = {
  zh: {
    pageTitle: "Craig Young | 职业作品集",
    homeLabel: "返回首页",
    navLabel: "主导航",
    navExperiences: "经历",
    navStructure: "结构",
    navThinking: "思考",
    homeKicker: "职业作品集",
    homeTitle: "把职业经历，做成可以被浏览的产品。",
    homeIntro: "每一段经历都浓缩成一个清晰案例：背景、挑战、方案、结果，以及我自己的复盘。",
    homeStatement: "传统简历负责概括。这个网页负责展开。我希望让别人不用从大段文字里提炼信息，而是顺着我设计好的路径，看见每个项目的核心价值。",
    experienceKicker: "职业经历",
    experienceCard: "把每一段职业经历整理成一个可浏览的产品案例。",
    structureKicker: "叙事方式",
    structureCard: "用固定叙事框架，让每个项目都能被快速理解。",
    thinkingKicker: "持续沉淀",
    thinkingCard: "把工作中的复盘、判断和方法论持续沉淀下来。",
    frameworkKicker: "项目框架",
    frameworkTitle: "每个项目，只回答五个问题。",
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
    experiencesIntro: "这里会放完整的职业路径，以及每段经历里最值得被看到的项目。",
    experienceOne: "经历一",
    experienceOneText: "这一段经历的核心主题、负责范围、代表项目和关键结果会放在这里。",
    experienceTwo: "经历二",
    experienceTwoText: "这里承接第二段经历，可以继续展开背景、挑战、方案、结果和复盘。",
    experienceThree: "经历三",
    experienceThreeText: "这里承接第三段经历，后续可以替换成真实公司、项目或阶段名称。",
    structureIntro: "结构不是限制表达，而是帮读者更快抓到重点。",
    structureBackgroundText: "为什么要做？当时处在什么业务阶段？",
    structureChallengeText: "真正困难的地方是什么？有哪些限制？",
    structureSolutionText: "如何拆解问题？做了什么关键判断？",
    structureReviewText: "这件事沉淀了什么能力和方法？",
    thinkingIntro: "这里会逐步放入复盘、判断和方法论，让网站从展示页变成长期的个人展示面。",
    draft: "草稿",
    thinkingOne: "我如何判断一个项目是否值得做",
    thinkingTwo: "AI 进入工作流后，产品人的价值会怎么变化",
    thinkingThree: "从指标提升到系统建设：我理解的增长"
  },
  en: {
    pageTitle: "Craig Young | Career Portfolio",
    homeLabel: "Back to home",
    navLabel: "Primary navigation",
    navExperiences: "Experience",
    navStructure: "Framework",
    navThinking: "Thinking",
    homeKicker: "Career Portfolio",
    homeTitle: "Career stories, presented like products.",
    homeIntro: "Each experience becomes a focused case study: context, challenge, approach, outcome, and reflection.",
    homeStatement: "A resume summarizes. This website expands. It guides the reader through each project and brings its most important value into focus.",
    experienceKicker: "Career Experience",
    experienceCard: "Explore each chapter of my career as a clear, focused product story.",
    structureKicker: "Narrative System",
    structureCard: "A consistent framework makes every project easier to understand.",
    thinkingKicker: "Ongoing Notes",
    thinkingCard: "Reflections, decisions, and working principles collected over time.",
    frameworkKicker: "Case Study Framework",
    frameworkTitle: "Every project answers five questions.",
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
    experiencesIntro: "A complete career path, with the projects and outcomes that matter most in each chapter.",
    experienceOne: "Experience One",
    experienceOneText: "The central theme, scope, representative projects, and key outcomes of this chapter will live here.",
    experienceTwo: "Experience Two",
    experienceTwoText: "This chapter can unfold through context, challenge, approach, outcome, and reflection.",
    experienceThree: "Experience Three",
    experienceThreeText: "This chapter can later be replaced with a real company, project, or career stage.",
    structureIntro: "Structure does not limit the story. It helps readers find the point faster.",
    structureBackgroundText: "Why did this matter, and what business stage were we in?",
    structureChallengeText: "What was genuinely difficult, and what constraints shaped the work?",
    structureSolutionText: "How did I frame the problem, and which decisions mattered most?",
    structureReviewText: "What capabilities and working principles came out of the experience?",
    thinkingIntro: "A growing collection of reflections, decisions, and methods that turns this portfolio into a long-term public record of my work.",
    draft: "Draft",
    thinkingOne: "How I decide whether a project is worth doing",
    thinkingTwo: "How AI changes the value of product work",
    thinkingThree: "From metric growth to system building"
  }
};

const pageTitles = {
  "index.html": { zh: "Craig Young | 职业作品集", en: "Craig Young | Career Portfolio" },
  "experiences.html": { zh: "经历 | Craig Young", en: "Experience | Craig Young" },
  "structure.html": { zh: "结构 | Craig Young", en: "Framework | Craig Young" },
  "thinking.html": { zh: "思考 | Craig Young", en: "Thinking | Craig Young" }
};

function setLanguage(language) {
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
  button.textContent = language === "zh" ? "EN" : "中文";
  button.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换至中文");
  button.dataset.language = language;

  const fileName = window.location.pathname.split("/").pop() || "index.html";
  document.title = (pageTitles[fileName] || pageTitles["index.html"])[language];
  localStorage.setItem("portfolio-language", language);
}

const initialLanguage = localStorage.getItem("portfolio-language") === "en" ? "en" : "zh";
setLanguage(initialLanguage);

document.querySelector("[data-language-toggle]").addEventListener("click", (event) => {
  setLanguage(event.currentTarget.dataset.language === "zh" ? "en" : "zh");
});
