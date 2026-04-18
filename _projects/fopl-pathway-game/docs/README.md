---
layout: post
title: FOPL Pathway Game - Overview
description: Documentation for the Friends of the Poway Library interactive library tour game
category: Projects
breadcrumb: true
permalink: /fopl-pathway-game/overview
---

## About

An interactive game tour of the Friends of the Poway Library, built on the GameEnginev1.1 framework. Players explore two levels — the outdoor library entrance and the cozy indoor reading room — meeting the librarian and a volunteer along the way.

## Directory Structure

```text
_projects/fopl-pathway-game/
├── notebook.src.ipynb      ← Game entry point (Jekyll page at /fopl-pathway-game)
├── levels/
│   ├── GameLevelFopl0Welcome.js   ← Level 0: Outdoor library entrance
│   └── GameLevelFopl1Library.js   ← Level 1: Cozy library interior
├── images/
│   ├── foplbg/
│   │   ├── outdoor23.png   ← Outdoor library background
│   │   └── cozyyy.png      ← Indoor cozy reading room background
│   ├── npc/
│   │   ├── librariannn.png ← Librarian NPC sprite
│   │   └── volunteer21.png ← Volunteer NPC sprite
│   └── player/
│       └── sprittteee.png  ← Player sprite
├── docs/
│   └── README.md
└── Makefile
```

## Build + Dev Workflow

```bash
make dev
```

Or build this project specifically:

```bash
make -C _projects/fopl-pathway-game build
make -C _projects/fopl-pathway-game docs
```

## Game Levels

### Level 0 — Library Welcome (`GameLevelFopl0Welcome.js`)

- **Background:** `outdoor23.png` — the library exterior
- **Player:** `sprittteee.png`
- **NPC:** Ms. Rivera the Librarian (`librariannn.png`)
- **Flow:** Librarian greets player, introduces FOPL, directs them inside

### Level 1 — Cozy Library (`GameLevelFopl1Library.js`)

- **Background:** `cozyyy.png` — the cozy reading room
- **Player:** `sprittteee.png`
- **NPCs:** Alex the Volunteer (`volunteer21.png`) + Ms. Rivera (`librariannn.png`)
- **Flow:** Volunteer shares info about the bookstore, donations, and volunteering

## Path Guidance

Use runtime absolute paths in level code:

```javascript
import GameLevelFopl0Welcome from '/assets/js/projects/fopl-pathway-game/levels/GameLevelFopl0Welcome.js';

const bg = path + '/images/projects/fopl-pathway-game/foplbg/cozyyy.png';
```

## Registration

This project is registered in `_projects/.makeprojects` and participates in `make build-registered-projects`.

## Site Info

- **Address:** 13137 Poway Rd, Poway CA 92064
- **Phone:** 858-513-2862
- **Website:** https://powayfriends.org
