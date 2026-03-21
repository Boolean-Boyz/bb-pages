---
layout: fopl
title: Newsletters — Friends of the Poway Library
permalink: /news
description: Read past issues of The Open Book, the official newsletter of the Friends of the Poway Library.
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: 'Lato', sans-serif; background: #f4f8f4; }

  /* ── Nav ── */
  .fopl-nav {
    background: #023b0f; display: flex; align-items: center;
    justify-content: space-between; padding: 0 30px; flex-wrap: wrap;
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
  .fopl-nav-has-dropdown { position: relative; }
  .fopl-nav-dropdown {
    display: none; position: absolute; top: 100%; right: 0;
    background: #fff; border-radius: 4px; box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    list-style: none; margin: 0; padding: 6px 0; min-width: 140px; z-index: 1000;
  }
  .fopl-nav-dropdown.open { display: block; }
  .fopl-nav-dropdown li a {
    display: block; padding: 10px 18px; color: #023b0f;
    font-family: 'Cabin', sans-serif; font-size: 0.88rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.04em; text-decoration: none; background: none;
  }
  .fopl-nav-dropdown li a:hover { background: #f4f8f4 !important; }

  /* ── Auth nav ── */
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

  /* ── Hero ── */
  .fopl-hero {
    background: #023b0f; color: #fff; text-align: center; padding: 56px 24px 48px;
  }
  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif; font-size: 2.2rem; font-weight: 700;
    margin: 0 0 10px; color: #fff; border: none; text-transform: uppercase; letter-spacing: 0.04em;
  }
  .fopl-hero p { font-size: 1.05rem; opacity: 0.85; margin: 0; max-width: 600px; margin: 0 auto; line-height: 1.7; }

  /* ── Content ── */
  .news-content {
    max-width: 960px; margin: 0 auto; padding: 48px 40px;
  }

  /* ── Latest issue highlight ── */
  .latest-issue {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 16px rgba(2,59,15,0.1);
    border-top: 4px solid #023b0f;
    padding: 32px; margin-bottom: 40px;
    display: flex; gap: 28px; align-items: flex-start;
  }
  .latest-issue-badge {
    flex-shrink: 0; background: #023b0f; color: #fff;
    font-family: 'Cabin', sans-serif; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    padding: 5px 12px; border-radius: 20px;
  }
  .latest-issue-body { flex: 1; }
  .latest-issue-body h2 {
    font-family: 'Cabin', sans-serif; font-size: 1.3rem; font-weight: 700;
    color: #023b0f; margin: 0 0 8px; border: none; text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .latest-issue-body p {
    font-size: 0.97rem; color: #555; line-height: 1.65; margin: 0 0 16px;
  }
  .latest-issue-btn {
    display: inline-block; padding: 10px 24px; background: #023b0f; color: #fff;
    text-decoration: none; border-radius: 4px;
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.88rem;
    text-transform: uppercase; letter-spacing: 0.05em; transition: background 0.2s;
  }
  .latest-issue-btn:hover { background: #045218; }

  /* ── Section heading ── */
  .section-heading {
    font-family: 'Cabin', sans-serif; font-size: 1.2rem; font-weight: 700;
    color: #023b0f; text-transform: uppercase; letter-spacing: 0.05em;
    margin: 0 0 20px; border: none;
  }

  /* ── Newsletter grid ── */
  .newsletter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px; margin-bottom: 40px;
  }
  .newsletter-card {
    background: #fff; border-radius: 6px;
    box-shadow: 0 2px 10px rgba(2,59,15,0.07);
    border-left: 4px solid #023b0f;
    padding: 20px 24px;
    display: flex; flex-direction: column; gap: 8px;
  }
  .newsletter-card-date {
    font-family: 'Cabin', sans-serif; font-size: 0.78rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #6b756b;
  }
  .newsletter-card h3 {
    font-family: 'Cabin', sans-serif; font-size: 1.05rem; font-weight: 700;
    color: #023b0f; margin: 0; border: none;
  }
  .newsletter-card p {
    font-size: 0.92rem; color: #555; line-height: 1.55; margin: 0;
  }
  .newsletter-card-actions {
    display: flex; gap: 12px; margin-top: auto; padding-top: 8px;
  }
  .newsletter-card-actions a {
    font-family: 'Cabin', sans-serif; font-size: 0.8rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.05em;
    text-decoration: none; color: #023b0f; transition: opacity 0.2s;
  }
  .newsletter-card-actions a:hover { opacity: 0.7; }
  .newsletter-card-actions a.download-btn {
    background: #e8f5e9; padding: 5px 12px; border-radius: 4px;
  }

  /* ── PDF Viewer ── */
  .pdf-viewer-section {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.08);
    padding: 24px; margin-bottom: 40px;
  }
  .pdf-viewer-section h2 {
    font-family: 'Cabin', sans-serif; font-size: 1.1rem; font-weight: 700;
    color: #023b0f; text-transform: uppercase; letter-spacing: 0.04em;
    margin: 0 0 16px; border: none;
  }
  .pdf-viewer-frame {
    width: 100%; height: 600px; border: 1px solid #dce8dc; border-radius: 4px;
  }
  .pdf-viewer-fallback {
    display: none; text-align: center; padding: 40px 20px;
    background: #f4f8f4; border-radius: 4px; border: 1px dashed #b8c8b8;
  }
  .pdf-viewer-fallback p { color: #555; margin: 0 0 12px; }

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
    .news-content { padding: 32px 18px; }
    .latest-issue { flex-direction: column; }
    .pdf-viewer-frame { height: 400px; }
  }
</style>

<nav class="fopl-nav">
  <div class="fopl-logo-wrap">
    <img src="/FOTPL/newfopllogo.png"
         alt="Friends of the Poway Library" />
  </div>
  <ul class="fopl-nav-links">
    <li><a href="/home">Home</a></li>
    <li><a href="/history">History</a></li>
    <li><a href="/bookstore">Bookstore</a></li>
    <li class="active"><a href="/news">Newsletters</a></li>
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

<div class="fopl-hero">
  <h1>Newsletter Library</h1>
  <p>Read past and current issues of <em>The Open Book</em>, the official newsletter of the Friends of the Poway Library.</p>
</div>

<div class="news-content">

  <!-- Latest issue -->
  <div class="latest-issue">
    <div>
      <span class="latest-issue-badge">Latest Issue</span>
    </div>
    <div class="latest-issue-body">
      <h2>The Open Book — Jan&ndash;Mar 2024</h2>
      <p>The newest edition of our quarterly newsletter featuring upcoming events, bookstore updates, volunteer spotlights, and community news.</p>
      <a class="latest-issue-btn" href="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/FOPL%20Newsletter%20Jan%20-%20Mar%202024.pdf?ver=1708122693871" target="_blank" rel="noopener">
        Read Latest Issue (PDF)
      </a>
    </div>
  </div>

  <!-- PDF Viewer -->
  <div class="pdf-viewer-section">
    <h2>Preview</h2>
    <iframe class="pdf-viewer-frame" id="pdf-viewer"
      src="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/FOPL%20Newsletter%20Jan%20-%20Mar%202024.pdf?ver=1708122693871"
      title="Newsletter Preview"></iframe>
    <div class="pdf-viewer-fallback" id="pdf-fallback">
      <p>Your browser does not support embedded PDFs.</p>
      <a class="latest-issue-btn" href="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/FOPL%20Newsletter%20Jan%20-%20Mar%202024.pdf?ver=1708122693871" target="_blank" rel="noopener">
        Download PDF Instead
      </a>
    </div>
  </div>

  <!-- Archive -->
  <h2 class="section-heading">Past Issues</h2>

  <div class="newsletter-grid">

    <div class="newsletter-card">
      <span class="newsletter-card-date">January – March 2024</span>
      <h3>The Open Book</h3>
      <p>Big Book Sale recap, new bookstore hours, and spring volunteer opportunities.</p>
      <div class="newsletter-card-actions">
        <a href="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/FOPL%20Newsletter%20Jan%20-%20Mar%202024.pdf?ver=1740431341498" target="_blank" rel="noopener">View</a>
        <a class="download-btn" href="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/FOPL%20Newsletter%20Jan%20-%20Mar%202024.pdf?ver=1740431341498" target="_blank" rel="noopener">Download</a>
      </div>
    </div>

    <div class="newsletter-card">
      <span class="newsletter-card-date">October – December 2023</span>
      <h3>The Open Book</h3>
      <p>Holiday sale dates, year-end fundraising totals, and community event highlights.</p>
      <div class="newsletter-card-actions">
        <a href="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/FOPL%20Newsletter%20Oct%20through%20Dec%202023.pdf?ver=1740431341498" target="_blank" rel="noopener">View</a>
        <a class="download-btn" href="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/FOPL%20Newsletter%20Oct%20through%20Dec%202023.pdf?ver=1740431341498" target="_blank" rel="noopener">Download</a>
      </div>
    </div>

    <div class="newsletter-card">
      <span class="newsletter-card-date">July – September 2023</span>
      <h3>The Open Book</h3>
      <p>Summer reading recap, Second Saturday concerts, and bookstore highlights.</p>
      <div class="newsletter-card-actions">
        <a href="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/2023%20July%20through%20September.pdf?ver=1740431341498" target="_blank" rel="noopener">View</a>
        <a class="download-btn" href="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/2023%20July%20through%20September.pdf?ver=1740431341498" target="_blank" rel="noopener">Download</a>
      </div>
    </div>

    <div class="newsletter-card">
      <span class="newsletter-card-date">April – June 2023</span>
      <h3>The Open Book</h3>
      <p>Spring programs, volunteer appreciation, and upcoming summer events.</p>
      <div class="newsletter-card-actions">
        <a href="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/FOPL%20Newsletter%20Apr%20-%20Jun%202023.pdf?ver=1740431341498" target="_blank" rel="noopener">View</a>
        <a class="download-btn" href="https://img1.wsimg.com/blobby/go/1261387c-c13d-44e7-b4b8-53ebdce2bc66/downloads/FOPL%20Newsletter%20Apr%20-%20Jun%202023.pdf?ver=1740431341498" target="_blank" rel="noopener">Download</a>
      </div>
    </div>

  </div>

  <!-- Events callout -->
  <div class="latest-issue" style="border-top-color: #2e7d32;">
    <div class="latest-issue-body">
      <h2>Coming Events</h2>
      <p>
        Save the date for our next <strong>Big Book Sale</strong>! Check back for dates and times.
        Members of the Friends of the Poway Library get early shopping access and extra perks.
      </p>
      <a class="latest-issue-btn" href="/contact">Become a Member</a>
    </div>
  </div>

</div>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>

<script>
{
  // Auth nav dropdown
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


