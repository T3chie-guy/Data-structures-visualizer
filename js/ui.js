// ── UI RENDERING ENGINE ───────────────────────────

const chevronSVG = `<svg class="topic-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;

function buildTree(pfx) {
  const visibleGroups = currentMode === 'data-structures' ? DATA_STRUCTURES : ALGORITHMS;

  return visibleGroups.map((grp, gi) => {
    const subs = Object.keys(DATA[grp]);
    return `
      <div class="topic-group ${grp === curGroup ? 'open' : ''}" id="${pfx}g${gi}">
        <div class="topic-group-header" onclick="toggleGrp('${pfx}g${gi}')">
          <span class="topic-group-name">${grp}</span>${chevronSVG}
        </div>
        <div class="topic-children">
          ${subs.map(sub => `
            <a class="topic-child ${grp === curGroup && sub === curSub ? 'active' : ''}"
               onclick="pick('${grp}','${sub}','${pfx}')">
              <span class="topic-dot"></span>${sub}
            </a>
          `).join('')}
        </div>
      </div>`;
  }).join('');
}

function refreshTrees() {
  const desktopTree = document.getElementById('desktopTree');
  const drawerTree = document.getElementById('drawerTree');
  if (desktopTree) desktopTree.innerHTML = buildTree('d');
  if (drawerTree) drawerTree.innerHTML = buildTree('m');
}

function refreshChips() {
  const mobileChips = document.getElementById('mobileChips');
  if (mobileChips) {
    const visibleGroups = currentMode === 'data-structures' ? DATA_STRUCTURES : ALGORITHMS;
    mobileChips.innerHTML = visibleGroups.map(g =>
      `<button class="mobile-chip ${g === curGroup ? 'active' : ''}" onclick="pickGroup('${g}')">${g}</button>`
    ).join('');
  }
}

function updateTabUI() {
  document.querySelectorAll('.tab').forEach(el => {
    el.classList.remove('active');
    if (el.textContent.toLowerCase() === currentTab) {
      el.classList.add('active');
    }
  });

  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    filterBar.style.display = currentTab === 'quiz' ? 'flex' : 'none';
  }
}

function updateBreadcrumbs() {
  const breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;

  const chev = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>`;
  const modeLabel = currentMode === 'data-structures' ? 'Data Structures' : 'Algorithms';

  breadcrumb.innerHTML = `
    <a href="#" onclick="switchMode('${currentMode}')">${modeLabel}</a>
    ${chev}
    <a href="#">${curGroup}</a>
    ${chev}
    <span>${curSub}</span>
  `;
}

function renderProblems() {
  const el = document.getElementById('problemList');
  if (!el) return;

  const subData = DATA[curGroup]?.[curSub] || { visualizations: [], theory: [], quiz: [] };

  if (currentTab === 'theory') {
    let subTheory = subData.theory;
    el.innerHTML = `
      <div style="padding: 2rem; color: var(--text-dim); line-height: 1.6;">
        <h2 style="color: var(--text); margin-bottom: 1rem;">${curSub} Theory</h2>
        <p style="margin-bottom: 1rem;">${subTheory.generalKnowledge}</p>
        <h3 style="color: var(--text); margin-bottom: 1rem;">Declaration</h3>
        <p>${subTheory.declaration.theory}</p>
        <img style="width: 70%" src=${subTheory.declaration.codeSnippet} alt="">
        <h3 style="color: var(--text); margin-bottom: 1rem;">Initialization</h3>
        <p>${subTheory.initialization.theory}</p>
        <img style="width: 70%" src=${subTheory.initialization.codeSnippet} alt="">
        <h3 style="color: var(--text); margin-bottom: 1rem;">Displaying</h3>
        <p>${subTheory.displaying.theory}</p>
        <img style="width: 70%" src=${subTheory.displaying.codeSnippet} alt="">
      </div>
    `;
    renderPagination(0);
    return;
  }

  const probs = subData[currentTab] || [];
  const filteredList = probs.filter(p => (curFilter === 'all' || p.level === curFilter));

  if (!filteredList.length) {
    el.innerHTML = `<div style="padding:3rem;text-align:center;color:var(--text-muted);font-size:.85rem;">No ${currentTab} found here.</div>`;
    renderPagination(0);
    return;
  }

  // Slice list for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedList = filteredList.slice(startIndex, endIndex);

  el.innerHTML = paginatedList.map(p => `
    <div class="problem-row">
      <div class="problem-status"></div>
      <div class="problem-info">
        <div class="problem-name">${p.name}</div>
        <div class="problem-meta">
          ${currentTab === 'quiz' ? `<span class="level-badge level-${p.level.toLowerCase()}">${p.level}</span>` : ''}
        </div>
      </div>
      <button class="visualize-btn" onclick="alert('Opening: ${p.name}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        ${currentTab === 'visualizations' ? 'Visualize' : 'Open'}
      </button>
    </div>
  `).join('');

  renderPagination(filteredList.length);
}

function renderPagination(totalItems) {
  const el = document.getElementById('pagination');
  if (!el) return;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    el.innerHTML = '';
    el.style.display = 'none';
    return;
  }

  el.style.display = 'flex';

  let html = `
    <button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" onclick="if(${currentPage > 1}) setPage(${currentPage - 1})">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="setPage(${i})">${i}</button>
    `;
  }

  html += `
    <button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" onclick="if(${currentPage < totalPages}) setPage(${currentPage + 1})">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  `;

  el.innerHTML = html;
}

function toggleGrp(id) {
  document.getElementById(id)?.classList.toggle('open');
}

function openDrawer() {
  document.getElementById('drawer')?.classList.add('open');
  document.getElementById('drawerOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  document.getElementById('drawer')?.classList.remove('open');
  document.getElementById('drawerOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}
