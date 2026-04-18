---
layout: fopl
title: Library Dodge — Friends of the Poway Library
permalink: /library-dodge
description: Dodge flying books and collect book facts in the Poway Library!
fopl_nav_active: puzzles
---

<style>
  body { background: #0d1b0f; margin: 0; }

  #ld-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 12px 32px;
    min-height: calc(100vh - 60px);
  }

  #ld-title {
    font-family: 'Cabin', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 0 0 12px;
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }

  #ld-canvas-wrap {
    position: relative;
    width: 100%;
    max-width: 900px;
  }

  #ld-canvas {
    display: block;
    width: 100%;
    height: auto;
    border: 3px solid #023b0f;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    cursor: pointer;
  }

  #ld-hint {
    font-family: 'Lato', sans-serif;
    color: rgba(255,255,255,0.55);
    font-size: 0.82rem;
    margin-top: 10px;
    text-align: center;
    letter-spacing: 0.04em;
  }

  /* Mobile touch buttons */
  #ld-touch-controls {
    display: none;
    gap: 12px;
    margin-top: 14px;
    width: 100%;
    max-width: 900px;
    justify-content: space-between;
    align-items: center;
  }

  @media (pointer: coarse) {
    #ld-touch-controls { display: flex; }
    #ld-hint { display: none; }
  }

  .ld-btn-group { display: flex; gap: 10px; }

  .ld-touch-btn {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.4);
    background: rgba(2,59,15,0.7);
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    touch-action: none;
  }

  .ld-touch-btn:active { background: rgba(2,59,15,0.95); }
</style>

<div id="ld-wrap">
  <h1 id="ld-title">📚 Library Dodge</h1>

  <div id="ld-canvas-wrap">
    <canvas id="ld-canvas" width="900" height="450"></canvas>
  </div>

  <p id="ld-hint">← → &nbsp;Move &nbsp;|&nbsp; Space / ↑ &nbsp;Jump &nbsp;|&nbsp; ↓ &nbsp;Duck &nbsp;|&nbsp; ★ Catch golden books for facts!</p>

  <div id="ld-touch-controls">
    <div class="ld-btn-group">
      <button class="ld-touch-btn" id="btn-left">◀</button>
      <button class="ld-touch-btn" id="btn-right">▶</button>
    </div>
    <button class="ld-touch-btn" id="btn-jump" style="width:72px;height:72px;font-size:1.8rem;">↑</button>
    <button class="ld-touch-btn" id="btn-duck">▼</button>
  </div>
</div>

<script>
(function () {
  'use strict';

  /* ─── Book facts data ────────────────────────────────────── */
  const BOOK_DATA = [
    { title: "Don Quixote (1605)",          fact: "Often called the world's first modern novel!" },
    { title: "Harry Potter (1997)",          fact: "Rejected by 12 publishers before being accepted." },
    { title: "Moby-Dick (1851)",             fact: "Sold fewer than 50 copies in Melville's lifetime." },
    { title: "1984 (1949)",                  fact: "Orwell wrote it while seriously ill with tuberculosis." },
    { title: "Frankenstein (1818)",          fact: "Mary Shelley started writing it at just 18 years old!" },
    { title: "The Odyssey (~800 BC)",        fact: "Nearly 3,000 years old — still taught in schools today." },
    { title: "Pride & Prejudice (1813)",     fact: "Jane Austen wrote the first draft at only 21 years old." },
    { title: "To Kill a Mockingbird (1960)", fact: "Harper Lee won the Pulitzer Prize for her very first novel!" },
    { title: "Alice in Wonderland (1865)",   fact: "Lewis Carroll first told the story on a boat trip with a child." },
    { title: "The Hobbit (1937)",            fact: "Tolkien wrote the first line on a blank student exam paper!" },
    { title: "Hamlet (~1600)",               fact: "Shakespeare's Hamlet is performed somewhere in the world every day." },
    { title: "Les Misérables (1862)",        fact: "Contains an 823-word sentence — one of literature's longest!" },
    { title: "The Diary of Anne Frank",      fact: "Has been translated into more than 70 languages worldwide." },
    { title: "Dune (1965)",                  fact: "The best-selling science fiction novel of all time." },
    { title: "Charlotte's Web (1952)",       fact: "E.B. White rewrote the opening chapter more than 80 times!" },
    { title: "Winnie-the-Pooh (1926)",       fact: "Inspired by a real bear named Winnie at the London Zoo." },
    { title: "The Great Gatsby (1925)",      fact: "Was not considered a success when first published in 1925." },
    { title: "The Bible",                     fact: "The best-selling book of all time — over 5 billion copies sold." },
  ];

  /* short titles for book spine labels (regular books) */
  const SPINE_TITLES = [
    'Hamlet','Dune','1984','Emma','Dracula','Ivanhoe','Ulysses',
    'Oliver Twist','Jane Eyre','Macbeth','Othello','The Iliad',
    'Beowulf','Don Quixote','Gulliver','Robinson Crusoe','Candide',
  ];

  /* ─── Assets ────────────────────────────────────────────── */
  const bgImg  = new Image();
  const sprImg = new Image();
  let loaded   = 0;

  bgImg.src  = '/FOTPL/Images/librarybg.png';
  sprImg.src = '/FOTPL/Images/charactersprite.png';
  bgImg.onload = sprImg.onload = () => { if (++loaded === 2) init(); };
  bgImg.onerror = sprImg.onerror = () => { if (++loaded === 2) init(); };

  /* ─── Canvas ────────────────────────────────────────────── */
  const canvas = document.getElementById('ld-canvas');
  const ctx    = canvas.getContext('2d');
  const W      = canvas.width;   // 900
  const H      = canvas.height;  // 450

  /* ─── Sprite sheet config ───────────────────────────────── */
  const FW = 100, FH = 100;
  const ROW = { WALK: 0, RUN: 1, SIDE: 2, ACTION: 3, DUCK: 4 };

  /* ─── World constants ───────────────────────────────────── */
  const FLOOR     = H - 72;
  const GRAVITY   = 0.58;
  const JUMP_V    = -13.5;
  const SPEED     = 5;

  const PD_W = 82, PD_H = 108;
  const PH_W = 46, PH_H = 88;
  const PH_OX = (PD_W - PH_W) / 2;
  const PH_OY = PD_H - PH_H;

  const BOOK_COLS = ['#c0392b','#2980b9','#27ae60','#e67e22','#8e44ad','#16a085','#d35400','#2c3e50'];
  const HEART     = '❤';

  /* ─── State ─────────────────────────────────────────────── */
  let state, score, hiScore, lives, tick, spawnCd, spawnInt;
  let books, particles, floaters, factPopup, goldenCd, goldenInt;
  let factsCollected;

  const keys = { left:false, right:false, up:false, down:false };
  const p    = {};

  hiScore = parseInt(localStorage.getItem('ldHi') || '0', 10);

  /* ─── Input ─────────────────────────────────────────────── */
  function mapKey(code, pressed) {
    if (code === 'ArrowLeft'  || code === 'KeyA') keys.left  = pressed;
    if (code === 'ArrowRight' || code === 'KeyD') keys.right = pressed;
    if (code === 'ArrowUp'    || code === 'KeyW' || code === 'Space') keys.up   = pressed;
    if (code === 'ArrowDown'  || code === 'KeyS') keys.down  = pressed;
  }

  document.addEventListener('keydown', e => {
    mapKey(e.code, true);
    if (['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)) e.preventDefault();
    if (state !== 'playing') beginGame();
  });
  document.addEventListener('keyup', e => mapKey(e.code, false));
  canvas.addEventListener('click', () => { if (state !== 'playing') beginGame(); });

  function bindBtn(id, key) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('touchstart', e => { e.preventDefault(); keys[key] = true;  }, { passive: false });
    el.addEventListener('touchend',   e => { e.preventDefault(); keys[key] = false; }, { passive: false });
    el.addEventListener('mousedown',  () => keys[key] = true);
    el.addEventListener('mouseup',    () => keys[key] = false);
  }
  bindBtn('btn-left',  'left');
  bindBtn('btn-right', 'right');
  bindBtn('btn-jump',  'up');
  bindBtn('btn-duck',  'down');

  /* ─── Reset ─────────────────────────────────────────────── */
  function reset() {
    Object.assign(p, {
      x: W / 2 - PD_W / 2, y: FLOOR - PD_H,
      vy: 0, onGround: true, ducking: false,
      dir: 1, animRow: ROW.WALK, animFrame: 0,
      animTick: 0, invTimer: 0,
    });
    books          = [];
    particles      = [];
    floaters       = [];
    factPopup      = null;
    score          = 0;
    lives          = 3;
    tick           = 0;
    spawnCd        = 0;
    spawnInt       = 130;
    goldenCd       = randInt(400, 750);  // first golden book in ~7–12 s
    goldenInt      = randInt(600, 1000); // subsequent interval
    factsCollected = 0;
  }

  function beginGame() { reset(); state = 'playing'; }

  /* ─── Helpers ───────────────────────────────────────────── */
  function randInt(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function randItem(arr) { return arr[randInt(0, arr.length - 1)]; }

  /* text wrap helper */
  function wrapText(text, x, y, maxW, lineH) {
    const words = text.split(' ');
    let line = '';
    let ly   = y;
    for (const w of words) {
      const test = line ? line + ' ' + w : w;
      if (ctx.measureText(test).width > maxW && line) {
        ctx.fillText(line, x, ly);
        line = w; ly += lineH;
      } else { line = test; }
    }
    if (line) ctx.fillText(line, x, ly);
  }

  /* ─── Spawn regular book ─────────────────────────────────── */
  function spawnBook() {
    const fromLeft = Math.random() < 0.5;
    const bw   = randInt(48, 72);
    const bh   = randInt(62, 82);
    const speed = 2.8 + Math.random() * 1.8 + score / 4000;
    books.push({
      x:          fromLeft ? -bw - 4 : W + 4,
      y:          randInt(50, FLOOR - bh - 10),
      w:          bw, h: bh,
      vx:         fromLeft ? speed : -speed,
      col:        randItem(BOOK_COLS),
      rot:        (Math.random() - 0.5) * 0.25,
      isGolden:   false,
      spineLabel: randItem(SPINE_TITLES),
    });
  }

  /* ─── Spawn golden (collectible) book ───────────────────── */
  function spawnGoldenBook() {
    const fromLeft = Math.random() < 0.5;
    const bw = 66, bh = 92;
    const speed = 1.4 + Math.random() * 0.8;
    const dataIdx = randInt(0, BOOK_DATA.length - 1);
    books.push({
      x:         fromLeft ? -bw - 4 : W + 4,
      y:         randInt(60, FLOOR - bh - 20),
      w:         bw, h: bh,
      vx:        fromLeft ? speed : -speed,
      col:       '#ffd700',
      rot:       0,
      isGolden:  true,
      dataIdx,
      glowPhase: Math.random() * Math.PI * 2,
    });
  }

  /* ─── Hit / collect ─────────────────────────────────────── */
  function hitPlayer() {
    if (p.invTimer > 0) return;
    lives--;
    p.invTimer = 110;
    burst(p.x + PD_W / 2, p.y + PD_H / 2, '#ff4444', 14);
    if (lives <= 0) {
      state = 'over';
      if (score > hiScore) { hiScore = score; localStorage.setItem('ldHi', hiScore); }
    }
  }

  function collectGoldenBook(b) {
    score += 500;
    factsCollected++;
    burst(b.x + b.w / 2, b.y + b.h / 2, '#ffd700', 22);
    floaters.push({ x: b.x + b.w / 2, y: b.y - 10, text: '+500 📚', timer: 80, maxTimer: 80 });
    const d = BOOK_DATA[b.dataIdx];
    factPopup = { title: d.title, fact: d.fact, timer: 280, maxTimer: 280 };
  }

  /* ─── Burst particles ────────────────────────────────────── */
  function burst(cx, cy, col, n) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 2 + Math.random() * 5;
      particles.push({
        x: cx, y: cy,
        vx: Math.cos(a) * s, vy: Math.sin(a) * s - 2,
        life: 35 + randInt(0, 20), maxLife: 55,
        col, r: 2 + Math.random() * 3,
      });
    }
  }

  /* ─── Update ────────────────────────────────────────────── */
  function update() {
    if (state !== 'playing') return;

    tick++;
    score++;

    if (tick % 480 === 0 && spawnInt > 50) spawnInt -= 6;

    // Player input
    p.ducking    = keys.down;
    const effH   = p.ducking ? PD_H * 0.58 : PD_H;
    const floorY = FLOOR - effH;

    if (keys.left)  { p.x -= SPEED; p.dir = -1; }
    if (keys.right) { p.x += SPEED; p.dir =  1; }
    if (keys.up && p.onGround) { p.vy = JUMP_V; p.onGround = false; }

    p.x = Math.max(0, Math.min(W - PD_W, p.x));
    p.vy += GRAVITY;
    p.y  += p.vy;
    if (p.y >= floorY) { p.y = floorY; p.vy = 0; p.onGround = true; }

    // Animation
    const moving   = keys.left || keys.right;
    const animRate = moving ? 6 : 14;
    p.animTick++;
    if (p.animTick >= animRate) {
      p.animTick = 0;
      if (p.ducking)        { p.animRow = ROW.DUCK; p.animFrame = (p.animFrame + 1) % 4; }
      else if (!p.onGround) { p.animRow = ROW.RUN;  p.animFrame = 2; }
      else if (moving)      { p.animRow = ROW.WALK; p.animFrame = (p.animFrame + 1) % 5; }
      else                  { p.animRow = ROW.WALK; p.animFrame = 0; }
    }

    if (p.invTimer > 0) p.invTimer--;

    // Spawn regular books
    spawnCd++;
    if (spawnCd >= spawnInt) {
      spawnCd = 0;
      spawnBook();
      if (score > 2500 && Math.random() < 0.38) spawnBook();
      if (score > 6000 && Math.random() < 0.25) spawnBook();
    }

    // Spawn golden books on their own timer
    goldenCd--;
    if (goldenCd <= 0) {
      goldenCd = randInt(600, 1100);
      spawnGoldenBook();
    }

    // Move books + update glow phase
    books = books.filter(b => {
      b.x += b.vx;
      if (b.isGolden) b.glowPhase += 0.08;
      return b.x + b.w > -80 && b.x < W + 80;
    });

    // Collision
    const effHB = p.ducking ? PH_H * 0.58 : PH_H;
    const hx = p.x + PH_OX, hy = p.y + PD_H - effHB;
    const hw = PH_W,         hh = effHB;

    for (let i = 0; i < books.length; i++) {
      const b = books[i];
      if (hx < b.x + b.w && hx + hw > b.x && hy < b.y + b.h && hy + hh > b.y) {
        if (b.isGolden) {
          collectGoldenBook(b);
          books.splice(i, 1);
        } else {
          hitPlayer();
        }
        break;
      }
    }

    // Particles
    particles = particles.filter(pt => {
      pt.x += pt.vx; pt.y += pt.vy; pt.vy += 0.25;
      return --pt.life > 0;
    });

    // Floaters
    floaters = floaters.filter(f => { f.y -= 1.1; return --f.timer > 0; });

    // Fact popup countdown
    if (factPopup && factPopup.timer > 0) factPopup.timer--;
  }

  /* ─── Draw helpers ──────────────────────────────────────── */
  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  }

  /* ─── Draw world ────────────────────────────────────────── */
  function drawBG() {
    if (bgImg.complete && bgImg.naturalWidth) {
      ctx.drawImage(bgImg, 0, 0, W, H);
    } else {
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, '#1b0a00'); grad.addColorStop(1, '#3d1a00');
      ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
    }
    const floorGrad = ctx.createLinearGradient(0, FLOOR - 20, 0, H);
    floorGrad.addColorStop(0, 'rgba(0,0,0,0)');
    floorGrad.addColorStop(1, 'rgba(0,0,0,0.45)');
    ctx.fillStyle = floorGrad;
    ctx.fillRect(0, FLOOR - 20, W, H - FLOOR + 20);
  }

  function drawBooks() {
    for (const b of books) {
      ctx.save();
      ctx.translate(b.x + b.w / 2, b.y + b.h / 2);
      ctx.rotate(b.rot);

      if (b.isGolden) {
        // Glowing gold collectible book
        const glow = 10 + Math.sin(b.glowPhase) * 7;
        ctx.shadowColor = '#ffd700';
        ctx.shadowBlur  = glow;

        ctx.fillStyle = '#ffd700';
        ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);

        ctx.shadowBlur = 0;

        // Darker gold spine
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(-b.w / 2, -b.h / 2, 9, b.h);

        // Pages edge
        ctx.fillStyle = '#fffde7';
        ctx.fillRect(b.w / 2 - 6, -b.h / 2, 6, b.h);

        // Star icon
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.font = `bold ${Math.round(b.h * 0.32)}px Cabin, sans-serif`;
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('★', 0, -b.h * 0.16);

        // "FACT" label
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.font = `bold ${Math.round(b.w * 0.17)}px Cabin, sans-serif`;
        ctx.fillText('CATCH!', 0, b.h * 0.28);

        ctx.textAlign    = 'left';
        ctx.textBaseline = 'alphabetic';

        // Subtle border
        ctx.strokeStyle = 'rgba(255,200,0,0.7)';
        ctx.lineWidth   = 1.5;
        ctx.strokeRect(-b.w / 2, -b.h / 2, b.w, b.h);

      } else {
        // Regular flying book
        ctx.fillStyle = b.col;
        ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);

        // Spine
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.fillRect(-b.w / 2, -b.h / 2, 9, b.h);
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fillRect(-b.w / 2 + 1, -b.h / 2, 3, b.h);

        // Pages edge
        ctx.fillStyle = '#f2ead8';
        ctx.fillRect(b.w / 2 - 6, -b.h / 2, 6, b.h);

        // Title on cover (small white text)
        ctx.save();
        ctx.fillStyle = 'rgba(255,255,255,0.82)';
        const fs = Math.max(7, Math.round(b.w * 0.13));
        ctx.font = `bold ${fs}px Cabin, sans-serif`;
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        // Clip to book body
        ctx.beginPath();
        ctx.rect(-b.w / 2 + 10, -b.h / 2 + 4, b.w - 22, b.h - 8);
        ctx.clip();
        ctx.fillText(b.spineLabel, 0, 0);
        ctx.restore();

        // Border
        ctx.strokeStyle = 'rgba(0,0,0,0.35)';
        ctx.lineWidth   = 1;
        ctx.strokeRect(-b.w / 2, -b.h / 2, b.w, b.h);
      }

      ctx.restore();
    }
  }

  function drawPlayer() {
    if (p.invTimer > 0 && Math.floor(p.invTimer / 5) % 2 === 0) return;
    const effH  = p.ducking ? PD_H * 0.58 : PD_H;
    const drawY = p.y + (PD_H - effH);
    ctx.save();
    if (p.dir === -1) {
      ctx.translate(p.x + PD_W / 2, 0); ctx.scale(-1, 1); ctx.translate(-PD_W / 2, 0);
    } else { ctx.translate(p.x, 0); }
    if (sprImg.complete && sprImg.naturalWidth) {
      ctx.drawImage(sprImg, p.animFrame * FW, p.animRow * FH, FW, FH, 0, drawY, PD_W, effH);
    } else {
      ctx.fillStyle = '#4a90e2'; ctx.fillRect(0, drawY, PD_W, effH);
    }
    ctx.restore();
  }

  function drawParticles() {
    particles.forEach(pt => {
      ctx.globalAlpha = Math.max(0, pt.life / pt.maxLife);
      ctx.fillStyle   = pt.col;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function drawFloaters() {
    floaters.forEach(f => {
      ctx.globalAlpha = Math.min(1, f.timer / 25);
      ctx.fillStyle   = '#ffd700';
      ctx.font        = 'bold 20px Cabin, sans-serif';
      ctx.textAlign   = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(f.text, f.x, f.y);
    });
    ctx.globalAlpha  = 1;
    ctx.textAlign    = 'left';
    ctx.textBaseline = 'alphabetic';
  }

  function drawHUD() {
    // Score
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    roundRect(12, 12, 130, 34, 6); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = 'bold 15px Cabin, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Score: ${score}`, 22, 29);

    // Hi-score
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    roundRect(W - 142, 12, 130, 34, 6); ctx.fill();
    ctx.fillStyle = '#ffd700'; ctx.font = 'bold 15px Cabin, sans-serif';
    ctx.fillText(`Best: ${hiScore}`, W - 132, 29);

    // Lives
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    roundRect(W / 2 - 68, 12, 136, 34, 6); ctx.fill();
    ctx.font = '22px sans-serif'; ctx.textAlign = 'center';
    for (let i = 0; i < 3; i++) {
      ctx.globalAlpha = i < lives ? 1 : 0.2;
      ctx.fillText(HEART, W / 2 - 30 + i * 34, 33);
    }
    ctx.globalAlpha = 1; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';

    // Facts collected counter (top right area, below hi-score)
    if (factsCollected > 0) {
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      roundRect(W - 142, 52, 130, 26, 6); ctx.fill();
      ctx.fillStyle = '#ffd700'; ctx.font = 'bold 12px Cabin, sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillText(`★ Facts: ${factsCollected}`, W - 132, 65);
      ctx.textBaseline = 'alphabetic';
    }
  }

  /* ─── Fact popup banner ──────────────────────────────────── */
  function drawFactPopup() {
    if (!factPopup || factPopup.timer <= 0) return;

    const t = factPopup.timer;
    const m = factPopup.maxTimer;
    // Fade in (first 20 frames) and fade out (last 40 frames)
    const alpha = Math.min(1, Math.min(t / 40, (m - t) / 20)) * 0.97;

    const panelH = 78;
    const panelY = H - panelH - 10;

    ctx.globalAlpha = alpha;

    // Panel background
    ctx.fillStyle = '#011a06';
    roundRect(10, panelY, W - 20, panelH, 10);
    ctx.fill();

    // Gold border
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth   = 2;
    roundRect(10, panelY, W - 20, panelH, 10);
    ctx.stroke();

    // Book title in gold
    ctx.fillStyle    = '#ffd700';
    ctx.font         = 'bold 14px Cabin, sans-serif';
    ctx.textAlign    = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(`📚  ${factPopup.title}`, 26, panelY + 24);

    // Fact text in white
    ctx.fillStyle = '#ffffff';
    ctx.font      = '13px Lato, sans-serif';
    wrapText(factPopup.fact, 26, panelY + 52, W - 52, 16);

    ctx.globalAlpha  = 1;
    ctx.textAlign    = 'left';
    ctx.textBaseline = 'alphabetic';
  }

  /* ─── Overlay screens ───────────────────────────────────── */
  function drawStart() {
    ctx.fillStyle = 'rgba(0,0,0,0.62)';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = 'rgba(2,40,10,0.93)';
    roundRect(W / 2 - 250, H / 2 - 170, 500, 340, 14); ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1.5;
    roundRect(W / 2 - 250, H / 2 - 170, 500, 340, 14); ctx.stroke();

    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';

    ctx.fillStyle = '#fff'; ctx.font = 'bold 34px Cabin, sans-serif';
    ctx.fillText('📚  Library Dodge', W / 2, H / 2 - 116);

    ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.font = '15px Lato, sans-serif';
    ctx.fillText('Dodge the flying books to survive!', W / 2, H / 2 - 76);

    // Golden book callout
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    roundRect(W / 2 - 190, H / 2 - 58, 380, 46, 8); ctx.fill();
    ctx.fillStyle = '#ffd700'; ctx.font = 'bold 14px Cabin, sans-serif';
    ctx.fillText('★  Catch GOLDEN books for cool book facts!', W / 2, H / 2 - 42);
    ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.font = '12px Lato, sans-serif';
    ctx.fillText('Golden books are slower — run into them to collect!', W / 2, H / 2 - 24);

    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '13px Lato, sans-serif';
    ctx.fillText('← →  Move     Space / ↑  Jump     ↓  Duck', W / 2, H / 2 + 8);

    // Start button
    ctx.fillStyle = '#fff';
    roundRect(W / 2 - 110, H / 2 + 30, 220, 52, 26); ctx.fill();
    ctx.fillStyle = '#023b0f'; ctx.font = 'bold 18px Cabin, sans-serif';
    ctx.fillText('▶  START GAME', W / 2, H / 2 + 56);

    if (hiScore > 0) {
      ctx.fillStyle = '#ffd700'; ctx.font = '14px Lato, sans-serif';
      ctx.fillText(`Best score: ${hiScore}`, W / 2, H / 2 + 106);
    }

    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  }

  function drawOver() {
    ctx.fillStyle = 'rgba(0,0,0,0.65)'; ctx.fillRect(0, 0, W, H);

    const newHi = score >= hiScore && score > 0;
    ctx.fillStyle = newHi ? 'rgba(80,40,0,0.94)' : 'rgba(90,5,5,0.94)';
    roundRect(W / 2 - 210, H / 2 - 155, 420, 310, 14); ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1.5;
    roundRect(W / 2 - 210, H / 2 - 155, 420, 310, 14); ctx.stroke();

    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';

    ctx.fillStyle = '#fff'; ctx.font = 'bold 38px Cabin, sans-serif';
    ctx.fillText('Game Over!', W / 2, H / 2 - 100);

    ctx.font = 'bold 24px Lato, sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.fillText(`Score: ${score}`, W / 2, H / 2 - 58);

    if (newHi) {
      ctx.fillStyle = '#ffd700'; ctx.font = 'bold 17px Cabin, sans-serif';
      ctx.fillText('🏆  New High Score!', W / 2, H / 2 - 20);
    } else if (hiScore > 0) {
      ctx.fillStyle = '#ffd700'; ctx.font = '15px Lato, sans-serif';
      ctx.fillText(`Best: ${hiScore}`, W / 2, H / 2 - 20);
    }

    // Facts collected summary
    ctx.fillStyle = 'rgba(255,215,0,0.9)'; ctx.font = 'bold 15px Cabin, sans-serif';
    ctx.fillText(`★ Book Facts Collected: ${factsCollected}`, W / 2, H / 2 + 14);

    // Restart button
    ctx.fillStyle = '#fff';
    roundRect(W / 2 - 100, H / 2 + 50, 200, 50, 25); ctx.fill();
    ctx.fillStyle = newHi ? '#7a4000' : '#6b0000'; ctx.font = 'bold 17px Cabin, sans-serif';
    ctx.fillText('▶  PLAY AGAIN', W / 2, H / 2 + 75);

    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  }

  /* ─── Main draw ─────────────────────────────────────────── */
  function draw() {
    drawBG();
    if (state === 'start') { drawStart(); return; }
    drawBooks();
    drawPlayer();
    drawParticles();
    drawFloaters();
    drawHUD();
    drawFactPopup();
    if (state === 'over') drawOver();
  }

  /* ─── Loop ──────────────────────────────────────────────── */
  function loop() { update(); draw(); requestAnimationFrame(loop); }
  function init() { state = 'start'; reset(); loop(); }

})();
</script>
