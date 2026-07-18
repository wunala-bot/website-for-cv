(() => {
  const root = document.querySelector("[data-timeline]");
  if (!root) return;

  const viewport = root.querySelector("[data-timeline-viewport]");
  const track = root.querySelector("[data-timeline-track]");
  const nodes = [...root.querySelectorAll("[data-timeline-node]")];
  const panels = [...root.querySelectorAll("[data-timeline-panel]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const currentYear = new Date().getFullYear();
  let selectedIndex = Math.max(0, nodes.findLastIndex((node) => Number(node.dataset.year) <= currentYear));

  function centerNode(index, behavior = "smooth") {
    const node = nodes[index];
    const left = node.offsetLeft + node.offsetWidth / 2 - viewport.clientWidth / 2;
    viewport.scrollTo({ left: Math.max(0, left), behavior: reduceMotion ? "auto" : behavior });
  }

  function updateProgress(index) {
    const firstCenter = nodes[0].offsetLeft + nodes[0].offsetWidth / 2;
    const selectedCenter = nodes[index].offsetLeft + nodes[index].offsetWidth / 2;
    track.style.setProperty("--timeline-edge", `${firstCenter}px`);
    track.style.setProperty("--progress-start", `${firstCenter}px`);
    track.style.setProperty("--progress-width", `${Math.max(0, selectedCenter - firstCenter)}px`);
  }

  function selectIndex(index, shouldCenter = true) {
    selectedIndex = Math.max(0, Math.min(nodes.length - 1, index));

    nodes.forEach((node, nodeIndex) => {
      const selected = nodeIndex === selectedIndex;
      node.classList.toggle("is-selected", selected);
      node.setAttribute("aria-pressed", String(selected));
    });

    panels.forEach((panel, panelIndex) => {
      const selected = panelIndex === selectedIndex;
      panel.hidden = !selected;
      panel.classList.toggle("is-active", selected);
    });

    updateProgress(selectedIndex);
    if (shouldCenter && matchMedia("(max-width: 700px)").matches) centerNode(selectedIndex);
  }

  nodes.forEach((node, index) => node.addEventListener("click", () => selectIndex(index)));

  viewport.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    selectIndex(selectedIndex + (event.key === "ArrowRight" ? 1 : -1));
    nodes[selectedIndex].focus();
  });

  window.addEventListener("resize", () => {
    updateProgress(selectedIndex);
    if (matchMedia("(max-width: 700px)").matches) centerNode(selectedIndex, "auto");
  });

  requestAnimationFrame(() => selectIndex(selectedIndex));
})();
