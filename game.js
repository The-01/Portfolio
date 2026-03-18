/* ═══════════════════════════════════════════════════════════
   CRM TYPE RUSH — game.js
   Full typing speed game with Beginner/Intermediate/Expert
═══════════════════════════════════════════════════════════ */

// ── WORD BANKS ────────────────────────────────────────────────────────────
const WORDS = {
	beginner: [
		// Level 1 — Very short CRM basics
		["CRM", "form", "view", "lead", "case", "task", "goal", "note", "team", "role", "user", "flow", "rule", "grid", "list", "menu", "tab", "page", "field", "icon"],
		// Level 2
		[
			"quote",
			"order",
			"email",
			"phone",
			"account",
			"contact",
			"record",
			"entity",
			"queue",
			"chart",
			"owner",
			"stage",
			"value",
			"group",
			"query",
			"plugin",
			"action",
			"ribbon",
			"filter",
			"search"
		],
		// Level 3
		[
			"workflow",
			"business",
			"customer",
			"pipeline",
			"solution",
			"security",
			"product",
			"invoice",
			"service",
			"support",
			"manager",
			"license",
			"setting",
			"profile",
			"address",
			"history",
			"message",
			"subject",
			"status",
			"region"
		],
		// Level 4
		[
			"dashboard",
			"relationship",
			"assignment",
			"territory",
			"knowledge",
			"category",
			"template",
			"activity",
			"timeline",
			"currency",
			"discount",
			"contract",
			"document",
			"calendar",
			"feedback",
			"approval",
			"incident",
			"campaign",
			"resource",
			"forecast"
		],
		// Level 5
		[
			"configuration",
			"customization",
			"organisation",
			"administrator",
			"subscription",
			"environment",
			"integration",
			"distribution",
			"collaboration",
			"authentication",
			"representation",
			"visualization",
			"classification",
			"identification",
			"prioritization",
			"synchronization",
			"implementation",
			"documentation",
			"communication",
			"localisation"
		]
	],
	intermediate: [
		// Level 1 — Dynamics concepts
		["Dataverse", "plugin", "webhook", "FetchXML", "OData", "PCF", "SDK", "XRM", "SSRS", "Azure"],
		// Level 2
		["Power Apps", "Power BI", "Dataflow", "Web API", "REST API", "SOAP API", "Metadata", "Solution", "Publisher", "Connector"],
		// Level 3
		["canvas app", "model app", "flow trigger", "cloud flow", "business rule", "process flow", "security role", "field mapping", "entity schema", "data migration"],
		// Level 4
		[
			"plugin assembly",
			"custom workflow",
			"JavaScript webresource",
			"CRM ribbon",
			"action message",
			"early bound",
			"late bound",
			"IOrganization",
			"execution context",
			"depth of plugin"
		],
		// Level 5
		[
			"Power Automate",
			"Power Virtual Agent",
			"Azure Service Bus",
			"Azure Functions",
			"SharePoint Online",
			"Microsoft Teams",
			"Dynamics Sales",
			"Dynamics Service",
			"Dynamics Field Service",
			"Customer Insights"
		],
		// Level 6
		[
			"ISV solution",
			"managed solution",
			"unmanaged solution",
			"environment variable",
			"connection reference",
			"maker portal",
			"admin center",
			"solution layers",
			"publisher prefix",
			"solution upgrade"
		],
		// Level 7
		[
			"alternate keys",
			"calculated field",
			"rollup field",
			"cascade configuration",
			"relationship behaviour",
			"N:N relationship",
			"1:N relationship",
			"polymorphic lookup",
			"virtual entity",
			"elastic table"
		]
	],
	expert: [
		// Level 1
		[
			"IPluginExecutionContext",
			"IOrganizationService",
			"ITracingService",
			"InvalidPluginExecutionException",
			"EntityReference",
			"OptionSetValue",
			"EntityCollection",
			"QueryExpression",
			"ColumnSet",
			"FilterExpression"
		],
		// Level 2
		[
			"FetchXML aggregation",
			"OData expand query",
			"Web API batch request",
			"plugin registration tool",
			"solution import export",
			"environment managed layers",
			"publisher customization prefix",
			"CRM SDK early binding",
			"XrmToolBox connector",
			"connection string builder"
		],
		// Level 3
		[
			"PreOperation synchronous plugin",
			"PostOperation asynchronous plugin",
			"RetrieveMultiple message override",
			"Associate and Disassociate",
			"custom virtual entity provider",
			"Dataverse tabular datasource",
			"Power Pages portals configuration",
			"Azure API Management gateway",
			"Application Lifecycle Management",
			"CI/CD Azure DevOps pipeline"
		],
		// Level 4
		[
			"multi-tenancy architecture",
			"cross-organisation data migration",
			"dependent managed solution",
			"solution component dependency",
			"environment variable schema",
			"Dataverse search indexing",
			"elastic table throughput",
			"plugin profiler replay",
			"SSRS paginated report dataset",
			"Power BI composite model"
		],
		// Level 5
		[
			"ISV application lifecycle",
			"Microsoft Power Platform CoE kit",
			"managed environment governance",
			"Dataverse for Teams environment",
			"unified routing configuration",
			"advanced queue prioritisation",
			"sentiment analysis AI Builder",
			"prediction model configuration",
			"form scripting best practices",
			"ribbon button custom action"
		],
		// Level 6
		[
			"Azure Synapse Link for Dataverse",
			"Customer Service intelligent routing",
			"Omnichannel for Customer Service",
			"Field Service Resource Scheduling Optimisation",
			"Project Operations contract management",
			"Dynamics 365 Finance integration",
			"Power Platform ALM Accelerator",
			"Microsoft Dataverse REST Builder",
			"GDPR data subject request handling",
			"Microsoft Cloud for Healthcare"
		],
		// Level 7
		[
			"PCF TypeScript component manifest",
			"virtual network data gateway",
			"on-premises data gateway cluster",
			"Dataverse audit log purge policy",
			"Power Automate desktop flow recorder",
			"AI Builder form processing model",
			"SharePoint document location mapping",
			"custom connector OAuth 2.0 flow",
			"Azure AD B2C external identity",
			"multi-factor authentication enforcement"
		],
		// Level 8
		[
			"IOrganizationServiceFactory context",
			"ExecuteMultipleRequest batch size",
			"TransactionCurrencyId lookup binding",
			"SystemUser team privilege inheritance",
			"ActivityPointer polymorphic association",
			"EntityImageUrl thumbnail generation",
			"TimeZoneDefinition calendar mapping",
			"ProcessSession workflow state transition",
			"SdkMessageProcessingStep pre image",
			"AsyncOperation background job monitoring"
		],
		// Level 9
		[
			"Dynamics 365 Sales Copilot integration",
			"Power Platform Managed Environments policy",
			"Microsoft Security Compliance Center audit",
			"Dataverse column-level security profile",
			"custom code component control manifest",
			"Azure Logic Apps connector configuration",
			"solution-aware flow environment variable",
			"maker portal canvas app responsive layout",
			"Dataverse search Lucene index configuration",
			"Unified Interface accessibility compliance"
		],
		// Level 10
		[
			"end-to-end enterprise CRM architecture design",
			"Microsoft Power Platform Centre of Excellence",
			"Azure DevOps CI/CD pipeline for Dynamics solutions",
			"Dataverse row-level security team-based ownership",
			"custom ISV application AppSource submission requirements",
			"Power Pages portal liquid template Dataverse integration",
			"advanced plugin pipeline transactional rollback strategy",
			"Dynamics 365 Customer Insights segment activation flow",
			"real-time event-driven architecture with Azure Event Grid",
			"Microsoft Cloud Solution Provider licensing entitlement management"
		]
	]
};

const MODE_CONFIG = {
	beginner: { time: 60, wordsTarget: 15, levels: 5 },
	intermediate: { time: 45, wordsTarget: 12, levels: 7 },
	expert: { time: 30, wordsTarget: 10, levels: 10 }
};

const COMBO_MESSAGES = ["Nice!", "Great!", "Awesome!", "On Fire!", "Blazing!", "Unstoppable!", "Legendary!"];

// ── STATE ─────────────────────────────────────────────────────────────────
let state = {
	mode: null,
	level: 0,
	words: [],
	wordIndex: 0,
	timeLeft: 60,
	timerInterval: null,
	score: 0,
	wpm: 0,
	charsTyped: 0,
	charsCorrect: 0,
	streak: 0,
	bestStreak: 0,
	startTime: null,
	wordsCorrect: 0,
	wordsWrong: 0,
	levelStarted: false
};

let progress = JSON.parse(localStorage.getItem("crmTypeRush") || "{}");
/* progress = { beginner: { levelsUnlocked: 1, stars: [], scores: [] }, ... } */

// ── INIT ──────────────────────────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
	initParticles();
	updateHomeStats();
	ensureProgress();
	initBarTracking();
});

// ── BAR VISIBILITY TRACKING ───────────────────────────────────────────────
// The title bar lives in the parent. We track mouse Y inside this iframe
// and tell the parent whether to show or hide the bar via postMessage.
function initBarTracking() {
	let _barHideTimer = null;

	function sendBar(show) {
		try {
			window.parent.postMessage(show ? "showBar" : "hideBar", "*");
		} catch (e) {}
	}

	document.addEventListener("mousemove", (e) => {
		clearTimeout(_barHideTimer);
		// Top 52px = the title bar zone (42px bar + 10px buffer)
		if (e.clientY <= 52) {
			sendBar(true);
		} else {
			// Small delay so bar doesn't flash when crossing edge
			_barHideTimer = setTimeout(() => sendBar(false), 300);
		}
	});

	// When mouse fully leaves the iframe window, hide the bar
	document.addEventListener("mouseleave", () => {
		clearTimeout(_barHideTimer);
		// Short delay so moving to the title bar itself doesn't hide it
		_barHideTimer = setTimeout(() => sendBar(false), 300);
	});

	// When mouse enters iframe, cancel any pending hide
	document.addEventListener("mouseenter", () => {
		clearTimeout(_barHideTimer);
	});
}

function ensureProgress() {
	["beginner", "intermediate", "expert"].forEach((m) => {
		if (!progress[m]) progress[m] = { levelsUnlocked: 1, stars: [], scores: [] };
	});
	saveProgress();
}

function saveProgress() {
	localStorage.setItem("crmTypeRush", JSON.stringify(progress));
}

function updateHomeStats() {
	const scores = [];
	const wpms = [];
	let played = 0;
	["beginner", "intermediate", "expert"].forEach((m) => {
		if (progress[m]) {
			(progress[m].scores || []).forEach((s) => {
				if (s) {
					scores.push(s.score || 0);
					wpms.push(s.wpm || 0);
					played++;
				}
			});
		}
	});
	document.getElementById("best-score-display").textContent = scores.length ? Math.max(...scores) : "—";
	document.getElementById("best-wpm-display").textContent = wpms.length ? Math.max(...wpms) + "wpm" : "—";
	document.getElementById("games-played-display").textContent = played;
}

// ── SCREEN NAV ────────────────────────────────────────────────────────────
function showScreen(id) {
	document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
	document.getElementById(id).classList.add("active");
}

function goHome() {
	clearInterval(state.timerInterval);
	document.body.classList.remove("game-running"); // restore cursor
	updateHomeStats();
	showScreen("screen-home");
}

// ── MODE SELECT ───────────────────────────────────────────────────────────
function selectMode(mode) {
	state.mode = mode;
	ensureProgress();
	renderLevelSelect(mode);
	showScreen("screen-levels");
}

function renderLevelSelect(mode) {
	const cfg = MODE_CONFIG[mode];
	const prog = progress[mode];
	const grid = document.getElementById("levels-grid");
	const label = document.getElementById("levels-mode-label");
	const titles = { beginner: "Beginner — Foundation", intermediate: "Intermediate — Developer", expert: "Expert — Architect" };
	label.textContent = titles[mode];

	const levelNames = {
		beginner: ["First Steps", "Building Blocks", "Core Concepts", "Power User", "Master"],
		intermediate: ["CRM Basics", "API Fundamentals", "Cloud Flows", "Plugin World", "Microsoft Stack", "Solution Design", "Advanced Patterns"],
		expert: [
			"SDK Mastery",
			"Query Language",
			"Plugin Pipeline",
			"Solution Architecture",
			"Platform Engineering",
			"Azure Ecosystem",
			"PCF & DevOps",
			"Service Context",
			"Copilot & AI",
			"Enterprise Scale"
		]
	};

	grid.innerHTML = "";
	for (let i = 0; i < cfg.levels; i++) {
		const unlocked = i < (prog.levelsUnlocked || 1);
		const completed = prog.stars && prog.stars[i] != null;
		const stars = (prog.stars && prog.stars[i]) || 0;
		const div = document.createElement("div");
		div.className = "level-btn" + (unlocked ? "" : " locked") + (completed ? " completed" : "");
		div.innerHTML = unlocked
			? `<div class="lbtn-num">${String(i + 1).padStart(2, "0")}</div>
         <div class="lbtn-name">${(levelNames[mode] || [])[i] || "Level " + (i + 1)}</div>
         <div class="lbtn-meta">${cfg.time}s · ${cfg.wordsTarget} words</div>
         <div class="lbtn-stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>`
			: `<div class="lock-icon"><i class="fas fa-lock"></i></div>
         <div class="lbtn-name">Locked</div>
         <div class="lbtn-meta">Clear level ${i} first</div>`;
		if (unlocked) div.onclick = () => startLevel(mode, i);
		grid.appendChild(div);
	}
}

// ── START LEVEL ───────────────────────────────────────────────────────────
function startLevel(mode, levelIndex) {
	// Always clear any running timer from previous game
	if (state.timerInterval) {
		clearInterval(state.timerInterval);
		state.timerInterval = null;
	}

	const cfg = MODE_CONFIG[mode];
	const wordPool = WORDS[mode][levelIndex] || WORDS[mode][WORDS[mode].length - 1];

	// shuffle & repeat to fill target
	const shuffled = shuffle([...wordPool]);
	const words = [];
	while (words.length < cfg.wordsTarget + 5) {
		words.push(...shuffle([...wordPool]));
	}

	state = {
		mode,
		level: levelIndex,
		words: words.slice(0, cfg.wordsTarget + 5),
		wordIndex: 0,
		timeLeft: cfg.time,
		timerInterval: null,
		score: 0,
		wpm: 0,
		charsTyped: 0,
		charsCorrect: 0,
		streak: 0,
		bestStreak: 0,
		startTime: null,
		wordsCorrect: 0,
		wordsWrong: 0,
		levelStarted: false,
		wordsTarget: cfg.wordsTarget
	};

	renderWordStream();
	updateHUD();
	document.getElementById("hud-level-badge").textContent = `Level ${levelIndex + 1}`;
	document.getElementById("lp-words").textContent = `0 / ${cfg.wordsTarget} words`;
	document.getElementById("lp-fill").style.width = "0%";

	// ── FIX: Reset timer display immediately, not just the ring ──
	document.getElementById("timer-num").textContent = cfg.time;
	const fill = document.getElementById("ring-fill");
	fill.className = "ring-fill";
	fill.style.strokeDashoffset = "0";
	setTimerRing(1);

	const input = document.getElementById("game-input");
	input.value = "";
	input.className = "game-input";
	input.placeholder = "Start typing to begin…";

	showScreen("screen-game");
	setTimeout(() => input.focus(), 100);

	input.oninput = handleInput;
}

function renderWordStream() {
	const stream = document.getElementById("word-stream");
	stream.innerHTML = "";
	state.words.forEach((w, i) => {
		const span = document.createElement("span");
		span.className = "stream-word" + (i === 0 ? " active" : "");
		span.textContent = w;
		span.id = "sw-" + i;
		stream.appendChild(span);
	});
	updateCurrentWord();
}

function updateCurrentWord() {
	const w = state.words[state.wordIndex] || "—";
	document.getElementById("current-word").textContent = w;
	document.getElementById("current-word").className = "current-word";
	document.getElementById("cw-progress").style.width = "0%";
	document.getElementById("input-hint").textContent = w.length + " chars";
}

function scrollStream() {
	const active = document.getElementById("sw-" + state.wordIndex);
	if (active) {
		const stream = document.getElementById("word-stream");
		const offset = active.offsetLeft - stream.parentElement.offsetWidth / 2 + active.offsetWidth / 2;
		stream.style.transform = `translateX(${-Math.max(0, offset)}px)`;
	}
}

// ── INPUT HANDLER ─────────────────────────────────────────────────────────
function handleInput(e) {
	const input = document.getElementById("game-input");
	const val = input.value;

	// Start timer on first keystroke
	if (!state.levelStarted && val.length > 0) {
		state.levelStarted = true;
		state.startTime = Date.now();
		startTimer();
		input.placeholder = "";
		document.body.classList.add("game-running"); // hide cursor during gameplay
	}

	const target = state.words[state.wordIndex] || "";

	// Show progress in word display
	const pct = Math.min(val.length / target.length, 1) * 100;
	document.getElementById("cw-progress").style.width = pct + "%";

	// Colour feedback
	const cwEl = document.getElementById("current-word");
	const correct = target.startsWith(val);
	cwEl.className = "current-word" + (val.length === 0 ? "" : correct ? "" : " wrong");
	input.className = "game-input" + (val.length === 0 ? "" : correct ? "" : " wrong");

	state.charsTyped += 1;
	if (correct) state.charsCorrect += 1;

	// Space or exact match = submit word
	if (val.endsWith(" ") || (val.trim() === target && val.length >= target.length)) {
		const typed = val.trim();
		submitWord(typed, target, input);
	}
}

function submitWord(typed, target, input) {
	const correct = typed === target;

	// Mark stream word
	const sw = document.getElementById("sw-" + state.wordIndex);
	if (sw) sw.className = "stream-word " + (correct ? "done" : "skipped");

	if (correct) {
		state.wordsCorrect++;
		state.streak++;
		if (state.streak > state.bestStreak) state.bestStreak = state.streak;
		const wordScore = Math.floor(target.length * 10 * (1 + state.streak * 0.1));
		state.score += wordScore;
		showCombo(state.streak);
		input.className = "game-input correct";
		setTimeout(() => {
			if (input) input.className = "game-input";
		}, 300);
	} else {
		state.wordsWrong++;
		state.streak = 0;
		state.score = Math.max(0, state.score - 20);
		input.className = "game-input wrong";
		setTimeout(() => {
			if (input) input.className = "game-input";
		}, 300);
	}

	state.wordIndex++;
	input.value = "";

	// Update progress bar
	const prog = Math.min(state.wordsCorrect / state.wordsTarget, 1);
	document.getElementById("lp-fill").style.width = prog * 100 + "%";
	document.getElementById("lp-words").textContent = `${state.wordsCorrect} / ${state.wordsTarget} words`;

	// Next word or level complete
	if (state.wordIndex < state.words.length) {
		const sw2 = document.getElementById("sw-" + state.wordIndex);
		if (sw2) {
			document.querySelectorAll(".stream-word.active").forEach((e) => e.classList.remove("active"));
			sw2.classList.add("active");
		}
		scrollStream();
		updateCurrentWord();
	}

	// Target words hit → level complete
	if (state.wordsCorrect >= state.wordsTarget) {
		clearInterval(state.timerInterval);
		setTimeout(showResult, 400);
		return;
	}

	updateHUD();
}

// ── TIMER ─────────────────────────────────────────────────────────────────
function startTimer() {
	const total = MODE_CONFIG[state.mode].time;
	state.timerInterval = setInterval(() => {
		state.timeLeft--;
		document.getElementById("timer-num").textContent = state.timeLeft;
		setTimerRing(state.timeLeft / total);

		const fill = document.getElementById("ring-fill");
		if (state.timeLeft <= 10) fill.className = "ring-fill danger";
		else if (state.timeLeft <= 20) fill.className = "ring-fill warning";
		else fill.className = "ring-fill";

		// WPM
		const elapsed = (Date.now() - state.startTime) / 60000;
		state.wpm = elapsed > 0 ? Math.round(state.wordsCorrect / elapsed) : 0;
		document.getElementById("hud-wpm").textContent = state.wpm;

		if (state.timeLeft <= 0) {
			clearInterval(state.timerInterval);
			showResult();
		}
	}, 1000);
}

function setTimerRing(fraction) {
	const c = 326.73;
	document.getElementById("ring-fill").style.strokeDashoffset = c - fraction * c;
}

// ── HUD UPDATE ────────────────────────────────────────────────────────────
function updateHUD() {
	document.getElementById("hud-score").textContent = state.score;
	document.getElementById("hud-streak").innerHTML = state.streak + '<span style="font-size:0.6rem;color:var(--gold)">🔥</span>';
	const acc = state.charsTyped > 0 ? Math.round((state.charsCorrect / state.charsTyped) * 100) : 100;
	document.getElementById("hud-acc").textContent = acc + "%";
}

// ── COMBO POPUP ───────────────────────────────────────────────────────────
function showCombo(streak) {
	if (streak < 3) return;
	const popup = document.getElementById("combo-popup");
	const msgs = COMBO_MESSAGES;
	const idx = Math.min(Math.floor((streak - 3) / 2), msgs.length - 1);
	popup.textContent = streak + "× " + msgs[idx];
	popup.className = "combo-popup";
	void popup.offsetWidth;
	popup.className = "combo-popup show";
	setTimeout(() => {
		popup.className = "combo-popup";
	}, 750);
}

// ── RESULT ────────────────────────────────────────────────────────────────
function showResult() {
	document.body.classList.remove("game-running"); // restore cursor
	const cfg = MODE_CONFIG[state.mode];
	const success = state.wordsCorrect >= state.wordsTarget;
	const acc = state.charsTyped > 0 ? Math.round((state.charsCorrect / state.charsTyped) * 100) : 100;
	const elapsed = state.startTime ? (Date.now() - state.startTime) / 60000 : 1;
	const wpm = elapsed > 0 ? Math.round(state.wordsCorrect / elapsed) : 0;

	// Stars
	let stars = 0;
	if (success) {
		stars = 1;
		if (acc >= 80) stars = 2;
		if (acc >= 95 && wpm >= 30) stars = 3;
	}

	// Save progress
	const prog = progress[state.mode];
	if (!prog.stars) prog.stars = [];
	if (!prog.scores) prog.scores = [];
	if (stars > (prog.stars[state.level] || 0)) prog.stars[state.level] = stars;
	if (!prog.scores[state.level] || state.score > (prog.scores[state.level].score || 0)) {
		prog.scores[state.level] = { score: state.score, wpm };
	}
	if (success && state.level + 1 >= prog.levelsUnlocked) {
		prog.levelsUnlocked = Math.min(state.level + 2, cfg.levels);
	}
	saveProgress();

	// Fill result screen
	const trophy = success ? (stars === 3 ? "🏆" : stars === 2 ? "🥈" : "🥉") : "😤";
	const titles = success ? ["Level Complete!", "Impressive!", "Outstanding!"] : ["Time's Up!"];
	const subs = success ? ["Good effort, keep practicing!", "Excellent accuracy!", "Perfect run! You're unstoppable!"] : ["You'll get it next time. Keep grinding!"];

	document.getElementById("result-trophy").textContent = trophy;
	document.getElementById("result-title").textContent = titles[Math.min(stars, titles.length) - 1] || titles[0];
	document.getElementById("result-sub").textContent = subs[Math.min(stars, subs.length) - 1] || subs[0];
	document.getElementById("rs-wpm").textContent = wpm;
	document.getElementById("rs-acc").textContent = acc + "%";
	document.getElementById("rs-score").textContent = state.score;
	document.getElementById("rs-streak").textContent = state.bestStreak;
	document.getElementById("result-stars").textContent = "★".repeat(stars) + "☆".repeat(3 - stars);

	const nextBtn = document.getElementById("btn-next");
	const hasNext = state.level + 1 < cfg.levels;
	nextBtn.style.display = success && hasNext ? "inline-flex" : "none";

	showScreen("screen-result");
}

function nextLevel() {
	startLevel(state.mode, state.level + 1);
}

function replayLevel() {
	startLevel(state.mode, state.level);
}

function quitGame() {
	clearInterval(state.timerInterval);
	document.body.classList.remove("game-running"); // restore cursor
	renderLevelSelect(state.mode);
	showScreen("screen-levels");
}

// ── PARTICLES ─────────────────────────────────────────────────────────────
function initParticles() {
	const canvas = document.getElementById("particleCanvas");
	const ctx = canvas.getContext("2d");
	let W = (canvas.width = window.innerWidth);
	let H = (canvas.height = window.innerHeight);
	window.addEventListener("resize", () => {
		W = canvas.width = window.innerWidth;
		H = canvas.height = window.innerHeight;
	});

	const particles = Array.from({ length: 55 }, () => ({
		x: Math.random() * W,
		y: Math.random() * H,
		r: Math.random() * 1.5 + 0.3,
		dx: (Math.random() - 0.5) * 0.3,
		dy: -Math.random() * 0.4 - 0.1,
		alpha: Math.random() * 0.4 + 0.05,
		gold: Math.random() > 0.6
	}));

	// Floating tech words
	const floatWords = ["CRM", "API", "SDK", "PCF", "XRM", "OData", "Plugin", "Workflow", "Azure", "D365", "Power", "Flow"];
	const fWords = Array.from({ length: 8 }, () => ({
		text: floatWords[Math.floor(Math.random() * floatWords.length)],
		x: Math.random() * W,
		y: Math.random() * H,
		alpha: Math.random() * 0.06 + 0.02,
		speed: Math.random() * 0.3 + 0.1,
		size: Math.random() * 14 + 10
	}));

	function draw() {
		ctx.clearRect(0, 0, W, H);

		// Floating tech labels
		ctx.font = "300 14px 'JetBrains Mono', monospace";
		fWords.forEach((fw) => {
			ctx.save();
			ctx.font = `300 ${fw.size}px 'JetBrains Mono', monospace`;
			ctx.fillStyle = `rgba(200,149,42,${fw.alpha})`;
			ctx.fillText(fw.text, fw.x, fw.y);
			ctx.restore();
			fw.y -= fw.speed;
			if (fw.y < -40) {
				fw.y = H + 40;
				fw.x = Math.random() * W;
				fw.text = floatWords[Math.floor(Math.random() * floatWords.length)];
			}
		});

		// Particles
		particles.forEach((p) => {
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
			ctx.fillStyle = p.gold ? `rgba(200,149,42,${p.alpha})` : `rgba(122,143,168,${p.alpha * 0.5})`;
			ctx.fill();
			p.x += p.dx;
			p.y += p.dy;
			if (p.y < -5) {
				p.y = H + 5;
				p.x = Math.random() * W;
			}
			if (p.x < 0 || p.x > W) p.dx *= -1;
		});

		requestAnimationFrame(draw);
	}
	draw();
}

// ── UTILS ─────────────────────────────────────────────────────────────────
function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}
