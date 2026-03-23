---
layout: fopl
title: PinShelf — Friends of the Poway Library
permalink: /wordle
description: Play the daily PinShelf clue game from Friends of the Poway Library.
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

  .pin-wrap {
    max-width: 860px; margin: 0 auto; padding: 20px 16px 44px;
    min-height: calc(100vh - 90px);
  }
  .pin-header {
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid #d8dfd8; padding-bottom: 10px; margin-bottom: 16px;
  }
  .pin-title {
    font-family: 'Cabin', sans-serif; font-size: 1.45rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #023b0f;
  }
  .pin-subtitle {
    margin-top: 4px; color: #587258; font-size: 0.86rem;
    text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;
  }
  .pin-btn-link {
    text-decoration: none; color: #023b0f; font-size: 0.78rem;
    border: 1px solid #cad8cc; background: #eff6f0; border-radius: 4px;
    padding: 8px 10px; font-family: 'Cabin', sans-serif;
    text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;
  }

  .pin-card {
    background: #fff; border-top: 4px solid #023b0f; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.09); padding: 24px;
    position: relative;
    overflow: hidden;
  }
  .pin-card::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -80px;
    width: 260px;
    height: 260px;
    background: radial-gradient(circle, rgba(3,85,28,0.14) 0%, rgba(3,85,28,0) 70%);
    pointer-events: none;
  }
  .pin-date {
    font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.06em;
    color: #6b756b; margin-bottom: 12px; font-weight: 700;
  }
  .pin-mode-row {
    margin: 0 0 12px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .pin-mode-chip {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: 700;
    border-radius: 999px;
    padding: 5px 10px;
    border: 1px solid #bfd1bf;
    background: #f1f7f1;
    color: #2f5133;
  }
  .pin-mode-chip.practice {
    background: #fff6e8;
    border-color: #e9cf9c;
    color: #6d4b14;
  }
  .pin-mode-note {
    margin: 0;
    font-size: 0.84rem;
    color: #5d695e;
    font-weight: 700;
  }
  .pin-actions {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .pin-btn.secondary {
    background: #f6faf6;
    color: #1f3d22;
    border: 1px solid #c7d6c8;
  }
  .pin-session {
    margin-top: 12px;
    background: #f8fbf8;
    border: 1px solid #dbe7db;
    border-radius: 7px;
    padding: 10px 12px;
    font-size: 0.84rem;
    color: #4e5d50;
    font-weight: 700;
  }

  .pin-hud {
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    gap: 10px;
    margin-bottom: 14px;
  }
  .pin-hud-box {
    border: 1px solid #dce8dc; background: #f1f7f1; border-radius: 7px;
    text-align: center; padding: 9px;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }
  .pin-hud-box.pulse {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(2,59,15,0.18);
  }
  .pin-hud-label {
    font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.06em;
    color: #6b756b; font-weight: 700;
  }
  .pin-hud-value {
    font-family: 'Cabin', sans-serif; font-size: 1.24rem; font-weight: 700;
    color: #023b0f; line-height: 1.1;
  }

  .pin-clues {
    border: 1px solid #d8e5d8; border-radius: 8px; background: #f8fbf8;
    padding: 14px; margin-bottom: 14px;
  }
  .pin-clues h3 {
    margin: 0 0 8px; border: none; color: #335833;
    text-transform: uppercase; letter-spacing: 0.06em;
    font-family: 'Cabin', sans-serif; font-size: 0.82rem;
  }
  .pin-clues ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .pin-clues li {
    margin-bottom: 8px;
    color: #2c3b2c;
    font-size: 0.96rem;
    border: 1px solid #d4e3d6;
    border-radius: 7px;
    background: #ffffff;
    padding: 9px 10px;
    opacity: 0;
    transform: translateY(10px) scale(0.99);
    animation: clueIn 0.35s ease forwards;
  }
  .pin-clues li.newly-revealed {
    animation: clueIn 0.35s ease forwards, cluePulse 0.75s ease;
  }

  @keyframes clueIn {
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes cluePulse {
    0%, 100% { box-shadow: 0 0 0 rgba(2,59,15,0); }
    50% { box-shadow: 0 0 0 6px rgba(2,59,15,0.12); }
  }

  .pin-guess {
    display: flex; gap: 10px; flex-wrap: wrap;
  }
  .pin-input {
    flex: 1; min-width: 220px;
    border: 1px solid #b8c8b8; border-radius: 6px;
    padding: 12px; font-size: 1rem; text-transform: uppercase;
  }
  .pin-btn {
    border: none; background: #023b0f; color: #fff; border-radius: 6px;
    padding: 12px 14px; cursor: pointer; font-family: 'Cabin', sans-serif;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
    font-size: 0.8rem;
  }
  .pin-btn.alt { background: #365d3a; }
  .pin-btn:disabled { opacity: 0.55; cursor: default; }
  .pin-btn.alt:not(:disabled) {
    animation: softInvite 2.2s ease-in-out infinite;
  }

  @keyframes softInvite {
    0%, 100% { box-shadow: 0 0 0 0 rgba(54,93,58,0); }
    50% { box-shadow: 0 0 0 5px rgba(54,93,58,0.16); }
  }

  .pin-feedback {
    margin-top: 12px; padding: 10px 12px; border-radius: 6px;
    background: #eef6ee; color: #1f4a20; font-size: 0.95rem;
    border: 1px solid #cadfca; min-height: 42px;
    transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
  }
  .pin-feedback.pop {
    transform: translateY(-1px);
  }
  .pin-feedback.good {
    background: #def3e1;
    border-color: #82b78a;
  }
  .pin-feedback.bad {
    background: #fae6e6;
    border-color: #d29b9b;
  }

  .pin-history {
    margin-top: 14px;
    border: 1px solid #d8e5d8; border-radius: 8px; background: #fbfdfb;
    padding: 12px;
  }
  .pin-history h3 {
    margin: 0 0 8px; border: none; color: #335833;
    text-transform: uppercase; letter-spacing: 0.06em;
    font-family: 'Cabin', sans-serif; font-size: 0.82rem;
  }
  .pin-history ul {
    margin: 0; padding-left: 18px;
  }
  .pin-history li {
    margin-bottom: 4px; color: #394739; font-size: 0.92rem;
  }

  .stats-row {
    display: grid; grid-template-columns: repeat(4, minmax(0,1fr));
    gap: 10px; margin-top: 18px;
  }
  .stat-box {
    background: #f1f7f1; border-radius: 7px; padding: 10px;
    border: 1px solid #dce8dc; text-align: center;
  }
  .stat-num {
    font-family: 'Cabin', sans-serif; font-size: 1.35rem; font-weight: 700;
    color: #023b0f; line-height: 1;
  }
  .stat-label {
    font-size: 0.72rem; color: #6a736a; text-transform: uppercase;
    letter-spacing: 0.06em; margin-top: 4px; font-weight: 700;
  }

  .fopl-footer {
    background: #023b0f; color: rgba(255,255,255,0.7);
    text-align: center; padding: 18px; font-size: 0.85rem;
  }
  .fopl-footer a { color: rgba(255,255,255,0.85); text-decoration: none; }

  @media (max-width: 560px) {
    .pin-hud { grid-template-columns: repeat(1, minmax(0,1fr)); }
    .stats-row { grid-template-columns: repeat(2, minmax(0,1fr)); }
  }
</style>

<nav class="fopl-nav">
  <div class="fopl-logo-wrap">
    <img src="/FOTPL/fopllogo.png"
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

<div class="pin-wrap">
  <div class="pin-header">
    <div>
      <div class="pin-title">PinShelf</div>
      <div class="pin-subtitle">Daily Clue Deduction Game</div>
    </div>
    <a class="pin-btn-link" href="/puzzles" title="All Puzzles">All Games</a>
  </div>

  <div class="pin-card">
    <div class="pin-date" id="pin-date"></div>
    <div class="pin-mode-row">
      <span class="pin-mode-chip" id="pin-mode-chip">Daily</span>
      <p class="pin-mode-note" id="pin-mode-note">Daily round counts toward streak and leaderboard stats (when signed in).</p>
    </div>

    <div class="pin-hud">
      <div class="pin-hud-box"><div class="pin-hud-label">Score</div><div class="pin-hud-value" id="pin-score">100</div></div>
      <div class="pin-hud-box"><div class="pin-hud-label">Attempts</div><div class="pin-hud-value" id="pin-attempts">0 / 5</div></div>
      <div class="pin-hud-box"><div class="pin-hud-label">Answer Length</div><div class="pin-hud-value" id="pin-length">0</div></div>
    </div>

    <div class="pin-clues">
      <h3>Available Clues</h3>
      <ul id="pin-clue-list"></ul>
    </div>

    <form class="pin-guess" id="pin-form">
      <input id="pin-input" class="pin-input" maxlength="16" autocomplete="off" placeholder="Type your guess" />
      <button class="pin-btn" type="submit">Submit Guess</button>
      <button class="pin-btn alt" id="pin-reveal" type="button">Reveal Clue</button>
    </form>
    <div class="pin-actions">
      <button class="pin-btn secondary" id="pin-practice" type="button">Practice Round (No Daily Count)</button>
      <button class="pin-btn secondary" id="pin-daily" type="button">Back To Daily Round</button>
    </div>

    <div class="pin-feedback" id="pin-feedback">Use the clues to identify the hidden word.</div>
    <div class="pin-session" id="pin-session">Practice rounds this visit: 0</div>

    <div class="pin-history">
      <h3>Guess History</h3>
      <ul id="pin-history-list"></ul>
    </div>

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
const DATE_KEY = 'fopl_pinshelf_day';
const STATE_KEY = 'fopl_pinshelf_state';
const STATS_KEY = 'fopl_pinshelf_stats';

const PUZZLES = [
  {
    answer: 'CATALOG',
    clues: [
      'Library records are organized with this.',
      'You search this before finding a shelf.',
      'It can be digital or card-based.',
      'It starts with C and has 7 letters.'
    ]
  },
  {
    answer: 'ARCHIVE',
    clues: [
      'A collection kept for long-term preservation.',
      'Researchers often request materials from one.',
      'It stores documents, photos, and records.',
      'It starts with A and has 7 letters.'
    ]
  },
  {
    answer: 'BIBLIO',
    clues: [
      'A root related to books.',
      'It appears in words like bibliography.',
      'It starts with B and has 6 letters.',
      'It ends with O.'
    ]
  },
  {
    answer: 'FICTION',
    clues: [
      'A common section in most libraries.',
      'Stories in this category are invented.',
      'It starts with F and has 7 letters.',
      'Mystery and fantasy are examples in this category.'
    ]
  },
  {
    answer: 'READING',
    clues: [
      'Core purpose of visiting a library.',
      'A quiet room might be dedicated to this activity.',
      'It starts with R and has 7 letters.',
      'People often do this with books and magazines.'
    ]
  },
  {
    answer: 'SHELF',
    clues: [
      'Books rest on this in rows.',
      'Libraries have many of these.',
      'It starts with S and has 5 letters.',
      'It ends with F.'
    ]
  }
];

let puzzle = null;
let state = null;
let dailyPuzzle = null;
let dailyState = null;
let practicePuzzle = null;
let practiceState = null;
let mode = 'daily';
let practiceRoundsThisVisit = 0;
let renderedClueIndex = 0;
let displayedScore = 100;

function getDayId() {
  const epoch = new Date('2024-01-01T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return String(Math.floor((today - epoch) / 86400000));
}

function getTodayPuzzle() {
  const day = Number(getDayId());
  return PUZZLES[day % PUZZLES.length];
}

function getPracticePuzzle() {
  const candidate = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
  if (!dailyPuzzle || PUZZLES.length < 2) return candidate;
  if (candidate.answer !== dailyPuzzle.answer) return candidate;
  const nextIndex = (PUZZLES.findIndex((p) => p.answer === candidate.answer) + 1) % PUZZLES.length;
  return PUZZLES[nextIndex];
}

function getDateLabel() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

function makeNewState() {
  return {
    dayId: getDayId(),
    attempts: 0,
    clueIndex: 0,
    score: 100,
    solved: false,
    lost: false,
    guesses: [],
    counted: false
  };
}

function loadState() {
  const dayId = getDayId();
  if (localStorage.getItem(DATE_KEY) !== dayId) return makeNewState();
  const saved = JSON.parse(localStorage.getItem(STATE_KEY) || 'null');
  if (!saved || saved.dayId !== dayId) return makeNewState();
  return saved;
}

function saveState() {
  localStorage.setItem(DATE_KEY, getDayId());
  localStorage.setItem(STATE_KEY, JSON.stringify(dailyState));
}

function makePracticeState() {
  return {
    dayId: `practice-${Date.now()}`,
    attempts: 0,
    clueIndex: 0,
    score: 100,
    solved: false,
    lost: false,
    guesses: [],
    counted: false
  };
}

function clampScore() {
  state.score = Math.max(0, state.score);
}

function loadStats() {
  return JSON.parse(localStorage.getItem(STATS_KEY) || '{"played":0,"solved":0,"streak":0,"maxStreak":0}');
}

function saveStats(stats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function syncStatsView(stats) {
  const pct = stats.played ? Math.round((stats.solved / stats.played) * 100) : 0;
  document.getElementById('stat-played').textContent = String(stats.played);
  document.getElementById('stat-win').textContent = `${pct}%`;
  document.getElementById('stat-streak').textContent = String(stats.streak);
  document.getElementById('stat-max').textContent = String(stats.maxStreak);
}

function setFeedback(msg, tone = 'info') {
  const feedback = document.getElementById('pin-feedback');
  feedback.textContent = msg;
  feedback.classList.remove('good', 'bad', 'pop');
  if (tone === 'good') feedback.classList.add('good');
  if (tone === 'bad') feedback.classList.add('bad');
  feedback.classList.add('pop');
  setTimeout(() => feedback.classList.remove('pop'), 260);
}

function renderClues() {
  const list = document.getElementById('pin-clue-list');
  list.innerHTML = '';
  for (let i = 0; i <= state.clueIndex && i < puzzle.clues.length; i++) {
    const li = document.createElement('li');
    if (i === state.clueIndex && state.clueIndex > renderedClueIndex) {
      li.classList.add('newly-revealed');
    }
    li.style.animationDelay = `${i * 0.05}s`;
    li.textContent = puzzle.clues[i];
    list.appendChild(li);
  }
  renderedClueIndex = state.clueIndex;
}

function renderHistory() {
  const list = document.getElementById('pin-history-list');
  list.innerHTML = '';
  if (state.guesses.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No guesses yet.';
    list.appendChild(li);
    return;
  }
  state.guesses.forEach((guess) => {
    const li = document.createElement('li');
    li.textContent = guess;
    list.appendChild(li);
  });
}

function renderHud() {
  animateScoreTo(state.score);
  document.getElementById('pin-attempts').textContent = `${state.attempts} / ${MAX_ATTEMPTS}`;
  document.getElementById('pin-length').textContent = String(puzzle.answer.length);
}

function animateScoreTo(target) {
  const el = document.getElementById('pin-score');
  const start = Number.isFinite(displayedScore) ? displayedScore : target;
  const delta = target - start;
  if (delta === 0) {
    el.textContent = String(target);
    return;
  }
  const startTime = performance.now();
  const duration = 320;
  const hudBox = el.closest('.pin-hud-box');
  if (hudBox) {
    hudBox.classList.add('pulse');
    setTimeout(() => hudBox.classList.remove('pulse'), 260);
  }

  function frame(now) {
    const t = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    displayedScore = Math.round(start + delta * eased);
    el.textContent = String(displayedScore);
    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function lockIfDone() {
  const done = state.solved || state.lost;
  document.getElementById('pin-input').disabled = done;
  document.querySelector('#pin-form button[type="submit"]').disabled = done;
  document.getElementById('pin-reveal').disabled = done || state.clueIndex >= puzzle.clues.length - 1;
}

async function postResult(solved, score) {
  const user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user) return;
  try {
    await fetch(`${BACKEND}/api/fopl/puzzle/stats`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ game: 'pinshelf', won: !!solved, guesses: solved ? score : null })
    });
  } catch {}
}

function addOverallProgress(game, points, won) {
  const overall = JSON.parse(localStorage.getItem('fopl_games_overall_v1') || '{"xp":0,"sessions":0,"wins":0,"byGame":{}}');
  overall.xp = Number(overall.xp || 0) + Math.max(0, Number(points || 0));
  overall.sessions = Number(overall.sessions || 0) + 1;
  if (won) overall.wins = Number(overall.wins || 0) + 1;
  overall.byGame = overall.byGame || {};
  const current = Number(overall.byGame[game] || 0);
  overall.byGame[game] = current + Math.max(0, Number(points || 0));
  overall.updatedAt = Date.now();
  localStorage.setItem('fopl_games_overall_v1', JSON.stringify(overall));
}

async function finalizeRound() {
  if (state.counted) return;
  if (mode !== 'daily') {
    state.counted = true;
    return;
  }
  const stats = loadStats();
  stats.played += 1;
  if (state.solved) {
    stats.solved += 1;
    stats.streak += 1;
    stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
  } else {
    stats.streak = 0;
  }
  saveStats(stats);
  syncStatsView(stats);
  state.counted = true;
  dailyState = state;
  saveState();
  const points = state.solved ? Math.max(25, state.score) : 10;
  addOverallProgress('pinshelf', points, state.solved);
  await postResult(state.solved, state.score);
}

function updateModeUi() {
  const chip = document.getElementById('pin-mode-chip');
  const note = document.getElementById('pin-mode-note');
  if (mode === 'daily') {
    chip.textContent = 'Daily';
    chip.classList.remove('practice');
    note.textContent = 'Daily round counts toward streak and leaderboard stats (when signed in).';
    document.getElementById('pin-date').textContent = `Daily PinShelf • ${getDateLabel()}`;
  } else {
    chip.textContent = 'Practice';
    chip.classList.add('practice');
    note.textContent = 'Practice rounds are unlimited and do not affect daily streak or leaderboard stats.';
    document.getElementById('pin-date').textContent = 'Practice PinShelf • Unlimited Rounds';
  }
  document.getElementById('pin-daily').style.display = mode === 'practice' ? 'inline-block' : 'none';
  document.getElementById('pin-session').textContent = `Practice rounds this visit: ${practiceRoundsThisVisit}`;
}

function refresh() {
  renderHud();
  renderClues();
  renderHistory();
  lockIfDone();
}

async function submitGuess(e) {
  e.preventDefault();
  if (state.solved || state.lost) return;

  const input = document.getElementById('pin-input');
  const guess = input.value.trim().toUpperCase();
  if (!guess) {
    setFeedback('Type a guess first.', 'bad');
    return;
  }

  state.attempts += 1;
  state.guesses.push(guess);

  if (guess === puzzle.answer) {
    state.solved = true;
    setFeedback(`Correct. The answer is ${puzzle.answer}. Final score: ${state.score}.`, 'good');
    if (mode === 'daily') {
      dailyState = state;
      saveState();
    }
    refresh();
    await finalizeRound();
    return;
  }

  state.score -= 15;
  clampScore();

  if (state.attempts >= MAX_ATTEMPTS) {
    state.lost = true;
    setFeedback(`Round over. The answer was ${puzzle.answer}.`, 'bad');
    if (mode === 'daily') {
      dailyState = state;
      saveState();
    }
    refresh();
    await finalizeRound();
    return;
  }

  if (state.clueIndex < puzzle.clues.length - 1) state.clueIndex += 1;
  setFeedback('Not it. A new clue has been revealed.', 'bad');
  input.select();
  if (mode === 'daily') {
    dailyState = state;
    saveState();
  }
  refresh();
}

function revealClue() {
  if (state.solved || state.lost) return;
  if (state.clueIndex >= puzzle.clues.length - 1) {
    setFeedback('No more clues available.', 'bad');
    return;
  }
  state.clueIndex += 1;
  state.score -= 10;
  clampScore();
  setFeedback('Additional clue revealed.', 'info');
  if (mode === 'daily') {
    dailyState = state;
    saveState();
  }
  refresh();
}

function switchToDaily() {
  mode = 'daily';
  dailyPuzzle = getTodayPuzzle();
  dailyState = loadState();
  puzzle = dailyPuzzle;
  state = dailyState;
  renderedClueIndex = state.clueIndex;
  displayedScore = state.score;
  updateModeUi();
  if (state.solved) setFeedback(`You already solved today. Answer: ${puzzle.answer}.`, 'good');
  else if (state.lost) setFeedback(`You already finished today. Answer: ${puzzle.answer}.`, 'bad');
  else setFeedback('Use the clues to identify the hidden word.', 'info');
  refresh();
  if (state.solved || state.lost) finalizeRound();
}

function startPracticeRound() {
  mode = 'practice';
  practicePuzzle = getPracticePuzzle();
  practiceState = makePracticeState();
  puzzle = practicePuzzle;
  state = practiceState;
  renderedClueIndex = state.clueIndex;
  displayedScore = state.score;
  practiceRoundsThisVisit += 1;
  updateModeUi();
  setFeedback('Practice round started. This round does not count toward daily stats.', 'info');
  refresh();
}

function boot() {
  document.getElementById('pin-form').addEventListener('submit', submitGuess);
  document.getElementById('pin-reveal').addEventListener('click', revealClue);
  document.getElementById('pin-practice').addEventListener('click', startPracticeRound);
  document.getElementById('pin-daily').addEventListener('click', switchToDaily);

  syncStatsView(loadStats());
  switchToDaily();
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

boot();
}
</script>
