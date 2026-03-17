---
layout: fopl
title: Wordle — Friends of the Poway Library
permalink: /wordle
description: Play the daily FOPL Wordle. Guess the 5-letter word in 6 tries.
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: 'Lato', sans-serif; background: #f4f8f4; }

  /* ── Nav ── */
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

  /* ── Game wrapper ── */
  .wordle-page {
    display: flex; flex-direction: column; align-items: center;
    min-height: calc(100vh - 90px); padding: 12px 16px 40px;
  }

  /* ── Header ── */
  .wordle-header {
    width: 100%; max-width: 500px; display: flex; align-items: center;
    justify-content: space-between; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 12px;
  }
  .wordle-title {
    font-family: 'Cabin', sans-serif; font-size: 1.5rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: #023b0f;
  }
  .wordle-header-btns { display: flex; gap: 8px; }
  .wordle-icon-btn {
    background: none; border: none; cursor: pointer; font-size: 1.4rem;
    color: #023b0f; padding: 4px; line-height: 1;
  }

  /* ── Toast ── */
  .wordle-toast-wrap {
    position: fixed; top: 110px; left: 50%; transform: translateX(-50%);
    z-index: 999; display: flex; flex-direction: column; align-items: center; gap: 8px;
    pointer-events: none;
  }
  .wordle-toast {
    background: #333; color: #fff; padding: 10px 20px; border-radius: 4px;
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.92rem;
    text-transform: uppercase; letter-spacing: 0.04em;
    animation: toastIn 0.15s ease; pointer-events: none;
  }
  @keyframes toastIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

  /* ── Board ── */
  .wordle-board {
    display: grid; grid-template-rows: repeat(6, 62px); gap: 5px;
    margin: 8px auto 16px; width: 330px;
  }
  .wordle-row { display: grid; grid-template-columns: repeat(5, 62px); gap: 5px; }
  .wordle-tile {
    width: 62px; height: 62px; border: 2px solid #d3d6da;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cabin', sans-serif; font-size: 2rem; font-weight: 700;
    text-transform: uppercase; user-select: none; color: #333;
    transition: border-color 0.05s;
  }
  .wordle-tile[data-filled] { border-color: #888; }
  .wordle-tile[data-state="correct"] { background: #023b0f; color: #fff; border-color: #023b0f; }
  .wordle-tile[data-state="present"] { background: #b59a00; color: #fff; border-color: #b59a00; }
  .wordle-tile[data-state="absent"]  { background: #787c7e; color: #fff; border-color: #787c7e; }

  @keyframes tilePop   { 0%,100%{transform:scale(1)} 50%{transform:scale(1.12)} }
  @keyframes tileShake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-5px)} 40%,80%{transform:translateX(5px)} }
  @keyframes tileFlip  { 0%{transform:scaleY(1)} 50%{transform:scaleY(0)} 100%{transform:scaleY(1)} }
  @keyframes tileBounce{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
  .pop    { animation: tilePop 0.1s; }
  .shake  { animation: tileShake 0.4s; }
  .flip   { animation: tileFlip 0.5s ease; }
  .bounce { animation: tileBounce 0.5s ease; }

  /* ── Keyboard ── */
  .wordle-keyboard { width: 100%; max-width: 500px; margin: 0 auto; }
  .wordle-key-row { display: flex; justify-content: center; gap: 6px; margin-bottom: 8px; }
  .wordle-key {
    height: 58px; min-width: 43px; padding: 0 6px; border: none; border-radius: 4px;
    background: #d3d6da; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.85rem; text-transform: uppercase; cursor: pointer;
    transition: background 0.15s; user-select: none; color: #333;
    display: flex; align-items: center; justify-content: center;
  }
  .wordle-key.wide { min-width: 64px; font-size: 0.78rem; }
  .wordle-key[data-state="correct"] { background: #023b0f; color: #fff; }
  .wordle-key[data-state="present"] { background: #b59a00; color: #fff; }
  .wordle-key[data-state="absent"]  { background: #787c7e; color: #fff; }

  /* ── Stats modal ── */
  .wordle-overlay {
    display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.45);
    z-index: 500; align-items: center; justify-content: center;
  }
  .wordle-overlay.open { display: flex; }
  .wordle-modal {
    background: #fff; border-radius: 8px; padding: 28px 32px; width: 90%; max-width: 420px;
    text-align: center; position: relative; max-height: 90vh; overflow-y: auto;
  }
  .wordle-modal h2 {
    font-family: 'Cabin', sans-serif; font-size: 1.1rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; color: #023b0f;
    margin: 0 0 20px; border: none;
  }
  .wordle-modal-close {
    position: absolute; top: 12px; right: 16px; background: none; border: none;
    font-size: 1.5rem; cursor: pointer; color: #666; line-height: 1;
  }
  .wordle-stats-row {
    display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;
  }
  .wordle-stat-item { display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .wordle-stat-num {
    font-family: 'Cabin', sans-serif; font-size: 2rem; font-weight: 700; color: #023b0f; line-height: 1;
  }
  .wordle-stat-lbl { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #666; }
  .wordle-dist { margin: 0 0 20px; text-align: left; }
  .wordle-dist h3 {
    font-family: 'Cabin', sans-serif; font-size: 0.82rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em; color: #555; margin: 0 0 10px; border: none;
  }
  .wordle-dist-row { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; font-size: 0.88rem; }
  .wordle-dist-num { font-weight: 700; min-width: 12px; color: #333; }
  .wordle-dist-bar-wrap { flex: 1; background: #eee; border-radius: 2px; height: 20px; }
  .wordle-dist-bar {
    height: 100%; min-width: 24px; background: #787c7e; border-radius: 2px;
    display: flex; align-items: center; justify-content: flex-end;
    padding-right: 6px; font-size: 0.8rem; font-weight: 700; color: #fff;
    transition: width 0.4s ease;
  }
  .wordle-dist-bar.current { background: #023b0f; }
  .wordle-login-note { font-size: 0.88rem; color: #888; margin: 0 0 16px; }
  .wordle-share-btn {
    width: 100%; padding: 12px; background: #023b0f; color: #fff; border: none;
    border-radius: 4px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.92rem; text-transform: uppercase; letter-spacing: 0.05em;
    cursor: pointer; margin-bottom: 8px; transition: background 0.2s;
  }
  .wordle-share-btn:hover { background: #045218; }
  .wordle-answer { font-size: 1rem; color: #555; margin: 0 0 16px; }
  .wordle-answer strong { color: #023b0f; text-transform: uppercase; }

  .fopl-footer {
    background: #023b0f; color: rgba(255,255,255,0.7);
    text-align: center; padding: 18px; font-size: 0.85rem;
  }
  .fopl-footer a { color: rgba(255,255,255,0.85); text-decoration: none; }

  @media (max-width: 400px) {
    .wordle-board { width: 280px; grid-template-rows: repeat(6, 52px); }
    .wordle-row   { grid-template-columns: repeat(5, 52px); }
    .wordle-tile  { width: 52px; height: 52px; font-size: 1.7rem; }
    .wordle-key   { height: 50px; min-width: 32px; font-size: 0.75rem; }
    .wordle-key.wide { min-width: 52px; }
  }
</style>

<!-- Nav -->
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

<!-- Toast container -->
<div class="wordle-toast-wrap" id="toast-wrap"></div>

<!-- Stats / end-game modal -->
<div class="wordle-overlay" id="stats-overlay">
  <div class="wordle-modal">
    <button class="wordle-modal-close" onclick="closeStats()">✕</button>
    <h2 id="modal-title">Statistics</h2>
    <div id="modal-body"></div>
  </div>
</div>

<!-- Game -->
<div class="wordle-page">
  <div class="wordle-header">
    <span class="wordle-title">Wordle</span>
    <div class="wordle-header-btns">
      <button class="wordle-icon-btn" title="Stats" onclick="openStats()">📊</button>
      <a class="wordle-icon-btn" href="/puzzles" title="All Puzzles" style="text-decoration:none;">🎮</a>
    </div>
  </div>

  <div class="wordle-board" id="board"></div>
  <div class="wordle-keyboard" id="keyboard"></div>
</div>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>

<script>
{
const BACKEND = 'http://127.0.0.1:8587';
const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

const WORDS = [
  'abide','about','above','abuse','actor','acute','admit','adopt','adult','after',
  'again','agent','agree','ahead','alarm','album','alert','alike','alive','allow',
  'alone','along','alter','angel','anger','angle','ankle','apple','apply','arena',
  'argue','arise','armor','aside','asset','avoid','awake','aware','awful','badge',
  'basic','beach','beard','beast','began','begin','below','bench','birth','black',
  'blade','blame','blank','bleed','blend','bless','blind','block','blood','bloom',
  'blunt','board','boost','bound','brain','brave','bread','break','breed','brick',
  'bride','brief','bring','broad','broke','brown','brush','build','built','bunch',
  'burst','cabin','cable','candy','carry','catch','cause','chain','chair','chaos',
  'charm','chart','chase','cheap','check','chess','chest','chief','child','choir',
  'civil','claim','class','clean','clear','click','climb','clock','close','cloud',
  'coach','coast','count','court','cover','crack','craft','crash','crawl','crazy',
  'cream','crime','cross','crowd','crown','crush','curve','cycle','daily','dance',
  'death','delta','dense','depth','dirty','doubt','draft','drain','drama','drawn',
  'dread','dream','dress','drink','drive','drone','drove','drown','dwarf','eagle',
  'early','earth','eight','elite','empty','enemy','enjoy','enter','entry','equal',
  'error','essay','event','every','exact','excel','exist','extra','fable','faith',
  'false','fancy','fatal','fault','feast','fence','fever','fiber','field','fifth',
  'fifty','fight','final','first','fixed','flame','flash','fleet','flesh','float',
  'floor','flour','fluid','focus','force','forge','forth','forum','found','frame',
  'frank','fraud','fresh','front','frost','fruit','fully','funny','ghost','giant',
  'given','glass','globe','gloom','glove','going','grace','grade','grain','grand',
  'grant','graph','grasp','grass','grave','great','greed','green','greet','grief',
  'grill','grind','groan','groom','gross','group','grove','grown','guard','guest',
  'guide','guild','guilt','gusto','habit','happy','harsh','heart','heavy','hence',
  'hinge','honey','horse','hotel','hound','house','human','humor','hurry','image',
  'imply','inner','input','ivory','jewel','joint','joker','judge','juice','juicy',
  'karma','knife','knock','known','label','lance','large','laser','later','laugh',
  'layer','learn','leave','legal','level','light','linen','liver','local','lodge',
  'logic','loose','lover','lower','lucky','lunch','magic','major','maker','manor',
  'maple','march','match','mayor','media','mercy','merge','merit','metal','meter',
  'might','minor','mixed','model','money','month','moral','motor','mount','mouse',
  'mouth','movie','music','naive','nerve','never','night','noise','north','novel',
  'nurse','occur','ocean','offer','often','olive','orbit','order','outer','owner',
  'ozone','paint','panel','panic','paper','party','pasta','patch','pause','peace',
  'pearl','phase','phone','piano','pilot','pinch','pitch','pixel','pizza','place',
  'plain','plane','plank','plant','plate','power','press','price','pride','prime',
  'print','prior','prize','probe','proud','prove','pulse','punch','queen','quest',
  'quick','quiet','quota','quote','radar','raise','rally','ranch','range','rapid',
  'ratio','reach','ready','realm','rebel','reign','relay','rider','ridge','rifle',
  'right','rival','river','robot','rocky','rough','round','route','royal','ruler',
  'rural','rusty','saint','sauce','scale','scene','scope','score','scout','screw',
  'sense','serve','seven','shade','shake','shall','shame','shape','share','shark',
  'sharp','sheep','shelf','shell','shift','shine','shirt','shock','shoot','shore',
  'short','shout','sight','since','sixth','sixty','skill','skull','slate','slave',
  'sleep','slice','slide','slope','small','smart','smell','smile','smoke','snake',
  'solar','solid','solve','sorry','south','space','spare','spark','spawn','speak',
  'speed','spend','spice','spine','spite','split','spoke','spoon','sport','spray',
  'stack','staff','stage','stain','stamp','stand','stare','start','state','steak',
  'steal','steam','steel','steep','steer','stern','stick','stiff','still','stock',
  'stone','stood','store','storm','story','stove','strap','straw','stray','strip',
  'stuck','study','stuff','style','sugar','super','surge','swear','sweep','sweet',
  'swift','swipe','swirl','sword','table','taste','teach','teeth','thank','theme',
  'there','thick','thing','think','third','thorn','those','three','threw','throw',
  'thumb','tiger','tight','timer','tired','title','today','token','total','touch',
  'tough','tower','toxic','trace','track','trade','trail','train','trait','trash',
  'treat','trend','trial','tribe','trick','tried','troop','truck','truly','trunk',
  'trust','truth','twice','twist','uncle','under','union','unite','until','upper',
  'upset','urban','usage','usual','utter','valid','value','vapor','vault','video',
  'viral','visit','vital','vivid','vocal','voice','voter','waste','watch','water',
  'weave','wedge','weird','whale','wheat','wheel','where','which','while','white',
  'whole','whose','women','world','worry','worse','worst','worth','would','wound',
  'wrath','wrist','wrote','yacht','yield','young','youth','zebra'
];

// ── Game state ──
let target      = '';
let guesses     = [];     // committed words
let currentGuess= [];     // letters typed so far
let currentRow  = 0;
let gameOver    = false;
let letterStates= {};     // best revealed state per letter
let stats       = null;   // stats from backend

// ── Helpers ──
function getWordOfDay() {
  const epoch = new Date('2024-01-01T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  const days  = Math.floor((today - epoch) / 86400000);
  return WORDS[days % WORDS.length].toUpperCase();
}

function getTile(row, col) {
  return document.querySelector(`#row-${row} .tile-${col}`);
}

function getKey(letter) {
  return document.querySelector(`.wordle-key[data-key="${letter}"]`);
}

// ── Build board & keyboard ──
function buildBoard() {
  const board = document.getElementById('board');
  for (let r = 0; r < MAX_GUESSES; r++) {
    const row = document.createElement('div');
    row.className = 'wordle-row'; row.id = `row-${r}`;
    for (let c = 0; c < WORD_LENGTH; c++) {
      const tile = document.createElement('div');
      tile.className = `wordle-tile tile-${c}`;
      row.appendChild(tile);
    }
    board.appendChild(row);
  }
}

function buildKeyboard() {
  const kb = document.getElementById('keyboard');
  const rows = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['ENTER','Z','X','C','V','B','N','M','⌫']
  ];
  rows.forEach(keys => {
    const row = document.createElement('div');
    row.className = 'wordle-key-row';
    keys.forEach(k => {
      const btn = document.createElement('button');
      btn.className = 'wordle-key' + (k.length > 1 ? ' wide' : '');
      btn.textContent = k;
      btn.dataset.key = k === '⌫' ? 'BACKSPACE' : k;
      btn.addEventListener('click', () => handleKey(btn.dataset.key));
      row.appendChild(btn);
    });
    kb.appendChild(row);
  });
}

// ── Input ──
function handleKey(key) {
  if (gameOver) return;
  if (key === 'ENTER')     submitGuess();
  else if (key === 'BACKSPACE') deleteLetter();
  else if (/^[A-Z]$/.test(key)) addLetter(key);
}

function addLetter(letter) {
  if (currentGuess.length >= WORD_LENGTH) return;
  const tile = getTile(currentRow, currentGuess.length);
  tile.textContent = letter;
  tile.dataset.filled = '1';
  currentGuess.push(letter);
  tile.classList.add('pop');
  setTimeout(() => tile.classList.remove('pop'), 120);
}

function deleteLetter() {
  if (currentGuess.length === 0) return;
  currentGuess.pop();
  const tile = getTile(currentRow, currentGuess.length);
  tile.textContent = '';
  delete tile.dataset.filled;
}

function submitGuess() {
  if (currentGuess.length < WORD_LENGTH) {
    shakeRow(currentRow); showToast('Not enough letters'); return;
  }
  const word = currentGuess.join('');
  const result = evaluate(word);
  reveal(currentRow, word, result, true);

  guesses.push(word);
  currentGuess = [];

  const won = word === target;
  if (won || guesses.length >= MAX_GUESSES) {
    gameOver = true;
    const delay = WORD_LENGTH * 320 + 200;
    if (won) {
      const msgs = ['Genius!','Magnificent!','Impressive!','Splendid!','Great!','Phew!'];
      setTimeout(() => showToast(msgs[guesses.length - 1] || 'Nice!'), delay);
    } else {
      setTimeout(() => showToast(target, 3500), delay);
    }
    setTimeout(() => endGame(won), delay + 1600);
  } else {
    currentRow++;
  }
  saveLocal();
}

// ── Evaluate ──
function evaluate(word) {
  const result   = Array(WORD_LENGTH).fill('absent');
  const tArr     = target.split('');
  const remaining= [...tArr];
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (word[i] === tArr[i]) { result[i] = 'correct'; remaining[i] = null; }
  }
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i] === 'correct') continue;
    const idx = remaining.indexOf(word[i]);
    if (idx !== -1) { result[i] = 'present'; remaining[idx] = null; }
  }
  return result;
}

// ── Reveal tiles ──
const STATE_PRIORITY = { correct: 3, present: 2, absent: 1 };

function reveal(row, word, result, animate) {
  result.forEach((state, i) => {
    const tile = getTile(row, i);
    const letter = word[i];
    if (!animate) {
      tile.textContent = letter;
      tile.dataset.filled = '1';
      tile.dataset.state = state;
      updateKeyState(letter, state);
      return;
    }
    setTimeout(() => {
      tile.classList.add('flip');
      setTimeout(() => {
        tile.dataset.state = state;
        updateKeyState(letter, state);
      }, 250);
      setTimeout(() => tile.classList.remove('flip'), 520);
    }, i * 320);
  });
}

function updateKeyState(letter, state) {
  const cur = letterStates[letter];
  if (!cur || STATE_PRIORITY[state] > STATE_PRIORITY[cur]) {
    letterStates[letter] = state;
    const key = getKey(letter);
    if (key) key.dataset.state = state;
  }
}

// ── Animations ──
function shakeRow(row) {
  const rowEl = document.getElementById(`row-${row}`);
  rowEl.classList.add('shake');
  setTimeout(() => rowEl.classList.remove('shake'), 500);
}

function bounceRow(row) {
  for (let c = 0; c < WORD_LENGTH; c++) {
    const tile = getTile(row, c);
    setTimeout(() => {
      tile.classList.add('bounce');
      setTimeout(() => tile.classList.remove('bounce'), 600);
    }, c * 100);
  }
}

// ── Toast ──
function showToast(msg, duration = 1200) {
  const wrap = document.getElementById('toast-wrap');
  const el   = document.createElement('div');
  el.className = 'wordle-toast';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity 0.3s';
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 350);
  }, duration);
}

// ── Local storage ──
function saveLocal() {
  localStorage.setItem('fopl_wordle_date',    new Date().toDateString());
  localStorage.setItem('fopl_wordle_guesses', JSON.stringify(guesses));
  localStorage.setItem('fopl_wordle_state',
    gameOver ? (guesses.includes(target) ? 'won' : 'lost') : 'playing');
}

function loadLocal() {
  if (localStorage.getItem('fopl_wordle_date') !== new Date().toDateString()) return;
  const saved = JSON.parse(localStorage.getItem('fopl_wordle_guesses') || '[]');
  const state = localStorage.getItem('fopl_wordle_state') || 'playing';
  saved.forEach((word, r) => {
    const result = evaluate(word);
    reveal(r, word, result, false);
  });
  guesses    = saved;
  currentRow = saved.length;
  if (state !== 'playing') {
    gameOver = true;
    if (saved.length > 0 && saved[saved.length-1] === target) bounceRow(saved.length - 1);
    setTimeout(openStats, 600);
  }
}

// ── Backend stats ──
async function fetchStats() {
  const user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user) return null;
  try {
    const res = await fetch(`${BACKEND}/api/fopl/puzzle/stats?game=wordle`, { credentials: 'include' });
    if (res.ok) return await res.json();
  } catch {}
  return null;
}

async function postResult(won, numGuesses) {
  const user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user) return;
  try {
    const res = await fetch(`${BACKEND}/api/fopl/puzzle/stats`, {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ game: 'wordle', won, guesses: won ? numGuesses : null }),
    });
    if (res.ok) stats = await res.json();
  } catch {}
}

// ── End game ──
async function endGame(won) {
  if (won) bounceRow(guesses.length - 1);
  await postResult(won, guesses.length);
  if (!stats) stats = await fetchStats();
  openStats(won ? 'won' : 'lost');
}

// ── Stats modal ──
function openStats(outcome) {
  const overlay = document.getElementById('stats-overlay');
  const title   = document.getElementById('modal-title');
  const body    = document.getElementById('modal-body');
  const user    = JSON.parse(localStorage.getItem('fopl_user') || 'null');

  if (outcome === 'won') title.textContent = '🎉 You Got It!';
  else if (outcome === 'lost') title.textContent = 'Nice Try!';
  else title.textContent = 'Statistics';

  let html = '';

  if (outcome === 'lost') {
    html += `<p class="wordle-answer">The word was <strong>${target}</strong></p>`;
  }

  if (!user) {
    html += `<p class="wordle-login-note"><a href="/login" style="color:#023b0f">Sign in</a> to save your stats and track your streak.</p>`;
  } else if (stats) {
    html += `
      <div class="wordle-stats-row">
        <div class="wordle-stat-item"><div class="wordle-stat-num">${stats.games_played}</div><div class="wordle-stat-lbl">Played</div></div>
        <div class="wordle-stat-item"><div class="wordle-stat-num">${stats.win_rate}</div><div class="wordle-stat-lbl">Win %</div></div>
        <div class="wordle-stat-item"><div class="wordle-stat-num">${stats.streak}</div><div class="wordle-stat-lbl">Streak</div></div>
        <div class="wordle-stat-item"><div class="wordle-stat-num">${stats.max_streak}</div><div class="wordle-stat-lbl">Max</div></div>
      </div>`;
    const dist = stats.guess_dist || {};
    const maxVal = Math.max(...Object.values(dist), 1);
    const lastNum = outcome === 'won' ? String(guesses.length) : null;
    html += `<div class="wordle-dist"><h3>Guess Distribution</h3>`;
    for (let i = 1; i <= 6; i++) {
      const val = dist[String(i)] || 0;
      const w   = Math.max(Math.round((val / maxVal) * 100), 8);
      const cur = String(i) === lastNum ? 'current' : '';
      html += `<div class="wordle-dist-row">
        <div class="wordle-dist-num">${i}</div>
        <div class="wordle-dist-bar-wrap">
          <div class="wordle-dist-bar ${cur}" style="width:${w}%">${val}</div>
        </div></div>`;
    }
    html += `</div>`;
  }

  if (gameOver) {
    html += `<button class="wordle-share-btn" onclick="shareResult()">Share 📋</button>`;
  }

  body.innerHTML = html;
  overlay.classList.add('open');
}

function closeStats() {
  document.getElementById('stats-overlay').classList.remove('open');
}

// ── Share ──
function shareResult() {
  const date   = new Date().toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
  const won    = guesses.includes(target);
  const count  = won ? guesses.length : 'X';
  let text     = `FOPL Wordle ${date} ${count}/6\n\n`;
  guesses.forEach(word => {
    const result = evaluate(word);
    text += result.map(s => s === 'correct' ? '🟩' : s === 'present' ? '🟨' : '⬜').join('') + '\n';
  });
  text += '\nfopl.powayfriends.org/wordle';
  navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!')).catch(() => showToast('Share copied!'));
}

// ── Keyboard listener ──
document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key === 'Enter') handleKey('ENTER');
  else if (e.key === 'Backspace') handleKey('BACKSPACE');
  else if (/^[a-zA-Z]$/.test(e.key)) handleKey(e.key.toUpperCase());
});

// ── Nav auth ──
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

// ── Start ──
buildBoard();
buildKeyboard();
target = getWordOfDay();
fetchStats().then(s => { stats = s; });
loadLocal();

// expose for onclick
window.openStats  = openStats;
window.closeStats = closeStats;
window.shareResult= shareResult;
}
</script>
