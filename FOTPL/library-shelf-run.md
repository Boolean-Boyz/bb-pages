---
layout: fopl
title: Library Shelf Run — Friends of the Poway Library
permalink: /library-shelf-run
description: Play Library Shelf Run and sort misplaced books by call number.
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

  .run-hud {
    display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
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

  .book {
    background: #fff3f3; border-color: #bf6c6c; color: #7b2424;
    font-size: 0.7rem; line-height: 1.15; padding: 2px;
  }

  .cart {
    background: #023b0f; border-color: #023b0f; color: #fff;
    font-size: 0.76rem; line-height: 1.1;
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

  .fopl-footer {
    background: #023b0f; color: rgba(255,255,255,0.7);
    text-align: center; padding: 18px; font-size: 0.85rem;
  }
  .fopl-footer a { color: rgba(255,255,255,0.85); text-decoration: none; }

  @media (max-width: 680px) {
    .run-hud { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cell { min-height: 34px; font-size: 0.66rem; }
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
      <div class="hud-box"><div class="hud-label">Timer</div><div class="hud-num" id="hud-time">00:00</div></div>
      <div class="hud-box"><div class="hud-label">Best Score</div><div class="hud-num" id="hud-best">--</div></div>
    </div>

    <div class="shelf-map" id="shelf-map"></div>

    <div class="run-controls">
      <button class="run-btn" id="new-round-btn" type="button">New Round</button>
      <button class="run-btn alt" id="show-rules-btn" type="button">Show Rules</button>
    </div>

    <div class="run-status" id="run-status">Use arrow keys or WASD to move the cart.</div>
    <div class="run-help" id="run-help">Shelf zones: FIC = Fiction, 900 = History, 500 = Science.</div>
  </div>
</div>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>

<script>
{
const BACKEND = 'http://127.0.0.1:8587';
const COLS = 10;
const ROWS = 7;
const BOOK_COUNT = 4;
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
let carrying = null;
let moves = 0;
let sorted = 0;
let isRunning = false;
let startTime = 0;
let timerId = null;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clone(arr) {
  return JSON.parse(JSON.stringify(arr));
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
}

function setBestHud() {
  const best = JSON.parse(localStorage.getItem(BEST_KEY) || 'null');
  if (!best) {
    document.getElementById('hud-best').textContent = '--';
    return;
  }
  document.getElementById('hud-best').textContent = `${best.moves} / ${formatTime(best.timeMs)}`;
}

function updateTimer() {
  if (!isRunning) return;
  const elapsed = Date.now() - startTime;
  document.getElementById('hud-time').textContent = formatTime(elapsed);
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now();
  timerId = setInterval(updateTimer, 250);
}

function stopTimer() {
  isRunning = false;
  clearInterval(timerId);
  timerId = null;
}

function zoneAt(x, y) {
  return zones.find((z) => y === z.y && x >= z.x && x < z.x + z.width) || null;
}

function bookAt(x, y) {
  return books.find((b) => b.x === x && b.y === y && !b.sorted) || null;
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
  books = selected.map((pos, i) => {
    const zoneId = zoneIds[i % zoneIds.length];
    const options = clone(callPool[zoneId]);
    const call = options[randomInt(0, options.length - 1)];
    return {
      id: `book-${i + 1}`,
      x: pos.x,
      y: pos.y,
      zoneId,
      call,
      sorted: false
    };
  });
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
        cell.textContent = zone.label;
      }

      const book = bookAt(x, y);
      if (book) {
        cell.className = 'cell book';
        cell.textContent = book.call;
      }

      if (player.x === x && player.y === y) {
        cell.className = 'cell cart';
        cell.textContent = carrying ? 'CART +' : 'CART';
      }

      map.appendChild(cell);
    }
  }
}

function pickUpIfPresent() {
  if (carrying) return;
  const book = bookAt(player.x, player.y);
  if (!book) return;
  carrying = book;
  book.x = -1;
  book.y = -1;
  setStatus(`Picked up ${book.call}. Deliver to ${book.zoneId.toUpperCase()}.`);
}

function dropIfOnZone() {
  if (!carrying) return;
  const zone = zoneAt(player.x, player.y);
  if (!zone) return;

  if (zone.id === carrying.zoneId) {
    carrying.sorted = true;
    carrying = null;
    sorted += 1;
    setStatus('Great shelving. Keep going!');
    setHud();

    if (sorted >= BOOK_COUNT) {
      finishRound();
    }
  } else {
    setStatus('Wrong shelf zone. Check the call number range.');
  }
}

function movePlayer(dx, dy) {
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

async function postResult(timeMs, moveCount) {
  const user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user) return;
  try {
    await fetch(`${BACKEND}/api/fopl/puzzle/stats`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ game: 'library_shelf_run', won: true, guesses: moveCount })
    });
  } catch {}
}

function maybeSaveBest(timeMs, moveCount) {
  const prev = JSON.parse(localStorage.getItem(BEST_KEY) || 'null');
  const isBetter = !prev || moveCount < prev.moves || (moveCount === prev.moves && timeMs < prev.timeMs);
  if (isBetter) {
    localStorage.setItem(BEST_KEY, JSON.stringify({ moves: moveCount, timeMs }));
  }
  setBestHud();
}

async function finishRound() {
  stopTimer();
  const timeMs = Date.now() - startTime;
  setStatus(`Round complete in ${moves} moves and ${formatTime(timeMs)}.`);
  maybeSaveBest(timeMs, moves);
  await postResult(timeMs, moves);
}

function resetRound() {
  stopTimer();
  player = { x: 4, y: 6 };
  books = [];
  carrying = null;
  moves = 0;
  sorted = 0;
  document.getElementById('hud-time').textContent = '00:00';

  generateBooks();
  setHud();
  setStatus('Use arrow keys or WASD to move the cart.');
  drawMap();
}

function bindControls() {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const key = e.key.toLowerCase();
    if (['arrowup', 'w'].includes(key)) movePlayer(0, -1);
    else if (['arrowdown', 's'].includes(key)) movePlayer(0, 1);
    else if (['arrowleft', 'a'].includes(key)) movePlayer(-1, 0);
    else if (['arrowright', 'd'].includes(key)) movePlayer(1, 0);
  });

  document.getElementById('new-round-btn').addEventListener('click', () => {
    resetRound();
  });

  document.getElementById('show-rules-btn').addEventListener('click', () => {
    setStatus('Collect a book, then drive onto FIC, 900, or 500 to shelve it. Finish all 4 books.');
  });
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

setBestHud();
bindControls();
resetRound();
}
</script>
