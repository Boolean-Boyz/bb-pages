---
layout: fopl
title: Book Catalog — Friends of the Poway Library
permalink: /catalog
description: Browse and search all available books at the Friends of the Poway Library bookstore.
fopl_nav_active: catalog
---

<style>
  body { background: #f4f8f4; }

  .fopl-logo-wrap img { height: 90px; }

  /* ── Hero ── */
  .catalog-hero {
    background: #023b0f; padding: 36px 32px 32px; color: #fff;
  }
  .catalog-hero h1 {
    font-family: 'Cabin', sans-serif; font-size: 1.8rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 16px; border: none; color: #fff;
  }
  .catalog-search-wrap { display: flex; gap: 10px; max-width: 600px; }
  .catalog-search {
    flex: 1; padding: 12px 16px; border: none; border-radius: 4px;
    font-family: 'Lato', sans-serif; font-size: 1rem; outline: none;
  }
  .catalog-search-btn {
    padding: 12px 24px; background: #f0c341; color: #1a2e1a; border: none;
    border-radius: 4px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;
    transition: background 0.2s;
  }
  .catalog-search-btn:hover { background: #f5d777; }

  /* ── Layout ── */
  .catalog-body { display: flex; gap: 0; min-height: 60vh; }

  /* ── Sidebar ── */
  .catalog-sidebar {
    width: 220px; min-width: 220px; background: #fff;
    border-right: 1px solid #e0e0e0; padding: 24px 20px;
  }
  .filter-section { margin-bottom: 24px; }
  .filter-title {
    font-family: 'Cabin', sans-serif; font-size: 0.78rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #555; margin-bottom: 10px;
  }
  .filter-btn {
    display: block; width: 100%; text-align: left; padding: 7px 10px;
    background: none; border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Lato', sans-serif; font-size: 0.9rem; color: #444;
    transition: background 0.15s; margin-bottom: 2px;
  }
  .filter-btn:hover { background: #f4f8f4; }
  .filter-btn.active { background: #023b0f; color: #fff; font-weight: 700; }
  .filter-count {
    float: right; font-size: 0.78rem; opacity: 0.7;
    background: rgba(0,0,0,0.08); padding: 1px 6px; border-radius: 10px;
  }
  .filter-btn.active .filter-count { background: rgba(255,255,255,0.2); opacity: 1; }

  /* ── Main ── */
  .catalog-main { flex: 1; padding: 24px; overflow: hidden; }
  .catalog-toolbar {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 20px; flex-wrap: wrap; gap: 10px;
  }
  .catalog-count { font-size: 0.9rem; color: #666; }
  .catalog-count strong { color: #023b0f; }
  .catalog-sort {
    padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px;
    font-family: 'Lato', sans-serif; font-size: 0.9rem; background: #fff; cursor: pointer;
  }

  /* ── Book Grid ── */
  .catalog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .book-card {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 10px rgba(2,59,15,0.08);
    overflow: hidden; display: flex; flex-direction: column;
    transition: transform 0.15s, box-shadow 0.15s; cursor: pointer;
  }
  .book-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(2,59,15,0.14); }
  .book-cover {
    height: 160px; display: flex; align-items: center; justify-content: center;
    font-family: 'Cabin', sans-serif; font-size: 1.4rem; font-weight: 700;
    color: #fff; letter-spacing: 0.05em; text-transform: uppercase;
    position: relative; overflow: hidden;
  }
  .book-cover-letters { position: relative; z-index: 1; text-shadow: 0 2px 6px rgba(0,0,0,0.3); }
  .book-cover img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; object-position: top;
  }
  .book-info { padding: 14px 14px 16px; flex: 1; display: flex; flex-direction: column; gap: 5px; }
  .book-title {
    font-family: 'Cabin', sans-serif; font-size: 0.92rem; font-weight: 700;
    color: #023b0f; line-height: 1.3; margin: 0;
  }
  .book-author { font-size: 0.82rem; color: #666; margin: 0; }
  .book-series { font-size: 0.78rem; color: #888; font-style: italic; }
  .book-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }
  .book-tag {
    font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.04em; padding: 2px 7px; border-radius: 10px;
  }
  .tag-age-kids        { background: #fff3e0; color: #e65100; }
  .tag-age-middle      { background: #e8f5e9; color: #1b5e20; }
  .tag-age-ya          { background: #ede7f6; color: #4a148c; }
  .tag-age-adult       { background: #e3f2fd; color: #0d47a1; }
  .tag-condition-new   { background: #e8f5e9; color: #1b5e20; }
  .tag-condition-good  { background: #fff8e1; color: #f57f17; }
  .tag-condition-vg    { background: #e3f2fd; color: #0d47a1; }
  .book-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 8px; }
  .book-price { font-family: 'Cabin', sans-serif; font-size: 1.05rem; font-weight: 700; color: #023b0f; }
  .book-qty { font-size: 0.78rem; color: #888; }
  .book-qty.low { color: #c62828; font-weight: 700; }

  /* ── Book detail modal ── */
  .book-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(0,0,0,0.5); z-index: 400; align-items: center; justify-content: center;
  }
  .book-overlay.open { display: flex; }
  .book-modal {
    background: #fff; border-radius: 8px; width: 90%; max-width: 520px;
    max-height: 88vh; overflow-y: auto; position: relative;
  }
  .book-modal-top { padding: 24px 28px 0; }
  .book-modal-close {
    position: absolute; top: 14px; right: 18px;
    background: none; border: none; font-size: 1.4rem; cursor: pointer; color: #666;
  }
  .book-modal-cover {
    width: 90px; height: 130px; border-radius: 4px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cabin', sans-serif; font-size: 1.1rem; font-weight: 700;
    color: #fff; overflow: hidden; position: relative;
  }
  .book-modal-cover img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .book-modal-header { display: flex; gap: 20px; margin-bottom: 16px; }
  .book-modal-info { flex: 1; }
  .book-modal-title {
    font-family: 'Cabin', sans-serif; font-size: 1.2rem; font-weight: 700;
    color: #023b0f; margin: 0 0 4px; border: none;
  }
  .book-modal-author { color: #555; margin: 0 0 8px; font-size: 0.95rem; }
  .book-modal-meta { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
  .book-modal-desc { font-size: 0.95rem; line-height: 1.7; color: #444; padding: 0 28px 24px; }

  /* ── Admin controls ── */
  .admin-bar {
    display: none; background: #fff8e1; border-bottom: 1px solid #f0c341;
    padding: 10px 24px; align-items: center; justify-content: space-between; gap: 12px;
  }
  .admin-bar.visible { display: flex; }
  .admin-bar span { font-size: 0.88rem; color: #5d4037; font-weight: 600; }
  .add-book-btn {
    padding: 8px 20px; background: #023b0f; color: #fff; border: none; border-radius: 4px;
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.82rem;
    text-transform: uppercase; cursor: pointer; transition: background 0.2s;
  }
  .add-book-btn:hover { background: #045218; }

  /* ── Add/Edit book modal ── */
  .form-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(0,0,0,0.5); z-index: 500; align-items: center; justify-content: center;
  }
  .form-overlay.open { display: flex; }
  .form-modal {
    background: #fff; border-radius: 8px; width: 90%; max-width: 460px;
    max-height: 90vh; overflow-y: auto; padding: 28px;
  }
  .form-modal h2 {
    font-family: 'Cabin', sans-serif; font-size: 1rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.05em; color: #023b0f; margin: 0 0 20px; border: none;
  }
  .form-field { margin-bottom: 14px; }
  .form-field label {
    display: block; font-size: 0.78rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; color: #555; margin-bottom: 4px;
  }
  .form-field input, .form-field select, .form-field textarea {
    width: 100%; padding: 9px 12px; border: 1px solid #ccc; border-radius: 4px;
    font-family: 'Lato', sans-serif; font-size: 0.95rem; outline: none;
    transition: border-color 0.2s;
  }
  .form-field input:focus, .form-field select:focus, .form-field textarea:focus {
    border-color: #023b0f;
  }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .form-actions { display: flex; gap: 10px; margin-top: 20px; }
  .form-submit {
    flex: 1; padding: 11px; background: #023b0f; color: #fff; border: none;
    border-radius: 4px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.88rem; text-transform: uppercase; cursor: pointer; transition: background 0.2s;
  }
  .form-submit:hover { background: #045218; }
  .form-cancel {
    padding: 11px 20px; background: none; border: 1px solid #ccc; border-radius: 4px;
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.88rem;
    text-transform: uppercase; cursor: pointer; color: #666;
  }

  /* ── AI Chat ── */
  .ai-fab {
    position: fixed; bottom: 28px; right: 28px; z-index: 300;
    background: #023b0f; color: #fff; border: none; border-radius: 50px;
    padding: 14px 22px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.05em;
    cursor: pointer; box-shadow: 0 4px 20px rgba(2,59,15,0.35);
    display: flex; align-items: center; gap: 8px; transition: background 0.2s;
  }
  .ai-fab:hover { background: #045218; }
  .ai-fab-dot {
    width: 8px; height: 8px; border-radius: 50%; background: #f0c341;
    animation: pulse 2s infinite;
  }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

  .ai-panel {
    display: none; position: fixed; bottom: 90px; right: 28px; z-index: 300;
    width: 360px; max-width: calc(100vw - 40px);
    background: #fff; border-radius: 12px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.18); overflow: hidden;
    flex-direction: column;
  }
  .ai-panel.open { display: flex; }
  .ai-panel-header {
    background: #023b0f; color: #fff; padding: 14px 18px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .ai-panel-title {
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.95rem;
    text-transform: uppercase; letter-spacing: 0.05em;
  }
  .ai-panel-sub { font-size: 0.78rem; opacity: 0.75; margin-top: 2px; }
  .ai-panel-close {
    background: none; border: none; color: #fff; font-size: 1.2rem;
    cursor: pointer; line-height: 1; padding: 0;
  }
  .ai-messages {
    flex: 1; overflow-y: auto; padding: 16px; display: flex;
    flex-direction: column; gap: 12px; max-height: 340px; min-height: 200px;
  }
  .ai-msg { max-width: 85%; padding: 10px 14px; border-radius: 12px; font-size: 0.9rem; line-height: 1.5; }
  .ai-msg.bot { background: #f4f8f4; color: #333; align-self: flex-start; border-bottom-left-radius: 4px; }
  .ai-msg.user { background: #023b0f; color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; }
  .ai-msg.typing { color: #888; font-style: italic; }
  .ai-input-row { display: flex; gap: 8px; padding: 12px 14px; border-top: 1px solid #eee; }
  .ai-input {
    flex: 1; padding: 10px 12px; border: 1px solid #ccc; border-radius: 20px;
    font-family: 'Lato', sans-serif; font-size: 0.9rem; outline: none;
    transition: border-color 0.2s;
  }
  .ai-input:focus { border-color: #023b0f; }
  .ai-send {
    padding: 10px 16px; background: #023b0f; color: #fff; border: none;
    border-radius: 20px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.82rem; cursor: pointer; transition: background 0.2s;
  }
  .ai-send:hover { background: #045218; }
  .ai-send:disabled { background: #ccc; cursor: not-allowed; }

  .empty-state { text-align: center; padding: 60px 20px; color: #888; }
  .empty-state h3 { font-family: 'Cabin', sans-serif; color: #023b0f; margin-bottom: 8px; border: none; }

  @media (max-width: 700px) {
    .catalog-sidebar { display: none; }
    .catalog-grid { grid-template-columns: repeat(auto-fill, minmax(155px, 1fr)); gap: 14px; }
    .book-cover { height: 120px; }
  }
</style>

<!-- Hero / search -->
<div class="catalog-hero">
  <h1>📚 Browse Our Books</h1>
  <div class="catalog-search-wrap">
    <input class="catalog-search" id="search-input" type="text"
           placeholder="Search by title, author, or series…" autocomplete="off" />
    <button class="catalog-search-btn" onclick="applySearch()">Search</button>
  </div>
</div>

<!-- Admin bar -->
<div class="admin-bar" id="admin-bar">
  <span>🔧 Admin Mode</span>
  <button class="add-book-btn" onclick="openAddForm()">+ Add Book</button>
</div>

<!-- Body -->
<div class="catalog-body">
  <!-- Filters -->
  <div class="catalog-sidebar" id="sidebar">
    <div class="filter-section">
      <div class="filter-title">Age Group</div>
      <button class="filter-btn active" data-age="" onclick="setAge(this, '')">All Ages <span class="filter-count" id="count-all"></span></button>
      <button class="filter-btn" data-age="Kids" onclick="setAge(this, 'Kids')">Kids (4–10) <span class="filter-count" id="count-kids"></span></button>
      <button class="filter-btn" data-age="Middle Grade" onclick="setAge(this, 'Middle Grade')">Middle Grade <span class="filter-count" id="count-mg"></span></button>
      <button class="filter-btn" data-age="YA" onclick="setAge(this, 'YA')">Young Adult <span class="filter-count" id="count-ya"></span></button>
      <button class="filter-btn" data-age="Adult" onclick="setAge(this, 'Adult')">Adult <span class="filter-count" id="count-adult"></span></button>
    </div>
    <div class="filter-section">
      <div class="filter-title">Condition</div>
      <button class="filter-btn active" data-cond="" onclick="setCond(this, '')">Any</button>
      <button class="filter-btn" data-cond="Like New" onclick="setCond(this, 'Like New')">Like New</button>
      <button class="filter-btn" data-cond="Very Good" onclick="setCond(this, 'Very Good')">Very Good</button>
      <button class="filter-btn" data-cond="Good" onclick="setCond(this, 'Good')">Good</button>
    </div>
  </div>

  <!-- Book grid -->
  <div class="catalog-main">
    <div class="catalog-toolbar">
      <div class="catalog-count" id="result-count">Loading…</div>
      <select class="catalog-sort" id="sort-select" onchange="renderBooks()">
        <option value="default">Sort: Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="title">Title A–Z</option>
        <option value="author">Author A–Z</option>
      </select>
    </div>
    <div class="catalog-grid" id="book-grid"></div>
  </div>
</div>

<!-- Book detail modal -->
<div class="book-overlay" id="book-overlay" onclick="closeBook(event)">
  <div class="book-modal" id="book-modal">
    <button class="book-modal-close" onclick="closeBookModal()">✕</button>
    <div class="book-modal-top" id="book-modal-top"></div>
    <p class="book-modal-desc" id="book-modal-desc"></p>
  </div>
</div>

<!-- Add/Edit book form modal -->
<div class="form-overlay" id="form-overlay" onclick="closeFormOverlay(event)">
  <div class="form-modal" onclick="event.stopPropagation()">
    <h2 id="form-title">Add Book</h2>
    <input type="hidden" id="form-book-id" />
    <div class="form-row">
      <div class="form-field"><label>Title *</label><input id="f-title" /></div>
      <div class="form-field"><label>Author *</label><input id="f-author" /></div>
    </div>
    <div class="form-row">
      <div class="form-field"><label>Series</label><input id="f-series" /></div>
      <div class="form-field"><label>Series #</label><input id="f-series-num" type="number" /></div>
    </div>
    <div class="form-row">
      <div class="form-field">
        <label>Age Group *</label>
        <select id="f-age">
          <option>Kids</option><option>Middle Grade</option><option>YA</option><option>Adult</option>
        </select>
      </div>
      <div class="form-field"><label>Genre *</label><input id="f-genre" /></div>
    </div>
    <div class="form-row">
      <div class="form-field">
        <label>Condition *</label>
        <select id="f-condition">
          <option>Like New</option><option>Very Good</option><option>Good</option>
        </select>
      </div>
      <div class="form-field"><label>Quantity *</label><input id="f-qty" type="number" value="1" min="0" /></div>
    </div>
    <div class="form-row">
      <div class="form-field"><label>Price ($) *</label><input id="f-price" type="number" step="0.25" min="0.25" /></div>
      <div class="form-field"><label>ISBN</label><input id="f-isbn" /></div>
    </div>
    <div class="form-field">
      <label>Description</label>
      <textarea id="f-desc" rows="3" style="resize:vertical"></textarea>
    </div>
    <div class="form-actions">
      <button class="form-submit" onclick="submitBookForm()">Save Book</button>
      <button class="form-cancel" onclick="closeForm()">Cancel</button>
    </div>
    <p id="form-msg" style="margin:10px 0 0;font-size:0.88rem;color:#c00;display:none"></p>
  </div>
</div>

<!-- AI Chat -->
<button class="ai-fab" onclick="toggleAI()">
  <div class="ai-fab-dot"></div>
  Ask AI
</button>

<div class="ai-panel" id="ai-panel">
  <div class="ai-panel-header">
    <div>
      <div class="ai-panel-title">📚 AI Book Finder</div>
      <div class="ai-panel-sub">Describe what you're looking for</div>
    </div>
    <button class="ai-panel-close" onclick="toggleAI()">✕</button>
  </div>
  <div class="ai-messages" id="ai-messages"></div>
  <div class="ai-input-row">
    <input class="ai-input" id="ai-input" placeholder="e.g. a scary book for my 10-year-old…"
           onkeydown="if(event.key==='Enter') sendAI()" />
    <button class="ai-send" id="ai-send-btn" onclick="sendAI()">Send</button>
  </div>
</div>

<script>
{
const BACKEND = window.FOPL_BACKEND;

// ── State ──
let allBooks   = [];
let filtered   = [];
let activeAge  = '';
let activeCond = '';
let searchQ    = '';

const AGE_COLORS = {
  'Kids':         '#e65100',
  'Middle Grade': '#1b5e20',
  'YA':           '#4a148c',
  'Adult':        '#0d47a1',
};

// ── Fetch books ──
async function loadBooks() {
  try {
    const params = new URLSearchParams();
    if (searchQ)    params.set('q', searchQ);
    if (activeAge)  params.set('age', activeAge);
    if (activeCond) params.set('condition', activeCond);
    const res  = await fetch(`${BACKEND}/api/fopl/books?${params}`);
    allBooks   = await res.json();
    updateCounts();
    renderBooks();
  } catch {
    document.getElementById('book-grid').innerHTML =
      '<p style="color:#c00;padding:20px">Could not load books. Is the backend running?</p>';
  }
}

// ── Count badges ──
function updateCounts() {
  const all  = allBooks;
  const set  = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || ''; };
  const full = async () => {
    const r = await fetch(`${BACKEND}/api/fopl/books`);
    const b = await r.json();
    const cnt = g => b.filter(x => x.age_group === g).length;
    set('count-all',   b.length);
    set('count-kids',  cnt('Kids'));
    set('count-mg',    cnt('Middle Grade'));
    set('count-ya',    cnt('YA'));
    set('count-adult', cnt('Adult'));
  };
  full().catch(() => {});
}

// ── Render ──
function renderBooks() {
  const sort = document.getElementById('sort-select').value;
  let books  = [...allBooks];
  if (sort === 'price-asc')  books.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') books.sort((a,b) => b.price - a.price);
  if (sort === 'title')      books.sort((a,b) => a.title.localeCompare(b.title));
  if (sort === 'author')     books.sort((a,b) => a.author.localeCompare(b.author));

  const count = document.getElementById('result-count');
  count.innerHTML = `Showing <strong>${books.length}</strong> book${books.length !== 1 ? 's' : ''}`;

  const grid = document.getElementById('book-grid');
  if (!books.length) {
    grid.innerHTML = `<div class="empty-state"><h3>No books found</h3><p>Try adjusting your search or filters.</p></div>`;
    return;
  }

  const isAdmin = (JSON.parse(localStorage.getItem('fopl_user') || 'null') || {}).role === 'Admin';

  grid.innerHTML = books.map(b => {
    const color   = AGE_COLORS[b.age_group] || '#023b0f';
    const initials= b.title.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
    const condTag = b.condition === 'Like New' ? 'new' : b.condition === 'Very Good' ? 'vg' : 'good';
    const ageTag  = b.age_group.toLowerCase().replace(' ','');
    const seriesStr = b.series ? `<div class="book-series">${b.series}${b.series_num ? ` #${b.series_num}` : ''}</div>` : '';
    const qtyStr  = b.quantity <= 1 ? `<span class="book-qty low">${b.quantity} left</span>` : `<span class="book-qty">${b.quantity} in stock</span>`;
    const adminBtns = isAdmin ? `
      <div style="display:flex;gap:6px;margin-top:8px">
        <button onclick="event.stopPropagation();openEditForm(${b.id})"
          style="flex:1;padding:5px;font-size:0.75rem;background:#fff;border:1px solid #023b0f;
                 color:#023b0f;border-radius:3px;cursor:pointer;font-family:Cabin,sans-serif;font-weight:700">Edit</button>
        <button onclick="event.stopPropagation();deleteBook(${b.id})"
          style="flex:1;padding:5px;font-size:0.75rem;background:#fff;border:1px solid #c00;
                 color:#c00;border-radius:3px;cursor:pointer;font-family:Cabin,sans-serif;font-weight:700">Delete</button>
      </div>` : '';
    return `
      <div class="book-card" onclick="openBook(${b.id})">
        <div class="book-cover" style="background:${color}">
          ${b.isbn ? `<img src="https://covers.openlibrary.org/b/isbn/${b.isbn}-M.jpg"
                       onerror="this.style.display='none'" loading="lazy" alt="${b.title}" />` : ''}
          <span class="book-cover-letters">${initials}</span>
        </div>
        <div class="book-info">
          <div class="book-title">${b.title}</div>
          <div class="book-author">${b.author}</div>
          ${seriesStr}
          <div class="book-tags">
            <span class="book-tag tag-age-${ageTag}">${b.age_group}</span>
            <span class="book-tag tag-condition-${condTag}">${b.condition}</span>
          </div>
          <div class="book-footer">
            <div class="book-price">$${b.price.toFixed(2)}</div>
            ${qtyStr}
          </div>
          ${adminBtns}
        </div>
      </div>`;
  }).join('');
}

// ── Filters ──
function setAge(btn, age) {
  document.querySelectorAll('[data-age]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeAge = age;
  loadBooks();
}

function setCond(btn, cond) {
  document.querySelectorAll('[data-cond]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCond = cond;
  loadBooks();
}

function applySearch() {
  searchQ = document.getElementById('search-input').value.trim();
  loadBooks();
}

document.getElementById('search-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') applySearch();
});

// ── Book detail modal ──
function openBook(id) {
  const b = allBooks.find(x => x.id === id);
  if (!b) return;
  const color   = AGE_COLORS[b.age_group] || '#023b0f';
  const initials= b.title.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();
  const condTag = b.condition === 'Like New' ? 'new' : b.condition === 'Very Good' ? 'vg' : 'good';
  const ageTag  = b.age_group.toLowerCase().replace(' ','');
  const seriesStr = b.series ? `<div style="font-size:0.85rem;color:#888;font-style:italic;margin-bottom:8px">${b.series}${b.series_num ? ` — Book #${b.series_num}` : ''}</div>` : '';

  document.getElementById('book-modal-top').innerHTML = `
    <div class="book-modal-header">
      <div class="book-modal-cover" style="background:${color}">
        ${b.isbn ? `<img src="https://covers.openlibrary.org/b/isbn/${b.isbn}-M.jpg"
                     onerror="this.style.display='none'" loading="lazy" alt="${b.title}" />` : ''}
        <span style="position:relative;z-index:1;font-size:0.9rem;text-align:center;padding:6px">${initials}</span>
      </div>
      <div class="book-modal-info">
        <h2 class="book-modal-title">${b.title}</h2>
        <p class="book-modal-author">by ${b.author}</p>
        ${seriesStr}
        <div class="book-modal-meta">
          <span class="book-tag tag-age-${ageTag}">${b.age_group}</span>
          <span class="book-tag tag-condition-${condTag}">${b.condition}</span>
          <span class="book-tag" style="background:#e8f5e9;color:#1b5e20">${b.genre}</span>
        </div>
        <div style="font-size:1.2rem;font-weight:700;color:#023b0f;font-family:Cabin,sans-serif">
          $${b.price.toFixed(2)}
          <span style="font-size:0.82rem;font-weight:400;color:#888;margin-left:8px">${b.quantity} in stock</span>
        </div>
      </div>
    </div>`;
  document.getElementById('book-modal-desc').textContent = b.description || '';
  document.getElementById('book-overlay').classList.add('open');
}

function closeBook(e) {
  if (e.target === document.getElementById('book-overlay')) closeBookModal();
}
function closeBookModal() {
  document.getElementById('book-overlay').classList.remove('open');
}

// ── Admin: add/edit form ──
function openAddForm() {
  document.getElementById('form-title').textContent = 'Add Book';
  document.getElementById('form-book-id').value = '';
  ['f-title','f-author','f-series','f-genre','f-isbn','f-desc'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('f-series-num').value = '';
  document.getElementById('f-price').value = '';
  document.getElementById('f-qty').value = 1;
  document.getElementById('f-age').value = 'Kids';
  document.getElementById('f-condition').value = 'Like New';
  document.getElementById('form-msg').style.display = 'none';
  document.getElementById('form-overlay').classList.add('open');
}

function openEditForm(id) {
  const b = allBooks.find(x => x.id === id);
  if (!b) return;
  document.getElementById('form-title').textContent = 'Edit Book';
  document.getElementById('form-book-id').value     = b.id;
  document.getElementById('f-title').value          = b.title;
  document.getElementById('f-author').value         = b.author;
  document.getElementById('f-series').value         = b.series || '';
  document.getElementById('f-series-num').value     = b.series_num || '';
  document.getElementById('f-genre').value          = b.genre;
  document.getElementById('f-age').value            = b.age_group;
  document.getElementById('f-condition').value      = b.condition;
  document.getElementById('f-qty').value            = b.quantity;
  document.getElementById('f-price').value          = b.price;
  document.getElementById('f-isbn').value           = b.isbn || '';
  document.getElementById('f-desc').value           = b.description || '';
  document.getElementById('form-msg').style.display = 'none';
  document.getElementById('form-overlay').classList.add('open');
}

function closeFormOverlay(e) {
  if (e.target === document.getElementById('form-overlay')) closeForm();
}
function closeForm() { document.getElementById('form-overlay').classList.remove('open'); }

async function submitBookForm() {
  const id    = document.getElementById('form-book-id').value;
  const body  = {
    title:      document.getElementById('f-title').value.trim(),
    author:     document.getElementById('f-author').value.trim(),
    series:     document.getElementById('f-series').value.trim() || null,
    series_num: parseInt(document.getElementById('f-series-num').value) || null,
    genre:      document.getElementById('f-genre').value.trim(),
    age_group:  document.getElementById('f-age').value,
    condition:  document.getElementById('f-condition').value,
    quantity:   parseInt(document.getElementById('f-qty').value),
    price:      parseFloat(document.getElementById('f-price').value),
    isbn:       document.getElementById('f-isbn').value.trim() || null,
    description:document.getElementById('f-desc').value.trim() || null,
  };
  if (!body.title || !body.author || !body.genre || !body.price) {
    const msg = document.getElementById('form-msg');
    msg.textContent = 'Please fill in all required fields.';
    msg.style.display = 'block';
    return;
  }
  const method = id ? 'PUT' : 'POST';
  const url    = id ? `${BACKEND}/api/fopl/books/${id}` : `${BACKEND}/api/fopl/books`;
  try {
    const res  = await fetch(url, {
      method, credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) { document.getElementById('form-msg').textContent = data.message; document.getElementById('form-msg').style.display='block'; return; }
    closeForm();
    loadBooks();
  } catch { document.getElementById('form-msg').textContent = 'Server error.'; document.getElementById('form-msg').style.display='block'; }
}

async function deleteBook(id) {
  if (!confirm('Delete this book?')) return;
  await fetch(`${BACKEND}/api/fopl/books/${id}`, { method: 'DELETE', credentials: 'include' });
  loadBooks();
}

// ── AI Chat ──
let aiOpen = false;
let aiGreeted = false;

function toggleAI() {
  aiOpen = !aiOpen;
  document.getElementById('ai-panel').classList.toggle('open', aiOpen);
  if (aiOpen && !aiGreeted) {
    addAIMsg('bot', "Hi! I'm your AI book finder 📚 Tell me what kind of book you're looking for — age range, favorite genres, or anything else — and I'll recommend books from our current catalog!");
    aiGreeted = true;
  }
  if (aiOpen) setTimeout(() => document.getElementById('ai-input').focus(), 100);
}

function addAIMsg(type, text) {
  const msgs = document.getElementById('ai-messages');
  const el   = document.createElement('div');
  el.className = `ai-msg ${type}`;
  el.textContent = text;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
  return el;
}

async function sendAI() {
  const input = document.getElementById('ai-input');
  const query = input.value.trim();
  if (!query) return;
  input.value = '';
  const btn = document.getElementById('ai-send-btn');
  btn.disabled = true;
  addAIMsg('user', query);
  const typing = addAIMsg('bot typing', '…');
  try {
    const res  = await fetch(`${BACKEND}/api/fopl/books/ai`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    typing.remove();
    if (res.ok) {
      addAIMsg('bot', data.response);
    } else {
      addAIMsg('bot', data.message || 'Sorry, something went wrong.');
    }
  } catch {
    typing.remove();
    addAIMsg('bot', 'Could not reach the server. Please try again.');
  }
  btn.disabled = false;
  input.focus();
}

// ── Admin bar visibility ──
const foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
if (foplUser && foplUser.role === 'Admin') document.getElementById('admin-bar').classList.add('visible');

// expose for onclick attrs
window.setAge         = setAge;
window.setCond        = setCond;
window.applySearch    = applySearch;
window.openBook       = openBook;
window.closeBookModal = closeBookModal;
window.closeBook      = closeBook;
window.toggleAI       = toggleAI;
window.sendAI         = sendAI;
window.openAddForm    = openAddForm;
window.openEditForm   = openEditForm;
window.closeForm      = closeForm;
window.closeFormOverlay = closeFormOverlay;
window.submitBookForm = submitBookForm;
window.deleteBook     = deleteBook;

loadBooks();
}
</script>
