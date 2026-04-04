let currentGroup = "Arrays";
let currentSub = "1-D";
let currentFilter = "all";
let searchTerm = "";

function toggleGroup(id) {
  const el = document.getElementById(id);
  el.classList.toggle('open');
}

function selectTopic(group, sub, el) {
  document.querySelectorAll('.topic-child').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  currentGroup = group;
  currentSub = sub;
  document.getElementById('pageTitle').textContent = sub;
  document.getElementById('breadcrumb').innerHTML = `
    <a href="#">All Topics</a>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    <a href="#">${group}</a>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    <span>${sub}</span>
  `;
  renderProblems();
}

function setFilter(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderProblems();
}

function filterProblems() {
  searchTerm = document.getElementById('searchInput').value.toLowerCase();
  renderProblems();
}

function renderProblems() {
  const container = document.getElementById('problemList');
  const probs = (DATA[currentGroup] && DATA[currentGroup][currentSub]) || [];
  const filtered = probs.filter(p => {
    const matchFilter = currentFilter === 'all' || p.level === currentFilter;
    const matchSearch = p.name.toLowerCase().includes(searchTerm);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="padding:3rem;text-align:center;color:var(--text-muted);font-size:0.85rem;">No visualizations found.</div>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="problem-row">
      <div class="problem-status"></div>
      <div class="problem-info">
        <div class="problem-name">${p.name}</div>
        <div class="problem-meta">
          <span class="meta-item"><span class="meta-label">VIEWS:</span><span class="meta-val">${p.views.toLocaleString()}</span></span>
          <span class="meta-item"><span class="meta-label">COMPLETION:</span><span class="meta-val">${p.completion}%</span></span>
          <span class="level-badge level-${p.level.toLowerCase()}">${p.level}</span>
        </div>
      </div>
      <button class="visualize-btn" onclick="alert('Opening: ${p.name}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Visualize
      </button>
    </div>
  `).join('');
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderProblems();
});
