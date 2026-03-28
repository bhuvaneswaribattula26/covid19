// --- DATA MODELS & CONSTANTS ---
        const SYMPTOMS_DATA = {
            common: [
                { id: 'fever', label: 'Fever or Chills', icon: '🤒', weight: 9, lcWeight: 8 },
                { id: 'cough', label: 'Dry Cough', icon: '🤧', weight: 7, lcWeight: 0 },
                { id: 'fatigue', label: 'Fatigue', icon: '🥱', weight: 7, lcWeight: 18 },
                { id: 'bodyAches', label: 'Muscle / Body Aches', icon: '🦴', weight: 5, lcWeight: 10 },
                { id: 'headache', label: 'Headache', icon: '🤕', weight: 5, lcWeight: 8 },
                { id: 'soreThroat', label: 'Sore Throat', icon: '🗣️', weight: 3, lcWeight: 0 },
                { id: 'nausea', label: 'Nausea or Vomiting', icon: '🤢', weight: 4, lcWeight: 0 },
                { id: 'diarrhea', label: 'Diarrhea', icon: '🚽', weight: 3, lcWeight: 0 }
            ],
            respiratory: [
                { id: 'shortnessOfBreath', label: 'Shortness of Breath', icon: '🫁', weight: 10, lcWeight: 15 }
            ],
            specific: [
                { id: 'lossOfTasteSmell', label: 'New loss of taste or smell', icon: '👅', weight: 10, lcWeight: 14 }
            ],
            emergency: [
                { id: 'chestPain', label: 'Pain or pressure in chest', icon: '💔', emWeight: 20, lcWeight: 12 },
                { id: 'confusion', label: 'New confusion', icon: '❓', emWeight: 18, lcWeight: 10 },
                { id: 'bluishLips', label: 'Pale, gray, or blue lips/skin', icon: '🥶', emWeight: 25, lcWeight: 0 },
                { id: 'persistentChestPressure', label: 'Persistent chest pressure', icon: '⚠️', emWeight: 22, lcWeight: 0 }
            ]
        };

        const CONDITIONS = [
            'Diabetes', 'Hypertension', 'Heart Disease', 'Asthma / COPD',
            'Obesity (BMI > 30)', 'Kidney Disease', 'Liver Disease',
            'Cancer / Immunosuppression', 'Pregnancy'
        ];

        const ACTION_PLANS = {
            Mild: {
                medical: [
                    "Rest at home and stay well hydrated (2.5–3L water/day).",
                    "OTC medications: Acetaminophen (Paracetamol) 500mg every 4–6 hrs for fever/aches.",
                    "Ibuprofen 400mg every 6–8 hrs if no contraindications.",
                    "Saline nasal spray for congestion.",
                    "Monitor temperature twice daily."
                ],
                vax: [
                    "Ensure primary vaccine series is complete (2 doses for most vaccines).",
                    "Booster dose recommended if >6 months since last vaccination.",
                    "Wait minimum 30 days post-recovery before scheduling booster.",
                    "Consult healthcare provider for updated bivalent booster eligibility."
                ],
                hygiene: [
                    "Isolate in a well-ventilated room. Keep windows open.",
                    "Use 70% isopropyl alcohol on high-touch surfaces every 4 hours.",
                    "Bleach solution (1000 ppm) for bathroom and kitchen disinfection daily.",
                    "Wash hands for 20+ seconds with soap; use 60%+ alcohol hand sanitizer.",
                    "Wear a well-fitted N95/KN95 mask if in shared spaces.",
                    "Use disposable gloves when handling trash or shared utensils."
                ],
                diet: [
                    "Vitamin C: 500mg supplement + citrus fruits (oranges, kiwi, guava).",
                    "Zinc: 15–30mg supplement + seeds, nuts (aids antiviral immunity).",
                    "Vitamin D: 1000–2000 IU supplement + limited sun exposure.",
                    "High-protein meals: eggs, lentils, chicken soup, Greek yogurt.",
                    "Warm fluids: ginger tea, turmeric-honey milk, herbal teas.",
                    "Avoid alcohol and processed foods during recovery."
                ],
                cautions: [
                    "Strict isolation for minimum 5 days from symptom onset.",
                    "Avoid contact with elderly, immunocompromised, or unvaccinated individuals.",
                    "Do not go to work, school, or public places.",
                    "Inform close contacts to monitor for symptoms.",
                    "Wear a mask days 6–10 even after isolation ends."
                ],
                triggers: [
                    "Difficulty breathing or shortness of breath.",
                    "Persistent chest pain or pressure.",
                    "Confusion or inability to stay awake.",
                    "Bluish lips or face."
                ]
            },
            Moderate: {
                medical: [
                    "Contact your primary care physician or telemedicine provider immediately.",
                    "OTC: Acetaminophen every 4–6 hrs for symptom management.",
                    "Pulse oximeter monitoring: Seek care if SpO₂ drops below 94%.",
                    "Prone positioning (lying on stomach) may help breathing.",
                    "Inhaled corticosteroids may be prescribed — consult a doctor.",
                    "Monoclonal antibody therapy may be eligible — ask your provider."
                ],
                vax: [
                    "Complete your primary vaccination series as soon as you recover.",
                    "Booster dose is strongly recommended — wait 30–90 days post-recovery.",
                    "Discuss with doctor if antiviral medication (Paxlovid) is appropriate.",
                    "Updated bivalent boosters provide broader protection against variants."
                ],
                hygiene: [
                    "Full household isolation in a dedicated room with a private bathroom if possible.",
                    "EPA-registered disinfectants (List N) for all surfaces twice daily.",
                    "Bleach solution (5000 ppm) for bathroom disinfection.",
                    "Caregiver must wear N95 mask and face shield when entering room.",
                    "All dishes/laundry washed separately on hot cycle (60°C+).",
                    "Improve ventilation: use HEPA air purifier if available."
                ],
                diet: [
                    "High-calorie, protein-dense diet to combat fatigue: 1.2–1.5g protein/kg body weight.",
                    "Zinc (25–40mg) + Vitamin C (1000mg) + Vitamin D (2000 IU) daily.",
                    "Anti-inflammatory foods: turmeric, ginger, berries, leafy greens.",
                    "Bone broth / chicken soup to support immune function.",
                    "Small, frequent meals if appetite is reduced.",
                    "Oral rehydration salts (ORS) if experiencing dehydration.",
                    "Probiotics (yogurt, kefir) to maintain gut health."
                ],
                cautions: [
                    "Isolation minimum 10 days or until symptom-free for 24+ hrs.",
                    "Avoid driving or operating machinery due to fatigue and confusion risk.",
                    "Do NOT use NSAIDs without physician guidance.",
                    "Ensure a responsible adult is monitoring your condition 24/7.",
                    "Keep emergency contact numbers accessible at all times."
                ],
                triggers: [
                    "Oxygen saturation < 94% — Go to ER immediately.",
                    "Respiratory rate > 30 breaths/minute.",
                    "Lips or fingernails turning blue or grayish.",
                    "Extreme lethargy, persistent confusion.",
                    "Severe dehydration — unable to retain fluids."
                ]
            },
            Severe: {
                medical: [
                    "⚠️ CALL EMERGENCY SERVICES (911 / local emergency) IMMEDIATELY.",
                    "Do not attempt to drive yourself to the hospital.",
                    "Hospital-level care required: supplemental oxygen, IV fluids, monitoring.",
                    "Potential treatments: Remdesivir (antiviral), Dexamethasone (corticosteroid), Baricitinib.",
                    "ICU admission may be necessary for ventilator support.",
                    "ECMO (Extracorporeal Membrane Oxygenation) in life-threatening cases."
                ],
                vax: [
                    "Vaccination status is critically important — disclose to ER physicians.",
                    "Priority post-recovery: complete/update vaccine series when medically cleared.",
                    "Post-hospitalization booster schedule will be set by your care team."
                ],
                hygiene: [
                    "Patient should be fully isolated under professional medical supervision.",
                    "Hospital-grade PPE required for all caregivers.",
                    "All home contacts should self-monitor and test immediately.",
                    "Deep clean entire residence with EPA List N disinfectants upon patient transfer."
                ],
                diet: [
                    "Medical nutritional support as prescribed by hospital dietitian.",
                    "IV nutrition may be required if oral intake is not possible.",
                    "Once stabilized: high-protein, calorie-dense foods with vitamin supplementation.",
                    "Avoid solid foods until breathing is stable and physician approves."
                ],
                cautions: [
                    "DO NOT self-medicate with unprescribed treatments.",
                    "Follow all physician and hospital discharge instructions precisely.",
                    "Post-discharge: bed rest with gradual return to activity over several weeks.",
                    "Mandatory follow-up appointments with pulmonologist and general physician.",
                    "Post-COVID rehabilitation may be required."
                ],
                triggers: [
                    "Immediate 911 call required — All symptoms indicate medical emergency.",
                    "You or someone nearby should administer CPR if pulse is absent.",
                    "Prepare patient's medication list and allergy history for ER staff."
                ]
            }
        };

        const REGIONAL_DATA = [
            { region: 'North America', variant: 'JN.1', risk: 'Moderate risk', cases: '42,300 cases', trend: 'Decreasing', arrow: '↓', color: 'var(--green)' },
            { region: 'Europe', variant: 'XBB.1.5', risk: 'Low risk', cases: '18,900 cases', trend: 'Stable', arrow: '→', color: 'var(--text-3)' },
            { region: 'South Asia', variant: 'JN.1.7', risk: 'High risk', cases: '95,000 cases', trend: 'Increasing', arrow: '↑', color: 'var(--red)' },
            { region: 'East Asia', variant: 'KP.2', risk: 'Moderate risk', cases: '31,000 cases', trend: 'Stable', arrow: '→', color: 'var(--text-3)' },
            { region: 'Africa', variant: 'BA.2.86', risk: 'Moderate risk', cases: '22,400 cases', trend: 'Decreasing', arrow: '↓', color: 'var(--green)' },
            { region: 'South America', variant: 'EG.5', risk: 'Low risk', cases: '14,200 cases', trend: 'Decreasing', arrow: '↓', color: 'var(--green)' }
        ];

        const CLINICS = [
            { name: 'City Health COVID Clinic', dist: '0.8 km', status: 'Open', contact: '+1-800-COV-HELP', hours: 'Mon–Sun 8am–8pm' },
            { name: 'MedExpress Urgent Care', dist: '1.4 km', status: 'Open', contact: '+1-800-MED-CARE', hours: '24/7' },
            { name: 'Regional General Hospital', dist: '3.2 km', status: 'Open 24/7', contact: '+1-911', hours: 'Emergency 24/7' },
            { name: 'Primary Care Associates', dist: '2.1 km', status: 'Closed', contact: '+1-800-PCA-CARE', hours: 'Mon–Fri 9am–5pm' }
        ];

        const MH_EXERCISES = [
            { title: 'Box Breathing 🔲', steps: ['Inhale slowly for 4 counts', 'Hold for 4 counts', 'Exhale for 4 counts', 'Hold empty for 4 counts', 'Repeat 4–8 times'] },
            { title: '4-7-8 Technique 🌬️', steps: ['Inhale through nose 4 counts', 'Hold 7 counts', 'Exhale through mouth 8 counts', 'Repeat 3–4 cycles'] },
            { title: '5-4-3-2-1 Grounding 🧘', steps: ['5 things you SEE', '4 things you TOUCH', '3 things you HEAR', '2 things you SMELL', '1 thing you TASTE'] }
        ];

        const MH_TIPS = [
            "Maintain a daily routine — wake and sleep at consistent times.",
            "Stay socially connected via video calls; avoid complete isolation.",
            "Limit news and social media to 30 minutes per day during illness.",
            "Engage in light stretching, reading, or creative hobbies.",
            "Write a daily gratitude journal — 3 things you're thankful for.",
            "Reach out to a mental health hotline if anxiety becomes overwhelming.",
            "Practice progressive muscle relaxation before sleep.",
            "Remember: recovery is a process — be patient with yourself."
        ];

        // --- APP STATE ---
        let appState = {
            symptoms: new Set(),
            age: null,
            duration: null,
            vaccinated: false,
            conditions: new Set()
        };

        // --- DOM INITIALIZATION ---
        document.addEventListener('DOMContentLoaded', initApp);

        function initApp() {
            renderSymptoms();
            renderConditions();
            renderRegionalData();
            renderClinics();
            renderMentalHealth();
        }

        // --- RENDERERS ---
        function renderSymptoms() {
            const container = document.getElementById('symptoms-container');
            container.innerHTML = '';
            
            Object.entries(SYMPTOMS_DATA).forEach(([catKey, items]) => {
                const catDiv = document.createElement('div');
                catDiv.className = 'symptom-category';
                
                let html = `<h3>${getCatName(catKey)}</h3>`;
                if(catKey === 'emergency') {
                    html += `<div class="emergency-note"><strong>⚠️ Warning:</strong> If you are experiencing any of these symptoms, please call emergency services immediately.</div>`;
                }
                
                html += `<div class="symptom-grid">`;
                items.forEach(sym => {
                    html += `
                    <div class="symptom-card glass-card cat-${catKey}" id="card-${sym.id}" onclick="toggleSymptom('${sym.id}')">
                        <div class="symptom-info">
                            <span class="symptom-icon">${sym.icon}</span>
                            <span style="font-weight: 500;">${sym.label}</span>
                        </div>
                        <div class="check-circle"><span class="check-icon">✓</span></div>
                    </div>`;
                });
                html += `</div>`;
                
                catDiv.innerHTML = html;
                container.appendChild(catDiv);
            });
        }

        function getCatName(key) {
            switch(key) {
                case 'common': return 'Common Symptoms';
                case 'respiratory': return 'Respiratory Symptoms';
                case 'specific': return 'Specific Symptoms';
                case 'emergency': return '🚨 Emergency Warning Signs';
            }
        }

        function renderConditions() {
            const grid = document.getElementById('conditions-grid');
            grid.innerHTML = CONDITIONS.map(cond => 
                `<button class="toggle-btn" id="cond-${sanitizeId(cond)}" onclick="toggleCondition('${cond}')">${cond}</button>`
            ).join('');
        }

        function renderRegionalData() {
            const grid = document.getElementById('regional-grid');
            grid.innerHTML = REGIONAL_DATA.map(d => `
                <div class="stat-card">
                    <div class="stat-region">${d.region}</div>
                    <div class="stat-cases">${d.cases}</div>
                    <div class="stat-trend">
                        <span style="color: ${d.color}; font-weight: 900;">${d.arrow}</span> ${d.trend}
                    </div>
                    <div style="font-size: 0.75rem; color: var(--text-3); margin-top: 0.5rem; border-top: 1px solid var(--border); padding-top: 0.5rem;">${d.variant} - ${d.risk}</div>
                </div>
            `).join('');
        }

        function renderClinics() {
            const list = document.getElementById('clinic-list');
            list.innerHTML = CLINICS.map(c => {
                const isOpen = c.status.includes('Open');
                return `
                <div class="clinic-card">
                    <div>
                        <div class="clinic-name">
                            <div class="dot ${isOpen ? 'open' : 'closed'}"></div>
                            ${c.name}
                        </div>
                        <div class="clinic-info">${c.hours}</div>
                        <div class="clinic-info" style="color: white; margin-top: 0.5rem;">📞 ${c.contact}</div>
                    </div>
                    <div class="clinic-dist">${c.dist}</div>
                </div>
            `}).join('');
        }

        function renderMentalHealth() {
            const exContainer = document.getElementById('mh-exercises');
            exContainer.innerHTML = MH_EXERCISES.map((ex, i) => `
                <div class="accordion" id="mh-acc-${i}">
                    <button class="accordion-header" onclick="toggleAccordion('mh-acc-${i}')">
                        ${ex.title}
                        <span class="chevron">▼</span>
                    </button>
                    <div class="accordion-content">
                        <div class="accordion-content-inner">
                            <ul>${ex.steps.map(s => `<li>${s}</li>`).join('')}</ul>
                        </div>
                    </div>
                </div>
            `).join('');

            const tipsContainer = document.getElementById('mh-tips');
            tipsContainer.innerHTML = MH_TIPS.map((tip, i) => `
                <div><span class="mh-num">${i+1}.</span><span>${tip}</span></div>
            `).join('');
        }

        function sanitizeId(str) { return str.toLowerCase().replace(/[^a-z0-9]/g, ''); }

        // --- INTERACTION LOGIC ---
        function toggleTheme() {
            document.body.classList.toggle('light-theme');
        }

        function dismissModal() {
            document.getElementById('disclaimer-modal').classList.add('hidden');
        }

        function toggleSymptom(id) {
            const card = document.getElementById(`card-${id}`);
            if(appState.symptoms.has(id)) {
                appState.symptoms.delete(id);
                card.classList.remove('selected');
            } else {
                appState.symptoms.add(id);
                card.classList.add('selected');
            }
            document.getElementById('symptom-count').textContent = appState.symptoms.size;
        }

        function setVax(status) {
            appState.vaccinated = status;
            document.getElementById('vax-yes').classList.toggle('active', status);
            document.getElementById('vax-no').classList.toggle('active', !status);
        }

        function toggleCondition(cond) {
            const btn = document.getElementById(`cond-${sanitizeId(cond)}`);
            if(appState.conditions.has(cond)) {
                appState.conditions.delete(cond);
                btn.classList.remove('active');
            } else {
                appState.conditions.add(cond);
                btn.classList.add('active');
            }
        }

        function switchTab(tabId) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            // find the button that was clicked. It depends on onclick attribute text for simplicity.
            document.querySelector(`[onclick="switchTab('${tabId}')"]`).classList.add('active');
            document.getElementById(tabId).classList.add('active');
        }

        function toggleAccordion(id) {
            document.getElementById(id).classList.toggle('open');
        }

        // --- NAVIGATION LOGIC ---
        function goToStep2() {
            if(appState.symptoms.size === 0) {
                alert("Please select at least one symptom to proceed.");
                return;
            }
            document.getElementById('step-1').classList.add('hidden');
            document.getElementById('step-2').classList.remove('hidden');
            
            document.getElementById('dot-1').classList.add('done');
            document.getElementById('dot-1').classList.remove('active');
            document.getElementById('dot-2').classList.add('active');
            document.getElementById('progress-fill').style.width = '100%';
            document.getElementById('step-label').textContent = 'Step 2: Patient Information';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function goToStep1() {
            document.getElementById('step-2').classList.add('hidden');
            document.getElementById('step-1').classList.remove('hidden');
            
            document.getElementById('dot-2').classList.remove('active');
            document.getElementById('dot-1').classList.remove('done');
            document.getElementById('dot-1').classList.add('active');
            document.getElementById('progress-fill').style.width = '0%';
            document.getElementById('step-label').textContent = 'Step 1: Symptom Tracking';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function resetApp() {
            appState.symptoms.clear();
            appState.age = null;
            appState.duration = null;
            appState.vaccinated = false;
            appState.conditions.clear();
            
            // clear inputs
            document.getElementById('age-input').value = '';
            document.getElementById('duration-input').value = '';
            setVax(false);
            
            // hide dashboard, show step 1
            document.getElementById('dashboard').classList.add('hidden');
            document.getElementById('progress-container').classList.remove('hidden');
            goToStep1();
            
            // re-render to wipe dom states
            initApp();
            document.getElementById('symptom-count').textContent = '0';
        }

        // --- ANALYSIS LOGIC ---
        function analyzeData() {
            const ageInput = document.getElementById('age-input').value;
            if(!ageInput) { alert("Please enter your age."); return; }
            
            appState.age = parseInt(ageInput) || 30;
            appState.duration = parseInt(document.getElementById('duration-input').value) || 0;
            
            // Show loading overlay
            document.getElementById('loading-overlay').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                processAndRenderResults();
                
                document.getElementById('loading-overlay').classList.add('hidden');
                document.body.style.overflow = '';
                
                document.getElementById('step-2').classList.add('hidden');
                document.getElementById('progress-container').classList.add('hidden');
                document.getElementById('dashboard').classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 900);
        }

        function processAndRenderResults() {
            // Get all flattened symptom objects
            const allSymptoms = Object.values(SYMPTOMS_DATA).flat();
            const selectedObjs = allSymptoms.filter(s => appState.symptoms.has(s.id));
            
            // 1. SCORING ENGINE
            let nonEmSum = 0;
            let emSum = 0;
            selectedObjs.forEach(s => {
                if(s.weight) nonEmSum += s.weight;
                if(s.emWeight) emSum += s.emWeight;
            });
            
            const GROUP_MAX = 63;
            const NON_EMERGENCY_BAND = 55;
            let baseScore = (nonEmSum / GROUP_MAX) * NON_EMERGENCY_BAND;
            baseScore += emSum;
            
            // Modifiers
            if(appState.age >= 65) baseScore *= 1.25;
            else if(appState.age >= 50) baseScore *= 1.1;
            
            if(appState.vaccinated) baseScore *= 0.75;
            
            baseScore += Math.min(appState.conditions.size * 3, 12);
            
            let finalScore = Math.min(Math.round(baseScore), 100);
            
            let severity = 'Mild';
            let color = 'var(--green)';
            if(finalScore > 25 && finalScore <= 60) { severity = 'Moderate'; color = 'var(--amber)'; }
            else if(finalScore > 60) { severity = 'Severe'; color = 'var(--red)'; }

            // Apply Severity rendering
            document.getElementById('score-text').textContent = finalScore + '%';
            document.getElementById('score-text').style.color = color;
            
            const scoreRing = document.getElementById('score-ring');
            scoreRing.style.stroke = color;
            const dashOffset = 439.8 - (439.8 * finalScore) / 100;
            scoreRing.style.strokeDashoffset = dashOffset;
            
            const sevBadge = document.getElementById('severity-badge');
            sevBadge.textContent = severity + ' Risk';
            sevBadge.style.color = color;
            sevBadge.style.background = `rgba(${severity === 'Mild' ? '34,197,94' : severity === 'Moderate' ? '245,158,11' : '239,68,68'}, 0.1)`;
            sevBadge.style.border = `1px solid ${color}`;
            
            const descs = {
                Mild: "Your symptoms indicate a mild infection. Rest and monitor.",
                Moderate: "Your symptoms indicate moderate severity. Medical consultation advised.",
                Severe: "Critical severity detected. Seek emergency care immediately."
            };
            document.getElementById('severity-desc').textContent = descs[severity];
            
            // Meta chips
            document.getElementById('chip-age').textContent = `Age: ${appState.age}`;
            document.getElementById('chip-dur').textContent = `Duration: ${appState.duration} days`;
            document.getElementById('chip-vax').textContent = `Vaccinated: ${appState.vaccinated ? 'Yes' : 'No'}`;
            document.getElementById('chip-cond').textContent = `Conditions: ${appState.conditions.size}`;
            
            // Emergency Banner
            document.getElementById('emergency-banner').style.display = severity === 'Severe' ? 'block' : 'none';
            
            // Render Action Plan
            const plan = ACTION_PLANS[severity];
            const buildList = (arr) => `<ul>${arr.map(a => `<li>${a}</li>`).join('')}</ul>`;
            
            document.getElementById('content-medical').innerHTML = buildList(plan.medical);
            document.getElementById('content-vax').innerHTML = buildList(plan.vax);
            document.getElementById('content-hygiene').innerHTML = buildList(plan.hygiene);
            document.getElementById('content-diet').innerHTML = buildList(plan.diet);
            document.getElementById('content-cautions').innerHTML = buildList(plan.cautions);
            document.getElementById('triggers-list').innerHTML = plan.triggers.map(t => `<li>${t}</li>`).join('');

            // Render Symptom Tags
            const tagsCont = document.getElementById('symptom-tags-container');
            tagsCont.innerHTML = selectedObjs.map(s => {
                let cls = 'common';
                for(let cat in SYMPTOMS_DATA) {
                    if(SYMPTOMS_DATA[cat].find(x => x.id === s.id)) cls = cat;
                }
                return `<span class="tag ${cls}">${s.icon} ${s.label}</span>`;
            }).join('');
            
            // 2. LONG-COVID ENGINE
            let lcSum = 0;
            selectedObjs.forEach(s => { if(s.lcWeight) lcSum += s.lcWeight; });
            let lcRisk = (lcSum / 95) * 100;
            
            if(appState.duration >= 14) lcRisk *= 1.25;
            else if(appState.duration >= 7) lcRisk *= 1.1;
            
            if(appState.age >= 50) lcRisk *= 1.1;
            if(appState.vaccinated) lcRisk *= 0.7;
            let lcRiskFinal = Math.min(Math.round(lcRisk), 100);
            
            let lcCat = 'Low'; let lcClass = 'lc-low';
            if(lcRiskFinal > 25 && lcRiskFinal <= 55) { lcCat = 'Moderate'; lcClass = 'lc-mod'; }
            else if(lcRiskFinal > 55) { lcCat = 'High'; lcClass = 'lc-high'; }
            
            document.getElementById('lc-score').textContent = lcRiskFinal + '%';
            const lcBadge = document.getElementById('lc-badge');
            lcBadge.textContent = lcCat + ' Probability';
            lcBadge.className = 'lc-badge ' + lcClass;
            
            const lcDescs = {
                Low: "Your current profile indicates a lower risk of long-term symptoms.",
                Moderate: "You have an elevated risk for persistent symptoms post-recovery.",
                High: "High probability of persistent long-COVID symptoms. Close monitoring required."
            };
            document.getElementById('lc-desc').textContent = lcDescs[lcCat];
            
            const watchList = [
                "Persistent fatigue beyond 4 weeks",
                "Brain fog / difficulty concentrating",
                "Shortness of breath on minimal exertion",
                "Heart palpitations", "Joint and muscle pain",
                "Sleep disturbances", "Post-exertional malaise (PEM)"
            ];
            
            let displayedWatch = watchList.slice();
            if(lcRiskFinal <= 20) displayedWatch = watchList.slice(0, 3);
            
            document.getElementById('lc-watch').innerHTML = displayedWatch.map(w => `<span class="watch-chip">${w}</span>`).join('');
        }