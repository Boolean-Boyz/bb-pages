---
layout: fopl
title: Friends of the Poway Library
permalink: /home
description: Friends of the Poway Library — supporting literacy, community programs, and the Poway Library since 1978.
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  body { margin: 0; font-family: 'Lato', sans-serif; background: #fff; }

  /* ── Nav ── */
  .fopl-nav {
    background: #023b0f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    flex-wrap: wrap;
  }
  .fopl-logo-wrap img { height: 104px; width: auto; padding: 10px 0; display: block; }
  .fopl-nav-links { display: flex; list-style: none; margin: 0; padding: 0; }
  .fopl-nav-links li a {
    display: block; color: #fff; text-decoration: none;
    font-family: 'Cabin', sans-serif; font-size: 0.95rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.04em;
    padding: 18px 20px; transition: background 0.2s;
  }
  .fopl-nav-links li a:hover,
  .fopl-nav-links li.active a { background: rgba(255,255,255,0.12); }

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
  .fopl-card-icon { font-size: 2.4rem; margin-bottom: 14px; }
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

  /* ── Footer ── */
  .fopl-footer {
    background: #023b0f;
    color: rgba(255,255,255,0.7);
    text-align: center;
    padding: 22px 20px;
    font-size: 0.85rem;
  }
  .fopl-footer a { color: rgba(255,255,255,0.85); text-decoration: none; }
  .fopl-footer a:hover { text-decoration: underline; }

  @media (max-width: 640px) {
    .fopl-nav { flex-direction: column; align-items: flex-start; padding: 0 16px; }
    .fopl-nav-links { flex-wrap: wrap; }
    .fopl-nav-links li a { padding: 12px 14px; font-size: 0.85rem; }
    .fopl-hero h1 { font-size: 1.8rem; }
    .fopl-cards { padding: 32px 18px; }
    .fopl-about { padding: 36px 20px; }
  }
</style>

<!-- Nav -->
<nav class="fopl-nav">
  <div class="fopl-logo-wrap">
    <img src="https://img1.wsimg.com/isteam/ip/1261387c-c13d-44e7-b4b8-53ebdce2bc66/fopllogo1B.jpg"
         alt="Friends of the Poway Library" />
  </div>
  <ul class="fopl-nav-links">
    <li class="active"><a href="/home">Home</a></li>
    <li><a href="/history">History</a></li>
    <li><a href="/bookstore">Bookstore</a></li>
    <li><a href="/news">Newsletters</a></li>
    <li><a href="/contact">Contact Us</a></li>
    <li id="nav-auth-item"><a href="/fopl-login" id="nav-auth-link">Sign In</a>
      <ul class="fopl-nav-dropdown" id="nav-auth-dropdown">
        <li><a href="/profile">Profile</a></li>
        <li><a href="#" id="nav-signout-btn">Sign Out</a></li>
      </ul>
    </li>
  </ul>
</nav>

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
  </div>
</div>

<!-- Feature cards -->
<div class="fopl-cards">
  <div class="fopl-card">
    <div class="fopl-card-icon">📚</div>
    <h3>Bookstore</h3>
    <p>Gently used books, magazines, DVDs, puzzles and more — all at great prices.</p>
    <a href="/bookstore">Browse the Store</a>
  </div>
  <div class="fopl-card">
    <div class="fopl-card-icon">📰</div>
    <h3>Newsletters</h3>
    <p>Stay up to date with our latest news, events, and library updates.</p>
    <a href="/news">Read Newsletters</a>
  </div>
  <div class="fopl-card">
    <div class="fopl-card-icon">🤝</div>
    <h3>Volunteer</h3>
    <p>Help sort donations, staff the bookstore, and support your community.</p>
    <a href="/contact">Join Us</a>
  </div>
  <div class="fopl-card">
    <div class="fopl-card-icon">📍</div>
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

<!-- Footer -->
<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>

<script>
{
  const foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  const authItem = document.getElementById('nav-auth-item');
  const authLink = document.getElementById('nav-auth-link');
  const dropdown = document.getElementById('nav-auth-dropdown');
  const signoutBtn = document.getElementById('nav-signout-btn');

  if (foplUser && authLink) {
    authItem.classList.add('fopl-nav-has-dropdown');
    authLink.textContent = foplUser.name.split(' ')[0];
    authLink.href = '#';
    authLink.onclick = (e) => {
      e.preventDefault();
      dropdown.classList.toggle('open');
    };
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
