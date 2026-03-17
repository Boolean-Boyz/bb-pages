---
layout: fopl
title: Word Scramble — Friends of the Poway Library
permalink: /word-scramble
description: Play daily Word Scramble from the Friends of the Poway Library.
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: 'Lato', sans-serif; background: #f4f8f4; }

  .fopl-nav {
    background: #023b0f; display: flex; align-items: center;
    justify-content: space-between; padding: 0 30px; flex-wrap: wrap;
  }
  .fopl-logo-wrap img { height: 90px; width: auto; padding: 8px 0; display: block; }
  .fopl-nav-links { display: flex; list-style: none; margin: 0; padding: 0; }
  .fopl-nav-links li a {
    display: block; color: #fff; text-decoration: none;
    font-family: 'Cabin', sans-serif; font-size: 0.88rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.04em;
    padding: 16px 16px; transition: background 0.2s;
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

  .scramble-wrap {
    max-width: 760px; margin: 0 auto; padding: 20px 16px 44px;
    min-height: calc(100vh - 90px);
  }
  .scramble-header {
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid #d8dfd8; padding-bottom: 10px; margin-bottom: 16px;
  }
  .scramble-title {
    font-family: 'Cabin', sans-serif; font-size: 1.45rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #023b0f;
  }
  .scramble-btn-link {
    text-decoration: none; color: #023b0f; font-size: 1.3rem;
  }

  .scramble-card {
    background: #fff; border-top: 4px solid #023b0f; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.09); padding: 24px;
  }
  .scramble-date {
    font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.06em;
    color: #6b756b; margin-bottom: 12px; font-weight: 700;
  }
  .scramble-prompt {
    margin: 0 0 10px; color: #2a352a; font-size: 0.98rem;
  }
  .scramble-letters {
    font-family: 'Cabin', sans-serif; font-size: 2rem; letter-spacing: 0.2em;
    font-weight: 700; color: #023b0f; margin: 12px 0 14px;
  }

  .scramble-form {
    display: flex; gap: 10px; flex-wrap: wrap;
  }
  .scramble-input {
    flex: 1; min-width: 220px; border: 1px solid #b8c8b8; border-radius: 6px;
    padding: 12px; font-size: 1rem; text-transform: uppercase;
  }
  .scramble-submit {
    border: none; background: #023b0f; color: #fff; border-radius: 6px;
    padding: 12px 18px; cursor: pointer; font-family: 'Cabin', sans-serif;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
  }
  .scramble-submit:hover { background: #045218; }

  .scramble-meta {
    margin-top: 12px; font-size: 0.9rem; color: #4f5d4f;
  }
  .scramble-feedback {
    margin-top: 12px; padding: 10px 12px; border-radius: 6px;
    font-size: 0.95rem; display: none;
  }
  .scramble-feedback.show { display: block; }
  .scramble-feedback.ok { background: #d7f1db; border: 1px solid #2e7d32; color: #1f4a20; }
  .scramble-feedback.err { background: #fae1e1; border: 1px solid #a52c2c; color: #6c1e1e; }

  .stats-row {
    display: grid; grid-template-columns: repeat(4, minmax(0,1fr));
    gap: 10px; margin-top: 18px;
  }
  .stat-box {
    background: #f1f7f1; border-radius: 7px; padding: 10px;
    border: 1px solid #dce8dc; text-align: center;
  }
  .stat-num { font-family: 'Cabin', sans-serif; font-size: 1.35rem; font-weight: 700; color: #023b0f; line-height: 1; }
  .stat-label { font-size: 0.72rem; color: #6a736a; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 4px; font-weight: 700; }

  .fopl-footer {
    background: #023b0f; color: rgba(255,255,255,0.7);
    text-align: center; padding: 18px; font-size: 0.85rem;
  }
  .fopl-footer a { color: rgba(255,255,255,0.85); text-decoration: none; }

  @media (max-width: 560px) {
    .stats-row { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .scramble-letters { font-size: 1.6rem; letter-spacing: 0.15em; }
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

<div class="scramble-wrap">
  <div class="scramble-header">
    <div class="scramble-title">Word Scramble</div>
    <a class="scramble-btn-link" href="/puzzles" title="All Puzzles">🎮</a>
  </div>

  <div class="scramble-card">
    <div class="scramble-date" id="scramble-date"></div>
    <p class="scramble-prompt">Unscramble the letters to form today\'s word.</p>
    <div class="scramble-letters" id="scramble-letters"></div>

    <form class="scramble-form" id="scramble-form">
      <input id="scramble-input" class="scramble-input" maxlength="12" autocomplete="off" placeholder="Type your answer" />
      <button class="scramble-submit" type="submit">Submit</button>
    </form>

    <div class="scramble-meta" id="scramble-meta">Attempts left: 5</div>
    <div class="scramble-feedback" id="scramble-feedback"></div>

    <div class="stats-row">
      <div class="stat-box"><div class="stat-num" id="stat-played">0</div><div class="stat-label">Played</div></div>
      <div class="stat-box"><div class="stat-num" id="stat-win">0%</div><div class="stat-label">Solved %</div></div>
      <div class="stat-box"><div class="stat-num" id="stat-streak">0</div><div class="stat-label">Streak</div></div>
      <div class="stat-box"><div class="stat-num" id="stat-max">0</div><div class="stat-label">Best Streak</div></div>
    </div>
  </div>
</div>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>

<script>
{
const BACKEND = 'http://127.0.0.1:8587';
const MAX_ATTEMPTS = 5;
const DAY_KEY = 'fopl_scramble_day';
const STATE_KEY = 'fopl_scramble_state';
const STATS_KEY = 'fopl_scramble_stats';

const WORDS = [
  'library', 'chapter', 'fiction', 'archive', 'reading', 'classic', 'mystery',
  'poetry', 'novel', 'author', 'shelf', 'volume', 'history', 'grammar'
];

let answer = '';
let attempts = 0;
let done = false;

function getDayId() {
  const epoch = new Date('2024-01-01T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return String(Math.floor((today - epoch) / 86400000));
}

function getTodayWord() {
  const day = Number(getDayId());
  return WORDS[day % WORDS.length].toUpperCase();
}

function seededShuffle(word, day) {
  const arr = word.split('');
  let seed = day * 9301 + 49297;
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 233280 + 41) % 233280;
    const j = seed % (i + 1);
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  const shuffled = arr.join('');
  if (shuffled === word) {
    const swapped = arr.slice();
    const t = swapped[0];
    swapped[0] = swapped[1];
    swapped[1] = t;
    return swapped.join('');
  }
  return shuffled;
}

function loadStats() {
  return JSON.parse(localStorage.getItem(STATS_KEY) || '{"played":0,"correct":0,"streak":0,"maxStreak":0}');
}

function saveStats(stats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function syncStatsView(stats) {
  const pct = stats.played ? Math.round((stats.correct / stats.played) * 100) : 0;
  document.getElementById('stat-played').textContent = String(stats.played);
  document.getElementById('stat-win').textContent = `${pct}%`;
  document.getElementById('stat-streak').textContent = String(stats.streak);
  document.getElementById('stat-max').textContent = String(stats.maxStreak);
}

function updateMeta() {
  const left = Math.max(0, MAX_ATTEMPTS - attempts);
  document.getElementById('scramble-meta').textContent = done
    ? 'Come back tomorrow for a new scramble.'
    : `Attempts left: ${left}`;
}

function showFeedback(text, ok) {
  const el = document.getElementById('scramble-feedback');
  el.className = `scramble-feedback show ${ok ? 'ok' : 'err'}`;
  el.textContent = text;
}

function disableInput() {
  done = true;
  document.getElementById('scramble-input').disabled = true;
  document.querySelector('.scramble-submit').disabled = true;
  updateMeta();
}

async function postResult(correct, tries) {
  const user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user) return;
  try {
    await fetch(`${BACKEND}/api/fopl/puzzle/stats`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ game: 'word_scramble', won: !!correct, guesses: tries })
    });
  } catch {}
}

async function finalizeResult(correct) {
  const stats = loadStats();
  stats.played += 1;
  if (correct) {
    stats.correct += 1;
    stats.streak += 1;
    stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
  } else {
    stats.streak = 0;
  }
  saveStats(stats);
  syncStatsView(stats);
  await postResult(correct, attempts);
}

function loadDayState() {
  const dayId = getDayId();
  if (localStorage.getItem(DAY_KEY) !== dayId) return null;
  return JSON.parse(localStorage.getItem(STATE_KEY) || 'null');
}

function saveDayState(state) {
  localStorage.setItem(DAY_KEY, getDayId());
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function restoreState(saved) {
  if (!saved) return;
  attempts = saved.attempts || 0;
  if (saved.status === 'won') {
    showFeedback(`Solved in ${attempts} attempt${attempts === 1 ? '' : 's'}!`, true);
    disableInput();
  } else if (saved.status === 'lost') {
    showFeedback(`Out of attempts. The answer was ${answer}.`, false);
    disableInput();
  }
  updateMeta();
}

function bindForm() {
  const form = document.getElementById('scramble-form');
  const input = document.getElementById('scramble-input');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (done) return;

    const guess = input.value.trim().toUpperCase();
    if (!guess) {
      showFeedback('Type a word before submitting.', false);
      return;
    }

    attempts += 1;

    if (guess === answer) {
      showFeedback(`Solved in ${attempts} attempt${attempts === 1 ? '' : 's'}!`, true);
      saveDayState({ status: 'won', attempts });
      disableInput();
      await finalizeResult(true);
      return;
    }

    if (attempts >= MAX_ATTEMPTS) {
      showFeedback(`Out of attempts. The answer was ${answer}.`, false);
      saveDayState({ status: 'lost', attempts });
      disableInput();
      await finalizeResult(false);
      return;
    }

    const hint = answer.slice(0, Math.min(2, attempts));
    showFeedback(`Not quite. Hint: starts with ${hint}`, false);
    saveDayState({ status: 'playing', attempts });
    updateMeta();
    input.select();
  });
}

function setupGame() {
  const dayId = Number(getDayId());
  answer = getTodayWord();
  const scrambled = seededShuffle(answer, dayId);

  document.getElementById('scramble-date').textContent = `Daily Scramble • ${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`;
  document.getElementById('scramble-letters').textContent = scrambled;

  updateMeta();
  bindForm();
  restoreState(loadDayState());
}

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
    await fetch(`${BACKEND}/api/fopl/login`, { method: 'DELETE', credentials: 'include' }).catch(() => {});
    localStorage.removeItem('fopl_user');
    window.location.href = '/home';
  };
}

syncStatsView(loadStats());
setupGame();
}
</script>
