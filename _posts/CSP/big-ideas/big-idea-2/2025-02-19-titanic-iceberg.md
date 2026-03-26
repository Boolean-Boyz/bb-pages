---
layout: none
title: Titanic Survival Predictor - Interactive Iceberg Edition
description: Predict Titanic passenger survival with an interactive iceberg visualization using logistic regression
permalink: /titanic/iceberg
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titanic Survival Predictor - Iceberg Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Open Sans', sans-serif; background: linear-gradient(180deg, #0a1628 0%, #0d2137 30%, #0f2847 50%, #0a1f3d 70%, #051525 100%); color: #e0f4ff; min-height: 100vh; overflow-x: hidden; }
        .container { max-width: 1100px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; padding: 20px 0; margin-bottom: 20px; }
        .header h1 { font-family: 'Cinzel', serif; font-size: 2.5rem; font-weight: 700; color: #a8d8ff; text-shadow: 0 0 20px rgba(168, 216, 255, 0.5); letter-spacing: 4px; }
        .header p { color: #6ba8d4; font-size: 0.9rem; margin-top: 5px; letter-spacing: 2px; }
        .main-content { display: grid; grid-template-columns: 350px 1fr; gap: 30px; }
        .form-panel { background: rgba(15, 40, 71, 0.6); border: 1px solid rgba(168, 216, 255, 0.2); border-radius: 10px; padding: 25px; backdrop-filter: blur(10px); }
        .panel-title { font-family: 'Cinzel', serif; font-size: 1.1rem; color: #a8d8ff; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid rgba(168, 216, 255, 0.3); text-align: center; letter-spacing: 2px; }
        .form-group { margin-bottom: 15px; }
        .form-label { display: block; font-size: 0.75rem; color: #6ba8d4; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
        .form-input { width: 100%; padding: 10px 12px; font-family: 'Open Sans', sans-serif; font-size: 0.9rem; background: rgba(5, 21, 37, 0.8); border: 1px solid rgba(168, 216, 255, 0.3); color: #e0f4ff; border-radius: 5px; transition: all 0.3s; }
        .form-input:focus { outline: none; border-color: #a8d8ff; box-shadow: 0 0 15px rgba(168, 216, 255, 0.2); }
        .form-input::placeholder { color: #3d6a8f; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .submit-btn { width: 100%; padding: 12px; margin-top: 10px; font-family: 'Cinzel', serif; font-size: 0.9rem; background: linear-gradient(180deg, #2a6fa8 0%, #1a4f78 100%); border: 1px solid #a8d8ff; color: #e0f4ff; cursor: pointer; border-radius: 5px; transition: all 0.3s; letter-spacing: 2px; }
        .submit-btn:hover { background: linear-gradient(180deg, #3a8fd8 0%, #2a6fa8 100%); box-shadow: 0 0 20px rgba(168, 216, 255, 0.4); transform: translateY(-2px); }
        .viz-panel { display: flex; flex-direction: column; align-items: center; }
        .ocean-scene { position: relative; width: 100%; height: 400px; background: linear-gradient(180deg, #0d2137 0%, #0f2847 40%, #1a4a6e 40%, #0a3d5c 100%); border-radius: 10px; overflow: hidden; border: 1px solid rgba(168, 216, 255, 0.2); }
        .stars { position: absolute; top: 0; left: 0; width: 100%; height: 40%; }
        .star { position: absolute; background: #fff; border-radius: 50%; animation: twinkle 2s infinite; }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        .waterline { position: absolute; top: 40%; left: 0; width: 100%; height: 2px; background: rgba(168, 216, 255, 0.3); }
        .waves { position: absolute; top: 39%; left: 0; width: 200%; height: 20px; animation: waveMove 8s linear infinite; }
        @keyframes waveMove { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .iceberg-container { position: absolute; left: 50%; top: 40%; transform: translateX(-50%); width: 300px; height: 350px; transition: all 0.5s ease; }
        .iceberg-svg { width: 100%; height: 100%; }
        .ship-container { position: absolute; left: 10%; top: 32%; width: 120px; height: 60px; transition: transform 0.8s ease; }
        .ship-svg { width: 100%; height: 100%; filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5)); }
        .prob-display { position: absolute; top: 10px; right: 15px; background: rgba(5, 21, 37, 0.9); padding: 15px 20px; border-radius: 8px; border: 1px solid rgba(168, 216, 255, 0.3); text-align: center; }
        .prob-label { font-size: 0.7rem; color: #6ba8d4; text-transform: uppercase; letter-spacing: 1px; }
        .prob-value { font-family: 'Cinzel', serif; font-size: 2rem; font-weight: 700; color: #a8d8ff; text-shadow: 0 0 15px rgba(168, 216, 255, 0.5); }
        .prob-value.survived { color: #4ade80; text-shadow: 0 0 15px rgba(74, 222, 128, 0.5); }
        .prob-value.perished { color: #f87171; text-shadow: 0 0 15px rgba(248, 113, 113, 0.5); }
        .status-message { position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); background: rgba(5, 21, 37, 0.9); padding: 10px 25px; border-radius: 25px; border: 1px solid rgba(168, 216, 255, 0.3); font-family: 'Cinzel', serif; font-size: 0.9rem; letter-spacing: 2px; white-space: nowrap; }
        .status-message.survived { border-color: #4ade80; color: #4ade80; }
        .status-message.perished { border-color: #f87171; color: #f87171; }
        .feature-panel { width: 100%; margin-top: 20px; background: rgba(15, 40, 71, 0.6); border: 1px solid rgba(168, 216, 255, 0.2); border-radius: 10px; padding: 20px; backdrop-filter: blur(10px); }
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .feature-item { background: rgba(5, 21, 37, 0.5); padding: 12px; border-radius: 8px; border: 1px solid rgba(168, 216, 255, 0.1); }
        .feature-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .feature-name { font-size: 0.75rem; color: #6ba8d4; text-transform: uppercase; letter-spacing: 1px; }
        .feature-value { font-family: 'Cinzel', serif; font-size: 0.85rem; font-weight: 700; }
        .feature-value.positive { color: #4ade80; }
        .feature-value.negative { color: #f87171; }
        .feature-bar-container { height: 6px; background: rgba(168, 216, 255, 0.1); border-radius: 3px; position: relative; overflow: hidden; }
        .feature-bar { height: 100%; border-radius: 3px; position: absolute; top: 0; transition: width 0.8s ease; }
        .feature-bar.positive { background: linear-gradient(90deg, rgba(74, 222, 128, 0.3) 0%, #4ade80 100%); left: 50%; }
        .feature-bar.negative { background: linear-gradient(90deg, #f87171 0%, rgba(248, 113, 113, 0.3) 100%); right: 50%; }
        .feature-bar-center { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: rgba(168, 216, 255, 0.3); }
        .placeholder-message { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: #6ba8d4; font-style: italic; }
        .passenger-name-display { position: absolute; top: 10px; left: 15px; max-width: 200px; }
        .passenger-name-label { font-size: 0.7rem; color: #6ba8d4; text-transform: uppercase; letter-spacing: 1px; }
        .passenger-name-value { font-family: 'Cinzel', serif; font-size: 1rem; color: #a8d8ff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        @media (max-width: 900px) { .main-content { grid-template-columns: 1fr; } .ocean-scene { height: 350px; } }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>Titanic Survival Predictor</h1>
            <p>Watch the iceberg reveal your fate</p>
        </header>

        <div class="main-content">
            <div class="form-panel">
                <h2 class="panel-title">Passenger Manifest</h2>
                <form id="passengerForm">
                    <div class="form-group">
                        <label class="form-label">Passenger Name</label>
                        <input type="text" class="form-input" id="name" placeholder="Enter name" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Class</label>
                            <select class="form-input" id="pclass" required>
                                <option value="1">First Class</option>
                                <option value="2">Second Class</option>
                                <option value="3" selected>Third Class</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Sex</label>
                            <select class="form-input" id="sex" required>
                                <option value="female">Female</option>
                                <option value="male" selected>Male</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Age</label>
                            <input type="number" class="form-input" id="age" min="0" max="100" value="30" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Fare (£)</label>
                            <input type="number" class="form-input" id="fare" min="0" max="600" step="0.01" value="15" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Siblings/Spouse</label>
                            <input type="number" class="form-input" id="sibsp" min="0" max="10" value="0" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Parents/Children</label>
                            <input type="number" class="form-input" id="parch" min="0" max="10" value="0" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Embarked</label>
                        <select class="form-input" id="embarked" required>
                            <option value="S" selected>Southampton</option>
                            <option value="C">Cherbourg</option>
                            <option value="Q">Queenstown</option>
                        </select>
                    </div>
                    <button type="submit" class="submit-btn">Predict Survival</button>
                </form>
            </div>

            <div class="viz-panel">
                <div class="ocean-scene" id="oceanScene">
                    <div class="stars" id="stars"></div>
                    <svg class="waves" viewBox="0 0 1200 20" preserveAspectRatio="none">
                        <path fill="rgba(168, 216, 255, 0.1)" d="M0,10 Q75,0 150,10 T300,10 T450,10 T600,10 T750,10 T900,10 T1050,10 T1200,10 V20 H0 Z">
                            <animate attributeName="d" values="M0,10 Q75,0 150,10 T300,10 T450,10 T600,10 T750,10 T900,10 T1050,10 T1200,10 V20 H0 Z;M0,10 Q75,20 150,10 T300,10 T450,10 T600,10 T750,10 T900,10 T1050,10 T1200,10 V20 H0 Z;M0,10 Q75,0 150,10 T300,10 T450,10 T600,10 T750,10 T900,10 T1050,10 T1200,10 V20 H0 Z" dur="3s" repeatCount="indefinite"/>
                        </path>
                    </svg>
                    <div class="waterline"></div>
                    <div class="ship-container" id="shipContainer">
                        <svg class="ship-svg" viewBox="0 0 120 60">
                            <path d="M5 35 L15 50 L105 50 L115 35 L100 35 L95 45 L25 45 L20 35 Z" fill="#2a2a2a" stroke="#1a1a1a" stroke-width="1"/>
                            <rect x="20" y="25" width="80" height="12" fill="#3a3a3a" stroke="#2a2a2a"/>
                            <rect x="30" y="12" width="50" height="15" fill="#4a4a4a" stroke="#3a3a3a"/>
                            <rect x="40" y="2" width="30" height="12" fill="#5a5a5a" stroke="#4a4a4a"/>
                            <rect x="45" y="-8" width="8" height="12" fill="#c44" stroke="#933"/>
                            <rect x="58" y="-8" width="8" height="12" fill="#c44" stroke="#933"/>
                            <rect x="45" y="-6" width="8" height="2" fill="#111"/>
                            <rect x="58" y="-6" width="8" height="2" fill="#111"/>
                            <ellipse cx="49" cy="-12" rx="4" ry="3" fill="rgba(150,150,150,0.5)"><animate attributeName="cy" values="-12;-25;-12" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite"/></ellipse>
                            <ellipse cx="62" cy="-15" rx="4" ry="3" fill="rgba(150,150,150,0.5)"><animate attributeName="cy" values="-15;-28;-15" dur="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0;0.5" dur="3.5s" repeatCount="indefinite"/></ellipse>
                            <rect x="32" y="15" width="4" height="3" fill="#ffeb3b" opacity="0.7"/>
                            <rect x="40" y="15" width="4" height="3" fill="#ffeb3b" opacity="0.7"/>
                            <rect x="48" y="15" width="4" height="3" fill="#ffeb3b" opacity="0.7"/>
                            <rect x="56" y="15" width="4" height="3" fill="#ffeb3b" opacity="0.7"/>
                            <rect x="64" y="15" width="4" height="3" fill="#ffeb3b" opacity="0.7"/>
                            <rect x="72" y="15" width="4" height="3" fill="#ffeb3b" opacity="0.7"/>
                        </svg>
                    </div>
                    <div class="iceberg-container" id="icebergContainer">
                        <svg class="iceberg-svg" viewBox="0 0 300 350" id="icebergSvg">
                            <defs>
                                <linearGradient id="iceAbove" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#ffffff;stop-opacity:1"/><stop offset="100%" style="stop-color:#a8d8ff;stop-opacity:1"/></linearGradient>
                                <linearGradient id="iceBelow" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#4a90b8;stop-opacity:0.8"/><stop offset="100%" style="stop-color:#1a4a6e;stop-opacity:0.6"/></linearGradient>
                                <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                            </defs>
                            <path id="icebergBelow" d="M80 140 L60 180 L50 250 L80 300 L150 330 L220 300 L250 250 L240 180 L220 140 Z" fill="url(#iceBelow)" stroke="rgba(168, 216, 255, 0.3)" stroke-width="1"/>
                            <path id="icebergAbove" d="M100 140 L90 120 L110 80 L150 30 L190 80 L210 120 L200 140 Z" fill="url(#iceAbove)" stroke="rgba(168, 216, 255, 0.8)" stroke-width="1" filter="url(#glow)" transform-origin="150px 140px"/>
                            <line x1="40" y1="140" x2="260" y2="140" stroke="rgba(168, 216, 255, 0.5)" stroke-width="1" stroke-dasharray="5,5"/>
                        </svg>
                    </div>
                    <div class="passenger-name-display" id="passengerNameDisplay" style="display: none;">
                        <div class="passenger-name-label">Passenger</div>
                        <div class="passenger-name-value" id="passengerNameValue">—</div>
                    </div>
                    <div class="prob-display">
                        <div class="prob-label">Survival Odds</div>
                        <div class="prob-value" id="probValue">—%</div>
                    </div>
                    <div class="status-message" id="statusMessage">Enter passenger details</div>
                </div>

                <div class="feature-panel">
                    <h3 class="panel-title">Feature Impact Analysis</h3>
                    <div class="feature-grid" id="featureGrid">
                        <div class="placeholder-message">Complete the form to see feature impacts</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function generateStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = (Math.random() * 2 + 1) + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 2 + 's';
                starsContainer.appendChild(star);
            }
        }
        generateStars();

        const COEFFICIENTS = { intercept: 5.3041, pclass: -1.0866, sex_male: -2.7569, age: -0.0436, sibsp: -0.3761, parch: -0.0615, fare: 0.0024, embarked_C: 0.4267, embarked_Q: 0.0836, embarked_S: 0 };

        function sigmoid(z) { return 1 / (1 + Math.exp(-z)); }

        function predict(features) {
            let logOdds = COEFFICIENTS.intercept;
            const contributions = {};
            contributions.pclass = COEFFICIENTS.pclass * features.pclass; logOdds += contributions.pclass;
            contributions.sex_male = features.sex === 'male' ? COEFFICIENTS.sex_male : 0; logOdds += contributions.sex_male;
            contributions.age = COEFFICIENTS.age * features.age; logOdds += contributions.age;
            contributions.sibsp = COEFFICIENTS.sibsp * features.sibsp; logOdds += contributions.sibsp;
            contributions.parch = COEFFICIENTS.parch * features.parch; logOdds += contributions.parch;
            contributions.fare = COEFFICIENTS.fare * features.fare; logOdds += contributions.fare;
            contributions.embarked = features.embarked === 'C' ? COEFFICIENTS.embarked_C : features.embarked === 'Q' ? COEFFICIENTS.embarked_Q : 0;
            logOdds += contributions.embarked;
            return { probability: sigmoid(logOdds), contributions };
        }

        function updateIceberg(probability) {
            const icebergAbove = document.getElementById('icebergAbove');
            const shipContainer = document.getElementById('shipContainer');
            const scale = 0.3 + (probability * 1.2);
            icebergAbove.style.transform = `scaleY(${scale})`;
            const tilt = (1 - probability) * 15;
            const sink = (1 - probability) * 10;
            shipContainer.style.transform = `rotate(${tilt}deg) translateY(${sink}px)`;
        }

        function updateDisplay(name, probability, contributions) {
            const probValue = document.getElementById('probValue');
            const statusMessage = document.getElementById('statusMessage');
            const featureGrid = document.getElementById('featureGrid');
            const passengerNameDisplay = document.getElementById('passengerNameDisplay');
            const passengerNameValue = document.getElementById('passengerNameValue');

            const survived = probability >= 0.5;
            probValue.textContent = (probability * 100).toFixed(1) + '%';
            probValue.className = 'prob-value ' + (survived ? 'survived' : 'perished');

            passengerNameDisplay.style.display = 'block';
            passengerNameValue.textContent = name;

            statusMessage.className = 'status-message ' + (survived ? 'survived' : 'perished');
            statusMessage.textContent = survived ? 'LIKELY SURVIVED' : 'LIKELY PERISHED';

            updateIceberg(probability);

            const featureData = [
                { name: 'Sex', value: contributions.sex_male },
                { name: 'Class', value: contributions.pclass },
                { name: 'Age', value: contributions.age },
                { name: 'Siblings/Spouse', value: contributions.sibsp },
                { name: 'Parents/Children', value: contributions.parch },
                { name: 'Fare', value: contributions.fare },
                { name: 'Embarked', value: contributions.embarked }
            ].sort((a, b) => Math.abs(b.value) - Math.abs(a.value));

            const maxAbs = Math.max(...featureData.map(f => Math.abs(f.value)));

            featureGrid.innerHTML = featureData.map(feature => {
                const isPositive = feature.value >= 0;
                const barWidth = (Math.abs(feature.value) / maxAbs) * 50;
                return `<div class="feature-item"><div class="feature-header"><span class="feature-name">${feature.name}</span><span class="feature-value ${isPositive ? 'positive' : 'negative'}">${isPositive ? '+' : ''}${feature.value.toFixed(3)}</span></div><div class="feature-bar-container"><div class="feature-bar-center"></div><div class="feature-bar ${isPositive ? 'positive' : 'negative'}" style="width: ${barWidth}%;"></div></div></div>`;
            }).join('');
        }

        document.getElementById('passengerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const features = {
                pclass: parseInt(document.getElementById('pclass').value),
                sex: document.getElementById('sex').value,
                age: parseFloat(document.getElementById('age').value),
                sibsp: parseInt(document.getElementById('sibsp').value),
                parch: parseInt(document.getElementById('parch').value),
                fare: parseFloat(document.getElementById('fare').value),
                embarked: document.getElementById('embarked').value
            };
            const name = document.getElementById('name').value || 'Unknown';
            const { probability, contributions } = predict(features);
            updateDisplay(name, probability, contributions);
        });

        document.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('input', function() {
                const form = document.getElementById('passengerForm');
                if (form.checkValidity()) {
                    form.dispatchEvent(new Event('submit'));
                }
            });
        });

        updateIceberg(0.5);
    </script>
</body>
</html>
