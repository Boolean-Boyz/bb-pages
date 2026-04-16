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
  .scramble-level-row {
    margin: 0 0 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .scramble-level-chip {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: 700;
    border-radius: 999px;
    padding: 5px 10px;
    border: 1px solid #bfd1bf;
    background: #eef6ef;
    color: #214325;
  }
  .scramble-level-note {
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

  /* ── Character scene ── */
  .char-scene { margin: -24px -24px 20px; height: 200px; overflow: hidden; border-radius: 4px 4px 0 0; }
  .char-scene canvas { display: block; width: 100%; height: 200px; }
</style>

<div class="scramble-wrap">
  <div class="scramble-header">
    <div class="scramble-title">Word Scramble</div>
    <a class="scramble-btn-link" href="/puzzles" title="All Puzzles">All Games</a>
  </div>

  <div class="scramble-card">
    <div class="char-scene"><canvas id="char-canvas" height="200"></canvas></div>
    <div class="scramble-date" id="scramble-date"></div>
    <div class="scramble-mode-row">
      <span class="scramble-mode-chip" id="scramble-mode-chip">Daily</span>
      <p class="scramble-mode-note" id="scramble-mode-note">Daily round counts toward streak and leaderboard stats (when signed in).</p>
    </div>
    <div class="scramble-level-row">
      <span class="scramble-level-chip" id="scramble-level-chip">Level 1</span>
      <p class="scramble-level-note" id="scramble-level-note">Short words and warm-up difficulty.</p>
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
const LEVELS = [
  {
    label: 'Level 1',
    note: 'Short words and warm-up difficulty.',
    words: ['novel', 'shelf', 'index', 'poetry', 'author', 'genre', 'story', 'title']
  },
  {
    label: 'Level 2',
    note: 'Medium words with familiar book terms.',
    words: ['library', 'chapter', 'fiction', 'archive', 'reading', 'classic', 'mystery', 'volume']
  },
  {
    label: 'Level 3',
    note: 'Longer words and trickier letter mixes.',
    words: ['catalog', 'borrower', 'bookmark', 'hardcover', 'paperback', 'grammar', 'history', 'footnote']
  },
  {
    label: 'Level 4',
    note: 'Advanced literary vocabulary and patterns.',
    words: ['librarian', 'biography', 'manuscript', 'epilogue', 'anthology', 'publisher', 'narrative', 'reference']
  },
  {
    label: 'Level 5',
    note: 'Expert mode with the hardest scrambles.',
    words: ['circulation', 'encyclopedia', 'classification', 'bibliography', 'periodicals', 'preservation', 'bookmobile', 'bookstore']
  }
];
const MAX_LEVEL = LEVELS.length;

let answer = '';
let attempts = 0;
let done = false;
let mode = 'daily';
let practiceRoundsThisVisit = 0;
let practiceLevel = 1;
let dailyLevel = 1;

function getDayId() { return window.foplGetDayId(); }

function getTodayWord() {
  const day = Number(getDayId());
  dailyLevel = (day % MAX_LEVEL) + 1;
  const pool = LEVELS[dailyLevel - 1].words;
  const spread = (day * 17 + 11) % pool.length;
  return pool[spread].toUpperCase();
}

function getPracticeWord(level) {
  const safeLevel = Math.min(MAX_LEVEL, Math.max(1, level));
  const pool = LEVELS[safeLevel - 1].words;
  const candidate = pool[Math.floor(Math.random() * pool.length)].toUpperCase();
  const daily = getTodayWord();
  if (pool.length < 2 || candidate !== daily) return candidate;
  const idx = (pool.findIndex((w) => w.toUpperCase() === candidate) + 1) % pool.length;
  return pool[idx].toUpperCase();
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
  const levelChip = document.getElementById('scramble-level-chip');
  const levelNote = document.getElementById('scramble-level-note');
  if (mode === 'daily') {
    chip.textContent = 'Daily';
    chip.classList.remove('practice');
    note.textContent = 'Daily round counts toward streak and leaderboard stats (when signed in).';
    levelChip.textContent = LEVELS[dailyLevel - 1].label;
    levelNote.textContent = `Daily difficulty rotates each day. Today: ${LEVELS[dailyLevel - 1].note}`;
    document.getElementById('scramble-date').textContent = `Daily Scramble • ${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`;
  } else {
    chip.textContent = 'Practice';
    chip.classList.add('practice');
    note.textContent = 'Practice rounds are unlimited and do not affect daily streak or leaderboard stats.';
    levelChip.textContent = `${LEVELS[practiceLevel - 1].label} / ${MAX_LEVEL}`;
    levelNote.textContent = `Practice progression: solve rounds to climb levels. Current: ${LEVELS[practiceLevel - 1].note}`;
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
      let msg = `Solved in ${attempts} attempt${attempts === 1 ? '' : 's'}!`;
      if (mode === 'practice') {
        if (practiceLevel < MAX_LEVEL) {
          practiceLevel += 1;
          msg += ` Nice work - advanced to ${LEVELS[practiceLevel - 1].label}.`;
        } else {
          msg += ' You are at max practice level.';
        }
      }
      showFeedback(msg, true);
      if (mode === 'daily') saveDayState({ status: 'won', attempts });
      disableInput();
      if (window.charScene) { window.charScene.npcRight('Letters align! Solved it!'); window.charScene.aiComment(true); }
      await finalizeResult(true);
      return;
    }

    if (attempts >= MAX_ATTEMPTS) {
      showFeedback(`Out of attempts. The answer was ${answer}.`, false);
      if (mode === 'daily') saveDayState({ status: 'lost', attempts });
      disableInput();
      if (window.charScene) { window.charScene.npcWrong('Out of tries...'); window.charScene.aiComment(false); }
      await finalizeResult(false);
      return;
    }

    const hint = answer.slice(0, Math.min(2, attempts));
    showFeedback(`Not quite. Hint: starts with ${hint}`, false);
    if (window.charScene) { const wm=["You're on the right track!","Hmm, not quite...","Rearrange those letters!"]; window.charScene.npcWrong(wm[Math.floor(Math.random()*wm.length)]); }
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
  const word = getPracticeWord(practiceLevel);
  const seed = Math.floor(Date.now() / 1000) + practiceRoundsThisVisit * 37;
  drawRound(word, seed);
  showFeedback(`Practice round started at ${LEVELS[practiceLevel - 1].label}. This round does not count toward daily stats.`, true);
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
