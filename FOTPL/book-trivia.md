---
layout: fopl
title: Book Trivia — Friends of the Poway Library
permalink: /book-trivia
description: Play daily Book Trivia from the Friends of the Poway Library.
fopl_nav_active: puzzles
---

<style>
  body { background: #f4f8f4; }
  .fopl-logo-wrap img { height: 90px; }

  .game-wrap {
    max-width: 760px; margin: 0 auto; padding: 20px 16px 44px;
    min-height: calc(100vh - 90px);
  }
  .game-header {
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid #d8dfd8; padding-bottom: 10px; margin-bottom: 16px;
  }
  .game-title {
    font-family: 'Cabin', sans-serif; font-size: 1.45rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #023b0f;
  }
  .game-btn-link {
    text-decoration: none; color: #023b0f; font-size: 1.3rem;
  }

  .trivia-card {
    background: #fff; border-top: 4px solid #023b0f; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.09); padding: 24px;
  }
  .trivia-date {
    font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.06em;
    color: #6b756b; margin-bottom: 12px; font-weight: 700;
  }
  .trivia-question {
    font-size: 1.14rem; line-height: 1.45; color: #173117; margin: 0 0 14px;
    font-weight: 700; font-family: 'Cabin', sans-serif;
  }
  .trivia-progress {
    margin: 0 0 8px;
    color: #4f5d4f;
    font-size: 0.9rem;
    font-weight: 700;
  }
  .trivia-options {
    display: grid; gap: 10px;
  }
  .trivia-option {
    border: 1px solid #cfd9cf; background: #fff; color: #1d2f1f;
    border-radius: 8px; padding: 12px 14px; text-align: left;
    cursor: pointer; font-size: 0.98rem;
  }
  .trivia-option:hover { border-color: #99b39d; background: #f7fbf7; }
  .trivia-option[disabled] { opacity: 0.9; cursor: default; }
  .trivia-option.correct { background: #d7f1db; border-color: #2e7d32; }
  .trivia-option.wrong { background: #fae1e1; border-color: #a52c2c; }

  .trivia-feedback {
    margin-top: 14px; padding: 10px 12px; border-radius: 6px;
    background: #eef6ee; color: #1f4a20; font-size: 0.95rem;
    border: 1px solid #cadfca; display: none;
  }
  .trivia-feedback.show { display: block; }
  .trivia-mode-row {
    margin: 0 0 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .trivia-mode-chip {
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
  .trivia-mode-chip.practice {
    background: #fff6e8;
    border-color: #e9cf9c;
    color: #6d4b14;
  }
  .trivia-mode-note {
    margin: 0;
    font-size: 0.84rem;
    color: #5d695e;
    font-weight: 700;
  }
  .trivia-actions {
    margin-top: 12px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .trivia-next {
    border: none;
    background: #023b0f;
    color: #fff;
    border-radius: 6px;
    padding: 10px 16px;
    cursor: pointer;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: none;
  }
  .trivia-next.show { display: inline-block; }
  .trivia-btn-alt {
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
  .trivia-btn-alt:hover {
    background: #edf5ed;
  }
  .trivia-session {
    margin-top: 16px;
    background: #f8fbf8;
    border: 1px solid #dbe7db;
    border-radius: 7px;
    padding: 10px 12px;
    font-size: 0.84rem;
    color: #4e5d50;
    font-weight: 700;
  }

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
  }
</style>

<div class="game-wrap">
  <div class="game-header">
    <div class="game-title">Book Trivia</div>
    <a class="game-btn-link" href="/puzzles" title="All Puzzles">All Games</a>
  </div>

  <div class="trivia-card">
    <div class="trivia-date" id="trivia-date"></div>
    <div class="trivia-mode-row">
      <span class="trivia-mode-chip" id="trivia-mode-chip">Daily</span>
      <p class="trivia-mode-note" id="trivia-mode-note">Daily round counts toward streak and overall progress.</p>
    </div>
    <p class="trivia-progress" id="trivia-progress"></p>
    <h2 class="trivia-question" id="trivia-question"></h2>
    <div class="trivia-options" id="trivia-options"></div>
    <div class="trivia-feedback" id="trivia-feedback"></div>
    <div class="trivia-actions">
      <button type="button" class="trivia-next" id="trivia-next">Next Question</button>
      <button type="button" class="trivia-btn-alt" id="trivia-practice">Practice Round (No Daily Count)</button>
      <button type="button" class="trivia-btn-alt" id="trivia-daily">Back To Daily Round</button>
    </div>
    <div class="trivia-session" id="trivia-session">Practice rounds this visit: 0</div>

    <div class="stats-row">
      <div class="stat-box"><div class="stat-num" id="stat-played">0</div><div class="stat-label">Rounds</div></div>
      <div class="stat-box"><div class="stat-num" id="stat-win">0%</div><div class="stat-label">Accuracy</div></div>
      <div class="stat-box"><div class="stat-num" id="stat-streak">0</div><div class="stat-label">Streak</div></div>
      <div class="stat-box"><div class="stat-num" id="stat-max">0</div><div class="stat-label">Best Streak</div></div>
    </div>
  </div>
</div>

<script>
{
const BACKEND = window.FOPL_BACKEND;
const ROUND_SIZE = 5;
const DATE_KEY = 'fopl_book_trivia_day';
const STATE_KEY = 'fopl_book_trivia_state';
const STATS_KEY = 'fopl_book_trivia_stats';

const QUESTIONS = [
  {
    question: 'Who wrote Pride and Prejudice?',
    options: ['Charlotte Bronte', 'Jane Austen', 'Emily Dickinson', 'Louisa May Alcott'],
    answer: 1,
    fact: 'Jane Austen published Pride and Prejudice in 1813.'
  },
  {
    question: 'What is the name of the hobbit played by Elijah Wood in The Lord of the Rings films?',
    options: ['Bilbo Baggins', 'Samwise Gamgee', 'Frodo Baggins', 'Peregrin Took'],
    answer: 2,
    fact: 'Frodo is the ring-bearer in Tolkien\'s trilogy.'
  },
  {
    question: 'Which novel begins with the line, It was the best of times, it was the worst of times?',
    options: ['Great Expectations', 'A Tale of Two Cities', 'David Copperfield', 'Oliver Twist'],
    answer: 1,
    fact: 'That famous opening line is from Dickens\' A Tale of Two Cities.'
  },
  {
    question: 'In To Kill a Mockingbird, what is the first name of Scout Finch?',
    options: ['Eleanor', 'Caroline', 'Jean Louise', 'Mayella'],
    answer: 2,
    fact: 'Scout\'s full name is Jean Louise Finch.'
  },
  {
    question: 'Which author created Sherlock Holmes?',
    options: ['Agatha Christie', 'Arthur Conan Doyle', 'Bram Stoker', 'Wilkie Collins'],
    answer: 1,
    fact: 'Holmes first appeared in A Study in Scarlet (1887).' 
  },
  {
    question: 'What is the title of George Orwell\'s dystopian novel published in 1949?',
    options: ['Animal Farm', 'Brave New World', 'Fahrenheit 451', 'Nineteen Eighty-Four'],
    answer: 3,
    fact: 'Nineteen Eighty-Four explores surveillance and authoritarianism.'
  },
  {
    question: 'Which sea captain hunts the white whale in Moby-Dick?',
    options: ['Captain Nemo', 'Captain Ahab', 'Captain Hook', 'Captain Flint'],
    answer: 1,
    fact: 'Captain Ahab obsessively pursues Moby Dick.'
  }
];

let mode = 'daily';
let dailyState = null;
let practiceState = null;
let practiceRoundsThisVisit = 0;

function getDayId() { return window.foplGetDayId(); }

function buildSeededIndexes(seedBase) {
  const order = [...Array(QUESTIONS.length).keys()];
  let seed = seedBase;
  for (let i = order.length - 1; i > 0; i--) {
    seed = (seed * 48271) % 2147483647;
    const j = seed % (i + 1);
    const t = order[i];
    order[i] = order[j];
    order[j] = t;
  }
  return order;
}

function getDailyRoundIndexes() {
  const day = Number(getDayId());
  const order = buildSeededIndexes(day * 7919 + 1237);
  return order.slice(0, Math.min(ROUND_SIZE, QUESTIONS.length));
}

function getPracticeRoundIndexes() {
  const noise = Math.floor(Math.random() * 1000000);
  const seed = Math.floor(Date.now() / 1000) + noise + practiceRoundsThisVisit * 97;
  const order = buildSeededIndexes(seed);
  return order.slice(0, Math.min(ROUND_SIZE, QUESTIONS.length));
}

function getDateLabel() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

function makeRoundState(idxs, roundMode) {
  return { index: 0, score: 0, answered: [], finished: false, counted: false, idxs, mode: roundMode };
}

function loadStats() {
  return JSON.parse(localStorage.getItem(STATS_KEY) || '{"played":0,"correct":0,"total":0,"streak":0,"maxStreak":0}');
}

function saveStats(stats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function syncStatsView(stats) {
  const pct = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  document.getElementById('stat-played').textContent = String(stats.played);
  document.getElementById('stat-win').textContent = `${pct}%`;
  document.getElementById('stat-streak').textContent = String(stats.streak);
  document.getElementById('stat-max').textContent = String(stats.maxStreak);
}

async function postResult(correct) { return window.foplPostResult('book_trivia', !!correct, 1); }

function addOverallProgress(game, points, won) { return window.foplAddOverallProgress(game, points, won); }

function lockChoices(chosen, answer) {
  document.querySelectorAll('.trivia-option').forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === answer) btn.classList.add('correct');
    if (idx === chosen && idx !== answer) btn.classList.add('wrong');
  });
}

function showFeedback(correct, fact) {
  const el = document.getElementById('trivia-feedback');
  el.classList.add('show');
  el.textContent = correct ? `Correct! ${fact}` : `Not quite. ${fact}`;
}

function setFeedback(message) {
  const el = document.getElementById('trivia-feedback');
  el.classList.add('show');
  el.textContent = message;
}

function clearFeedback() {
  const el = document.getElementById('trivia-feedback');
  el.classList.remove('show');
  el.textContent = '';
}

function updateModeBanner() {
  const chip = document.getElementById('trivia-mode-chip');
  const note = document.getElementById('trivia-mode-note');
  if (mode === 'daily') {
    chip.textContent = 'Daily';
    chip.classList.remove('practice');
    note.textContent = 'Daily round counts toward streak and overall progress.';
  } else {
    chip.textContent = 'Practice';
    chip.classList.add('practice');
    note.textContent = 'Practice rounds do not affect daily streak or daily completion.';
  }
  document.getElementById('trivia-session').textContent = `Practice rounds this visit: ${practiceRoundsThisVisit}`;
}

function updateModeButtons() {
  document.getElementById('trivia-daily').style.display = mode === 'practice' ? 'inline-block' : 'none';
}

function loadDayState(dayId, idxs) {
  if (localStorage.getItem(DATE_KEY) !== dayId) {
    return makeRoundState(idxs, 'daily');
  }
  const saved = JSON.parse(localStorage.getItem(STATE_KEY) || 'null');
  if (!saved || !Array.isArray(saved.idxs) || saved.idxs.join(',') !== idxs.join(',')) {
    return makeRoundState(idxs, 'daily');
  }
  saved.mode = 'daily';
  return saved;
}

function saveDayState(state) {
  localStorage.setItem(DATE_KEY, getDayId());
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function renderRound(state) {
  const optionsWrap = document.getElementById('trivia-options');
  const nextBtn = document.getElementById('trivia-next');
  const qIndex = state.idxs[state.index];
  const q = QUESTIONS[qIndex];

  updateModeBanner();
  updateModeButtons();
  document.getElementById('trivia-date').textContent = mode === 'daily'
    ? `Daily Trivia • ${getDateLabel()}`
    : 'Practice Trivia • Unlimited Rounds';
  document.getElementById('trivia-progress').textContent = `Question ${state.index + 1} of ${state.idxs.length} • Score ${state.score}`;
  document.getElementById('trivia-question').textContent = q.question;
  clearFeedback();
  nextBtn.classList.remove('show');

  optionsWrap.innerHTML = '';
  q.options.forEach((text, idx) => {
    const btn = document.createElement('button');
    btn.className = 'trivia-option';
    btn.type = 'button';
    btn.textContent = text;
    btn.addEventListener('click', () => {
      if (state.finished) return;
      if (state.answered[state.index] !== undefined) return;

      const correct = idx === q.answer;
      state.answered[state.index] = idx;
      if (correct) state.score += 1;

      lockChoices(idx, q.answer);
      showFeedback(correct, q.fact);
      nextBtn.classList.add('show');
      if (state.mode === 'daily') saveDayState(state);
    });
    optionsWrap.appendChild(btn);
  });

  const prior = state.answered[state.index];
  if (prior !== undefined) {
    lockChoices(prior, q.answer);
    showFeedback(prior === q.answer, q.fact);
    nextBtn.classList.add('show');
  }
}

async function finishRound(state) {
  state.finished = true;

  if (state.mode === 'daily' && !state.counted) {
    const stats = loadStats();
    stats.played += 1;
    stats.correct += state.score;
    stats.total += state.idxs.length;
    if (state.score >= Math.ceil(state.idxs.length * 0.6)) {
      stats.streak += 1;
      stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
    } else {
      stats.streak = 0;
    }
    saveStats(stats);
    syncStatsView(stats);
    await postResult(state.score === state.idxs.length);
    addOverallProgress('book_trivia', state.score * 30, state.score >= Math.ceil(state.idxs.length * 0.6));
    state.counted = true;
  }

  if (state.mode === 'daily') saveDayState(state);
  updateModeBanner();
  updateModeButtons();
  document.getElementById('trivia-progress').textContent = `Final Score ${state.score} / ${state.idxs.length}`;
  document.getElementById('trivia-question').textContent = state.mode === 'daily'
    ? 'Daily round complete. You can jump into Practice for unlimited rounds.'
    : 'Practice round complete. Start another practice round or return to Daily.';
  document.getElementById('trivia-options').innerHTML = '';
  const resultText = state.score === state.idxs.length
    ? 'Perfect score. Excellent work.'
    : `Nice run. You got ${state.score} correct.`;
  setFeedback(state.mode === 'daily' ? resultText : `${resultText} Practice results do not count toward daily progress.`);
  document.getElementById('trivia-next').classList.remove('show');
}

function runTrivia() {
  const dayId = getDayId();
  const idxs = getDailyRoundIndexes();
  dailyState = loadDayState(dayId, idxs);
  mode = 'daily';
  const nextBtn = document.getElementById('trivia-next');

  if (dailyState.finished || dailyState.index >= dailyState.idxs.length) {
    finishRound(dailyState);
    return;
  }

  renderRound(dailyState);
  nextBtn.onclick = () => {
    const active = mode === 'daily' ? dailyState : practiceState;
    if (!active) return;
    active.index += 1;
    if (active.index >= active.idxs.length) {
      finishRound(active);
      return;
    }
    if (active.mode === 'daily') saveDayState(active);
    renderRound(active);
  };
}

function startPracticeRound() {
  mode = 'practice';
  practiceState = makeRoundState(getPracticeRoundIndexes(), 'practice');
  practiceRoundsThisVisit += 1;
  renderRound(practiceState);
}

function showDailyRound() {
  mode = 'daily';
  const dayId = getDayId();
  const idxs = getDailyRoundIndexes();
  dailyState = loadDayState(dayId, idxs);
  if (dailyState.finished || dailyState.index >= dailyState.idxs.length) {
    finishRound(dailyState);
    return;
  }
  renderRound(dailyState);
}

syncStatsView(loadStats());
runTrivia();

document.getElementById('trivia-practice').addEventListener('click', () => {
  startPracticeRound();
});

document.getElementById('trivia-daily').addEventListener('click', () => {
  showDailyRound();
});
}
</script>
