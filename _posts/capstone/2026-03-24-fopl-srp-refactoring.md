---
layout: post
title: SRP Refactoring — FOPL Frontend
description: Applying the Single Responsibility Principle across the Friends of the Poway Library frontend — extracting duplicated nav, footer, styles, and shared JS from 13 pages into four shared files.
permalink: /capstone/fopl-srp
---

# Single Responsibility Principle (SRP) Refactoring
Every function, class, or module should have **one reason to change**. We applied SRP across the FOPL frontend by extracting copy-pasted nav, footer, CSS, and JS that was duplicated in every page file into four dedicated shared files — without changing any visual appearance or behavior.

---

## Overview: What Changed

| File | Type | Changes |
|------|------|---------|
| `_includes/fopl-nav.html` | HTML Include (NEW) | Shared nav extracted from all pages |
| `_includes/fopl-footer.html` | HTML Include (NEW) | Shared footer extracted from all pages |
| `assets/css/fopl-shared.css` | Stylesheet (NEW) | All shared styles in one file |
| `assets/js/fopl-shared.js` | JavaScript (NEW) | Auth dropdown, backend URL, game helpers |
| `_layouts/fopl.html` | Layout | Updated to include all shared files |
| 13 page `.md` files | Pages | ~1,543 lines of duplicated code removed |

---

## The Problem: 13 Pages, All Identical Chrome

Every single FOPL page (`home.md`, `catalog.md`, `history.md`, `puzzles.md`, etc.) contained the full nav bar HTML, the footer HTML, all nav/footer CSS, the auth dropdown CSS, the Google Fonts import, and the auth dropdown JavaScript — copy-pasted identically. A change to the nav (adding a link, fixing a color, updating the auth logic) required editing every file individually.

**BEFORE** — a snippet of what lived at the top of *every* page's `<style>` block:

```css
/* Duplicated in home.md, catalog.md, history.md, puzzles.md ... */
@import url('https://fonts.googleapis.com/css2?family=Cabin:...');

*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: 'Lato', sans-serif; }

.fopl-nav {
  background: #023b0f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  flex-wrap: wrap;
}
.fopl-nav-links { display: flex; list-style: none; margin: 0; padding: 0; }
.fopl-nav-links li a {
  display: block; color: #fff; text-decoration: none;
  font-family: 'Cabin', sans-serif; font-size: 0.95rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.04em;
  padding: 18px 20px; transition: background 0.2s;
}
/* ... nav dropdown CSS, auth pill CSS, footer CSS ...
   ~60 lines of identical CSS in every single file */
```

And the same nav HTML was also copy-pasted into every page's body:

```html
<!-- Duplicated nav HTML in every page -->
<nav class="fopl-nav">
  <div class="fopl-logo-wrap">
    <img src="/FOTPL/fopllogo.png" alt="Friends of the Poway Library" />
  </div>
  <ul class="fopl-nav-links">
    <li><a href="/home">Home</a></li>
    <li><a href="/history">History</a></li>
    <li><a href="/catalog">Catalog</a></li>
    <!-- ... more links ... -->
    <li id="nav-auth-item"><a href="/login" id="nav-auth-link">Sign In</a>
      <ul class="fopl-nav-dropdown" id="nav-auth-dropdown">
        <li><a href="/profile">Profile</a></li>
        <li><a href="#" id="nav-signout-btn">Sign Out</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

Along with ~50 lines of auth dropdown JavaScript at the bottom of every page. In total, **~118 lines of identical code appeared in all 13 pages**.

---

## File 1: Shared Nav (`_includes/fopl-nav.html`) — NEW

### Problem: Nav HTML was copy-pasted into all 13 pages

The nav bar had one job — render site navigation. But it lived inside every page file, meaning page content and nav structure had the same reason to change. Adding a new nav link required editing 13 files.

**BEFORE** — nav HTML duplicated inside each page's body:

```html
<!-- In home.md, catalog.md, history.md, puzzles.md ... (all 13 pages) -->
<nav class="fopl-nav">
  <div class="fopl-logo-wrap">
    <img src="/FOTPL/fopllogo.png" alt="Friends of the Poway Library" />
  </div>
  <ul class="fopl-nav-links">
    <li><a href="/home">Home</a></li>
    <li><a href="/history">History</a></li>
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/bookstore">Bookstore</a></li>
    <li><a href="/news">Newsletters</a></li>
    <li><a href="/puzzles">Puzzles</a></li>
    <li><a href="/contact">Contact Us</a></li>
    <li id="nav-auth-item"><a href="/login" id="nav-auth-link">Sign In</a>
      <ul class="fopl-nav-dropdown" id="nav-auth-dropdown">
        <li><a href="/profile">Profile</a></li>
        <li><a href="#" id="nav-signout-btn">Sign Out</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

**AFTER** — `_includes/fopl-nav.html` is the single source of truth for nav HTML:

```html
<nav class="fopl-nav">
  <div class="fopl-logo-wrap">
    <img src="{{ '/FOTPL/fopllogo.png' | relative_url }}"
         alt="Friends of the Poway Library" />
  </div>
  <ul class="fopl-nav-links">
    <li{% if page.fopl_nav_active == 'home' %} class="active"{% endif %}><a href="/home">Home</a></li>
    <li{% if page.fopl_nav_active == 'history' %} class="active"{% endif %}><a href="/history">History</a></li>
    {% if page.fopl_nav_active == 'catalog' %}<li class="active"><a href="/catalog">Catalog</a></li>{% endif %}
    <li{% if page.fopl_nav_active == 'bookstore' %} class="active"{% endif %}><a href="/bookstore">Bookstore</a></li>
    <li{% if page.fopl_nav_active == 'news' %} class="active"{% endif %}><a href="/news">Newsletters</a></li>
    <li{% if page.fopl_nav_active == 'puzzles' %} class="active"{% endif %}><a href="/puzzles">Puzzles</a></li>
    <li{% if page.fopl_nav_active == 'contact' %} class="active"{% endif %}><a href="/contact">Contact Us</a></li>
    <li id="nav-auth-item"><a href="/login" id="nav-auth-link">Sign In</a>
      <ul class="fopl-nav-dropdown" id="nav-auth-dropdown">
        <li><a href="/profile">Profile</a></li>
        <li><a href="#" id="nav-signout-btn">Sign Out</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

Each page now sets `fopl_nav_active: home` (or `history`, `catalog`, etc.) in its front matter — the include handles the `active` class automatically. Each page only describes what it is, not how the nav works.

**Why this is better:** Adding or renaming a nav link is now one edit in one file. Pages no longer have any reason to change when the nav structure changes.

---

## File 2: Shared Footer (`_includes/fopl-footer.html`) — NEW

### Problem: Footer HTML was copy-pasted into all 13 pages

The footer is site-wide chrome — it has nothing to do with any individual page's content. Yet it lived inside every page file.

**BEFORE** — footer HTML duplicated in every page:

```html
<!-- Repeated in every .md page -->
<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>
```

**AFTER** — `_includes/fopl-footer.html` holds it once:

```html
<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>
```

Included automatically by `_layouts/fopl.html` — pages don't even need to think about it.

**Why this is better:** Updating the copyright year or adding a footer link is a single-file change with zero risk of missing a page.

---

## File 3: Shared Styles (`assets/css/fopl-shared.css`) — NEW

### Problem: ~60 lines of nav/footer CSS were copy-pasted into every page

Every page's `<style>` block started with the same Google Fonts import, the same nav layout rules, the same auth pill styles, the same footer styles, and the same responsive breakpoints. CSS that controls the nav had no business living inside a page about book puzzles.

**BEFORE** — the same ~60-line CSS block duplicated across all 13 pages:

```css
/* This block appeared inside <style> in EVERY page */
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: 'Lato', sans-serif; }

.fopl-nav { background: #023b0f; display: flex; ... }
.fopl-nav-links li a { color: #fff; font-family: 'Cabin', sans-serif; ... }
.fopl-nav-links li a:hover,
.fopl-nav-links li.active a { background: rgba(255,255,255,0.12); }

/* Nav dropdown */
.fopl-nav-dropdown { display: none; position: absolute; ... }
.fopl-nav-dropdown.open { display: block; }

/* Auth pill */
#nav-auth-item a#nav-auth-link {
  background: rgba(255,255,255,0.15);
  border: 1.5px solid rgba(255,255,255,0.45);
  border-radius: 20px; ...
}

/* Footer */
.fopl-footer { background: #023b0f; text-align: center; ... }

/* Responsive */
@media (max-width: 640px) {
  .fopl-nav { flex-direction: column; ... }
  .fopl-nav-links li a { padding: 12px 14px; ... }
}
```

**AFTER** — `assets/css/fopl-shared.css` is the single source of truth for all shared styles:

```css
/* ═══════════════════════════════════════════
   FOPL shared styles — nav, footer, auth pill
   Single source of truth for site-wide chrome
   ═══════════════════════════════════════════ */

@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: 'Lato', sans-serif; }

/* ── Nav bar ── */
.fopl-nav { background: #023b0f; display: flex; align-items: center; ... }
.fopl-nav-links li a { color: #fff; font-family: 'Cabin', sans-serif; ... }
.fopl-nav-links li a:hover,
.fopl-nav-links li.active a { background: rgba(255,255,255,0.12); }

/* ── Nav dropdown ── */
.fopl-nav-dropdown { display: none; position: absolute; top: 100%; right: 0; ... }
.fopl-nav-dropdown.open { display: block; }

/* ── Auth nav pill ── */
#nav-auth-item a#nav-auth-link { background: rgba(255,255,255,0.15); border-radius: 20px; ... }

/* ── Footer ── */
.fopl-footer { background: #023b0f; text-align: center; padding: 22px 20px; ... }

/* ── Responsive nav ── */
@media (max-width: 640px) {
  .fopl-nav { flex-direction: column; ... }
  .fopl-nav-links li a { padding: 12px 14px; font-size: 0.85rem; }
}
```

Loaded once via `_layouts/fopl.html` — pages only define their own page-specific styles.

**Why this is better:** Changing the nav color, fixing a font size, or adding a hover effect is one edit in one file. Before this change, every CSS fix had to be applied to all 13 pages manually.

---

## File 4: Shared JavaScript (`assets/js/fopl-shared.js`) — NEW

### Problem: Auth dropdown JS was copy-pasted into every page; game helpers had no shared home

Every page ran the same 50-line auth nav dropdown setup (reading `fopl_user` from localStorage, toggling the dropdown, handling sign-out). The backend URL (`http://127.0.0.1:8587`) was also hardcoded individually in every page that made API calls. Game pages each reimplemented their own day-ID and progress-tracking logic.

**BEFORE** — identical auth script block at the bottom of all 13 pages:

```js
// This ~50-line block was copy-pasted into EVERY page
(function() {
  var foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  var authItem = document.getElementById('nav-auth-item');
  var authLink = document.getElementById('nav-auth-link');
  var dropdown = document.getElementById('nav-auth-dropdown');
  var signoutBtn = document.getElementById('nav-signout-btn');

  if (foplUser && authLink) {
    authItem.classList.add('fopl-nav-has-dropdown');
    authLink.textContent = foplUser.name.split(' ')[0];
    authLink.href = '#';
    authLink.onclick = function(e) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    };
    document.addEventListener('click', function(e) {
      if (!authItem.contains(e.target)) dropdown.classList.remove('open');
    });
    signoutBtn.onclick = async function(e) {
      e.preventDefault();
      await fetch('http://127.0.0.1:8587/api/fopl/login', { // hardcoded in every page
        method: 'DELETE', credentials: 'include'
      }).catch(function() {});
      localStorage.removeItem('fopl_user');
      window.location.href = '/home';
    };
  }
})();
```

**AFTER** — `assets/js/fopl-shared.js` owns all shared JS in clearly separated sections:

```js
/* ═══════════════════════════════════════════
   FOPL shared JavaScript
   Auth nav dropdown, backend URL, game helpers
   ═══════════════════════════════════════════ */

// Shared backend URL — single source of truth
window.FOPL_BACKEND = 'http://127.0.0.1:8587';

// ── Auth nav dropdown (runs on every page) ──
(function initAuthNav() {
  var foplUser = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  // ... same logic, but references window.FOPL_BACKEND instead of a hardcoded URL
})();

// ── Day-ID helper (shared across all daily games) ──
window.foplGetDayId = function() {
  var epoch = new Date('2024-01-01T00:00:00');
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return String(Math.floor((today - epoch) / 86400000));
};

// ── Overall game-progress tracker (shared across all games) ──
window.foplAddOverallProgress = function(game, points, won) {
  var overall = JSON.parse(
    localStorage.getItem('fopl_games_overall_v1') || '{"xp":0,"sessions":0,"wins":0,"byGame":{}}'
  );
  overall.xp = Number(overall.xp || 0) + Math.max(0, Number(points || 0));
  // ... updates wins, sessions, byGame breakdown ...
  localStorage.setItem('fopl_games_overall_v1', JSON.stringify(overall));
};

// ── Post puzzle result to backend (shared across all games) ──
window.foplPostResult = async function(game, won, guesses) {
  var user = JSON.parse(localStorage.getItem('fopl_user') || 'null');
  if (!user) return;
  await fetch(window.FOPL_BACKEND + '/api/fopl/puzzle/stats', {
    method: 'POST', credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ game, won: !!won, guesses })
  });
};
```

Game pages now call `window.foplGetDayId()`, `window.foplAddOverallProgress()`, and `window.foplPostResult()` instead of reimplementing them.

**Why this is better:** Changing the backend URL is one line. Fixing a sign-out bug is one edit in one file. Adding a new shared game helper has a clear home — it doesn't belong in any single game page.

---

## File 5: Layout (`_layouts/fopl.html`) — UPDATED

### Problem: The layout didn't include any shared resources

The layout rendered page content but left every page responsible for loading its own fonts, nav, footer, and scripts.

**BEFORE** — `_layouts/fopl.html` only injected `{{ content }}`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>{{ page.title | default: site.title }}</title>
  <meta name="description" content="{{ page.description | default: site.description }}">
  <link rel="icon" type="image/png" href="{{ '/FOTPL/fopllogo.png' | relative_url }}">
  <!-- no shared CSS -->
</head>
<body style="margin:0;padding:0;">
  {{ content }}
  <!-- no nav, no footer, no shared JS -->
</body>
</html>
```

**AFTER** — the layout is the single place that wires everything together:

```html
<!DOCTYPE html>
<html>
<head>
  <title>{{ page.title | default: site.title }}</title>
  <meta name="description" content="{{ page.description | default: site.description }}">
  <link rel="icon" type="image/png" href="{{ '/FOTPL/fopllogo.png' | relative_url }}">
  <link rel="stylesheet" href="{{ '/assets/css/fopl-shared.css' | relative_url }}">
</head>
<body style="margin:0;padding:0;">
  {% include fopl-nav.html %}
  {{ content }}
  {% include fopl-footer.html %}
  <script src="{{ '/assets/js/fopl-shared.js' | relative_url }}"></script>
</body>
</html>
```

Pages set `layout: fopl` and get nav + footer + shared styles + shared JS automatically.

**Why this is better:** The layout's one job is page assembly. Adding a new shared resource (e.g., a new analytics script) to all pages is now a single line in `_layouts/fopl.html`.

---

## Key Takeaways

- **Zero visual changes** — every page looks and behaves identically after the refactor
- **1,543 lines removed** across 13 page files — all of it duplicated code
- **4 shared files added** — each with exactly one job: nav HTML, footer HTML, shared CSS, shared JS
- **Pages now only contain page content** — no nav, no footer, no shared styles, no auth logic
- **One change = one file** — updating the nav, fixing a font, or changing the backend URL now requires editing exactly one file instead of all 13

---

## Files Changed Summary

| File Path | Lines Before | Lines After | Notes |
|-----------|-------------|-------------|-------|
| `_includes/fopl-nav.html` | — | 21 | NEW — shared nav HTML |
| `_includes/fopl-footer.html` | — | 4 | NEW — shared footer HTML |
| `assets/css/fopl-shared.css` | — | 136 | NEW — all shared styles |
| `assets/js/fopl-shared.js` | — | 79 | NEW — auth dropdown, backend URL, game helpers |
| `_layouts/fopl.html` | 11 | 15 | +shared CSS link, nav include, footer include, JS script |
| 13 × `FOTPL/*.md` pages | ~118 ea. | page-only | ~1,543 lines of duplicated chrome removed |
