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
  <div class="cal-grid" id="cal-grid"></div>
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
  const ADMIN_EMAIL = 'admin@powayfriends.org';
  const COLORS = ['#023b0f','#1565c0','#6a1b9a','#e65100','#c62828','#2e7d32','#0277bd','#4527a0'];

  let calYear = null, calMonth = null, calEvents = [], calEditId = null, calSelectedColor = COLORS[0];

  function isAdmin() {
    const u = JSON.parse(localStorage.getItem('fopl_user') || 'null');
    return u && u.email === ADMIN_EMAIL;
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
      const dots = events.map(e => {
        const cls   = admin ? 'cal-event admin-event' : 'cal-event';
        const click = admin ? `onclick="calOpenEdit(${e.id})"` : '';
        return `<span class="${cls}" style="background:${e.color}" ${click} title="${e.title}">${e.title}</span>`;
      }).join('');
      html += `<div class="cal-cell${!cur?' other-month':''}${isToday?' today':''}">
        <div class="cal-day">${day}</div>${dots}
      </div>`;
    });

    grid.innerHTML = html;

    document.getElementById('cal-admin-bar').innerHTML = admin
      ? `<button class="cal-add-btn" onclick="calOpenNew()">+ Add Event</button>`
      : '';
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
      await fetch(url, { method, credentials: 'include',
        headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      calCloseModal();
      calLoad();
    } catch { alert('Could not save event.'); }
  };

  window.calDeleteEvent = async function() {
    if (!calEditId || !confirm('Delete this event?')) return;
    try {
      await fetch(`${API}/${calEditId}`, { method: 'DELETE', credentials: 'include' });
      calCloseModal();
      calLoad();
    } catch { alert('Could not delete event.'); }
  };

  document.getElementById('cal-prev').onclick = () => {
    if (--calMonth < 0) { calMonth = 11; calYear--; }
    calRender();
  };
  document.getElementById('cal-next').onclick = () => {
    if (++calMonth > 11) { calMonth = 0; calYear++; }
    calRender();
  };
  document.getElementById('cal-modal').addEventListener('click', function(e) {
    if (e.target === this) calCloseModal();
  });

  calLoad();
}
</script>
