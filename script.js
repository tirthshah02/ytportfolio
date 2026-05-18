// ═══════════════════════════════════
// DATA — Replace with your real info
// ═══════════════════════════════════

const VIDEOS = [
  {
    id: 1,
    icon: "💰",
    color: "#1a3a2a",
    accent: "#5de0b5",
    title: "How I Grew a Personal Finance Channel from 0 to 200K Subscribers",
    channel: "Channel A · Personal Finance",
    channelInitials: "PF",
    channelColor: "#065fd4",
    stats: "200K subscribers · 18 months",
    duration: "Case Study",
    tags: ["Channels", "Growth", "Strategy"],
    playerTitle: "Channel A — Personal Finance",
    playerSub: "Strategist & Head of Content · 18 months",
    headline: "Built a finance channel from scratch to 200K subscribers in 18 months",
    meta: "Personal Finance · Strategy + Thumbnails + Scripting · Jan 2022 – Jun 2023",
    metrics: [
      { val: "200K", lbl: "Subscribers" },
      { val: "18mo", lbl: "Timeline" },
      { val: "4.8%", lbl: "Avg CTR" },
      { val: "8.2min", lbl: "Avg Watch Time" },
    ],
    description: `<h3>The Mandate</h3>
    <p>Build a personal finance channel from zero. No existing audience, no brand recognition. Just a camera and a strategy.</p>
    <h3>What I Did</h3>
    <p><strong>Positioning:</strong> Carved out a specific niche — personal finance for young Indians — instead of competing with generic money channels.</p>
    <p><strong>Thumbnails:</strong> Moved away from talking-head shots to high-contrast text + emotion combos. CTR jumped from 2.1% to 4.8% within 60 days.</p>
    <p><strong>Scripting:</strong> Built a hook framework that front-loaded the payoff. Average view duration increased from 42% to 61%.</p>
    <p><strong>Cadence:</strong> 2 videos/week with a rolling 8-week content calendar planned in advance.</p>
    <h3>Tags</h3>`,
    descTags: ["Strategy", "Thumbnails", "Scripting", "Growth", "CTR Optimization"]
  },
  {
    id: 2,
    icon: "🧠",
    color: "#1a1a3a",
    accent: "#818cf8",
    title: "Redesigned 200+ Thumbnails for a Tech Education Channel — CTR Results",
    channel: "Channel B · Tech Education",
    channelInitials: "TE",
    channelColor: "#7c3aed",
    stats: "1.2M views · +3.1% CTR lift",
    duration: "Results",
    tags: ["Thumbnails", "Results", "CTR Optimization"],
    playerTitle: "Channel B — Tech Education",
    playerSub: "Thumbnail Strategist · 6 months",
    headline: "Redesigned 200+ thumbnails for a 500K sub tech channel — CTR went from 2.4% to 5.5%",
    meta: "Tech Education · Thumbnail Overhaul · Aug 2022 – Jan 2023",
    metrics: [
      { val: "5.5%", lbl: "CTR After" },
      { val: "2.4%", lbl: "CTR Before" },
      { val: "200+", lbl: "Thumbnails Redesigned" },
      { val: "1.2M", lbl: "New Views (3mo)" },
    ],
    description: `<h3>The Brief</h3>
    <p>The channel had great content but thumbnails that blended into the feed. They were getting impressions but not clicks.</p>
    <h3>The Approach</h3>
    <p><strong>Audit:</strong> Analysed every video's CTR against its topic, face visibility, text size, and contrast. Found clear patterns in what their audience responded to.</p>
    <p><strong>Design System:</strong> Built a repeatable template system — 3 thumbnail "types" based on content category. Consistency improved brand recognition.</p>
    <p><strong>Testing:</strong> A/B tested 12 different thumbnail directions before rolling out the new system channel-wide.</p>
    <h3>Tags</h3>`,
    descTags: ["Thumbnails", "CTR Optimization", "Results"]
  },
  {
    id: 3,
    icon: "🏋️",
    color: "#2a1a1a",
    accent: "#f87171",
    title: "Content Strategy for a Fitness Creator — 0 to 80K in 12 Months",
    channel: "Channel C · Health & Fitness",
    channelInitials: "HF",
    channelColor: "#dc2626",
    stats: "80K subscribers · 12 months",
    duration: "Case Study",
    tags: ["Channels", "Growth", "Strategy"],
    playerTitle: "Channel C — Health & Fitness",
    playerSub: "Content Strategist · 12 months",
    headline: "Full content strategy for a fitness creator — 0 to 80K subscribers in 12 months",
    meta: "Health & Fitness · Strategy + Ideation + Scripting · Mar 2021 – Feb 2022",
    metrics: [
      { val: "80K", lbl: "Subscribers" },
      { val: "12mo", lbl: "Timeline" },
      { val: "3.9%", lbl: "Avg CTR" },
      { val: "14", lbl: "Viral Videos (>100K)" },
    ],
    description: `<h3>The Creator</h3>
    <p>A certified personal trainer with knowledge but no YouTube presence. Wanted to build an audience around sustainable fitness — not fads.</p>
    <h3>Strategy</h3>
    <p><strong>Niche down:</strong> "Fitness for busy professionals" — specific enough to own, broad enough to scale.</p>
    <p><strong>Evergreen + Trend stack:</strong> 70% evergreen content (search-driven) + 30% trend-riding (YouTube surfing algorithm). Built a reliable baseline + occasional virality.</p>
    <p><strong>Video ideas:</strong> Maintained a 60-video idea backlog ranked by search volume, competition, and creator fit.</p>
    <h3>Tags</h3>`,
    descTags: ["Strategy", "Growth", "Scripting", "Channels"]
  },
  {
    id: 4,
    icon: "📝",
    color: "#1a2a1a",
    accent: "#86efac",
    title: "I Scripted 50 Videos for a Business Channel — Here's the Framework I Used",
    channel: "Channel D · Business",
    channelInitials: "BZ",
    channelColor: "#16a34a",
    stats: "50 scripts · 4.2M total views",
    duration: "Framework",
    tags: ["Scripting", "Strategy", "Channels"],
    playerTitle: "Channel D — Business",
    playerSub: "Head Scriptwriter · 14 months",
    headline: "50 scripts for a 300K business channel — the hook + retention framework behind 4.2M views",
    meta: "Business Niche · Scripting + Research + Ideation · Sep 2021 – Oct 2022",
    metrics: [
      { val: "50", lbl: "Scripts Written" },
      { val: "4.2M", lbl: "Total Views" },
      { val: "63%", lbl: "Avg Retention" },
      { val: "300K", lbl: "Channel Subs" },
    ],
    description: `<h3>The Problem</h3>
    <p>The creator was a great speaker but spent 40+ hours per script. They needed a system, not just scripts.</p>
    <h3>The Framework</h3>
    <p><strong>Hook:</strong> Every script opens with a promise + a pattern interrupt. First 30 seconds = contract with the viewer.</p>
    <p><strong>Spine:</strong> 3 or 5 acts, never 4. The mid-point is always the highest complexity section — audiences accept friction if they trust the payoff is coming.</p>
    <p><strong>Retention loops:</strong> "Coming up later in this video..." placed at specific drop-off points based on analytics data.</p>
    <p><strong>CTA:</strong> Soft CTA at 60% of video, hard CTA in final 15 seconds. Never at the end of a section.</p>
    <h3>Tags</h3>`,
    descTags: ["Scripting", "Strategy", "Results"]
  },
  {
    id: 5,
    icon: "🔬",
    color: "#1a2030",
    accent: "#60a5fa",
    title: "Thumbnail A/B Testing at Scale — What Actually Moves CTR",
    channel: "Original Research",
    channelInitials: "OR",
    channelColor: "#2563eb",
    stats: "Data from 6 channels · 18 months",
    duration: "Deep Dive",
    tags: ["Thumbnails", "CTR Optimization", "Strategy", "Results"],
    playerTitle: "Thumbnail Research",
    playerSub: "Original analysis across 6 channels",
    headline: "Thumbnail A/B testing across 6 channels — the 8 variables that actually move CTR",
    meta: "Original Research · Jan 2022 – Jun 2023",
    metrics: [
      { val: "6", lbl: "Channels Analysed" },
      { val: "400+", lbl: "Thumbnails Tested" },
      { val: "18mo", lbl: "Data Period" },
      { val: "8", lbl: "Key Variables Found" },
    ],
    description: `<h3>The Question</h3>
    <p>Across all my client work, I tracked what thumbnail changes consistently moved CTR — and which "best practices" were actually myths.</p>
    <h3>The 8 Variables (ranked by impact)</h3>
    <p><strong>1. Face with emotion</strong> — real emotion > stock expression, every time.</p>
    <p><strong>2. Text contrast ratio</strong> — legible at 120x68px (mobile). Most thumbnails fail this.</p>
    <p><strong>3. Color isolation</strong> — subject pops when background is desaturated.</p>
    <p><strong>4. Text word count</strong> — 3–5 words optimal. 7+ = drop in CTR across all niches.</p>
    <p><strong>5. Negative space</strong> — clutter is the #1 killer.</p>
    <p><strong>6. Brand consistency</strong> — returning viewers click faster on familiar formats.</p>
    <p><strong>7. Curiosity gap vs clarity</strong> — niche-dependent. Clarity wins in search; curiosity wins in browse.</p>
    <p><strong>8. Mobile-first design</strong> — 70%+ of views come from mobile. Design for the small screen first.</p>
    <h3>Tags</h3>`,
    descTags: ["Thumbnails", "CTR Optimization", "Strategy", "Results"]
  },
  {
    id: 6,
    icon: "🎙️",
    color: "#2a1a2a",
    accent: "#e879f9",
    title: "Worked with a Podcast-to-YouTube Creator — Repurposing Strategy",
    channel: "Channel E · Podcast / Interview",
    channelInitials: "PI",
    channelColor: "#9333ea",
    stats: "150K subscribers · 2x growth",
    duration: "Case Study",
    tags: ["Channels", "Strategy", "Growth"],
    playerTitle: "Channel E — Podcast / Interview",
    playerSub: "YouTube Strategist · 8 months",
    headline: "Helped a podcast creator double their YouTube subscribers in 8 months",
    meta: "Podcast / Interview · Strategy + Packaging + Editing Direction · Apr 2022 – Nov 2022",
    metrics: [
      { val: "2x", lbl: "Subscriber Growth" },
      { val: "150K", lbl: "Subs After" },
      { val: "8mo", lbl: "Timeline" },
      { val: "5.1%", lbl: "Avg CTR" },
    ],
    description: `<h3>The Context</h3>
    <p>The creator had great guests and strong audio but was treating YouTube as a secondary platform — just uploading full podcast episodes with a static image.</p>
    <h3>The Fix</h3>
    <p><strong>Clip strategy:</strong> Identified 2–3 "YouTube moments" per episode — high-emotion, self-contained clips. These became shorts + teaser content.</p>
    <p><strong>Full episode packaging:</strong> Retitled, rethumbnailed all back catalogue. CTR went from 1.9% to 4.3% on existing videos.</p>
    <p><strong>Hooks:</strong> Added custom YouTube-only intros to each episode — 45 seconds that gave context for viewers who hadn't heard the podcast.</p>
    <h3>Tags</h3>`,
    descTags: ["Strategy", "Growth", "Channels", "CTR Optimization"]
  },
];

// ═══════════════════════════════════
// STATE
// ═══════════════════════════════════

let currentFilter = "All";
let sidebarOpen = true;

// ═══════════════════════════════════
// PAGE NAVIGATION
// ═══════════════════════════════════

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');

  document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  window.scrollTo(0, 0);
}

// ═══════════════════════════════════
// VIDEO CARDS
// ═══════════════════════════════════

function buildCard(v) {
  return `
    <div class="video-card" onclick="openWatch(${v.id})">
      <div class="thumbnail-wrap" style="background:${v.color}">
        <div class="thumbnail-placeholder">
          <div class="big-icon">${v.icon}</div>
          <div style="font-size:12px; color:${v.accent}; font-weight:600; text-transform:uppercase; letter-spacing:1px">${v.tags[0]}</div>
        </div>
        <div class="duration-badge">${v.duration}</div>
      </div>
      <div class="video-meta">
        <div class="channel-avatar" style="background:${v.channelColor}">${v.channelInitials}</div>
        <div class="video-info">
          <div class="video-title">${v.title}</div>
          <div class="video-channel">${v.channel}</div>
          <div class="video-stats">${v.stats}</div>
        </div>
      </div>
    </div>
  `;
}

function renderGrid(filter) {
  const grid = document.getElementById('videoGrid');
  const filtered = filter === 'All' ? VIDEOS : VIDEOS.filter(v => v.tags.includes(filter));
  grid.innerHTML = filtered.map(buildCard).join('');
}

// ═══════════════════════════════════
// CHIPS / FILTER
// ═══════════════════════════════════

function filterChip(name, el) {
  currentFilter = name;
  renderGrid(name);

  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  else {
    document.querySelectorAll('.chip').forEach(c => {
      if (c.textContent.trim().includes(name)) c.classList.add('active');
    });
  }
}

// ═══════════════════════════════════
// WATCH PAGE
// ═══════════════════════════════════

function openWatch(id) {
  const v = VIDEOS.find(x => x.id === id);
  if (!v) return;

  document.getElementById('watchIcon').textContent = v.icon;
  document.getElementById('watchTitle').textContent = v.playerTitle;
  document.getElementById('watchSub').textContent = v.playerSub;
  document.getElementById('watchPlayer').style.background = v.color;
  document.getElementById('watchHeadline').textContent = v.headline;
  document.getElementById('watchMeta').textContent = v.meta;

  const metricsHTML = v.metrics.map(m => `
    <div class="metric">
      <div class="metric-val">${m.val}</div>
      <div class="metric-lbl">${m.lbl}</div>
    </div>
  `).join('');

  const tagsHTML = v.descTags.map(t => `<span class="tag">${t}</span>`).join('');

  document.getElementById('watchDesc').innerHTML = `
    ${v.description}
    <div class="metric-row">${metricsHTML}</div>
    <div style="margin-top:12px">${tagsHTML}</div>
  `;

  const recs = VIDEOS.filter(x => x.id !== id).slice(0, 5);
  document.getElementById('recList').innerHTML = recs.map(r => `
    <div class="rec-card" onclick="openWatch(${r.id})">
      <div class="rec-thumb" style="background:${r.color}">
        <span style="font-size:28px">${r.icon}</span>
      </div>
      <div class="rec-info">
        <div class="rec-title">${r.title}</div>
        <div class="rec-channel">${r.channel}</div>
        <div class="rec-stats">${r.stats}</div>
      </div>
    </div>
  `).join('');

  showPage('watch');
}

// ═══════════════════════════════════
// SEARCH
// ═══════════════════════════════════

const searchIndex = VIDEOS.map(v => ({
  id: v.id,
  text: (v.title + ' ' + v.channel + ' ' + v.tags.join(' ')).toLowerCase()
}));

function handleSearch(q) {
  const drop = document.getElementById('searchDrop');
  if (!q.trim()) { drop.style.display = 'none'; return; }
  const results = searchIndex.filter(s => s.text.includes(q.toLowerCase())).slice(0, 5);
  if (!results.length) { drop.style.display = 'none'; return; }
  drop.style.display = 'block';
  drop.innerHTML = results.map(r => {
    const v = VIDEOS.find(x => x.id === r.id);
    return `<div class="search-result-item" onmousedown="openWatch(${v.id})">
      <span style="font-size:20px">${v.icon}</span>
      <span>${v.title}</span>
    </div>`;
  }).join('');
}

function showSearchDrop() {
  const q = document.getElementById('searchInput').value;
  if (q) handleSearch(q);
}

function hideSearchDrop() {
  setTimeout(() => { document.getElementById('searchDrop').style.display = 'none'; }, 200);
}

// ═══════════════════════════════════
// SIDEBAR TOGGLE
// ═══════════════════════════════════

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.querySelector('.main');
  sidebarOpen = !sidebarOpen;
  if (sidebarOpen) {
    sidebar.style.transform = 'translateX(0)';
    main.style.marginLeft = 'var(--sidebar-width)';
  } else {
    sidebar.style.transform = 'translateX(-100%)';
    main.style.marginLeft = '0';
  }
}

// ═══════════════════════════════════
// INIT
// ═══════════════════════════════════

renderGrid('All');
