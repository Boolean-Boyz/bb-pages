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

  /* ── Character scene ── */
  .char-scene { margin: -24px -24px 20px; height: 200px; overflow: hidden; border-radius: 4px 4px 0 0; }
  .char-scene canvas { display: block; width: 100%; height: 200px; }
</style>

<div class="game-wrap">
  <div class="game-header">
    <div class="game-title">Book Trivia</div>
    <a class="game-btn-link" href="/puzzles" title="All Puzzles">All Games</a>
  </div>

  <div class="trivia-card">
    <div class="char-scene"><canvas id="char-canvas" height="200"></canvas></div>
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
  },
  {
    question: 'Who wrote The Great Gatsby?',
    options: ['Ernest Hemingway', 'John Steinbeck', 'F. Scott Fitzgerald', 'William Faulkner'],
    answer: 2,
    fact: 'The Great Gatsby was published in 1925 by F. Scott Fitzgerald.'
  },
  {
    question: 'What is the name of Harry Potter\'s school?',
    options: ['Beauxbatons', 'Durmstrang', 'Ilvermorny', 'Hogwarts'],
    answer: 3,
    fact: 'Harry attends Hogwarts School of Witchcraft and Wizardry.'
  },
  {
    question: 'Which author wrote Frankenstein?',
    options: ['Mary Shelley', 'Bram Stoker', 'Jane Eyre', 'Virginia Woolf'],
    answer: 0,
    fact: 'Mary Shelley published Frankenstein in 1818.'
  },
  {
    question: 'In The Chronicles of Narnia, what is the lion\'s name?',
    options: ['Simba', 'Aslan', 'Shere Khan', 'Mufasa'],
    answer: 1,
    fact: 'Aslan is the great lion of Narnia in C. S. Lewis\'s series.'
  },
  {
    question: 'Who wrote The Odyssey?',
    options: ['Sophocles', 'Homer', 'Virgil', 'Plato'],
    answer: 1,
    fact: 'The Odyssey is traditionally attributed to Homer.'
  },
  {
    question: 'Which detective appears in The Hound of the Baskervilles?',
    options: ['Hercule Poirot', 'Sam Spade', 'Sherlock Holmes', 'Philip Marlowe'],
    answer: 2,
    fact: 'The Hound of the Baskervilles is a Sherlock Holmes mystery.'
  },
  {
    question: 'Who is the author of Little Women?',
    options: ['Louisa May Alcott', 'L. M. Montgomery', 'Harper Lee', 'Edith Wharton'],
    answer: 0,
    fact: 'Louisa May Alcott wrote Little Women in 1868.'
  },
  {
    question: 'What is the surname of Elizabeth in Pride and Prejudice?',
    options: ['Darcy', 'Bennet', 'Lucas', 'Wickham'],
    answer: 1,
    fact: 'Elizabeth\'s family name is Bennet.'
  },
  {
    question: 'Which book features a pig named Wilbur?',
    options: ['Animal Farm', 'Babe', 'Charlotte\'s Web', 'Stuart Little'],
    answer: 2,
    fact: 'Wilbur is the pig in E. B. White\'s Charlotte\'s Web.'
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
      if (window.charScene) {
        const rm=['Elementary, my dear reader!','The plot thickens!','A true bibliophile!'];
        const wm=['Hmm, check the index!','Another chapter needed...','Try again, dear reader!'];
        const ms=correct?rm:wm; const m=ms[Math.floor(Math.random()*ms.length)];
        if(correct)window.charScene.npcRight(m);else window.charScene.npcWrong(m);
        window.charScene.aiComment(correct);
      }
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
