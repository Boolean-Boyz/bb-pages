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
  .run-mode-banner {
    margin: 0 0 12px;
    border: 1px solid #b9d6bf;
    background: linear-gradient(90deg, #edf8ef, #f7fcf8);
    border-radius: 8px;
    padding: 10px 12px;
    color: #1c4724;
    font-size: 0.88rem;
    line-height: 1.5;
    font-weight: 700;
  }
  .run-mode-banner strong {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.72rem;
    display: inline-block;
    margin-right: 8px;
    color: #12401c;
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

  .run-learning {
    margin: 0 0 12px;
    border: 1px solid #d3e3d5;
    background: #f8fbf8;
    border-radius: 7px;
    padding: 10px 12px;
  }
  .run-learning-title {
    margin: 0 0 8px;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 700;
    color: #1f3f22;
  }
  .run-learning-list {
    display: grid;
    gap: 6px;
  }
  .learning-item {
    border: 1px solid #dce8dc;
    border-radius: 6px;
    background: #fff;
    padding: 8px 9px;
    font-size: 0.84rem;
    color: #425543;
    line-height: 1.45;
  }
  .learning-item.done {
    border-color: #8fc59a;
    background: #eef9f0;
    color: #1e4a24;
  }

  .run-hud {
    display: grid; grid-template-columns: repeat(8, minmax(0, 1fr));
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
  .run-objective {
    margin: 0 0 12px;
    border: 1px solid #d3e3d5;
    background: #f8fbf8;
    border-radius: 6px;
    padding: 10px 12px;
    font-size: 0.9rem;
    color: #2a492d;
    line-height: 1.5;
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

  /* ── Character scene ── */
  .run-char-panel { margin-top: 12px; background: #fff; border-top: 4px solid #023b0f; border-radius: 8px; box-shadow: 0 2px 12px rgba(2,59,15,0.09); overflow: hidden; height: 200px; }
  .run-char-panel canvas { display: block; width: 100%; height: 200px; }
</style>

<div class="run-wrap">
  <div class="run-header">
    <div class="run-title">Library Shelf Run: 3-Level Learning Challenge</div>
    <a class="run-btn-link" href="/puzzles" title="All Puzzles">All Games</a>
  </div>

  <div class="run-card">
    <p class="run-intro">
      Move the cart and re-shelve misplaced books. Pick up a book by driving over it,
      then bring it to the matching shelf zone.
    </p>

    <div class="run-mode-banner"><strong>Learning Mode</strong>Sort by real library section labels (FIC, 900, 500), learn what each call-number group means, and level up from beginner to advanced rounds.</div>

    <div class="run-hud">
      <div class="hud-box"><div class="hud-label">Level</div><div class="hud-num" id="hud-level">1 / 3</div></div>
      <div class="hud-box"><div class="hud-label">Sorted</div><div class="hud-num" id="hud-sorted">0 / 4</div></div>
      <div class="hud-box"><div class="hud-label">Moves</div><div class="hud-num" id="hud-moves">0</div></div>
      <div class="hud-box"><div class="hud-label">Time Left</div><div class="hud-num" id="hud-time">01:30</div></div>
      <div class="hud-box"><div class="hud-label">Strikes</div><div class="hud-num" id="hud-strikes">0 / 3</div></div>
      <div class="hud-box"><div class="hud-label">Score</div><div class="hud-num" id="hud-score">0</div></div>
      <div class="hud-box"><div class="hud-label">Powerup</div><div class="hud-num" id="hud-power">None</div></div>
      <div class="hud-box"><div class="hud-label">Best Score</div><div class="hud-num" id="hud-best">--</div></div>
    </div>

    <div class="run-task" id="run-task">Current job: Pick up the highlighted book, then drive it to the highlighted shelf.</div>
    <div class="run-objective" id="run-objective">Current objective: Learn and apply call-number grouping while sorting.</div>
    <div class="run-objective" id="run-level-goal">Level goal: Sort 4 books this level.</div>

    <div class="run-explain">
      <strong>What is this?</strong> A quick library sorting game where you fix misplaced books.<br>
      <strong>Why it relates:</strong> Libraries use call-number sections (like FIC, 900, 500) to organize shelves.<br>
      <strong>How to play:</strong> Move with arrow keys/WASD, collect the highlighted book, and drop it at the matching shelf label.<br>
      <strong>How to win:</strong> Clear every level before time runs out and before you hit 3 strikes. Grab powerups for help.
    </div>

    <div class="run-learning">
      <p class="run-learning-title">Library Skills Learned (<span id="learn-count">0</span>/3)</p>
      <div class="run-learning-list">
        <div class="learning-item" id="learn-fiction">FIC shelving: Fiction titles are grouped by author name after the FIC prefix.</div>
        <div class="learning-item" id="learn-history">900s shelving: Dewey 900 range is history/biography and should stay in that section.</div>
        <div class="learning-item" id="learn-science">500s shelving: Dewey 500 range is science and belongs in the science stacks.</div>
      </div>
    </div>

    <div class="shelf-map" id="shelf-map"></div>

    <div class="run-char-panel"><canvas id="char-canvas" height="200"></canvas></div>

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
const MAX_STRIKES = 3;
const BEST_KEY = 'fopl_shelf_run_best';
const LEVELS = [
  { books: 4, seconds: 90 },
  { books: 5, seconds: 80 },
  { books: 6, seconds: 75 }
];
const POWERUP_TYPES = ['time', 'shield'];

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
let runStartTime = 0;
let levelDeadline = 0;
let timerId = null;
let roundComplete = false;
let strikes = 0;
let currentLevel = 1;
let powerup = null;
let shieldCharges = 0;
let mapCells = [];
let learned = {
  fiction: false,
  history: false,
  science: false
};

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

function learningCount() {
  let count = 0;
  if (learned.fiction) count += 1;
  if (learned.history) count += 1;
  if (learned.science) count += 1;
  return count;
}

function setLearningHud() {
  document.getElementById('learn-count').textContent = String(learningCount());
  document.getElementById('learn-fiction').classList.toggle('done', learned.fiction);
  document.getElementById('learn-history').classList.toggle('done', learned.history);
  document.getElementById('learn-science').classList.toggle('done', learned.science);
}

function lessonForZone(zoneId) {
  if (zoneId === 'fiction') {
    return 'Learning unlock: FIC call numbers are fiction titles shelved by author name.';
  }
  if (zoneId === 'history') {
    return 'Learning unlock: Dewey 900 range is used for history and biography materials.';
  }
  return 'Learning unlock: Dewey 500 range covers natural sciences and related topics.';
}

function currentObjectiveText() {
  const task = currentTaskBook();
  if (!task) {
    return `Level ${currentLevel} complete. Start next sorting objective.`;
  }
  if (task.zoneId === 'fiction') {
    return `Learning objective: Identify fiction call numbers and shelve FIC titles by author label.`;
  }
  if (task.zoneId === 'history') {
    return `Learning objective: Use Dewey 900 classification for history/biography shelves.`;
  }
  return `Learning objective: Place Dewey 500 science materials in the correct science section.`;
}

function updateObjectiveText() {
  document.getElementById('run-objective').textContent = currentObjectiveText();
}

function setHud() {
  const levelCfg = LEVELS[currentLevel - 1];
  document.getElementById('hud-level').textContent = `${currentLevel} / ${LEVELS.length}`;
  document.getElementById('hud-sorted').textContent = `${sorted} / ${levelCfg.books}`;
  document.getElementById('run-level-goal').textContent = `Level goal: Sort ${levelCfg.books} books in ${levelCfg.seconds} seconds.`;
  document.getElementById('hud-moves').textContent = String(moves);
  document.getElementById('hud-score').textContent = String(score);
  document.getElementById('hud-strikes').textContent = `${strikes} / ${MAX_STRIKES}`;
  document.getElementById('hud-power').textContent = shieldCharges > 0 ? `Shield x${shieldCharges}` : 'None';
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
  const leftMs = Math.max(0, levelDeadline - Date.now());
  document.getElementById('hud-time').textContent = formatTime(leftMs);
  if (leftMs <= 0 && !roundComplete) {
    loseRound('Time ran out. Start a new round and try again.');
  }
}

function startTimer() {
  if (isRunning || roundComplete) return;
  isRunning = true;
  if (!runStartTime) runStartTime = Date.now();
  if (!levelDeadline) {
    const levelCfg = LEVELS[currentLevel - 1];
    levelDeadline = Date.now() + levelCfg.seconds * 1000;
  }
  timerId = setInterval(updateTimer, 250);
}

function stopTimer() {
  isRunning = false;
  clearInterval(timerId);
  timerId = null;
}

function addStrike(message) {
  if (shieldCharges > 0) {
    shieldCharges -= 1;
    setHud();
    setStatus(`${message} Shield absorbed the strike.`);
    return;
  }
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
    updateObjectiveText();
    return;
  }
  if (carrying && carrying.id === task.id) {
    taskEl.textContent = `Deliver ${task.call} to shelf ${zoneLabel(task.zoneId)}.`;
    updateObjectiveText();
    return;
  }
  taskEl.textContent = `Pick up ${task.call}, then drive it to shelf ${zoneLabel(task.zoneId)}.`;
  updateObjectiveText();
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

function generateBooks(bookCount) {
  const cells = openCells();
  const selected = [];
  while (selected.length < bookCount && cells.length) {
    const idx = randomInt(0, cells.length - 1);
    selected.push(cells.splice(idx, 1)[0]);
  }

  const zoneIds = ['fiction', 'history', 'science'];
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

function spawnPowerup() {
  const cells = openCells().filter((c) => {
    if (c.x === player.x && c.y === player.y) return false;
    if (bookAt(c.x, c.y)) return false;
    return true;
  });
  if (!cells.length) {
    powerup = null;
    return;
  }
  const pick = cells[randomInt(0, cells.length - 1)];
  const type = POWERUP_TYPES[randomInt(0, POWERUP_TYPES.length - 1)];
  powerup = { x: pick.x, y: pick.y, type };
}

function drawMap() {
  if (!mapCells.length) {
    const map = document.getElementById('shelf-map');
    map.innerHTML = '';
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        map.appendChild(cell);
        mapCells.push(cell);
      }
    }
  }

  const task = currentTaskBook();
  const activeTaskId = task ? task.id : null;
  const activeZoneId = task && carrying && carrying.id === task.id ? task.zoneId : null;
  const booksByPos = new Map();
  books.forEach((b) => {
    if (!b.sorted && b.x >= 0 && b.y >= 0) {
      booksByPos.set(`${b.x},${b.y}`, b);
    }
  });

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const idx = y * COLS + x;
      const cell = mapCells[idx];
      cell.className = 'cell';
      cell.removeAttribute('style');
      cell.textContent = '';

      const zone = zoneAt(x, y);
      if (zone) {
        cell.classList.add('zone', zone.css);
        if (activeZoneId && activeZoneId === zone.id) {
          cell.classList.add('active-zone');
        }
        cell.textContent = zone.label;
      }

      const book = booksByPos.get(`${x},${y}`);
      if (book) {
        cell.className = 'cell book';
        if (activeTaskId && activeTaskId === book.id) cell.classList.add('active-book');
        cell.textContent = book.call;
      }

      if (powerup && powerup.x === x && powerup.y === y) {
        cell.className = 'cell';
        cell.style.background = '#fff6d6';
        cell.style.borderColor = '#c9a235';
        cell.style.color = '#6b550a';
        cell.textContent = powerup.type === 'time' ? '+15s' : 'SHLD';
      }

      if (player.x === x && player.y === y) {
        cell.className = 'cell cart' + (carrying ? ' loaded' : '');
        cell.textContent = carrying ? 'LOAD' : 'CART';
      }
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

function collectPowerupIfPresent() {
  if (!powerup) return;
  if (player.x !== powerup.x || player.y !== powerup.y) return;
  if (powerup.type === 'time') {
    levelDeadline += 15000;
    score += 15;
    setStatus('Powerup collected: +15 seconds.');
  } else {
    shieldCharges += 1;
    score += 10;
    setStatus('Powerup collected: strike shield ready.');
  }
  powerup = null;
  setHud();
}

function startLevel(levelUp) {
  stopTimer();
  isRunning = false;
  levelDeadline = 0;
  player = { x: 4, y: 6 };
  books = [];
  taskOrder = [];
  taskIndex = 0;
  carrying = null;
  sorted = 0;

  const levelCfg = LEVELS[currentLevel - 1];
  document.getElementById('hud-time').textContent = formatTime(levelCfg.seconds * 1000);

  generateBooks(levelCfg.books);
  spawnPowerup();
  setHud();
  if (levelUp) {
    setStatus(`Level ${currentLevel} started. New objective: sort ${levelCfg.books} books and collect powerups.`);
  } else {
    setStatus('Learning challenge started: Level 1 of 3. Sort highlighted books into the correct library sections.');
  }
  updateTaskText();
  drawMap();
}

function dropIfOnZone() {
  if (!carrying) return;
  const zone = zoneAt(player.x, player.y);
  if (!zone) return;

  const task = currentTaskBook();
  if (!task || carrying.id !== task.id) return;

  if (zone.id === carrying.zoneId) {
    const learnedBefore = learned[carrying.zoneId];
    carrying.sorted = true;
    carrying = null;
    sorted += 1;
    taskIndex += 1;
    score += 120;
    if (!learnedBefore) {
      learned[zone.id] = true;
      setLearningHud();
      setStatus(`Nice. Book sorted correctly. ${lessonForZone(zone.id)}`);
    } else {
      setStatus('Nice. Book sorted correctly. Next job is highlighted.');
    }
    setHud();
    updateTaskText();
    if (window.charScene) { const rm=['Perfectly shelved!','Dewey Decimal approved!','The stacks are pleased!']; window.charScene.npcRight(rm[Math.floor(Math.random()*rm.length)]); window.charScene.aiComment(true); }

    if (sorted >= LEVELS[currentLevel - 1].books) {
      if (currentLevel < LEVELS.length) {
        currentLevel += 1;
        score += 100;
        startLevel(true);
      } else {
        finishRound();
      }
    }
  } else {
    score = Math.max(0, score - 10);
    setHud();
    addStrike(`Wrong shelf section. ${carrying.call} belongs in ${zoneLabel(carrying.zoneId)}, not ${zone.label}.`);
    if (window.charScene) { window.charScene.npcWrong('Wrong section, cart!'); window.charScene.aiComment(false); }
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

  collectPowerupIfPresent();
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
  const timeMs = Date.now() - runStartTime;
  const timeBonus = Math.max(0, 180 - Math.floor(timeMs / 1000));
  score += timeBonus;
  setHud();
  setStatus(`You win all ${LEVELS.length} levels. Score ${score} (${moves} moves, ${formatTime(timeMs)}).`);
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
  currentLevel = 1;
  powerup = null;
  shieldCharges = 0;
  runStartTime = 0;
  levelDeadline = 0;
  moves = 0;
  score = 0;
  strikes = 0;
  learned = { fiction: false, history: false, science: false };
  setLearningHud();

  startLevel(false);
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
    setStatus('Rules: clear Levels 1-3. Wrong pickups or shelf drops add strikes (3 = game over). Collect +15s or shield powerups.');
  });

  document.getElementById('pad-up').addEventListener('click', () => movePlayer(0, -1));
  document.getElementById('pad-down').addEventListener('click', () => movePlayer(0, 1));
  document.getElementById('pad-left').addEventListener('click', () => movePlayer(-1, 0));
  document.getElementById('pad-right').addEventListener('click', () => movePlayer(1, 0));
}

setBestHud();
bindControls();
setLearningHud();
resetRound();
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
  async aiComment(ok){
    const good=['Stacks superstar!','Catalog says: perfect placement!','Shelf wizardry unlocked!','Dewey approves that move!'];
    const bad=['Try matching the section label.','Close, but check the call number first.','Wrong shelf lane. Recheck the prefix.','The stacks need a better match.'];
    const source = ok ? good : bad;
    aLoad = false;
    aB = source[Math.floor(Math.random() * source.length)];
    aBT = 300;
  }
};
resize();new ResizeObserver(resize).observe(cvs.parentElement);loop();
})();
</script>
