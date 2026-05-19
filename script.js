const VIDEOS = [
  {
    id: 1,
    icon: "🏎️",
    color: "linear-gradient(135deg,#0a0a0a 0%,#1a0505 50%,#3a0a0a 100%)",
    accent: "#dc1e28",
    channelInitials: "F1",
    channelColor: "#dc1e28",
    channel: "Premium F1 Channel · Thumbnail & Title Strategy",
    title: "Packaging strategy for a 1.2M-subscriber F1 channel — views up 42%",
    stats: "Avg 870K views per video · 6:12 watch time",
    duration: "Channel Strategy",
    tags: ["Channels", "Strategy", "Thumbnails"],
    playerTitle: "Premium F1 Channel",
    playerSub: "Thumbnail Strategist · 14 months",
    headline: "Packaging strategy for a 1.2M-subscriber F1 channel — views up 42%, CTR from 4.1% to 5.8%",
    meta: "Premium F1 / Motorsport · Thumbnail strategy & title testing · 14 months",
    metrics: [
      { val: "1.2M", lbl: "Subscribers" },
      { val: "+42%", lbl: "Views per video" },
      { val: "5.8%", lbl: "Avg CTR" },
      { val: "6:12", lbl: "Watch time" },
    ],
    description: `<h3>The channel</h3>
      <p>A 1.2M-subscriber F1 channel known for technical depth — race analysis, driver coaching, engineering breakdowns. Strong content, expert-led, but plateauing on browse traffic.</p>
      <h3>The diagnosis</h3>
      <p>Their thumbnails leaned heavily on race photography and team liveries. Great for fans who already knew the channel — invisible to the YouTube homepage feed where new viewers live.</p>
      <h3>What I worked on</h3>
      <p><strong>Thumbnail rebuild:</strong> Moved from photography-led to concept-led. Big bold typography, single emotional focal point, high-contrast colour isolation. Tested 3 visual languages before landing on the one that consistently outperformed.</p>
      <p><strong>Title A/B testing:</strong> Ran 60+ title variants over 6 months. Curiosity gap titles outperformed clarity titles by 38% on browse traffic, but lost in search. Built separate title formulas for each content bucket.</p>
      <p><strong>Browse vs search split:</strong> Mapped every video by traffic source intent before packaging. Race analysis = curiosity hook. Technical explainer = SEO-optimised clarity. No more one-size-fits-all approach.</p>
      <h3>The result</h3>
      <p>Average views per video grew 42% over 14 months. CTR climbed from 4.1% to 5.8%. A single repackaged back-catalogue video crossed 7M views — the channel's highest-performing video at the time of publication.</p>
      <h3>Tags</h3>`,
    descTags: ["Channels", "Strategy", "Thumbnails", "CTR Optimization"],
  },
  {
    id: 2,
    icon: "💻",
    color: "#1a1a2a",
    accent: "#60a5fa",
    title: "Redesigned 200+ thumbnails for a 500K sub tech channel — CTR 2.4% to 5.5%",
    channel: "Tech Education Channel · Thumbnail Overhaul",
    channelInitials: "TE",
    channelColor: "#2563eb",
    stats: "200+ thumbnails redesigned · 1.2M new views in 3 months",
    duration: "Case Study",
    tags: ["Channels", "Thumbnails", "CTR Optimization", "Results"],
    playerTitle: "Tech Education Channel",
    playerSub: "Thumbnail Strategist · 6 months",
    headline: "Redesigned 200+ thumbnails for a 500K sub tech channel — CTR went from 2.4% to 5.5%",
    meta: "Tech Education · Thumbnail Overhaul · Aug 2022 – Jan 2023",
    metrics: [
      { val: "5.5%", lbl: "CTR After" },
      { val: "2.4%", lbl: "CTR Before" },
      { val: "200+", lbl: "Thumbnails Redesigned" },
      { val: "1.2M", lbl: "New Views (3 months)" },
    ],
    description: `<h3>The channel</h3>
      <p>A 500K-subscriber tech education channel covering programming tutorials, productivity software, and developer tools. Consistent upload cadence, loyal subscriber base — but impression-to-click rate was stuck well below niche benchmarks.</p>
      <h3>The diagnosis</h3>
      <p>CTR at 2.4% meant they were being shown to the right people but failing to convert. Thumbnails were text-heavy, low contrast, and visually inconsistent — each video looked like it came from a different creator. No recognisable brand in the feed.</p>
      <h3>What I worked on</h3>
      <p><strong>Full audit:</strong> Mapped every video's CTR against topic type, face visibility, text character count, and contrast ratio. Clear patterns emerged: face + single bold callout + dark background dominated the top performers.</p>
      <p><strong>Design system:</strong> Built 3 repeatable thumbnail templates by content category — tutorial, opinion, and tool review. Consistent formatting across videos created feed recognition that compounded over time.</p>
      <p><strong>Rollout priority:</strong> A/B tested 12 thumbnail directions on recent high-impression videos before committing. Replaced back catalogue in order of highest live traffic first to maximise immediate impact.</p>
      <h3>The result</h3>
      <p>Channel CTR moved from 2.4% to 5.5% over 3 months. The back catalogue generated 1.2M additional views from improved impression conversion alone — zero new content required. Subscriber growth rate increased 31% without any change to upload frequency.</p>
      <h3>Tags</h3>`,
    descTags: ["Thumbnails", "CTR Optimization", "Results"],
  },
  {
    id: 3,
    icon: "🏋️",
    color: "#2a1a1a",
    accent: "#f87171",
    title: "Full content strategy for a fitness creator — 0 to 80K subscribers in 12 months",
    channel: "Health & Fitness Creator · Full Strategy",
    channelInitials: "HF",
    channelColor: "#dc2626",
    stats: "0 → 80K subscribers · 12 months · 14 videos over 100K views",
    duration: "Case Study",
    tags: ["Channels", "Growth", "Strategy"],
    playerTitle: "Health & Fitness Creator",
    playerSub: "Content Strategist · 12 months",
    headline: "Full content strategy for a fitness creator — 0 to 80K subscribers in 12 months",
    meta: "Health & Fitness · Strategy + Ideation + Scripting · Mar 2021 – Feb 2022",
    metrics: [
      { val: "80K", lbl: "Subscribers" },
      { val: "12mo", lbl: "Timeline" },
      { val: "3.9%", lbl: "Avg CTR" },
      { val: "14", lbl: "Videos over 100K views" },
    ],
    description: `<h3>The creator</h3>
      <p>A certified personal trainer with a decade of in-person coaching experience and zero YouTube presence. Wanted to build an audience around sustainable fitness — not fads, not quick fixes, not the content already saturating the space.</p>
      <h3>The strategy</h3>
      <p><strong>Niche positioning:</strong> "Fitness for busy professionals aged 30–45" — specific enough to own in search, broad enough to scale over time. Competitor analysis showed almost nobody was consistently targeting this demographic on YouTube.</p>
      <p><strong>Content architecture:</strong> 70% evergreen (search-driven workouts, nutrition guides, injury prevention) + 30% trend-riding (algorithm surfing, timely topics). This built a reliable view baseline with genuine viral upside when timing aligned.</p>
      <p><strong>Idea pipeline:</strong> Maintained a rolling 60-video idea backlog ranked by search volume, competition score, and creator fit. Nothing went into production without a data-backed reason for existing.</p>
      <p><strong>Scripting:</strong> Wrote or co-wrote 42 scripts over the year. Every hook was tested as a title before scripting began — if it didn't work as a title, it wasn't a good enough video idea.</p>
      <h3>The result</h3>
      <p>0 to 80K subscribers in 12 months. 14 videos crossed 100K views. The channel hit YouTube monetisation threshold in month 8. One video on lower back pain reached 2.4M views and drove 18K new subscribers in a single week.</p>
      <h3>Tags</h3>`,
    descTags: ["Strategy", "Growth", "Scripting", "Channels"],
  },
  {
    id: 4,
    icon: "📝",
    color: "#1a2a1a",
    accent: "#86efac",
    title: "50 scripts for a 300K business channel — the retention framework behind 4.2M views",
    channel: "Business & Finance Channel · Scripting",
    channelInitials: "BF",
    channelColor: "#16a34a",
    stats: "50 scripts · 4.2M total views · 63% avg retention",
    duration: "Framework",
    tags: ["Scripting", "Strategy", "Channels"],
    playerTitle: "Business & Finance Channel",
    playerSub: "Head Scriptwriter · 14 months",
    headline: "50 scripts for a 300K business channel — the hook & retention framework behind 4.2M views",
    meta: "Business Niche · Scripting + Research + Ideation · Sep 2021 – Oct 2022",
    metrics: [
      { val: "50", lbl: "Scripts Written" },
      { val: "4.2M", lbl: "Total Views" },
      { val: "63%", lbl: "Avg Retention" },
      { val: "300K", lbl: "Channel Subs" },
    ],
    description: `<h3>The situation</h3>
      <p>An experienced entrepreneur with genuine insights and a 300K subscriber base — but spending 40+ hours per script. They needed a repeatable system, not just individual scripts written on request.</p>
      <h3>The framework</h3>
      <p><strong>Hook (0–30s):</strong> Every script opens with a stated outcome + a pattern interrupt. The first sentence tells viewers exactly what they'll leave with. The second makes them doubt something they already believe. This creates a viewer contract in the first 15 seconds.</p>
      <p><strong>Structure:</strong> 3 or 5 acts, never 4. The mid-point is always the highest-complexity section — audiences accept friction at the halfway mark if they trust the payoff is coming. 4-act videos create a structural valley right where viewers drop off.</p>
      <p><strong>Retention loops:</strong> Placed at analytically-identified drop-off points, not guessed. Each "coming up..." preview is a genuine payoff tied directly to something promised in the hook — not filler.</p>
      <p><strong>CTA placement:</strong> Soft CTA at 60% of video length. Hard CTA in the final 15 seconds. Always placed mid-thought so the viewer holds attention past the CTA moment before processing it.</p>
      <h3>The result</h3>
      <p>63% average retention across 50 scripts — consistently above YouTube's 40–50% benchmark for the niche. The creator's scripting time dropped from 40+ hours to under 8. The framework is now something they run independently.</p>
      <h3>Tags</h3>`,
    descTags: ["Scripting", "Strategy", "Results"],
  },
  {
    id: 5,
    icon: "🔬",
    color: "#1a2030",
    accent: "#60a5fa",
    title: "Thumbnail A/B testing across 6 channels — the 8 variables that actually move CTR",
    channel: "Original Research · Multi-Channel Analysis",
    channelInitials: "OR",
    channelColor: "#2563eb",
    stats: "6 channels · 400+ thumbnails tested · 18 months of data",
    duration: "Deep Dive",
    tags: ["Thumbnails", "CTR Optimization", "Strategy", "Results"],
    playerTitle: "Thumbnail Research",
    playerSub: "Original analysis across 6 channels · 18 months",
    headline: "Thumbnail A/B testing across 6 channels — the 8 variables that actually move CTR",
    meta: "Original Research · Jan 2022 – Jun 2023",
    metrics: [
      { val: "6", lbl: "Channels Analysed" },
      { val: "400+", lbl: "Thumbnails Tested" },
      { val: "18mo", lbl: "Data Period" },
      { val: "8", lbl: "Key Variables Identified" },
    ],
    description: `<h3>The question</h3>
      <p>Across all my client work, I began systematically tracking what thumbnail changes moved CTR — and which widely-repeated "best practices" were myths or niche-specific flukes that didn't transfer.</p>
      <h3>The 8 variables (ranked by average impact across all 6 niches)</h3>
      <p><strong>1. Authentic facial expression</strong> — real, caught emotion outperforms posed or stock expressions consistently. Average CTR delta: 0.8–1.4%.</p>
      <p><strong>2. Text contrast ratio</strong> — legible at 120×68px (mobile thumbnail size). The majority of thumbnails I audited failed this. Fixing it alone lifted CTR 0.4–0.9%.</p>
      <p><strong>3. Subject isolation</strong> — desaturating or blurring the background so the focal point pops. Most effective in education and info niches.</p>
      <p><strong>4. Text word count</strong> — 3–5 words is optimal. At 7+ words, CTR dropped across all 6 niches without a single exception.</p>
      <p><strong>5. Negative space</strong> — clutter is the most common CTR killer. Removing one element improved performance in 73% of split tests.</p>
      <p><strong>6. Brand consistency</strong> — returning viewers click faster on familiar formats. After 20+ consistently formatted videos, CTR on existing-audience segments measurably increased.</p>
      <p><strong>7. Curiosity gap vs clarity</strong> — misunderstood by most creators. Curiosity wins in browse/homepage traffic. Clarity wins in search traffic. The wrong approach in the wrong context hurts performance significantly.</p>
      <p><strong>8. Mobile-first design</strong> — 68–74% of views across my clients came from mobile. Thumbnails designed at full desktop resolution routinely missed critical legibility failures at actual display size.</p>
      <h3>Tags</h3>`,
    descTags: ["Thumbnails", "CTR Optimization", "Strategy", "Results"],
  },
  {
    id: 6,
    icon: "🎙️",
    color: "#2a1a2a",
    accent: "#e879f9",
    title: "Helped a podcast creator double their YouTube subscribers in 8 months",
    channel: "Podcast / Interview Channel · YouTube Strategy",
    channelInitials: "PI",
    channelColor: "#9333ea",
    stats: "75K → 150K subscribers · CTR 1.9% → 4.3% · 8 months",
    duration: "Case Study",
    tags: ["Channels", "Strategy", "Growth"],
    playerTitle: "Podcast / Interview Channel",
    playerSub: "YouTube Strategist · 8 months",
    headline: "Helped a podcast creator double their YouTube subscribers in 8 months",
    meta: "Podcast / Interview · Strategy + Packaging + Editing Direction · Apr 2022 – Nov 2022",
    metrics: [
      { val: "2×", lbl: "Subscriber Growth" },
      { val: "150K", lbl: "Subscribers After" },
      { val: "8mo", lbl: "Timeline" },
      { val: "4.3%", lbl: "CTR After (from 1.9%)" },
    ],
    description: `<h3>The context</h3>
      <p>A genuine audio podcast with strong guests and loyal listenership — but treating YouTube as a secondary platform, uploading full 90-minute episodes over a static waveform image with no YouTube-native strategy applied.</p>
      <h3>The fix</h3>
      <p><strong>Clip strategy:</strong> Established a repeatable process for identifying 2–3 "YouTube moments" per episode — high-emotion exchanges, counterintuitive statements, genuine surprise reactions. These became standalone Shorts and 8–12 minute companion clips.</p>
      <p><strong>Back catalogue repackage:</strong> Retitled and rethumbnailed 60 existing episodes without reuploading. Average CTR on the back catalogue went from 1.9% to 4.3% — purely from packaging changes on existing content.</p>
      <p><strong>YouTube-native intros:</strong> Added custom 45-second intros recorded specifically for YouTube, giving context and hook for viewers arriving without podcast familiarity. Retention in the first 2 minutes improved 22%.</p>
      <p><strong>Guest leverage:</strong> Built a system for guests to share YouTube-optimised clips — not just audio embeds. This drove meaningful referral traffic from guest audiences who had never encountered the podcast.</p>
      <h3>The result</h3>
      <p>75K to 150K subscribers in 8 months. Monthly views doubled. The Shorts strategy generated 11M short-form views over 6 months and converted at an above-average rate to long-form subscribers.</p>
      <h3>Tags</h3>`,
    descTags: ["Strategy", "Growth", "Channels", "CTR Optimization"],
  },
  {
    id: 7,
    icon: "💰",
    color: "#0f2010",
    accent: "#4ade80",
    title: "Took a personal finance channel from 45K to 280K subscribers in 18 months",
    channel: "Personal Finance Channel · Growth & Repositioning",
    channelInitials: "PF",
    channelColor: "#15803d",
    stats: "45K → 280K subscribers · 3 videos over 1M views · 18 months",
    duration: "Case Study",
    tags: ["Channels", "Growth", "Strategy", "Results"],
    playerTitle: "Personal Finance Channel",
    playerSub: "YouTube Strategist · 18 months",
    headline: "Took a personal finance channel from 45K to 280K subscribers in 18 months — 3 videos crossed 1M views",
    meta: "Personal Finance · Strategy + Repositioning + Packaging · Jan 2022 – Jun 2023",
    metrics: [
      { val: "280K", lbl: "Subscribers" },
      { val: "+522%", lbl: "Subscriber Growth" },
      { val: "3", lbl: "Videos over 1M views" },
      { val: "6.4%", lbl: "CTR After (from 3.1%)" },
    ],
    description: `<h3>The channel</h3>
      <p>A CFA-qualified analyst running a personal finance channel. Highly credible content, rigorous research — but positioned too narrowly around investment theory. The kind of content that attracts professionals who already understand investing, not the mass audience searching "how do I actually save money."</p>
      <h3>The repositioning</h3>
      <p><strong>Audience shift:</strong> Moved from "smart money" positioning (targeting people who understand investing) to "money clarity" (targeting people who feel behind and overwhelmed). Same creator expertise, completely different framing and entry point.</p>
      <p><strong>Title restructuring:</strong> Replaced jargon-heavy titles with outcome-based ones. "Understanding dollar-cost averaging in a volatile market" became "How I'd invest £10,000 right now (step by step)." CTR on the first batch of retitled videos increased 2.3×.</p>
      <p><strong>Content calendar redesign:</strong> Built a 4-type content system: evergreen fundamentals, timely personal finance news reaction, personal story/case study, and myth-busting format. Each type served a different algorithmic function — search, news surfing, emotional connection, and shareability.</p>
      <p><strong>Thumbnail rebuild:</strong> Moved away from stock-photo corporate imagery. New direction: creator's face + numerical hook + single clean background. CTR went from 3.1% to 6.4%.</p>
      <h3>The result</h3>
      <p>45K to 280K subscribers in 18 months — a 522% increase. Three videos crossed 1M views. The channel's RPM also increased as the audience broadened into more ad-friendly demographics. Monthly revenue tripled alongside subscriber growth.</p>
      <h3>Tags</h3>`,
    descTags: ["Growth", "Strategy", "Channels", "CTR Optimization", "Results"],
  },
  {
    id: 8,
    icon: "🎮",
    color: "#1a1030",
    accent: "#a78bfa",
    title: "Revived a declining gaming channel — monthly views recovered 3× in 6 months",
    channel: "Gaming Channel · Recovery & Relaunch Strategy",
    channelInitials: "GC",
    channelColor: "#7c3aed",
    stats: "300K subs · 3× views recovery · CTR 3.2% → 6.1%",
    duration: "Case Study",
    tags: ["Channels", "Strategy", "Growth", "Thumbnails"],
    playerTitle: "Gaming Channel",
    playerSub: "Content & Packaging Strategist · 6 months",
    headline: "Revived a declining gaming channel — monthly views recovered 3× in 6 months without growing the team",
    meta: "Gaming · Strategy + Packaging + Thumbnail Redesign · Feb 2023 – Jul 2023",
    metrics: [
      { val: "3×", lbl: "Views Recovery" },
      { val: "300K", lbl: "Subscribers" },
      { val: "6mo", lbl: "Timeline" },
      { val: "+91%", lbl: "CTR Lift" },
    ],
    description: `<h3>The situation</h3>
      <p>A 300K-subscriber gaming channel that had been coasting for 2 years. Monthly views had declined 68% from their peak. The creator was uploading the same content formats that worked in 2020 — but the algorithm and audience expectations had shifted considerably since then.</p>
      <h3>The diagnosis</h3>
      <p>A full channel audit identified three compounding problems: thumbnails were visually indistinguishable from thousands of other gaming creators; video formats hadn't evolved with what the algorithm was actively distributing; and upload cadence had become erratic — signalling channel instability to YouTube's recommendation system.</p>
      <h3>What I worked on</h3>
      <p><strong>Content format pivot:</strong> Shifted from pure gameplay recording to character-driven commentary. The creator's personality was the unique asset — raw footage wasn't. Rebuilt video types around perspective-first content where the creator's voice and opinion were the draw.</p>
      <p><strong>Thumbnail overhaul:</strong> Developed a new visual identity: creator face in 60% of frame, game-specific accent colours, single bold statement in 4 words or fewer. CTR went from 3.2% to 6.1%.</p>
      <p><strong>Upload rhythm:</strong> Fixed cadence to 2× per week and held it with no exceptions for 6 months. YouTube's recommendation engine showed measurable response within 8 weeks of the consistent schedule.</p>
      <p><strong>Title strategy:</strong> Moved from gameplay-description titles to opinion and reaction formats — the content types the algorithm was actively distributing across the gaming space during this period.</p>
      <h3>The result</h3>
      <p>Monthly views recovered 3× from their low point within 6 months. CTR moved from 3.2% to 6.1%. Two videos were picked up organically by YouTube's recommendation engine and each crossed 800K views — the channel's first genuine breakout content in over two years.</p>
      <h3>Tags</h3>`,
    descTags: ["Strategy", "Growth", "Thumbnails", "Channels"],
  },
  {
    id: 9,
    icon: "✈️",
    color: "#102030",
    accent: "#38bdf8",
    title: "Built a content system for a travel creator — consistent 200K+ views per video",
    channel: "Travel & Lifestyle Channel · Content System Build",
    channelInitials: "TL",
    channelColor: "#0284c7",
    stats: "180K subs · avg 210K views per video · 5.2% CTR",
    duration: "Case Study",
    tags: ["Channels", "Strategy", "Scripting"],
    playerTitle: "Travel & Lifestyle Channel",
    playerSub: "Content Strategist & Scriptwriter · 10 months",
    headline: "Built a full content system for a travel creator — consistent 200K+ views per video across 10 months",
    meta: "Travel & Lifestyle · Strategy + Scripting + Ideation · Jun 2022 – Mar 2023",
    metrics: [
      { val: "210K", lbl: "Avg Views per Video" },
      { val: "5.2%", lbl: "Avg CTR" },
      { val: "180K", lbl: "Subscribers" },
      { val: "10mo", lbl: "Engagement Period" },
    ],
    description: `<h3>The creator</h3>
      <p>A full-time travel creator with a genuine gift for cinematography — but no repeatable content system. Every upload was a creative event, which meant output was inconsistent and performance was wildly variable: anywhere from 30K to 600K views with no predictability or pattern.</p>
      <h3>The problem</h3>
      <p>YouTube's recommendation engine needs a consistent signal to know who to show a channel to. Wildly different formats, topics, and packaging each upload made it nearly impossible for the algorithm to build a reliable audience model for the channel. The unpredictability was algorithmic, not just operational.</p>
      <h3>What I built</h3>
      <p><strong>Content pillars:</strong> Defined 4 repeatable content types — destination guides (search-driven), "vs" comparison videos (curiosity-driven), behind-the-scenes process (community-building), and opinion/essay pieces (shareable). Each type had its own scripting template, thumbnail formula, and distribution intent.</p>
      <p><strong>Pre-production brief:</strong> Created a mandatory brief template completed before any filming began. Title, hook, 3 promised payoffs, thumbnail concept, target audience intent. This ended expensive reshoots and ensured every video had a YouTube-first concept before a camera came out.</p>
      <p><strong>Scripting structure:</strong> Wrote or outlined 28 scripts. Travel content lives or dies by narrative pacing — I structured each video around 3 emotional beats rather than itinerary order, which significantly improved mid-video retention curves.</p>
      <h3>The result</h3>
      <p>Average views per video stabilised at 210K — from a wildly inconsistent baseline. CTR held at 5.2% across the period. Three videos were featured in YouTube's "What to Watch" recommendations panel. The creator now runs the system independently.</p>
      <h3>Tags</h3>`,
    descTags: ["Strategy", "Scripting", "Channels", "Growth"],
  },
  {
    id: 10,
    icon: "🧠",
    color: "#201a10",
    accent: "#fbbf24",
    title: "Developed a viral hook framework — 3 videos hit 1M+ views in 4 months",
    channel: "Self-Improvement Channel · Hook Strategy & Scripting",
    channelInitials: "SI",
    channelColor: "#d97706",
    stats: "220K subs · 3 videos over 1M views · 71% avg retention",
    duration: "Framework",
    tags: ["Scripting", "Strategy", "Results", "Growth"],
    playerTitle: "Self-Improvement Channel",
    playerSub: "Scriptwriter & Strategist · 4 months",
    headline: "Developed a viral hook framework for a self-improvement channel — 3 videos hit 1M+ views in 4 months",
    meta: "Self-Improvement / Productivity · Hook Development + Scripting · Mar 2023 – Jun 2023",
    metrics: [
      { val: "3", lbl: "Videos over 1M views" },
      { val: "220K", lbl: "Subscribers" },
      { val: "71%", lbl: "Avg Retention (hook videos)" },
      { val: "4mo", lbl: "Timeline" },
    ],
    description: `<h3>The channel</h3>
      <p>A 220K-subscriber self-improvement and productivity channel. Good production quality, credible creator, steady 80–120K views per video. Not in decline — just unable to break through. The creator wanted to understand what separated their 400K-view outliers from their 70K-view averages, and replicate it deliberately.</p>
      <h3>The finding</h3>
      <p>After analysing 40 of the channel's own videos and 120 competitor videos across the space, the pattern was consistent: every outlier had a hook that made the viewer feel something they believed was wrong. Not "here's how to be more productive" but "the reason your productivity system isn't working (and it's not the system)." The hook created cognitive tension that only watching could resolve.</p>
      <h3>The framework</h3>
      <p><strong>The Reframe Hook:</strong> The first 20 seconds state a widely-held belief, momentarily agree with it, then introduce a specific contradiction. This creates tension the viewer can only resolve by continuing to watch.</p>
      <p><strong>Hook-title alignment:</strong> Every title is now the reframe written in 6 words or fewer. The thumbnail shows the creator mid-reaction — the facial expression that matches the exact moment the contradiction lands.</p>
      <p><strong>Payoff architecture:</strong> The resolution of the hook is placed at the 60–70% mark, not at the beginning. All content before that point deepens the tension and makes the eventual answer feel earned rather than obvious.</p>
      <p><strong>Cold opens:</strong> Removed all channel intros. Every video starts mid-sentence — the viewer is dropped into the contradiction before they've had a moment to decide whether to stay.</p>
      <h3>The result</h3>
      <p>Three videos using the framework crossed 1M views in 4 months — the channel's first 1M+ videos ever. Average retention on hook-framework videos was 71%, against the channel's previous average of 48%. The creator has since used the framework independently to produce two further 1M+ videos without additional input.</p>
      <h3>Tags</h3>`,
    descTags: ["Scripting", "Strategy", "Results", "Growth"],
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
