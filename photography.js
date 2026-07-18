(() => {
  const viewport = document.querySelector("[data-photo-window]");
  const canvas = document.querySelector("[data-photo-canvas]");
  const dialog = document.querySelector("[data-photo-dialog]");
  if (!viewport || !canvas || !dialog) return;

  const closeButton = dialog.querySelector("[data-photo-close]");
  const dialogImage = dialog.querySelector("[data-photo-dialog-image]");
  const dialogLocation = dialog.querySelector("[data-photo-dialog-location]");
  const dialogDate = dialog.querySelector("[data-photo-dialog-date]");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const atlasColumns = 4;
  const atlasRows = 3;
  const photos = [
    { date: "2019-03-17", zh: "山路", en: "Mountain Road", col: 0, row: 0, x: 0.08, y: 0.18 },
    { date: "2019-09-28", zh: "台北", en: "Taipei", col: 1, row: 0, x: 0.32, y: 0.1 },
    { date: "2020-05-04", zh: "海边", en: "The Coast", col: 2, row: 0, x: 0.58, y: 0.17 },
    { date: "2020-11-21", zh: "窗边", en: "By the Window", col: 3, row: 0, x: 0.84, y: 0.08 },
    { date: "2021-04-13", zh: "在路上", en: "On the Way", col: 0, row: 1, x: 0.19, y: 0.46 },
    { date: "2021-08-02", zh: "旧街", en: "Old Street", col: 1, row: 1, x: 0.48, y: 0.39 },
    { date: "2022-06-19", zh: "雨后", en: "After Rain", col: 2, row: 1, x: 0.75, y: 0.43 },
    { date: "2022-12-30", zh: "雪线", en: "Snow Line", col: 3, row: 1, x: 0.94, y: 0.56 },
    { date: "2023-05-15", zh: "灯塔", en: "Lighthouse", col: 0, row: 2, x: 0.04, y: 0.76 },
    { date: "2024-01-07", zh: "黄昏球场", en: "Court at Dusk", col: 1, row: 2, x: 0.34, y: 0.75 },
    { date: "2025-04-26", zh: "午后咖啡", en: "Afternoon Coffee", col: 2, row: 2, x: 0.64, y: 0.78 },
    { date: "2026-02-11", zh: "云上", en: "Above the Clouds", col: 3, row: 2, x: 0.88, y: 0.83 }
  ];

  let width = 0;
  let height = 0;
  let worldWidth = 0;
  let worldHeight = 0;
  let offsetX = 0;
  let offsetY = 0;
  let dragging = false;
  let moved = false;
  let pointerX = 0;
  let pointerY = 0;
  let lastFrame = performance.now();

  function applyPhotoAsset(element, photo) {
    if (photo.src) {
      element.style.backgroundImage = `url("${photo.src}")`;
      element.style.backgroundPosition = "center";
      element.style.backgroundSize = "cover";
      return;
    }

    element.style.removeProperty("background-image");
    element.style.setProperty("--atlas-x", `${photo.col * 100 / (atlasColumns - 1)}%`);
    element.style.setProperty("--atlas-y", `${photo.row * 100 / (atlasRows - 1)}%`);
  }

  const items = photos.map((photo, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "photo-tile";
    button.dataset.photoIndex = String(index);
    applyPhotoAsset(button, photo);
    button.setAttribute("aria-label", `${photo[activeLanguage()]} · ${photo.date}`);
    canvas.append(button);
    return button;
  });

  function wrap(value, size) {
    return ((value % size) + size) % size;
  }

  function updateSize() {
    width = viewport.clientWidth;
    height = viewport.clientHeight;
    worldWidth = Math.max(1050, width * 1.45);
    worldHeight = Math.max(720, height * 1.45);
  }

  function render() {
    photos.forEach((photo, index) => {
      const rawX = photo.x * worldWidth + offsetX;
      const rawY = photo.y * worldHeight + offsetY;
      const dx = wrap(rawX + worldWidth / 2, worldWidth) - worldWidth / 2;
      const dy = wrap(rawY + worldHeight / 2, worldHeight) - worldHeight / 2;
      const nx = dx / (worldWidth / 2);
      const ny = dy / (worldHeight / 2);
      const distance = Math.min(1, Math.hypot(nx, ny));
      const depth = Math.cos(distance * Math.PI / 2);
      const scale = 0.62 + depth * 0.48;
      const x = width / 2 + dx * (0.74 + depth * 0.18);
      const y = height / 2 + dy * (0.72 + depth * 0.2);
      const item = items[index];
      item.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
      item.style.opacity = String(0.28 + depth * 0.72);
      item.style.zIndex = String(Math.round(depth * 100));
    });
  }

  function frame(now) {
    const elapsed = Math.min(40, now - lastFrame);
    lastFrame = now;
    if (!dragging && !reduceMotion && !dialog.open) {
      offsetX -= elapsed * 0.008;
      offsetY -= elapsed * 0.003;
    }
    render();
    requestAnimationFrame(frame);
  }

  function activeLanguage() {
    return document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  }

  function openPhoto(index) {
    const photo = photos[index];
    const language = activeLanguage();
    applyPhotoAsset(dialogImage, photo);
    dialogImage.setAttribute("aria-label", photo[language]);
    dialogLocation.textContent = photo[language];
    dialogDate.textContent = new Intl.DateTimeFormat(language === "zh" ? "zh-CN" : "en", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date(`${photo.date}T12:00:00`));
    dialog.showModal();
  }

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging = true;
    moved = false;
    pointerX = event.clientX;
    pointerY = event.clientY;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(event.pointerId);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const dx = event.clientX - pointerX;
    const dy = event.clientY - pointerY;
    offsetX += dx * 1.2;
    offsetY += dy * 1.2;
    moved = moved || Math.hypot(dx, dy) > 2;
    pointerX = event.clientX;
    pointerY = event.clientY;
  });

  function finishDrag(event) {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("is-dragging");
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    setTimeout(() => { moved = false; }, 0);
  }

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", finishDrag);
  items.forEach((item, index) => item.addEventListener("click", () => {
    if (!moved) openPhoto(index);
  }));

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  window.addEventListener("resize", updateSize);
  window.addEventListener("portfolio-language-change", () => {
    items.forEach((item, index) => {
      const photo = photos[index];
      item.setAttribute("aria-label", `${photo[activeLanguage()]} · ${photo.date}`);
    });
  });

  updateSize();
  requestAnimationFrame(frame);
})();
