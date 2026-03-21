---
layout: fopl
title: Bookstore
permalink: /bookstore
description: Friends of the Poway Library Bookstore - Unique gently used books, magazines, DVDs, CDs, puzzles and more.
---

<style>
  /* ── Reset & fonts ── */
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap');

  /* Break out of Jekyll's centered content wrapper */
  .post-content {
    padding: 0 !important;
    margin: 0 !important;
    max-width: none !important;
  }

  .fopl-page {
    font-family: 'Lato', sans-serif;
    color: #333;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 0;
    box-sizing: border-box;
  }

  /* ── Top nav bar ── */
  .fopl-nav {
    background-color: #023b0f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    flex-wrap: wrap;
    gap: 10px;
  }

  .fopl-logo-wrap img {
    height: 104px;
    width: auto;
    display: block;
    padding: 10px 0;
  }

  .fopl-nav-links {
    display: flex;
    gap: 0;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .fopl-nav-links li a {
    display: block;
    color: #fff;
    text-decoration: none;
    font-family: 'Cabin', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 18px 20px;
    transition: background 0.2s;
  }

  .fopl-nav-links li a:hover,
  .fopl-nav-links li.active a {
    background-color: rgba(255,255,255,0.12);
  }

  /* ── Nav dropdown ── */
  .fopl-nav-has-dropdown { position: relative; }
  .fopl-nav-dropdown {
    display: none; position: absolute; top: 100%; right: 0;
    background: #fff; border-radius: 4px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    list-style: none; margin: 0; padding: 6px 0;
    min-width: 140px; z-index: 1000;
  }
  .fopl-nav-dropdown.open { display: block; }
  .fopl-nav-dropdown li a {
    display: block; padding: 10px 18px; color: #023b0f;
    font-family: 'Cabin', sans-serif; font-size: 0.88rem;
    font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.04em; text-decoration: none; white-space: nowrap;
    background: none;
  }
  .fopl-nav-dropdown li a:hover { background: #f4f8f4 !important; }

  /* ── Auth nav pill ── */
  #nav-auth-item a#nav-auth-link {
    background: rgba(255,255,255,0.15);
    border: 1.5px solid rgba(255,255,255,0.45);
    border-radius: 20px;
    padding: 8px 18px;
    margin: 8px 0;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
  }
  #nav-auth-item a#nav-auth-link:hover {
    background: rgba(255,255,255,0.28);
  }

  /* ── Hero / heading ── */
  .fopl-hero {
    background-color: #023b0f;
    color: #fff;
    text-align: center;
    padding: 48px 24px 40px;
  }

  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif;
    font-size: 2.1rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 0;
    line-height: 1.25;
    color: #fff;
    border: none;
  }

  /* ── Main content card ── */
  .fopl-content {
    background: #fff;
    color: #333;
    padding: 40px 40px 32px;
  }

  .fopl-intro {
    font-size: 1.15rem;
    line-height: 1.75;
    max-width: 780px;
    margin: 0 auto 36px;
    text-align: center;
  }

  /* ── Info row (address / phone) ── */
  .fopl-info-row {
    display: flex;
    justify-content: center;
    gap: 48px;
    flex-wrap: wrap;
    margin-bottom: 40px;
    padding: 20px 24px;
    background: #f4f8f4;
    border-left: 5px solid #023b0f;
    border-radius: 4px;
  }

  .fopl-info-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .fopl-info-icon {
    font-size: 1.5rem;
    color: #023b0f;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .fopl-info-item .fopl-label {
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #023b0f;
    margin-bottom: 2px;
  }

  .fopl-info-item .fopl-value {
    font-size: 1rem;
    color: #333;
    line-height: 1.4;
  }

  .fopl-info-item a {
    color: #023b0f;
    text-decoration: none;
    font-weight: 600;
  }

  .fopl-info-item a:hover {
    text-decoration: underline;
  }

  /* ── Divider ── */
  .fopl-divider {
    border: none;
    border-top: 2px solid #e5e5e5;
    margin: 0 0 32px;
  }

  /* ── Gallery ── */
  .fopl-gallery-title {
    font-family: 'Cabin', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #023b0f;
    text-align: center;
    margin-bottom: 24px;
  }

  .fopl-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  .fopl-gallery-item {
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.12);
    display: flex;
    flex-direction: column;
    background: #fff;
    transition: transform 0.25s, box-shadow 0.25s;
  }

  .fopl-gallery-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(2,59,15,0.2);
  }

  .fopl-gallery-item img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }

  .fopl-gallery-caption {
    padding: 12px 14px;
    font-size: 0.88rem;
    color: #444;
    line-height: 1.45;
    flex: 1;
    font-style: italic;
    border-top: 3px solid #023b0f;
  }

  /* ── Volunteer banner ── */
  .fopl-volunteer {
    background: #023b0f;
    color: #fff;
    text-align: center;
    padding: 28px 24px;
    border-radius: 6px;
    margin-bottom: 32px;
  }

  .fopl-volunteer h3 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 10px;
    color: #fff;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .fopl-volunteer p {
    margin: 0 0 16px;
    font-size: 1rem;
    opacity: 0.9;
  }

  .fopl-btn {
    display: inline-block;
    background: #fff;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 12px 30px;
    border-radius: 3px;
    text-decoration: none;
    border: 2px solid #fff;
    transition: background 0.2s, color 0.2s;
  }

  .fopl-btn:hover {
    background: #023b0f;
    color: #fff;
  }

  /* ── Inline catalog ── */
  .fopl-catalog-section {
    margin-bottom: 36px;
  }

  .fopl-catalog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 18px;
  }

  .fopl-catalog-header h3 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #023b0f;
    margin: 0;
    border: none;
  }

  .fopl-catalog-controls {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
  }

  .fopl-catalog-controls input {
    padding: 8px 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.9rem;
    font-family: 'Lato', sans-serif;
    outline: none;
    width: 220px;
    transition: border-color 0.2s;
  }

  .fopl-catalog-controls input:focus { border-color: #023b0f; }

  .fopl-catalog-controls select {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.9rem;
    font-family: 'Lato', sans-serif;
    background: #fff;
    outline: none;
    cursor: pointer;
  }

  .fopl-catalog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
    margin-bottom: 16px;
  }

  .fopl-book-card {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }

  .fopl-book-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(2,59,15,0.15);
  }

  .fopl-book-cover {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    flex-shrink: 0;
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
    font-size: 0.85rem;
    font-weight: 700;
    color: #111;
    line-height: 1.3;
  }

  .fopl-book-author {
    font-size: 0.78rem;
    color: #666;
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
    font-size: 0.9rem;
    color: #023b0f;
  }

  .fopl-book-age {
    font-size: 0.72rem;
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
    margin-top: 4px;
  }

  .fopl-catalog-footer a {
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    border-bottom: 2px solid #023b0f;
    padding-bottom: 1px;
  }

  .fopl-catalog-footer a:hover { opacity: 0.7; }

  .fopl-catalog-empty {
    text-align: center;
    color: #888;
    font-style: italic;
    padding: 32px 0;
    font-size: 0.95rem;
  }

  /* ── Book request section ── */
  .fopl-request {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 28px 32px;
    margin-bottom: 32px;
  }

  .fopl-request h3 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #023b0f;
    margin: 0 0 6px;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .fopl-request p {
    font-size: 0.95rem;
    color: #555;
    margin: 0 0 18px;
  }

  .fopl-request-form {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .fopl-request-form input[type="text"],
  .fopl-request-form input[type="email"],
  .fopl-request-form input[type="tel"] {
    flex: 1;
    min-width: 160px;
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.95rem;
    font-family: 'Lato', sans-serif;
    outline: none;
    transition: border-color 0.2s;
  }

  .fopl-request-form input:focus {
    border-color: #023b0f;
  }

  .fopl-request-form button {
    padding: 10px 24px;
    background: #023b0f;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.2s;
  }

  .fopl-request-form button:hover {
    background: #045218;
  }

  .fopl-request-msg {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #023b0f;
    font-weight: 600;
    display: none;
  }

  /* ── Footer ── */
  .fopl-footer {
    background: #023b0f;
    color: rgba(255,255,255,0.7);
    text-align: center;
    padding: 22px 20px;
    font-size: 0.85rem;
  }

  .fopl-footer a {
    color: rgba(255,255,255,0.85);
    text-decoration: none;
  }

  .fopl-footer a:hover {
    text-decoration: underline;
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .fopl-nav {
      flex-direction: column;
      align-items: flex-start;
      padding: 0 16px;
    }
    .fopl-nav-links {
      flex-wrap: wrap;
    }
    .fopl-nav-links li a {
      padding: 12px 14px;
      font-size: 0.85rem;
    }
    .fopl-hero h1 {
      font-size: 1.45rem;
    }
    .fopl-content {
      padding: 28px 18px;
    }
    .fopl-info-row {
      flex-direction: column;
      gap: 20px;
    }
    .fopl-gallery {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
</style>

<div class="fopl-page">

  <!-- Navigation -->
  <nav class="fopl-nav">
    <div class="fopl-logo-wrap">
      <img
        src="/FOTPL/newfopllogo.png"
        alt="Friends of the Poway Library"
      />
    </div>
    <ul class="fopl-nav-links">
      <li><a href="/home">Home</a></li>
      <li><a href="/history">History</a></li>
        <li class="active"><a href="/bookstore">Bookstore</a></li>
      <li><a href="/news">Newsletters</a></li>
      <li><a href="/puzzles">Puzzles</a></li>
      <li><a href="/contact">Contact Us</a></li>
      <li id="nav-auth-item"><a href="/login" id="nav-auth-link">Sign In</a>
        <ul class="fopl-nav-dropdown" id="nav-auth-dropdown">
          <li><a href="/profile">Profile</a></li>
          <li><a href="#" id="nav-signout-btn">Sign Out</a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <!-- Hero -->
  <div class="fopl-hero">
    <h1>Our Bookstore Has Unique Books for Sale</h1>
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
            <option value="Adult">Adult</option>
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

  <!-- Footer -->
  <div class="fopl-footer">
    &copy; 2025 Friends of the Poway Library &mdash;
    <a href="https://powayfriends.org">powayfriends.org</a>
  </div>

</div>

<script>
{
  // ── Bookstore hours (fetched from backend API) ──────────────────────────────
  const BACKEND_URL = 'http://127.0.0.1:8587';

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
      bcAllBooks = await res.json();
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

  // ── Auth nav dropdown ──
  const foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  const authItem = document.getElementById('nav-auth-item');
  const authLink = document.getElementById('nav-auth-link');
  const dropdown = document.getElementById('nav-auth-dropdown');
  const signoutBtn = document.getElementById('nav-signout-btn');
  if (foplUser && authLink) {
    authItem.classList.add('fopl-nav-has-dropdown');
    authLink.textContent = foplUser.name.split(' ')[0];
    authLink.href = '#';
    authLink.onclick = (e) => { e.preventDefault(); dropdown.classList.toggle('open'); };
    document.addEventListener('click', (e) => {
      if (!authItem.contains(e.target)) dropdown.classList.remove('open');
    });
    signoutBtn.onclick = async (e) => {
      e.preventDefault();
      await fetch('http://127.0.0.1:8587/api/fopl/login', { method: 'DELETE', credentials: 'include' }).catch(() => {});
      localStorage.removeItem('fopl_user');
      window.location.href = '/home';
    };
  }
}
</script>
