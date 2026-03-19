---
layout: fopl
title: Book Trivia — Friends of the Poway Library
permalink: /book-trivia
description: Play daily Book Trivia from the Friends of the Poway Library.
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
  .trivia-next {
    margin-top: 12px;
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

<div class="game-wrap">
  <div class="game-header">
    <div class="game-title">Book Trivia</div>
    <a class="game-btn-link" href="/puzzles" title="All Puzzles">All Games</a>
  </div>

  <div class="trivia-card">
    <div class="trivia-date" id="trivia-date"></div>
    <p class="trivia-progress" id="trivia-progress"></p>
    <h2 class="trivia-question" id="trivia-question"></h2>
    <div class="trivia-options" id="trivia-options"></div>
    <div class="trivia-feedback" id="trivia-feedback"></div>
    <button type="button" class="trivia-next" id="trivia-next">Next Question</button>

    <div class="stats-row">
      <div class="stat-box"><div class="stat-num" id="stat-played">0</div><div class="stat-label">Rounds</div></div>
      <div class="stat-box"><div class="stat-num" id="stat-win">0%</div><div class="stat-label">Accuracy</div></div>
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

function getDayId() {
  const epoch = new Date('2024-01-01T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return String(Math.floor((today - epoch) / 86400000));
}

function getDailyRoundIndexes() {
  const day = Number(getDayId());
  const order = [...Array(QUESTIONS.length).keys()];
  let seed = day * 7919 + 1237;
  for (let i = order.length - 1; i > 0; i--) {
    seed = (seed * 48271) % 2147483647;
    const j = seed % (i + 1);
    const t = order[i];
    order[i] = order[j];
    order[j] = t;
  }
  return order.slice(0, Math.min(ROUND_SIZE, QUESTIONS.length));
}

function getDateLabel() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
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

async function postResult(correct) {
  const user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user) return;
  try {
    await fetch(`${BACKEND}/api/fopl/puzzle/stats`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ game: 'book_trivia', won: !!correct, guesses: 1 })
    });
  } catch {}
}

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

function loadDayState(dayId, idxs) {
  if (localStorage.getItem(DATE_KEY) !== dayId) {
    return { index: 0, score: 0, answered: [], finished: false, counted: false, idxs };
  }
  const saved = JSON.parse(localStorage.getItem(STATE_KEY) || 'null');
  if (!saved || !Array.isArray(saved.idxs) || saved.idxs.join(',') !== idxs.join(',')) {
    return { index: 0, score: 0, answered: [], finished: false, counted: false, idxs };
  }
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

  document.getElementById('trivia-date').textContent = `Daily Trivia • ${getDateLabel()}`;
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
      saveDayState(state);
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

  if (!state.counted) {
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
    state.counted = true;
  }

  saveDayState(state);
  document.getElementById('trivia-progress').textContent = `Final Score ${state.score} / ${state.idxs.length}`;
  document.getElementById('trivia-question').textContent = 'Daily round complete. Come back tomorrow for a fresh set of questions.';
  document.getElementById('trivia-options').innerHTML = '';
  setFeedback(state.score === state.idxs.length ? 'Perfect score. Excellent work.' : `Nice run. You got ${state.score} correct.`);
  document.getElementById('trivia-next').classList.remove('show');
}

function runTrivia() {
  const dayId = getDayId();
  const idxs = getDailyRoundIndexes();
  const state = loadDayState(dayId, idxs);
  const nextBtn = document.getElementById('trivia-next');

  if (state.finished || state.index >= state.idxs.length) {
    finishRound(state);
    return;
  }

  renderRound(state);
  nextBtn.onclick = () => {
    state.index += 1;
    if (state.index >= state.idxs.length) {
      finishRound(state);
      return;
    }
    saveDayState(state);
    renderRound(state);
  };
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
runTrivia();
}
</script>
