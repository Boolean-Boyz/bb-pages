---
layout: fopl
title: Events Calendar
permalink: /calendar
description: Upcoming events at Friends of the Poway Library — Poway, CA.
fopl_nav_active: calendar
---

<style>
  body { background: #023b0f; }

  .fopl-cal-page {
    max-width: 860px;
    margin: 0 auto;
    padding: 52px 40px;
  }

  .fopl-cal-page h2 {
    font-family: 'Cabin', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff !important;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0 0 28px;
    border: none;
    text-align: center;
  }

  .cal-header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 12px;
  }
  .cal-title {
    font-family: 'Cabin', sans-serif; font-size: 1rem; font-weight: 700;
    color: #fff; text-transform: uppercase; letter-spacing: 0.05em;
  }
  .cal-nav {
    background: none; border: 1.5px solid rgba(255,255,255,0.6); color: #fff;
    border-radius: 4px; width: 32px; height: 32px; cursor: pointer;
    font-size: 1.1rem; display: flex; align-items: center; justify-content: center;
    transition: background 0.15s;
  }
  .cal-nav:hover { background: rgba(255,255,255,0.15); color: #fff; }
  .cal-grid {
    display: grid; grid-template-columns: repeat(7, 1fr);
    border: 1px solid #d8e8d8; border-radius: 6px; overflow: hidden;
  }
  .cal-dow {
    background: #023b0f; color: #fff; text-align: center;
    font-family: 'Cabin', sans-serif; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 0;
  }
  .cal-cell {
    min-height: 72px; padding: 6px 6px 4px; border-right: 1px solid #e4ede4;
    border-bottom: 1px solid #e4ede4; background: #fff; vertical-align: top;
  }
  .cal-cell:nth-child(7n) { border-right: none; }
  .cal-cell.other-month { background: #f7faf7; }
  .cal-cell.today { background: #eaf3ea; }
  .cal-day {
    font-size: 0.8rem; font-weight: 600; color: #333; line-height: 1; margin-bottom: 4px;
  }
  .cal-cell.today .cal-day {
    background: #023b0f; color: #fff; border-radius: 50%;
    width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;
  }
  .cal-event {
    display: block; font-size: 0.7rem; font-weight: 600; border-radius: 3px;
    padding: 1px 5px; margin-bottom: 2px; color: #fff; cursor: default;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .cal-event.admin-event { cursor: pointer; transition: opacity 0.15s; }
  .cal-event.admin-event:hover { opacity: 0.8; }
  .cal-add-btn {
    display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
    padding: 9px 20px; background: #fff; color: #023b0f; border: none;
    border-radius: 4px; font-family: 'Cabin', sans-serif; font-size: 0.85rem;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;
    cursor: pointer; transition: background 0.2s;
  }
  .cal-add-btn:hover { background: #e8f5eb; }

  .cal-modal-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(0,0,0,0.45); z-index: 2000;
    align-items: center; justify-content: center;
  }
  .cal-modal-overlay.open { display: flex; }
  .cal-modal {
    background: #fff; border-radius: 8px; padding: 28px 28px 24px;
    width: 360px; max-width: 94vw; box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  }
  .cal-modal h4 {
    font-family: 'Cabin', sans-serif; font-size: 1rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.04em; color: #023b0f; margin: 0 0 18px;
  }
  .cal-modal label {
    display: block; font-size: 0.8rem; font-weight: 700; color: #555;
    text-transform: uppercase; letter-spacing: 0.04em; margin: 12px 0 4px;
  }
  .cal-modal input, .cal-modal textarea {
    width: 100%; padding: 8px 10px; border: 1px solid #ccc; border-radius: 4px;
    font-family: 'Lato', sans-serif; font-size: 0.9rem; box-sizing: border-box;
  }
  .cal-modal textarea { resize: vertical; min-height: 60px; }
  .cal-modal-actions { display: flex; gap: 10px; margin-top: 20px; justify-content: flex-end; }
  .cal-modal-actions button {
    padding: 8px 20px; border: none; border-radius: 4px; cursor: pointer;
    font-family: 'Cabin', sans-serif; font-size: 0.85rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.04em;
  }
  .cal-btn-save   { background: #023b0f; color: #fff; }
  .cal-btn-save:hover { background: #045214; }
  .cal-btn-delete { background: #c62828; color: #fff; }
  .cal-btn-delete:hover { background: #b71c1c; }
  .cal-btn-cancel { background: #eee; color: #333; }
  .cal-btn-cancel:hover { background: #ddd; }
  .cal-color-row { display: flex; gap: 8px; margin-top: 6px; flex-wrap: wrap; }
  .cal-color-swatch {
    width: 24px; height: 24px; border-radius: 50%; cursor: pointer;
    border: 2px solid transparent; transition: border-color 0.15s;
  }
  .cal-color-swatch.selected { border-color: #333; }

  /* Day detail popover */
  .cal-cell { cursor: pointer; }
  .cal-cell:hover { background: #f0f7f0; }
  .cal-cell.today:hover { background: #ddeedd; }
  .cal-cell.other-month { cursor: default; }
  .cal-cell.other-month:hover { background: #f7faf7; }

  .cal-day-detail {
    display: none;
    position: absolute;
    z-index: 500;
    background: #fff;
    border: 1px solid #d8e8d8;
    border-radius: 8px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.15);
    padding: 14px 16px;
    min-width: 200px;
    max-width: 260px;
  }
  .cal-day-detail.open { display: block; }
  .cal-day-detail-date {
    font-family: 'Cabin', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #023b0f;
    margin-bottom: 8px;
  }
  .cal-day-detail-today-badge {
    display: inline-block;
    background: #023b0f;
    color: #fff;
    font-size: 0.62rem;
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 2px 8px;
    border-radius: 10px;
    margin-left: 6px;
    vertical-align: middle;
  }
  .cal-day-detail-event {
    font-size: 0.8rem;
    color: #fff;
    font-family: 'Lato', sans-serif;
    border-radius: 4px;
    padding: 4px 8px;
    margin-bottom: 4px;
  }
  .cal-day-detail-empty {
    font-size: 0.8rem;
    color: #999;
    font-family: 'Lato', sans-serif;
    font-style: italic;
  }
  .cal-day-detail-close {
    position: absolute;
    top: 8px; right: 10px;
    background: none; border: none; cursor: pointer;
    font-size: 1rem; color: #999; line-height: 1;
  }
  .cal-day-detail-close:hover { color: #333; }

  .cal-detail-admin-bar {
    display: flex;
    gap: 6px;
    margin-top: 10px;
    flex-wrap: wrap;
  }
  .cal-detail-admin-btn {
    padding: 5px 12px;
    border: none;
    border-radius: 4px;
    font-family: 'Cabin', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.15s;
  }
  .cal-detail-btn-add    { background: #023b0f; color: #fff; }
  .cal-detail-btn-add:hover { background: #045214; }
  .cal-detail-btn-edit   { background: #1565c0; color: #fff; }
  .cal-detail-btn-edit:hover { background: #1976d2; }
  .cal-detail-btn-remove { background: #c62828; color: #fff; }
  .cal-detail-btn-remove:hover { background: #b71c1c; }

  @media (max-width: 640px) {
    .fopl-cal-page { padding: 36px 18px; }
    .cal-cell { min-height: 52px; }
  }
</style>

<div class="fopl-cal-page">
  <h2>Upcoming Events</h2>
  <div class="cal-header">
    <button class="cal-nav" id="cal-prev">&#8249;</button>
    <div class="cal-title" id="cal-month-label"></div>
    <button class="cal-nav" id="cal-next">&#8250;</button>
  </div>
  <div style="position:relative;">
    <div class="cal-grid" id="cal-grid"></div>
    <div class="cal-day-detail" id="cal-day-detail">
      <button class="cal-day-detail-close" id="cal-detail-close">&#x2715;</button>
      <div class="cal-day-detail-date" id="cal-detail-date"></div>
      <div id="cal-detail-events"></div>
    </div>
  </div>
  <div id="cal-admin-bar"></div>
</div>

<div class="cal-modal-overlay" id="cal-modal">
  <div class="cal-modal">
    <h4 id="cal-modal-title">Add Event</h4>
    <label>Title *</label>
    <input type="text" id="cal-f-title" placeholder="Event title" />
    <label>Date *</label>
    <input type="date" id="cal-f-date" />
    <label>Description</label>
    <textarea id="cal-f-desc" placeholder="Optional details…"></textarea>
    <label>Color</label>
    <div class="cal-color-row" id="cal-color-row"></div>
    <div class="cal-modal-actions">
      <button class="cal-btn-delete" id="cal-btn-delete" style="display:none" onclick="calDeleteEvent()">Delete</button>
      <button class="cal-btn-cancel" onclick="calCloseModal()">Cancel</button>
      <button class="cal-btn-save" onclick="calSaveEvent()">Save</button>
    </div>
  </div>
</div>

<script>
{
  const API = window.FOPL_BACKEND + '/api/fopl/events';
  const COLORS = ['#023b0f','#1565c0','#6a1b9a','#e65100','#c62828','#2e7d32','#0277bd','#4527a0'];

  let calYear = null, calMonth = null, calEvents = [], calEditId = null, calSelectedColor = COLORS[0];

  function isAdmin() {
    const u = JSON.parse(localStorage.getItem('fopl_user') || 'null');
    return u && u.role === 'Admin';
  }

  async function calLoad() {
    try {
      const res = await fetch(API);
      calEvents = await res.json();
    } catch { calEvents = []; }
    calRender();
  }

  function calRender() {
    const now = new Date();
    if (calYear  == null) calYear  = now.getFullYear();
    if (calMonth == null) calMonth = now.getMonth();

    document.getElementById('cal-month-label').textContent =
      new Date(calYear, calMonth, 1).toLocaleString('default', { month: 'long', year: 'numeric' });

    const grid = document.getElementById('cal-grid');
    const dows = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let html = dows.map(d => `<div class="cal-dow">${d}</div>`).join('');

    const firstDay    = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const prevDays    = new Date(calYear, calMonth, 0).getDate();
    const todayStr    = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    const admin       = isAdmin();

    let cells = [];
    for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: prevDays - i, cur: false });
    for (let d = 1; d <= daysInMonth; d++)   cells.push({ day: d, cur: true });
    let next = 1;
    while (cells.length % 7 !== 0) cells.push({ day: next++, cur: false });

    cells.forEach(({ day, cur }) => {
      const dateStr = cur
        ? `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
        : '';
      const isToday = dateStr === todayStr;
      const events  = calEvents.filter(e => e.date === dateStr);
      const dots = events.map(e =>
        `<span class="cal-event" style="background:${e.color}" title="${e.title}">${e.title}</span>`
      ).join('');
      const dataDate = cur ? `data-date="${dateStr}"` : '';
      html += `<div class="cal-cell${!cur?' other-month':''}${isToday?' today':''}" ${dataDate}>
        <div class="cal-day">${day}</div>${dots}
      </div>`;
    });

    grid.innerHTML = html;

    // Wire up day-cell clicks
    grid.querySelectorAll('.cal-cell[data-date]').forEach(cell => {
      cell.addEventListener('click', () => calOpenDayDetail(cell));
    });

    // Auto-open today
    const todayCell = grid.querySelector('.cal-cell.today');
    if (todayCell) calOpenDayDetail(todayCell);

    document.getElementById('cal-admin-bar').innerHTML = '';
  }

  function calBuildSwatches(selected) {
    document.getElementById('cal-color-row').innerHTML = COLORS.map(c =>
      `<div class="cal-color-swatch${c===selected?' selected':''}"
            style="background:${c}" onclick="calPickColor('${c}')"></div>`
    ).join('');
    calSelectedColor = selected;
  }

  window.calPickColor = function(c) {
    calSelectedColor = c;
    document.querySelectorAll('.cal-color-swatch').forEach(el =>
      el.classList.toggle('selected', el.style.backgroundColor === c)
    );
  };

  window.calOpenNew = function() {
    calEditId = null;
    document.getElementById('cal-modal-title').textContent = 'Add Event';
    document.getElementById('cal-f-title').value = '';
    document.getElementById('cal-f-date').value  = '';
    document.getElementById('cal-f-desc').value  = '';
    document.getElementById('cal-btn-delete').style.display = 'none';
    calBuildSwatches(COLORS[0]);
    document.getElementById('cal-modal').classList.add('open');
  };

  window.calOpenEdit = function(id) {
    const ev = calEvents.find(e => e.id === id);
    if (!ev) return;
    calEditId = id;
    document.getElementById('cal-modal-title').textContent = 'Edit Event';
    document.getElementById('cal-f-title').value = ev.title;
    document.getElementById('cal-f-date').value  = ev.date;
    document.getElementById('cal-f-desc').value  = ev.description || '';
    document.getElementById('cal-btn-delete').style.display = '';
    calBuildSwatches(ev.color || COLORS[0]);
    document.getElementById('cal-modal').classList.add('open');
  };

  window.calCloseModal = function() {
    document.getElementById('cal-modal').classList.remove('open');
  };

  window.calSaveEvent = async function() {
    const body = {
      title:       document.getElementById('cal-f-title').value.trim(),
      date:        document.getElementById('cal-f-date').value,
      description: document.getElementById('cal-f-desc').value.trim(),
      color:       calSelectedColor,
    };
    if (!body.title || !body.date) { alert('Title and date are required.'); return; }
    const url    = calEditId ? `${API}/${calEditId}` : API;
    const method = calEditId ? 'PUT' : 'POST';
    try {
      const res = await fetch(url, { method, credentials: 'include',
        headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        if (res.status === 401) {
          if (confirm('Your session has expired. Log in again?')) window.location.href = '/login';
          return;
        }
        alert(`Save failed (${res.status}): ${err.message || res.statusText}`);
        return;
      }
      calCloseModal();
      calLoad();
    } catch(e) { alert('Could not save event: ' + e.message); }
  };

  window.calDeleteEvent = async function() {
    if (!calEditId || !confirm('Delete this event?')) return;
    try {
      await fetch(`${API}/${calEditId}`, { method: 'DELETE', credentials: 'include' });
      calCloseModal();
      calLoad();
    } catch { alert('Could not delete event.'); }
  };

  function calOpenDayDetail(cell) {
    const dateStr  = cell.dataset.date;
    const detail   = document.getElementById('cal-day-detail');
    const dateEl   = document.getElementById('cal-detail-date');
    const eventsEl = document.getElementById('cal-detail-events');
    const admin    = isAdmin();

    const now      = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    const isToday  = dateStr === todayStr;

    const d = new Date(dateStr + 'T12:00:00');
    const label = d.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric' });
    dateEl.innerHTML = label + (isToday ? '<span class="cal-day-detail-today-badge">Today</span>' : '');

    const dayEvents = calEvents.filter(e => e.date === dateStr);
    let eventsHtml = '';
    if (dayEvents.length) {
      eventsHtml = dayEvents.map(e => {
        const editBtn = admin
          ? `<button class="cal-detail-admin-btn cal-detail-btn-edit" onclick="calOpenEdit(${e.id})" style="margin-left:8px;padding:2px 8px;font-size:0.65rem;">Edit</button>
             <button class="cal-detail-admin-btn cal-detail-btn-remove" onclick="calQuickDelete(${e.id})" style="padding:2px 8px;font-size:0.65rem;">Remove</button>`
          : '';
        return `<div class="cal-day-detail-event" style="background:${e.color};display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:4px;">
          <span>${e.title}${e.description ? '<br><small style="opacity:0.85">'+e.description+'</small>' : ''}</span>
          <span style="display:flex;gap:4px;flex-shrink:0;">${editBtn}</span>
        </div>`;
      }).join('');
    } else {
      eventsHtml = '<div class="cal-day-detail-empty">No events</div>';
    }

    if (admin) {
      eventsHtml += `<div class="cal-detail-admin-bar">
        <button class="cal-detail-admin-btn cal-detail-btn-add" onclick="calOpenNewForDate('${dateStr}')">+ Add Event</button>
      </div>`;
    }
    eventsEl.innerHTML = eventsHtml;

    // Position below the clicked cell
    const gridRect = document.getElementById('cal-grid').getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();
    const top  = cellRect.bottom - gridRect.top + 6;
    const left = Math.min(cellRect.left - gridRect.left, gridRect.width - 272);
    detail.style.top  = top + 'px';
    detail.style.left = Math.max(0, left) + 'px';
    detail.classList.add('open');
  }

  window.calOpenNewForDate = function(dateStr) {
    calEditId = null;
    document.getElementById('cal-modal-title').textContent = 'Add Event';
    document.getElementById('cal-f-title').value = '';
    document.getElementById('cal-f-date').value  = dateStr;
    document.getElementById('cal-f-desc').value  = '';
    document.getElementById('cal-btn-delete').style.display = 'none';
    calBuildSwatches(COLORS[0]);
    document.getElementById('cal-modal').classList.add('open');
  };

  window.calQuickDelete = async function(id) {
    if (!confirm('Delete this event?')) return;
    try {
      const res = await fetch(`${API}/${id}`, { method: 'DELETE', credentials: 'include' });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        alert(`Delete failed (${res.status}): ${err.message || res.statusText}`);
        return;
      }
      document.getElementById('cal-day-detail').classList.remove('open');
      calLoad();
    } catch(e) { alert('Could not delete event: ' + e.message); }
  };

  document.getElementById('cal-detail-close').addEventListener('click', () => {
    document.getElementById('cal-day-detail').classList.remove('open');
  });

  document.getElementById('cal-prev').onclick = () => {
    if (--calMonth < 0) { calMonth = 11; calYear--; }
    document.getElementById('cal-day-detail').classList.remove('open');
    calRender();
  };
  document.getElementById('cal-next').onclick = () => {
    if (++calMonth > 11) { calMonth = 0; calYear++; }
    document.getElementById('cal-day-detail').classList.remove('open');
    calRender();
  };
  document.getElementById('cal-modal').addEventListener('click', function(e) {
    if (e.target === this) calCloseModal();
  });

  calLoad();
}
</script>
