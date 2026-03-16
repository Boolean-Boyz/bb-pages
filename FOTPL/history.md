---
layout: fopl
title: History — Friends of the Poway Library
permalink: /history
description: The history of the Friends of the Poway Library organization.
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: 'Lato', sans-serif; background: #fff; }

  /* ── Nav ── */
  .fopl-nav {
    background: #023b0f;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 30px; flex-wrap: wrap;
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
    background: #023b0f; color: #fff;
    text-align: center; padding: 56px 24px 48px;
  }
  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif; font-size: 2.2rem; font-weight: 700;
    margin: 0; color: #fff; border: none; text-transform: uppercase; letter-spacing: 0.04em;
  }

  /* ── Content ── */
  .fopl-content {
    max-width: 820px; margin: 0 auto; padding: 52px 40px;
  }
  .fopl-content p {
    font-size: 1.05rem; line-height: 1.85; color: #444; margin: 0 0 20px;
  }

  /* ── Timeline ── */
  .fopl-timeline { margin: 40px 0; border-left: 3px solid #023b0f; padding-left: 28px; }
  .fopl-timeline-item { margin-bottom: 32px; position: relative; }
  .fopl-timeline-item::before {
    content: '';
    position: absolute;
    left: -37px; top: 5px;
    width: 14px; height: 14px;
    background: #023b0f;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 0 0 2px #023b0f;
  }
  .fopl-timeline-year {
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.8rem;
    text-transform: uppercase; letter-spacing: 0.1em; color: #023b0f; margin-bottom: 4px;
  }
  .fopl-timeline-item p { margin: 0; font-size: 1rem; color: #444; line-height: 1.7; }

  /* ── Footer ── */
  .fopl-footer {
    background: #023b0f; color: rgba(255,255,255,0.7);
    text-align: center; padding: 22px 20px; font-size: 0.85rem;
  }
  .fopl-footer a { color: rgba(255,255,255,0.85); text-decoration: none; }
  .fopl-footer a:hover { text-decoration: underline; }

  @media (max-width: 640px) {
    .fopl-nav { flex-direction: column; align-items: flex-start; padding: 0 16px; }
    .fopl-nav-links { flex-wrap: wrap; }
    .fopl-nav-links li a { padding: 12px 14px; font-size: 0.85rem; }
    .fopl-content { padding: 32px 20px; }
  }
</style>

<nav class="fopl-nav">
  <div class="fopl-logo-wrap">
    <img src="https://img1.wsimg.com/isteam/ip/1261387c-c13d-44e7-b4b8-53ebdce2bc66/fopllogo1B.jpg"
         alt="Friends of the Poway Library" />
  </div>
  <ul class="fopl-nav-links">
    <li><a href="/home">Home</a></li>
    <li class="active"><a href="/history">History</a></li>
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

<div class="fopl-hero">
  <h1>Our History</h1>
</div>

<div class="fopl-content">
  <p>
    The Friends of the Poway Library has been a cornerstone of the Poway community for
    decades, working to enrich the library experience for every resident. What began as a
    small group of dedicated volunteers has grown into a thriving nonprofit organization
    that funds programs, purchases materials, and advocates on behalf of the library.
  </p>

  <div class="fopl-timeline">
    <div class="fopl-timeline-item">
      <div class="fopl-timeline-year">1978</div>
      <p>The Friends of the Poway Library is founded by a group of community volunteers committed to supporting the newly established Poway Branch Library.</p>
    </div>
    <div class="fopl-timeline-item">
      <div class="fopl-timeline-year">1980s</div>
      <p>The organization launches its first used book sales, raising funds to supplement the library's budget for programs and materials.</p>
    </div>
    <div class="fopl-timeline-item">
      <div class="fopl-timeline-year">1990s</div>
      <p>A permanent bookstore is established at the Poway Library location, providing a year-round source of funding and a beloved destination for book lovers.</p>
    </div>
    <div class="fopl-timeline-item">
      <div class="fopl-timeline-year">2000s</div>
      <p>The Friends expand their giving, funding author visits, literacy programs, and special collections that the library's core budget cannot support.</p>
    </div>
    <div class="fopl-timeline-item">
      <div class="fopl-timeline-year">Today</div>
      <p>The Friends continue to operate the bookstore at 13137 Poway Rd, welcoming donations and shoppers daily. Hundreds of volunteers give their time each year to keep the library's mission alive.</p>
    </div>
  </div>

  <p>
    All proceeds from the bookstore and special sales go directly back to the Poway Library,
    funding everything from children's story time to adult literacy workshops. We are proud
    to have served this community for over 45 years.
  </p>
</div>

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
