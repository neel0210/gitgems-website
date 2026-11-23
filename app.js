// GitGems Web Client - Clean, Simple, Advanced
document.addEventListener('DOMContentLoaded', () => {
  let gemsData = [];
  let currentFilter = 'all';
  let searchQuery = '';

  const gemsContainer = document.getElementById('gems-list');
  const newsContainer = document.getElementById('news-list');
  const searchInput = document.getElementById('search-input');
  const repoModal = document.getElementById('repo-modal');
  const modalVideo = document.getElementById('modal-video');
  const submitModal = document.getElementById('submit-modal');

  function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return String(num || 0);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  fetch('data/gems.json')
    .then(r => r.json())
    .then(data => {
      gemsData = data;
      renderGems();
    })
    .catch(() => {
      // Fallback
      gemsData = [
        {
          "id": "claude-bughunter",
          "name": "Claude-BugHunter",
          "fullName": "elementalsouls/Claude-BugHunter",
          "owner": "elementalsouls",
          "avatar": "https://github.com/elementalsouls.png",
          "description": "A Claude Code skill bundle for bug hunting and external red-team work - 82 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices.",
          "stars": 18027,
          "starsToday": 1716,
          "forks": 1983,
          "language": "Python",
          "languageColor": "#3572A5",
          "topics": [
            "python",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/elementalsouls/Claude-BugHunter"
        },
        {
          "id": "superpowers",
          "name": "superpowers",
          "fullName": "obra/superpowers",
          "owner": "obra",
          "avatar": "https://github.com/obra.png",
          "description": "An agentic skills framework & software development methodology that works.",
          "stars": 324245,
          "starsToday": 788,
          "forks": 28762,
          "language": "Shell",
          "languageColor": "#89E051",
          "topics": [
            "shell",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/obra/superpowers"
        },
        {
          "id": "cli-anything",
          "name": "CLI-Anything",
          "fullName": "HKUDS/CLI-Anything",
          "owner": "HKUDS",
          "avatar": "https://github.com/HKUDS.png",
          "description": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
          "stars": 62872,
          "starsToday": 699,
          "forks": 5706,
          "language": "Python",
          "languageColor": "#3572A5",
          "topics": [
            "python",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/HKUDS/CLI-Anything"
        },
        {
          "id": "minimind",
          "name": "minimind",
          "fullName": "jingyaogong/minimind",
          "owner": "jingyaogong",
          "avatar": "https://github.com/jingyaogong.png",
          "description": "🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from scratch in 2 hours.",
          "stars": 68789,
          "starsToday": 473,
          "forks": 8989,
          "language": "Python",
          "languageColor": "#3572A5",
          "topics": [
            "python",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/jingyaogong/minimind"
        },
        {
          "id": "plugins",
          "name": "plugins",
          "fullName": "cursor/plugins",
          "owner": "cursor",
          "avatar": "https://github.com/cursor.png",
          "description": "Cursor plugin specification and official plugins",
          "stars": 18492,
          "starsToday": 294,
          "forks": 2010,
          "language": "TypeScript",
          "languageColor": "#3178C6",
          "topics": [
            "typescript",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/cursor/plugins"
        },
        {
          "id": "firecrawl",
          "name": "firecrawl",
          "fullName": "firecrawl/firecrawl",
          "owner": "firecrawl",
          "avatar": "https://github.com/firecrawl.png",
          "description": "Knowledge infrastructure to make your agents smarter. Search, scrape and access 550+ data providers through one API.",
          "stars": 207122,
          "starsToday": 915,
          "forks": 10824,
          "language": "TypeScript",
          "languageColor": "#3178C6",
          "topics": [
            "typescript",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/firecrawl/firecrawl"
        },
        {
          "id": "nginx",
          "name": "nginx",
          "fullName": "nginx/nginx",
          "owner": "nginx",
          "avatar": "https://github.com/nginx.png",
          "description": "The official NGINX Open Source repository.",
          "stars": 32906,
          "starsToday": 163,
          "forks": 8382,
          "language": "C",
          "languageColor": "#555555",
          "topics": [
            "c",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/nginx/nginx"
        },
        {
          "id": "openvino",
          "name": "openvino",
          "fullName": "openvinotoolkit/openvino",
          "owner": "openvinotoolkit",
          "avatar": "https://github.com/openvinotoolkit.png",
          "description": "OpenVINO™ is an open source toolkit for optimizing and deploying AI inference",
          "stars": 12110,
          "starsToday": 158,
          "forks": 3660,
          "language": "C++",
          "languageColor": "#F34B7D",
          "topics": [
            "c++",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/openvinotoolkit/openvino"
        },
        {
          "id": "diagram-design",
          "name": "diagram-design",
          "fullName": "cathrynlavery/diagram-design",
          "owner": "cathrynlavery",
          "avatar": "https://github.com/cathrynlavery.png",
          "description": "Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, Qoder, and Pi. 45 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop.",
          "stars": 70382,
          "starsToday": 518,
          "forks": 4718,
          "language": "HTML",
          "languageColor": "#E34C26",
          "topics": [
            "html",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/cathrynlavery/diagram-design"
        },
        {
          "id": "last30days-skill",
          "name": "last30days-skill",
          "fullName": "mvanhorn/last30days-skill",
          "owner": "mvanhorn",
          "avatar": "https://github.com/mvanhorn.png",
          "description": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
          "stars": 72827,
          "starsToday": 668,
          "forks": 6431,
          "language": "Python",
          "languageColor": "#3572A5",
          "topics": [
            "python",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/mvanhorn/last30days-skill"
        },
        {
          "id": "stitch-skills",
          "name": "stitch-skills",
          "fullName": "google-labs-code/stitch-skills",
          "owner": "google-labs-code",
          "avatar": "https://github.com/google-labs-code.png",
          "description": "A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor.",
          "stars": 11965,
          "starsToday": 494,
          "forks": 1475,
          "language": "TypeScript",
          "languageColor": "#3178C6",
          "topics": [
            "typescript",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/google-labs-code/stitch-skills"
        },
        {
          "id": "app-store-compliance",
          "name": "app-store-compliance",
          "fullName": "mjmirza/app-store-compliance",
          "owner": "mjmirza",
          "avatar": "https://github.com/mjmirza.png",
          "description": "Avoid common App Store and Google Play rejections. Open playbook and pre-submission guard with 124 documented rejection patterns and fixes, privacy manifest and Data safety checks, 112 tracked deadlines (EU AI Act, DSA, COPPA, age laws), and a skill for AI coding agents.",
          "stars": 4072,
          "starsToday": 621,
          "forks": 242,
          "language": "Shell",
          "languageColor": "#89E051",
          "topics": [
            "shell",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/mjmirza/app-store-compliance"
        },
        {
          "id": "opensre",
          "name": "opensre",
          "fullName": "Tracer-Cloud/opensre",
          "owner": "Tracer-Cloud",
          "avatar": "https://github.com/Tracer-Cloud.png",
          "description": "The open-source agent for CI/CD reliability.",
          "stars": 14465,
          "starsToday": 399,
          "forks": 1966,
          "language": "Python",
          "languageColor": "#3572A5",
          "topics": [
            "python",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/Tracer-Cloud/opensre"
        },
        {
          "id": "affine",
          "name": "AFFiNE",
          "fullName": "toeverything/AFFiNE",
          "owner": "toeverything",
          "avatar": "https://github.com/toeverything.png",
          "description": "There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",
          "stars": 76885,
          "starsToday": 542,
          "forks": 5630,
          "language": "TypeScript",
          "languageColor": "#3178C6",
          "topics": [
            "typescript",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/toeverything/AFFiNE"
        },
        {
          "id": "ghost-downloader-3",
          "name": "Ghost-Downloader-3",
          "fullName": "XiaoYouChR/Ghost-Downloader-3",
          "owner": "XiaoYouChR",
          "avatar": "https://github.com/XiaoYouChR.png",
          "description": "The only downloader you need. 下载器的集大成者。",
          "stars": 15297,
          "starsToday": 701,
          "forks": 918,
          "language": "Python",
          "languageColor": "#3572A5",
          "topics": [
            "python",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/XiaoYouChR/Ghost-Downloader-3"
        },
        {
          "id": "autoclip",
          "name": "autoclip",
          "fullName": "zhouxiaoka/autoclip",
          "owner": "zhouxiaoka",
          "avatar": "https://github.com/zhouxiaoka.png",
          "description": "AutoClip｜一个链接，一键出片。开源 AI 视频剪辑桌面工具，将播客、访谈、课程等长视频自动剪成短视频，生成字幕、封面和发布文案，适配抖音、小红书、TikTok、Reels 与 YouTube Shorts。Open-source AI video clipping & content repurposing.",
          "stars": 13581,
          "starsToday": 641,
          "forks": 2137,
          "language": "Python",
          "languageColor": "#3572A5",
          "topics": [
            "python",
            "trending",
            "github"
          ],
          "hasReel": false,
          "reelVideo": "",
          "url": "https://github.com/zhouxiaoka/autoclip"
        }
      ];
      renderGems();
    });

  // Load News Items for Carousel Radar
  function renderNews(newsItems) {
    if (!newsContainer) return;
    if (!newsItems || newsItems.length === 0) {
      newsContainer.innerHTML = '<p class="text-xs text-slate-500 font-mono col-span-full">News radar updating...</p>';
      return;
    }
    newsContainer.innerHTML = newsItems.map(item => `
      <div class="repo-card rounded-xl p-4 flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
              ${escapeHtml(item.pillar || 'NEWS')}
            </span>
            <span class="text-[10px] font-mono text-slate-500 truncate max-w-[120px]">
              ${escapeHtml(item.source || 'Radar')}
            </span>
          </div>

          <h3 class="font-heading text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2 line-clamp-2">
            <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a>
          </h3>

          <p class="text-[11px] text-slate-400 font-mono mb-3">
            ${escapeHtml(item.meta || '')}
          </p>
        </div>

        <div class="pt-2 border-t border-white/[0.06] flex items-center justify-between">
          <span class="text-[10px] font-mono text-purple-400/90 flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            Carousel ready
          </span>
          <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-all text-[11px] font-mono flex items-center gap-1">
            Read ↗
          </a>
        </div>
      </div>
    `).join('');
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  fetch('data/news.json')
    .then(r => r.json())
    .then(data => renderNews(data))
    .catch(() => {
      renderNews([
        {
          title: "87% of Anthropic power will come from gas and 11% from coal in 2028",
          url: "https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/",
          source: "Hacker News",
          pillar: "NEWS",
          meta: "911 points, 908 comments"
        },
        {
          title: "A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth",
          url: "https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth",
          source: "Hacker News",
          pillar: "PRO TIP",
          meta: "303 points, 128 comments"
        },
        {
          title: "Fast-Anything: Don't rewrite it in Rust. Rewrite the 5% that's slow",
          url: "https://github.com/EL4CTEO/fast-anything",
          source: "Hacker News",
          pillar: "GEM",
          meta: "181 points, 153 comments"
        },
        {
          title: "Signal restricts mobile screenshots confronting AI surveillance",
          url: "https://techcrunch.com/2026/11/21/signal-restricts-mobile-screenshots-as-it-confronts-existential-threat-of-ai-surveillance/",
          source: "TechCrunch AI",
          pillar: "NEWS",
          meta: "TechCrunch AI"
        }
      ]);
    });

  function renderGems() {
    if (!gemsContainer) return;

    const filtered = gemsData.filter(gem => {
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q ||
        (gem.name && gem.name.toLowerCase().includes(q)) ||
        (gem.fullName && gem.fullName.toLowerCase().includes(q)) ||
        (gem.description && gem.description.toLowerCase().includes(q)) ||
        (gem.topics && gem.topics.some(t => t.toLowerCase().includes(q)));

      const matchesFilter = currentFilter === 'all' ||
        (gem.language && gem.language.toLowerCase() === currentFilter.toLowerCase()) ||
        (gem.topics && gem.topics.includes(currentFilter.toLowerCase()));

      return matchesSearch && matchesFilter;
    });

    const repoCountEl = document.getElementById('repo-count');
    if (repoCountEl) {
      repoCountEl.textContent = `${filtered.length} repositories`;
    }

    if (filtered.length === 0) {
      gemsContainer.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-500 font-mono text-xs">
          <p class="text-sm font-semibold text-slate-300">No repositories match your filter</p>
          <button onclick="window.resetFilters()" class="mt-4 px-3 py-1.5 rounded-lg btn-ghost text-xs">Reset Filters</button>
        </div>
      `;
      return;
    }

    gemsContainer.innerHTML = filtered.map((gem, index) => {
      const safeName = escapeHtml(gem.name || '');
      const safeFullName = escapeHtml(gem.fullName || '');
      const safeVideo = escapeHtml(gem.reelVideo || '');
      const safeDesc = escapeHtml(gem.description || '');
      const safeLang = escapeHtml(gem.language || 'Code');
      const safeColor = escapeHtml(gem.languageColor || '#a855f7');
      const safeUrl = escapeHtml(gem.url || `https://github.com/${gem.fullName || ''}`);
      const safeAvatar = escapeHtml(gem.avatar || `https://github.com/${gem.owner || 'github'}.png`);

      return `
      <div class="repo-card rounded-xl p-4 sm:p-5 flex flex-col justify-between group min-w-0">
        <div class="min-w-0">
          <!-- Header -->
          <div class="flex items-start justify-between gap-2.5 mb-2.5 min-w-0">
            <div class="flex items-center gap-2.5 min-w-0 flex-1">
              <span class="rank-badge text-[11px] px-1.5 py-0.5 shrink-0">#${String(index + 1).padStart(2, '0')}</span>
              <img src="${safeAvatar}" alt="${escapeHtml(gem.owner || '')}" class="w-8 h-8 rounded-lg bg-black border border-white/10 shrink-0 object-cover" onerror="this.src='logo.png'">
              <div class="min-w-0 flex-1">
                <a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="font-heading text-sm font-bold text-white group-hover:text-purple-400 transition-colors flex items-center gap-1 truncate">
                  <span class="truncate">${safeFullName}</span>
                  <svg class="w-3 h-3 shrink-0 opacity-40 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                </a>
                <span class="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 mt-0.5">
                  <span class="w-1.5 h-1.5 rounded-full shrink-0" style="background-color: ${safeColor}"></span>
                  <span>${safeLang}</span>
                </span>
              </div>
            </div>

            <!-- Stats -->
            <div class="flex items-center gap-1 shrink-0 flex-wrap">
              ${gem.starsToday ? `
                <span class="flex items-center gap-1 text-emerald-400 font-mono text-[11px] font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 whitespace-nowrap">
                  +${formatNumber(gem.starsToday)}
                </span>
              ` : ''}
              <div class="flex items-center gap-1 text-slate-300 font-mono text-xs font-semibold bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06] whitespace-nowrap">
                <svg class="w-3 h-3 fill-amber-400 text-amber-400" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ${formatNumber(gem.stars)}
              </div>
            </div>
          </div>

          <!-- Description -->
          <p class="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2 break-words font-normal">
            ${safeDesc}
          </p>

          <!-- Topics -->
          <div class="flex flex-wrap gap-1 mb-4">
            ${(gem.topics || []).map(t => `<span class="text-[10px] px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 font-mono border border-white/[0.04]">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>

        <!-- Action Bar -->
        <div class="pt-2.5 border-t border-white/[0.06] flex items-center justify-between gap-2">
          ${gem.hasReel ? `
            <button onclick="window.playReel('${safeName}', '${safeVideo}', '${safeFullName}')" class="px-3 py-1 rounded-md btn-electric text-xs font-semibold flex items-center gap-1.5">
              <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Watch Reel
            </button>
          ` : `
            <span class="text-[11px] text-slate-500 font-mono flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span>
              Verified
            </span>
          `}

          <div class="flex items-center gap-1.5">
            ${gem.website ? `
              <a href="${escapeHtml(gem.website)}" target="_blank" rel="noopener noreferrer" class="px-2 py-1 rounded-md bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all text-[11px] font-mono">
                Site ↗
              </a>
            ` : ''}
            <a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-md btn-ghost text-xs font-mono font-medium flex items-center gap-1">
              Code
            </a>
          </div>
        </div>
      </div>
    `;
    }).join('');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderGems();
    });
  }

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  window.resetFilters = function () {
    searchQuery = '';
    currentFilter = 'all';
    if (searchInput) searchInput.value = '';
    renderGems();
  };

  window.playReel = function (name, videoUrl, fullName) {
    if (!repoModal) return;
    const titleEl = document.getElementById('modal-title');
    const slugEl = document.getElementById('modal-slug');
    if (titleEl) titleEl.innerText = name || 'Reel Preview';
    if (slugEl) {
      slugEl.innerText = fullName || '';
      slugEl.href = fullName ? `https://github.com/${fullName}` : '#';
    }

    if (modalVideo) {
      modalVideo.src = videoUrl || 'output/locally-uncensored_reel.mp4';
      modalVideo.play().catch(() => { });
    }
    repoModal.classList.remove('hidden');
    repoModal.classList.add('flex');
  };

  window.closeModal = function () {
    if (!repoModal) return;
    if (modalVideo) modalVideo.pause();
    repoModal.classList.add('hidden');
    repoModal.classList.remove('flex');
  };

  window.openSubmitModal = function () {
    if (submitModal) {
      submitModal.classList.remove('hidden');
      submitModal.classList.add('flex');
    }
  };

  window.closeSubmitModal = function () {
    if (submitModal) {
      submitModal.classList.add('hidden');
      submitModal.classList.remove('flex');
      const notice = document.getElementById('modal-success-notice');
      const errNotice = document.getElementById('modal-error-notice');
      if (notice) notice.classList.add('hidden');
      if (errNotice) errNotice.classList.add('hidden');
    }
  };

  window.handleModalSubmit = async function (e) {
    e.preventDefault();
    const repoInput = document.getElementById('modal-repo-url');
    const emailInput = document.getElementById('modal-email');
    const noteInput = document.getElementById('modal-note');
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const notice = document.getElementById('modal-success-notice');
    const errNotice = document.getElementById('modal-error-notice');

    const repo = repoInput?.value?.trim();
    const email = emailInput?.value?.trim();
    const note = noteInput?.value?.trim() || '';
    if (!repo || !email) return;

    if (notice) notice.classList.add('hidden');
    if (errNotice) errNotice.classList.add('hidden');

    const originalBtnText = submitBtn ? submitBtn.innerText : 'Send Feature Request';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending...';
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
    }

    try {
      const res = await fetch('https://formsubmit.co/ajax/gitgemsai@outlook.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `GitGems Free Feature Request: ${repo}`,
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
          'Repository': repo,
          'Developer Email': email,
          'Notes': note || 'N/A'
        })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok || data.success === 'true' || data.message?.includes('Activation')) {
        if (notice) {
          notice.classList.remove('hidden');
        }
        if (e.target && typeof e.target.reset === 'function') {
          e.target.reset();
        }
        setTimeout(() => {
          window.closeSubmitModal();
        }, 3000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission failed:', err);
      if (errNotice) {
        errNotice.textContent = 'Submission failed. Please try again or email gitgemsai@outlook.com directly.';
        errNotice.classList.remove('hidden');
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
      }
    }
  };
});
