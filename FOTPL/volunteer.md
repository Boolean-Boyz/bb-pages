---
layout: fopl
title: Volunteer — Friends of the Poway Library
permalink: /volunteer
description: Join the Friends of the Poway Library as a volunteer. Help run the bookstore, support events, and strengthen our community.
fopl_nav_active: volunteer
---

<style>
  body { 
    background: #0f1a12;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='5' result='noise' /%3E%3CfeColorMatrix in='noise' type='saturate' values='0' /%3E%3CfeBlend in='SourceGraphic' in2='noise' mode='screen' /%3E%3C/filter%3E%3C/defs%3E%3Crect width='100' height='100' fill='%230f1a12' opacity='0.96' filter='url(%23noise)' /%3E%3C/svg%3E");
  }

  /* ── Hero ── */
  .fopl-hero {
    background: linear-gradient(135deg, rgba(15, 26, 18, 0.95) 0%, rgba(50, 60, 45, 0.85) 100%);
    backdrop-filter: blur(10px);
    color: #fff; text-align: center; padding: 64px 24px 52px;
    border-bottom: 1px solid rgba(212, 168, 83, 0.15);
  }
  .fopl-hero h1 {
    font-family: 'Libre Baskerville', serif; font-size: 3rem; font-weight: 700;
    margin: 0 0 12px; color: #d4a853; border: none; text-transform: capitalize;
    letter-spacing: 0.01em; text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  .fopl-hero p { font-size: 1.05rem; color: rgba(224, 189, 112, 0.85); margin: 0 auto; max-width: 600px; line-height: 1.7; }

  /* ── Page wrapper ── */
  .vol-content {
    max-width: 1100px; margin: 0 auto; padding: 52px 40px;
  }

  /* ── Section label ── */
  .vol-section-label {
    font-family: 'Cabin', sans-serif; font-size: 0.75rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em; color: #d4a853;
    border-bottom: 2px solid #d4a853; padding-bottom: 8px; margin: 0 0 28px;
    display: block;
  }

  /* ── Why volunteer cards ── */
  .vol-why-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 56px;
  }
  .vol-why-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    padding: 28px 24px;
    transition: all 0.3s ease;
  }
  .vol-why-card:hover {
    border-color: rgba(212, 168, 83, 0.4);
    box-shadow: 0 12px 48px rgba(212, 168, 83, 0.15);
  }
  .vol-why-card h3 {
    font-family: 'Libre Baskerville', serif; font-size: 1.1rem; font-weight: 700;
    color: #e0bd70; text-transform: capitalize; letter-spacing: 0.01em;
    margin: 0 0 12px; border: none;
  }
  .vol-why-card p {
    font-size: 0.92rem; color: rgba(224, 189, 112, 0.85); line-height: 1.7; margin: 0;
  }

  /* ── Roles section ── */
  .vol-roles-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 56px;
  }
  .vol-role-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    padding: 28px 24px;
    transition: all 0.3s ease;
  }
  .vol-role-card:hover {
    border-color: rgba(212, 168, 83, 0.4);
    box-shadow: 0 12px 48px rgba(212, 168, 83, 0.15);
  }
  .vol-role-card h3 {
    font-family: 'Libre Baskerville', serif; font-size: 1.1rem; font-weight: 700;
    color: #e0bd70; text-transform: capitalize; letter-spacing: 0.01em;
    margin: 0 0 8px; border: none;
  }
  .vol-role-card p {
    font-size: 0.9rem; color: rgba(224, 189, 112, 0.85); line-height: 1.7; margin: 0;
  }
  .vol-role-tag {
    display: inline-block; font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em;
    padding: 4px 10px; background: rgba(212, 168, 83, 0.15); border: 1px solid rgba(212, 168, 83, 0.3);
    border-radius: 12px; color: #d4a853; margin-top: 12px;
  }

  /* ── Steps ── */
  .vol-steps {
    display: flex; flex-direction: column; gap: 0; margin-bottom: 56px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    backdrop-filter: blur(10px);
  }
  .vol-step {
    display: flex; align-items: flex-start; gap: 24px;
    padding: 28px 28px; border-bottom: 1px solid rgba(212, 168, 83, 0.1);
  }
  .vol-step:last-child { border-bottom: none; }
  .vol-step-num {
    flex-shrink: 0; width: 44px; height: 44px; border-radius: 50%;
    background: #d4a853; color: #0f1a12;
    font-family: 'Cabin', sans-serif; font-size: 1.1rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 12px rgba(212, 168, 83, 0.3);
  }
  .vol-step-body h4 {
    font-family: 'Libre Baskerville', serif; font-size: 1rem; font-weight: 700;
    color: #e0bd70; text-transform: capitalize; letter-spacing: 0.01em;
    margin: 0 0 6px; border: none;
  }
  .vol-step-body p {
    font-size: 0.9rem; color: rgba(224, 189, 112, 0.85); line-height: 1.7; margin: 0;
  }

  /* ── Application section ── */
  .vol-apply-wrap {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    padding: 36px 32px; margin-bottom: 56px;
    backdrop-filter: blur(10px);
  }
  .vol-apply-intro {
    font-size: 0.97rem; color: rgba(224, 189, 112, 0.9); line-height: 1.8; margin: 0 0 32px;
  }

  /* ── Form layout ── */
  .vol-form { display: flex; flex-direction: column; gap: 0; }
  .vol-form-section-title {
    font-family: 'Cabin', sans-serif; font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em; color: #d4a853;
    border-bottom: 1px solid rgba(212, 168, 83, 0.2); padding-bottom: 8px;
    margin: 32px 0 20px;
  }
  .vol-form-section-title:first-child { margin-top: 0; }
  .vol-form-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px;
  }
  .vol-form-row.full { grid-template-columns: 1fr; }
  .vol-form-field { display: flex; flex-direction: column; gap: 6px; }
  .vol-form-field label {
    font-size: 0.8rem; font-weight: 700; color: #d4a853;
    font-family: 'Cabin', sans-serif; text-transform: uppercase; letter-spacing: 0.05em;
  }
  .vol-form-field label .opt {
    font-weight: 400; color: rgba(212, 168, 83, 0.6); text-transform: none; letter-spacing: 0; font-size: 0.78rem;
  }
  .vol-form-field input,
  .vol-form-field select,
  .vol-form-field textarea {
    border: 1.5px solid rgba(212, 168, 83, 0.3); border-radius: 6px;
    padding: 12px 14px; font-size: 0.9rem; color: #d4a853;
    font-family: 'Lato', sans-serif;
    background: rgba(255, 255, 255, 0.05); transition: all 0.15s;
    outline: none;
  }
  .vol-form-field input::placeholder,
  .vol-form-field select::placeholder,
  .vol-form-field textarea::placeholder {
    color: rgba(212, 168, 83, 0.4);
  }
  .vol-form-field input:focus,
  .vol-form-field select:focus,
  .vol-form-field textarea:focus {
    border-color: #d4a853; background: rgba(212, 168, 83, 0.1);
    box-shadow: 0 0 0 3px rgba(212, 168, 83, 0.15);
  }
  .vol-form-field textarea { resize: vertical; min-height: 110px; }

  /* ── Checkbox group ── */
  .vol-check-group { display: flex; flex-direction: column; gap: 10px; }
  .vol-check-item {
    display: flex; align-items: center; gap: 12px;
    font-size: 0.9rem; color: rgba(224, 189, 112, 0.9); cursor: pointer;
  }
  .vol-check-item input[type="checkbox"] {
    width: 18px; height: 18px; accent-color: #d4a853;
    flex-shrink: 0; cursor: pointer;
    padding: 0; border: none; background: none;
  }

  /* ── Submit ── */
  .vol-form-submit {
    margin-top: 32px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
  }
  .vol-apply-btn {
    display: inline-block; padding: 13px 40px; background: #d4a853; color: #0f1a12;
    border-radius: 6px; font-family: 'Cabin', sans-serif; font-weight: 700;
    font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.06em;
    border: none; cursor: pointer; transition: all 0.2s;
  }
  .vol-apply-btn:hover { background: #e0bd70; transform: translateY(-2px); }
  .vol-form-status {
    font-size: 0.88rem; color: #81c784; font-weight: 600; display: none;
  }
  .vol-form-status.error { color: #ef5350; }

  @media (max-width: 580px) {
    .vol-form-row { grid-template-columns: 1fr; }
  }

  /* ── Testimonial ── */
  .vol-quote {
    background: rgba(212, 168, 83, 0.1); border-left: 4px solid #d4a853;
    border-radius: 0 8px 8px 0; padding: 24px 28px; margin-bottom: 56px;
    border: 1px solid rgba(212, 168, 83, 0.2);
  }
  .vol-quote p {
    font-size: 1rem; color: rgba(224, 189, 112, 0.9); line-height: 1.8; font-style: italic; margin: 0 0 10px;
  }
  .vol-quote cite {
    font-size: 0.82rem; color: #d4a853; font-style: normal; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em;
  }

  @media (max-width: 700px) {
    .vol-content { padding: 36px 18px; }
    .vol-why-grid { grid-template-columns: 1fr; }
    .vol-roles-grid { grid-template-columns: 1fr; }
    .fopl-hero h1 { font-size: 2.2rem; }
  }
</style>

<div class="fopl-hero">
  <h1>Volunteer With Us</h1>
  <p>The Friends of the Poway Library runs entirely on the energy of people who love this community. If you love books, people, or just want to give back — there's a place for you here.</p>
  <div aria-hidden="true" style="display:flex;justify-content:center;align-items:center;gap:6px;margin-top:18px;opacity:0.75;">
    <div style="width:14px;height:26px;background:linear-gradient(135deg,#66bb6a,#1b5e20);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(-40deg);"></div>
    <div style="width:10px;height:20px;background:linear-gradient(135deg,#81c784,#2e7d32);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(-65deg);"></div>
    <div style="width:7px;height:14px;background:linear-gradient(135deg,#a5d6a7,#388e3c);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(-80deg);"></div>
    <div style="width:50px;height:1.5px;background:rgba(255,255,255,0.35);"></div>
    <div style="width:20px;height:20px;background:#2e7d32;border-radius:50%;"></div>
    <div style="width:50px;height:1.5px;background:rgba(255,255,255,0.35);"></div>
    <div style="width:7px;height:14px;background:linear-gradient(135deg,#a5d6a7,#388e3c);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(80deg);"></div>
    <div style="width:10px;height:20px;background:linear-gradient(135deg,#81c784,#2e7d32);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(65deg);"></div>
    <div style="width:14px;height:26px;background:linear-gradient(135deg,#66bb6a,#1b5e20);border-radius:60% 40% 40% 60%/50% 50% 50% 50%;transform:rotate(40deg);"></div>
  </div>
</div>

<div class="vol-content">

  <!-- How It Works -->
  <span class="vol-section-label">How It Works</span>
  <div class="vol-steps">
    <div class="vol-step">
      <div class="vol-step-num">1</div>
      <div class="vol-step-body">
        <h4>Submit Your Application</h4>
        <p>Fill out the short form below. It takes about 3 minutes and helps us match you to the right role.</p>
      </div>
    </div>
    <div class="vol-step">
      <div class="vol-step-num">2</div>
      <div class="vol-step-body">
        <h4>We Reach Out</h4>
        <p>A member of our volunteer coordinator team will contact you within a few days to introduce themselves and answer any questions.</p>
      </div>
    </div>
    <div class="vol-step">
      <div class="vol-step-num">3</div>
      <div class="vol-step-body">
        <h4>Get Oriented</h4>
        <p>We will walk you through the role, introduce you to the team, and get you set up so your first shift is comfortable and easy.</p>
      </div>
    </div>
    <div class="vol-step">
      <div class="vol-step-num">4</div>
      <div class="vol-step-body">
        <h4>Start Volunteering</h4>
        <p>Pick your shifts and jump in. You will be part of a group that has been supporting the Poway Library since 1971.</p>
      </div>
    </div>
  </div>

  <!-- Application -->
  <span class="vol-section-label">Apply to Volunteer</span>
  <div class="vol-apply-wrap">
    <p class="vol-apply-intro">
      Ready to get involved? Fill out the form below and we will follow up within 3 to 5 business days.
    </p>

    <form class="vol-form" id="vol-application-form" novalidate>

      <!-- Section 1: About You -->
      <div class="vol-form-section-title">About You</div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-fname">First Name</label>
          <input type="text" id="vol-fname" name="firstName" placeholder="Jane" required>
        </div>
        <div class="vol-form-field">
          <label for="vol-lname">Last Name</label>
          <input type="text" id="vol-lname" name="lastName" placeholder="Smith" required>
        </div>
      </div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-email">Email Address</label>
          <input type="email" id="vol-email" name="email" placeholder="jane@example.com" required>
        </div>
        <div class="vol-form-field">
          <label for="vol-phone">Phone Number</label>
          <input type="tel" id="vol-phone" name="phone" placeholder="(619) 555-0100">
        </div>
      </div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-city">City</label>
          <input type="text" id="vol-city" name="city" placeholder="Poway">
        </div>
        <div class="vol-form-field">
          <label for="vol-zip">Zip Code</label>
          <input type="text" id="vol-zip" name="zip" placeholder="92064">
        </div>
      </div>

      <!-- Section 2: Availability -->
      <div class="vol-form-section-title">Availability</div>

      <div class="vol-form-row">
        <div class="vol-form-field">
          <label for="vol-hours">Hours available per week / month</label>
          <select id="vol-hours" name="hours" required>
            <option value="" disabled selected>Select an option</option>
            <option value="2-4/week">2–4 hours per week</option>
            <option value="5-8/week">5–8 hours per week</option>
            <option value="fewdays/month">A few days a month</option>
            <option value="flexible">Flexible / varies</option>
          </select>
        </div>
        <div class="vol-form-field">
          <label>Days generally available</label>
          <div class="vol-check-group" style="margin-top:4px;">
            <label class="vol-check-item">
              <input type="checkbox" name="days" value="weekdays"> Weekdays
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="days" value="weekends"> Weekends
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="days" value="either"> Either / flexible
            </label>
          </div>
        </div>
      </div>

      <!-- Section 3: Role Interest -->
      <div class="vol-form-section-title">Role Interest</div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label>Which volunteer role interests you most? <span class="opt">(select all that apply)</span></label>
          <div class="vol-check-group" style="margin-top:6px; display:grid; grid-template-columns:1fr 1fr; gap:8px 24px;">
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="bookstore"> Bookstore
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="events"> Events
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="outreach"> Community Outreach
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="admin"> Administrative Support
            </label>
            <label class="vol-check-item">
              <input type="checkbox" name="roles" value="notsure"> Not sure yet
            </label>
          </div>
        </div>
      </div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label for="vol-experience">Relevant experience <span class="opt">(optional)</span></label>
          <textarea id="vol-experience" name="experience" placeholder="Any past volunteering, library work, retail, event planning, etc."></textarea>
        </div>
      </div>

      <!-- Section 4: Anything Else -->
      <div class="vol-form-section-title">Anything Else</div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label for="vol-why">Why do you want to volunteer with the Friends of the Poway Library?</label>
          <textarea id="vol-why" name="why" placeholder="Tell us a little about yourself and what draws you to FOPL." required></textarea>
        </div>
      </div>

      <div class="vol-form-row full">
        <div class="vol-form-field">
          <label for="vol-other">Anything else you'd like us to know? <span class="opt">(optional)</span></label>
          <textarea id="vol-other" name="other" placeholder="Questions, scheduling notes, special skills, etc."></textarea>
        </div>
      </div>

      <div class="vol-form-submit">
        <button type="submit" class="vol-apply-btn">Submit Application</button>
        <span class="vol-form-status" id="vol-form-status"></span>
      </div>

    </form>

    <p style="font-size:0.82rem; color:#888; margin: 20px 0 0;">
      Prefer email? Reach us at <a href="mailto:info@powayfriends.org" style="color:#023b0f; font-weight:600;">info@powayfriends.org</a>
    </p>
  </div>

  <!-- Why volunteer -->
  <span class="vol-section-label">Why Volunteer</span>
  <div class="vol-why-grid">
    <div class="vol-why-card">
      <h3>Make a Real Impact</h3>
      <p>Every hour you give goes directly toward keeping the library's programs, events, and bookstore running for the Poway community.</p>
    </div>
    <div class="vol-why-card">
      <h3>Meet Your Neighbors</h3>
      <p>The Friends group is full of people who care about this community. Volunteering is one of the best ways to build lasting connections in Poway.</p>
    </div>
    <div class="vol-why-card">
      <h3>Flexible Commitment</h3>
      <p>Whether you can give two hours a week or two days a month, we have a role that works with your schedule. No experience required.</p>
    </div>
  </div>

  <!-- Volunteer roles -->
  <span class="vol-section-label">Ways to Help</span>
  <div class="vol-roles-grid">
    <div class="vol-role-card">
      <h3>Bookstore</h3>
      <p>Sort and shelve donated books, assist customers, manage inventory, and help keep the used bookstore organized and welcoming.</p>
      <span class="vol-role-tag">Ongoing</span>
    </div>
    <div class="vol-role-card">
      <h3>Events</h3>
      <p>Help set up, run, and break down the 400+ events the Friends host each year — from author talks to community fundraisers.</p>
      <span class="vol-role-tag">Seasonal</span>
    </div>
    <div class="vol-role-card">
      <h3>Community Outreach</h3>
      <p>Spread the word about the Friends through social media, flyers, tabling at local events, and connecting with community groups.</p>
      <span class="vol-role-tag">Flexible</span>
    </div>
    <div class="vol-role-card">
      <h3>Administrative Support</h3>
      <p>Help with membership records, communications, newsletter preparation, and other behind-the-scenes tasks that keep the organization running.</p>
      <span class="vol-role-tag">Flexible</span>
    </div>
  </div>

  <!-- Quote -->
  <div class="vol-quote">
    <p>"Volunteering at the Friends bookstore is one of my favorite parts of the week. The people are wonderful, and it is genuinely satisfying to know the money goes right back into the library."</p>
    <cite>FOPL Volunteer, Poway CA</cite>
  </div>

<script>
(function () {
  const API = window.FOPL_BACKEND + '/api/fopl/volunteer';

  const form   = document.getElementById('vol-application-form');
  const status = document.getElementById('vol-form-status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const firstName = form.querySelector('#vol-fname').value.trim();
    const lastName  = form.querySelector('#vol-lname').value.trim();
    const email     = form.querySelector('#vol-email').value.trim();
    const hours     = form.querySelector('#vol-hours').value;
    const why       = form.querySelector('#vol-why').value.trim();

    if (!firstName || !lastName || !email || !hours || !why) {
      status.textContent = 'Please fill in all required fields.';
      status.className = 'vol-form-status error';
      status.style.display = 'inline';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.className = 'vol-form-status error';
      status.style.display = 'inline';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    const payload = {
      first_name:  firstName,
      last_name:   lastName,
      email,
      phone:       form.querySelector('#vol-phone').value.trim(),
      city:        form.querySelector('#vol-city').value.trim(),
      zip:         form.querySelector('#vol-zip').value.trim(),
      hours,
      days:        [...form.querySelectorAll('input[name="days"]:checked')].map(cb => cb.value),
      roles:       [...form.querySelectorAll('input[name="roles"]:checked')].map(cb => cb.value),
      experience:  form.querySelector('#vol-experience').value.trim(),
      why,
      other:       form.querySelector('#vol-other').value.trim(),
    };

    try {
      const res = await fetch(API + '/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Server error ' + res.status);

      form.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = true);
      status.textContent = 'Application submitted! We will be in touch within 3–5 business days.';
      status.className = 'vol-form-status';
      status.style.display = 'inline';

    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Application';
      status.textContent = 'Something went wrong. Please try again or email us directly.';
      status.className = 'vol-form-status error';
      status.style.display = 'inline';
    }
  });
})();
</script>

</div>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>
