---
layout: fopl
title: My Profile — Friends of the Poway Library
permalink: /profile
description: Your Friends of the Poway Library account profile.
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

  /* ── Page ── */
  .fopl-page { max-width: 760px; margin: 0 auto; padding: 40px 24px 60px; }

  .fopl-page-title {
    font-family: 'Cabin', sans-serif; font-size: 1.5rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.05em; color: #023b0f;
    margin: 0 0 28px; border: none;
  }

  /* ── Cards ── */
  .profile-card {
    background: #fff; border-radius: 6px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.09);
    border-top: 4px solid #023b0f;
    padding: 28px 32px; margin-bottom: 24px;
  }
  .profile-card h2 {
    font-family: 'Cabin', sans-serif; font-size: 1rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; color: #023b0f;
    margin: 0 0 20px; border: none;
  }

  /* ── User info ── */
  .profile-avatar {
    width: 64px; height: 64px; border-radius: 50%;
    background: #023b0f; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cabin', sans-serif; font-size: 1.6rem; font-weight: 700;
    margin-bottom: 16px;
  }
  .profile-name {
    font-family: 'Cabin', sans-serif; font-size: 1.4rem; font-weight: 700;
    color: #023b0f; margin: 0 0 4px;
  }
  .profile-role {
    display: inline-block; font-size: 0.75rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em;
    padding: 3px 10px; border-radius: 20px;
    background: #e8f5e9; color: #023b0f; margin-bottom: 16px;
  }
  .profile-role.admin { background: #023b0f; color: #fff; }
  .profile-fields { display: grid; gap: 12px; }
  .profile-field label {
    display: block; font-size: 0.75rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #888; margin-bottom: 3px;
  }
  .profile-field span { font-size: 0.97rem; color: #333; }

  /* ── Stats ── */
  .stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px;
  }
  .stat-box { text-align: center; }
  .stat-num {
    font-family: 'Cabin', sans-serif; font-size: 2rem; font-weight: 700;
    color: #023b0f; line-height: 1;
  }
  .stat-lbl { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-top: 4px; }

  .dist-title {
    font-family: 'Cabin', sans-serif; font-size: 0.8rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; color: #555; margin-bottom: 10px;
  }
  .dist-row { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; font-size: 0.88rem; }
  .dist-num { font-weight: 700; min-width: 12px; color: #333; }
  .dist-bar-wrap { flex: 1; background: #eee; border-radius: 2px; height: 20px; }
  .dist-bar {
    height: 100%; min-width: 24px; background: #787c7e; border-radius: 2px;
    display: flex; align-items: center; justify-content: flex-end;
    padding-right: 6px; font-size: 0.8rem; font-weight: 700; color: #fff;
  }

  .no-stats { font-size: 0.95rem; color: #888; margin: 0; }

  /* ── Sign out btn ── */
  .signout-btn {
    padding: 11px 28px; background: none; border: 2px solid #023b0f;
    color: #023b0f; border-radius: 4px; font-family: 'Cabin', sans-serif;
    font-weight: 700; font-size: 0.88rem; text-transform: uppercase;
    letter-spacing: 0.05em; cursor: pointer; transition: background 0.2s, color 0.2s;
  }
  .signout-btn:hover { background: #023b0f; color: #fff; }

  /* ── Footer ── */
  .fopl-footer {
    background: #023b0f; color: rgba(255,255,255,0.7);
    text-align: center; padding: 22px; font-size: 0.85rem;
  }
  .fopl-footer a { color: rgba(255,255,255,0.85); text-decoration: none; }

  @media (max-width: 480px) {
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .profile-card { padding: 20px; }
  }
</style>

<nav class="fopl-nav">
  <div class="fopl-logo-wrap">
    <img src="https://img1.wsimg.com/isteam/ip/1261387c-c13d-44e7-b4b8-53ebdce2bc66/fopllogo1B.jpg"
         alt="Friends of the Poway Library" />
  </div>
  <ul class="fopl-nav-links">
    <li><a href="/home">Home</a></li>
    <li><a href="/history">History</a></li>
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/bookstore">Bookstore</a></li>
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

<div class="fopl-page">
  <h1 class="fopl-page-title">My Profile</h1>

  <!-- User info -->
  <div class="profile-card">
    <h2>Account</h2>
    <div class="profile-avatar" id="profile-avatar">?</div>
    <div class="profile-name" id="profile-name">—</div>
    <div class="profile-role" id="profile-role">Member</div>
    <div class="profile-fields">
      <div class="profile-field">
        <label>Email</label>
        <span id="profile-email">—</span>
      </div>
      <div class="profile-field">
        <label>Member Since</label>
        <span id="profile-since">—</span>
      </div>
    </div>
  </div>

  <!-- Wordle stats -->
  <div class="profile-card">
    <h2>🟩 Wordle Stats</h2>
    <div id="wordle-stats-content">
      <p class="no-stats">Loading…</p>
    </div>
  </div>

  <!-- Sign out -->
  <button class="signout-btn" onclick="doSignOut()">Sign Out</button>
</div>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>

<script>
{
  const BACKEND = 'http://127.0.0.1:8587';

  const foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!foplUser) {
    window.location.replace('/login');
  }

  // ── Populate user card ──
  function fillUser(user) {
    const initials = user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    document.getElementById('profile-avatar').textContent = initials;
    document.getElementById('profile-name').textContent   = user.name;
    document.getElementById('profile-email').textContent  = user.email;

    const roleEl = document.getElementById('profile-role');
    roleEl.textContent = user.role;
    if (user.role === 'Admin') roleEl.classList.add('admin');

    if (user.created_at) {
      const d = new Date(user.created_at);
      document.getElementById('profile-since').textContent =
        d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
  }

  // ── Populate Wordle stats ──
  function fillWordleStats(s) {
    const el = document.getElementById('wordle-stats-content');
    if (!s || s.games_played === 0) {
      el.innerHTML = `<p class="no-stats">No Wordle games played yet. <a href="/wordle" style="color:#023b0f;font-weight:700;">Play now →</a></p>`;
      return;
    }
    const dist    = s.guess_dist || {};
    const maxVal  = Math.max(...Object.values(dist), 1);
    let distHtml  = '';
    for (let i = 1; i <= 6; i++) {
      const val = dist[String(i)] || 0;
      const w   = Math.max(Math.round((val / maxVal) * 100), 8);
      distHtml += `<div class="dist-row">
        <div class="dist-num">${i}</div>
        <div class="dist-bar-wrap">
          <div class="dist-bar" style="width:${w}%">${val}</div>
        </div></div>`;
    }
    el.innerHTML = `
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-num">${s.games_played}</div><div class="stat-lbl">Played</div></div>
        <div class="stat-box"><div class="stat-num">${s.win_rate}</div><div class="stat-lbl">Win %</div></div>
        <div class="stat-box"><div class="stat-num">${s.streak}</div><div class="stat-lbl">Streak</div></div>
        <div class="stat-box"><div class="stat-num">${s.max_streak}</div><div class="stat-lbl">Max Streak</div></div>
      </div>
      <div class="dist-title">Guess Distribution</div>
      ${distHtml}`;
  }

  // ── Nav dropdown ──
  const authItem   = document.getElementById('nav-auth-item');
  const authLink   = document.getElementById('nav-auth-link');
  const dropdown   = document.getElementById('nav-auth-dropdown');
  const signoutBtn = document.getElementById('nav-signout-btn');
  if (foplUser && authLink) {
    authItem.classList.add('fopl-nav-has-dropdown');
    authLink.textContent = foplUser.name.split(' ')[0];
    authLink.href = '#';
    authLink.onclick = (e) => { e.preventDefault(); dropdown.classList.toggle('open'); };
    document.addEventListener('click', (e) => {
      if (!authItem.contains(e.target)) dropdown.classList.remove('open');
    });
  }

  async function doSignOut() {
    await fetch(`${BACKEND}/api/fopl/login`, { method: 'DELETE', credentials: 'include' }).catch(() => {});
    localStorage.removeItem('fopl_user');
    window.location.href = '/home';
  }
  signoutBtn.onclick = (e) => { e.preventDefault(); doSignOut(); };
  window.doSignOut = doSignOut;

  // ── Load data ──
  if (foplUser) {
    fillUser(foplUser);
    fetch(`${BACKEND}/api/fopl/puzzle/stats?game=wordle`, { credentials: 'include' })
      .then(r => r.ok ? r.json() : null)
      .then(fillWordleStats)
      .catch(() => fillWordleStats(null));
  }
}
</script>
