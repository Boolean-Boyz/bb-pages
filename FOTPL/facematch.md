---
layout: fopl
title: Famous Face Match — Friends of the Poway Library
permalink: /face-match
description: Scan your face and discover which famous person you look like — then find their book at the Poway Library!
fopl_nav_active: puzzles
---

<style>
  body { background: #0a0f0a; }

  .fm-page {
    max-width: 680px;
    margin: 0 auto;
    padding: 48px 24px 64px;
    text-align: center;
  }

  .fm-kicker {
    font-family: 'Cabin', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: rgba(212,168,83,0.7);
    margin-bottom: 12px;
  }

  .fm-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 2.4rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 10px;
    border: none;
    text-transform: none;
    letter-spacing: -0.01em;
  }

  .fm-subtitle {
    font-family: 'Lato', sans-serif;
    font-size: 0.95rem;
    color: rgba(255,255,255,0.45);
    margin: 0 0 40px;
    line-height: 1.7;
  }

  /* Camera area */
  .fm-camera-wrap {
    position: relative;
    width: 100%;
    max-width: 420px;
    margin: 0 auto 28px;
    border-radius: 20px;
    overflow: hidden;
    background: #111;
    aspect-ratio: 4/3;
    border: 1px solid rgba(255,255,255,0.08);
  }

  #fm-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scaleX(-1); /* mirror */
  }

  #fm-canvas-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .fm-no-camera {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: rgba(255,255,255,0.35);
    font-family: 'Cabin', sans-serif;
    font-size: 0.85rem;
  }

  .fm-no-camera svg { opacity: 0.3; }

  /* Scan button */
  .fm-scan-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 36px;
    background: #d4a853;
    color: #1a1200;
    border: none;
    border-radius: 32px;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    margin-bottom: 12px;
  }
  .fm-scan-btn:hover:not(:disabled) {
    background: #e0bd70;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(212,168,83,0.25);
  }
  .fm-scan-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

  .fm-retry-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    background: transparent;
    color: rgba(255,255,255,0.55);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 24px;
    font-family: 'Cabin', sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, color 0.2s;
    margin-top: 8px;
  }
  .fm-retry-btn:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.4); color: #fff; }

  /* Status text */
  .fm-status {
    font-family: 'Cabin', sans-serif;
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(212,168,83,0.6);
    min-height: 1.4em;
    margin-bottom: 8px;
    transition: opacity 0.3s;
  }

  /* Result modal */
  .fm-result-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.72);
    z-index: 1000;
    align-items: center;
    justify-content: center;
    padding: 20px;
    backdrop-filter: blur(4px);
  }
  .fm-result-overlay.show { display: flex; }

  .fm-result {
    background: #0f1a12;
    border: 1px solid rgba(212,168,83,0.25);
    border-radius: 20px;
    padding: 32px 28px;
    text-align: left;
    max-width: 480px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: fm-fadein 0.5s cubic-bezier(0.16,1,0.3,1) both;
  }

  @keyframes fm-fadein {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .fm-result-header {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 20px;
  }

  .fm-match-avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(212,168,83,0.12);
    border: 2px solid rgba(212,168,83,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    flex-shrink: 0;
  }

  .fm-match-name {
    font-family: 'Libre Baskerville', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 4px;
    border: none;
    text-transform: none;
  }

  .fm-match-pct {
    font-family: 'Cabin', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #d4a853;
  }

  .fm-match-bar-wrap {
    height: 4px;
    background: rgba(255,255,255,0.08);
    border-radius: 2px;
    margin: 8px 0 0;
    overflow: hidden;
    width: 140px;
  }
  .fm-match-bar {
    height: 100%;
    background: linear-gradient(90deg, #d4a853, #e8c97a);
    border-radius: 2px;
    width: 0;
    transition: width 1.2s cubic-bezier(0.22,1,0.36,1);
  }

  .fm-divider {
    height: 1px;
    background: rgba(255,255,255,0.07);
    margin: 20px 0;
  }

  .fm-section-label {
    font-family: 'Cabin', sans-serif;
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: rgba(212,168,83,0.5);
    margin-bottom: 8px;
  }

  .fm-reason {
    font-family: 'Lato', sans-serif;
    font-size: 0.88rem;
    color: rgba(255,255,255,0.55);
    line-height: 1.7;
    margin: 0 0 16px;
    font-style: italic;
  }

  .fm-fact {
    font-family: 'Lato', sans-serif;
    font-size: 0.92rem;
    color: rgba(255,255,255,0.75);
    line-height: 1.7;
    margin: 0 0 20px;
  }

  .fm-book {
    display: flex;
    align-items: center;
    gap: 14px;
    background: rgba(212,168,83,0.07);
    border: 1px solid rgba(212,168,83,0.15);
    border-radius: 12px;
    padding: 14px 16px;
  }

  .fm-book-icon {
    font-size: 1.8rem;
    flex-shrink: 0;
  }

  .fm-book-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 0.88rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 3px;
  }

  .fm-book-author {
    font-family: 'Lato', sans-serif;
    font-size: 0.78rem;
    color: rgba(255,255,255,0.45);
    margin: 0;
  }

  .fm-result-close {
    position: absolute;
    top: 14px; right: 16px;
    background: none; border: none; cursor: pointer;
    color: rgba(255,255,255,0.4); font-size: 1.1rem; line-height: 1;
    transition: color 0.2s;
  }
  .fm-result-close:hover { color: #fff; }

  .fm-result-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  .fm-catalog-link {
    display: inline-block;
    padding: 10px 22px;
    background: #023b0f;
    color: #fff;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.2s;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .fm-catalog-link:hover { background: #045214; }

  .fm-scan-again-btn {
    display: inline-block;
    padding: 10px 22px;
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.7);
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.12);
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }
  .fm-scan-again-btn:hover { background: rgba(255,255,255,0.1); color: #fff; }
</style>

<div class="fm-page">
  <p class="fm-kicker">Library Game</p>
  <h1 class="fm-title">Famous Face Match</h1>
  <p class="fm-subtitle">Point your camera, hit scan, and our AI analyzes your facial features to find the famous author you most resemble.</p>

  <div class="fm-camera-wrap">
    <video id="fm-video" autoplay playsinline muted></video>
    <canvas id="fm-canvas-overlay"></canvas>
    <div class="fm-no-camera" id="fm-no-camera" style="display:none">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
      <span id="fm-no-camera-msg">Camera access required</span>
    </div>
  </div>

  <p class="fm-status" id="fm-status">Camera loading...</p>

  <div>
    <button class="fm-scan-btn" id="fm-scan-btn" disabled onclick="fmStartScan()">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      Scan My Face
    </button>
  </div>

</div>

<div class="fm-result-overlay" id="fm-result-overlay">
  <div class="fm-result" id="fm-result">
    <button class="fm-result-close" onclick="fmCloseResult()">&#x2715;</button>
    <div class="fm-result-header">
      <div class="fm-match-avatar" id="fm-avatar"></div>
      <div style="min-width:0">
        <p class="fm-section-label">You look like</p>
        <h2 class="fm-match-name" id="fm-match-name"></h2>
        <div class="fm-match-pct" id="fm-match-pct"></div>
        <div class="fm-match-bar-wrap"><div class="fm-match-bar" id="fm-match-bar"></div></div>
      </div>
    </div>
    <p class="fm-reason" id="fm-reason"></p>
    <div class="fm-divider"></div>
    <p class="fm-section-label">Known for</p>
    <p class="fm-fact" id="fm-fact"></p>
    <p class="fm-section-label">Book to read</p>
    <div class="fm-book">
      <div class="fm-book-icon">📖</div>
      <div>
        <p class="fm-book-title" id="fm-book-title"></p>
        <p class="fm-book-author" id="fm-book-author"></p>
      </div>
    </div>
    <div class="fm-result-actions">
      <a class="fm-catalog-link" href="/catalog">Search Our Catalog</a>
      <button class="fm-scan-again-btn" onclick="fmCloseResult()">Scan Again</button>
    </div>
  </div>
</div>

<script>
(function() {
  let stream = null;
  let scanning = false;
  let scanRAF = null;
  let capturedFrame = null; // base64 JPEG captured at scan start

  const video   = document.getElementById('fm-video');
  const canvas  = document.getElementById('fm-canvas-overlay');
  const ctx     = canvas.getContext('2d');
  const scanBtn = document.getElementById('fm-scan-btn');
  const status  = document.getElementById('fm-status');
  const noCam   = document.getElementById('fm-no-camera');

  // ── Camera ────────────────────────────────────────────────────────────────
  async function initCamera() {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
      video.srcObject = stream;
      video.onloadedmetadata = function() {
        canvas.width  = video.videoWidth  || 640;
        canvas.height = video.videoHeight || 480;
        scanBtn.disabled = false;
        status.textContent = 'Camera ready — click Scan My Face';
        noCam.style.display = 'none';
      };
    } catch(e) {
      noCam.style.display = 'flex';
      document.getElementById('fm-no-camera-msg').textContent =
        e.name === 'NotAllowedError' ? 'Camera permission denied' : 'Camera not available';
      status.textContent = 'No camera detected';
      video.style.display = 'none';
    }
  }

  function stopCamera() {
    if (stream) {
      stream.getTracks().forEach(t => t.stop());
      stream = null;
    }
  }

  // Capture the current video frame as a base64 JPEG string (resized to 480px wide max)
  function captureFrame() {
    const srcW = video.videoWidth  || canvas.width  || 640;
    const srcH = video.videoHeight || canvas.height || 480;
    const maxW = 480;
    const scale = Math.min(1, maxW / srcW);
    const w = Math.max(4, Math.round(srcW * scale));
    const h = Math.max(4, Math.round(srcH * scale));
    const tmp = document.createElement('canvas');
    tmp.width = w; tmp.height = h;
    const tc = tmp.getContext('2d');
    // Un-mirror for the AI (video is CSS-mirrored)
    tc.translate(w, 0);
    tc.scale(-1, 1);
    tc.drawImage(video, 0, 0, w, h);
    const dataUrl = tmp.toDataURL('image/jpeg', 0.80);
    return dataUrl.split(',')[1];
  }

  // ── Scan points ───────────────────────────────────────────────────────────
  function makeScanPoints(w, h) {
    const pts = [];
    const cx = w * 0.5, cy = h * 0.42;
    const rx = w * 0.22, ry = h * 0.28;
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      pts.push({
        x: cx + Math.cos(a) * rx + (Math.random() - 0.5) * rx * 0.4,
        y: cy + Math.sin(a) * ry + (Math.random() - 0.5) * ry * 0.3
      });
    }
    const features = [
      [cx - rx*0.32, cy - ry*0.18], [cx + rx*0.32, cy - ry*0.18],
      [cx, cy - ry*0.05],
      [cx - rx*0.15, cy + ry*0.12], [cx + rx*0.15, cy + ry*0.12],
      [cx - rx*0.28, cy + ry*0.32], [cx + rx*0.28, cy + ry*0.32],
      [cx, cy - ry*0.45],
      [cx - rx*0.55, cy],           [cx + rx*0.55, cy],
      [cx, cy + ry*0.55]
    ];
    features.forEach(([x, y]) => pts.push({
      x: x + (Math.random()-0.5)*12,
      y: y + (Math.random()-0.5)*12
    }));
    return pts;
  }

  // ── Main scan entry point ─────────────────────────────────────────────────
  window.fmStartScan = function() {
    if (scanning) return;
    scanning = true;
    scanBtn.disabled = true;
    document.getElementById('fm-result-overlay').classList.remove('show');

    const scanPoints = makeScanPoints(canvas.width, canvas.height);

    // Capture the frame immediately so we have it ready for the API call
    try { capturedFrame = captureFrame(); } catch(e) { capturedFrame = null; }

    const steps = [
      { at: 0,   msg: 'Detecting face geometry...' },
      { at: 25,  msg: 'Mapping facial landmarks...' },
      { at: 55,  msg: 'Running AI analysis...' },
      { at: 75,  msg: 'Calculating similarity matrix...' },
      { at: 92,  msg: 'Match found!' }
    ];
    let stepIdx = 0;
    const totalFrames = 120;
    let frame = 0;

    // Kick off the API call in parallel with the animation
    const apiPromise = callFaceMatchAPI();

    function draw() {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const progress = frame / totalFrames;
      const cx = w * 0.5, cy = h * 0.42;
      const rx = w * 0.22, ry = h * 0.28;

      // Sweep line
      const sweepY = cy - ry + (ry * 2 + ry * 0.3) * progress;
      ctx.fillStyle = 'rgba(45,200,100,0.04)';
      ctx.fillRect(0, sweepY - 40, w, 40);
      const lineGrad = ctx.createLinearGradient(0, sweepY - 40, 0, sweepY);
      lineGrad.addColorStop(0, 'rgba(45,200,100,0)');
      lineGrad.addColorStop(1, 'rgba(45,200,100,0.7)');
      ctx.fillStyle = lineGrad;
      ctx.fillRect(0, sweepY - 40, w, 40);
      ctx.strokeStyle = 'rgba(45,200,100,0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(0, sweepY); ctx.lineTo(w, sweepY); ctx.stroke();

      // Face oval
      ctx.strokeStyle = `rgba(45,200,100,${0.3 + Math.sin(frame * 0.1) * 0.1})`;
      ctx.lineWidth = 1.5; ctx.setLineDash([6, 4]);
      ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);

      // Corner brackets
      const bx = cx - rx - 12, by = cy - ry - 12;
      const bw = (rx + 12) * 2, bh = (ry + 12) * 2, blen = 20;
      ctx.strokeStyle = '#2dc864'; ctx.lineWidth = 2;
      [[bx, by, blen, 0, 0, blen],[bx+bw, by, -blen, 0, 0, blen],
       [bx, by+bh, blen, 0, 0, -blen],[bx+bw, by+bh, -blen, 0, 0, -blen]
      ].forEach(([x,y,dx1,dy1,dx2,dy2]) => {
        ctx.beginPath();
        ctx.moveTo(x+dx1, y+dy1); ctx.lineTo(x, y); ctx.lineTo(x+dx2, y+dy2);
        ctx.stroke();
      });

      // Landmark points
      scanPoints.forEach((pt, i) => {
        const revealAt = i / scanPoints.length;
        if (progress < revealAt) return;
        const age = progress - revealAt;
        const alpha = Math.min(age * 8, 1);
        ctx.beginPath(); ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pt.y <= sweepY
          ? `rgba(212,168,83,${alpha * 0.9})`
          : `rgba(45,200,100,${alpha * 0.7})`;
        ctx.fill();
        if (age < 0.15) {
          ctx.beginPath(); ctx.arc(pt.x, pt.y, 2.5 + age * 40, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(212,168,83,${(0.15 - age) / 0.15 * 0.5})`;
          ctx.lineWidth = 1; ctx.stroke();
        }
      });

      // Mesh lines
      ctx.strokeStyle = 'rgba(45,200,100,0.12)'; ctx.lineWidth = 0.8;
      for (let i = 0; i < scanPoints.length; i++) {
        if (progress < i / scanPoints.length) continue;
        for (let j = i+1; j < scanPoints.length; j++) {
          if (progress < j / scanPoints.length) continue;
          const dx = scanPoints[i].x - scanPoints[j].x;
          const dy = scanPoints[i].y - scanPoints[j].y;
          if (dx*dx + dy*dy < 4800) {
            ctx.beginPath();
            ctx.moveTo(scanPoints[i].x, scanPoints[i].y);
            ctx.lineTo(scanPoints[j].x, scanPoints[j].y);
            ctx.stroke();
          }
        }
      }

      // Progress text
      ctx.font = 'bold 12px Cabin, sans-serif';
      ctx.fillStyle = 'rgba(45,200,100,0.8)';
      ctx.textAlign = 'right';
      ctx.fillText(Math.round(progress * 100) + '%', w - 10, h - 10);
      ctx.textAlign = 'left';

      while (stepIdx < steps.length - 1 && Math.round(progress * 100) >= steps[stepIdx + 1].at) stepIdx++;
      status.textContent = steps[stepIdx].msg;

      frame++;
      if (frame <= totalFrames) {
        scanRAF = requestAnimationFrame(draw);
      } else {
        // Animation done — wait for API then show result
        ctx.clearRect(0, 0, w, h);
        status.textContent = 'Analyzing with AI...';
        apiPromise.then(function(data) {
          stopCamera();
          if (data && data._error) {
            status.textContent = data._error;
            scanning = false;
            scanBtn.disabled = false;
          } else if (data && data.no_face) {
            status.textContent = 'No face detected — try again!';
            scanning = false;
            scanBtn.disabled = false;
          } else if (data && data.name) {
            showResult(data);
          } else {
            status.textContent = 'Unexpected response — try again!';
            console.error('Face match unexpected response:', data);
            scanning = false;
            scanBtn.disabled = false;
          }
        });
      }
    }

    scanRAF = requestAnimationFrame(draw);
  };

  // ── API call ──────────────────────────────────────────────────────────────
  async function callFaceMatchAPI() {
    if (!capturedFrame) {
      return { _error: 'Could not capture camera frame' };
    }
    try {
      const backend = (window.FOPL_BACKEND || '').replace(/\/$/, '');
      const resp = await fetch(backend + '/api/fopl/face-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ image: capturedFrame, mime: 'image/jpeg' })
      });
      const text = await resp.text();
      if (!resp.ok) {
        let msg = text.slice(0, 120);
        try { msg = JSON.parse(text).message || msg; } catch(_) {}
        return { _error: `Server error ${resp.status}: ${msg}` };
      }
      return JSON.parse(text);
    } catch(e) {
      return { _error: e.message || 'Network error' };
    }
  }

  // ── Show result modal ─────────────────────────────────────────────────────
  function showResult(data) {
    console.log('[FaceMatch] result data:', JSON.stringify(data));
    const pct = data.similarity || 80;
    const name = data.name || '';

    // Avatar: use Wikipedia photo if available, else fallback emoji
    const avatarEl = document.getElementById('fm-avatar');
    avatarEl.innerHTML = '';
    if (data.wiki_image) {
      const img = document.createElement('img');
      img.src = data.wiki_image;
      img.alt = name;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:50%;';
      avatarEl.appendChild(img);
    } else {
      avatarEl.textContent = '🎬';
    }

    document.getElementById('fm-match-name').textContent  = name;
    document.getElementById('fm-match-pct').textContent   = pct + '% match';
    document.getElementById('fm-reason').textContent      = data.reason || '';
    document.getElementById('fm-fact').textContent        = data.known_for || '';
    document.getElementById('fm-book-title').textContent  = data.book || '';
    document.getElementById('fm-book-author').textContent = data.book_author ? 'by ' + data.book_author : '';

    document.getElementById('fm-result-overlay').classList.add('show');
    setTimeout(() => {
      document.getElementById('fm-match-bar').style.width = pct + '%';
    }, 100);

    status.textContent = 'Analysis complete!';
    scanning = false;
  }

  // ── Close / retry ─────────────────────────────────────────────────────────
  window.fmCloseResult = function() {
    document.getElementById('fm-result-overlay').classList.remove('show');
    document.getElementById('fm-match-bar').style.width = '0';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    status.textContent = 'Camera loading...';
    scanBtn.disabled = true;
    initCamera();
  };

  document.getElementById('fm-result-overlay').addEventListener('click', function(e) {
    if (e.target === this) fmCloseResult();
  });

  initCamera();
})();
</script>
