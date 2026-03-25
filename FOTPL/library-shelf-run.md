---
layout: fopl
title: Library Shelf Run — Friends of the Poway Library
permalink: /library-shelf-run
description: Play Library Shelf Run and sort misplaced books by call number.
fopl_nav_active: puzzles
---

<style>
  body { background: #f4f8f4; }
  .fopl-logo-wrap img { height: 90px; }

  .run-wrap {
    max-width: 900px; margin: 0 auto; padding: 20px 16px 44px;
    min-height: calc(100vh - 90px);
  }
  .run-header {
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid #d8dfd8; padding-bottom: 10px; margin-bottom: 16px;
  }
  .run-title {
    font-family: 'Cabin', sans-serif; font-size: 1.45rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #023b0f;
  }
  .run-btn-link { text-decoration: none; color: #023b0f; font-size: 1.3rem; }

  .run-card {
    background: #fff; border-top: 4px solid #023b0f; border-radius: 8px;
    box-shadow: 0 2px 12px rgba(2,59,15,0.09); padding: 20px;
  }

  .run-intro {
    margin: 0 0 12px; color: #324132; line-height: 1.5;
  }
  .run-explain {
    margin: 0 0 12px;
    border: 1px solid #d3e3d5;
    background: #f8fbf8;
    border-radius: 7px;
    padding: 10px 12px;
    color: #294129;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .run-explain strong { color: #1c3f1f; }

  .run-hud {
    display: grid; grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 8px; margin-bottom: 12px;
  }
  .hud-box {
    background: #f1f7f1; border: 1px solid #dce8dc; border-radius: 7px;
    padding: 8px; text-align: center;
  }
  .hud-label {
    font-size: 0.7rem; font-weight: 700; color: #6a736a;
    text-transform: uppercase; letter-spacing: 0.06em;
  }
  .hud-num {
    font-family: 'Cabin', sans-serif; font-size: 1.2rem; font-weight: 700;
    color: #023b0f; margin-top: 2px;
  }

  .shelf-map {
    display: grid; grid-template-columns: repeat(10, 1fr);
    gap: 6px; background: #edf4ed; border: 1px solid #dbe6db;
    border-radius: 8px; padding: 10px;
  }

  .cell {
    aspect-ratio: 1 / 1; min-height: 46px;
    border-radius: 6px; display: flex; align-items: center; justify-content: center;
    font-size: 0.9rem; font-weight: 700; text-align: center;
    position: relative; border: 1px solid #d4ddd4; background: #fff;
    color: #2b3a2b; user-select: none;
  }

  .zone { color: #0f3415; font-size: 0.72rem; border-width: 2px; }
  .zone-fiction { background: #deefe2; border-color: #4f8f5d; }
  .zone-history { background: #e9f1fb; border-color: #4f729f; }
  .zone-science { background: #f9efdd; border-color: #9a7a3f; }
  .zone.active-zone {
    box-shadow: 0 0 0 3px rgba(2,59,15,0.25) inset;
  }

  .book {
    background: #fff3f3; border-color: #bf6c6c; color: #7b2424;
    font-size: 0.7rem; line-height: 1.15; padding: 2px;
  }
  .book.active-book {
    background: #fff7d9;
    border-color: #b39119;
    color: #5e4b0a;
    box-shadow: 0 0 0 2px rgba(179,145,25,0.25) inset;
  }

  .cart {
    background: #023b0f; border-color: #023b0f; color: #fff;
    font-size: 0.76rem; line-height: 1.1;
  }
  .cart.loaded {
    background: #7f4f00;
    border-color: #7f4f00;
  }

  .run-task {
    margin: 8px 0 12px;
    border: 1px solid #d3e3d5;
    background: #f8fbf8;
    border-radius: 6px;
    padding: 10px 12px;
    font-size: 0.92rem;
    color: #274127;
  }

  .run-pad {
    display: none;
    margin-top: 12px;
    width: 180px;
  }
  .run-pad-row {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .run-pad-btn {
    width: 52px;
    height: 42px;
    border: 1px solid #c7d7c9;
    border-radius: 6px;
    background: #eef6ee;
    color: #1e3b1f;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    cursor: pointer;
  }

  .run-controls {
    display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;
  }
  .run-btn {
    border: none; background: #023b0f; color: #fff; border-radius: 6px;
    padding: 10px 14px; cursor: pointer; font-family: 'Cabin', sans-serif;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.8rem;
  }
  .run-btn.alt { background: #345838; }
  .run-btn:hover { background: #045218; }

  .run-status {
    margin-top: 12px; border: 1px solid #cadfca; background: #eef6ee;
    border-radius: 6px; padding: 10px 12px; color: #1f4a20; font-size: 0.94rem;
  }

  .run-help {
    margin-top: 10px; font-size: 0.86rem; color: #586558;
  }

  @media (max-width: 680px) {
    .run-hud { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cell { min-height: 34px; font-size: 0.66rem; }
    .run-pad { display: block; }
  }
</style>

<div class="run-wrap">
  <div class="run-header">
    <div class="run-title">Library Shelf Run</div>
    <a class="run-btn-link" href="/puzzles" title="All Puzzles">All Games</a>
  </div>

  <div class="run-card">
    <p class="run-intro">
      Move the cart and re-shelve misplaced books. Pick up a book by driving over it,
      then bring it to the matching shelf zone.
    </p>

    <div class="run-hud">
      <div class="hud-box"><div class="hud-label">Sorted</div><div class="hud-num" id="hud-sorted">0 / 4</div></div>
      <div class="hud-box"><div class="hud-label">Moves</div><div class="hud-num" id="hud-moves">0</div></div>
      <div class="hud-box"><div class="hud-label">Time Left</div><div class="hud-num" id="hud-time">01:30</div></div>
      <div class="hud-box"><div class="hud-label">Strikes</div><div class="hud-num" id="hud-strikes">0 / 3</div></div>
      <div class="hud-box"><div class="hud-label">Score</div><div class="hud-num" id="hud-score">0</div></div>
      <div class="hud-box"><div class="hud-label">Best Score</div><div class="hud-num" id="hud-best">--</div></div>
    </div>

    <div class="run-task" id="run-task">Current job: Pick up the highlighted book, then drive it to the highlighted shelf.</div>

    <div class="run-explain">
      <strong>What is this?</strong> A quick library sorting game where you fix misplaced books.<br>
      <strong>Why it relates:</strong> Libraries use call-number sections (like FIC, 900, 500) to organize shelves.<br>
      <strong>How to play:</strong> Move with arrow keys/WASD, collect the highlighted book, and drop it at the matching shelf label.<br>
      <strong>How to win:</strong> Sort all books before time runs out and before you hit 3 strikes.
    </div>

    <div class="shelf-map" id="shelf-map"></div>

    <div class="run-controls">
      <button class="run-btn" id="new-round-btn" type="button">New Round</button>
      <button class="run-btn alt" id="show-rules-btn" type="button">Show Rules</button>
    </div>

    <div class="run-status" id="run-status">Move with arrow keys/WASD. Follow the highlighted book and shelf.</div>
    <div class="run-help" id="run-help">Shelf labels: FIC = Fiction, 900 = History, 500 = Science.</div>

    <div class="run-pad">
      <div class="run-pad-row"><button class="run-pad-btn" type="button" id="pad-up">Up</button></div>
      <div class="run-pad-row">
        <button class="run-pad-btn" type="button" id="pad-left">Left</button>
        <button class="run-pad-btn" type="button" id="pad-down">Down</button>
        <button class="run-pad-btn" type="button" id="pad-right">Right</button>
      </div>
    </div>
  </div>
</div>

<script>
{
const BACKEND = window.FOPL_BACKEND;
const COLS = 10;
const ROWS = 7;
const BOOK_COUNT = 4;
const ROUND_SECONDS = 90;
const MAX_STRIKES = 3;
const BEST_KEY = 'fopl_shelf_run_best';

const zones = [
  { id: 'fiction', label: 'FIC', x: 1, y: 0, width: 2, css: 'zone-fiction' },
  { id: 'history', label: '900', x: 4, y: 0, width: 2, css: 'zone-history' },
  { id: 'science', label: '500', x: 7, y: 0, width: 2, css: 'zone-science' }
];

const callPool = {
  fiction: ['FIC AUSTEN', 'FIC ORWELL', 'FIC MORRISON', 'FIC LONDON'],
  history: ['940.53 KEENE', '973.049 GOMEZ', '920.02 BROWN', '909.8 SMITH'],
  science: ['500.2 WU', '551.4 PARK', '570.12 LEE', '530.9 PATEL']
};

let player = { x: 4, y: 6 };
let books = [];
let taskOrder = [];
let taskIndex = 0;
let carrying = null;
let moves = 0;
let sorted = 0;
let score = 0;
let isRunning = false;
let startTime = 0;
let timerId = null;
let roundComplete = false;
let strikes = 0;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

function shuffle(arr) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

function formatTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const mm = String(Math.floor(total / 60)).padStart(2, '0');
  const ss = String(total % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

function setStatus(msg) {
  document.getElementById('run-status').textContent = msg;
}

function setHud() {
  document.getElementById('hud-sorted').textContent = `${sorted} / ${BOOK_COUNT}`;
  document.getElementById('hud-moves').textContent = String(moves);
  document.getElementById('hud-score').textContent = String(score);
  document.getElementById('hud-strikes').textContent = `${strikes} / ${MAX_STRIKES}`;
}

function setBestHud() {
  const best = JSON.parse(localStorage.getItem(BEST_KEY) || 'null');
  if (!best) {
    document.getElementById('hud-best').textContent = '--';
    return;
  }
  document.getElementById('hud-best').textContent = `${best.score} / ${formatTime(best.timeMs)}`;
}

function updateTimer() {
  if (!isRunning) return;
  const elapsed = Date.now() - startTime;
  const leftMs = Math.max(0, ROUND_SECONDS * 1000 - elapsed);
  document.getElementById('hud-time').textContent = formatTime(leftMs);
  if (leftMs <= 0 && !roundComplete) {
    loseRound('Time ran out. Start a new round and try again.');
  }
}

function startTimer() {
  if (isRunning || roundComplete) return;
  isRunning = true;
  startTime = Date.now();
  timerId = setInterval(updateTimer, 250);
}

function stopTimer() {
  isRunning = false;
  clearInterval(timerId);
  timerId = null;
}

function addStrike(message) {
  strikes += 1;
  setHud();
  if (strikes >= MAX_STRIKES) {
    loseRound('Too many mistakes. Start a new round and try again.');
    return;
  }
  setStatus(`${message} Strike ${strikes}/${MAX_STRIKES}.`);
}

function zoneAt(x, y) {
  return zones.find((z) => y === z.y && x >= z.x && x < z.x + z.width) || null;
}

function bookAt(x, y) {
  return books.find((b) => b.x === x && b.y === y && !b.sorted) || null;
}

function currentTaskBook() {
  if (taskIndex >= taskOrder.length) return null;
  const id = taskOrder[taskIndex];
  return books.find((b) => b.id === id) || null;
}

function zoneLabel(zoneId) {
  if (zoneId === 'fiction') return 'FIC';
  if (zoneId === 'history') return '900';
  return '500';
}

function updateTaskText() {
  const taskEl = document.getElementById('run-task');
  const task = currentTaskBook();
  if (!task) {
    taskEl.textContent = 'All books sorted. Start a new round to play again.';
    return;
  }
  if (carrying && carrying.id === task.id) {
    taskEl.textContent = `Deliver ${task.call} to shelf ${zoneLabel(task.zoneId)}.`;
    return;
  }
  taskEl.textContent = `Pick up ${task.call}, then drive it to shelf ${zoneLabel(task.zoneId)}.`;
}

function openCells() {
  const blocked = new Set();
  zones.forEach((z) => {
    for (let i = 0; i < z.width; i++) blocked.add(`${z.x + i},${z.y}`);
  });
  const cells = [];
  for (let y = 1; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (!blocked.has(`${x},${y}`)) cells.push({ x, y });
    }
  }
  return cells;
}

function generateBooks() {
  const cells = openCells();
  const selected = [];
  while (selected.length < BOOK_COUNT && cells.length) {
    const idx = randomInt(0, cells.length - 1);
    selected.push(cells.splice(idx, 1)[0]);
  }

  const zoneIds = ['fiction', 'history', 'science', 'fiction'];
  const usedCalls = { fiction: new Set(), history: new Set(), science: new Set() };
  books = selected.map((pos, i) => {
    const zoneId = zoneIds[i % zoneIds.length];
    const options = clone(callPool[zoneId]).filter((item) => !usedCalls[zoneId].has(item));
    const call = options.length
      ? options[randomInt(0, options.length - 1)]
      : callPool[zoneId][randomInt(0, callPool[zoneId].length - 1)];
    usedCalls[zoneId].add(call);
    return {
      id: `book-${i + 1}`,
      x: pos.x,
      y: pos.y,
      zoneId,
      call,
      sorted: false
    };
  });
  taskOrder = shuffle(books.map((b) => b.id));
  taskIndex = 0;
}

function drawMap() {
  const map = document.getElementById('shelf-map');
  map.innerHTML = '';

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      const zone = zoneAt(x, y);
      if (zone) {
        cell.classList.add('zone', zone.css);
        const task = currentTaskBook();
        if (task && task.zoneId === zone.id && carrying && carrying.id === task.id) {
          cell.classList.add('active-zone');
        }
        cell.textContent = zone.label;
      }

      const book = bookAt(x, y);
      if (book) {
        cell.className = 'cell book';
        const task = currentTaskBook();
        if (task && task.id === book.id) cell.classList.add('active-book');
        cell.textContent = book.call;
      }

      if (player.x === x && player.y === y) {
        cell.className = 'cell cart' + (carrying ? ' loaded' : '');
        cell.textContent = carrying ? 'LOAD' : 'CART';
      }

      map.appendChild(cell);
    }
  }
}

function pickUpIfPresent() {
  if (carrying) return;
  const book = bookAt(player.x, player.y);
  if (!book) return;
  const task = currentTaskBook();
  if (!task || task.id !== book.id) {
    score = Math.max(0, score - 5);
    setHud();
    addStrike(`Wrong pickup. Find ${task ? task.call : 'the highlighted task book'} first.`);
    return;
  }
  carrying = book;
  book.x = -1;
  book.y = -1;
  setStatus(`Picked up ${book.call}. Deliver to ${zoneLabel(book.zoneId)}.`);
  updateTaskText();
}

function dropIfOnZone() {
  if (!carrying) return;
  const zone = zoneAt(player.x, player.y);
  if (!zone) return;

  const task = currentTaskBook();
  if (!task || carrying.id !== task.id) return;

  if (zone.id === carrying.zoneId) {
    carrying.sorted = true;
    carrying = null;
    sorted += 1;
    taskIndex += 1;
    score += 120;
    setStatus('Nice. Book sorted correctly. Next job is highlighted.');
    setHud();
    updateTaskText();

    if (sorted >= BOOK_COUNT) {
      finishRound();
    }
  } else {
    score = Math.max(0, score - 10);
    setHud();
    addStrike('Wrong shelf section. Match the call number label.');
  }
}

function movePlayer(dx, dy) {
  if (roundComplete) {
    setStatus('Round complete. Press New Round to play again.');
    return;
  }

  const nx = player.x + dx;
  const ny = player.y + dy;
  if (nx < 0 || nx >= COLS || ny < 0 || ny >= ROWS) return;

  player.x = nx;
  player.y = ny;
  moves += 1;
  setHud();
  startTimer();

  pickUpIfPresent();
  dropIfOnZone();
  drawMap();
}

async function postResult(won) { return window.foplPostResult('library_shelf_run', !!won, score); }

function addOverallProgress(game, points, won) { return window.foplAddOverallProgress(game, points, won); }

function maybeSaveBest(timeMs, moveCount) {
  const prev = JSON.parse(localStorage.getItem(BEST_KEY) || 'null');
  const isBetter = !prev || score > prev.score || (score === prev.score && timeMs < prev.timeMs);
  if (isBetter) {
    localStorage.setItem(BEST_KEY, JSON.stringify({ moves: moveCount, timeMs, score }));
  }
  setBestHud();
}

async function finishRound() {
  if (roundComplete) return;
  stopTimer();
  roundComplete = true;
  const timeMs = Date.now() - startTime;
  const timeBonus = Math.max(0, 180 - Math.floor(timeMs / 1000));
  score += timeBonus;
  setHud();
  setStatus(`You win. Score ${score} (${moves} moves, ${formatTime(timeMs)}).`);
  maybeSaveBest(timeMs, moves);
  addOverallProgress('library_shelf_run', score, true);
  await postResult(true);
}

async function loseRound(message) {
  if (roundComplete) return;
  stopTimer();
  roundComplete = true;
  setStatus(message);
  addOverallProgress('library_shelf_run', 5, false);
  await postResult(false);
}

function resetRound() {
  stopTimer();
  roundComplete = false;
  player = { x: 4, y: 6 };
  books = [];
  taskOrder = [];
  taskIndex = 0;
  carrying = null;
  moves = 0;
  sorted = 0;
  score = 0;
  strikes = 0;
  document.getElementById('hud-time').textContent = formatTime(ROUND_SECONDS * 1000);

  generateBooks();
  setHud();
  setStatus('Move with arrow keys/WASD. Pick up highlighted book, then deliver it to highlighted shelf.');
  updateTaskText();
  drawMap();
}

function bindControls() {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const key = e.key.toLowerCase();
    if (['arrowup', 'w'].includes(key)) {
      e.preventDefault();
      movePlayer(0, -1);
    } else if (['arrowdown', 's'].includes(key)) {
      e.preventDefault();
      movePlayer(0, 1);
    } else if (['arrowleft', 'a'].includes(key)) {
      e.preventDefault();
      movePlayer(-1, 0);
    } else if (['arrowright', 'd'].includes(key)) {
      e.preventDefault();
      movePlayer(1, 0);
    }
  });

  document.getElementById('new-round-btn').addEventListener('click', () => {
    resetRound();
  });

  document.getElementById('show-rules-btn').addEventListener('click', () => {
    setStatus('Rules: sort all books before time runs out. Wrong pickups or shelf drops add strikes (3 strikes = game over).');
  });

  document.getElementById('pad-up').addEventListener('click', () => movePlayer(0, -1));
  document.getElementById('pad-down').addEventListener('click', () => movePlayer(0, 1));
  document.getElementById('pad-left').addEventListener('click', () => movePlayer(-1, 0));
  document.getElementById('pad-right').addEventListener('click', () => movePlayer(1, 0));
}

setBestHud();
bindControls();
resetRound();
}
</script>
