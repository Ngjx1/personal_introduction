const PANELS = {
  goals: {
    accent: 'var(--gold)',
    html: `
      <div class="eyebrow2">what I'm looking toward</div>
      <h2>Future Goals</h2>

      <div class="goal-stats">
        <div class="goal-stat"><div class="gs-val">Nov '26</div><div class="gs-label">Internship start</div></div>
        <div class="goal-stat"><div class="gs-val">6 mo</div><div class="gs-label">Duration</div></div>
        <div class="goal-stat"><div class="gs-val">AI + SWE</div><div class="gs-label">Focus area</div></div>
      </div>

      <div class="vision-card">
        <h3><span class="vi">🎯</span> Seeking internship</h3>
        <p>Looking for a <strong>6-month internship (2 Nov 2026 – 18 Apr 2027)</strong> where I can apply AI-driven analytics and full-stack development to real production problems.</p>
      </div>
      <div class="vision-card">
        <h3><span class="vi">🧠</span> AI × System Architecture</h3>
        <p>Drawn to teams at the intersection of <strong>AI/ML and robust system architecture</strong> — wrapping models in something reliable for real users: healthcare dashboards, webcam analytics, or live trading systems.</p>
      </div>
      <div class="vision-card">
        <h3><span class="vi">🚀</span> Long-term vision</h3>
        <p>Keep building things that combine <strong>data, automation, and good engineering practice</strong> — and eventually mentor other students the way I've learned from every project on this page.</p>
      </div>`
  },
  experience: {
    accent: 'var(--coral)',
    html: `
      <div class="eyebrow2">experience & education</div>
      <h2>Experience</h2>

      <div class="tl-entry">
        <div class="tl-avatar" style="background:linear-gradient(135deg,rgba(255,107,91,0.15),rgba(255,107,91,0.04));border-color:rgba(255,107,91,0.2);">🎓</div>
        <div class="tl-body">
          <div class="tl-when"><span class="status-dot" style="background:var(--lime);"></span> Jun 2024 — Present</div>
          <div class="tl-org">TAR UMT, Malaysia</div>
          <div class="tl-role">Bachelor of Software Engineering (Honours)</div>
          <div class="stat-callout">
            <span class="big">3.7509</span>
            <span class="label">CGPA / 4.0</span>
          </div>
          <div class="award-row">
            <span class="award">🏆 President's List ×1</span>
            <span class="award">⭐ Dean's List ×4</span>
            <span class="award">🥇 Soft Skills Gold</span>
          </div>
          <div class="section-label" style="margin-top:14px;">Coursework</div>
          <div class="chip-row">
            <span class="chip">Problem Solving</span><span class="chip">OOP</span><span class="chip">Database Apps</span>
            <span class="chip">Software Dev</span><span class="chip">Mobile App Dev</span><span class="chip">Systems Analysis</span>
            <span class="chip">Operating Systems</span><span class="chip">Data Structures</span><span class="chip">Computer Networks</span>
            <span class="chip">Interface Design</span><span class="chip">Artificial Intelligence</span>
          </div>
        </div>
      </div>

      <div class="tl-entry">
        <div class="tl-avatar" style="background:linear-gradient(135deg,rgba(124,111,240,0.15),rgba(124,111,240,0.04));border-color:rgba(124,111,240,0.2);">📚</div>
        <div class="tl-body">
          <div class="tl-when"><span class="status-dot" style="background:var(--text-dim);"></span> Jun 2023 — Jun 2024</div>
          <div class="tl-org">TAR UMT, Malaysia</div>
          <div class="tl-role">Foundation in Computing (Information Technology)</div>
          <div class="stat-callout">
            <span class="big">3.7134</span>
            <span class="label">CGPA / 4.0</span>
          </div>
          <div class="section-label" style="margin-top:14px;">Coursework & Foundations</div>
          <div class="chip-row">
            <span class="chip">Computer Networks</span><span class="chip">ITE</span><span class="chip">Data Management</span>
            <span class="chip">Web Dev</span><span class="chip">Emerging IT Trends</span><span class="chip">Operating Systems</span>
            <span class="chip">Mobile App Dev</span>
          </div>
          <div class="section-label" style="margin-top:14px;">Programming & Tools</div>
          <div class="chip-row">
            <span class="chip">Python</span><span class="chip">HTML</span><span class="chip">C++</span><span class="chip">Kotlin</span>
            <span class="chip">VS Code</span><span class="chip">Android Studio</span><span class="chip">MS Access</span><span class="chip">ChatGPT</span>
          </div>
          <div class="section-label" style="margin-top:14px;">Extracurriculars</div>
          <ul class="tl-bullets">
            <li><strong>Badminton:</strong> Active member.</li>
          </ul>
        </div>
      </div>

      <div class="tl-entry">
        <div class="tl-avatar" style="background:linear-gradient(135deg,rgba(242,160,7,0.15),rgba(242,160,7,0.04));border-color:rgba(242,160,7,0.2);">🏠</div>
        <div class="tl-body">
          <div class="tl-when"><span class="status-dot" style="background:var(--text-dim);"></span> Mar 2026 — Jun 2026 · 4 mos</div>
          <div class="tl-org">Vetro Property</div>
          <div class="tl-role">Real Estate Agent · Part-time</div>
          <div class="section-label" style="margin-top:14px;">Location</div>
          <div class="chip-row"><span class="chip">Lebuhraya SILK, Off Cheras Selatan, Balakong, Selangor</span><span class="chip">On-site</span></div>
          <ul class="tl-bullets">
            <li><strong>Outbound Sales & Lead Generation:</strong> Executed cold calling campaigns to drive client acquisition.</li>
            <li><strong>Contract Management (SPA):</strong> Facilitated and managed Sales and Purchase Agreements.</li>
            <li><strong>Lease Administration:</strong> Drafted and processed rental and tenancy agreements.</li>
            <li><strong>Database Management:</strong> Maintained comprehensive client and property owner records using Excel.</li>
          </ul>
        </div>
      </div>

      <div class="tl-entry">
        <div class="tl-avatar" style="background:linear-gradient(135deg,rgba(23,184,166,0.15),rgba(23,184,166,0.04));border-color:rgba(23,184,166,0.2);">📈</div>
        <div class="tl-body">
          <div class="tl-when"><span class="status-dot" style="background:var(--cyan);"></span> Ongoing · extracurricular</div>
          <div class="tl-org">Independent Quant Trading</div>
          <div class="tl-role">Built & deployed my own algorithmic trading strategy</div>
          <ul class="tl-bullets">
            <li>Designed a systematic trend-following strategy trading QQQ/TQQQ, deployed live on <strong>Moomoo's</strong> algo trading platform</li>
            <li>Open-sourced a parallel version on GitHub wired to a <strong>Telegram bot</strong> that pushes real-time alerts for every signal, state change, and trade execution</li>
          </ul>
        </div>
      </div>
      
      <div class="tl-entry">
        <div class="tl-avatar" style="background:linear-gradient(135deg,rgba(111,179,63,0.15),rgba(111,179,63,0.04));border-color:rgba(111,179,63,0.2);">🏫</div>
        <div class="tl-body">
          <div class="tl-when"><span class="status-dot" style="background:var(--text-dim);"></span> 2018 — 2023</div>
          <div class="tl-org">Sekolah Menengah Stella Maris</div>
          <div class="tl-role">High School</div>
          <div class="stat-callout">
            <span class="big">4A, 5B</span>
            <span class="label">SPM</span>
          </div>
          <div class="section-label" style="margin-top:14px;">Extracurriculars</div>
          <ul class="tl-bullets">
            <li><strong>Boys Brigade:</strong> Rank of Lance Corporal. Organised events including training camps with others.</li>
            <li><strong>Scout:</strong> Active member.</li>
            <li><strong>Badminton:</strong> Active member.</li>
          </ul>
        </div>
      </div>

      <div class="tl-entry">
        <div class="tl-avatar" style="background:linear-gradient(135deg,rgba(242,160,7,0.15),rgba(242,160,7,0.04));border-color:rgba(242,160,7,0.2);">🎒</div>
        <div class="tl-body">
          <div class="tl-when"><span class="status-dot" style="background:var(--text-dim);"></span> Graduated 2017</div>
          <div class="tl-org">SJK(C) Kuen Cheng</div>
          <div class="tl-role">Primary School</div>
          <div class="stat-callout">
            <span class="big">1A, 2B, 3C</span>
            <span class="label">UPSR</span>
          </div>
          <div class="section-label" style="margin-top:14px;">Extracurriculars</div>
          <ul class="tl-bullets">
            <li><strong>Scout:</strong> Active member.</li>
            <li><strong>Badminton:</strong> Active member.</li>
          </ul>
        </div>
      </div>`
  },
  projects: {
    accent: 'var(--cyan)',
    html: `
      <div class="eyebrow2">projects</div>
      <h2>Projects</h2>

      <div class="bento-card" style="--glow:rgba(124,111,240,0.35);">
        <div class="bento-top">
          <h3>Multi-modal Emotion Recognition & Analytics System</h3>
          <span class="status-tag fyp">Final Year Project</span>
        </div>
        <p class="bento-desc">Visual and voice emotion recognition SaaS using CNNs for real-time webcam & static photo analysis. WebSocket live video pipeline, analytics dashboard with auto-generated CSV/Excel/PDF reports, JWT auth, bcrypt hashing, and role-based access control.</p>
        <div class="tech-row">
          <span class="tech-badge"><span class="td" style="background:#000"></span>Next.js</span>
          <span class="tech-badge"><span class="td" style="background:#009688"></span>FastAPI</span>
          <span class="tech-badge"><span class="td" style="background:#3ECF8E"></span>Supabase</span>
          <span class="tech-badge"><span class="td" style="background:#FF6F00"></span>CNN</span>
          <span class="tech-badge"><span class="td" style="background:#FF6B5B"></span>WebSocket</span>
          <span class="tech-badge"><span class="td" style="background:#7C6FF0"></span>JWT / RBAC</span>
        </div>
      </div>

      <div class="bento-card" style="--glow:rgba(111,179,63,0.35);">
        <div class="bento-top">
          <h3>Bus Terminal Management Database</h3>
          <span class="status-tag">Academic</span>
        </div>
        <p class="bento-desc">Oracle PL/SQL database system managing terminal operations. Authored advanced queries, procedures, and triggers for automated ticket extensions, automated bus maintenance scheduling, and generated dynamic management reports using cursors.</p>
        <div class="tech-row">
          <span class="tech-badge"><span class="td" style="background:#F2A007"></span>Oracle PL/SQL</span>
          <span class="tech-badge"><span class="td" style="background:#3776AB"></span>Database Design</span>
        </div>
      </div>
      
      <div class="bento-card" style="--glow:rgba(255,107,91,0.35);">
        <div class="bento-top">
          <h3>4EVABEAUTY Booking System</h3>
          <span class="status-tag">Academic</span>
        </div>
        <p class="bento-desc">C++ console application for managing beauty service bookings. Developed core modules including payment processing, display of available slots, booking logic, and general sales report generation.</p>
        <div class="tech-row">
          <span class="tech-badge"><span class="td" style="background:#00599C"></span>C++</span>
          <span class="tech-badge"><span class="td" style="background:#17B8A6"></span>Algorithms</span>
        </div>
      </div>

      <div class="bento-card" style="--glow:rgba(23,184,166,0.35);">
        <div class="bento-top">
          <h3>J.P. Morgan Investment System</h3>
          <span class="status-tag">Academic</span>
        </div>
        <p class="bento-desc">x86 Assembly language program for managing investments. Handled low-level computations including Simple Interest and Compound Interest calculators, as well as account balance top-ups and bank details modification.</p>
        <div class="tech-row">
          <span class="tech-badge"><span class="td" style="background:#6FB33F"></span>x86 Assembly</span>
          <span class="tech-badge"><span class="td" style="background:#7C6FF0"></span>FPU Math</span>
        </div>
      </div>

      <div class="bento-card" style="--glow:rgba(242,160,7,0.35);">
        <div class="bento-top">
          <h3>Silver Saving Bond App (SRS)</h3>
          <span class="status-tag">Academic</span>
        </div>
        <p class="bento-desc">Collaborative Software Requirements Specification (SRS) for a comprehensive retirement planner, safe-haven marketplace, and scam shield. Authored detailed use cases for Incentive Eligibility Checker and Contribution Calculators.</p>
        <div class="tech-row">
          <span class="tech-badge"><span class="td" style="background:#17B8A6"></span>Systems Analysis</span>
          <span class="tech-badge"><span class="td" style="background:#FF6B5B"></span>UML Design</span>
        </div>
      </div>

      <div class="bento-card" style="--glow:rgba(255,107,91,0.3);">
        <div class="bento-top">
          <h3>Clinic Ng & Singh Management System</h3>
          <span class="status-tag">Academic</span>
        </div>
        <p class="bento-desc">Java-based application automating Patient, Doctor, Consultation, Treatment, and Pharmacy workflows. Modular Consultation Management module linking records — built with OOP principles for a scalable architecture.</p>
        <div class="tech-row">
          <span class="tech-badge"><span class="td" style="background:#F89820"></span>Java</span>
          <span class="tech-badge"><span class="td" style="background:#7C6FF0"></span>OOP</span>
        </div>
      </div>

      <div class="bento-card" style="--glow:rgba(23,184,166,0.3);">
        <div class="bento-top">
          <h3>AI-Powered ASL Recognition System</h3>
          <span class="status-tag">Academic</span>
        </div>
        <p class="bento-desc">Real-time American Sign Language recognition using MediaPipe to convert 3D hand landmarks into a normalized 65-element vector. Evaluated Random Forest, SVM, and MLP — Random Forest won on real-time performance. Live GUI + data augmentation for robustness.</p>
        <div class="tech-row">
          <span class="tech-badge"><span class="td" style="background:#3776AB"></span>Python</span>
          <span class="tech-badge"><span class="td" style="background:#0097A7"></span>MediaPipe</span>
          <span class="tech-badge"><span class="td" style="background:#6FB33F"></span>Random Forest</span>
        </div>
      </div>

      <div class="bento-card" style="--glow:rgba(124,111,240,0.35);">
        <div class="bento-top">
          <h3>Food Portion Analysis: Separating Overlapping Food Items on Plates Using Marker-Controlled Watershed</h3>
          <span class="status-tag">Academic</span>
        </div>
        <p class="bento-desc">An advanced food portion analysis and semantic segmentation system designed to detect, classify, and separate touching or overlapping food items on a plate using Deep Learning models (DeepLabV3+, MAnet, UNet) combined with the Marker-Controlled Watershed algorithm.</p>
        <div class="tech-row">
          <span class="tech-badge"><span class="td" style="background:#FF6F00"></span>DeepLabV3+</span>
          <span class="tech-badge"><span class="td" style="background:#009688"></span>MAnet / UNet</span>
          <span class="tech-badge"><span class="td" style="background:#17B8A6"></span>Watershed Algorithm</span>
          <span class="tech-badge"><span class="td" style="background:#7C6FF0"></span>Semantic Segmentation</span>
        </div>
      </div>

      <div class="bento-card" style="--glow:rgba(111,179,63,0.35);">
        <div class="bento-top">
          <h3>Systematic QQQ/TQQQ Trading Bot</h3>
          <span class="status-tag live">Live Deployment</span>
        </div>
        <p class="bento-desc">Rules-based trend-following strategy shifting between cash, QQQ, and TQQQ using drawdown-from-ATH zones, MA200/MA20 trend confirmation, and a volume-based top-detection filter. Cooldown for whipsaw avoidance, T+1-safe execution. Live on Moomoo + open-source Telegram alerting.</p>
        <div class="tech-row">
          <span class="tech-badge"><span class="td" style="background:#3776AB"></span>Python</span>
          <span class="tech-badge"><span class="td" style="background:#F2A007"></span>Algo Trading</span>
          <span class="tech-badge"><span class="td" style="background:#0088cc"></span>Telegram Bot API</span>
        </div>
      </div>`
  },
  hobbies: {
    accent: 'var(--lime)',
    html: `
      <div class="eyebrow2">hobbies & adventures</div>
      <h2>Hobbies</h2>

      <div class="milestone">
        <span class="ms-icon">🏔️</span>
        <div class="ms-body">
          <div class="ms-title">Summited Mount Kinabalu (4,095 m)</div>
          <div class="ms-date">21 Jan 2026 · Kota Kinabalu, Sabah</div>
        </div>
      </div>

      <div class="section-label">Activities</div>
      <div class="activity-grid">
        <div class="activity-card"><span class="icon">🚴</span><span class="name">Cycling</span></div>
        <div class="activity-card"><span class="icon">🏸</span><span class="name">Badminton</span></div>
        <div class="activity-card"><span class="icon">🏊</span><span class="name">Swimming</span></div>
        <div class="activity-card"><span class="icon">🥾</span><span class="name">Hiking</span></div>
        <div class="activity-card"><span class="icon">🏎️</span><span class="name">Motorsport</span></div>
        <div class="activity-card"><span class="icon">✈️</span><span class="name">Aviation</span></div>
        <div class="activity-card"><span class="icon">🏃</span><span class="name">Running</span></div>
      </div>

      <div class="section-label">Races & Marathons</div>
      <div class="race-timeline">
        <div class="race-entry"><span class="race-year">2018</span><span class="race-name">Mid Valley Charity Run · 5 Aug</span><span class="race-dist">5 km</span></div>
        <div class="race-entry"><span class="race-year">2019</span><span class="race-name">Seri Saujana Marathon · 24 Feb</span><span class="race-dist">5 km</span></div>
        <div class="race-entry"><span class="race-year">2024</span><span class="race-name">Personal Run · 22 Sep</span><span class="race-dist">7 km</span></div>
      </div>

      <div class="section-label">Countries & Cities Visited</div>
      <div class="travel-grid">
        <div class="travel-chip"><span class="tf">🇨🇳</span>Shanghai<span class="td">2026</span></div>
        <div class="travel-chip"><span class="tf">🇲🇾</span>Kota Kinabalu<span class="td">2026</span></div>
        <div class="travel-chip"><span class="tf">🇯🇵</span>Osaka<span class="td">2025</span></div>
        <div class="travel-chip"><span class="tf">🇮🇩</span>Bali<span class="td">2025</span></div>
        <div class="travel-chip"><span class="tf">🇹🇭</span>Phuket<span class="td">2024</span></div>
        <div class="travel-chip"><span class="tf">🇹🇼</span>Taoyuan<span class="td">2024</span></div>
        <div class="travel-chip"><span class="tf">🇨🇳</span>Guangzhou<span class="td">2018</span></div>
        <div class="travel-chip"><span class="tf">🇭🇰</span>Hong Kong<span class="td">2018</span></div>
        <div class="travel-chip"><span class="tf">🇲🇴</span>Macau<span class="td">2018</span></div>
        <div class="travel-chip"><span class="tf">🇹🇭</span>Songkhla<span class="td">2013</span></div>
      </div>`
  },
  skills: {
    accent: 'var(--violet)',
    html: `
      <div class="eyebrow2">skills & achievements</div>
      <h2>Skills & Certifications</h2>

      <div class="section-label">Programming Languages</div>
      <div class="skill-grid">
        <span class="skill-badge"><span class="si">🐍</span>Python</span>
        <span class="skill-badge"><span class="si">☕</span>Java</span>
        <span class="skill-badge"><span class="si">⚡</span>C++</span>
        <span class="skill-badge"><span class="si">⚙️</span>Assembly</span>
        <span class="skill-badge"><span class="si">✨</span>JavaScript</span>
        <span class="skill-badge"><span class="si">🐘</span>PHP</span>
      </div>

      <div class="section-label">Web Development</div>
      <div class="skill-grid">
        <span class="skill-badge"><span class="si">🌐</span>HTML</span>
        <span class="skill-badge"><span class="si">🎨</span>CSS</span>
      </div>

      <div class="section-label">Database</div>
      <div class="skill-grid">
        <span class="skill-badge"><span class="si">🗄️</span>MySQL</span>
      </div>

      <div class="section-label">Frameworks & Tools</div>
      <div class="chip-row">
        <span class="chip">React.js</span>
        <span class="chip">MediaPipe</span>
        <span class="chip">Jupyter Notebook</span>
        <span class="chip">GitHub</span>
        <span class="chip">Visual Studio Code</span>
        <span class="chip">Linux</span>
        <span class="chip">Apache NetBeans IDE 25</span>
        <span class="chip">XAMPP</span>
        <span class="chip">Cisco Packet Tracer</span>
        <span class="chip">Supabase</span>
        <span class="chip">Flask</span>
      </div>

      <div class="section-label">Certifications & Credentials</div>
      <ul class="tl-bullets" style="margin-top: 10px;">
        <li style="margin-bottom: 12px;"><strong>Career Essentials in Generative AI</strong><br><span style="color:var(--text-dim);font-size:0.85em;">Microsoft & LinkedIn · Jul 2026 · Prompt Engineering</span></li>
        <li style="margin-bottom: 12px;"><strong>Agents League - Reasoning Agents</strong><br><span style="color:var(--text-dim);font-size:0.85em;">Global AI Community · Jul 2026 · AI Reasoning Models</span></li>
        <li style="margin-bottom: 12px;"><strong>Gemini Certified Educator</strong><br><span style="color:var(--text-dim);font-size:0.85em;">Google for Education · Jun 2026</span></li>
        <li style="margin-bottom: 12px;"><strong>NetQ Deployment and Installation</strong><br><span style="color:var(--text-dim);font-size:0.85em;">NVIDIA · Jun 2026 · Networking</span></li>
        <li style="margin-bottom: 12px;"><strong>Applied Skills: Generate reports with AI agents</strong><br><span style="color:var(--text-dim);font-size:0.85em;">Microsoft · May 2026</span></li>
        <li style="margin-bottom: 12px;"><strong>Claude code 101</strong><br><span style="color:var(--text-dim);font-size:0.85em;">Anthropic · May 2026</span></li>
        <li style="margin-bottom: 12px;"><strong>AI Untuk Rakyat</strong><br><span style="color:var(--text-dim);font-size:0.85em;">MyDIGITAL Corporation · May 2026</span></li>
        <li style="margin-bottom: 12px;"><strong>MY5G Ericsson Malaysia Pioneers Programme</strong><br><span style="color:var(--text-dim);font-size:0.85em;">Ericsson · Apr 2025 · Telecommunications, IoT</span></li>
        <li style="margin-bottom: 12px;"><strong>CCNA: Introduction to Networks</strong><br><span style="color:var(--text-dim);font-size:0.85em;">Cisco Networking Academy · Nov 2025</span></li>
      </ul>
      
      <div class="section-label">Languages Spoken</div>
      <div class="skill-grid">
        <span class="lang-badge"><span class="flag">🇬🇧</span>English<span class="level">Fluent</span></span>
        <span class="lang-badge"><span class="flag">🇨🇳</span>Mandarin<span class="level">Fluent</span></span>
        <span class="lang-badge"><span class="flag">🇲🇾</span>Malay<span class="level">Intermediate</span></span>
      </div>`
  },
  contact: {
    accent: 'var(--cyan)',
    html: `
      <div class="eyebrow2">get in touch</div>
      <h2>Let's build something together.</h2>
      <p>Open to a 6-month internship (Nov 2026 – Apr 2027) — or just a good conversation about AI, full-stack builds, or trading bots.</p>
      <div class="contact-links">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ngjingxu1@gmail.com" class="btn btn-primary" target="_blank" rel="noopener">✉️ email me</a>
        <a href="https://github.com/Ngjx1" class="btn btn-ghost" target="_blank" rel="noopener">🐙 github</a>
        <a href="https://www.linkedin.com/in/ngjingxu/" class="btn btn-ghost" target="_blank" rel="noopener">💼 linkedin</a>
      </div>
      <p style="margin-top:22px; font-size:0.82rem; text-align:center;">Seputeh, Kuala Lumpur &middot; +60 11 3972 6088</p>`
  }
};

/* ═══════════════════════════════════════════════════════════════
   2. PANEL MANAGEMENT & INTERACTION
   ═══════════════════════════════════════════════════════════════ */

const overlay    = document.getElementById('overlay');
const panel      = document.getElementById('panel');
const panelC     = document.getElementById('panelContent');
const closeBtn   = document.getElementById('closeBtn');

let activeNode = null;
let highlightedNode = null;
let lastInteractionTime = 0;

function openPanel(key, node) {
  const data = PANELS[key];
  if (!data) return;
  
  activeNode = node;
  lastInteractionTime = clock.getElapsedTime();
  
  panel.style.setProperty('--accent', data.accent);
  panelC.innerHTML = data.html;
  
  // Dynamic Transition: Radial wipe like feel by scaling up
  panel.style.transform = 'scale(0.95)';
  panel.style.opacity = '0';
  
  const targetPos = new THREE.Vector3();
  node.getWorldPosition(targetPos);
  
  const camOffset = new THREE.Vector3(0, 0, 3.5);
  camOffset.applyQuaternion(camera.quaternion);
  const finalCamPos = targetPos.clone().add(camOffset);
  
  // Fast camera easing
  gsap.to(camera.position, {
    x: finalCamPos.x, y: finalCamPos.y, z: finalCamPos.z,
    duration: 0.8,
    ease: "power4.out"
  });
  
  gsap.to(controlsTarget, {
    x: targetPos.x, y: targetPos.y, z: targetPos.z,
    duration: 0.8,
    ease: "power4.out",
    onComplete: () => {
      overlay.classList.add('open');
      gsap.to(panel, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
    }
  });

  // Boost Particle Speed on active spline
  const splineData = splines.find(s => s.group === node.parent);
  if (splineData) {
    streamParticles.forEach(sp => {
      if (sp.spline === splineData) {
        gsap.to(sp, { speed: sp.baseSpeed * 4.0, duration: 0.5 });
      }
    });
  }
}

function closePanel() { 
  lastInteractionTime = clock.getElapsedTime();
  gsap.to(panel, { scale: 0.95, opacity: 0, duration: 0.2, onComplete: () => {
    overlay.classList.remove('open'); 
  }});
  
  gsap.to(camera.position, {
    x: defaultCameraPos.x, y: defaultCameraPos.y, z: defaultCameraPos.z,
    duration: 1.0,
    ease: "power3.inOut"
  });
  
  gsap.to(controlsTarget, {
    x: 0, y: 0, z: 0,
    duration: 1.0,
    ease: "power3.inOut",
    onComplete: () => {
      // Restore particle speed
      if (activeNode) {
        const splineData = splines.find(s => s.group === activeNode.parent);
        if (splineData) {
          streamParticles.forEach(sp => {
            if (sp.spline === splineData) {
              gsap.to(sp, { speed: sp.baseSpeed, duration: 1.0 });
            }
          });
        }
      }
      activeNode = null;
    }
  });
}

closeBtn.addEventListener('click', closePanel);
overlay.addEventListener('click', e => { if (e.target === overlay) closePanel(); });

/* ═══════════════════════════════════════════════════════════════
   3. THREE.JS SCENE SETUP & SELECTIVE BLOOM
   ═══════════════════════════════════════════════════════════════ */

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
const W = () => window.innerWidth;
const H = () => window.innerHeight;
renderer.setSize(W(), H());
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050510, 0.035);

const camera = new THREE.PerspectiveCamera(45, W() / H(), 0.1, 100);
const defaultCameraPos = new THREE.Vector3(0, 0, W() < 768 ? 10 : 8);
camera.position.copy(defaultCameraPos);

const controlsTarget = new THREE.Vector3(0, 0, 0);

// SINGLE-PASS BLOOM (much faster than selective dual-pass)
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
// Higher threshold = only bright objects bloom, rest stays crisp
const bloomPass = new UnrealBloomPass(new THREE.Vector2(W(), H()), 0.7, 0.3, 0.4);
composer.addPass(bloomPass);
composer.addPass(new OutputPass());

const mainGroup = new THREE.Group();
scene.add(mainGroup);

/* ═══════════════════════════════════════════════════════════════
   4. CUSTOM AI CORE
   ═══════════════════════════════════════════════════════════════ */
const coreGroup = new THREE.Group();
mainGroup.add(coreGroup);

const innerCoreGeo = new THREE.IcosahedronGeometry(0.8, 2);
const innerCoreMat = new THREE.MeshBasicMaterial({ color: 0x17B8A6, wireframe: false });
const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
coreGroup.add(innerCore);

const midCoreGeo = new THREE.IcosahedronGeometry(1.2, 1);
const midCoreMat = new THREE.MeshBasicMaterial({ color: 0xFF6B5B, wireframe: true, transparent: true, opacity: 0.4 });
const midCore = new THREE.Mesh(midCoreGeo, midCoreMat);
coreGroup.add(midCore);

const outerGeo = new THREE.IcosahedronGeometry(1.5, 3);
const outerMat = new THREE.PointsMaterial({ color: 0x7C6FF0, size: 0.05, transparent: true, opacity: 0.6 });
const outerShell = new THREE.Points(outerGeo, outerMat);
coreGroup.add(outerShell);

for (let i = 0; i < 3; i++) {
  const ringGeo = new THREE.TorusGeometry(1.8 + i * 0.4, 0.005, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xF2A007, transparent: true, opacity: 0.3 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.random() * Math.PI;
  ring.rotation.y = Math.random() * Math.PI;
  ring.userData = { speedX: (Math.random() - 0.5) * 0.02, speedY: (Math.random() - 0.5) * 0.02 };
  coreGroup.add(ring);
}

/* ═══════════════════════════════════════════════════════════════
   5. ORBITING CATEGORY NODES & TROIKA TEXT
   ═══════════════════════════════════════════════════════════════ */
const CLUSTERS = [
  { key: 'experience', label: 'Experience', teaser: 'TAR UMT · Vetro Property · Trading', hex: '#FF6B5B' },
  { key: 'projects',   label: 'Projects',   teaser: '4 builds — SaaS, AI, databases', hex: '#17B8A6' },
  { key: 'hobbies',    label: 'Hobbies',    teaser: 'Mountaineering · Travel · Sports', hex: '#6FB33F' },
  { key: 'skills',     label: 'Skills',     teaser: 'Python · Next.js · PL/SQL · NetQ', hex: '#7C6FF0' },
  { key: 'goals',      label: 'Goals',      teaser: 'AI Internship · Software Engineering', hex: '#F2A007' },
  { key: 'contact',    label: 'Contact',    teaser: 'Email · GitHub · LinkedIn', hex: '#00BCD4' }
];

const nodes = [];
const interactableObjects = [];
const splines = [];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

CLUSTERS.forEach((def, index) => {
  const group = new THREE.Group();
  
  // Calculate angle for 6 items
  const angle = (Math.PI * 2) / 6 * index;
  const radius = 3.5 + (index % 2) * 0.5; // Staggered radii
  
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const y = (Math.random() - 0.5) * 2;
  
  group.position.set(x, y, z);
  group.userData = { angle: angle, radius: radius, speed: 0.2 + Math.random() * 0.2, baseY: y };

  const baseColor = new THREE.Color(def.hex).lerp(new THREE.Color(0x000000), 0.3);
  const hoverColor = new THREE.Color(def.hex).lerp(new THREE.Color(0xffffff), 0.5);

  const nodeGeo = new THREE.SphereGeometry(0.3, 32, 32);
  const nodeMat = new THREE.MeshBasicMaterial({ color: baseColor });
  const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
  group.add(nodeMesh);
  interactableObjects.push(nodeMesh);
  
  const auraGeo = new THREE.SphereGeometry(0.45, 16, 16);
  const auraMat = new THREE.MeshBasicMaterial({ color: baseColor, transparent: true, opacity: 0.3, wireframe: true });
  const aura = new THREE.Mesh(auraGeo, auraMat);
  group.add(aura);
  
  // Discoverability: Large main text with outline
  const textMesh = new Text();
  textMesh.text = def.label.toUpperCase();
  textMesh.fontSize = 0.3;
  textMesh.position.set(0, -0.6, 0);
  textMesh.color = def.hex;
  textMesh.anchorX = 'center';
  textMesh.outlineWidth = "5%";
  textMesh.outlineColor = "#000000";
  textMesh.material = new THREE.MeshBasicMaterial({ color: new THREE.Color(def.hex) });
  textMesh.sync();
  group.add(textMesh);
  
  // Discoverability: Teaser text, hidden by default
  const teaserMesh = new Text();
  teaserMesh.text = def.teaser;
  teaserMesh.fontSize = 0.12;
  teaserMesh.position.set(0, -0.9, 0);
  teaserMesh.color = "#eeeeee";
  teaserMesh.anchorX = 'center';
  teaserMesh.outlineWidth = "8%";
  teaserMesh.outlineColor = "#000000";
  teaserMesh.fillOpacity = 0;
  teaserMesh.outlineOpacity = 0;
  teaserMesh.sync();
  group.add(teaserMesh);
  
  nodeMesh.userData = { key: def.key, isNode: true, baseColor: baseColor, hoverColor: hoverColor, text: textMesh, teaser: teaserMesh };

  mainGroup.add(group);
  nodes.push(group);
  
  const points = [];
  points.push(new THREE.Vector3(0, 0, 0));
  points.push(new THREE.Vector3(x * 0.5, y + (Math.random()-0.5)*2, z * 0.5));
  points.push(new THREE.Vector3(x, y, z));
  const curve = new THREE.QuadraticBezierCurve3(points[0], points[1], points[2]);
  splines.push({ curve, color: new THREE.Color(def.hex), group });
  
  const lineGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
  const lineMat = new THREE.LineBasicMaterial({ color: new THREE.Color(def.hex), transparent: true, opacity: 0.15 });
  const lineMesh = new THREE.Line(lineGeo, lineMat);
  lineMesh.userData = { splineIndex: splines.length - 1 };
  mainGroup.add(lineMesh);

  if (!prefersReducedMotion) {
    const startX = (Math.random() - 0.5) * 20;
    const startY = (Math.random() - 0.5) * 20;
    const startZ = (Math.random() - 0.5) * 20;
    group.position.set(startX, startY, startZ);
    gsap.to(group.position, {
      x: x, y: y, z: z,
      duration: 2.5,
      ease: "power3.out",
      delay: index * 0.2
    });
  }
});

/* ═══════════════════════════════════════════════════════════════
   6. ANIMATED DATA STREAMS
   ═══════════════════════════════════════════════════════════════ */
const streamParticles = [];
for(let i = 0; i < 48; i++) {
  const pGeo = new THREE.SphereGeometry(0.04, 8, 8);
  const pMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const p = new THREE.Mesh(pGeo, pMat);
  
  const splineData = splines[i % splines.length];
  p.material.color = splineData.color;
  
  scene.add(p);
  const baseSpeed = 0.002 + Math.random() * 0.003;
  streamParticles.push({
    mesh: p,
    spline: splineData,
    t: Math.random(),
    baseSpeed: baseSpeed,
    speed: baseSpeed
  });
}

/* ═══════════════════════════════════════════════════════════════
   7. INTERACTIVE FLUID BACKGROUND PARTICLES
   ═══════════════════════════════════════════════════════════════ */
const bgParticleCount = W() < 768 ? 400 : 1000;
const bgGeo = new THREE.BufferGeometry();
const bgPos = new Float32Array(bgParticleCount * 3);
const bgVel = []; 
const bgBase = []; 

for(let i = 0; i < bgParticleCount; i++) {
  const x = (Math.random() - 0.5) * 40;
  const y = (Math.random() - 0.5) * 40;
  const z = (Math.random() - 0.5) * 40 - 10;
  
  bgPos[i*3] = x; bgPos[i*3+1] = y; bgPos[i*3+2] = z;
  bgBase.push(new THREE.Vector3(x, y, z));
  bgVel.push(new THREE.Vector3(0, 0, 0));
}
bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPos, 3));
const bgMat = new THREE.PointsMaterial({ color: 0x445577, size: 0.06, transparent: true, opacity: 0.6 });
const bgPoints = new THREE.Points(bgGeo, bgMat);
scene.add(bgPoints);

/* ═══════════════════════════════════════════════════════════════
   8. INTERACTION (Mouse / Raycaster)
   ═══════════════════════════════════════════════════════════════ */
const pointer = new THREE.Vector2(-10, -10);
const raycaster = new THREE.Raycaster();

const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
const mousePos3D = new THREE.Vector3();

// Pre-allocated reusable vectors to avoid GC pressure in animation loop
const _tmpVec = new THREE.Vector3();
const _tmpDir = new THREE.Vector3();

function markInteraction() {
  lastInteractionTime = clock.getElapsedTime();
}

function highlightNode(node) {
  if (highlightedNode === node) return;
  unhighlight();
  highlightedNode = node;
  node.material.color.copy(node.userData.hoverColor);
  node.scale.setScalar(1.2);
  
  // Show teaser and expand text
  gsap.to(node.userData.teaser, { fillOpacity: 1, outlineOpacity: 1, duration: 0.3 });
  gsap.to(node.userData.text.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 0.3 });
  canvas.style.cursor = 'pointer';
}
function unhighlight() {
  if (!highlightedNode) return;
  highlightedNode.material.color.copy(highlightedNode.userData.baseColor);
  highlightedNode.scale.setScalar(1.0);
  
  // Hide teaser and restore text
  gsap.to(highlightedNode.userData.teaser, { fillOpacity: 0, outlineOpacity: 0, duration: 0.3 });
  gsap.to(highlightedNode.userData.text.scale, { x: 1.0, y: 1.0, z: 1.0, duration: 0.3 });
  highlightedNode = null;
  canvas.style.cursor = 'default';
}

document.addEventListener('mousemove', e => {
  markInteraction();
  if (overlay.classList.contains('open')) return;
  pointer.x = (e.clientX / W()) * 2 - 1;
  pointer.y = -(e.clientY / H()) * 2 + 1;
  
  // Desktop hover logic
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(interactableObjects);
  if (hits.length) { highlightNode(hits[0].object); }
  else { unhighlight(); }
});
document.addEventListener('touchmove', e => {
  markInteraction();
}, { passive: true });

// Mouse click
canvas.addEventListener('click', () => {
  markInteraction();
  if (overlay.classList.contains('open')) return;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(interactableObjects);
  if (hits.length) {
    openPanel(hits[0].object.userData.key, hits[0].object);
  }
});

// Two-stage tap for touch devices
canvas.addEventListener('touchend', e => {
  markInteraction();
  if (overlay.classList.contains('open')) return;
  if (!e.changedTouches[0]) return;
  
  pointer.x = (e.changedTouches[0].clientX / W()) * 2 - 1;
  pointer.y = -(e.changedTouches[0].clientY / H()) * 2 + 1;
  
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(interactableObjects);
  
  if (hits.length) { 
    const node = hits[0].object;
    if (highlightedNode === node) {
      e.preventDefault(); 
      openPanel(node.userData.key, node);
    } else {
      e.preventDefault(); 
      highlightNode(node);
    }
  } else {
    unhighlight();
  }
}, { passive: false });


/* ═══════════════════════════════════════════════════════════════
   9. ANIMATION LOOP
   ═══════════════════════════════════════════════════════════════ */
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();

  // Idle Animation Logic
  if (!activeNode && !prefersReducedMotion) {
    const idleTime = elapsed - lastInteractionTime;
    if (idleTime > 20) {
      const idleProgress = Math.min((idleTime - 20) / 10, 1.0); 
      mainGroup.rotation.y += 0.002 * idleProgress;
      const zoomTarget = (W() < 768 ? 12 : 10) + Math.sin(elapsed * 0.2) * 1.5;
      camera.position.z += (zoomTarget - camera.position.z) * 0.02 * idleProgress;
    } else {
      controlsTarget.x += (pointer.x * 1.5 - controlsTarget.x) * 0.05;
      controlsTarget.y += (pointer.y * 1.5 - controlsTarget.y) * 0.05;
      mainGroup.rotation.y += (elapsed * 0.05 - mainGroup.rotation.y) * 0.05;
      camera.position.z += (defaultCameraPos.z - camera.position.z) * 0.05;
    }
  }

  camera.lookAt(controlsTarget);

  innerCore.rotation.y += 0.01;
  innerCore.rotation.x += 0.005;
  midCore.rotation.y -= 0.015;
  midCore.rotation.z += 0.01;
  outerShell.rotation.y += 0.002;
  
  coreGroup.children.forEach(c => {
    if (c.userData.speedX) {
      c.rotation.x += c.userData.speedX;
      c.rotation.y += c.userData.speedY;
    }
  });

  nodes.forEach(group => {
    group.position.y = group.userData.baseY + Math.sin(elapsed * group.userData.speed) * 0.2;
    const splineData = splines.find(s => s.group === group);
    if(splineData) {
      splineData.curve.v2.copy(group.position);
    }
    
    group.children.forEach(child => {
      if (child.isText) {
        child.quaternion.copy(camera.quaternion);
      }
    });
  });
  
  mainGroup.children.forEach(child => {
    if (child.isLine && child.userData.splineIndex !== undefined) {
      const curve = splines[child.userData.splineIndex].curve;
      child.geometry.setFromPoints(curve.getPoints(20));
    }
  });

  streamParticles.forEach(sp => {
    sp.t += sp.speed;
    if (sp.t >= 1) sp.t = 0;
    
    const pos = sp.spline.curve.getPointAt(sp.t);
    pos.applyMatrix4(mainGroup.matrixWorld);
    sp.mesh.position.copy(pos);
  });

  raycaster.setFromCamera(pointer, camera);
  raycaster.ray.intersectPlane(mousePlane, mousePos3D);
  
  const positions = bgPoints.geometry.attributes.position.array;
  const isOpen = overlay.classList.contains('open');
  for (let i = 0; i < bgParticleCount; i++) {
    const i3 = i * 3;
    const px = positions[i3];
    const py = positions[i3+1];
    const pz = positions[i3+2];
    
    _tmpVec.set(px, py, pz);
    const dist = _tmpVec.distanceTo(mousePos3D);
    
    if (dist < 4.0 && !isOpen) {
      _tmpDir.copy(_tmpVec).sub(mousePos3D).normalize();
      const force = (4.0 - dist) * 0.02;
      bgVel[i].addScaledVector(_tmpDir, force);
    }
    
    _tmpDir.copy(bgBase[i]).sub(_tmpVec);
    bgVel[i].addScaledVector(_tmpDir, 0.005);
    bgVel[i].multiplyScalar(0.9);
    
    positions[i3] += bgVel[i].x;
    positions[i3+1] += bgVel[i].y;
    positions[i3+2] += bgVel[i].z;
  }
  bgPoints.geometry.attributes.position.needsUpdate = true;

  // Single-pass bloom render
  composer.render();
}

/* ═══════════════════════════════════════════════════════════════
   10. RESIZE
   ═══════════════════════════════════════════════════════════════ */
window.addEventListener('resize', () => {
  camera.aspect = W() / H();
  camera.updateProjectionMatrix();
  defaultCameraPos.z = W() < 768 ? 10 : 8;
  if (!activeNode) camera.position.copy(defaultCameraPos);
  renderer.setSize(W(), H());
  composer.setSize(W(), H());
});

animate();

/* ═══════════════════════════════════════════════════════════════
   11. NAV LINK HANDLERS
   ═══════════════════════════════════════════════════════════════ */
const navContact = document.getElementById('nav-contact');
const navHome = document.getElementById('nav-home');

if (navContact) {
  navContact.addEventListener('click', e => {
    e.preventDefault();
    // Find the contact node mesh
    const contactNode = interactableObjects.find(obj => obj.userData.key === 'contact');
    if (contactNode) openPanel('contact', contactNode);
  });
}

if (navHome) {
  navHome.addEventListener('click', e => {
    e.preventDefault();
    if (overlay.classList.contains('open')) closePanel();
  });
}
