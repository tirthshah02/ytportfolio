const VIDEOS = [
  {
    id: 1,
    icon: "🏎️",
    color: "linear-gradient(135deg,#0a0a0a 0%,#1a0505 50%,#3a0a0a 100%)",
    accent: "#dc1e28",
    channelInitials: "D61",
    channelColor: "#dc1e28",
    channel: "Driver61 · Scott Mansell · Thumbnail & Title Strategy",
    title: "Driver61: packaging overhaul for YouTube's #1 F1 channel — views up 42%",
    stats: "1.43M subscribers · 328M total views · avg 870K views per video",
    duration: "Channel Strategy",
    tags: ["Channels", "Strategy", "Thumbnails"],
    playerTitle: "Driver61",
    playerSub: "Thumbnail & Title Strategist · 14 months",
    headline: "Driver61: packaging overhaul for YouTube's most-subscribed F1 channel — CTR from 4.1% to 5.8%, views up 42%",
    meta: "Driver61 · F1 & Motorsport · Scott Mansell · Thumbnail strategy & title testing · 14 months",
    metrics: [
      { val: "1.43M", lbl: "Subscribers" },
      { val: "+42%", lbl: "Views per video" },
      { val: "5.8%", lbl: "CTR (from 4.1%)" },
      { val: "7M+", lbl: "Top video views" },
    ],
    description: `<p>Driver61 is YouTube's most-subscribed F1 channel — founded by professional racing driver Scott Mansell. 1.43M subscribers, 328M total views, built on technical depth: race analysis, driver coaching, engineering breakdowns. The content was excellent. The packaging wasn't keeping up.</p>
      <p><strong>Thumbnail rebuild:</strong> Thumbnails were leaning on race photography and team liveries — great for existing fans, invisible on the homepage feed. Moved to concept-led packaging: bold typography, single emotional focal point, high-contrast colour isolation. Tested 3 visual languages before landing on the one that consistently outperformed.</p>
      <p><strong>Title A/B testing:</strong> Ran 60+ title variants over 6 months. Curiosity gap titles outperformed clarity titles by 38% on browse — but lost in search. Built separate title formulas for each content bucket. Race analysis got curiosity hooks. Technical explainers got SEO-optimised clarity.</p>
      <p><strong>Result:</strong> Average views per video grew 42% over 14 months. CTR climbed from 4.1% to 5.8%. One repackaged back-catalogue video crossed 7M views — the channel's highest-performing video at the time.</p>`,
    descTags: ["Channels", "Strategy", "Thumbnails", "CTR Optimization"],
    channelUrl: "https://www.youtube.com/@Driver61",
  },
  {
    id: 2,
    icon: "📱",
    color: "linear-gradient(135deg,#0a0f1a 0%,#0f1f35 50%,#1a3050 100%)",
    accent: "#60a5fa",
    channelInitials: "SL",
    channelColor: "#2563eb",
    channel: "Snazzy Labs · Quinn Nelson · Thumbnail Overhaul",
    title: "Snazzy Labs: 200+ thumbnails redesigned — CTR lifted from 2.4% to 5.5%",
    stats: "1.6M subscribers · 200+ thumbnails redesigned · 1.2M new views in 3 months",
    duration: "Thumbnail Overhaul",
    tags: ["Thumbnails", "CTR Optimization", "Results"],
    playerTitle: "Snazzy Labs",
    playerSub: "Thumbnail Strategist · 6 months",
    headline: "Snazzy Labs: 200+ thumbnails redesigned — CTR from 2.4% to 5.5%, 1.2M new views without a single new upload",
    meta: "Snazzy Labs · Consumer Tech / Apple · Quinn Nelson · Thumbnail overhaul · 6 months",
    metrics: [
      { val: "5.5%", lbl: "CTR after (from 2.4%)" },
      { val: "200+", lbl: "Thumbnails redesigned" },
      { val: "1.2M", lbl: "New views in 3 months" },
      { val: "1.6M", lbl: "Subscribers" },
    ],
    description: `<p>Snazzy Labs is a 1.6M-subscriber consumer tech channel — rigorous Apple hardware analysis, smart home deep dives, real networking builds. Quinn Nelson built his reputation on no-BS honesty, and that extended to thumbnails: no shocked faces, no clickbait. The constraint was real. So was the CTR problem — stuck at 2.4% against a niche benchmark of 4%+.</p>
      <p><strong>Visual taxonomy:</strong> Audited every thumbnail across the channel's history into 7 archetypes. Tracked which performed per content category. Product-as-hero with strong colour isolation beat creator-on-camera by 31% for this audience. Text size mattered more than text wording.</p>
      <p><strong>Controlled A/B program:</strong> 200+ variants tested using YouTube's native tool. Held topic, title, and posting time constant — only the thumbnail changed. Rolled out back catalogue in order of highest live impressions first to maximise immediate impact.</p>
      <p><strong>Result:</strong> CTR moved from 2.4% to 5.5% sustained. The back catalogue generated 1.2M additional views from improved impression conversion alone — zero new content required.</p>`,
    descTags: ["Thumbnails", "CTR Optimization", "Results"],
    channelUrl: "https://www.youtube.com/@snazzy",
  },
  {
    id: 3,
    icon: "⌚",
    color: "linear-gradient(135deg,#0a1a15 0%,#0f2a20 50%,#1a4030 100%)",
    accent: "#4ade80",
    channelInitials: "DF",
    channelColor: "#16a34a",
    channel: "DesFit · Fitness Tech Reviews · Growth Strategy",
    title: "DesFit: title formula overhaul drove 34% CTR lift across review content",
    stats: "380K subscribers · +34% CTR on review videos · 120+ titles tested",
    duration: "Title Strategy",
    tags: ["Channels", "Strategy", "Growth", "CTR Optimization"],
    playerTitle: "DesFit",
    playerSub: "Title & Content Strategist · 7 months",
    headline: "DesFit: systematic title testing drove 34% CTR lift — and created a new content stream that didn't exist before",
    meta: "DesFit · Fitness Tech / GPS Watches · Title strategy & content ideation · 7 months",
    metrics: [
      { val: "+34%", lbl: "CTR on reviews" },
      { val: "380K", lbl: "Subscribers" },
      { val: "120+", lbl: "Titles tested" },
      { val: "51%", lbl: "Lift on 'After 6 months' format" },
    ],
    description: `<p>DesFit is a 380K-subscriber channel deep in the GPS watch, bike computer, and smart trainer space. Des has built one of the most trusted voices in fitness tech — detailed, honest, methodical reviews. But review-format videos were underperforming relative to their retention numbers. Strong content, wrong packaging.</p>
      <p><strong>Title taxonomy:</strong> Categorised 18 months of titles into 5 formulas. Mapped CTR and average view duration against each. "Is X actually worth it?" beat "X review" by 38%. "After 6 months with X" beat "X review" by 51%. Direct comparison titles only won when both products were already trending.</p>
      <p><strong>New content stream:</strong> The title data changed what got made. Commissioned long-term follow-up reviews 6 months after launch reviews — a format that didn't exist before and became the channel's highest CTR category.</p>
      <p><strong>Result:</strong> Average CTR on review-format videos climbed 34% over 7 months. The long-term follow-up format now runs independently as a core content pillar. Sponsor inbound improved as a downstream effect of higher CTR visibility.</p>`,
    descTags: ["Strategy", "CTR Optimization", "Growth", "Channels"],
    channelUrl: "https://www.youtube.com/@DesFit",
  },
  {
    id: 4,
    icon: "✍️",
    color: "linear-gradient(135deg,#1a1500 0%,#2a2200 50%,#3d3200 100%)",
    accent: "#fbbf24",
    channelInitials: "VQ",
    channelColor: "#d97706",
    channel: "vidIQ · YouTube Education · Scripting & Retention",
    title: "vidIQ: scripting framework that pushed avg retention to 63% across 50 videos",
    stats: "1M+ subscribers · 50 scripts · 63% avg retention · 4.2M total views",
    duration: "Scripting Framework",
    tags: ["Scripting", "Strategy", "Results"],
    playerTitle: "vidIQ",
    playerSub: "Head Scriptwriter · 14 months",
    headline: "vidIQ: built the scripting framework behind 50 videos, 4.2M views, and 63% average retention",
    meta: "vidIQ · YouTube Education & SaaS · Scripting + retention architecture · 14 months",
    metrics: [
      { val: "63%", lbl: "Avg retention" },
      { val: "50", lbl: "Scripts written" },
      { val: "4.2M", lbl: "Total views" },
      { val: "1M+", lbl: "Subscribers" },
    ],
    description: `<p>vidIQ is a YouTube SaaS platform with over 20 million creators using their tools — and a channel that teaches creators how to grow. The content needed to be genuinely useful, not just promotional. Strong creator, strong subject matter expertise, but scripts were taking 40+ hours each with inconsistent retention results.</p>
      <p><strong>The framework:</strong> Built a 4-part script architecture — hook (0–30s contract with the viewer), spine (3 or 5 acts, never 4 — the mid-point carries the highest complexity), retention loops (placed at analytically-identified drop-off points, not guessed), and CTA placement (soft at 60%, hard at final 15 seconds, always mid-thought so attention holds past the ask).</p>
      <p><strong>Process shift:</strong> Every title was tested as a concept before scripting began. If it didn't work as a title, it wasn't a strong enough idea. Scripting time dropped from 40+ hours to under 8 per video once the framework was internalised.</p>
      <p><strong>Result:</strong> 63% average retention across 50 scripts — consistently above YouTube's 40–50% benchmark for educational content. 4.2M cumulative views on the scripted content run.</p>`,
    descTags: ["Scripting", "Strategy", "Results"],
    channelUrl: "https://www.youtube.com/@vidIQ",
  },
  {
    id: 5,
    icon: "📊",
    color: "linear-gradient(135deg,#0f0f1f 0%,#1a1a35 50%,#252550 100%)",
    accent: "#a78bfa",
    channelInitials: "MC",
    channelColor: "#7c3aed",
    channel: "Multi-Channel Work · Lumicus, AboveTheGoal, CreatorRant & more",
    title: "What 400+ A/B tests across 6 channels actually taught me about packaging",
    stats: "6 channels · 400+ tests · niches: faceless, sports, creator economy",
    duration: "Research & Insights",
    tags: ["Thumbnails", "Strategy", "Results", "Growth"],
    playerTitle: "Cross-Channel Insights",
    playerSub: "Lumicus · AboveTheGoal · CreatorRant · Dave Jeltema · Matt Loui · and more",
    headline: "What 400+ A/B tests across Lumicus, AboveTheGoal, CreatorRant and 3 other channels taught me about what actually moves CTR",
    meta: "Multi-channel · Faceless explainer, sports storytelling, creator economy · Ongoing",
    metrics: [
      { val: "6", lbl: "Channels analysed" },
      { val: "400+", lbl: "A/B tests run" },
      { val: "11.2%", lbl: "Peak CTR achieved" },
      { val: "68%", lbl: "Avg retention (top channel)" },
    ],
    description: `<p>Across work with Lumicus (faceless hierarchy explainers — 0 to 450K in 8 months), AboveTheGoal (football storytelling — 89M views, 68% retention), CreatorRant, Dave Jeltema, and Matt Loui, I ran 400+ controlled thumbnail and title tests. This is what the data actually showed — not theory.</p>
      <p><strong>The 4 variables that moved the needle most:</strong> Authentic facial expression over posed (avg CTR delta +1.1%). Text legible at mobile thumbnail size — most thumbnails fail this. Word count at 3–5 optimal, 7+ hurt CTR across every single niche without exception. And the most misunderstood one: curiosity gap wins in browse traffic, clarity wins in search. Using the wrong formula in the wrong context actively hurts performance.</p>
      <p><strong>Faceless vs face-led:</strong> For faceless channels like Lumicus, the thumbnail's entire job is the title made visual. One dominant image, one 3-word statement, repeating visual grammar that builds feed recognition over time. Lumicus hit 11.2% peak CTR using this system.</p>
      <p><strong>Result:</strong> The testing framework is now built into how I approach every new channel — audit first, identify which variables are underperforming, test in controlled conditions, roll out systematically. Not guessing, not taste, data.</p>`,
    descTags: ["Thumbnails", "Strategy", "Results", "Growth"],
    channelUrl: "https://www.youtube.com/@Lumicus-yt",
  },
  {
    id: 6,
    icon: "☕",
    color: "linear-gradient(135deg,#1a0e07 0%,#2d1a0a 50%,#4a2e15 100%)",
    accent: "#f59e0b",
    channelInitials: "JH",
    channelColor: "#92400e",
    channel: "James Hoffmann · Specialty Coffee · Back-Catalogue Strategy",
    title: "James Hoffmann: back-catalogue repackage drove 58% lift on legacy videos",
    stats: "2.4M subscribers · 180+ videos repackaged · 58% avg lift on legacy views",
    duration: "Repackaging Project",
    tags: ["Channels", "Thumbnails", "Strategy", "Results"],
    playerTitle: "James Hoffmann",
    playerSub: "Packaging Strategist · 4 months",
    headline: "James Hoffmann: systematic back-catalogue repackage — 58% lift on legacy videos, one 4-year-old tutorial crossed 1M views for the first time",
    meta: "James Hoffmann · Specialty Coffee · 2.4M subscribers · Back-catalogue repackaging · 4 months",
    metrics: [
      { val: "2.4M", lbl: "Subscribers" },
      { val: "+58%", lbl: "Avg lift on legacy videos" },
      { val: "180+", lbl: "Videos repackaged" },
      { val: "1M+", lbl: "Views on reactivated tutorial" },
    ],
    description: `<p>James Hoffmann is one of YouTube's most respected creators — 2.4M subscribers, World Barista Champion, author of The World Atlas of Coffee. His back catalogue spans years of brewing tutorials, gear reviews, and coffee science. The content was excellent. Older videos were getting steady but unspectacular views — visible to search, almost invisible to browse.</p>
      <p><strong>Catalogue audit:</strong> Ranked 600+ legacy videos by views-to-watch-time ratio. Identified 180 with strong retention but weak CTR — the clearest repackaging candidates. These were videos people stayed for once they found them, but weren't clicking on from the feed.</p>
      <p><strong>Visual continuity constraint:</strong> James's brand is precision and restraint — the opposite of clickbait. New thumbnails had to feel premium and consistent with his aesthetic while improving focal hierarchy. Designed in his existing visual language, not against it. Titles were updated to match 2024 search behaviour without being rewritten.</p>
      <p><strong>Result:</strong> Legacy videos saw a 58% average lift in monthly views. One brewing tutorial from 4 years prior crossed 1M views for the first time. Average watch time on repackaged videos held at 9:40 — proof the content was always strong, just buried.</p>`,
    descTags: ["Thumbnails", "Strategy", "Results", "Channels"],
    channelUrl: "https://www.youtube.com/@jameshoffmann",
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

  // Add channel link to watch page if available
  const channelLinkEl = document.getElementById('watchChannelLink');
  if (v.channelUrl) {
    channelLinkEl.href = v.channelUrl;
    channelLinkEl.style.display = 'inline-flex';
  } else {
    channelLinkEl.style.display = 'none';
  }
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
