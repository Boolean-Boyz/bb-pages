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

  .fopl-hero {
    background: #023b0f; color: #fff; text-align: center; padding: 52px 24px 44px;
  }
  .fopl-hero h1 {
    font-family: 'Cabin', sans-serif; font-size: 2.2rem; font-weight: 700;
    margin: 0 0 10px; letter-spacing: 0.04em; color: #fff; border: none;
    text-transform: uppercase;
  }
  .fopl-hero p { font-size: 1.05rem; opacity: 0.85; margin: 0; }

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
  }
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
  <h1>Puzzles &amp; Games</h1>
  <p>Challenge your mind. Track your streaks. Beat your high scores.</p>
</div>

<div class="fopl-games">

  <div class="game-card">
    <div class="game-card-icon">WDL</div>
    <span class="game-card-badge">Live</span>
    <h2>Shelfle</h2>
    <p>Guess the 5-letter word in 6 tries, with one Catalog Hint to reveal a letter position.</p>
    <a class="play-btn" href="/wordle">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">TRV</div>
    <span class="game-card-badge">Live</span>
    <h2>Book Trivia</h2>
    <p>How well do you know classic literature? Test your knowledge with daily book trivia questions.</p>
    <a class="play-btn" href="/book-trivia">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">SCR</div>
    <span class="game-card-badge">Live</span>
    <h2>Word Scramble</h2>
    <p>Unscramble a new word each day. Earn bonus points for finding it fast.</p>
    <a class="play-btn" href="/word-scramble">Play Now</a>
  </div>

  <div class="game-card">
    <div class="game-card-icon">RUN</div>
    <span class="game-card-badge">Live</span>
    <h2>Library Shelf Run</h2>
    <p>Control the cart, collect misplaced books, and shelve each one in the right call-number zone.</p>
    <a class="play-btn" href="/library-shelf-run">Play Now</a>
  </div>

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
