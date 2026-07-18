(() => {
  const root = document.querySelector("[data-article-root]");
  if (!root) return;

  const articles = {
    "journey-2020": {
      type: "journey",
      date: "2020-01-01",
      zh: {
        category: "旅程",
        title: "第一次选择",
        dek: "进入一个新的环境，开始学习如何把想法变成真正发生的事情。",
        blocks: [
          { type: "p", text: "每一段新的经历，最开始都不是一个完整的故事。它更像是一连串还没有答案的问题：该把注意力放在哪里，怎样判断事情的重要程度，又该如何与不同的人一起推进。" },
          { type: "p", text: "这一阶段让我第一次真正理解，想法本身并不稀缺。更重要的是把问题说清楚，把复杂的事情拆开，并让一个方案能够被团队理解和执行。" },
          { type: "h2", text: "从想法到发生" },
          { type: "p", text: "工作开始从完成任务，变成理解目标背后的原因。我逐渐学会在信息不完整的时候做判断，也开始形成记录、复盘和持续修正的习惯。" }
        ]
      },
      en: {
        category: "Journey",
        title: "First Choice",
        dek: "A new environment, and the beginning of learning how to turn ideas into things that truly happen.",
        blocks: [
          { type: "p", text: "A new experience rarely begins as a complete story. It starts as a series of unanswered questions: where to focus, how to judge what matters, and how to move forward with different people." },
          { type: "p", text: "This chapter taught me that ideas themselves are not scarce. The harder work is defining the problem, breaking down complexity, and making an approach understandable and actionable for a team." },
          { type: "h2", text: "From idea to reality" },
          { type: "p", text: "Work gradually shifted from completing tasks to understanding why a goal mattered. I learned to make decisions with incomplete information and began building a habit of documenting, reflecting, and revising." }
        ]
      }
    },
    "journey-2022": {
      type: "journey",
      date: "2022-01-01",
      zh: {
        category: "旅程",
        title: "新的阶段",
        dek: "责任变得更复杂，也开始形成自己的判断方式和工作方法。",
        blocks: [
          { type: "p", text: "当负责的事情变多，真正的挑战不再只是把每一件事分别做好，而是理解它们之间的关系，并决定什么应该先发生。" },
          { type: "p", text: "我开始更加关注系统，而不只是单个结果。一个短期指标为什么变化，一种工作方式能否重复，以及团队是否能在没有额外解释的情况下继续运转，都成为新的判断标准。" },
          { type: "h2", text: "形成自己的方法" },
          { type: "p", text: "这一阶段留下的不是一套固定答案，而是一种工作方式：先找到真正的问题，再选择足够简单、能够持续迭代的解决路径。" }
        ]
      },
      en: {
        category: "Journey",
        title: "A New Chapter",
        dek: "The responsibility grew more complex, and a personal way of thinking and working began to take shape.",
        blocks: [
          { type: "p", text: "As the scope grew, the challenge was no longer doing each task well in isolation. It became understanding how the pieces related and deciding what needed to happen first." },
          { type: "p", text: "I started paying more attention to systems than isolated outcomes: why a short-term metric moved, whether a process could be repeated, and whether a team could keep moving without constant explanation." },
          { type: "h2", text: "Building a method" },
          { type: "p", text: "What remained was not a fixed set of answers, but a way of working: find the real problem first, then choose the simplest path that can continue to evolve." }
        ]
      }
    },
    "journey-2024": {
      type: "journey",
      date: "2024-01-01",
      zh: {
        category: "旅程",
        title: "重要转折",
        dek: "一次值得记住的变化，让职业与生活都走向了新的方向。",
        blocks: [
          { type: "p", text: "有些变化发生时并没有明确的分界线。往往是在回头看时，才发现自己的关注点、判断标准和想要前往的方向都已经改变。" },
          { type: "p", text: "这一年让我重新整理过去积累的经验，也开始认真思考工作之外的生活应该如何被记录。职业并不是彼此孤立的项目，生活也不是工作结束后的空白。它们共同构成了我理解世界的方式。" },
          { type: "blockquote", text: "真正重要的变化，通常先发生在看待问题的方式里。" },
          { type: "p", text: "这个网站也是从这里开始的。它不只保存结果，也保存过程、选择和后来形成的想法。" }
        ]
      },
      en: {
        category: "Journey",
        title: "Turning Point",
        dek: "A change worth remembering moved both work and life in a new direction.",
        blocks: [
          { type: "p", text: "Some changes arrive without a clear dividing line. Only in retrospect do we notice that our focus, standards, and sense of direction have shifted." },
          { type: "p", text: "This year gave me a reason to reorganize what I had learned and to think seriously about how life beyond work should be recorded. A career is not a collection of isolated projects, and life is not the blank space after work. Together, they shape how I understand the world." },
          { type: "blockquote", text: "The changes that matter most often begin in how we see the problem." },
          { type: "p", text: "This website began there. It keeps not only outcomes, but also processes, choices, and the ideas that emerged afterward." }
        ]
      }
    },
    "thinking-1": {
      type: "thinking",
      date: "2026-07-18",
      zh: { category: "思考", title: "我如何判断一个项目是否值得做", dek: "在投入资源之前，先判断问题本身是否值得被解决。", blocks: [{ type: "p", text: "一件事能够被做，并不意味着它值得被做。我的判断通常从三个问题开始：问题是否真实存在，解决之后是否会带来可感知的变化，以及这件事是否能够沉淀出可以复用的能力。" }, { type: "p", text: "好的项目不一定规模最大，但应该让目标、行动和结果之间保持清晰的联系。" }] },
      en: { category: "Thinking", title: "How I decide whether a project is worth doing", dek: "Before committing resources, decide whether the problem itself deserves to be solved.", blocks: [{ type: "p", text: "The fact that something can be built does not mean it should be. I usually begin with three questions: Is the problem real? Will solving it create a perceptible change? Will the work build a capability that can be reused?" }, { type: "p", text: "A good project is not necessarily the largest one, but it should maintain a clear relationship between the goal, the action, and the outcome." }] }
    },
    "thinking-2": {
      type: "thinking",
      date: "2026-07-18",
      zh: { category: "思考", title: "AI 进入工作流后，产品人的价值会怎么变化", dek: "工具提高了产出的速度，也让判断的重要性更加突出。", blocks: [{ type: "p", text: "当制作方案、整理信息和验证想法的成本下降，产品工作的价值会进一步向问题定义、取舍和组织协作移动。" }, { type: "p", text: "AI 可以让很多动作变快，但它不会自动决定什么值得做。能够提出更好的问题，并对结果负责，仍然是人的工作。" }] },
      en: { category: "Thinking", title: "How AI changes the value of product work", dek: "Tools accelerate output and make judgment even more important.", blocks: [{ type: "p", text: "As the cost of drafting solutions, organizing information, and testing ideas falls, the value of product work moves further toward problem definition, tradeoffs, and coordination." }, { type: "p", text: "AI can make many actions faster, but it does not decide what deserves to be done. Asking better questions and taking responsibility for outcomes remain human work." }] }
    },
    "thinking-3": {
      type: "thinking",
      date: "2026-07-18",
      zh: { category: "思考", title: "从指标提升到系统建设：我理解的增长", dek: "增长不只是一次数字变化，而是持续产生结果的能力。", blocks: [{ type: "p", text: "单次指标提升可以来自机会、活动或投入。真正稳定的增长，则来自一套能够持续理解用户、验证假设并修正方向的系统。" }, { type: "p", text: "因此，我更愿意把增长理解成组织学习速度的结果，而不仅是一张报表上的曲线。" }] },
      en: { category: "Thinking", title: "From metric growth to system building", dek: "Growth is not a one-time change in numbers, but the ability to keep producing results.", blocks: [{ type: "p", text: "A single metric increase may come from timing, a campaign, or additional investment. Durable growth comes from a system that continuously understands users, tests assumptions, and corrects direction." }, { type: "p", text: "I therefore see growth as an outcome of how quickly an organization learns, not only as a curve on a dashboard." }] }
    }
  };

  const params = new URLSearchParams(location.search);
  const articleId = articles[params.get("article")] ? params.get("article") : "journey-2024";
  const article = articles[articleId];

  function language() {
    return document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  }

  function render() {
    const lang = language();
    const content = article[lang];
    const isJourney = article.type === "journey";
    const back = root.querySelector("[data-article-back]");
    const body = root.querySelector("[data-article-body]");

    const formattedDate = new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date(`${article.date}T12:00:00`));

    root.querySelector("[data-article-category]").textContent = `${content.category} · ${article.date.slice(0, 4)}`;
    root.querySelector("[data-article-title]").textContent = content.title;
    root.querySelector("[data-article-dek]").textContent = content.dek;
    root.querySelector("[data-article-date]").textContent = formattedDate;
    root.querySelector("[data-article-date]").dateTime = article.date;
    back.href = isJourney ? "experiences.html" : "thinking.html";
    back.textContent = lang === "zh" ? `← 返回${isJourney ? "旅程" : "思考"}` : `← Back to ${isJourney ? "Journey" : "Thinking"}`;

    document.querySelectorAll("[data-article-nav]").forEach((link) => {
      if (link.dataset.articleNav === article.type) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    body.replaceChildren(...content.blocks.map((block) => {
      const element = document.createElement(block.type === "blockquote" ? "blockquote" : block.type);
      element.textContent = block.text;
      return element;
    }));
    document.title = `${content.title} · ${lang === "zh" ? "读读说明书" : "Craig Young"}`;
  }

  window.addEventListener("portfolio-language-change", render);
  render();
})();
