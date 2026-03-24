---
layout: fopl
title: Friends of the Poway Library
permalink: /home
description: Friends of the Poway Library — supporting literacy, community programs, and the Poway Library since 1978.
fopl_nav_active: home
---

<style>
  body { background: #fff; }

  .fopl-logo-wrap img { height: 208px; }

  /* ── Photo Header ── */
  .fopl-photo-header {
    display: flex;
    align-items: stretch;
    height: 300px;
    overflow: hidden;
    position: relative;
  }
  .fopl-photo-header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  .fopl-photo-header-overlay {
    position: absolute;
    inset: 0;
    background: rgba(2,59,15,0.50);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fopl-photo-header-overlay h2 {
    font-family: 'Cabin', sans-serif;
    font-size: 2.6rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    letter-spacing: 0.03em;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
    margin: 0;
    border: none;
  }
  @media (max-width: 640px) {
    .fopl-photo-header { height: 180px; }
    .fopl-photo-header-overlay h2 { font-size: 1.5rem; }
  }
  .fopl-nav-links li.games-invite a {
    background: rgba(255,255,255,0.12);
    color: #fff;
  }

  /* ── Hero ── */
  .fopl-hero {
    background: #023b0f;
    color: #fff;
    text-align: center;
    padding: 72px 24px 60px;
  }
  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif;
    font-size: 2.6rem;
    font-weight: 700;
    margin: 0 0 16px;
    letter-spacing: 0.02em;
    color: #fff;
    border: none;
  }
  .fopl-hero p {
    font-size: 1.15rem;
    opacity: 0.88;
    max-width: 600px;
    margin: 0 auto 32px;
    line-height: 1.7;
  }
  .fopl-hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
  .fopl-hero-btn {
    display: inline-block;
    padding: 13px 32px;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 4px;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
  }
  .fopl-hero-btn.primary { background: #fff; color: #023b0f; }
  .fopl-hero-btn.primary:hover { background: #e8f5e9; }
  .fopl-hero-btn.outline { background: transparent; color: #fff; border: 2px solid #fff; }
  .fopl-hero-btn.outline:hover { background: rgba(255,255,255,0.12); }
  .fopl-hero-btn.games {
    background: rgba(255,255,255,0.15);
    color: #fff;
    border: 2px solid #fff;
  }
  .fopl-hero-btn.games:hover { background: rgba(255,255,255,0.25); }

  /* ── Cards ── */
  .fopl-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    padding: 56px 40px;
    background: #f4f8f4;
  }
  .fopl-card {
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.08);
    padding: 32px 28px;
    border-top: 4px solid #023b0f;
    text-align: center;
  }
  .fopl-card-icon {
    width: 52px; height: 52px;
    margin: 0 auto 14px;
    border-radius: 50%;
    background: #e8f5e9;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .fopl-card h3 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #023b0f;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0 0 10px;
    border: none;
  }
  .fopl-card p { font-size: 0.97rem; color: #555; line-height: 1.65; margin: 0 0 20px; }
  .fopl-card a {
    display: inline-block;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    border-bottom: 2px solid #023b0f;
    padding-bottom: 2px;
    transition: opacity 0.2s;
  }
  .fopl-card a:hover { opacity: 0.7; }

  /* ── About strip ── */
  .fopl-about {
    padding: 52px 40px;
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }
  .fopl-about h2 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: #023b0f;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0 0 16px;
    border: none;
  }
  .fopl-about p { font-size: 1.05rem; color: #444; line-height: 1.8; margin: 0; }

  @media (max-width: 640px) {
    .fopl-hero h1 { font-size: 1.8rem; }
    .fopl-cards { padding: 32px 18px; }
    .fopl-about { padding: 36px 20px; }
  }
</style>

<!-- Photo Header -->
<div class="fopl-photo-header">
  <img src="/FOTPL/foplbuilding.png" alt="Friends of the Poway Library Building">
  <div class="fopl-photo-header-overlay">
    <h2>Friends of the Poway Library</h2>
  </div>
</div>

<!-- Hero -->
<div class="fopl-hero">
  <h1>Friends of the Poway Library</h1>
  <p>
    A nonprofit volunteer organization supporting the Poway Library
    through fundraising, advocacy, and community programs since 1978.
  </p>
  <div class="fopl-hero-btns">
    <a class="fopl-hero-btn primary" href="/bookstore">Visit Our Bookstore</a>
    <a class="fopl-hero-btn outline" href="/contact">Get Involved</a>
    <a class="fopl-hero-btn games" href="/puzzles">Play Games</a>
  </div>
</div>

<!-- Feature cards -->
<div class="fopl-cards">
  <div class="fopl-card">
    <div class="fopl-card-icon">Books</div>
    <h3>Bookstore</h3>
    <p>Gently used books, magazines, DVDs, puzzles and more — all at great prices.</p>
    <a href="/bookstore">Browse the Store</a>
  </div>
  <div class="fopl-card">
    <div class="fopl-card-icon">News</div>
    <h3>Newsletters</h3>
    <p>Stay up to date with our latest news, events, and library updates.</p>
    <a href="/news">Read Newsletters</a>
  </div>
  <div class="fopl-card">
    <div class="fopl-card-icon">Help</div>
    <h3>Volunteer</h3>
    <p>Help sort donations, staff the bookstore, and support your community.</p>
    <a href="/contact">Join Us</a>
  </div>
  <div class="fopl-card">
    <div class="fopl-card-icon">Visit</div>
    <h3>Visit Us</h3>
    <p>13137 Poway Rd, Poway CA 92064<br>Call: <a href="tel:8585132862">858-513-2862</a></p>
    <a href="/contact">Get Directions</a>
  </div>
</div>

<!-- About -->
<div class="fopl-about">
  <h2>About Us</h2>
  <p>
    The Friends of the Poway Library is a 501(c)(3) nonprofit organization dedicated to
    enriching our community through support of the Poway Branch Library. We raise funds
    through our used bookstore and special sales, and use those funds to sponsor library
    programs, purchase materials, and advocate for library services.
  </p>
</div>


