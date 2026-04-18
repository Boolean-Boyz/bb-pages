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
    background: #0f1a12;
  }

  /* ── Grain overlay (matches home) ── */
  .shop-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 200px 200px;
  }

  /* ── Floating letter particles ── */
  .shop-particles {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }
  .shop-particle {
    position: absolute;
    font-family: 'Libre Baskerville', serif;
    color: rgba(212,168,83,0.10);
    animation: shop-float linear infinite;
    will-change: transform;
    user-select: none;
    pointer-events: none;
  }
  @keyframes shop-float {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
  }

  /* ── Scroll-reveal ── */
  .shop-reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .shop-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Hero ── */
  .shop-hero {
    background: #0f1a12;
    color: #fff;
    text-align: center;
    padding: 80px 24px 64px;
    position: relative;
    overflow: hidden;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* Subtle gradient mesh */
  .shop-hero::before {
    content: '';
    position: absolute;
    inset: -50%;
    background:
      radial-gradient(ellipse at 25% 40%, rgba(212,168,83,0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 75% 60%, rgba(45,184,77,0.04) 0%, transparent 50%);
    animation: shop-mesh 18s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: 0;
  }
  @keyframes shop-mesh {
    0% { transform: scale(1) rotate(0deg); }
    100% { transform: scale(1.08) rotate(1.5deg); }
  }
  .shop-hero > * { position: relative; z-index: 2; }

  .shop-hero-label {
    font-family: 'Cabin', sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.35em;
    color: rgba(212,168,83,0.5);
    margin: 0 0 20px;
  }

  .shop-hero h1 {
    font-family: 'Libre Baskerville', serif;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin: 0 0 16px;
    line-height: 1.1;
    color: #fff;
    border: none;
  }

  .shop-hero-sub {
    font-size: 1rem;
    color: rgba(255,255,255,0.4);
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    max-width: 460px;
    line-height: 1.8;
  }

  /* ── Info strip (address/phone/hours) ── */
  .shop-info-strip {
    background: rgba(0,0,0,0.18);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 48px 40px;
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    position: relative;
    z-index: 2;
  }

  .shop-info-row {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 800px;
  }

  .shop-info-item {
    text-align: center;
    padding: 0 44px;
    position: relative;
  }

  .shop-info-item + .shop-info-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 40px;
    background: rgba(255,255,255,0.08);
  }

  .shop-info-icon {
    font-size: 1.1rem;
    color: rgba(212,168,83,0.6);
    margin-bottom: 10px;
  }

  .shop-info-item .shop-label {
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(212,168,83,0.5);
    margin-bottom: 8px;
  }

  .shop-info-item .shop-value {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.6);
    line-height: 1.6;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }

  .shop-info-item a {
    color: #d4a853;
    text-decoration: none;
    font-weight: 400;
    transition: color 0.2s;
  }
  .shop-info-item a:hover { color: #e0bd70; }

  /* ── Section divider (open book) ── */
  .shop-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 40px;
    position: relative;
    z-index: 2;
  }
  .shop-divider-inner {
    width: 100%;
    max-width: 600px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212,168,83,0.2), transparent);
    position: relative;
  }
  .shop-divider-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 4px 14px;
    background: #0f1a12;
  }
  body.fopl-dark .shop-divider-icon { background: #0a0c0a; }

  /* ── Content wrapper ── */
  .shop-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 48px 40px;
    position: relative;
    z-index: 2;
  }

  /* ── Catalog section ── */
  .shop-catalog-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .shop-catalog-header h2 {
    font-family: 'Libre Baskerville', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 8px;
    border: none;
  }

  .shop-catalog-header p {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 0.9rem;
    color: rgba(255,255,255,0.4);
    margin: 0 0 24px;
  }

  .shop-catalog-controls {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .shop-catalog-controls input,
  .shop-catalog-controls select {
    padding: 10px 16px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    font-size: 0.82rem;
    font-family: 'Lato', sans-serif;
    outline: none;
    transition: border-color 0.3s, background 0.3s;
    background: rgba(255,255,255,0.04);
    color: #e0e0e0;
    letter-spacing: 0.02em;
  }

  .shop-catalog-controls input { width: 240px; }

  .shop-catalog-controls input:focus,
  .shop-catalog-controls select:focus {
    border-color: rgba(212,168,83,0.4);
    background: rgba(255,255,255,0.06);
  }

  .shop-catalog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 18px;
    margin-bottom: 20px;
  }

  /* ── Book card (glassmorphism) ── */
  .fopl-book-card {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s, border-color 0.4s;
    cursor: pointer;
    position: relative;
  }

  .fopl-book-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(212,168,83,0.06) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
  }

  .fopl-book-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.25);
    border-color: rgba(212,168,83,0.2);
  }
  .fopl-book-card:hover::before { opacity: 1; }

  .fopl-book-cover {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    flex-shrink: 0;
    background: rgba(255,255,255,0.02);
    position: relative;
    overflow: hidden;
  }

  .fopl-book-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .fopl-book-card:hover .fopl-book-cover img {
    transform: scale(1.04);
  }

  .fopl-book-info {
    padding: 14px 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .fopl-book-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.84rem;
    font-weight: 700;
    color: #eee;
    line-height: 1.35;
  }

  .fopl-book-author {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.4);
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }

  .fopl-book-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }

  .fopl-book-price {
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    color: #d4a853;
  }

  .fopl-book-age {
    font-size: 0.62rem;
    padding: 3px 8px;
    border-radius: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-family: 'Cabin', sans-serif;
  }

  .age-kids      { background: rgba(255,243,205,0.15); color: #f0c341; }
  .age-middle    { background: rgba(209,236,241,0.12); color: #7ecbd6; }
  .age-ya        { background: rgba(212,237,218,0.12); color: #7ed49b; }
  .age-adult     { background: rgba(248,215,218,0.12); color: #e8878c; }

  .shop-catalog-footer {
    text-align: center;
    margin-top: 16px;
  }

  .shop-catalog-footer a {
    color: rgba(212,168,83,0.7);
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid rgba(212,168,83,0.3);
    transition: color 0.3s, border-color 0.3s;
  }
  .shop-catalog-footer a:hover {
    color: #d4a853;
    border-color: #d4a853;
  }

  .fopl-catalog-empty {
    text-align: center;
    color: rgba(255,255,255,0.35);
    font-style: italic;
    padding: 40px 0;
    font-size: 0.9rem;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }

  /* ── Book request (glass card) ── */
  .shop-request {
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 18px;
    padding: 40px 36px;
    margin: 0 auto;
    max-width: 720px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.08);
    transition: border-color 0.4s;
    position: relative;
    z-index: 2;
  }
  .shop-request:hover {
    border-color: rgba(212,168,83,0.15);
  }

  .shop-request h3 {
    font-family: 'Libre Baskerville', serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 8px;
    border: none;
  }

  .shop-request p {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.45);
    margin: 0 0 24px;
    line-height: 1.7;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
  }

  .shop-request-form {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .shop-request-form input[type="text"],
  .shop-request-form input[type="email"],
  .shop-request-form input[type="tel"] {
    flex: 1;
    min-width: 150px;
    padding: 11px 16px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    font-size: 0.85rem;
    font-family: 'Lato', sans-serif;
    outline: none;
    transition: border-color 0.3s, background 0.3s;
    background: rgba(255,255,255,0.04);
    color: #e0e0e0;
  }

  .shop-request-form input:focus {
    border-color: rgba(212,168,83,0.4);
    background: rgba(255,255,255,0.06);
  }

  .shop-request-form button {
    padding: 11px 28px;
    background: #d4a853;
    color: #1a1a12;
    border: none;
    border-radius: 24px;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  }

  .shop-request-form button:hover {
    background: #e0bd70;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(212,168,83,0.2);
  }

  .shop-request-msg {
    margin-top: 14px;
    font-size: 0.85rem;
    color: #d4a853;
    font-weight: 600;
    font-family: 'Cabin', sans-serif;
    display: none;
  }

  /* ── Volunteer CTA ── */
  .shop-volunteer-strip {
    padding: 56px 40px;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .shop-volunteer {
    max-width: 560px;
    margin: 0 auto;
  }

  .shop-volunteer-label {
    font-family: 'Cabin', sans-serif;
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: rgba(212,168,83,0.5);
    margin: 0 0 16px;
  }

  .shop-volunteer h3 {
    font-family: 'Libre Baskerville', serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 12px;
    color: #fff;
    border: none;
  }

  .shop-volunteer p {
    margin: 0 0 28px;
    font-size: 0.95rem;
    color: rgba(255,255,255,0.45);
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 28px;
    line-height: 1.8;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }

  .shop-btn {
    display: inline-block;
    background: transparent;
    color: rgba(255,255,255,0.8);
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    padding: 12px 28px;
    border-radius: 28px;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,0.18);
    transition: background 0.3s, transform 0.3s, border-color 0.3s, color 0.3s;
  }

  .shop-btn:hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.5);
    color: #fff;
    transform: translateY(-2px);
  }

  /* ── Dark mode ── */
  body.fopl-dark .fopl-page { background: #0a0c0a; }
  body.fopl-dark .shop-hero { background: #0a0c0a; }
  body.fopl-dark .shop-info-strip { background: rgba(0,0,0,0.35); }
  body.fopl-dark .shop-grain { opacity: 0.04; }
  body.fopl-dark .shop-catalog-footer a { color: #d4a853; border-bottom-color: rgba(212,168,83,0.3); }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .shop-hero h1 { font-size: 2.4rem; }
    .shop-hero { padding: 64px 20px 48px; }
  }
  @media (max-width: 640px) {
    .shop-hero h1 { font-size: 1.8rem; }
    .shop-hero { padding: 48px 16px 36px; min-height: 30vh; }
    .shop-content { padding: 32px 18px; }
    .shop-info-row { flex-direction: column; align-items: center; gap: 28px; }
    .shop-info-item + .shop-info-item::before { display: none; }
    .shop-catalog-controls input { width: 100%; }
    .shop-catalog-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
    .shop-request { padding: 28px 20px; }
  }
</style>

<div class="fopl-page">

  <!-- Overlays -->
  <div class="shop-grain"></div>
  <div class="shop-particles" id="shop-particles"></div>

  <!-- Hero -->
  <div class="shop-hero">
    <p class="shop-hero-label shop-reveal">Friends of the Poway Library</p>
    <h1 class="shop-reveal">Our Bookstore</h1>
    <p class="shop-hero-sub shop-reveal">
      Gently used books, magazines, DVDs, puzzles and more — all at great prices, all supporting your local library.
    </p>
  </div>

  <!-- Info strip -->
  <div class="shop-info-strip">
    <div class="shop-info-row shop-reveal">
      <div class="shop-info-item">
        <div class="shop-info-icon">📍</div>
        <div>
          <div class="shop-label">Location</div>
          <div class="shop-value">13137 Poway Rd<br>Poway, CA 92064</div>
        </div>
      </div>
      <div class="shop-info-item">
        <div class="shop-info-icon">📞</div>
        <div>
          <div class="shop-label">Phone</div>
          <div class="shop-value"><a href="tel:8585132862">858-513-2862</a></div>
        </div>
      </div>
      <div class="shop-info-item">
        <div class="shop-info-icon">🕐</div>
        <div>
          <div class="shop-label">Hours</div>
          <div class="shop-value" id="fopl-hours">Loading...</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Divider -->
  <div class="shop-divider">
    <div class="shop-divider-inner">
      <div class="shop-divider-icon">
        <svg width="20" height="16" viewBox="0 0 24 20" fill="none" stroke="rgba(212,168,83,0.5)" stroke-width="1.5">
          <path d="M2 3h6a4 4 0 0 1 4 4 4 4 0 0 1 4-4h6"/>
          <path d="M2 3v14a1 1 0 0 0 1 1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 0 1-1V3"/>
        </svg>
      </div>
    </div>
  </div>

  <!-- Catalog -->
  <div class="shop-content">
    <div class="shop-catalog-header shop-reveal">
      <h2>Browse Our Inventory</h2>
      <p>New titles arrive weekly from generous community donations</p>
      <div class="shop-catalog-controls">
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

    <div class="shop-catalog-grid" id="bc-grid">
      <div class="fopl-catalog-empty">Loading inventory…</div>
    </div>

    <div class="shop-catalog-footer shop-reveal">
      <a href="/catalog">View Full Catalog &rarr;</a>
    </div>
  </div>

  <!-- Divider -->
  <div class="shop-divider">
    <div class="shop-divider-inner">
      <div class="shop-divider-icon">
        <svg width="20" height="16" viewBox="0 0 24 20" fill="none" stroke="rgba(212,168,83,0.5)" stroke-width="1.5">
          <path d="M2 3h6a4 4 0 0 1 4 4 4 4 0 0 1 4-4h6"/>
          <path d="M2 3v14a1 1 0 0 0 1 1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 0 1-1V3"/>
        </svg>
      </div>
    </div>
  </div>

  <!-- Request -->
  <div class="shop-content" style="padding-top: 0;">
    <div class="shop-request shop-reveal">
      <h3>Request a Book</h3>
      <p>
        Don't see what you're looking for? Submit a request and we'll keep an eye out the next time donations arrive.
      </p>
      <div class="shop-request-form">
        <input type="text"  id="fopl-req-title"  placeholder="Book title or author" />
        <input type="text"  id="fopl-req-name"   placeholder="Your name" />
        <input type="tel"   id="fopl-req-phone"  placeholder="Phone (optional)" />
        <button onclick="submitBookRequest()">Submit Request</button>
      </div>
      <div class="shop-request-msg" id="fopl-req-msg"></div>
    </div>
  </div>

  <!-- Volunteer -->
  <div class="shop-volunteer-strip shop-reveal">
    <div class="shop-volunteer">
      <p class="shop-volunteer-label">Make a Difference</p>
      <h3>Become a Volunteer</h3>
      <p>
        We rely on volunteers to sort donations, staff the bookstore, and keep things running. Join us and support your community.
      </p>
      <a class="shop-btn" href="/bookstore/contact">Get Involved</a>
    </div>
  </div>

</div>

<script>
{
  const BACKEND_URL = window.FOPL_BACKEND;

  // ── Floating letter particles ────────────────────────────────────────────
  (function() {
    var pc = document.getElementById('shop-particles');
    if (!pc) return;
    var glyphs = ['B','p','§','&','L','r','k','d','R','\u00b6','N','S','W','m'];
    for (var i = 0; i < 14; i++) {
      var p = document.createElement('div');
      p.className = 'shop-particle';
      p.textContent = glyphs[i % glyphs.length];
      p.style.fontSize = (10 + Math.random() * 14) + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (20 + Math.random() * 25) + 's';
      p.style.animationDelay = -(Math.random() * 30) + 's';
      p.style.opacity = 0.05 + Math.random() * 0.08;
      pc.appendChild(p);
    }
  })();

  // ── Scroll reveal ────────────────────────────────────────────────────────
  (function() {
    var els = document.querySelectorAll('.shop-reveal');
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
      els.forEach(function(el) { obs.observe(el); });
    } else {
      els.forEach(function(el) { el.classList.add('visible'); });
    }
  })();

  // ── Load hours ───────────────────────────────────────────────────────────
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

  // ── Book request form ───────────────────────────────────────────────────
  async function submitBookRequest() {
    const title = document.getElementById('fopl-req-title').value.trim();
    const name  = document.getElementById('fopl-req-name').value.trim();
    const phone = document.getElementById('fopl-req-phone').value.trim();
    const msg   = document.getElementById('fopl-req-msg');

    if (!title || !name) {
      msg.style.display = 'block';
      msg.style.color = '#e8878c';
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
      msg.style.color = '#d4a853';
      msg.textContent = data.message || 'Thank you! Your request has been submitted.';
      document.getElementById('fopl-req-title').value = '';
      document.getElementById('fopl-req-name').value  = '';
      document.getElementById('fopl-req-phone').value = '';
    } catch {
      msg.style.display = 'block';
      msg.style.color = '#d4a853';
      msg.textContent = 'Thank you! Your request has been noted. We will contact you if we find it.';
    }
  }

  window.submitBookRequest = submitBookRequest;
  loadHours();

  // ── Inline catalog ──────────────────────────────────────────────────────
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
        '<div class="fopl-catalog-empty">Could not load inventory. <a href="/catalog" style="color:#d4a853">Try the full catalog page.</a></div>';
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
