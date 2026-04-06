// ── CORE APPLICATION STATE ──────────────────────

const DATA_STRUCTURES = ["Arrays", "Stacks", "Queues", "Hash Tables", "Linked List", "Trees", "Graphs"];
const ALGORITHMS = ["Sorting", "Searching"];

let currentMode = "data-structures"; // 'data-structures' or 'algorithms'
let currentTab = "visualizations"; // 'visualizations', 'theory', 'quiz'
let curGroup = "Arrays", curSub = "1-D", curFilter = "all";

// Pagination state
let currentPage = 1;
const itemsPerPage = 6;

// ── APP ACTIONS ───────────────────────────────────

function switchMode(mode) {
  currentMode = mode;
  
  // Update Navigation UI
  document.querySelectorAll('.desktop-nav a, .bottom-nav .bnav-item').forEach(el => el.classList.remove('active'));
  
  if (mode === 'data-structures') {
    document.getElementById('nav-data-structures')?.classList.add('active');
    document.getElementById('bnav-data-structures')?.classList.add('active');
    document.getElementById('desktop-sidebar-title').textContent = "Data Structures";
    document.getElementById('drawer-sidebar-title').textContent = "Data Structures";
    curGroup = DATA_STRUCTURES[0];
  } else {
    document.getElementById('nav-algorithms')?.classList.add('active');
    document.getElementById('bnav-algorithms')?.classList.add('active');
    document.getElementById('desktop-sidebar-title').textContent = "Algorithms";
    document.getElementById('drawer-sidebar-title').textContent = "Algorithms";
    curGroup = ALGORITHMS[0];
  }
  
  curSub = Object.keys(DATA[curGroup])[0];
  curFilter = "all";
  currentTab = "visualizations";
  currentPage = 1;
  
  updateTabUI();
  refresh();
}

function switchTab(tab) {
  currentTab = tab;
  currentPage = 1;
  updateTabUI();
  renderProblems();
}

function setFilter(f, btn) {
  curFilter = f;
  currentPage = 1;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderProblems();
}

function setPage(page) {
  currentPage = page;
  renderProblems();
  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function pick(grp, sub, pfx) {
  curGroup = grp; 
  curSub = sub;
  currentPage = 1;
  refresh();
  if (pfx === 'm') closeDrawer();
}

function pickGroup(grp) {
  curGroup = grp;
  curSub   = Object.keys(DATA[grp])[0];
  currentPage = 1;
  refresh();
}

function refresh() {
  refreshTrees();
  refreshChips();
  updateBreadcrumbs();
  
  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle) pageTitle.textContent = curSub;
  
  renderProblems();
}

// ── INITIALIZATION ────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Setup Tab Listeners
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.textContent.toLowerCase()));
  });

  // Initial UI state
  updateTabUI();
  refresh();
});
