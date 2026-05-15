---
layout: fopl
title: Contact Us — Friends of the Poway Library
permalink: /contact
description: Get in touch with the Friends of the Poway Library. Visit us, volunteer, donate, or find out more.
fopl_nav_active: contact
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

  /* ── Contact layout ── */
  .contact-content {
    max-width: 1100px; margin: 0 auto; padding: 52px 40px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 36px;
  }

  .contact-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    padding: 36px 32px;
    transition: all 0.3s ease;
  }
  .contact-card:hover {
    border-color: rgba(212, 168, 83, 0.4);
    box-shadow: 0 12px 48px rgba(212, 168, 83, 0.15);
  }
  .contact-card h2 {
    font-family: 'Libre Baskerville', serif; font-size: 1.3rem; font-weight: 700;
    color: #e0bd70; text-transform: capitalize; letter-spacing: 0.01em;
    margin: 0 0 20px; border: none;
  }

  /* ── Contact form ── */
  .contact-form { display: flex; flex-direction: column; gap: 14px; }
  .contact-form label {
    font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; color: #d4a853; margin-bottom: 4px;
  }
  .contact-form input,
  .contact-form textarea {
    width: 100%; padding: 12px 16px; border: 1px solid rgba(212, 168, 83, 0.3);
    border-radius: 6px; font-family: 'Lato', sans-serif; font-size: 0.95rem;
    transition: all 0.2s; background: rgba(255, 255, 255, 0.05);
    color: #d4a853; outline: none;
  }
  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: rgba(212, 168, 83, 0.4);
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: #d4a853; background: rgba(212, 168, 83, 0.1);
    box-shadow: 0 0 0 3px rgba(212, 168, 83, 0.1);
  }
  .contact-form textarea { resize: vertical; min-height: 110px; }
  .contact-form-btn {
    display: inline-block; padding: 12px 32px; background: #d4a853; color: #0f1a12;
    border: none; border-radius: 6px; cursor: pointer;
    font-family: 'Cabin', sans-serif; font-weight: 700; font-size: 0.9rem;
    text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.2s;
    align-self: flex-start;
  }
  .contact-form-btn:hover { background: #e0bd70; transform: translateY(-2px); }
  .contact-form-msg {
    font-size: 0.9rem; padding: 12px 16px; border-radius: 6px; display: none; border: 1px solid;
  }
  .contact-form-msg.show { display: block; }
  .contact-form-msg.ok { background: rgba(76, 175, 80, 0.15); border-color: rgba(76, 175, 80, 0.3); color: #81c784; }
  .contact-form-msg.err { background: rgba(244, 67, 54, 0.15); border-color: rgba(244, 67, 54, 0.3); color: #ef5350; }

  /* ── Info blocks ── */
  .contact-info-block { margin-bottom: 28px; padding-bottom: 28px; border-bottom: 1px solid rgba(212, 168, 83, 0.1); }
  .contact-info-block:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
  .contact-info-block h3 {
    font-family: 'Cabin', sans-serif; font-size: 0.85rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: #d4a853;
    margin: 0 0 10px; border: none;
  }
  .contact-info-block p {
    font-size: 0.95rem; color: rgba(224, 189, 112, 0.9); line-height: 1.8; margin: 0;
  }
  .contact-info-block a {
    color: #e0bd70; text-decoration: none; font-weight: 600; transition: color 0.2s;
  }
  .contact-info-block a:hover { color: #d4a853; text-decoration: underline; }

  /* ── Hours table ── */
  .hours-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
  .hours-table td {
    padding: 8px 0; font-size: 0.92rem; color: rgba(224, 189, 112, 0.8);
    border-bottom: 1px solid rgba(212, 168, 83, 0.1);
  }
  .hours-table td:first-child { font-weight: 600; color: #e0bd70; padding-right: 20px; }
  .hours-table tr:last-child td { border-bottom: none; }
  .hours-section-label {
    font-family: 'Cabin', sans-serif; font-size: 0.75rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em; color: rgba(212, 168, 83, 0.8);
    margin: 16px 0 6px; display: block;
  }
  .hours-section-label:first-of-type { margin-top: 0; }

  /* ── Social links ── */
  .social-links { display: flex; gap: 12px; margin-top: 12px; flex-wrap: wrap; }
  .social-link {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 8px 16px; background: rgba(212, 168, 83, 0.1); border: 1px solid rgba(212, 168, 83, 0.3);
    border-radius: 20px; font-family: 'Cabin', sans-serif; font-size: 0.8rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.04em;
    color: #d4a853; text-decoration: none; transition: all 0.2s;
  }
  .social-link:hover { background: #d4a853; color: #0f1a12; }

  /* ── Map ── */
  .contact-map {
    grid-column: 1 / -1;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(212, 168, 83, 0.2);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  .contact-map iframe {
    width: 100%; height: 360px; border: none;
  }

  @media (max-width: 640px) {
    .contact-content { grid-template-columns: 1fr; padding: 32px 18px; gap: 24px; }
    .fopl-hero h1 { font-size: 2.2rem; }
  }
</style>

<div class="fopl-hero">
  <h1>Contact Us</h1>
  <p>We'd love to hear from you. Reach out to volunteer, donate, ask a question, or learn more about the Friends.</p>
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

<div class="contact-content">

  <!-- Left column: Get Involved -->
  <div class="contact-card">
    <h2>Get Involved!</h2>
    <p style="font-size: 0.97rem; color: #444; line-height: 1.7; margin: 0 0 18px;">
      There are so many ways to support The Friends. Contact us to find out more about volunteer opportunities, fundraising events, and ways to get our message to your friends and family.
    </p>
    <p style="font-size: 0.97rem; color: #444; line-height: 1.7; margin: 0 0 18px;">
      Interested in donating or volunteering? Reach out — we'd love to hear from you!
    </p>
    <a class="contact-form-btn" href="mailto:info@powayfriends.org" style="text-decoration:none; display:inline-block;">Email Us</a>
  </div>

  <!-- Right column: Info -->
  <div class="contact-card">
    <h2>Find Us</h2>

    <div class="contact-info-block">
      <h3>Address</h3>
      <p>
        13137 Poway Rd<br>
        Poway, California 92064
      </p>
    </div>

    <div class="contact-info-block">
      <h3>Phone &amp; Email</h3>
      <p>
        <a href="tel:8585132862">858-513-2862</a><br>
        <a href="mailto:info@powayfriends.org">info@powayfriends.org</a>
      </p>
    </div>

    <div class="contact-info-block">
      <h3>Hours</h3>
      <span class="hours-section-label">The Friends Bookstore</span>
      <table class="hours-table">
        <tr><td>Monday</td><td>Closed</td></tr>
        <tr><td>Tue &amp; Wed</td><td>Noon – 6:30 PM</td></tr>
        <tr><td>Thursday</td><td>10 AM – 5:30 PM</td></tr>
        <tr><td>Fri, Sat &amp; Sun</td><td>10 AM – 4:30 PM</td></tr>
      </table>
      <span class="hours-section-label">The Poway Library</span>
      <table class="hours-table">
        <tr><td>Mon &amp; Thu</td><td>10 AM – 6 PM</td></tr>
        <tr><td>Tue &amp; Wed</td><td>Noon – 7 PM</td></tr>
        <tr><td>Fri, Sat &amp; Sun</td><td>10 AM – 5 PM</td></tr>
      </table>
    </div>

    <div class="contact-info-block">
      <h3>Connect With Us</h3>
      <div class="social-links">
        <a class="social-link" href="https://www.facebook.com/Poway-Community-Library-252075348169091" target="_blank" rel="noopener">Facebook</a>
        <a class="social-link" href="https://www.instagram.com/poway_community_library" target="_blank" rel="noopener">Instagram</a>
        <a class="social-link" href="https://www.x.com/PowayLibSDCL" target="_blank" rel="noopener">X</a>
        <a class="social-link" href="https://www.yelp.com/biz/friends-of-the-poway-library-bookstore-poway" target="_blank" rel="noopener">Yelp</a>
      </div>
    </div>
  </div>

  <!-- Map -->
  <div class="contact-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8!2d-117.0363!3d32.9628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf8e5f1b4b3a1%3A0x4b0e5e7c8e8d3a0!2s13137%20Poway%20Rd%2C%20Poway%2C%20CA%2092064!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
      allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Friends of the Poway Library - Map"></iframe>
  </div>

</div>

<div class="fopl-footer">
  &copy; 2025 Friends of the Poway Library &mdash;
  <a href="https://powayfriends.org">powayfriends.org</a>
</div>



