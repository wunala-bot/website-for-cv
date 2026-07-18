(() => {
  const root = document.querySelector("[data-timeline]");
  if (!root) return;

  const viewport = root.querySelector("[data-timeline-viewport]");
  const track = root.querySelector("[data-timeline-track]");
  const svg = root.querySelector("[data-timeline-svg]");
  const wave = root.querySelector("[data-timeline-wave]");
  const nodes = [...root.querySelectorAll("[data-timeline-node]")];
  const panels = [...root.querySelectorAll("[data-timeline-panel]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let selectedIndex = nodes.length - 1;
  let dragging = false;
  let moved = false;
  let startX = 0;
  let startScrollLeft = 0;
  let lastX = 0;
  let lastTime = 0;
  let velocity = 0;
  let frame = 0;
  let pendingFocus = null;
  let pendingVelocity = 0;

  function centers() {
    return nodes.map((node) => node.offsetLeft + node.offsetWidth / 2);
  }

  function renderWave(focusX = null, speed = 0) {
    const width = track.scrollWidth;
    const baseY = 42;
    const points = [];
    const nodeCenters = centers();

    svg.setAttribute("viewBox", `0 0 ${width} 88`);
    svg.style.width = `${width}px`;

    for (let x = 0; x <= width; x += 14) {
      let y = baseY;
      if (focusX !== null && !reduceMotion) {
        const distance = x - focusX;
        const envelope = Math.exp(-(distance * distance) / (2 * 118 * 118));
        const amplitude = 7 + Math.min(Math.abs(speed) * 7, 8);
        y -= envelope * amplitude * Math.cos(distance / 42);
      }
      points.push(`${x === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    wave.setAttribute("d", points.join(" "));

    nodes.forEach((node, index) => {
      const distance = focusX === null ? Infinity : Math.abs(nodeCenters[index] - focusX);
      const proximity = Math.max(0, 1 - distance / 180);
      const selected = index === selectedIndex ? 1 : 0;
      node.style.setProperty("--node-scale", String(1 + proximity * 0.1 + selected * 0.14));
      node.style.setProperty("--node-lift", `${-(proximity * 2 + selected * 2)}px`);
    });
  }

  function nearestIndex() {
    const target = viewport.scrollLeft + viewport.clientWidth / 2;
    return centers().reduce((nearest, center, index, all) => (
      Math.abs(center - target) < Math.abs(all[nearest] - target) ? index : nearest
    ), 0);
  }

  function centerNode(index, behavior = "smooth") {
    const target = centers()[index] - viewport.clientWidth / 2;
    viewport.scrollTo({
      left: Math.max(0, target),
      behavior: reduceMotion ? "auto" : behavior
    });
  }

  function scheduleWave(focusX = null, speed = 0) {
    pendingFocus = focusX;
    pendingVelocity = speed;
    if (frame) return;

    frame = requestAnimationFrame(() => {
      frame = 0;
      renderWave(pendingFocus, pendingVelocity);
    });
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

    renderWave();
    if (shouldCenter) centerNode(selectedIndex);
  }

  function pointerPosition(event) {
    return event.clientX - track.getBoundingClientRect().left;
  }

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging = true;
    moved = false;
    startX = event.clientX;
    startScrollLeft = viewport.scrollLeft;
    lastX = event.clientX;
    lastTime = performance.now();
    velocity = 0;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(event.pointerId);
    scheduleWave(pointerPosition(event));
  });

  viewport.addEventListener("pointermove", (event) => {
    const focusX = pointerPosition(event);
    if (!dragging) {
      scheduleWave(focusX);
      return;
    }

    event.preventDefault();
    const delta = event.clientX - startX;
    const now = performance.now();
    const elapsed = Math.max(1, now - lastTime);
    velocity = (event.clientX - lastX) / elapsed;
    viewport.scrollLeft = startScrollLeft - delta * 1.15;
    moved = moved || Math.abs(delta) > 4;
    lastX = event.clientX;
    lastTime = now;
    scheduleWave(focusX, velocity);
  });

  function finishDrag(event) {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("is-dragging");
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    const glide = Math.max(-48, Math.min(48, velocity * 90));
    viewport.scrollLeft -= glide;
    selectIndex(nearestIndex());
    window.setTimeout(() => {
      moved = false;
      scheduleWave();
    }, reduceMotion ? 0 : 180);
  }

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", finishDrag);
  viewport.addEventListener("pointerleave", () => {
    if (!dragging) scheduleWave();
  });

  nodes.forEach((node, index) => {
    node.addEventListener("click", () => {
      if (!moved) selectIndex(index);
    });
  });

  viewport.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    selectIndex(selectedIndex + (event.key === "ArrowRight" ? 1 : -1));
  });

  window.addEventListener("resize", () => {
    renderWave();
    centerNode(selectedIndex, "auto");
  });

  requestAnimationFrame(() => {
    renderWave();
    centerNode(selectedIndex, "auto");
  });
})();
