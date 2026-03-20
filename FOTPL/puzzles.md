---
layout: fopl
title: Puzzles — Friends of the Poway Library
permalink: /puzzles
description: Play word games and puzzles from the Friends of the Poway Library.
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: 'Lato', sans-serif; background: #f4f8f4; }

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

  .fopl-hero {
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(1100px 340px at 8% -20%, rgba(255,255,255,0.14), rgba(255,255,255,0) 60%),
      radial-gradient(900px 260px at 92% 0%, rgba(255,255,255,0.11), rgba(255,255,255,0) 55%),
      #023b0f;
    color: #fff;
    text-align: center;
    padding: 58px 24px 50px;
  }
  .fopl-hero::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: rgba(255,255,255,0.25);
  }
  .hero-kicker {
    display: inline-block;
    margin-bottom: 10px;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.4);
    background: rgba(255,255,255,0.12);
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.09em;
  }
  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif; font-size: 2.2rem; font-weight: 700;
    margin: 0 0 10px; letter-spacing: 0.04em; color: #fff; border: none;
    text-transform: uppercase;
  }

  .fopl-hero p { font-size: 1.05rem; opacity: 0.88; margin: 0; }

  .fopl-overall {
    max-width: 1100px;
    margin: 20px auto 0;
    padding: 0 40px;
  }
  .overall-card {
    background: #ffffff;
    border: 1px solid #d6e2d6;
    border-top: 4px solid #023b0f;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.09);
    padding: 18px 20px;
  }
  .overall-title {
    margin: 0 0 10px;
    font-family: 'Cabin', sans-serif;
    color: #023b0f;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.95rem;
    border: none;
  }
  .overall-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 12px;
  }
  .overall-stat {
    background: #f1f7f1;
    border: 1px solid #dce8dc;
    border-radius: 7px;
    text-align: center;
    padding: 10px;
  }
  .overall-stat-num {
    font-family: 'Cabin', sans-serif;
    font-size: 1.28rem;
    color: #023b0f;
    font-weight: 700;
    line-height: 1;
  }
  .overall-stat-lbl {
    margin-top: 4px;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #687468;
    font-weight: 700;
  }
  .overall-progress {
    border: 1px solid #dbe7db;
    background: #f7fbf7;
    border-radius: 7px;
    padding: 10px;
  }
  .overall-progress-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.78rem;
    color: #476047;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  }
  .overall-progress-track {
    height: 10px;
    border-radius: 999px;
    background: #dce9dc;
    overflow: hidden;
  }
  .overall-progress-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #1f7a32, #58a86a);
    transition: width 0.45s ease;
  }

  .fopl-games {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px; padding: 48px 40px; max-width: 1100px; margin: 0 auto;
  }

  .game-card {
    background: #fff; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.09);
    border-top: 4px solid #023b0f;
    padding: 28px 24px 24px;
    display: flex; flex-direction: column; gap: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .game-card:hover { transform: translateY(-4px); box-shadow: 0 8px 22px rgba(2,59,15,0.16); }
  .game-card.coming-soon { border-top-color: #bbb; opacity: 0.7; }
  .game-card-icon {
    width: 52px; height: 52px;
    border-radius: 50%;
    background: #e8f5e9;
    color: #023b0f;
    font-family: 'Cabin', sans-serif;
    font-size: 0.92rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .game-card h2 {
    font-family: 'Cabin', sans-serif; font-size: 1.15rem; font-weight: 700;
    color: #023b0f; text-transform: uppercase; letter-spacing: 0.04em;
    margin: 0; border: none;
  }
  .game-card p { font-size: 0.95rem; color: #555; line-height: 1.6; margin: 0; }
  .game-meta {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .game-chip {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 700;
    border-radius: 999px;
    padding: 3px 8px;
    background: #f1f7f1;
    color: #2b4b2e;
    border: 1px solid #d7e5d8;
  }
  .game-card-badge {
    display: inline-block; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; padding: 3px 10px;
    border-radius: 20px; background: #e8f5e9; color: #023b0f;
  }
  .game-card-badge.soon { background: #eee; color: #888; }
  .game-card a.play-btn {
    display: inline-block; margin-top: auto;
    padding: 10px 24px; background: #023b0f; color: #fff; text-decoration: none;
    border-radius: 4px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.05em;
    transition: background 0.2s; text-align: center;
  }
  .game-card a.play-btn:hover { background: #045218; }
  .game-card .disabled-btn {
    display: inline-block; margin-top: auto;
    padding: 10px 24px; background: #ddd; color: #999;
    border-radius: 4px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.05em;
    text-align: center; cursor: not-allowed;
  }

  .fopl-footer {
    background: #023b0f; color: rgba(255,255,255,0.7);
    text-align: center; padding: 22px; font-size: 0.85rem; margin-top: 16px;
  }
  .fopl-footer a { color: rgba(255,255,255,0.85); text-decoration: none; }

  @media (max-width: 820px) {
    .fopl-overall, .fopl-games { padding-left: 16px; padding-right: 16px; }
    .overall-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 620px) {
    .fopl-nav { padding: 0 12px; }
    .fopl-nav-links li a { padding: 14px 10px; font-size: 0.82rem; }
    .fopl-logo-wrap img { height: 78px; }
    .fopl-hero h1 { font-size: 1.75rem; }
    .fopl-hero p { font-size: 0.95rem; }
    .fopl-games { padding-top: 26px; gap: 16px; }
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
    <li class="active"><a href="/puzzles">Puzzles</a></li>
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
  <span class="hero-kicker">Poway Library Game Hub</span>
  <h1>Puzzles &amp; Games</h1>
  <p>Challenge your mind. Track your streaks. Beat your high scores.</p>
</div>

<div class="fopl-overall">
  <div class="overall-card">
    <h2 class="overall-title">Overall Progress</h2>
    <div class="overall-grid">
      <div class="overall-stat"><div class="overall-stat-num" id="overall-level">1</div><div class="overall-stat-lbl">Level</div></div>
      <div class="overall-stat"><div class="overall-stat-num" id="overall-xp">0</div><div class="overall-stat-lbl">Total XP</div></div>
      <div class="overall-stat"><div class="overall-stat-num" id="overall-sessions">0</div><div class="overall-stat-lbl">Sessions</div></div>
      <div class="overall-stat"><div class="overall-stat-num" id="overall-wins">0%</div><div class="overall-stat-lbl">Win Rate</div></div>
    </div>
    <div class="overall-progress">
      <div class="overall-progress-top">
        <span id="overall-next-label">Progress To Level 2</span>
        <span id="overall-next-xp">0 / 500 XP</span>
      </div>
      <div class="overall-progress-track">
        <div class="overall-progress-fill" id="overall-progress-fill"></div>
      </div>
    </div>
  </div>
</div>

<div class="fopl-games">

  <div class="game-card">
    <div class="game-card-icon">WDL</div>
    <span class="game-card-badge">Live</span>
    <h2>PinShelf</h2>
    <p>A clue-based daily challenge inspired by Pinpoint. Guess the hidden library word as clues unlock.</p>
    <div class="game-meta">
      <span class="game-chip">Daily</span>
      <span class="game-chip">Word</span>
      <span class="game-chip">Logic</span>
    </div>
    <a class="play-btn" href="/wordle">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">TRV</div>
    <span class="game-card-badge">Live</span>
    <h2>Book Trivia</h2>
    <p>How well do you know classic literature? Test your knowledge with daily book trivia questions.</p>
    <div class="game-meta">
      <span class="game-chip">Daily</span>
      <span class="game-chip">Quiz</span>
      <span class="game-chip">Classics</span>
    </div>
    <a class="play-btn" href="/book-trivia">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">SCR</div>
    <span class="game-card-badge">Live</span>
    <h2>Word Scramble</h2>
    <p>Unscramble a new word each day. Earn bonus points for finding it fast.</p>
    <div class="game-meta">
      <span class="game-chip">Speed</span>
      <span class="game-chip">Word</span>
      <span class="game-chip">Daily</span>
    </div>
    <a class="play-btn" href="/word-scramble">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">RUN</div>
    <span class="game-card-badge">Live</span>
    <h2>Library Shelf Run</h2>
    <p>Control the cart, collect misplaced books, and shelve each one in the right call-number zone.</p>
    <div class="game-meta">
      <span class="game-chip">Arcade</span>
      <span class="game-chip">Sorting</span>
      <span class="game-chip">Keyboard</span>
    </div>
    <a class="play-btn" href="/library-shelf-run">Play Now</a>
  </div>

</div>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>

<script>
{
  const overall = JSON.parse(localStorage.getItem('fopl_games_overall_v1') || '{"xp":0,"sessions":0,"wins":0}');
  const sessions = Number(overall.sessions || 0);
  const wins = Number(overall.wins || 0);
  const xp = Number(overall.xp || 0);
  const winPct = sessions ? Math.round((wins / sessions) * 100) : 0;
  const level = Math.floor(xp / 500) + 1;
  const xpInLevel = xp % 500;
  const xpNext = 500;
  const progressPct = Math.max(0, Math.min(100, Math.round((xpInLevel / xpNext) * 100)));
  document.getElementById('overall-level').textContent = String(level);
  document.getElementById('overall-xp').textContent = String(xp);
  document.getElementById('overall-sessions').textContent = String(sessions);
  document.getElementById('overall-wins').textContent = `${winPct}%`;
  document.getElementById('overall-next-label').textContent = `Progress To Level ${level + 1}`;
  document.getElementById('overall-next-xp').textContent = `${xpInLevel} / ${xpNext} XP`;
  document.getElementById('overall-progress-fill').style.width = `${progressPct}%`;

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
