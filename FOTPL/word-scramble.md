---
layout: fopl
title: Word Scramble — Friends of the Poway Library
permalink: /word-scramble
description: Play daily Word Scramble from the Friends of the Poway Library.
fopl_nav_active: puzzles
---

<style>
  body { background: #f4f8f4; }
  .fopl-logo-wrap img { height: 90px; }

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
  .scramble-mode-row {
    margin: 0 0 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .scramble-mode-chip {
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
  .scramble-mode-chip.practice {
    background: #fff6e8;
    border-color: #e9cf9c;
    color: #6d4b14;
  }
  .scramble-mode-note {
    margin: 0;
    font-size: 0.84rem;
    color: #5d695e;
    font-weight: 700;
  }
  .scramble-actions {
    margin-top: 12px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .scramble-btn-alt {
    border: 1px solid #c7d6c8;
    background: #f6faf6;
    color: #1f3d22;
    border-radius: 6px;
    padding: 10px 14px;
    cursor: pointer;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.82rem;
  }
  .scramble-btn-alt:hover { background: #edf5ed; }
  .scramble-session {
    margin-top: 12px;
    background: #f8fbf8;
    border: 1px solid #dbe7db;
    border-radius: 7px;
    padding: 10px 12px;
    font-size: 0.84rem;
    color: #4e5d50;
    font-weight: 700;
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

  @media (max-width: 560px) {
    .stats-row { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .scramble-letters { font-size: 1.6rem; letter-spacing: 0.15em; }
  }
</style>

<div class="scramble-wrap">
  <div class="scramble-header">
    <div class="scramble-title">Word Scramble</div>
    <a class="scramble-btn-link" href="/puzzles" title="All Puzzles">All Games</a>
  </div>

  <div class="scramble-card">
    <div class="scramble-date" id="scramble-date"></div>
    <div class="scramble-mode-row">
      <span class="scramble-mode-chip" id="scramble-mode-chip">Daily</span>
      <p class="scramble-mode-note" id="scramble-mode-note">Daily round counts toward streak and leaderboard stats (when signed in).</p>
    </div>
    <p class="scramble-prompt">Unscramble the letters to form today\'s word.</p>
    <div class="scramble-letters" id="scramble-letters"></div>

    <form class="scramble-form" id="scramble-form">
      <input id="scramble-input" class="scramble-input" maxlength="12" autocomplete="off" placeholder="Type your answer" />
      <button class="scramble-submit" type="submit">Submit</button>
    </form>

    <div class="scramble-meta" id="scramble-meta">Attempts left: 5</div>
    <div class="scramble-feedback" id="scramble-feedback"></div>
    <div class="scramble-actions">
      <button type="button" class="scramble-btn-alt" id="scramble-practice">Practice Round (No Daily Count)</button>
      <button type="button" class="scramble-btn-alt" id="scramble-daily">Back To Daily Round</button>
    </div>
    <div class="scramble-session" id="scramble-session">Practice rounds this visit: 0</div>

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
const DAY_KEY = 'fopl_scramble_day';
const STATE_KEY = 'fopl_scramble_state';
const STATS_KEY = 'fopl_scramble_stats';

const WORDS = [
  'library', 'chapter', 'fiction', 'archive', 'reading', 'classic', 'mystery',
  'poetry', 'novel', 'author', 'shelf', 'volume', 'history', 'grammar',
  'catalog', 'borrower', 'bookmark', 'hardcover', 'paperback', 'index',
  'librarian', 'biography', 'manuscript', 'footnote', 'preface', 'epilogue',
  'bookstore', 'encyclopedia', 'anthology', 'publisher', 'circulation'
];

let answer = '';
let attempts = 0;
let done = false;
let mode = 'daily';
let practiceRoundsThisVisit = 0;

function getDayId() { return window.foplGetDayId(); }

function getTodayWord() {
  const day = Number(getDayId());
  const spread = (day * 17 + 11) % WORDS.length;
  return WORDS[spread].toUpperCase();
}

function getPracticeWord() {
  const candidate = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
  const daily = getTodayWord();
  if (WORDS.length < 2 || candidate !== daily) return candidate;
  const idx = (WORDS.findIndex((w) => w.toUpperCase() === candidate) + 1) % WORDS.length;
  return WORDS[idx].toUpperCase();
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
  if (!done) {
    document.getElementById('scramble-meta').textContent = `Attempts left: ${left}`;
    return;
  }
  document.getElementById('scramble-meta').textContent = mode === 'daily'
    ? 'Daily round complete. You can play unlimited Practice rounds.'
    : 'Practice round complete. Start another Practice round any time.';
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

async function postResult(correct, tries) { return window.foplPostResult('word_scramble', !!correct, tries); }

function addOverallProgress(game, points, won) { return window.foplAddOverallProgress(game, points, won); }

async function finalizeResult(correct) {
  if (mode !== 'daily') return;
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
  const points = correct ? Math.max(20, 120 - (attempts - 1) * 20) : 10;
  addOverallProgress('word_scramble', points, correct);
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

function updateModeUi() {
  const chip = document.getElementById('scramble-mode-chip');
  const note = document.getElementById('scramble-mode-note');
  if (mode === 'daily') {
    chip.textContent = 'Daily';
    chip.classList.remove('practice');
    note.textContent = 'Daily round counts toward streak and leaderboard stats (when signed in).';
    document.getElementById('scramble-date').textContent = `Daily Scramble • ${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`;
  } else {
    chip.textContent = 'Practice';
    chip.classList.add('practice');
    note.textContent = 'Practice rounds are unlimited and do not affect daily streak or leaderboard stats.';
    document.getElementById('scramble-date').textContent = 'Practice Scramble • Unlimited Rounds';
  }
  document.getElementById('scramble-daily').style.display = mode === 'practice' ? 'inline-block' : 'none';
  document.getElementById('scramble-session').textContent = `Practice rounds this visit: ${practiceRoundsThisVisit}`;
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
      if (mode === 'daily') saveDayState({ status: 'won', attempts });
      disableInput();
      await finalizeResult(true);
      return;
    }

    if (attempts >= MAX_ATTEMPTS) {
      showFeedback(`Out of attempts. The answer was ${answer}.`, false);
      if (mode === 'daily') saveDayState({ status: 'lost', attempts });
      disableInput();
      await finalizeResult(false);
      return;
    }

    const hint = answer.slice(0, Math.min(2, attempts));
    showFeedback(`Not quite. Hint: starts with ${hint}`, false);
    if (mode === 'daily') saveDayState({ status: 'playing', attempts });
    updateMeta();
    input.select();
  });
}

function drawRound(word, seed) {
  answer = word;
  attempts = 0;
  done = false;
  document.getElementById('scramble-input').value = '';
  document.getElementById('scramble-input').disabled = false;
  document.querySelector('.scramble-submit').disabled = false;
  document.getElementById('scramble-feedback').className = 'scramble-feedback';
  document.getElementById('scramble-feedback').textContent = '';
  document.getElementById('scramble-letters').textContent = seededShuffle(answer, seed);
  updateModeUi();
  updateMeta();
}

function showDailyRound() {
  mode = 'daily';
  const daySeed = Number(getDayId());
  drawRound(getTodayWord(), daySeed);
  restoreState(loadDayState());
}

function startPracticeRound() {
  mode = 'practice';
  practiceRoundsThisVisit += 1;
  const word = getPracticeWord();
  const seed = Math.floor(Date.now() / 1000) + practiceRoundsThisVisit * 37;
  drawRound(word, seed);
  showFeedback('Practice round started. This round does not count toward daily stats.', true);
}

function setupGame() {
  bindForm();
  document.getElementById('scramble-practice').addEventListener('click', startPracticeRound);
  document.getElementById('scramble-daily').addEventListener('click', showDailyRound);
  showDailyRound();
}

syncStatsView(loadStats());
setupGame();
}
</script>
