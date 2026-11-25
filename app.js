import { PORTFOLIO_DATA } from "./data.js?v=9";

// ============================================================================
// STATE
// ============================================================================

const WALLPAPERS = ["pixel", "sage", "ice", "obsidian"];

const state = {
  activeApp: null,
  activeNoteId: null,
  notesFilter: "All",
  githubFilter: "All",
  shelfTab: "movies",
  activeMediaId: null,
  currentTrackIndex: 0,
  isPlaying: false,
  soundEnabled: true,
  monochrome: false,
  brightness: 100,
  galleryIndex: 0,
  galleryPaused: false,
  isLocked: false,
  qsOpen: false,
  wallpaper: "pixel",
  layoutMode: "desktop"
};

// ============================================================================
// DOM REFERENCES
// ============================================================================

const els = {
  colorMeta: document.querySelector('meta[name="color-scheme"]'),
  siteBrandBtn: document.getElementById("site-brand-btn"),
  topbarThemeBtn: document.getElementById("topbar-theme-btn"),
  topbarSoundBtn: document.getElementById("topbar-sound-btn"),
  topbarChangelogBtn: document.getElementById("topbar-changelog-btn"),
  changelogPopover: document.getElementById("changelog-popover"),
  changelogList: document.getElementById("changelog-list"),
  topbarModeBtn: document.getElementById("topbar-mode-btn"),
  topbarModeLabel: document.getElementById("topbar-mode-label"),
  topbarClock: document.getElementById("topbar-clock"),
  studioStage: document.getElementById("studio-stage"),
  phoneScreen: document.getElementById("phone-screen"),
  deskName: document.getElementById("desk-owner-name"),
  deskTagline: document.getElementById("desk-owner-tagline"),
  deskModeBtn: document.getElementById("desk-mode-btn"),
  deskQsBtn: document.getElementById("desk-qs-btn"),
  deskLockBtn: document.getElementById("desk-lock-btn"),
  deskWallBtn: document.getElementById("desk-wall-btn"),

  glyphAura: document.getElementById("glyph-aura"),
  hwPowerBtn: document.getElementById("hw-power-btn"),
  hwVolBtns: document.querySelectorAll(".hw-vol-up, .hw-vol-down"),

  statusTime: document.getElementById("status-time"),
  statusBarTrigger: document.getElementById("status-bar-trigger"),
  topModeToggle: document.getElementById("top-mode-toggle"),
  topModeLabel: document.getElementById("top-mode-label"),
  topWallCycle: document.getElementById("top-wall-cycle"),
  topLockBtn: document.getElementById("top-lock-btn"),

  quickSettings: document.getElementById("quick-settings"),
  qsDate: document.getElementById("qs-date"),
  qsCloseBtn: document.getElementById("qs-close-btn"),
  qsSoundToggle: document.getElementById("qs-sound-toggle"),
  qsSoundState: document.getElementById("qs-sound-state"),
  qsMonoToggle: document.getElementById("qs-mono-toggle"),
  qsMonoState: document.getElementById("qs-mono-state"),
  qsBrightnessSlider: document.getElementById("qs-brightness-slider"),
  qsBrightnessVal: document.getElementById("qs-brightness-val"),
  qsModeAction: document.getElementById("qs-mode-action"),
  qsModeState: document.getElementById("qs-mode-state"),
  qsLockAction: document.getElementById("qs-lock-action"),
  themeOpts: document.querySelectorAll(".theme-opt"),
  wallOpts: document.querySelectorAll(".wall-opt"),
  qsThemeHint: document.getElementById("qs-theme-hint"),

  lockScreen: document.getElementById("lock-screen"),
  lockDate: document.getElementById("lock-date"),
  lockClock: document.getElementById("lock-clock"),
  lockStatusText: document.getElementById("lock-status-text"),
  lockNotifNote: document.getElementById("lock-notif-note"),
  lockGlyphBtn: document.getElementById("lock-glyph-btn"),
  lockMediaBtn: document.getElementById("lock-media-btn"),
  unlockBtn: document.getElementById("unlock-btn"),

  homeScreen: document.getElementById("home-screen"),
  homeHeading: document.getElementById("home-heading"),
  spotifyWidgetLabel: document.getElementById("spotify-widget-label"),
  spotifyOpenLink: document.getElementById("spotify-open-link"),
  spotifyHomeEmbed: document.getElementById("spotify-home-embed"),
  galleryImg: document.getElementById("gallery-img"),
  galleryTitle: document.getElementById("gallery-title"),
  galleryCredit: document.getElementById("gallery-credit"),
  galleryPauseBtn: document.getElementById("gallery-pause-btn"),
  galleryNextBtn: document.getElementById("gallery-next-btn"),
  badgeNotes: document.getElementById("badge-notes"),
  widgetWeekday: document.getElementById("widget-weekday"),
  widgetDateShort: document.getElementById("widget-date-short"),
  widgetClock: document.getElementById("widget-clock"),
  widgetOwner: document.getElementById("widget-owner"),
  desktopNoteDate: document.getElementById("desktop-note-date"),
  desktopNoteTitle: document.getElementById("desktop-note-title"),
  desktopNoteExcerpt: document.getElementById("desktop-note-excerpt"),

  appView: document.getElementById("app-view"),
  appBackBtn: document.getElementById("app-back-btn"),
  appViewTitle: document.getElementById("app-view-title"),
  appViewSubtitle: document.getElementById("app-view-subtitle"),
  appViewBody: document.getElementById("app-view-body"),
  homeGestureBtn: document.getElementById("home-gesture-btn")
};

// ============================================================================
// WEB AUDIO ENGINE (Tactile UI Clicks + Ambient Synth Preview)
// ============================================================================

let audioCtx = null;
let synthNodes = null;

function ensureAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playClickSound(pitch = 680) {
  if (!state.soundEnabled) return;
  const ctx = ensureAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(pitch, now);
  osc.frequency.exponentialRampToValueAtTime(160, now + 0.018);

  gain.gain.setValueAtTime(0.06, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.022);
}

function stopAmbientSynth() {
  if (!synthNodes) return;
  try {
    const now = audioCtx?.currentTime ?? 0;
    synthNodes.master.gain.setTargetAtTime(0.0001, now, 0.08);
    const nodesToStop = synthNodes.oscs;
    setTimeout(() => {
      nodesToStop.forEach((o) => {
        try {
          o.stop();
        } catch (_) {}
      });
    }, 260);
  } catch (_) {}
  synthNodes = null;
}

function startAmbientSynth(baseFreq = 220) {
  stopAmbientSynth();
  const ctx = ensureAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.linearRampToValueAtTime(0.045, now + 0.4);

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(640, now);

  master.connect(filter);
  filter.connect(ctx.destination);

  const ratios = [1, 1.5, 2.25];
  const oscs = ratios.map((r, idx) => {
    const osc = ctx.createOscillator();
    osc.type = idx === 0 ? "sine" : "triangle";
    osc.frequency.setValueAtTime(baseFreq * r, now);
    osc.connect(master);
    osc.start(now);
    return osc;
  });

  synthNodes = { master, oscs };
}

// ============================================================================
// GLYPH LED PULSE & WALLPAPER SWITCHER
// ============================================================================

let glyphTimer = null;

function triggerGlyphPulse() {
  els.glyphAura.classList.remove("pulsing");
  void els.glyphAura.offsetWidth;
  els.glyphAura.classList.add("pulsing");
  clearTimeout(glyphTimer);
  glyphTimer = setTimeout(() => {
    els.glyphAura.classList.remove("pulsing");
  }, 950);
}

function setMonochrome(enabled) {
  state.monochrome = Boolean(enabled);
  els.phoneScreen.style.setProperty("--screen-mono", state.monochrome ? "1" : "0");
  els.qsMonoToggle?.setAttribute("aria-pressed", String(state.monochrome));
  if (els.qsMonoState) {
    els.qsMonoState.textContent = state.monochrome ? "MONO" : "COLOR";
  }
  try {
    localStorage.setItem("chasingimpetus-mono", state.monochrome ? "1" : "0");
  } catch (_) {}
}

function setBrightness(percent) {
  const clamped = Math.max(55, Math.min(115, Number(percent) || 100));
  state.brightness = clamped;
  els.phoneScreen.style.setProperty("--screen-brightness", String(clamped / 100));
  if (els.qsBrightnessSlider) els.qsBrightnessSlider.value = String(clamped);
  if (els.qsBrightnessVal) els.qsBrightnessVal.textContent = `${clamped}%`;
}

// ============================================================================
// CURATED AUTO-ROTATING GALLERY WIDGET
// ============================================================================

let galleryInterval = null;

function renderGalleryFrame() {
  const items = PORTFOLIO_DATA.gallery;
  if (!items?.length || !els.galleryImg) return;
  const item = items[state.galleryIndex % items.length];
  els.galleryImg.src = item.src;
  els.galleryImg.alt = item.title;
  els.galleryImg.style.objectPosition = item.position || "center 40%";
  if (els.galleryTitle) els.galleryTitle.textContent = item.title;
  if (els.galleryCredit) els.galleryCredit.textContent = item.credit;
}

function stepGallery() {
  const items = PORTFOLIO_DATA.gallery;
  if (!items?.length) return;
  state.galleryIndex = (state.galleryIndex + 1) % items.length;
  renderGalleryFrame();
}

function setGalleryPaused(paused) {
  state.galleryPaused = Boolean(paused);
  clearInterval(galleryInterval);
  if (!state.galleryPaused) {
    galleryInterval = setInterval(stepGallery, 12000);
  }
  if (els.galleryPauseBtn) {
    const pauseIcon = els.galleryPauseBtn.querySelector(".gal-icon-pause");
    const playIcon = els.galleryPauseBtn.querySelector(".gal-icon-play");
    els.galleryPauseBtn.setAttribute(
      "aria-label",
      state.galleryPaused ? "Resume artwork rotation" : "Pause artwork rotation"
    );
    if (state.galleryPaused) {
      pauseIcon?.setAttribute("hidden", "");
      playIcon?.removeAttribute("hidden");
    } else {
      pauseIcon?.removeAttribute("hidden");
      playIcon?.setAttribute("hidden", "");
    }
  }
}

function setWallpaper(name) {
  if (!WALLPAPERS.includes(name)) return;
  state.wallpaper = name;
  els.phoneScreen.dataset.wallpaper = name;
  try {
    localStorage.setItem("nothing-wallpaper-v2", name);
  } catch (_) {}
  els.wallOpts.forEach((btn) => {
    btn.setAttribute("aria-checked", String(btn.dataset.wall === name));
  });
}

function initWallpaper() {
  try {
    const saved = localStorage.getItem("nothing-wallpaper-v2");
    if (saved && WALLPAPERS.includes(saved)) {
      setWallpaper(saved);
      return;
    }
  } catch (_) {}
  setWallpaper("pixel");
}

// ============================================================================
// THEME MANAGEMENT (3-State: System / Light / Dark)
// ============================================================================

const systemDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function getStoredScheme() {
  try {
    const val = localStorage.getItem("color-scheme");
    return val === "light" || val === "dark" ? val : null;
  } catch (_) {
    return null;
  }
}

function syncThemeUI() {
  const stored = getStoredScheme();
  const currentSystem = systemDarkQuery.matches ? "dark" : "light";
  const activeKey = stored ?? "system";

  els.colorMeta.content = stored ?? "light dark";

  els.themeOpts.forEach((btn) => {
    btn.setAttribute("aria-checked", String(btn.dataset.theme === activeKey));
  });

  els.qsThemeHint.textContent =
    activeKey === "system"
      ? `System (currently ${currentSystem})`
      : `Pinned to ${activeKey} mode`;
}

function setThemePreference(choice) {
  playClickSound(760);
  try {
    if (choice === "light" || choice === "dark") {
      localStorage.setItem("color-scheme", choice);
    } else {
      localStorage.removeItem("color-scheme");
    }
  } catch (_) {
    els.colorMeta.content =
      choice === "light" || choice === "dark" ? choice : "light dark";
  }
  syncThemeUI();
}

function toggleTwoStateTheme() {
  const stored = getStoredScheme();
  const systemScheme = systemDarkQuery.matches ? "dark" : "light";
  const rendered = stored ?? systemScheme;
  const target = rendered === "dark" ? "light" : "dark";
  // Per dark-mode-toggle guidance: store if diverging from system, else remove to return to system
  setThemePreference(target === systemScheme ? "system" : target);
}

systemDarkQuery.addEventListener("change", syncThemeUI);

window.addEventListener("storage", (e) => {
  if (e.key === "color-scheme") {
    syncThemeUI();
  }
});

// ============================================================================
// LIVE CLOCK & PROFILE HYDRATION
// ============================================================================

function updateClocks() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const timeStr = `${hours}:${mins}`;

  const weekdayShort = now.toLocaleDateString("en-US", { weekday: "short" });
  const weekdayLong = now.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
  const monthShort = now.toLocaleDateString("en-US", { month: "short" });
  const dayNum = String(now.getDate()).padStart(2, "0");

  els.statusTime.textContent = timeStr;
  els.widgetClock.textContent = timeStr;
  els.lockClock.textContent = timeStr;
  els.widgetWeekday.textContent = weekdayLong;
  els.widgetDateShort.textContent = `${dayNum} ${monthShort.toUpperCase()}`;
  els.qsDate.textContent = `${weekdayShort.toUpperCase()}, ${monthShort.toUpperCase()} ${dayNum}`;
  els.lockDate.textContent = `${weekdayShort} ${dayNum}, ${monthShort}`;

  if (els.topbarClock) {
    const h12 = now.getHours() % 12 || 12;
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    els.topbarClock.textContent = `${weekdayShort} ${monthShort} ${dayNum}  ${h12}:${mins} ${ampm}`;
  }
}

function hydrateStaticData() {
  const { profile, notes } = PORTFOLIO_DATA;
  els.deskName.textContent = profile.name;
  els.deskTagline.textContent = profile.tagline;
  els.widgetOwner.textContent = profile.name.toUpperCase();
  els.lockStatusText.textContent = profile.tagline;
  els.badgeNotes.textContent = String(notes.length);

  const pinned = notes.find((n) => n.pinned) ?? notes[0];
  if (pinned && els.desktopNoteTitle) {
    els.desktopNoteDate.textContent = pinned.date.toUpperCase();
    els.desktopNoteTitle.textContent = pinned.title;
    els.desktopNoteExcerpt.textContent = pinned.excerpt;
  }
  if (pinned && els.lockNotifNote) {
    els.lockNotifNote.textContent = pinned.title;
  }

  if (els.changelogList && profile.changelog?.length) {
    els.changelogList.innerHTML = profile.changelog
      .map(
        (c) => `
      <div class="changelog-entry">
        <span class="changelog-entry-title">${esc(c.text)}</span>
        <span class="changelog-entry-meta">${esc(c.hash)} · ${esc(c.date)}</span>
      </div>
    `
      )
      .join("");
  }

  updateMusicWidgetUI();
}

// ============================================================================
// LAYOUT MODE (Desktop Landscape vs Portrait Phone)
// ============================================================================

function setLayoutMode(mode) {
  const resolved = mode === "phone" || window.innerWidth < 900 ? "phone" : "desktop";
  state.layoutMode = resolved;
  els.studioStage.dataset.mode = resolved;
  if (els.topbarModeLabel) {
    els.topbarModeLabel.textContent = resolved === "desktop" ? "Phone" : "Desktop";
  }
  if (els.qsModeState) {
    els.qsModeState.textContent = resolved === "desktop" ? "DESKTOP" : "PHONE";
  }
}

function toggleLayoutMode() {
  playClickSound(720);
  const next = state.layoutMode === "desktop" ? "phone" : "desktop";
  setLayoutMode(next);
  triggerGlyphPulse();
}

function cycleWallpaper() {
  playClickSound(720);
  const nextIdx = (WALLPAPERS.indexOf(state.wallpaper) + 1) % WALLPAPERS.length;
  setWallpaper(WALLPAPERS[nextIdx]);
  triggerGlyphPulse();
}

// ============================================================================
// SPOTIFY EMBED ENGINE (Shared between Home Widget & Music App)
// ============================================================================

function toSpotifyEmbedUrl(rawUrl) {
  if (!rawUrl) return "";
  if (rawUrl.includes("/embed/")) {
    return rawUrl.includes("theme=") ? rawUrl : `${rawUrl}${rawUrl.includes("?") ? "&" : "?"}theme=0`;
  }
  const match = rawUrl.match(/open\.spotify\.com\/(playlist|album|track|artist|episode|show)\/([a-zA-Z0-9]+)/);
  if (match) {
    return `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator&theme=0`;
  }
  return rawUrl;
}

function getActiveSpotifyUrl() {
  const { music } = PORTFOLIO_DATA;
  return music.playlists?.[state.currentTrackIndex]?.spotifyUrl ?? music.spotifyUrl;
}

function updateMusicWidgetUI() {
  const { music } = PORTFOLIO_DATA;
  const activeUrl = getActiveSpotifyUrl();
  const embedUrl = toSpotifyEmbedUrl(activeUrl);

  if (els.spotifyWidgetLabel && music.label) {
    els.spotifyWidgetLabel.textContent = music.label;
  }
  if (els.spotifyOpenLink && activeUrl) {
    els.spotifyOpenLink.href = activeUrl;
  }
  if (els.spotifyHomeEmbed && embedUrl && els.spotifyHomeEmbed.src !== embedUrl) {
    els.spotifyHomeEmbed.src = embedUrl;
  }
}

function selectPlaylist(index) {
  const total = PORTFOLIO_DATA.music.playlists.length;
  state.currentTrackIndex = ((index % total) + total) % total;
  updateMusicWidgetUI();
  if (state.activeApp === "music") {
    renderMusicApp();
  }
}

// ============================================================================
// QUICK SETTINGS & LOCK SCREEN
// ============================================================================

function setQuickSettings(open) {
  state.qsOpen = open;
  els.quickSettings.hidden = !open;
  els.statusBarTrigger.setAttribute("aria-expanded", String(open));
  playClickSound(open ? 720 : 540);
  if (open) {
    els.qsCloseBtn.focus();
  }
}

function setLocked(locked, silent = false) {
  state.isLocked = locked;
  if (locked) {
    setQuickSettings(false);
    els.lockScreen.classList.remove("unlocking");
    els.lockScreen.hidden = false;
    if (!silent) {
      playClickSound(440);
      triggerGlyphPulse();
    }
    els.unlockBtn?.focus();
    return;
  }

  try {
    sessionStorage.setItem("chasingimpetus-unlocked", "1");
  } catch (_) {}

  if (!silent) {
    playClickSound(720);
    setTimeout(() => playClickSound(960), 65);
    triggerGlyphPulse();
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || els.lockScreen.hidden) {
    els.lockScreen.hidden = true;
    (state.activeApp ? els.appViewTitle : els.homeHeading).focus();
    return;
  }

  els.lockScreen.classList.add("unlocking");
  setTimeout(() => {
    els.lockScreen.hidden = true;
    els.lockScreen.classList.remove("unlocking");
    (state.activeApp ? els.appViewTitle : els.homeHeading).focus();
  }, 320);
}

// ============================================================================
// NAVIGATION WITH VIEW TRANSITIONS API + ACCESSIBILITY FOCUS ROUTING
// ============================================================================

const APP_META = {
  notes: { title: "Musings", subtitle: "ESSAYS & THOUGHTS" },
  github: { title: "Projects", subtitle: "BUILDS & EXPERIMENTS" },
  media: { title: "Media", subtitle: "VIDEO ESSAYS & VISUALS" },
  shelf: { title: "Shelf", subtitle: "FILMS & BOOKS LOG" },
  music: { title: "Music", subtitle: "ON ROTATION" },
  about: { title: "Aditya", subtitle: "PRODUCT BUILDER" },
  drift: { title: "Drift", subtitle: "REEL CAPTURE · LIVE FEED" }
};

function clearSelectedAppClasses() {
  document.querySelectorAll(".app-launcher.selected-app").forEach((el) => {
    el.classList.remove("selected-app");
  });
}

function renderActiveApp() {
  switch (state.activeApp) {
    case "notes":
      renderNotesApp();
      break;
    case "github":
      renderGithubApp();
      break;
    case "media":
      renderMediaApp();
      break;
    case "shelf":
      renderShelfApp();
      break;
    case "music":
      renderMusicApp();
      break;
    case "about":
      renderAboutApp();
      break;
    case "drift":
      renderDriftApp();
      break;
  }
}

function openApp(appId, sourceEl = null) {
  if (!APP_META[appId]) return;
  if (state.qsOpen) setQuickSettings(false);
  if (state.isLocked) setLocked(false);

  playClickSound(780);
  triggerGlyphPulse();

  clearSelectedAppClasses();
  if (sourceEl && sourceEl.classList.contains("app-launcher")) {
    sourceEl.classList.add("selected-app");
  }

  const applyDOM = () => {
    state.activeApp = appId;
    state.activeNoteId = null;
    state.activeMediaId = null;
    els.appViewTitle.textContent = APP_META[appId].title;
    els.appViewSubtitle.textContent = APP_META[appId].subtitle;
    renderActiveApp();
    els.homeScreen.hidden = true;
    els.appView.hidden = false;
    els.appViewBody.scrollTop = 0;
  };

  if (!document.startViewTransition) {
    applyDOM();
    els.appViewTitle.focus();
    return;
  }

  const transition = document.startViewTransition(applyDOM);
  transition.finished.finally(() => {
    els.appViewTitle.focus();
  });
}

function goHome() {
  if (state.qsOpen) {
    setQuickSettings(false);
    return;
  }
  if (!state.activeApp) return;

  playClickSound(520);
  cleanupDrift();

  const applyDOM = () => {
    state.activeApp = null;
    els.appView.hidden = true;
    els.homeScreen.hidden = false;
  };

  if (!document.startViewTransition) {
    applyDOM();
    clearSelectedAppClasses();
    els.homeHeading.focus();
    return;
  }

  const transition = document.startViewTransition(applyDOM);
  transition.finished.finally(() => {
    clearSelectedAppClasses();
    els.homeHeading.focus();
  });
}

// ============================================================================
// SAFE HTML ESCAPING
// ============================================================================

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ============================================================================
// MINI-APP 1: NOTES (Blogs & Essays)
// ============================================================================

function renderNotesApp() {
  const { notes } = PORTFOLIO_DATA;

  if (state.activeNoteId) {
    const note = notes.find((n) => n.id === state.activeNoteId);
    if (note) {
      els.appViewBody.innerHTML = `
        <button type="button" class="article-back-link" id="note-back-list">← ALL MUSINGS</button>
        <article class="n-card">
          <div class="n-card-meta">
            <span>${esc(note.date)}</span>
            <span class="tag-pill red">${esc(note.tag)} · ${esc(note.readTime)}</span>
          </div>
          <h3 class="n-card-title" style="font-family: var(--font-serif); font-size: 1.55rem; font-weight: 400; line-height: 1.15;">${esc(note.title)}</h3>
          <div class="article-body">
            ${note.body.map((p) => `<p>${esc(p)}</p>`).join("")}
          </div>
        </article>
      `;
      document.getElementById("note-back-list").addEventListener("click", () => {
        playClickSound(560);
        state.activeNoteId = null;
        renderNotesApp();
      });
      return;
    }
  }

  const tags = ["All", ...new Set(notes.map((n) => n.tag))];
  const filtered =
    state.notesFilter === "All"
      ? notes
      : notes.filter((n) => n.tag === state.notesFilter);

  els.appViewBody.innerHTML = `
    <div class="chip-row" role="group" aria-label="Filter notes by topic">
      ${tags
        .map(
          (tag) => `
        <button type="button" class="chip" data-note-tag="${esc(tag)}" aria-pressed="${String(state.notesFilter === tag)}">${esc(tag)}</button>
      `
        )
        .join("")}
    </div>
    <div class="cards-grid-2">
      ${filtered
        .map(
          (note) => `
        <button type="button" class="n-card interactive" data-open-note="${esc(note.id)}">
          <div class="n-card-meta">
            <span>${esc(note.date)} · ${esc(note.readTime)}</span>
            <span class="tag-pill ${note.pinned ? "red" : ""}">${note.pinned ? "PINNED · " : ""}${esc(note.tag)}</span>
          </div>
          <h3 class="n-card-title">${esc(note.title)}</h3>
          <p class="n-card-desc">${esc(note.excerpt)}</p>
        </button>
      `
        )
        .join("")}
    </div>
  `;

  els.appViewBody.querySelectorAll("[data-note-tag]").forEach((btn) => {
    btn.addEventListener("click", () => {
      playClickSound(640);
      state.notesFilter = btn.dataset.noteTag;
      renderNotesApp();
    });
  });

  els.appViewBody.querySelectorAll("[data-open-note]").forEach((btn) => {
    btn.addEventListener("click", () => {
      playClickSound(740);
      state.activeNoteId = btn.dataset.openNote;
      els.appViewBody.scrollTop = 0;
      renderNotesApp();
    });
  });
}

// ============================================================================
// MINI-APP 2: GITHUB (Projects & Repositories)
// ============================================================================

function renderGithubApp() {
  const { projects } = PORTFOLIO_DATA;
  const statuses = ["All", "LIVE", "BUILDING", "RESEARCH", "EXPERIMENT"];
  const filtered =
    state.githubFilter === "All"
      ? projects
      : projects.filter((p) => p.status === state.githubFilter);

  els.appViewBody.innerHTML = `
    <div class="chip-row" role="group" aria-label="Filter projects by status">
      ${statuses
        .map(
          (st) => `
        <button type="button" class="chip" data-gh-filter="${esc(st)}" aria-pressed="${String(state.githubFilter === st)}">${esc(st)}</button>
      `
        )
        .join("")}
    </div>
    <div class="cards-grid-2">
      ${filtered
        .map(
          (repo) => `
        <article class="n-card">
          <div class="n-card-meta">
            <span>${esc(repo.language)}${repo.stars ? ` · ★ ${repo.stars}` : ` · ${esc(repo.year)}`}</span>
            <span class="tag-pill ${repo.status === "LIVE" || repo.status === "BUILDING" ? "red" : ""}">${esc(repo.status)}</span>
          </div>
          <h3 class="n-card-title">${esc(repo.name)}</h3>
          <p class="n-card-desc">${esc(repo.description)}</p>
          <div class="chip-row">
            ${repo.tags.map((t) => `<span class="tag-pill">${esc(t)}</span>`).join("")}
          </div>
          <div class="n-card-meta" style="margin-top: 4px;">
            ${repo.liveUrl ? `<a class="link-btn" href="${esc(repo.liveUrl)}" target="_blank" rel="noopener noreferrer">OPEN LIVE ↗</a>` : `<span>${esc(repo.status)}</span>`}
            <a class="link-btn" href="${esc(repo.repoUrl)}" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
          </div>
        </article>
      `
        )
        .join("")}
    </div>
  `;

  els.appViewBody.querySelectorAll("[data-gh-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      playClickSound(640);
      state.githubFilter = btn.dataset.ghFilter;
      renderGithubApp();
    });
  });
}

// ============================================================================
// MINI-APP 3: MEDIA (Video Essays & 35mm Reels)
// ============================================================================

function renderMediaApp() {
  const { media } = PORTFOLIO_DATA;

  els.appViewBody.innerHTML = `<div class="cards-grid-2">${media
    .map((item) => {
      const isExpanded = state.activeMediaId === item.id;
      return `
      <article class="n-card">
        <button type="button" class="media-thumb ${esc(item.accentPattern)}" data-toggle-media="${esc(item.id)}" aria-expanded="${String(isExpanded)}" aria-label="Preview ${esc(item.title)}">
          <div class="n-card-meta" style="width: 100%; color: rgba(244,245,246,0.82);">
            <span>${esc(item.category.toUpperCase())}</span>
            <span>${esc(item.duration)}</span>
          </div>
          <span class="media-play-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="7,5 19,12 7,19"/></svg>
          </span>
          <div class="n-card-meta" style="width: 100%; color: rgba(244,245,246,0.72);">
            <span>${esc(item.resolution)}</span>
            <span>${isExpanded ? "CLOSE PLAYER" : item.embedUrl ? "TAP TO PLAY" : "TAP FOR LINK"}</span>
          </div>
        </button>
        <h3 class="n-card-title">${esc(item.title)}</h3>
        <p class="n-card-desc">${esc(item.summary)}</p>
        ${
          isExpanded
            ? `
          <div style="border-top: 1px dashed var(--border-strong); padding-top: 10px; display: flex; flex-direction: column; gap: 8px;">
            ${
              item.embedUrl
                ? `<iframe src="${esc(item.embedUrl)}" title="${esc(item.title)}" allow="autoplay" allowfullscreen style="width: 100%; ${item.aspect === "9/16" ? "height: 360px;" : "aspect-ratio: 16 / 9;"} border: 0; border-radius: 12px; background: #000;"></iframe>`
                : ""
            }
            ${
              item.externalUrl
                ? `<a class="link-btn" href="${esc(item.externalUrl)}" target="_blank" rel="noopener noreferrer">OPEN ORIGINAL ↗</a>`
                : ""
            }
          </div>
        `
            : ""
        }
      </article>
    `;
    })
    .join("")}</div>`;

  els.appViewBody.querySelectorAll("[data-toggle-media]").forEach((btn) => {
    btn.addEventListener("click", () => {
      playClickSound(700);
      const id = btn.dataset.toggleMedia;
      state.activeMediaId = state.activeMediaId === id ? null : id;
      renderMediaApp();
    });
  });
}

// ============================================================================
// MINI-APP 4: SHELF (Books & Movies)
// ============================================================================

function renderDotRating(score) {
  const filledCount = Math.round(score);
  return `
    <span class="dot-rating" aria-label="Rated ${score} out of 5">
      ${[1, 2, 3, 4, 5].map((i) => `<span class="${i <= filledCount ? "filled" : ""}"></span>`).join("")}
    </span>
  `;
}

function renderShelfApp() {
  const items = PORTFOLIO_DATA.shelf[state.shelfTab];

  els.appViewBody.innerHTML = `
    <div class="chip-row" role="tablist" aria-label="Shelf categories">
      <button type="button" class="chip" role="tab" aria-selected="${String(state.shelfTab === "movies")}" aria-pressed="${String(state.shelfTab === "movies")}" data-shelf-tab="movies">
        FILMS (${PORTFOLIO_DATA.shelf.movies.length})
      </button>
      <button type="button" class="chip" role="tab" aria-selected="${String(state.shelfTab === "books")}" aria-pressed="${String(state.shelfTab === "books")}" data-shelf-tab="books">
        BOOKS (${PORTFOLIO_DATA.shelf.books.length})
      </button>
    </div>
    <div class="cards-grid-2">
      ${items
        .map(
          (entry) => `
        <article class="n-card">
          <div class="n-card-meta">
            <span>${esc(entry.creator)} · ${esc(entry.year)}</span>
            <span class="tag-pill ${entry.status === "FAVORITE" || entry.status === "READING" ? "red" : ""}">${esc(entry.status)}</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
            <h3 class="n-card-title">${esc(entry.title)}</h3>
            ${renderDotRating(entry.rating)}
          </div>
          <p class="n-card-desc">${esc(entry.note)}</p>
        </article>
      `
        )
        .join("")}
    </div>
  `;

  els.appViewBody.querySelectorAll("[data-shelf-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      playClickSound(660);
      state.shelfTab = btn.dataset.shelfTab;
      renderShelfApp();
    });
  });
}

// ============================================================================
// MINI-APP 5: MUSIC (Spotify On Rotation & Curated Playlists)
// ============================================================================

function renderMusicApp() {
  const { playlists } = PORTFOLIO_DATA.music;
  const activeUrl = getActiveSpotifyUrl();
  const embedUrl = toSpotifyEmbedUrl(activeUrl);

  els.appViewBody.innerHTML = `
    <div class="n-card" style="padding: 12px;">
      <div class="n-card-meta" style="margin-bottom: 4px;">
        <span>SPOTIFY · ON ROTATION</span>
        <a class="link-btn" href="${esc(activeUrl)}" target="_blank" rel="noopener noreferrer">OPEN IN SPOTIFY ↗</a>
      </div>
      <iframe
        title="Spotify Playlist Player"
        src="${esc(embedUrl)}"
        style="width: 100%; height: 352px; border: 0; border-radius: 14px; background: #121212;"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>

    <p class="mono-caption" style="margin-top: 4px;">SWITCH PLAYLIST</p>
    <div class="cards-grid-2">
      ${playlists
        .map(
          (pl, idx) => `
        <button type="button" class="track-row ${idx === state.currentTrackIndex ? "active" : ""}" data-select-playlist="${idx}">
          <div style="min-width: 0;">
            <div style="font-size: 0.85rem; font-weight: 600;">${esc(pl.name)}</div>
            <div class="mono-micro">${esc(pl.vibe)}</div>
          </div>
          <span class="tag-pill ${idx === state.currentTrackIndex ? "red" : ""}">${idx === state.currentTrackIndex ? "ACTIVE" : "LOAD"}</span>
        </button>
      `
        )
        .join("")}
    </div>
  `;

  els.appViewBody.querySelectorAll("[data-select-playlist]").forEach((btn) => {
    btn.addEventListener("click", () => {
      playClickSound(700);
      selectPlaylist(Number(btn.dataset.selectPlaylist));
    });
  });
}

// ============================================================================
// MINI-APP 6: BIO / PROFILE
// ============================================================================

const SOCIAL_ICONS = {
  GitHub: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  "X / Twitter": `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  LinkedIn: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  Email: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  Letterboxd: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="7" cy="12" r="3.4"/><circle cx="12" cy="12" r="3.4"/><circle cx="17" cy="12" r="3.4"/></svg>`
};

function renderAboutApp() {
  const { profile } = PORTFOLIO_DATA;

  els.appViewBody.innerHTML = `
    <article class="n-card">
      <div class="article-body">
        ${profile.bio.map((p) => `<p>${esc(p)}</p>`).join("")}
      </div>
    </article>

    <p class="mono-caption">RIGHT NOW</p>
    <div class="now-grid">
      ${profile.now
        .map(
          (row) => `
        <div class="now-item">
          <span class="mono-micro" style="color: var(--text-muted);">${esc(row.label)}</span>
          <span style="font-size: 0.84rem; font-weight: 500;">${esc(row.value)}</span>
        </div>
      `
        )
        .join("")}
    </div>

    ${
      profile.experiments?.length
        ? `
      <p class="mono-caption">EXPERIMENTS</p>
      <div class="now-grid">
        ${profile.experiments
          .map(
            (row) => `
          <div class="now-item">
            <span class="mono-micro" style="color: var(--text-muted);">${esc(row.label)}</span>
            <span style="font-size: 0.84rem; font-weight: 500;">${esc(row.value)}</span>
          </div>
        `
          )
          .join("")}
      </div>
    `
        : ""
    }

    ${
      profile.past?.length
        ? `
      <p class="mono-caption">PAST</p>
      <div class="now-grid">
        ${profile.past
          .map(
            (item) => `
          <a class="n-card interactive" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer" style="padding: 11px 14px;">
            <span style="color: var(--text); font-weight: 600; font-size: 0.88rem;">${esc(item.name)}</span>
            <span class="mono-micro">${esc(item.role)}</span>
          </a>
        `
          )
          .join("")}
      </div>
    `
        : ""
    }

    <p class="mono-caption">CONNECT</p>
    <div class="connect-icons-row">
      ${profile.socials
        .map((soc) => {
          const isMail = soc.url.startsWith("mailto:");
          const icon = SOCIAL_ICONS[soc.label] ?? "";
          return `
        <a
          class="connect-icon-btn"
          href="${esc(soc.url)}"
          ${isMail ? "" : 'target="_blank" rel="noopener noreferrer"'}
          aria-label="${esc(soc.label)} (${esc(soc.handle)})"
          title="${esc(soc.label)} — ${esc(soc.handle)}"
        >
          ${icon}
        </a>
      `;
        })
        .join("")}
    </div>
  `;
}

// ============================================================================
// MINI-APP 7: DRIFT (Infinite Scroll Simulator · Reel Capture + Unplug)
// ============================================================================

let driftTimer = null;
let driftObserver = null;
let driftScrollHandler = null;

function cleanupDrift() {
  clearInterval(driftTimer);
  driftTimer = null;
  if (driftObserver) {
    driftObserver.disconnect();
    driftObserver = null;
  }
  if (driftScrollHandler) {
    els.appViewBody.removeEventListener("scroll", driftScrollHandler);
    driftScrollHandler = null;
  }
}

function renderDriftApp() {
  cleanupDrift();
  const pool = PORTFOLIO_DATA.driftFeed ?? [];
  let cardsShown = 0;
  let maxScrollPx = 0;
  let secondsElapsed = 0;

  els.appViewBody.innerHTML = `
    <div class="drift-hud" aria-live="off">
      <div class="drift-stat">
        <span class="mono-micro">DISTANCE</span>
        <span class="drift-stat-val" id="drift-dist">0.0m</span>
      </div>
      <div class="drift-stat">
        <span class="mono-micro">TIME IN FEED</span>
        <span class="drift-stat-val" id="drift-time">00:00</span>
      </div>
      <div class="drift-stat">
        <span class="mono-micro">CARDS</span>
        <span class="drift-stat-val" id="drift-cards">0</span>
      </div>
    </div>
    <div class="drift-feed" id="drift-feed"></div>
    <div id="drift-sentinel" style="height: 24px;"></div>
  `;

  const feedEl = document.getElementById("drift-feed");
  const distEl = document.getElementById("drift-dist");
  const timeEl = document.getElementById("drift-time");
  const cardsEl = document.getElementById("drift-cards");
  const sentinelEl = document.getElementById("drift-sentinel");

  function formatDuration(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  function getMeters() {
    return (maxScrollPx / 320).toFixed(1);
  }

  function showReceipt() {
    cleanupDrift();
    playClickSound(820);
    const meters = getMeters();
    const timeStr = formatDuration(secondsElapsed);
    els.appViewBody.innerHTML = `
      <div class="drift-receipt">
        <div class="n-card-meta">
          <span>UNPLUG RECEIPT</span>
          <span>REEL CAPTURE</span>
        </div>
        <h3 class="drift-card-title">Loop broken.</h3>
        <p class="n-card-desc">You scrolled <strong>${meters} meters</strong> across <strong>${cardsShown} cards</strong> in <strong>${timeStr}</strong>—on a personal website.</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;">
          <button type="button" class="drift-unplug-btn" id="receipt-home-btn" style="background: var(--text); color: var(--screen-bg);">RETURN HOME</button>
          <button type="button" class="drift-unplug-btn" id="receipt-mono-btn" style="background: var(--widget-bg-alt); color: var(--text);">${state.monochrome ? "RESTORE COLOR" : "TRY MONOCHROME"}</button>
        </div>
      </div>
    `;
    document.getElementById("receipt-home-btn")?.addEventListener("click", goHome);
    document.getElementById("receipt-mono-btn")?.addEventListener("click", () => {
      playClickSound(700);
      setMonochrome(!state.monochrome);
      goHome();
    });
  }

  function appendBatch(count = 5) {
    for (let i = 0; i < count; i++) {
      cardsShown += 1;

      if (cardsShown > 1 && cardsShown % 6 === 0) {
        const unplugCard = document.createElement("article");
        unplugCard.className = "drift-unplug-card";
        unplugCard.innerHTML = `
          <span class="mono-micro" style="color: inherit; opacity: 0.72;">UNPLUG INTERVENTION · ${getMeters()}M SCROLLED</span>
          <h3 class="drift-card-title" style="color: inherit;">Still scrolling? Tap the puck to break the loop.</h3>
          <button type="button" class="drift-unplug-btn">UNPLUG NOW</button>
        `;
        unplugCard.querySelector("button").addEventListener("click", showReceipt);
        feedEl.appendChild(unplugCard);
      } else {
        const item = pool[(cardsShown - 1) % pool.length];
        const card = document.createElement("article");
        card.className = "drift-card";
        card.innerHTML = `
          <div class="n-card-meta">
            <span>${esc(item.tag)}</span>
            <span>#${String(cardsShown).padStart(2, "0")}</span>
          </div>
          <h3 class="drift-card-title">${esc(item.title)}</h3>
          <p class="n-card-desc">${esc(item.body)}</p>
        `;
        feedEl.appendChild(card);
      }
    }
    if (cardsEl) cardsEl.textContent = String(cardsShown);
  }

  appendBatch(6);

  driftTimer = setInterval(() => {
    secondsElapsed += 1;
    if (timeEl) timeEl.textContent = formatDuration(secondsElapsed);
  }, 1000);

  driftScrollHandler = () => {
    if (els.appViewBody.scrollTop > maxScrollPx) {
      maxScrollPx = els.appViewBody.scrollTop;
      if (distEl) distEl.textContent = `${getMeters()}m`;
    }
  };
  els.appViewBody.addEventListener("scroll", driftScrollHandler, { passive: true });

  driftObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        appendBatch(4);
      }
    },
    { root: els.appViewBody, rootMargin: "120px" }
  );
  driftObserver.observe(sentinelEl);
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

function toggleSoundState() {
  state.soundEnabled = !state.soundEnabled;
  els.qsSoundToggle?.setAttribute("aria-pressed", String(state.soundEnabled));
  if (els.qsSoundState) {
    els.qsSoundState.textContent = state.soundEnabled ? "ON" : "MUTE";
  }
  if (els.topbarSoundBtn) {
    els.topbarSoundBtn.setAttribute("aria-pressed", String(state.soundEnabled));
    els.topbarSoundBtn.setAttribute("aria-label", state.soundEnabled ? "Mute interface sounds" : "Unmute interface sounds");
    const onIcon = els.topbarSoundBtn.querySelector(".sound-icon-on");
    const offIcon = els.topbarSoundBtn.querySelector(".sound-icon-off");
    if (state.soundEnabled) {
      onIcon?.removeAttribute("hidden");
      offIcon?.setAttribute("hidden", "");
    } else {
      onIcon?.setAttribute("hidden", "");
      offIcon?.removeAttribute("hidden");
    }
  }
  if (state.soundEnabled) playClickSound(760);
}

function setChangelogOpen(open) {
  if (!els.changelogPopover || !els.topbarChangelogBtn) return;
  els.changelogPopover.hidden = !open;
  els.topbarChangelogBtn.setAttribute("aria-expanded", String(open));
}

function bindEvents() {
  // Outer Top Bar Controls
  els.siteBrandBtn?.addEventListener("click", () => {
    setChangelogOpen(false);
    goHome();
  });
  els.topbarThemeBtn?.addEventListener("click", toggleTwoStateTheme);
  els.topbarSoundBtn?.addEventListener("click", toggleSoundState);
  els.topbarModeBtn?.addEventListener("click", toggleLayoutMode);
  els.topbarChangelogBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    playClickSound(680);
    setChangelogOpen(els.changelogPopover.hidden);
  });

  document.addEventListener("click", (e) => {
    if (
      els.changelogPopover &&
      !els.changelogPopover.hidden &&
      !els.changelogPopover.contains(e.target) &&
      !els.topbarChangelogBtn?.contains(e.target)
    ) {
      setChangelogOpen(false);
    }
  });

  els.statusBarTrigger.addEventListener("click", () => setQuickSettings(!state.qsOpen));
  els.qsCloseBtn.addEventListener("click", () => setQuickSettings(false));

  els.qsSoundToggle.addEventListener("click", toggleSoundState);

  els.qsMonoToggle?.addEventListener("click", () => {
    playClickSound(700);
    setMonochrome(!state.monochrome);
  });

  els.qsBrightnessSlider?.addEventListener("input", (e) => {
    setBrightness(e.target.value);
  });

  els.galleryPauseBtn?.addEventListener("click", () => {
    playClickSound(640);
    setGalleryPaused(!state.galleryPaused);
  });

  els.galleryNextBtn?.addEventListener("click", () => {
    playClickSound(700);
    stepGallery();
  });

  // Pull-down drag gesture from Status Bar OR Top Header to open Control Center (with live tracking)
  // Plus swipe-up drag gesture on Control Center to dismiss it
  const qsPanel = els.quickSettings.querySelector(".qs-panel");
  const dragSources = [document.querySelector(".status-bar"), document.querySelector(".site-topbar")].filter(Boolean);

  let pullMode = null; // "open" | "close" | null
  let pullStartY = 0;
  let pullDeltaY = 0;

  function resetQsTransform() {
    if (!qsPanel) return;
    qsPanel.classList.remove("dragging");
    qsPanel.style.transform = "";
    qsPanel.style.opacity = "";
  }

  dragSources.forEach((source) => {
    source.addEventListener("pointerdown", (e) => {
      if (state.isLocked || state.qsOpen) return;
      // Ignore drags starting on links or range inputs
      if (e.target.closest("a, input")) return;
      pullMode = "open";
      pullStartY = e.clientY;
      pullDeltaY = 0;
    });
  });

  els.quickSettings.addEventListener("pointerdown", (e) => {
    if (!state.qsOpen) return;
    if (e.target.closest("input[type='range']")) return;
    pullMode = "close";
    pullStartY = e.clientY;
    pullDeltaY = 0;
  });

  window.addEventListener("pointermove", (e) => {
    if (!pullMode) return;
    pullDeltaY = e.clientY - pullStartY;

    if (pullMode === "open" && pullDeltaY > 12) {
      if (els.quickSettings.hidden) {
        els.quickSettings.hidden = false;
      }
      if (qsPanel) {
        const clamped = Math.min(pullDeltaY, 160);
        const progress = clamped / 160;
        qsPanel.classList.add("dragging");
        qsPanel.style.transform = `translateY(${Math.round((progress - 1) * 90)}px)`;
        qsPanel.style.opacity = String(Math.max(0.25, progress));
      }
    } else if (pullMode === "close" && pullDeltaY < -10) {
      if (qsPanel) {
        const clamped = Math.max(pullDeltaY, -160);
        const progress = 1 + clamped / 160;
        qsPanel.classList.add("dragging");
        qsPanel.style.transform = `translateY(${Math.round(clamped * 0.6)}px)`;
        qsPanel.style.opacity = String(Math.max(0.25, progress));
      }
    }
  });

  window.addEventListener("pointerup", () => {
    if (!pullMode) return;
    const mode = pullMode;
    const delta = pullDeltaY;
    pullMode = null;
    pullDeltaY = 0;
    resetQsTransform();

    if (mode === "open") {
      if (delta > 36) {
        setQuickSettings(true);
      } else if (!state.qsOpen) {
        els.quickSettings.hidden = true;
      }
    } else if (mode === "close") {
      if (delta < -36) {
        setQuickSettings(false);
      }
    }
  });

  window.addEventListener("pointercancel", () => {
    if (!pullMode) return;
    const wasOpen = state.qsOpen;
    pullMode = null;
    pullDeltaY = 0;
    resetQsTransform();
    els.quickSettings.hidden = !wasOpen;
  });

  // Swipe-up gesture on Lock Screen to unlock
  let lockStartY = null;
  els.lockScreen.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button")) return;
    lockStartY = e.clientY;
  });
  els.lockScreen.addEventListener("pointermove", (e) => {
    if (lockStartY !== null && lockStartY - e.clientY > 48 && state.isLocked) {
      lockStartY = null;
      setLocked(false);
    }
  });
  els.lockScreen.addEventListener("pointerup", () => {
    lockStartY = null;
  });
  els.lockScreen.addEventListener(
    "wheel",
    (e) => {
      if (state.isLocked && Math.abs(e.deltaY) > 25) {
        setLocked(false);
      }
    },
    { passive: true }
  );

  els.qsLockAction.addEventListener("click", () => setLocked(true));
  els.qsModeAction?.addEventListener("click", () => {
    setQuickSettings(false);
    toggleLayoutMode();
  });

  // Close Quick Settings when clicking outside the floating panel in desktop mode
  els.quickSettings.addEventListener("click", (e) => {
    if (e.target === els.quickSettings) {
      setQuickSettings(false);
    }
  });

  els.topModeToggle?.addEventListener("click", toggleLayoutMode);
  els.topWallCycle?.addEventListener("click", cycleWallpaper);
  els.topLockBtn?.addEventListener("click", () => setLocked(true));
  els.deskModeBtn?.addEventListener("click", toggleLayoutMode);

  els.themeOpts.forEach((btn) => {
    btn.addEventListener("click", () => setThemePreference(btn.dataset.theme));
  });

  els.wallOpts.forEach((btn) => {
    btn.addEventListener("click", () => {
      playClickSound(720);
      setWallpaper(btn.dataset.wall);
    });
  });

  // Hardware & Desktop Controls
  els.hwPowerBtn.addEventListener("click", () => setLocked(!state.isLocked));
  els.unlockBtn.addEventListener("click", () => setLocked(false));
  els.lockGlyphBtn.addEventListener("click", () => {
    playClickSound(700);
    setMonochrome(!state.monochrome);
  });
  els.lockMediaBtn.addEventListener("click", () => openApp("media"));

  els.hwVolBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      playClickSound(840);
      triggerGlyphPulse();
    });
  });

  els.deskQsBtn?.addEventListener("click", () => setQuickSettings(!state.qsOpen));
  els.deskLockBtn?.addEventListener("click", () => setLocked(!state.isLocked));
  els.deskWallBtn?.addEventListener("click", cycleWallpaper);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 900 && state.layoutMode === "desktop") {
      setLayoutMode("phone");
    }
  });

  // Modular Widget & Dock App Launchers
  document.querySelectorAll(".app-launcher[data-app]").forEach((el) => {
    el.addEventListener("click", () => openApp(el.dataset.app, el));
  });

  // Back & Gesture Home Bar
  els.appBackBtn.addEventListener("click", goHome);
  els.homeGestureBtn.addEventListener("click", () => {
    if (state.isLocked) {
      setLocked(false);
    } else {
      goHome();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (state.isLocked && (e.key === " " || e.key === "Enter")) {
      e.preventDefault();
      setLocked(false);
      return;
    }
    if (e.key === "Escape") {
      if (els.changelogPopover && !els.changelogPopover.hidden) {
        setChangelogOpen(false);
      } else if (state.qsOpen) {
        setQuickSettings(false);
      } else if (state.activeApp) {
        goHome();
      }
    }
  });
}

// ============================================================================
// INIT
// ============================================================================

initWallpaper();
setLayoutMode(window.innerWidth >= 900 ? "desktop" : "phone");
hydrateStaticData();
syncThemeUI();
updateClocks();
setInterval(updateClocks, 15000);

try {
  if (localStorage.getItem("chasingimpetus-mono") === "1") {
    setMonochrome(true);
  }
} catch (_) {}

renderGalleryFrame();
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
setGalleryPaused(prefersReducedMotion);

bindEvents();

// First-time visitors in a session land on the Lock Screen
try {
  if (!sessionStorage.getItem("chasingimpetus-unlocked")) {
    setLocked(true, true);
  }
} catch (_) {
  setLocked(true, true);
}
