---
layout: fopl
title: PinShelf — Friends of the Poway Library
permalink: /wordle
description: Play the daily PinShelf clue game from Friends of the Poway Library.
fopl_nav_active: puzzles
---

<style>
  body { background: #f4f8f4; }

  .fopl-logo-wrap img { height: 90px; }

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

  @media (max-width: 560px) {
    .pin-hud { grid-template-columns: repeat(1, minmax(0,1fr)); }
    .stats-row { grid-template-columns: repeat(2, minmax(0,1fr)); }
  }

  /* ── Character scene ── */
  .char-scene { margin: -24px -24px 20px; height: 200px; overflow: hidden; border-radius: 4px 4px 0 0; }
  .char-scene canvas { display: block; width: 100%; height: 200px; }
</style>

<div class="pin-wrap">
  <div class="pin-header">
    <div>
      <div class="pin-title">PinShelf</div>
      <div class="pin-subtitle">Daily Clue Deduction Game</div>
    </div>
    <a class="pin-btn-link" href="/puzzles" title="All Puzzles">All Games</a>
  </div>

  <div class="pin-card">
    <div class="char-scene"><canvas id="char-canvas" height="200"></canvas></div>
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

<script>
{
const BACKEND = window.FOPL_BACKEND;
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
  },
  {
    answer: 'BOOK SALE',
    clues: [
      'A popular library fundraiser event.',
      'Shoppers hunt bargains here.',
      'It has 2 words and 8 letters total (ignoring space).',
      'It starts with B.'
    ]
  },
  {
    answer: 'DEWEY DECIMAL',
    clues: [
      'A famous library classification system.',
      'Its number ranges help organize nonfiction.',
      'It has 2 words and starts with D.',
      'The second word starts with D too.'
    ]
  },
  {
    answer: 'BOOKMARK',
    clues: [
      'It saves your place in a book.',
      'Readers use this between pages.',
      'It starts with B and has 8 letters.',
      'It ends with K.'
    ]
  },
  {
    answer: 'REFERENCE',
    clues: [
      'A library section for information lookup.',
      'Dictionaries and encyclopedias are often in this area.',
      'It starts with R and has 9 letters.',
      'It ends with E.'
    ]
  },
  {
    answer: 'STORYTIME',
    clues: [
      'A library program often for young children.',
      'Books are read aloud during this event.',
      'It starts with S and has 9 letters.',
      'Its second half suggests the clock.'
    ]
  },
  {
    answer: 'LATE FEE',
    clues: [
      'A charge for returning materials after the due date.',
      'Many libraries have reduced or removed this.',
      'It has 2 words and starts with L.',
      'The second word has 3 letters.'
    ]
  },
  {
    answer: 'READ ALOUD',
    clues: [
      'To speak text so others can hear it.',
      'Teachers and librarians often do this.',
      'It has 2 words and starts with R.',
      'The second word starts with A.'
    ]
  },
  {
    answer: 'CHECKOUT',
    clues: [
      'The action of borrowing a book.',
      'You do this at a circulation desk or kiosk.',
      'It starts with C and has 8 letters.',
      'It ends with T.'
    ]
  },
  {
    answer: 'LIBRARY CARD',
    clues: [
      'You usually need this to borrow items.',
      'It connects your account to loans.',
      'It has 2 words and starts with L.',
      'The second word starts with C.'
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
  return window.foplGetDayId();
}

function getTodayPuzzle() {
  const day = Number(getDayId());
  const spread = (day * 17 + 11) % PUZZLES.length;
  return PUZZLES[spread];
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

function normalizeAnswer(text) {
  return String(text || '')
    .toUpperCase()
    .replace(/[^A-Z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
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
  document.getElementById('pin-length').textContent = String(normalizeAnswer(puzzle.answer).replace(/ /g, '').length);
  document.getElementById('pin-input').maxLength = Math.max(16, normalizeAnswer(puzzle.answer).length + 2);
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
  return window.foplPostResult('pinshelf', !!solved, solved ? score : null);
}

function addOverallProgress(game, points, won) {
  return window.foplAddOverallProgress(game, points, won);
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
  const guess = normalizeAnswer(input.value);
  const correct = normalizeAnswer(puzzle.answer);
  if (!guess) {
    setFeedback('Type a guess first.', 'bad');
    return;
  }

  state.attempts += 1;
  state.guesses.push(guess);

  if (guess === correct) {
    state.solved = true;
    setFeedback(`Correct. The answer is ${puzzle.answer}. Final score: ${state.score}.`, 'good');
    if (mode === 'daily') {
      dailyState = state;
      saveState();
    }
    refresh();
    if (window.charScene) { window.charScene.npcRight('You cracked the code!'); window.charScene.aiComment(true); }
    await finalizeRound();
    return;
  }

  state.score -= 15;
  clampScore();

  if (state.attempts >= MAX_ATTEMPTS) {
    state.lost = true;
    setFeedback(`Round over. The answer was ${puzzle.answer}.`, 'bad');
    if (window.charScene) { window.charScene.npcWrong('Another unsolved mystery...'); window.charScene.aiComment(false); }
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
  if (window.charScene) { const wm=["The clues point elsewhere...","Keep deducing!","Study the clues again!"]; window.charScene.npcWrong(wm[Math.floor(Math.random()*wm.length)]); }
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

boot();
}

// ── Character Scene ──
(function(){
const cvs=document.getElementById('char-canvas');
if(!cvs)return;
const ctx=cvs.getContext('2d');
let W=0,H=200,tick=0;
let nA='idle',nAT=0,nM='',nMT=0;
let aB='',aBT=0,aLoad=false;
function resize(){const p=cvs.parentElement;if(!p)return;W=p.clientWidth;cvs.width=W;cvs.height=H;}
function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function bbl(bx,by,txt){if(!txt)return;ctx.font='11px sans-serif';const mw=Math.min(150,W*0.3);const words=txt.split(' ');const lines=[];let cur='';words.forEach(w=>{const t=cur?cur+' '+w:w;if(ctx.measureText(t).width>mw-14&&cur){lines.push(cur);cur=w;}else cur=t;});if(cur)lines.push(cur);const bw=mw,bh=lines.length*14+12;const rx=Math.max(2,Math.min(W-bw-2,bx-bw/2)),ry=by-bh-10;ctx.shadowColor='rgba(0,0,0,0.2)';ctx.shadowBlur=5;ctx.fillStyle='#fffef5';rr(rx,ry,bw,bh,5);ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle='#c8a04a';ctx.lineWidth=1.5;rr(rx,ry,bw,bh,5);ctx.stroke();ctx.beginPath();ctx.moveTo(bx-5,ry+bh);ctx.lineTo(bx,ry+bh+7);ctx.lineTo(bx+5,ry+bh);ctx.fillStyle='#fffef5';ctx.fill();ctx.strokeStyle='#c8a04a';ctx.stroke();ctx.fillStyle='#3a2a0a';ctx.textAlign='center';ctx.textBaseline='top';lines.forEach((l,i)=>ctx.fillText(l,rx+bw/2,ry+6+i*14));}
function drawBg(){ctx.fillStyle='#c4956a';ctx.fillRect(0,0,W,H-45);ctx.fillStyle='#2d5e3a';ctx.fillRect(0,H-45,W,45);ctx.fillStyle='rgba(255,230,100,0.07)';ctx.fillRect(0,H-45,W,3);const ns=Math.max(2,Math.floor(W/130)),sw=Math.floor(W/ns)-6;for(let i=0;i<ns;i++){const sx=i*(sw+6)+3,sy=8;ctx.fillStyle='#7a4e22';rr(sx,sy,sw,H-58,3);ctx.fill();const BC=['#a83030','#2a5e8a','#3a8a3a','#8a6a1a','#5a1a8a','#8a3a1a','#1a7a6a','#8a1a4a'];for(let s=0;s<3;s++){const by2=sy+8+s*36;ctx.fillStyle='#9a6030';ctx.fillRect(sx+2,by2+26,sw-4,3);let bx2=sx+3,ci=(i*7+s*4)%8;while(bx2<sx+sw-8){const bw2=6+(ci%3)*3,bh2=16+(ci%4)*3;ctx.fillStyle=BC[ci%8];ctx.fillRect(bx2,by2+26-bh2,bw2,bh2);ctx.fillStyle='rgba(0,0,0,0.12)';ctx.fillRect(bx2+bw2-2,by2+26-bh2,2,bh2);bx2+=bw2+1;ci++;}}}const g=ctx.createRadialGradient(W/2,-10,0,W/2,-10,H);g.addColorStop(0,'rgba(255,210,100,0.1)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);}
function drawLib(cx,fy){const by=fy+Math.sin(tick*0.04)*2;ctx.fillStyle='#111';ctx.fillRect(cx-5,by+24,5,3);ctx.fillRect(cx,by+24,5,3);ctx.fillStyle='#1a3a1a';ctx.fillRect(cx-4,by+16,3,8);ctx.fillRect(cx+1,by+16,3,8);ctx.fillStyle='#4a7a5a';ctx.fillRect(cx-7,by,14,16);ctx.fillStyle='#fff';ctx.fillRect(cx-2,by,4,5);ctx.fillStyle='#4a7a5a';ctx.fillRect(cx-10,by+2,3,9);ctx.fillRect(cx+7,by+2,3,9);ctx.fillStyle='#f5c9a0';ctx.fillRect(cx-10,by+11,3,3);ctx.fillRect(cx+7,by+11,3,3);ctx.fillStyle='#f5c9a0';ctx.fillRect(cx-2,by-5,4,5);ctx.fillRect(cx-5,by-14,10,11);ctx.fillStyle='#3a1e0a';ctx.fillRect(cx-5,by-14,10,4);ctx.fillRect(cx-7,by-11,3,8);ctx.fillStyle='#1a1a1a';ctx.fillRect(cx-3,by-9,2,2);ctx.fillRect(cx+1,by-9,2,2);ctx.strokeStyle='#333';ctx.lineWidth=1;ctx.strokeRect(cx-5,by-11,4,4);ctx.strokeRect(cx+1,by-11,4,4);ctx.beginPath();ctx.moveTo(cx-1,by-9);ctx.lineTo(cx+1,by-9);ctx.stroke();ctx.fillStyle='#fff';ctx.fillRect(cx-4,by+6,8,5);ctx.fillStyle='#023b0f';ctx.font='bold 4px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('LIB',cx,by+9);}
function drawOwl(cx,fy){let ox=cx,oy=fy;if(nA==='happy')oy+=Math.sin(tick*0.25)*7;if(nA==='shake')ox+=Math.sin(tick*0.6)*5;ctx.fillStyle='#7a5a10';ctx.beginPath();ctx.ellipse(ox,oy+8,10,12,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#c4981e';ctx.beginPath();ctx.ellipse(ox,oy+11,6,8,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#5a4008';ctx.beginPath();ctx.ellipse(ox-11,oy+8,4,7,-0.3,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(ox+11,oy+8,4,7,0.3,0,Math.PI*2);ctx.fill();ctx.fillStyle='#7a5a10';ctx.beginPath();ctx.ellipse(ox,oy-6,10,10,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#5a4008';ctx.beginPath();ctx.moveTo(ox-5,oy-14);ctx.lineTo(ox-8,oy-22);ctx.lineTo(ox-2,oy-14);ctx.fill();ctx.beginPath();ctx.moveTo(ox+5,oy-14);ctx.lineTo(ox+8,oy-22);ctx.lineTo(ox+2,oy-14);ctx.fill();ctx.fillStyle='#c4981e';ctx.beginPath();ctx.ellipse(ox,oy-5,6,6,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(ox-3.5,oy-7,3.5,3.5,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(ox+3.5,oy-7,3.5,3.5,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#1a1a1a';ctx.beginPath();ctx.ellipse(ox-3.5,oy-7+(nA==='happy'?-1:0),2,2,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(ox+3.5,oy-7+(nA==='happy'?-1:0),2,2,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#c47800';ctx.beginPath();ctx.moveTo(ox-2,oy-3);ctx.lineTo(ox,oy+1);ctx.lineTo(ox+2,oy-3);ctx.fill();ctx.strokeStyle='#b06a00';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(ox-5,oy+20);ctx.lineTo(ox-8,oy+26);ctx.moveTo(ox-5,oy+20);ctx.lineTo(ox-2,oy+26);ctx.moveTo(ox+5,oy+20);ctx.lineTo(ox+8,oy+26);ctx.moveTo(ox+5,oy+20);ctx.lineTo(ox+2,oy+26);ctx.stroke();}
function drawQM(cx,fy){const by=fy+Math.sin(tick*0.03+1.5)*1.5;ctx.fillStyle='#111';ctx.fillRect(cx-5,by+24,5,3);ctx.fillRect(cx,by+24,5,3);ctx.fillStyle='#1a2a4a';ctx.fillRect(cx-4,by+16,3,8);ctx.fillRect(cx+1,by+16,3,8);ctx.fillStyle='#1a2a4a';ctx.fillRect(cx-7,by,14,16);ctx.fillStyle='#7a2a2a';ctx.fillRect(cx+7,by+4,8,10);ctx.fillStyle='#c48080';ctx.fillRect(cx+8,by+5,6,8);ctx.fillStyle='#f5c9a0';ctx.fillRect(cx-2,by-5,4,5);ctx.fillRect(cx-5,by-14,10,11);ctx.fillStyle='#1a2a4a';ctx.fillRect(cx-9,by-15,18,3);ctx.fillRect(cx-4,by-21,8,6);ctx.strokeStyle='#c4a010';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(cx+8,by-12);ctx.lineTo(cx+11,by-6);ctx.stroke();ctx.fillStyle='#c4a010';ctx.beginPath();ctx.ellipse(cx+11,by-5,2,2,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#1a1a1a';ctx.fillRect(cx-3,by-9,2,2);ctx.fillRect(cx+1,by-9,2,2);ctx.strokeStyle='#a05030';ctx.lineWidth=1;ctx.beginPath();ctx.arc(cx,by-5,3,0.1,Math.PI-0.1);ctx.stroke();}
function loop(){tick++;nAT=Math.max(0,nAT-1);nMT=Math.max(0,nMT-1);aBT=Math.max(0,aBT-1);if(nAT===0)nA='idle';if(nMT===0)nM='';if(aBT===0&&!aLoad)aB='';if(!W)resize();ctx.clearRect(0,0,W,H);drawBg();const fy=H-45-28;const pX=Math.max(45,W*0.12),nX=Math.floor(W/2),aX=Math.min(W-45,W*0.85);drawLib(pX,fy);drawOwl(nX,fy);if(nM)bbl(nX,H-45-50,nM);drawQM(aX,fy);if(aB)bbl(aX,H-45-50,aB);requestAnimationFrame(loop);}
window.charScene={
  npcRight(m){nA='happy';nAT=80;nM=m;nMT=200;},
  npcWrong(m){nA='shake';nAT=50;nM=m;nMT=180;},
  async aiComment(ok){aLoad=true;aB='...';aBT=9999;try{const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json','anthropic-version':'2023-06-01'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:100,system:'You are a fun game character in a library game. Give one short (max 15 words), encouraging or playful comment based on whether the player just got something right or wrong. Be fun and library-themed.',messages:[{role:'user',content:ok?'The player got the answer right!':'The player got the answer wrong.'}]})});const d=await r.json();aB=d.content?.[0]?.text||(ok?'Splendid!':'Check the stacks!');}catch{aB=ok?'Well read!':'Back to the books!';}aLoad=false;aBT=300;}
};
resize();new ResizeObserver(resize).observe(cvs.parentElement);loop();
})();
</script>
