---
layout: fopl
title: OSI Layers Quest — Friends of the Poway Library
permalink: /osi-layers-quest
description: Learn the 7 layers of networking in this RPG adventure guided by a librarian.
fopl_nav_active: puzzles
---

<style>
  body { background: #1a1a2e; }

  .rpg-wrap {
    max-width: 1100px; margin: 0 auto; padding: 20px 16px 44px;
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
    display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
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
    flex: 1; height: 28px; border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.04em; color: #fff; opacity: 0.4;
    transition: all 0.3s; cursor: pointer;
  }
  .layer-pip:hover { opacity: 0.7; }
  .layer-pip.active { opacity: 1; box-shadow: 0 0 12px currentColor; transform: scale(1.05); }
  .layer-pip.completed { opacity: 0.8; }
  .layer-pip.completed::after { content: ' ✓'; }
  .layer-pip[data-layer="7"] { background: #ef4444; }
  .layer-pip[data-layer="6"] { background: #f97316; }
  .layer-pip[data-layer="5"] { background: #eab308; }
  .layer-pip[data-layer="4"] { background: #22c55e; }
  .layer-pip[data-layer="3"] { background: #06b6d4; }
  .layer-pip[data-layer="2"] { background: #3b82f6; }
  .layer-pip[data-layer="1"] { background: #8b5cf6; }

  #game-container {
    position: relative;
    width: 100%;
    height: 500px;
    border: 2px solid #334155;
    border-radius: 8px;
    overflow: hidden;
    background: #0f172a;
  }

  #game-canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

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
    margin-top: 10px; font-size: 0.86rem; color: #94a3b8; line-height: 1.6;
  }

  @media (max-width: 680px) {
    .rpg-hud { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    #game-container { height: 400px; }
    .layer-pip { font-size: 0.55rem; height: 24px; }
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
      Move with WASD, press E to interact with the Librarian and layer zones. Complete all 7 layers to become a Network Master!
    </p>

    <div class="rpg-hud">
      <div class="hud-box"><div class="hud-label">Current Layer</div><div class="hud-num" id="hud-layer">Lobby</div></div>
      <div class="hud-box"><div class="hud-label">Progress</div><div class="hud-num" id="hud-progress">0 / 7</div></div>
      <div class="hud-box"><div class="hud-label">Score</div><div class="hud-num" id="hud-score">0</div></div>
      <div class="hud-box"><div class="hud-label">Best Score</div><div class="hud-num" id="hud-best">--</div></div>
    </div>

    <div class="rpg-layer-bar">
      <div class="layer-pip" data-layer="1">Physical</div>
      <div class="layer-pip" data-layer="2">Data Link</div>
      <div class="layer-pip" data-layer="3">Network</div>
      <div class="layer-pip" data-layer="4">Transport</div>
      <div class="layer-pip" data-layer="5">Session</div>
      <div class="layer-pip" data-layer="6">Presentation</div>
      <div class="layer-pip" data-layer="7">Application</div>
    </div>

    <div id="game-container">
      <canvas id="game-canvas"></canvas>
    </div>

    <div class="rpg-controls">
      <button class="rpg-btn" id="restart-btn" type="button">Restart Quest</button>
      <button class="rpg-btn alt" id="help-btn" type="button">Show Controls</button>
    </div>

    <div class="rpg-help" id="rpg-help">
      <strong>Controls:</strong> WASD to move | E to interact with NPCs | Walk into layer zones to learn about each OSI layer
    </div>
  </div>
</div>

<script type="module">
// GAME_RUNNER: OSI Layers Quest - Learn the 7 layers of networking with RPG gameplay | hide_edit: true

import Game from '/assets/js/GameEnginev1.1/essentials/Game.js';
import GameControl from '/assets/js/GameEnginev1.1/essentials/GameControl.js';
import GameEnvBackground from '/assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1.1/essentials/Player.js';
import NPC from '/assets/js/GameEnginev1.1/essentials/Npc.js';
import AiNpc from '/assets/js/GameEnginev1.1/essentials/AiNpc.js';
import Leaderboard from '/assets/js/GameEnginev1.1/Leaderboard.js';

class OSILayersLevel {
  constructor(gameEnv) {
    const path = gameEnv.path;
    const width = gameEnv.innerWidth;
    const height = gameEnv.innerHeight;

    // Background - Library themed with OSI layers
    const bgData = {
      name: 'osi_library_bg',
      src: path + "/images/gamify/forest.png",
      pixels: {height: 250, width: 315}
    };

    // Player character
    const SCALE_FACTOR = 5;
    const playerData = {
      id: 'NetworkExplorer',
      greeting: "Hi I am the Network Explorer! I'm here to learn about the OSI layers.",
      src: path + "/images/gamify/chillguy.png",
      SCALE_FACTOR: SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height - (height/SCALE_FACTOR) },
      pixels: { height: 512, width: 384 },
      orientation: { rows: 4, columns: 3 },
      down: { row: 0, start: 0, columns: 3 },
      downRight: { row: 1, start: 0, columns: 3, rotate: Math.PI / 16 },
      downLeft: { row: 2, start: 0, columns: 3, rotate: -Math.PI / 16 },
      right: { row: 1, start: 0, columns: 3 },
      left: { row: 2, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      upRight: { row: 1, start: 0, columns: 3, rotate: -Math.PI / 16 },
      upLeft: { row: 2, start: 0, columns: 3, rotate: Math.PI / 16 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    // Layer 7: Application Layer NPC
    const applicationLayer = {
      id: 'Application Layer',
      greeting: 'Layer 7 - APPLICATION LAYER: This is where network applications and their protocols operate. It provides services directly to user applications like web browsers (HTTP/HTTPS), email clients (SMTP/IMAP), and file transfer (FTP). This is the layer closest to YOU, the end user!',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * 0.06, y: height * 0.46 },
      pixels: { width: 50, height: 100 },
      fillStyle: 'rgba(239,68,68,0.3)',
      hitbox: { widthPercentage: 0.12, heightPercentage: 0.4 },
      reaction: function() {
        if (this.dialogueSystem) {
          this.showReactionDialogue();
          window.updateLayerProgress(7);
        } else {
          console.log(this.greeting);
        }
      },
      interact: function() {
        if (this.dialogueSystem) {
          this.showRandomDialogue();
          window.updateLayerProgress(7);
        }
      }
    };

    // Layer 6: Presentation Layer NPC
    const presentationLayer = {
      id: 'Presentation Layer',
      greeting: 'Layer 6 - PRESENTATION LAYER: This layer is the translator of the network! It handles data encryption (SSL/TLS), compression, and format conversion. When you see the padlock icon in your browser, that\'s this layer encrypting your data with HTTPS!',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * 0.20, y: height * 0.46 },
      pixels: { width: 50, height: 100 },
      fillStyle: 'rgba(249,115,22,0.3)',
      hitbox: { widthPercentage: 0.12, heightPercentage: 0.4 },
      reaction: function() {
        if (this.dialogueSystem) {
          this.showReactionDialogue();
          window.updateLayerProgress(6);
        } else {
          console.log(this.greeting);
        }
      },
      interact: function() {
        if (this.dialogueSystem) {
          this.showRandomDialogue();
          window.updateLayerProgress(6);
        }
      }
    };

    // Layer 5: Session Layer NPC
    const sessionLayer = {
      id: 'Session Layer',
      greeting: 'Layer 5 - SESSION LAYER: I manage conversations between computers! I establish, maintain, and terminate connections. Think of me as the operator who connects your phone call and keeps track of who\'s talking to whom. NetBIOS and RPC live here!',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * 0.34, y: height * 0.46 },
      pixels: { width: 50, height: 100 },
      fillStyle: 'rgba(234,179,8,0.3)',
      hitbox: { widthPercentage: 0.12, heightPercentage: 0.4 },
      reaction: function() {
        if (this.dialogueSystem) {
          this.showReactionDialogue();
          window.updateLayerProgress(5);
        } else {
          console.log(this.greeting);
        }
      },
      interact: function() {
        if (this.dialogueSystem) {
          this.showRandomDialogue();
          window.updateLayerProgress(5);
        }
      }
    };

    // Layer 4: Transport Layer NPC
    const transportLayer = {
      id: 'Transport Layer',
      greeting: 'Layer 4 - TRANSPORT LAYER: I ensure reliable data delivery! TCP (Transmission Control Protocol) guarantees your data arrives in order and error-free. UDP (User Datagram Protocol) is faster but less reliable - great for video streaming! Port numbers live here (like port 80 for HTTP, 443 for HTTPS).',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * 0.48, y: height * 0.46 },
      pixels: { width: 50, height: 100 },
      fillStyle: 'rgba(34,197,94,0.3)',
      hitbox: { widthPercentage: 0.12, heightPercentage: 0.4 },
      reaction: function() {
        if (this.dialogueSystem) {
          this.showReactionDialogue();
          window.updateLayerProgress(4);
        } else {
          console.log(this.greeting);
        }
      },
      interact: function() {
        if (this.dialogueSystem) {
          this.showRandomDialogue();
          window.updateLayerProgress(4);
        }
      }
    };

    // Layer 3: Network Layer NPC
    const networkLayer = {
      id: 'Network Layer',
      greeting: 'Layer 3 - NETWORK LAYER: I\'m the GPS of the network! I handle logical addressing (IP addresses) and routing. Routers operate at this layer, deciding the best path for your data packets to travel across the internet. IPv4 (like 192.168.1.1) and IPv6 live here!',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * 0.62, y: height * 0.46 },
      pixels: { width: 50, height: 100 },
      fillStyle: 'rgba(6,182,212,0.3)',
      hitbox: { widthPercentage: 0.12, heightPercentage: 0.4 },
      reaction: function() {
        if (this.dialogueSystem) {
          this.showReactionDialogue();
          window.updateLayerProgress(3);
        } else {
          console.log(this.greeting);
        }
      },
      interact: function() {
        if (this.dialogueSystem) {
          this.showRandomDialogue();
          window.updateLayerProgress(3);
        }
      }
    };

    // Layer 2: Data Link Layer NPC
    const dataLinkLayer = {
      id: 'Data Link Layer',
      greeting: 'Layer 2 - DATA LINK LAYER: I package bits into frames and handle MAC addresses! Every network device has a unique MAC address (like AA:BB:CC:DD:EE:FF). Switches and Network Interface Cards (NICs) operate here. I also detect and sometimes correct errors from the Physical Layer!',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * 0.76, y: height * 0.46 },
      pixels: { width: 50, height: 100 },
      fillStyle: 'rgba(59,130,246,0.3)',
      hitbox: { widthPercentage: 0.12, heightPercentage: 0.4 },
      reaction: function() {
        if (this.dialogueSystem) {
          this.showReactionDialogue();
          window.updateLayerProgress(2);
        } else {
          console.log(this.greeting);
        }
      },
      interact: function() {
        if (this.dialogueSystem) {
          this.showRandomDialogue();
          window.updateLayerProgress(2);
        }
      }
    };

    // Layer 1: Physical Layer NPC
    const physicalLayer = {
      id: 'Physical Layer',
      greeting: 'Layer 1 - PHYSICAL LAYER: I\'m the foundation of all networking! I deal with raw bits (1s and 0s) traveling through physical media: Ethernet cables, fiber optic cables, Wi-Fi radio waves, Bluetooth signals. Hubs, repeaters, and the actual cables are my domain!',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * 0.90, y: height * 0.46 },
      pixels: { width: 50, height: 100 },
      fillStyle: 'rgba(139,92,246,0.3)',
      hitbox: { widthPercentage: 0.12, heightPercentage: 0.4 },
      reaction: function() {
        if (this.dialogueSystem) {
          this.showReactionDialogue();
          window.updateLayerProgress(1);
        } else {
          console.log(this.greeting);
        }
      },
      interact: function() {
        if (this.dialogueSystem) {
          this.showRandomDialogue();
          window.updateLayerProgress(1);
        }
      }
    };

    // The Librarian - AI-powered guide
    const librarian_src = "/FOTPL/librarian12.png";
    const librarian_greeting = "Welcome to the Library of Networking Knowledge! I am the Librarian, your guide through the seven sacred layers of the OSI Model.";

    const librarianNPC = {
      id: "The Librarian",
      greeting: librarian_greeting,
      src: librarian_src,
      SCALE_FACTOR: 4,
      ANIMATION_RATE: 10,
      pixels: { height: 215, width: 234 },
      INIT_POSITION: { x: width * 0.47, y: height * 0.02 },
      orientation: { rows: 1, columns: 1 },
      down: { row: 0, start: 0, columns: 1 },
      hitbox: { widthPercentage: 0.25, heightPercentage: 0.3 },
      expertise: "networking",
      chatHistory: [],
      dialogues: [
        "Welcome, Network Traveler! Walk into each colored zone to learn about the OSI layers.",
        "Remember: Please Do Not Throw Sausage Pizza Away! (Physical, Data Link, Network, Transport, Session, Presentation, Application)",
        "The OSI Model has 7 layers. Each layer has a specific job in transmitting data across networks.",
        "Ask me anything about networking! I know about TCP/IP, DNS, HTTP, routers, switches, and more!",
        "Layer 1-4 are the 'lower layers' focused on data transport. Layers 5-7 are 'upper layers' focused on applications.",
        "Fun fact: The OSI model was created in 1984 by the International Organization for Standardization (ISO)!",
        "TCP/IP is another model with just 4 layers: Network Access, Internet, Transport, and Application."
      ],
      knowledgeBase: {
        networking: [
          {
            question: "What is the difference between TCP and UDP?",
            answer: "TCP (Transmission Control Protocol) is connection-oriented and guarantees delivery with error checking. UDP (User Datagram Protocol) is connectionless and faster but doesn't guarantee delivery - great for streaming and gaming!"
          },
          {
            question: "What is a MAC address?",
            answer: "A MAC (Media Access Control) address is a unique hardware identifier assigned to network interface cards. It's 48 bits long, written as six pairs of hexadecimal digits (e.g., AA:BB:CC:DD:EE:FF). It operates at Layer 2."
          },
          {
            question: "What is DNS?",
            answer: "DNS (Domain Name System) translates human-readable domain names (like google.com) into IP addresses (like 142.250.80.46). It operates at Layer 7 (Application) and uses port 53."
          },
          {
            question: "What is the difference between a router and a switch?",
            answer: "A switch operates at Layer 2 (Data Link) using MAC addresses to forward frames within a local network. A router operates at Layer 3 (Network) using IP addresses to route packets between different networks."
          },
          {
            question: "What is HTTPS?",
            answer: "HTTPS (HTTP Secure) is HTTP with encryption via TLS/SSL. It operates at Layer 7 (Application) but uses Layer 6 (Presentation) for encryption. It typically uses port 443."
          },
          {
            question: "What are the 7 layers of the OSI model?",
            answer: "From bottom to top: 1) Physical, 2) Data Link, 3) Network, 4) Transport, 5) Session, 6) Presentation, 7) Application. Remember: Please Do Not Throw Sausage Pizza Away!"
          }
        ]
      },
      reaction: function() {
        if (this.dialogueSystem) {
          this.showReactionDialogue();
        } else {
          console.log(librarian_greeting);
        }
      },
      interact: function() {
        AiNpc.showInteraction(this);
      }
    };

    // Assemble all game classes
    this.classes = [
      { class: GameEnvBackground, data: bgData },
      { class: Player, data: playerData },
      { class: NPC, data: applicationLayer },
      { class: NPC, data: presentationLayer },
      { class: NPC, data: sessionLayer },
      { class: NPC, data: transportLayer },
      { class: NPC, data: networkLayer },
      { class: NPC, data: dataLinkLayer },
      { class: NPC, data: physicalLayer },
      { class: NPC, data: librarianNPC },
    ];
  }
}

const gameLevelClasses = [OSILayersLevel];

// Initialize the game engine
const environment = {
  path: '',
  gameContainer: document.getElementById('game-container'),
  gameCanvas: document.getElementById('game-canvas'),
  gameLevelClasses: gameLevelClasses,
  disablePauseMenu: true
};

const game = Game.main(environment, GameControl);

// Progress tracking
window.osiProgress = {
  completedLayers: new Set(),
  score: 0,
  bestScore: parseInt(localStorage.getItem('fopl_osi_quest_best') || '0')
};

window.updateLayerProgress = function(layerNum) {
  if (!window.osiProgress.completedLayers.has(layerNum)) {
    window.osiProgress.completedLayers.add(layerNum);
    window.osiProgress.score += 100;

    // Update HUD
    document.getElementById('hud-progress').textContent = `${window.osiProgress.completedLayers.size} / 7`;
    document.getElementById('hud-score').textContent = window.osiProgress.score;
    document.getElementById('hud-layer').textContent = ['Physical', 'Data Link', 'Network', 'Transport', 'Session', 'Presentation', 'Application'][layerNum - 1];

    // Update layer bar
    const pip = document.querySelector(`.layer-pip[data-layer="${layerNum}"]`);
    if (pip) {
      pip.classList.add('completed');
    }

    // Check for completion
    if (window.osiProgress.completedLayers.size === 7) {
      if (window.osiProgress.score > window.osiProgress.bestScore) {
        window.osiProgress.bestScore = window.osiProgress.score;
        localStorage.setItem('fopl_osi_quest_best', window.osiProgress.score);
        document.getElementById('hud-best').textContent = window.osiProgress.score;
      }
      setTimeout(() => {
        alert('Congratulations! You have mastered all 7 layers of the OSI Model! You are now a Network Master!');
      }, 500);
    }
  }
};

// Initialize HUD
document.getElementById('hud-best').textContent = window.osiProgress.bestScore || '--';

// Restart button
document.getElementById('restart-btn').addEventListener('click', () => {
  window.osiProgress.completedLayers.clear();
  window.osiProgress.score = 0;
  document.getElementById('hud-progress').textContent = '0 / 7';
  document.getElementById('hud-score').textContent = '0';
  document.getElementById('hud-layer').textContent = 'Lobby';
  document.querySelectorAll('.layer-pip').forEach(pip => pip.classList.remove('completed', 'active'));
  location.reload();
});

// Help toggle
document.getElementById('help-btn').addEventListener('click', () => {
  const help = document.getElementById('rpg-help');
  help.style.display = help.style.display === 'none' ? 'block' : 'none';
});
</script>
