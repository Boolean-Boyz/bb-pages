---
layout: none
title: Titanic Survival Predictor - 1912 Newspaper Edition
description: Predict Titanic passenger survival with a vintage 1912 newspaper theme using logistic regression
permalink: /titanic/newspaper
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Atlantic Daily - April 15, 1912</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=IM+Fell+English:ital@0;1&family=UnifrakturMaguntia&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'IM Fell English', serif;
            background: #f4e4bc;
            background-image:
                url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            background-blend-mode: multiply;
            color: #1a1a1a;
            min-height: 100vh;
            padding: 20px;
        }

        .newspaper {
            max-width: 900px;
            margin: 0 auto;
            background: #f8f0dc;
            padding: 30px 40px;
            box-shadow:
                0 0 0 1px #d4c4a8,
                0 0 0 4px #f8f0dc,
                0 0 0 5px #d4c4a8,
                5px 5px 15px rgba(0,0,0,0.3);
            position: relative;
        }

        .newspaper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg,
                transparent 0%,
                rgba(139, 119, 79, 0.05) 50%,
                rgba(139, 119, 79, 0.1) 100%);
            pointer-events: none;
        }

        .masthead {
            text-align: center;
            border-bottom: 3px double #1a1a1a;
            padding-bottom: 15px;
            margin-bottom: 15px;
        }

        .newspaper-title {
            font-family: 'UnifrakturMaguntia', cursive;
            font-size: 3.5rem;
            letter-spacing: 2px;
            margin-bottom: 5px;
        }

        .date-line {
            font-family: 'Playfair Display', serif;
            font-size: 0.9rem;
            letter-spacing: 3px;
            text-transform: uppercase;
        }

        .price {
            font-size: 0.8rem;
            margin-top: 5px;
        }

        .main-headline {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #1a1a1a;
        }

        .main-headline h1 {
            font-family: 'Playfair Display', serif;
            font-size: 2.8rem;
            font-weight: 900;
            line-height: 1.1;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .subheadline {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-size: 1.1rem;
            margin-top: 10px;
        }

        .columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-top: 20px;
        }

        .column {
            border-right: 1px solid #1a1a1a;
            padding-right: 30px;
        }

        .column:last-child {
            border-right: none;
            padding-right: 0;
        }

        .section-header {
            font-family: 'Playfair Display', serif;
            font-size: 1.3rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            border-bottom: 2px solid #1a1a1a;
            padding-bottom: 5px;
            margin-bottom: 15px;
            text-align: center;
        }

        .manifest-form {
            background: #f0e6d0;
            border: 1px solid #1a1a1a;
            padding: 15px;
        }

        .form-row {
            display: flex;
            border-bottom: 1px dotted #8b7b5a;
            padding: 8px 0;
            align-items: center;
        }

        .form-row:last-child {
            border-bottom: none;
        }

        .form-label {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            font-size: 0.85rem;
            width: 120px;
            flex-shrink: 0;
        }

        .form-input {
            flex: 1;
            font-family: 'IM Fell English', serif;
            font-size: 1rem;
            background: transparent;
            border: none;
            border-bottom: 1px solid #1a1a1a;
            padding: 3px 5px;
            color: #1a1a1a;
        }

        .form-input:focus {
            outline: none;
            background: rgba(255,255,255,0.3);
        }

        select.form-input {
            cursor: pointer;
        }

        .calculate-btn {
            width: 100%;
            margin-top: 15px;
            padding: 12px;
            font-family: 'Playfair Display', serif;
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            background: #1a1a1a;
            color: #f8f0dc;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
        }

        .calculate-btn:hover {
            background: #3a3a3a;
        }

        .prediction-section {
            margin-top: 25px;
            display: none;
        }

        .prediction-section.visible {
            display: block;
        }

        .prediction-headline {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 900;
            text-align: center;
            padding: 15px;
            border: 3px double #1a1a1a;
            margin-bottom: 15px;
            line-height: 1.2;
        }

        .prediction-headline.survived {
            background: #e8f5e9;
        }

        .prediction-headline.perished {
            background: #fbe9e7;
        }

        .probability-display {
            text-align: center;
            font-family: 'Playfair Display', serif;
            font-size: 1.2rem;
            margin-bottom: 15px;
        }

        .probability-value {
            font-size: 2.5rem;
            font-weight: 900;
        }

        .feature-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.85rem;
        }

        .feature-table th {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            text-align: left;
            border-bottom: 2px solid #1a1a1a;
            padding: 8px 5px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 0.75rem;
        }

        .feature-table td {
            padding: 6px 5px;
            border-bottom: 1px dotted #8b7b5a;
            vertical-align: middle;
        }

        .bar-cell {
            width: 150px;
        }

        .bar-container {
            height: 12px;
            background: #e0d6c0;
            position: relative;
            border: 1px solid #8b7b5a;
        }

        .bar {
            height: 100%;
            position: absolute;
            top: 0;
            transition: width 0.5s ease;
        }

        .bar.positive {
            background: repeating-linear-gradient(
                90deg,
                #2e7d32,
                #2e7d32 2px,
                #1b5e20 2px,
                #1b5e20 4px
            );
            left: 50%;
        }

        .bar.negative {
            background: repeating-linear-gradient(
                90deg,
                #c62828,
                #c62828 2px,
                #b71c1c 2px,
                #b71c1c 4px
            );
            right: 50%;
        }

        .bar-center {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 1px;
            background: #1a1a1a;
        }

        .impact-value {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            text-align: right;
            width: 60px;
        }

        .impact-value.positive {
            color: #2e7d32;
        }

        .impact-value.negative {
            color: #c62828;
        }

        .article-text {
            font-size: 0.95rem;
            line-height: 1.6;
            text-align: justify;
            margin-top: 15px;
            text-indent: 1.5em;
        }

        .article-text::first-letter {
            font-size: 2.5rem;
            float: left;
            line-height: 1;
            margin-right: 5px;
            font-family: 'Playfair Display', serif;
            font-weight: 900;
        }

        .decorative-rule {
            text-align: center;
            margin: 20px 0;
            font-size: 1.2rem;
        }

        .footer-line {
            text-align: center;
            margin-top: 25px;
            padding-top: 15px;
            border-top: 1px solid #1a1a1a;
            font-size: 0.8rem;
            font-style: italic;
        }

        @media (max-width: 768px) {
            .columns {
                grid-template-columns: 1fr;
            }
            .column {
                border-right: none;
                border-bottom: 1px solid #1a1a1a;
                padding-right: 0;
                padding-bottom: 20px;
                margin-bottom: 20px;
            }
            .newspaper-title {
                font-size: 2.5rem;
            }
            .main-headline h1 {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <div class="newspaper">
        <header class="masthead">
            <div class="newspaper-title">The Atlantic Daily</div>
            <div class="date-line">New York, Monday, April 15, 1912</div>
            <div class="price">Price Two Cents</div>
        </header>

        <div class="main-headline">
            <h1>Great Ship Titanic Sinks On Maiden Voyage</h1>
            <p class="subheadline">Over 1,500 Souls Lost in Maritime Catastrophe — Survivors Tell of Horror</p>
        </div>

        <div class="columns">
            <div class="column">
                <h2 class="section-header">◆ Passenger Manifest ◆</h2>
                <form class="manifest-form" id="passengerForm">
                    <div class="form-row">
                        <label class="form-label">Name:</label>
                        <input type="text" class="form-input" id="name" placeholder="Enter passenger name" required>
                    </div>
                    <div class="form-row">
                        <label class="form-label">Class:</label>
                        <select class="form-input" id="pclass" required>
                            <option value="1">First Class</option>
                            <option value="2">Second Class</option>
                            <option value="3" selected>Third Class</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label class="form-label">Sex:</label>
                        <select class="form-input" id="sex" required>
                            <option value="female">Female</option>
                            <option value="male" selected>Male</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label class="form-label">Age:</label>
                        <input type="number" class="form-input" id="age" min="0" max="100" value="30" required>
                    </div>
                    <div class="form-row">
                        <label class="form-label">Siblings/Spouse:</label>
                        <input type="number" class="form-input" id="sibsp" min="0" max="10" value="0" required>
                    </div>
                    <div class="form-row">
                        <label class="form-label">Parents/Children:</label>
                        <input type="number" class="form-input" id="parch" min="0" max="10" value="0" required>
                    </div>
                    <div class="form-row">
                        <label class="form-label">Fare (£):</label>
                        <input type="number" class="form-input" id="fare" min="0" max="600" step="0.01" value="15" required>
                    </div>
                    <div class="form-row">
                        <label class="form-label">Embarked:</label>
                        <select class="form-input" id="embarked" required>
                            <option value="S" selected>Southampton</option>
                            <option value="C">Cherbourg</option>
                            <option value="Q">Queenstown</option>
                        </select>
                    </div>
                    <button type="submit" class="calculate-btn">Divine This Passenger's Fate</button>
                </form>

                <p class="article-text">
                    The scientific method of logistical regression, as employed by the most learned statisticians of our age, permits us to calculate with remarkable precision the probable fate of any passenger aboard the ill-fated vessel. By examining the manifest particulars — class, sex, age, and familial accompaniment — we may divine whether Providence smiled upon each soul.
                </p>
            </div>

            <div class="column">
                <div id="predictionSection" class="prediction-section">
                    <h2 class="section-header">◆ Fate Revealed ◆</h2>

                    <div id="predictionHeadline" class="prediction-headline">
                        Awaiting Passenger Details...
                    </div>

                    <div class="probability-display">
                        Probability of Survival: <span id="probabilityValue" class="probability-value">—%</span>
                    </div>

                    <div class="decorative-rule">— ✦ —</div>

                    <h3 class="section-header" style="font-size: 1rem;">Factors of Influence</h3>

                    <table class="feature-table">
                        <thead>
                            <tr>
                                <th>Factor</th>
                                <th>Impact</th>
                                <th class="bar-cell">Contribution</th>
                            </tr>
                        </thead>
                        <tbody id="featureTable">
                        </tbody>
                    </table>
                </div>

                <div id="placeholderText" class="article-text" style="text-indent: 0;">
                    <p class="decorative-rule">— ✦ —</p>
                    <p style="text-align: center; font-style: italic;">
                        Complete the passenger manifest to reveal their probable fate upon that fateful night of April 14th, 1912.
                    </p>
                </div>
            </div>
        </div>

        <div class="footer-line">
            This statistical engine employs coefficients derived from actual Titanic passenger records.<br>
            "Women and Children First" — The immortal cry that echoed across the freezing Atlantic.
        </div>
    </div>

    <script>
        const COEFFICIENTS = {
            intercept: 5.3041,
            pclass: -1.0866,
            sex_male: -2.7569,
            age: -0.0436,
            sibsp: -0.3761,
            parch: -0.0615,
            fare: 0.0024,
            embarked_C: 0.4267,
            embarked_Q: 0.0836,
            embarked_S: 0
        };

        function sigmoid(z) {
            return 1 / (1 + Math.exp(-z));
        }

        function predict(features) {
            let logOdds = COEFFICIENTS.intercept;
            const contributions = {};

            const pclassContrib = COEFFICIENTS.pclass * features.pclass;
            logOdds += pclassContrib;
            contributions.pclass = pclassContrib;

            const sexContrib = features.sex === 'male' ? COEFFICIENTS.sex_male : 0;
            logOdds += sexContrib;
            contributions.sex_male = sexContrib;

            const ageContrib = COEFFICIENTS.age * features.age;
            logOdds += ageContrib;
            contributions.age = ageContrib;

            const sibspContrib = COEFFICIENTS.sibsp * features.sibsp;
            logOdds += sibspContrib;
            contributions.sibsp = sibspContrib;

            const parchContrib = COEFFICIENTS.parch * features.parch;
            logOdds += parchContrib;
            contributions.parch = parchContrib;

            const fareContrib = COEFFICIENTS.fare * features.fare;
            logOdds += fareContrib;
            contributions.fare = fareContrib;

            let embarkedContrib = 0;
            if (features.embarked === 'C') {
                embarkedContrib = COEFFICIENTS.embarked_C;
            } else if (features.embarked === 'Q') {
                embarkedContrib = COEFFICIENTS.embarked_Q;
            }
            logOdds += embarkedContrib;
            contributions.embarked = embarkedContrib;

            const probability = sigmoid(logOdds);
            return { probability, contributions };
        }

        function updateDisplay(name, probability, contributions) {
            const predictionSection = document.getElementById('predictionSection');
            const placeholderText = document.getElementById('placeholderText');
            const predictionHeadline = document.getElementById('predictionHeadline');
            const probabilityValue = document.getElementById('probabilityValue');
            const featureTable = document.getElementById('featureTable');

            predictionSection.classList.add('visible');
            placeholderText.style.display = 'none';

            const survived = probability >= 0.5;
            predictionHeadline.className = 'prediction-headline ' + (survived ? 'survived' : 'perished');

            if (survived) {
                predictionHeadline.innerHTML = `"${name.toUpperCase()}"<br>AMONG THE RESCUED!`;
            } else {
                predictionHeadline.innerHTML = `"${name.toUpperCase()}"<br>LOST TO THE DEEP`;
            }

            probabilityValue.textContent = (probability * 100).toFixed(1) + '%';

            const featureData = [
                { name: 'Sex', key: 'sex_male', value: contributions.sex_male },
                { name: 'Passenger Class', key: 'pclass', value: contributions.pclass },
                { name: 'Age', key: 'age', value: contributions.age },
                { name: 'Siblings/Spouse', key: 'sibsp', value: contributions.sibsp },
                { name: 'Parents/Children', key: 'parch', value: contributions.parch },
                { name: 'Fare Paid', key: 'fare', value: contributions.fare },
                { name: 'Embarkation Port', key: 'embarked', value: contributions.embarked }
            ];

            featureData.sort((a, b) => Math.abs(b.value) - Math.abs(a.value));
            const maxAbs = Math.max(...featureData.map(f => Math.abs(f.value)));

            featureTable.innerHTML = '';
            featureData.forEach(feature => {
                const isPositive = feature.value >= 0;
                const barWidth = (Math.abs(feature.value) / maxAbs) * 50;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${feature.name}</td>
                    <td class="impact-value ${isPositive ? 'positive' : 'negative'}">
                        ${isPositive ? '+' : ''}${feature.value.toFixed(3)}
                    </td>
                    <td class="bar-cell">
                        <div class="bar-container">
                            <div class="bar-center"></div>
                            <div class="bar ${isPositive ? 'positive' : 'negative'}"
                                 style="width: ${barWidth}%;"></div>
                        </div>
                    </td>
                `;
                featureTable.appendChild(row);
            });
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

            const name = document.getElementById('name').value || 'Unknown Passenger';
            const { probability, contributions } = predict(features);
            updateDisplay(name, probability, contributions);
        });

        document.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('change', function() {
                const form = document.getElementById('passengerForm');
                if (form.checkValidity()) {
                    form.dispatchEvent(new Event('submit'));
                }
            });
        });
    </script>
</body>
</html>
