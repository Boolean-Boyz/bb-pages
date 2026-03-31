---
layout: fopl
title: Library Dodge — Friends of the Poway Library
permalink: /library-dodge
description: Dodge flying books in the Poway Library!
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

  <p id="ld-hint">← → &nbsp;Move &nbsp;|&nbsp; Space / ↑ &nbsp;Jump &nbsp;|&nbsp; ↓ &nbsp;Duck</p>

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
  // 500×500 sheet, 5 cols × 5 rows → 100×100 per frame
  const FW = 100, FH = 100;

  // Which row handles which animation
  const ROW = { WALK: 0, RUN: 1, SIDE: 2, ACTION: 3, DUCK: 4 };

  /* ─── World constants ───────────────────────────────────── */
  const FLOOR     = H - 72;   // y of ground surface
  const GRAVITY   = 0.58;
  const JUMP_V    = -13.5;
  const SPEED     = 5;

  // Player visual size (drawn on canvas)
  const PD_W = 82, PD_H = 108;
  // Hitbox (tighter than drawn sprite)
  const PH_W = 46, PH_H = 88;
  const PH_OX = (PD_W - PH_W) / 2; // hitbox x offset from draw x
  const PH_OY = PD_H - PH_H;       // hitbox y offset (align bottom)

  const BOOK_COLS = ['#c0392b','#2980b9','#27ae60','#e67e22','#8e44ad','#16a085','#d35400','#2c3e50'];
  const HEART     = '❤';

  /* ─── State ─────────────────────────────────────────────── */
  let state, score, hiScore, lives, tick, spawnCd, spawnInt, books, particles;

  const keys = { left:false, right:false, up:false, down:false };
  const p    = {};   // player object, initialised in reset()

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

  // Touch buttons
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
      x: W / 2 - PD_W / 2,
      y: FLOOR - PD_H,
      vy: 0,
      onGround: true,
      ducking: false,
      dir: 1,
      animRow: ROW.WALK,
      animFrame: 0,
      animTick: 0,
      invTimer: 0,
    });
    books      = [];
    particles  = [];
    score      = 0;
    lives      = 3;
    tick       = 0;
    spawnCd    = 0;
    spawnInt   = 130;
  }

  function beginGame() {
    reset();
    state = 'playing';
  }

  /* ─── Helpers ───────────────────────────────────────────── */
  function randInt(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function randItem(arr) { return arr[randInt(0, arr.length - 1)]; }

  function spawnBook() {
    const fromLeft = Math.random() < 0.5;
    const bw   = randInt(48, 72);
    const bh   = randInt(62, 82);
    const minY = 50;
    const maxY = FLOOR - bh - 10;
    const speed = 2.8 + Math.random() * 1.8 + score / 4000;
    books.push({
      x:     fromLeft ? -bw - 4 : W + 4,
      y:     randInt(minY, maxY),
      w:     bw,
      h:     bh,
      vx:    fromLeft ? speed : -speed,
      col:   randItem(BOOK_COLS),
      rot:   (Math.random() - 0.5) * 0.25,
    });
  }

  function hitPlayer() {
    if (p.invTimer > 0) return;
    lives--;
    p.invTimer = 110;
    burst(p.x + PD_W / 2, p.y + PD_H / 2, '#ff4444', 14);
    if (lives <= 0) {
      state = 'over';
      if (score > hiScore) {
        hiScore = score;
        localStorage.setItem('ldHi', hiScore);
      }
    }
  }

  function burst(cx, cy, col, n) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = 2 + Math.random() * 5;
      particles.push({
        x: cx, y: cy,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s - 2,
        life: 35 + randInt(0, 20),
        maxLife: 55,
        col, r: 2 + Math.random() * 3,
      });
    }
  }

  /* ─── Update ────────────────────────────────────────────── */
  function update() {
    if (state !== 'playing') return;

    tick++;
    score++;

    // Ramp difficulty every 8 seconds
    if (tick % 480 === 0 && spawnInt > 50) spawnInt -= 6;

    // ── Player input ──────────────────────────────────────
    p.ducking = keys.down;
    const effH   = p.ducking ? PD_H * 0.58 : PD_H;
    const floorY = FLOOR - effH;

    if (keys.left)  { p.x -= SPEED; p.dir = -1; }
    if (keys.right) { p.x += SPEED; p.dir =  1; }
    if (keys.up && p.onGround) { p.vy = JUMP_V; p.onGround = false; }

    p.x = Math.max(0, Math.min(W - PD_W, p.x));

    p.vy += GRAVITY;
    p.y  += p.vy;
    if (p.y >= floorY) { p.y = floorY; p.vy = 0; p.onGround = true; }

    // ── Animation ─────────────────────────────────────────
    const moving   = keys.left || keys.right;
    const animRate = moving ? 6 : 14;
    p.animTick++;
    if (p.animTick >= animRate) {
      p.animTick = 0;
      if (p.ducking) {
        p.animRow   = ROW.DUCK;
        p.animFrame = (p.animFrame + 1) % 4;
      } else if (!p.onGround) {
        p.animRow   = ROW.RUN;
        p.animFrame = 2;            // frozen mid-air frame
      } else if (moving) {
        p.animRow   = ROW.WALK;
        p.animFrame = (p.animFrame + 1) % 5;
      } else {
        p.animRow   = ROW.WALK;
        p.animFrame = 0;            // idle
      }
    }

    // ── Invincibility countdown ──────────────────────────
    if (p.invTimer > 0) p.invTimer--;

    // ── Spawn books ───────────────────────────────────────
    spawnCd++;
    if (spawnCd >= spawnInt) {
      spawnCd = 0;
      spawnBook();
      if (score > 2500 && Math.random() < 0.38) spawnBook();
      if (score > 6000 && Math.random() < 0.25) spawnBook();
    }

    // ── Move books ────────────────────────────────────────
    books = books.filter(b => {
      b.x += b.vx;
      return b.x + b.w > -60 && b.x < W + 60;
    });

    // ── Collision ─────────────────────────────────────────
    const effHB  = p.ducking ? PH_H * 0.58 : PH_H;
    const hx = p.x + PH_OX, hy = p.y + PD_H - effHB;
    const hw = PH_W,         hh = effHB;

    for (const b of books) {
      if (hx < b.x + b.w && hx + hw > b.x &&
          hy < b.y + b.h && hy + hh > b.y) {
        hitPlayer();
        break;
      }
    }

    // ── Particles ─────────────────────────────────────────
    particles = particles.filter(pt => {
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.vy += 0.25;
      return --pt.life > 0;
    });
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

  function pill(txt, x, y, w, h, bg, fg, fontSize) {
    ctx.fillStyle = bg;
    roundRect(x, y, w, h, h / 2);
    ctx.fill();
    ctx.fillStyle = fg;
    ctx.font = `bold ${fontSize}px Cabin, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(txt, x + w / 2, y + h / 2);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
  }

  /* ─── Draw world ────────────────────────────────────────── */
  function drawBG() {
    if (bgImg.complete && bgImg.naturalWidth) {
      ctx.drawImage(bgImg, 0, 0, W, H);
    } else {
      // Fallback gradient if image fails
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, '#1b0a00');
      grad.addColorStop(1, '#3d1a00');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }
    // Subtle floor shadow strip
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

      // Book body
      ctx.fillStyle = b.col;
      ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);

      // Spine (left edge)
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.fillRect(-b.w / 2, -b.h / 2, 9, b.h);
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fillRect(-b.w / 2 + 1, -b.h / 2, 3, b.h);

      // Pages (right edge)
      ctx.fillStyle = '#f2ead8';
      ctx.fillRect(b.w / 2 - 6, -b.h / 2, 6, b.h);

      // Title lines
      ctx.fillStyle = 'rgba(255,255,255,0.45)';
      const lx = -b.w / 2 + 14, lw = b.w - 26;
      ctx.fillRect(lx, -b.h * 0.28, lw, 4);
      ctx.fillRect(lx,  b.h * 0.10, lw, 3);
      ctx.fillRect(lx,  b.h * 0.25, lw * 0.65, 3);

      // Subtle border
      ctx.strokeStyle = 'rgba(0,0,0,0.35)';
      ctx.lineWidth = 1;
      ctx.strokeRect(-b.w / 2, -b.h / 2, b.w, b.h);

      ctx.restore();
    }
  }

  function drawPlayer() {
    // Flicker during invincibility
    if (p.invTimer > 0 && Math.floor(p.invTimer / 5) % 2 === 0) return;

    const effH  = p.ducking ? PD_H * 0.58 : PD_H;
    const drawY = p.y + (PD_H - effH);

    ctx.save();

    if (p.dir === -1) {
      // Flip horizontally around player center
      ctx.translate(p.x + PD_W / 2, 0);
      ctx.scale(-1, 1);
      ctx.translate(-PD_W / 2, 0);
    } else {
      ctx.translate(p.x, 0);
    }

    if (sprImg.complete && sprImg.naturalWidth) {
      ctx.drawImage(
        sprImg,
        p.animFrame * FW,  // source x
        p.animRow   * FH,  // source y
        FW, FH,            // source w/h (one frame)
        0,                 // dest x (already translated)
        drawY,             // dest y
        PD_W,              // dest w
        effH,              // dest h
      );
    } else {
      // Fallback rectangle if sprite fails to load
      ctx.fillStyle = '#4a90e2';
      ctx.fillRect(0, drawY, PD_W, effH);
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

  function drawHUD() {
    // Score badge (top left)
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    roundRect(12, 12, 130, 34, 6);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 15px Cabin, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Score: ${score}`, 22, 29);

    // Hi-score badge (top right)
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    roundRect(W - 142, 12, 130, 34, 6);
    ctx.fill();
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 15px Cabin, sans-serif';
    ctx.fillText(`Best: ${hiScore}`, W - 132, 29);

    // Lives (top center)
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    roundRect(W / 2 - 68, 12, 136, 34, 6);
    ctx.fill();
    ctx.font = '22px sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i < 3; i++) {
      ctx.globalAlpha = i < lives ? 1 : 0.2;
      ctx.fillText(HEART, W / 2 - 30 + i * 34, 33);
    }
    ctx.globalAlpha  = 1;
    ctx.textAlign    = 'left';
    ctx.textBaseline = 'alphabetic';
  }

  /* ─── Overlay screens ───────────────────────────────────── */
  function drawStart() {
    ctx.fillStyle = 'rgba(0,0,0,0.62)';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = 'rgba(2,40,10,0.93)';
    roundRect(W / 2 - 230, H / 2 - 155, 460, 310, 14);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth   = 1.5;
    roundRect(W / 2 - 230, H / 2 - 155, 460, 310, 14);
    ctx.stroke();

    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = '#fff';
    ctx.font      = 'bold 34px Cabin, sans-serif';
    ctx.fillText('📚  Library Dodge', W / 2, H / 2 - 100);

    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.font      = '16px Lato, sans-serif';
    ctx.fillText('Dodge the flying books to survive!', W / 2, H / 2 - 58);

    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.font      = '13px Lato, sans-serif';
    ctx.fillText('← →  Move     Space / ↑  Jump     ↓  Duck', W / 2, H / 2 - 20);

    // Start button
    ctx.fillStyle = '#fff';
    roundRect(W / 2 - 110, H / 2 + 12, 220, 52, 26);
    ctx.fill();
    ctx.fillStyle = '#023b0f';
    ctx.font      = 'bold 18px Cabin, sans-serif';
    ctx.fillText('▶  START GAME', W / 2, H / 2 + 38);

    if (hiScore > 0) {
      ctx.fillStyle = '#ffd700';
      ctx.font      = '14px Lato, sans-serif';
      ctx.fillText(`Best score: ${hiScore}`, W / 2, H / 2 + 88);
    }

    ctx.textAlign    = 'left';
    ctx.textBaseline = 'alphabetic';
  }

  function drawOver() {
    ctx.fillStyle = 'rgba(0,0,0,0.65)';
    ctx.fillRect(0, 0, W, H);

    const newHi = score >= hiScore && score > 0;
    ctx.fillStyle = newHi ? 'rgba(80,40,0,0.94)' : 'rgba(90,5,5,0.94)';
    roundRect(W / 2 - 210, H / 2 - 140, 420, 280, 14);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth   = 1.5;
    roundRect(W / 2 - 210, H / 2 - 140, 420, 280, 14);
    ctx.stroke();

    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = '#fff';
    ctx.font      = 'bold 38px Cabin, sans-serif';
    ctx.fillText('Game Over!', W / 2, H / 2 - 85);

    ctx.font      = 'bold 24px Lato, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.fillText(`Score: ${score}`, W / 2, H / 2 - 38);

    if (newHi) {
      ctx.fillStyle = '#ffd700';
      ctx.font      = 'bold 17px Cabin, sans-serif';
      ctx.fillText('🏆  New High Score!', W / 2, H / 2 + 3);
    } else if (hiScore > 0) {
      ctx.fillStyle = '#ffd700';
      ctx.font      = '15px Lato, sans-serif';
      ctx.fillText(`Best: ${hiScore}`, W / 2, H / 2 + 3);
    }

    // Restart button
    ctx.fillStyle = '#fff';
    roundRect(W / 2 - 100, H / 2 + 40, 200, 50, 25);
    ctx.fill();
    ctx.fillStyle = newHi ? '#7a4000' : '#6b0000';
    ctx.font      = 'bold 17px Cabin, sans-serif';
    ctx.fillText('▶  PLAY AGAIN', W / 2, H / 2 + 65);

    ctx.textAlign    = 'left';
    ctx.textBaseline = 'alphabetic';
  }

  /* ─── Main draw ─────────────────────────────────────────── */
  function draw() {
    drawBG();
    if (state === 'start') { drawStart(); return; }
    drawBooks();
    drawPlayer();
    drawParticles();
    drawHUD();
    if (state === 'over') drawOver();
  }

  /* ─── Loop ──────────────────────────────────────────────── */
  function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
  }

  function init() {
    state = 'start';
    reset();
    loop();
  }

})();
</script>
