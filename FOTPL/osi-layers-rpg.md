---
layout: fopl
title: OSI Layers Quest — Friends of the Poway Library
permalink: /osi-layers-quest
description: Learn the 7 layers of networking in this RPG adventure guided by a librarian.
fopl_nav_active: puzzles
---

<style>
  body { background: #1a1a2e; }
  .fopl-logo-wrap img { height: 90px; }

  .rpg-wrap {
    max-width: 900px; margin: 0 auto; padding: 20px 16px 44px;
    min-height: calc(100vh - 90px);
  }
  .rpg-header {
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid #3a3a5e; padding-bottom: 10px; margin-bottom: 16px;
  }
  .rpg-title {
    font-family: 'Cabin', sans-serif; font-size: 1.45rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #7dd3fc;
  }
  .rpg-btn-link { text-decoration: none; color: #7dd3fc; font-size: 1.1rem; }

  .rpg-card {
    background: #16213e; border-top: 4px solid #7dd3fc; border-radius: 8px;
    box-shadow: 0 2px 20px rgba(125,211,252,0.15); padding: 20px;
  }

  .rpg-intro {
    margin: 0 0 12px; color: #a5b4fc; line-height: 1.5;
  }

  .rpg-hud {
    display: grid; grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 8px; margin-bottom: 12px;
  }
  .hud-box {
    background: #1e3a5f; border: 1px solid #3b82f6; border-radius: 7px;
    padding: 8px; text-align: center;
  }
  .hud-label {
    font-size: 0.7rem; font-weight: 700; color: #93c5fd;
    text-transform: uppercase; letter-spacing: 0.06em;
  }
  .hud-num {
    font-family: 'Cabin', sans-serif; font-size: 1.2rem; font-weight: 700;
    color: #7dd3fc; margin-top: 2px;
  }

  .rpg-layer-bar {
    display: flex; gap: 4px; margin-bottom: 12px;
    background: #0f172a; padding: 8px; border-radius: 8px;
  }
  .layer-pip {
    flex: 1; height: 24px; border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.6rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.04em; color: #fff; opacity: 0.4;
    transition: all 0.3s;
  }
  .layer-pip.active { opacity: 1; box-shadow: 0 0 10px currentColor; }
  .layer-pip.completed { opacity: 0.8; }
  .layer-pip[data-layer="7"] { background: #ef4444; }
  .layer-pip[data-layer="6"] { background: #f97316; }
  .layer-pip[data-layer="5"] { background: #eab308; }
  .layer-pip[data-layer="4"] { background: #22c55e; }
  .layer-pip[data-layer="3"] { background: #06b6d4; }
  .layer-pip[data-layer="2"] { background: #3b82f6; }
  .layer-pip[data-layer="1"] { background: #8b5cf6; }

  .rpg-game-area {
    position: relative;
    background: #0f172a;
    border: 2px solid #334155;
    border-radius: 8px;
    overflow: hidden;
  }
  .rpg-game-area canvas {
    display: block;
    width: 100%;
    height: 400px;
  }

  .rpg-dialogue {
    margin-top: 12px;
    background: #1e293b;
    border: 2px solid #475569;
    border-radius: 8px;
    padding: 16px;
    min-height: 100px;
  }
  .dialogue-speaker {
    font-family: 'Cabin', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: #fbbf24;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  }
  .dialogue-text {
    color: #e2e8f0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  .dialogue-prompt {
    margin-top: 10px;
    color: #94a3b8;
    font-size: 0.8rem;
    font-style: italic;
  }

  .rpg-quiz {
    display: none;
    margin-top: 12px;
    background: #1e293b;
    border: 2px solid #475569;
    border-radius: 8px;
    padding: 16px;
  }
  .rpg-quiz.active { display: block; }
  .quiz-question {
    color: #e2e8f0;
    font-size: 1rem;
    margin-bottom: 12px;
    line-height: 1.5;
  }
  .quiz-options {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .quiz-option {
    background: #334155;
    border: 2px solid #475569;
    border-radius: 6px;
    padding: 10px 14px;
    color: #e2e8f0;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
  }
  .quiz-option:hover { background: #3b82f6; border-color: #60a5fa; }
  .quiz-option.correct { background: #22c55e; border-color: #4ade80; }
  .quiz-option.wrong { background: #ef4444; border-color: #f87171; }

  .rpg-controls {
    display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;
  }
  .rpg-btn {
    border: none; background: #3b82f6; color: #fff; border-radius: 6px;
    padding: 10px 14px; cursor: pointer; font-family: 'Cabin', sans-serif;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.8rem;
    transition: background 0.2s;
  }
  .rpg-btn:hover { background: #2563eb; }
  .rpg-btn.alt { background: #475569; }
  .rpg-btn.alt:hover { background: #64748b; }

  .rpg-help {
    margin-top: 10px; font-size: 0.86rem; color: #64748b;
  }

  .rpg-mobile-pad {
    display: none;
    margin-top: 12px;
    justify-content: center;
  }
  .pad-grid {
    display: grid;
    grid-template-columns: repeat(3, 50px);
    grid-template-rows: repeat(3, 44px);
    gap: 4px;
  }
  .pad-btn {
    background: #334155;
    border: 1px solid #475569;
    border-radius: 6px;
    color: #e2e8f0;
    font-weight: 700;
    cursor: pointer;
  }
  .pad-btn:active { background: #3b82f6; }

  @media (max-width: 680px) {
    .rpg-hud { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .rpg-game-area canvas { height: 300px; }
    .rpg-mobile-pad { display: flex; }
    .layer-pip { font-size: 0.5rem; }
  }
</style>

<div class="rpg-wrap">
  <div class="rpg-header">
    <div class="rpg-title">OSI Layers Quest</div>
    <a class="rpg-btn-link" href="/puzzles" title="All Puzzles">All Games</a>
  </div>

  <div class="rpg-card">
    <p class="rpg-intro">
      Explore the Library of Networking Knowledge and learn the 7 layers of the OSI model.
      The wise Librarian will guide you through each floor.
    </p>

    <div class="rpg-hud">
      <div class="hud-box"><div class="hud-label">Layer</div><div class="hud-num" id="hud-layer">Lobby</div></div>
      <div class="hud-box"><div class="hud-label">Progress</div><div class="hud-num" id="hud-progress">0 / 7</div></div>
      <div class="hud-box"><div class="hud-label">Score</div><div class="hud-num" id="hud-score">0</div></div>
      <div class="hud-box"><div class="hud-label">Packets</div><div class="hud-num" id="hud-packets">0</div></div>
      <div class="hud-box"><div class="hud-label">Best</div><div class="hud-num" id="hud-best">--</div></div>
    </div>

    <div class="rpg-layer-bar">
      <div class="layer-pip" data-layer="1">L1</div>
      <div class="layer-pip" data-layer="2">L2</div>
      <div class="layer-pip" data-layer="3">L3</div>
      <div class="layer-pip" data-layer="4">L4</div>
      <div class="layer-pip" data-layer="5">L5</div>
      <div class="layer-pip" data-layer="6">L6</div>
      <div class="layer-pip" data-layer="7">L7</div>
    </div>

    <div class="rpg-game-area">
      <canvas id="game-canvas" height="400"></canvas>
    </div>

    <div class="rpg-dialogue" id="dialogue-box">
      <div class="dialogue-speaker" id="dialogue-speaker">Librarian</div>
      <div class="dialogue-text" id="dialogue-text">
        Welcome, young network traveler! I am the Librarian of the Networking Knowledge Library.
        This ancient place holds the secrets of the OSI Model's seven sacred layers.
      </div>
      <div class="dialogue-prompt" id="dialogue-prompt">Press SPACE or click to continue...</div>
    </div>

    <div class="rpg-quiz" id="quiz-box">
      <div class="quiz-question" id="quiz-question"></div>
      <div class="quiz-options" id="quiz-options"></div>
    </div>

    <div class="rpg-controls">
      <button class="rpg-btn" id="restart-btn" type="button">Restart Quest</button>
      <button class="rpg-btn alt" id="help-btn" type="button">Controls</button>
    </div>

    <div class="rpg-help" id="rpg-help">
      Move: Arrow Keys / WASD | Interact: SPACE / E | Talk to the Librarian to progress.
    </div>

    <div class="rpg-mobile-pad">
      <div class="pad-grid">
        <div></div>
        <button class="pad-btn" id="pad-up">W</button>
        <div></div>
        <button class="pad-btn" id="pad-left">A</button>
        <button class="pad-btn" id="pad-action">E</button>
        <button class="pad-btn" id="pad-right">D</button>
        <div></div>
        <button class="pad-btn" id="pad-down">S</button>
        <div></div>
      </div>
    </div>
  </div>
</div>

<script>
{
const BEST_KEY = 'fopl_osi_quest_best';

const LAYERS = [
  {
    id: 1,
    name: 'Physical',
    color: '#8b5cf6',
    description: 'The Physical Layer deals with the raw transmission of data bits over a physical medium like cables, radio waves, or fiber optics.',
    examples: 'Ethernet cables, Wi-Fi signals, USB, Bluetooth, fiber optic cables',
    quiz: {
      question: 'What does the Physical Layer transmit?',
      options: ['Packets', 'Frames', 'Raw bits', 'Sessions'],
      correct: 2
    }
  },
  {
    id: 2,
    name: 'Data Link',
    color: '#3b82f6',
    description: 'The Data Link Layer packages bits into frames and handles error detection. It provides node-to-node data transfer using MAC addresses.',
    examples: 'Ethernet (MAC addresses), Switches, Network Interface Cards (NICs)',
    quiz: {
      question: 'What addressing does the Data Link Layer use?',
      options: ['IP addresses', 'MAC addresses', 'Port numbers', 'URLs'],
      correct: 1
    }
  },
  {
    id: 3,
    name: 'Network',
    color: '#06b6d4',
    description: 'The Network Layer handles routing and forwarding packets across different networks using logical addressing (IP addresses).',
    examples: 'IP addresses, Routers, IPv4, IPv6',
    quiz: {
      question: 'What device operates primarily at the Network Layer?',
      options: ['Switch', 'Hub', 'Router', 'Repeater'],
      correct: 2
    }
  },
  {
    id: 4,
    name: 'Transport',
    color: '#22c55e',
    description: 'The Transport Layer ensures reliable data transfer between hosts using protocols like TCP (reliable) and UDP (fast but unreliable).',
    examples: 'TCP, UDP, port numbers, flow control, error recovery',
    quiz: {
      question: 'Which protocol provides reliable, ordered delivery?',
      options: ['UDP', 'TCP', 'IP', 'ARP'],
      correct: 1
    }
  },
  {
    id: 5,
    name: 'Session',
    color: '#eab308',
    description: 'The Session Layer establishes, manages, and terminates connections between applications. It handles session checkpointing and recovery.',
    examples: 'NetBIOS, RPC (Remote Procedure Call), session tokens',
    quiz: {
      question: 'What does the Session Layer manage?',
      options: ['Physical cables', 'Connections between apps', 'Data encryption', 'Routing tables'],
      correct: 1
    }
  },
  {
    id: 6,
    name: 'Presentation',
    color: '#f97316',
    description: 'The Presentation Layer translates data formats, handles encryption/decryption, and manages data compression.',
    examples: 'SSL/TLS encryption, JPEG, ASCII, data compression',
    quiz: {
      question: 'What is a key function of the Presentation Layer?',
      options: ['Routing packets', 'Data encryption', 'MAC addressing', 'Port management'],
      correct: 1
    }
  },
  {
    id: 7,
    name: 'Application',
    color: '#ef4444',
    description: 'The Application Layer is closest to the end user. It provides network services directly to applications like web browsers and email clients.',
    examples: 'HTTP, HTTPS, FTP, SMTP, DNS, SSH',
    quiz: {
      question: 'Which protocol operates at the Application Layer?',
      options: ['TCP', 'IP', 'HTTP', 'Ethernet'],
      correct: 2
    }
  }
];

const DIALOGUES = {
  intro: [
    "Welcome, young network traveler! I am the Librarian of the Networking Knowledge Library.",
    "This ancient place holds the secrets of the OSI Model's seven sacred layers.",
    "Each floor of this library represents one layer of the network stack.",
    "We shall start at Layer 1 - the Physical Layer - and work our way up to Layer 7 - the Application Layer.",
    "Walk to the glowing portal on the right to enter the first floor. I shall meet you there!"
  ],
  layerIntro: (layer) => [
    `Welcome to Floor ${layer.id}: The ${layer.name} Layer!`,
    layer.description,
    `Examples include: ${layer.examples}`,
    "Collect the data packets scattered around, then return to me for your knowledge test!"
  ],
  quizIntro: (layer) => [
    `Excellent! You've gathered the data packets for the ${layer.name} Layer.`,
    "Now, prove your understanding with a quick question..."
  ],
  quizSuccess: (layer) => [
    `Outstanding! You have mastered the ${layer.name} Layer!`,
    layer.id < 7
      ? "The portal to the next floor has opened. Continue your journey upward!"
      : "You have completed all seven layers! You are now a true Network Master!"
  ],
  quizFail: [
    "Not quite right, but don't give up!",
    "Let me explain again, and you can try once more..."
  ],
  complete: [
    "CONGRATULATIONS, Network Master!",
    "You have traversed all seven layers of the OSI Model!",
    "From Physical bits to Application protocols, you now understand how data flows through networks.",
    "Remember: Please Do Not Throw Sausage Pizza Away!",
    "(Physical, Data Link, Network, Transport, Session, Presentation, Application)",
    "Thank you for visiting the Library of Networking Knowledge!"
  ]
};

let W = 0, H = 400;
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

let gameState = {
  phase: 'intro',
  currentLayer: 0,
  dialogueIndex: 0,
  dialogues: DIALOGUES.intro,
  completedLayers: [],
  packets: [],
  collectedPackets: 0,
  totalPackets: 0,
  score: 0,
  quizActive: false,
  player: { x: 100, y: 280, facing: 'right' },
  librarian: { x: 300, y: 280 },
  portal: { x: 750, y: 260, active: true },
  tick: 0
};

function resize() {
  const parent = canvas.parentElement;
  if (!parent) return;
  W = parent.clientWidth;
  canvas.width = W;
  canvas.height = H;
}

function updateHud() {
  const layerName = gameState.currentLayer === 0 ? 'Lobby' : LAYERS[gameState.currentLayer - 1].name;
  document.getElementById('hud-layer').textContent = layerName;
  document.getElementById('hud-progress').textContent = `${gameState.completedLayers.length} / 7`;
  document.getElementById('hud-score').textContent = String(gameState.score);
  document.getElementById('hud-packets').textContent = String(gameState.collectedPackets);

  document.querySelectorAll('.layer-pip').forEach(pip => {
    const layer = parseInt(pip.dataset.layer);
    pip.classList.remove('active', 'completed');
    if (layer === gameState.currentLayer) pip.classList.add('active');
    if (gameState.completedLayers.includes(layer)) pip.classList.add('completed');
  });

  const best = JSON.parse(localStorage.getItem(BEST_KEY) || 'null');
  document.getElementById('hud-best').textContent = best ? String(best.score) : '--';
}

function showDialogue(speaker, text, prompt = 'Press SPACE or click to continue...') {
  const box = document.getElementById('dialogue-box');
  box.style.display = 'block';
  document.getElementById('dialogue-speaker').textContent = speaker;
  document.getElementById('dialogue-text').textContent = text;
  document.getElementById('dialogue-prompt').textContent = prompt;
}

function hideDialogue() {
  document.getElementById('dialogue-box').style.display = 'none';
}

function showQuiz(layer) {
  gameState.quizActive = true;
  const quiz = layer.quiz;
  const box = document.getElementById('quiz-box');
  box.classList.add('active');
  document.getElementById('quiz-question').textContent = quiz.question;

  const optionsEl = document.getElementById('quiz-options');
  optionsEl.innerHTML = '';

  quiz.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.onclick = () => handleQuizAnswer(i, quiz.correct, layer);
    optionsEl.appendChild(btn);
  });

  hideDialogue();
}

function hideQuiz() {
  gameState.quizActive = false;
  document.getElementById('quiz-box').classList.remove('active');
}

function handleQuizAnswer(selected, correct, layer) {
  const options = document.querySelectorAll('.quiz-option');
  options.forEach((opt, i) => {
    opt.style.pointerEvents = 'none';
    if (i === correct) opt.classList.add('correct');
    if (i === selected && selected !== correct) opt.classList.add('wrong');
  });

  setTimeout(() => {
    hideQuiz();
    if (selected === correct) {
      gameState.score += 100 + (gameState.collectedPackets * 10);
      gameState.completedLayers.push(layer.id);
      gameState.dialogues = DIALOGUES.quizSuccess(layer);
      gameState.dialogueIndex = 0;
      gameState.phase = layer.id < 7 ? 'layer_complete' : 'game_complete';

      if (layer.id >= 7) {
        saveBest();
        addOverallProgress();
      }
    } else {
      gameState.dialogues = DIALOGUES.quizFail;
      gameState.dialogueIndex = 0;
      gameState.phase = 'quiz_fail';
    }
    showDialogue('Librarian', gameState.dialogues[0]);
    updateHud();
  }, 1500);
}

function spawnPackets(count) {
  gameState.packets = [];
  gameState.collectedPackets = 0;
  gameState.totalPackets = count;

  for (let i = 0; i < count; i++) {
    gameState.packets.push({
      x: 150 + Math.random() * (W - 300),
      y: 150 + Math.random() * 100,
      collected: false
    });
  }
}

function advanceDialogue() {
  if (gameState.quizActive) return;

  gameState.dialogueIndex++;

  if (gameState.dialogueIndex >= gameState.dialogues.length) {
    if (gameState.phase === 'intro') {
      gameState.phase = 'lobby';
      hideDialogue();
    } else if (gameState.phase === 'layer_intro') {
      gameState.phase = 'collecting';
      hideDialogue();
    } else if (gameState.phase === 'quiz_intro') {
      showQuiz(LAYERS[gameState.currentLayer - 1]);
    } else if (gameState.phase === 'quiz_fail') {
      gameState.dialogues = DIALOGUES.layerIntro(LAYERS[gameState.currentLayer - 1]);
      gameState.dialogueIndex = 0;
      gameState.phase = 'layer_intro';
      showDialogue('Librarian', gameState.dialogues[0]);
    } else if (gameState.phase === 'layer_complete') {
      gameState.phase = 'exploring';
      gameState.portal.active = true;
      hideDialogue();
    } else if (gameState.phase === 'game_complete') {
      gameState.dialogues = DIALOGUES.complete;
      gameState.dialogueIndex = 0;
      gameState.phase = 'ending';
      showDialogue('Librarian', gameState.dialogues[0]);
    } else if (gameState.phase === 'ending') {
      hideDialogue();
      gameState.phase = 'finished';
    }
  } else {
    showDialogue('Librarian', gameState.dialogues[gameState.dialogueIndex]);
  }
}

function enterLayer(layerNum) {
  gameState.currentLayer = layerNum;
  const layer = LAYERS[layerNum - 1];
  gameState.dialogues = DIALOGUES.layerIntro(layer);
  gameState.dialogueIndex = 0;
  gameState.phase = 'layer_intro';
  gameState.player.x = 100;
  gameState.player.y = 280;
  gameState.librarian.x = 300;
  gameState.portal.active = false;

  spawnPackets(3 + Math.floor(layerNum / 2));
  showDialogue('Librarian', gameState.dialogues[0]);
  updateHud();
}

function checkInteraction() {
  const p = gameState.player;
  const l = gameState.librarian;
  const portal = gameState.portal;

  const distToLib = Math.abs(p.x - l.x) + Math.abs(p.y - l.y);
  const distToPortal = Math.abs(p.x - portal.x) + Math.abs(p.y - portal.y);

  if (distToLib < 60) {
    if (gameState.phase === 'lobby' || gameState.phase === 'exploring') {
      return;
    }
    if (gameState.phase === 'collecting' && gameState.collectedPackets >= gameState.totalPackets) {
      gameState.dialogues = DIALOGUES.quizIntro(LAYERS[gameState.currentLayer - 1]);
      gameState.dialogueIndex = 0;
      gameState.phase = 'quiz_intro';
      showDialogue('Librarian', gameState.dialogues[0]);
    }
  }

  if (distToPortal < 50 && portal.active) {
    if (gameState.phase === 'lobby') {
      enterLayer(1);
    } else if (gameState.phase === 'exploring' && gameState.currentLayer < 7) {
      enterLayer(gameState.currentLayer + 1);
    }
  }
}

function movePlayer(dx, dy) {
  if (gameState.quizActive) return;
  if (['intro', 'layer_intro', 'quiz_intro', 'quiz_fail', 'game_complete', 'ending'].includes(gameState.phase)) return;

  const p = gameState.player;
  const newX = Math.max(30, Math.min(W - 30, p.x + dx * 8));
  const newY = Math.max(120, Math.min(H - 40, p.y + dy * 8));

  p.x = newX;
  p.y = newY;
  if (dx > 0) p.facing = 'right';
  if (dx < 0) p.facing = 'left';

  gameState.packets.forEach(pkt => {
    if (!pkt.collected && Math.abs(p.x - pkt.x) < 30 && Math.abs(p.y - pkt.y) < 30) {
      pkt.collected = true;
      gameState.collectedPackets++;
      gameState.score += 10;
      updateHud();
    }
  });
}

function drawBackground() {
  const layer = gameState.currentLayer > 0 ? LAYERS[gameState.currentLayer - 1] : null;
  const bgColor = layer ? layer.color + '22' : '#1a1a2e';

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, W, 100);

  if (layer) {
    ctx.fillStyle = layer.color + '44';
    ctx.font = 'bold 60px Cabin, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`LAYER ${layer.id}`, W / 2, 70);
  } else {
    ctx.fillStyle = '#3b82f644';
    ctx.font = 'bold 48px Cabin, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('NETWORKING LIBRARY', W / 2, 65);
  }

  ctx.fillStyle = '#334155';
  ctx.fillRect(0, H - 50, W, 50);

  for (let i = 0; i < W; i += 40) {
    ctx.fillStyle = i % 80 === 0 ? '#475569' : '#3f4f5f';
    ctx.fillRect(i, H - 50, 38, 48);
  }

  const shelfCount = Math.floor(W / 150);
  for (let i = 0; i < shelfCount; i++) {
    const sx = 60 + i * 150;
    ctx.fillStyle = '#5c4033';
    ctx.fillRect(sx, 110, 80, 170);

    for (let j = 0; j < 4; j++) {
      ctx.fillStyle = '#7a5c40';
      ctx.fillRect(sx + 5, 120 + j * 42, 70, 5);

      const bookColors = ['#ef4444', '#3b82f6', '#22c55e', '#f97316', '#8b5cf6'];
      for (let b = 0; b < 5; b++) {
        ctx.fillStyle = bookColors[(i + j + b) % bookColors.length];
        ctx.fillRect(sx + 8 + b * 13, 125 + j * 42, 10, 35);
      }
    }
  }
}

function drawPortal() {
  const portal = gameState.portal;
  if (!portal.active) return;

  const pulse = Math.sin(gameState.tick * 0.1) * 10;
  const layer = gameState.currentLayer > 0 && gameState.currentLayer < 7
    ? LAYERS[gameState.currentLayer]
    : (gameState.currentLayer === 0 ? LAYERS[0] : null);

  if (!layer && gameState.currentLayer >= 7) return;

  const color = layer ? layer.color : '#3b82f6';

  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = 20 + pulse;

  ctx.fillStyle = color + '88';
  ctx.beginPath();
  ctx.ellipse(portal.x, portal.y + 30, 30 + pulse / 2, 50 + pulse / 2, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.ellipse(portal.x, portal.y + 30, 15, 25, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  ctx.fillStyle = '#fff';
  ctx.font = 'bold 12px Cabin, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(gameState.currentLayer === 0 ? 'ENTER' : 'NEXT', portal.x, portal.y - 30);
}

function drawPackets() {
  gameState.packets.forEach(pkt => {
    if (pkt.collected) return;

    const bob = Math.sin(gameState.tick * 0.15 + pkt.x) * 5;
    const layer = LAYERS[gameState.currentLayer - 1];

    ctx.save();
    ctx.shadowColor = layer.color;
    ctx.shadowBlur = 10;

    ctx.fillStyle = layer.color;
    ctx.fillRect(pkt.x - 12, pkt.y - 8 + bob, 24, 16);

    ctx.fillStyle = '#fff';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PKT', pkt.x, pkt.y + bob);

    ctx.restore();
  });
}

function drawLibrarian() {
  const l = gameState.librarian;
  const bob = Math.sin(gameState.tick * 0.05) * 2;

  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(l.x - 8, l.y + 35, 7, 5);
  ctx.fillRect(l.x + 1, l.y + 35, 7, 5);

  ctx.fillStyle = '#1e3a5f';
  ctx.fillRect(l.x - 12, l.y + bob, 24, 35);

  ctx.fillStyle = '#f5c9a0';
  ctx.fillRect(l.x - 5, l.y - 20 + bob, 10, 20);

  ctx.fillStyle = '#f5c9a0';
  ctx.beginPath();
  ctx.arc(l.x, l.y - 28 + bob, 14, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#888';
  ctx.fillRect(l.x - 12, l.y - 38 + bob, 24, 8);
  ctx.fillRect(l.x - 10, l.y - 30 + bob, 20, 4);

  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(l.x - 5, l.y - 32 + bob, 3, 3);
  ctx.fillRect(l.x + 2, l.y - 32 + bob, 3, 3);

  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(l.x - 4, l.y - 30 + bob, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(l.x + 4, l.y - 30 + bob, 5, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#7a5c40';
  ctx.fillRect(l.x + 14, l.y + 5 + bob, 12, 18);
  ctx.fillStyle = '#22c55e';
  ctx.fillRect(l.x + 15, l.y + 6 + bob, 10, 16);

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 11px Cabin, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('LIBRARIAN', l.x, l.y - 50 + bob);
}

function drawPlayer() {
  const p = gameState.player;
  const walk = Math.sin(gameState.tick * 0.3) * 3;
  const flip = p.facing === 'left' ? -1 : 1;

  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.scale(flip, 1);

  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(-8, 35, 7, 5);
  ctx.fillRect(1, 35, 7, 5);

  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(-10, 0, 20, 35);

  ctx.fillStyle = '#f5c9a0';
  ctx.fillRect(-4, -18, 8, 18);

  ctx.fillStyle = '#f5c9a0';
  ctx.beginPath();
  ctx.arc(0, -26, 12, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#5c4033';
  ctx.fillRect(-10, -36, 20, 8);
  ctx.fillRect(-8, -30, 16, 4);

  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(-4, -28, 3, 3);
  ctx.fillRect(1, -28, 3, 3);

  ctx.strokeStyle = '#a05030';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, -20, 4, 0.2, Math.PI - 0.2);
  ctx.stroke();

  ctx.restore();

  ctx.fillStyle = '#7dd3fc';
  ctx.font = 'bold 11px Cabin, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('YOU', p.x, p.y - 48);
}

function gameLoop() {
  gameState.tick++;

  if (!W) resize();
  ctx.clearRect(0, 0, W, H);

  drawBackground();
  drawPortal();
  drawPackets();
  drawLibrarian();
  drawPlayer();

  if (gameState.phase === 'collecting') {
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 14px Cabin, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Packets: ${gameState.collectedPackets} / ${gameState.totalPackets}`, W / 2, 95);

    if (gameState.collectedPackets >= gameState.totalPackets) {
      ctx.fillText('Return to the Librarian!', W / 2, 115);
    }
  }

  requestAnimationFrame(gameLoop);
}

function saveBest() {
  const prev = JSON.parse(localStorage.getItem(BEST_KEY) || 'null');
  if (!prev || gameState.score > prev.score) {
    localStorage.setItem(BEST_KEY, JSON.stringify({ score: gameState.score }));
  }
}

function addOverallProgress() {
  if (typeof window.foplAddOverallProgress === 'function') {
    window.foplAddOverallProgress('osi_layers_quest', gameState.score, true);
  }
}

function resetGame() {
  gameState = {
    phase: 'intro',
    currentLayer: 0,
    dialogueIndex: 0,
    dialogues: DIALOGUES.intro,
    completedLayers: [],
    packets: [],
    collectedPackets: 0,
    totalPackets: 0,
    score: 0,
    quizActive: false,
    player: { x: 100, y: 280, facing: 'right' },
    librarian: { x: 300, y: 280 },
    portal: { x: 750, y: 260, active: true },
    tick: 0
  };

  hideQuiz();
  showDialogue('Librarian', gameState.dialogues[0]);
  updateHud();
}

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
  } else if ([' ', 'e'].includes(key)) {
    e.preventDefault();
    if (document.getElementById('dialogue-box').style.display !== 'none') {
      advanceDialogue();
    } else {
      checkInteraction();
    }
  }
});

document.getElementById('dialogue-box').addEventListener('click', advanceDialogue);
document.getElementById('restart-btn').addEventListener('click', resetGame);
document.getElementById('help-btn').addEventListener('click', () => {
  document.getElementById('rpg-help').style.display =
    document.getElementById('rpg-help').style.display === 'none' ? 'block' : 'none';
});

document.getElementById('pad-up').addEventListener('click', () => movePlayer(0, -1));
document.getElementById('pad-down').addEventListener('click', () => movePlayer(0, 1));
document.getElementById('pad-left').addEventListener('click', () => movePlayer(-1, 0));
document.getElementById('pad-right').addEventListener('click', () => movePlayer(1, 0));
document.getElementById('pad-action').addEventListener('click', () => {
  if (document.getElementById('dialogue-box').style.display !== 'none') {
    advanceDialogue();
  } else {
    checkInteraction();
  }
});

resize();
new ResizeObserver(resize).observe(canvas.parentElement);
updateHud();
showDialogue('Librarian', gameState.dialogues[0]);
gameLoop();
}
</script>
