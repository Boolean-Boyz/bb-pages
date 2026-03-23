---
layout: none
title: Titanic Survival Predictor - NASA Mission Control Edition
description: Predict Titanic passenger survival with a NASA Mission Control theme using logistic regression
permalink: /titanic/mission-control
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TITANIC-1912 | Mission Control</title>
    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Share Tech Mono', monospace; background: #0a0a0f; color: #00ff41; min-height: 100vh; overflow-x: hidden; }
        body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px); pointer-events: none; z-index: 1000; }
        body::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%); pointer-events: none; z-index: 999; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; background: linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%); border: 1px solid #00ff41; border-radius: 5px; margin-bottom: 20px; box-shadow: 0 0 20px rgba(0, 255, 65, 0.2); }
        .logo { font-family: 'Orbitron', sans-serif; font-size: 1.5rem; font-weight: 900; letter-spacing: 3px; text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41; }
        .status-indicators { display: flex; gap: 20px; }
        .indicator { display: flex; align-items: center; gap: 8px; font-size: 0.75rem; }
        .indicator-light { width: 10px; height: 10px; border-radius: 50%; animation: pulse 2s infinite; }
        .indicator-light.green { background: #00ff41; box-shadow: 0 0 10px #00ff41; }
        .indicator-light.amber { background: #ffa500; box-shadow: 0 0 10px #ffa500; animation-delay: 0.5s; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .datetime { font-size: 0.8rem; color: #00ccff; }
        .main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .panel { background: linear-gradient(180deg, #12121f 0%, #0a0a12 100%); border: 1px solid #00ff41; border-radius: 5px; overflow: hidden; box-shadow: 0 0 15px rgba(0, 255, 65, 0.1); }
        .panel-header { background: linear-gradient(90deg, #00ff41 0%, transparent 100%); padding: 10px 15px; font-family: 'Orbitron', sans-serif; font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; color: #0a0a0f; text-transform: uppercase; }
        .panel-content { padding: 20px; }
        .form-group { margin-bottom: 15px; }
        .form-label { display: block; font-size: 0.7rem; color: #00ccff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
        .form-input { width: 100%; padding: 10px 12px; font-family: 'Share Tech Mono', monospace; font-size: 0.9rem; background: #0a0a12; border: 1px solid #00ff41; color: #00ff41; border-radius: 3px; transition: all 0.3s; }
        .form-input:focus { outline: none; box-shadow: 0 0 10px rgba(0, 255, 65, 0.5); background: #0f0f1a; }
        .form-input::placeholder { color: #004d13; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .submit-btn { width: 100%; padding: 15px; margin-top: 10px; font-family: 'Orbitron', sans-serif; font-size: 0.9rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; background: linear-gradient(180deg, #00ff41 0%, #00cc33 100%); border: none; color: #0a0a0f; cursor: pointer; border-radius: 3px; transition: all 0.3s; position: relative; overflow: hidden; }
        .submit-btn:hover { box-shadow: 0 0 30px rgba(0, 255, 65, 0.5); transform: translateY(-2px); }
        .loading-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 15, 0.95); z-index: 2000; justify-content: center; align-items: center; flex-direction: column; }
        .loading-overlay.active { display: flex; }
        .loading-spinner { width: 80px; height: 80px; border: 3px solid #1a1a2e; border-top: 3px solid #00ff41; border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .loading-text { margin-top: 20px; font-family: 'Orbitron', sans-serif; font-size: 1rem; letter-spacing: 3px; animation: blink 0.5s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .prediction-container { display: none; }
        .prediction-container.active { display: block; }
        .probability-display { text-align: center; padding: 20px; }
        .probability-value { font-family: 'Orbitron', sans-serif; font-size: 4rem; font-weight: 900; text-shadow: 0 0 30px currentColor; transition: color 0.5s; }
        .probability-value.survived { color: #00ff41; }
        .probability-value.perished { color: #ff4141; }
        .probability-label { font-size: 0.8rem; color: #00ccff; text-transform: uppercase; letter-spacing: 3px; margin-top: 10px; }
        .alert-box { margin-top: 20px; padding: 15px; border-radius: 5px; text-align: center; font-family: 'Orbitron', sans-serif; font-size: 1rem; letter-spacing: 2px; animation: alertPulse 1s infinite; }
        .alert-box.survived { background: rgba(0, 255, 65, 0.1); border: 2px solid #00ff41; color: #00ff41; }
        .alert-box.perished { background: rgba(255, 65, 65, 0.1); border: 2px solid #ff4141; color: #ff4141; }
        @keyframes alertPulse { 0%, 100% { box-shadow: 0 0 10px currentColor; } 50% { box-shadow: 0 0 30px currentColor; } }
        .gauge-container { display: flex; justify-content: center; padding: 20px; }
        .gauge { position: relative; width: 200px; height: 100px; }
        .gauge-bg { fill: none; stroke: #1a1a2e; stroke-width: 20; }
        .gauge-fill { fill: none; stroke-width: 20; stroke-linecap: round; transition: stroke-dashoffset 1s ease, stroke 0.5s; filter: drop-shadow(0 0 10px currentColor); }
        .gauge-text { font-family: 'Orbitron', sans-serif; font-size: 1.5rem; font-weight: 700; fill: #00ff41; }
        .gauge-label { font-size: 0.5rem; fill: #00ccff; text-transform: uppercase; letter-spacing: 2px; }
        .feature-item { margin-bottom: 15px; }
        .feature-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
        .feature-name { font-size: 0.75rem; color: #00ccff; text-transform: uppercase; letter-spacing: 1px; }
        .feature-value { font-family: 'Orbitron', sans-serif; font-size: 0.8rem; font-weight: 700; }
        .feature-value.positive { color: #00ff41; }
        .feature-value.negative { color: #ff4141; }
        .feature-bar-container { height: 8px; background: #1a1a2e; border-radius: 4px; position: relative; overflow: visible; }
        .feature-bar-center { position: absolute; left: 50%; top: -4px; bottom: -4px; width: 2px; background: #00ccff; }
        .feature-bar { height: 100%; border-radius: 4px; position: absolute; top: 0; transition: width 0.8s ease; }
        .feature-bar.positive { background: linear-gradient(90deg, #004d13 0%, #00ff41 100%); left: 50%; box-shadow: 0 0 10px #00ff41; }
        .feature-bar.negative { background: linear-gradient(90deg, #ff4141 0%, #4d0013 100%); right: 50%; box-shadow: 0 0 10px #ff4141; }
        .passenger-info { background: #0f0f1a; border: 1px solid #00ccff; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        .passenger-name { font-family: 'Orbitron', sans-serif; font-size: 1.2rem; color: #00ccff; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; }
        .passenger-details { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; font-size: 0.75rem; }
        .detail-item { display: flex; justify-content: space-between; }
        .detail-label { color: #666; }
        .detail-value { color: #00ff41; }
        .placeholder { text-align: center; padding: 60px 20px; color: #333; }
        .placeholder-icon { font-size: 4rem; margin-bottom: 20px; opacity: 0.3; }
        .placeholder-text { font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; }
        @media (max-width: 768px) { .main-grid { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } .header { flex-direction: column; gap: 15px; } .probability-value { font-size: 2.5rem; } }
    </style>
</head>
<body>
    <div class="loading-overlay" id="loadingOverlay">
        <div class="loading-spinner"></div>
        <div class="loading-text">ANALYZING PASSENGER DATA...</div>
    </div>

    <div class="container">
        <header class="header">
            <div class="logo">◈ TITANIC-1912 MISSION CONTROL</div>
            <div class="status-indicators">
                <div class="indicator"><div class="indicator-light green"></div><span>SYSTEM ONLINE</span></div>
                <div class="indicator"><div class="indicator-light amber"></div><span>ML MODEL ACTIVE</span></div>
            </div>
            <div class="datetime" id="datetime"></div>
        </header>

        <div class="main-grid">
            <div class="panel">
                <div class="panel-header">▸ Passenger Data Entry Terminal</div>
                <div class="panel-content">
                    <form id="passengerForm">
                        <div class="form-group">
                            <label class="form-label">Passenger Name</label>
                            <input type="text" class="form-input" id="name" placeholder="ENTER PASSENGER NAME" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Passenger Class</label>
                                <select class="form-input" id="pclass" required>
                                    <option value="1">1ST CLASS</option>
                                    <option value="2">2ND CLASS</option>
                                    <option value="3" selected>3RD CLASS</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Sex</label>
                                <select class="form-input" id="sex" required>
                                    <option value="female">FEMALE</option>
                                    <option value="male" selected>MALE</option>
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
                            <label class="form-label">Embarkation Port</label>
                            <select class="form-input" id="embarked" required>
                                <option value="S" selected>SOUTHAMPTON</option>
                                <option value="C">CHERBOURG</option>
                                <option value="Q">QUEENSTOWN</option>
                            </select>
                        </div>
                        <button type="submit" class="submit-btn">▸ INITIATE SURVIVAL ANALYSIS</button>
                    </form>
                </div>
            </div>

            <div class="panel">
                <div class="panel-header">▸ Analysis Results</div>
                <div class="panel-content">
                    <div id="placeholder" class="placeholder">
                        <div class="placeholder-icon">◎</div>
                        <div class="placeholder-text">Awaiting passenger data input<br>Enter data and initiate analysis</div>
                    </div>
                    <div id="predictionContainer" class="prediction-container">
                        <div class="passenger-info" id="passengerInfo">
                            <div class="passenger-name" id="passengerName">—</div>
                            <div class="passenger-details" id="passengerDetails"></div>
                        </div>
                        <div class="gauge-container">
                            <svg class="gauge" viewBox="0 0 200 110">
                                <path class="gauge-bg" d="M 20 100 A 80 80 0 0 1 180 100"></path>
                                <path class="gauge-fill" id="gaugeFill" d="M 20 100 A 80 80 0 0 1 180 100" stroke="#00ff41" stroke-dasharray="251" stroke-dashoffset="251"></path>
                                <text class="gauge-text" id="gaugeText" x="100" y="85" text-anchor="middle">0%</text>
                                <text class="gauge-label" x="100" y="105" text-anchor="middle">SURVIVAL PROBABILITY</text>
                            </svg>
                        </div>
                        <div class="probability-display">
                            <div class="probability-value" id="probabilityValue">0.0%</div>
                            <div class="probability-label">Calculated Survival Rate</div>
                        </div>
                        <div class="alert-box" id="alertBox">ANALYSIS PENDING</div>
                    </div>
                </div>
            </div>

            <div class="panel" style="grid-column: 1 / -1;">
                <div class="panel-header">▸ Feature Impact Analysis</div>
                <div class="panel-content">
                    <div id="featurePlaceholder" class="placeholder" style="padding: 30px;">
                        <div class="placeholder-text">Feature analysis will appear after prediction</div>
                    </div>
                    <div id="featureBars" style="display: none;"></div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const COEFFICIENTS = { intercept: 5.3041, pclass: -1.0866, sex_male: -2.7569, age: -0.0436, sibsp: -0.3761, parch: -0.0615, fare: 0.0024, embarked_C: 0.4267, embarked_Q: 0.0836, embarked_S: 0 };

        function updateDateTime() {
            const now = new Date();
            document.getElementById('datetime').textContent = now.toLocaleString('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).toUpperCase();
        }
        setInterval(updateDateTime, 1000);
        updateDateTime();

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

        function updateGauge(probability) {
            const gaugeFill = document.getElementById('gaugeFill');
            const gaugeText = document.getElementById('gaugeText');
            const offset = 251 * (1 - probability);
            gaugeFill.style.strokeDashoffset = offset;
            const color = probability >= 0.5 ? '#00ff41' : '#ff4141';
            gaugeFill.style.stroke = color;
            gaugeText.style.fill = color;
            gaugeText.textContent = (probability * 100).toFixed(1) + '%';
        }

        function updateDisplay(name, features, probability, contributions) {
            document.getElementById('placeholder').style.display = 'none';
            document.getElementById('predictionContainer').classList.add('active');
            document.getElementById('featurePlaceholder').style.display = 'none';
            document.getElementById('featureBars').style.display = 'block';

            document.getElementById('passengerName').textContent = name.toUpperCase();
            document.getElementById('passengerDetails').innerHTML = `
                <div class="detail-item"><span class="detail-label">CLASS:</span><span class="detail-value">${features.pclass}${features.pclass === 1 ? 'ST' : features.pclass === 2 ? 'ND' : 'RD'}</span></div>
                <div class="detail-item"><span class="detail-label">SEX:</span><span class="detail-value">${features.sex.toUpperCase()}</span></div>
                <div class="detail-item"><span class="detail-label">AGE:</span><span class="detail-value">${features.age}</span></div>
                <div class="detail-item"><span class="detail-label">FARE:</span><span class="detail-value">£${features.fare.toFixed(2)}</span></div>
                <div class="detail-item"><span class="detail-label">SIBSP:</span><span class="detail-value">${features.sibsp}</span></div>
                <div class="detail-item"><span class="detail-label">PARCH:</span><span class="detail-value">${features.parch}</span></div>`;

            updateGauge(probability);

            const survived = probability >= 0.5;
            const probabilityValue = document.getElementById('probabilityValue');
            probabilityValue.textContent = (probability * 100).toFixed(1) + '%';
            probabilityValue.className = 'probability-value ' + (survived ? 'survived' : 'perished');

            const alertBox = document.getElementById('alertBox');
            alertBox.className = 'alert-box ' + (survived ? 'survived' : 'perished');
            alertBox.innerHTML = survived ? '◈ HIGH SURVIVAL PROBABILITY ◈<br>PASSENGER LIKELY RESCUED' : '◈ LOW SURVIVAL PROBABILITY ◈<br>PASSENGER LIKELY LOST';

            const featureData = [
                { name: 'Sex (Male)', value: contributions.sex_male },
                { name: 'Passenger Class', value: contributions.pclass },
                { name: 'Age', value: contributions.age },
                { name: 'Siblings/Spouse', value: contributions.sibsp },
                { name: 'Parents/Children', value: contributions.parch },
                { name: 'Fare', value: contributions.fare },
                { name: 'Embarkation Port', value: contributions.embarked }
            ].sort((a, b) => Math.abs(b.value) - Math.abs(a.value));

            const maxAbs = Math.max(...featureData.map(f => Math.abs(f.value)));
            document.getElementById('featureBars').innerHTML = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">' +
                featureData.map(f => {
                    const isPositive = f.value >= 0;
                    const barWidth = (Math.abs(f.value) / maxAbs) * 50;
                    return `<div class="feature-item"><div class="feature-header"><span class="feature-name">${f.name}</span><span class="feature-value ${isPositive ? 'positive' : 'negative'}">${isPositive ? '+' : ''}${f.value.toFixed(3)}</span></div><div class="feature-bar-container"><div class="feature-bar-center"></div><div class="feature-bar ${isPositive ? 'positive' : 'negative'}" style="width: ${barWidth}%;"></div></div></div>`;
                }).join('') + '</div>';
        }

        function showLoading() {
            return new Promise(resolve => {
                document.getElementById('loadingOverlay').classList.add('active');
                setTimeout(() => { document.getElementById('loadingOverlay').classList.remove('active'); resolve(); }, 1500);
            });
        }

        document.getElementById('passengerForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            await showLoading();
            const features = {
                pclass: parseInt(document.getElementById('pclass').value),
                sex: document.getElementById('sex').value,
                age: parseFloat(document.getElementById('age').value),
                sibsp: parseInt(document.getElementById('sibsp').value),
                parch: parseInt(document.getElementById('parch').value),
                fare: parseFloat(document.getElementById('fare').value),
                embarked: document.getElementById('embarked').value
            };
            const name = document.getElementById('name').value || 'UNKNOWN';
            const { probability, contributions } = predict(features);
            updateDisplay(name, features, probability, contributions);
        });
    </script>
</body>
</html>
