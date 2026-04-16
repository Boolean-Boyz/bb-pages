---
layout: fopl
title: Bookstore
permalink: /bookstore
description: Friends of the Poway Library Bookstore - Unique gently used books, magazines, DVDs, CDs, puzzles and more.
fopl_nav_active: bookstore
---

<style>
  /* Break out of Jekyll's centered content wrapper */
  .post-content {
    padding: 0 !important;
    margin: 0 !important;
    max-width: none !important;
  }

  .fopl-page {
    font-family: 'Lato', sans-serif;
    color: #e0e0e0;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 0;
    box-sizing: border-box;
    background: #023b0f;
  }

  /* ── Hero / heading ── */
  .fopl-hero {
    background: #023b0f;
    color: #fff;
    text-align: center;
    padding: 48px 24px 40px;
  }

  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 0 0 8px;
    line-height: 1.25;
    color: #fff;
    border: none;
  }

  .fopl-hero-sub {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.6);
    margin: 0;
    letter-spacing: 0.03em;
  }

  /* ── Main content card ── */
  .fopl-content {
    background: transparent;
    color: #e0e0e0;
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 40px 36px;
  }

  .fopl-intro {
    font-size: 1.05rem;
    line-height: 1.75;
    max-width: 640px;
    margin: 0 auto 36px;
    text-align: center;
    color: rgba(255,255,255,0.7);
  }

  /* ── Info row (address / phone) ── */
  .fopl-info-row {
    display: flex;
    justify-content: center;
    gap: 36px;
    flex-wrap: wrap;
    margin: 0 auto 36px;
    padding: 22px 28px;
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    max-width: 720px;
    border: 1px solid rgba(255,255,255,0.08);
  }

  .fopl-info-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    text-align: left;
  }

  .fopl-info-icon {
    font-size: 1.3rem;
    color: #f0c341;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .fopl-info-item .fopl-label {
    font-weight: 700;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #f0c341;
    margin-bottom: 3px;
  }

  .fopl-info-item .fopl-value {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.7);
    line-height: 1.4;
  }

  .fopl-info-item a {
    color: #f0c341;
    text-decoration: none;
    font-weight: 600;
  }

  .fopl-info-item a:hover {
    text-decoration: underline;
  }

  /* ── Divider ── */
  .fopl-divider {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.08);
    margin: 4px auto 32px;
    max-width: 500px;
  }

  /* ── Gallery ── */
  .fopl-gallery-title {
    font-family: 'Cabin', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }

  .fopl-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 0 auto 36px;
    max-width: 800px;
  }

  .fopl-gallery-item {
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: rgba(255,255,255,0.05);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    border: 1px solid rgba(255,255,255,0.08);
  }

  .fopl-gallery-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(0,0,0,0.3);
  }

  .fopl-gallery-item img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }

  .fopl-gallery-caption {
    padding: 10px 14px;
    font-size: 0.82rem;
    color: rgba(255,255,255,0.6);
    line-height: 1.45;
    flex: 1;
    font-style: italic;
    text-align: center;
  }

  /* ── Volunteer banner ── */
  .fopl-volunteer {
    background: #023b0f;
    color: #fff;
    text-align: center;
    padding: 32px 28px;
    border-radius: 12px;
    margin: 0 auto 28px;
    max-width: 720px;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .fopl-volunteer h3 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0 0 8px;
    color: #fff;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .fopl-volunteer p {
    margin: 0 0 18px;
    font-size: 0.95rem;
    color: rgba(255,255,255,0.75);
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 18px;
    line-height: 1.6;
  }

  .fopl-btn {
    display: inline-block;
    background: #f0c341;
    color: #1a2e1a;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 11px 28px;
    border-radius: 6px;
    text-decoration: none;
    border: none;
    transition: background 0.2s, transform 0.2s;
  }

  .fopl-btn:hover {
    background: #f5d777;
    transform: translateY(-1px);
  }

  /* ── Inline catalog ── */
  .fopl-catalog-section {
    margin: 0 auto 36px;
    max-width: 800px;
  }

  .fopl-catalog-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }

  .fopl-catalog-header h3 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #fff;
    margin: 0;
    border: none;
  }

  .fopl-catalog-controls {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .fopl-catalog-controls input {
    padding: 9px 14px;
    border: 1.5px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    font-size: 0.88rem;
    font-family: 'Lato', sans-serif;
    outline: none;
    width: 220px;
    transition: border-color 0.2s;
    background: rgba(255,255,255,0.06);
    color: #e0e0e0;
  }

  .fopl-catalog-controls input:focus {
    border-color: #f0c341;
    background: rgba(255,255,255,0.08);
  }

  .fopl-catalog-controls select {
    padding: 9px 12px;
    border: 1.5px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    font-size: 0.88rem;
    font-family: 'Lato', sans-serif;
    background: rgba(255,255,255,0.06);
    color: #e0e0e0;
    outline: none;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  .fopl-catalog-controls select:focus {
    border-color: #f0c341;
  }

  .fopl-catalog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    gap: 16px;
    margin-bottom: 16px;
  }

  .fopl-book-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    cursor: pointer;
  }

  .fopl-book-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(0,0,0,0.3);
  }

  .fopl-book-cover {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    flex-shrink: 0;
    background: rgba(255,255,255,0.03);
  }

  .fopl-book-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .fopl-book-info {
    padding: 10px 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .fopl-book-title {
    font-family: 'Cabin', sans-serif;
    font-size: 0.84rem;
    font-weight: 700;
    color: #eee;
    line-height: 1.3;
  }

  .fopl-book-author {
    font-size: 0.76rem;
    color: rgba(255,255,255,0.5);
  }

  .fopl-book-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
  }

  .fopl-book-price {
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    color: #f0c341;
  }

  .fopl-book-age {
    font-size: 0.7rem;
    padding: 2px 7px;
    border-radius: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .age-kids      { background: #fff3cd; color: #856404; }
  .age-middle    { background: #d1ecf1; color: #0c5460; }
  .age-ya        { background: #d4edda; color: #155724; }
  .age-adult     { background: #f8d7da; color: #721c24; }

  .fopl-catalog-footer {
    text-align: center;
    margin-top: 8px;
  }

  .fopl-catalog-footer a {
    color: #f0c341;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    border-bottom: 2px solid #f0c341;
    padding-bottom: 1px;
    transition: opacity 0.2s;
  }

  .fopl-catalog-footer a:hover { opacity: 0.6; }

  .fopl-catalog-empty {
    text-align: center;
    color: rgba(255,255,255,0.4);
    font-style: italic;
    padding: 28px 0;
    font-size: 0.92rem;
  }

  /* ── Book request section ── */
  .fopl-request {
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    padding: 28px 32px;
    margin: 0 auto 32px;
    max-width: 720px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.08);
  }

  .fopl-request h3 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 6px;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .fopl-request p {
    font-size: 0.92rem;
    color: rgba(255,255,255,0.6);
    margin: 0 0 18px;
    line-height: 1.5;
  }

  .fopl-request-form {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .fopl-request-form input[type="text"],
  .fopl-request-form input[type="email"],
  .fopl-request-form input[type="tel"] {
    flex: 1;
    min-width: 150px;
    padding: 9px 14px;
    border: 1.5px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    font-size: 0.92rem;
    font-family: 'Lato', sans-serif;
    outline: none;
    transition: border-color 0.2s;
    background: rgba(255,255,255,0.06);
    color: #e0e0e0;
  }

  .fopl-request-form input:focus {
    border-color: #f0c341;
  }

  .fopl-request-form button {
    padding: 9px 24px;
    background: linear-gradient(135deg, #023b0f, #045218);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }

  .fopl-request-form button:hover {
    background: #045218;
    transform: translateY(-1px);
  }

  .fopl-request-msg {
    margin-top: 10px;
    font-size: 0.88rem;
    color: #f0c341;
    font-weight: 600;
    display: none;
  }

  /* ── Dark mode overrides for shop ── */
  body.fopl-dark .fopl-hero { background: #121212; }
  body.fopl-dark .fopl-page { background: #121212; }
  body.fopl-dark .fopl-volunteer { background: #0a1f0e; }
  body.fopl-dark .fopl-catalog-footer a { color: #58e87a; border-bottom-color: #58e87a; }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .fopl-hero h1 { font-size: 1.4rem; }
    .fopl-content { padding: 24px 16px; }
    .fopl-info-row { flex-direction: column; gap: 16px; }
    .fopl-gallery { grid-template-columns: 1fr 1fr; gap: 12px; }
    .fopl-catalog-controls input { width: 100%; }
    .fopl-catalog-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
  }
</style>

<div class="fopl-page">

  <!-- Hero -->
  <div class="fopl-hero">
    <h1>Our Bookstore</h1>
    <p class="fopl-hero-sub">Unique gently used books, magazines, DVDs, CDs, puzzles and more</p>
  </div>

  <!-- Main content -->
  <div class="fopl-content">

    <p class="fopl-intro">
      Our bookstore offers gently used books of all kinds, along with
      magazines, DVDs, CDs, puzzles and more. We also take requests from patrons.
    </p>

    <!-- Address / Phone -->
    <div class="fopl-info-row">
      <div class="fopl-info-item">
        <div class="fopl-info-icon">📍</div>
        <div>
          <div class="fopl-label">Location</div>
          <div class="fopl-value">
            13137 Poway Rd<br>
            Poway, CA 92064
          </div>
        </div>
      </div>
      <div class="fopl-info-item">
        <div class="fopl-info-icon">📞</div>
        <div>
          <div class="fopl-label">Phone</div>
          <div class="fopl-value">
            <a href="tel:8585132862">858-513-2862</a>
          </div>
        </div>
      </div>
      <div class="fopl-info-item">
        <div class="fopl-info-icon">🕐</div>
        <div>
          <div class="fopl-label">Hours</div>
          <div class="fopl-value" id="fopl-hours">Loading...</div>
        </div>
      </div>
    </div>

    <hr class="fopl-divider">

    <!-- Gallery -->
    <div class="fopl-gallery-title">Browse Our Bookstore</div>
    <div class="fopl-gallery">
      <div class="fopl-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
          alt="Bookstore entrance"
          onerror="this.src='https://via.placeholder.com/400x300?text=Come+On+In'"
        />
        <div class="fopl-gallery-caption">Come on in and browse!</div>
      </div>
      <div class="fopl-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop"
          alt="Fiction, non-fiction, videos"
          onerror="this.src='https://via.placeholder.com/400x300?text=Fiction+%26+More'"
        />
        <div class="fopl-gallery-caption">We have fiction, non-fiction, videos...</div>
      </div>
      <div class="fopl-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop"
          alt="Free items"
          onerror="this.src='https://via.placeholder.com/400x300?text=Some+Items+Are+Free'"
        />
        <div class="fopl-gallery-caption">Some items are free!</div>
      </div>
      <div class="fopl-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop"
          alt="New stock all the time"
          onerror="this.src='https://via.placeholder.com/400x300?text=New+Items+All+the+Time'"
        />
        <div class="fopl-gallery-caption">You never know what you might find. We get new things all the time.</div>
      </div>
      <div class="fopl-gallery-item">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
          alt="Stop by and chat"
          onerror="this.src='https://via.placeholder.com/400x300?text=Stop+By+%26+Chat'"
        />
        <div class="fopl-gallery-caption">Stop by and chat. We just might have what you are looking for.</div>
      </div>
      <div class="fopl-gallery-item">
        <img
          src="/FOTPL/Images/bookstoresign.png"
          alt="Friends of the Poway Library Bookstore Sign"
        />
        <div class="fopl-gallery-caption">Find us at 13137 Poway Rd — look for our sign!</div>
      </div>
    </div>

    <hr class="fopl-divider">

    <!-- Inline Catalog -->
    <div class="fopl-catalog-section">
      <div class="fopl-catalog-header">
        <h3>Browse Our Inventory</h3>
        <div class="fopl-catalog-controls">
          <input type="text" id="bc-search" placeholder="Search title, author, series..." oninput="bcFilter()" />
          <select id="bc-age" onchange="bcFilter()">
            <option value="">All Ages</option>
            <option value="Kids">Kids</option>
            <option value="Middle Grade">Middle Grade</option>
            <option value="YA">YA</option>
          </select>
          <select id="bc-condition" onchange="bcFilter()">
            <option value="">Any Condition</option>
            <option value="Like New">Like New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>
      </div>

      <div class="fopl-catalog-grid" id="bc-grid">
        <div class="fopl-catalog-empty">Loading inventory…</div>
      </div>

      <div class="fopl-catalog-footer">
        <a href="/catalog">View Full Catalog &rarr;</a>
      </div>
    </div>

    <hr class="fopl-divider">

    <!-- Book request form -->
    <div class="fopl-request">
      <h3>Request a Book</h3>
      <p>
        Don't see what you're looking for? Submit a request and we'll keep an
        eye out for it the next time donations arrive.
      </p>
      <div class="fopl-request-form">
        <input type="text"  id="fopl-req-title"  placeholder="Book title or author" />
        <input type="text"  id="fopl-req-name"   placeholder="Your name" />
        <input type="tel"   id="fopl-req-phone"  placeholder="Phone (optional)" />
        <button onclick="submitBookRequest()">Submit</button>
      </div>
      <div class="fopl-request-msg" id="fopl-req-msg"></div>
    </div>

    <!-- Volunteer banner -->
    <div class="fopl-volunteer">
      <h3>Become a Volunteer</h3>
      <p>
        We rely on volunteers to sort donations, staff the bookstore, and keep
        things running. Join us and make a difference in your community!
      </p>
      <a class="fopl-btn" href="/bookstore/contact">Get Involved</a>
    </div>

  </div>

</div>

<script>
{
  const BACKEND_URL = window.FOPL_BACKEND;

  async function loadHours() {
    const el = document.getElementById('fopl-hours');
    try {
      const res = await fetch(`${BACKEND_URL}/api/bookstore/info`);
      if (!res.ok) throw new Error('no response');
      const data = await res.json();
      if (data.hours) {
        el.innerHTML = data.hours.replace(/\n/g, '<br>');
      } else {
        el.textContent = 'Call for hours';
      }
    } catch {
      el.textContent = 'Call for hours: 858-513-2862';
    }
  }

  // ── Book request form ───────────────────────────────────────────────────────
  async function submitBookRequest() {
    const title = document.getElementById('fopl-req-title').value.trim();
    const name  = document.getElementById('fopl-req-name').value.trim();
    const phone = document.getElementById('fopl-req-phone').value.trim();
    const msg   = document.getElementById('fopl-req-msg');

    if (!title || !name) {
      msg.style.display = 'block';
      msg.style.color = '#c00';
      msg.textContent = 'Please fill in the book title and your name.';
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/api/bookstore/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, name, phone })
      });
      const data = await res.json();
      msg.style.display = 'block';
      msg.style.color = '#023b0f';
      msg.textContent = data.message || 'Thank you! Your request has been submitted.';
      document.getElementById('fopl-req-title').value = '';
      document.getElementById('fopl-req-name').value  = '';
      document.getElementById('fopl-req-phone').value = '';
    } catch {
      msg.style.display = 'block';
      msg.style.color = '#023b0f';
      msg.textContent = 'Thank you! Your request has been noted. We will contact you if we find it.';
    }
  }

  // expose for onclick
  window.submitBookRequest = submitBookRequest;

  loadHours();

  // ── Inline catalog ──────────────────────────────────────────────────────────
  let bcAllBooks = [];

  const AGE_COLORS = {
    'Kids':         'age-kids',
    'Middle Grade': 'age-middle',
    'YA':           'age-ya',
    'Adult':        'age-adult',
  };

  function bcRender(books) {
    const grid = document.getElementById('bc-grid');
    if (!books.length) {
      grid.innerHTML = '<div class="fopl-catalog-empty">No books matched your search.</div>';
      return;
    }
    grid.innerHTML = books.slice(0, 24).map(b => {
      const ageClass = AGE_COLORS[b.age_group] || 'age-adult';
      const coverHtml = b.isbn
        ? `<img src="https://covers.openlibrary.org/b/isbn/${b.isbn}-M.jpg"
               alt="${b.title}"
               onerror="this.style.display='none';this.parentElement.style.fontSize='2.5rem';this.parentElement.textContent='📚';">`
        : '📚';
      const series = b.series ? `<div class="fopl-book-author" style="font-style:italic">${b.series}${b.series_num ? ' #' + b.series_num : ''}</div>` : '';
      return `
        <div class="fopl-book-card" onclick="window.location='/catalog'">
          <div class="fopl-book-cover">${coverHtml}</div>
          <div class="fopl-book-info">
            <div class="fopl-book-title">${b.title}</div>
            <div class="fopl-book-author">${b.author}</div>
            ${series}
            <div class="fopl-book-meta">
              <span class="fopl-book-price">$${parseFloat(b.price).toFixed(2)}</span>
              <span class="fopl-book-age ${ageClass}">${b.age_group}</span>
            </div>
          </div>
        </div>`;
    }).join('');
  }

  async function bcLoad() {
    try {
      const res = await fetch(`${BACKEND_URL}/api/fopl/books`);
      if (!res.ok) throw new Error();
      bcAllBooks = (await res.json()).filter(b => b.age_group !== 'Adult');
      bcRender(bcAllBooks);
    } catch {
      document.getElementById('bc-grid').innerHTML =
        '<div class="fopl-catalog-empty">Could not load inventory. <a href="/catalog">Try the full catalog page.</a></div>';
    }
  }

  function bcFilter() {
    const q   = (document.getElementById('bc-search').value || '').toLowerCase().trim();
    const age = document.getElementById('bc-age').value;
    const cond = document.getElementById('bc-condition').value;
    let books = bcAllBooks;
    if (q)    books = books.filter(b =>
      (b.title  || '').toLowerCase().includes(q) ||
      (b.author || '').toLowerCase().includes(q) ||
      (b.series || '').toLowerCase().includes(q) ||
      (b.genre  || '').toLowerCase().includes(q));
    if (age)  books = books.filter(b => b.age_group === age);
    if (cond) books = books.filter(b => b.condition === cond);
    bcRender(books);
  }

  window.bcFilter = bcFilter;
  bcLoad();
}
</script>
