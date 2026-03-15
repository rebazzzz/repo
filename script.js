const DD = [
  {
    id: "h1",
    t: "honos",
    c: "faith",
    n: "All 5 Prayers on Time",
    p: 25,
    d: "Full salah on time",
  },
  {
    id: "h2",
    t: "honos",
    c: "faith",
    n: "Prayed in Jama'ah",
    p: 10,
    d: "Congregation prayer",
  },
  {
    id: "h3",
    t: "honos",
    c: "faith",
    n: "Read Quran",
    p: 15,
    d: "Per 15 min",
    u: true,
    ul: "15 min",
  },
  {
    id: "h4",
    t: "honos",
    c: "faith",
    n: "Memorised Name of Allah",
    p: 20,
    d: "One of the 99 names",
  },
  {
    id: "h5",
    t: "honos",
    c: "faith",
    n: "Memorised New Ayah",
    p: 20,
    d: "Quran memorisation",
  },
  {
    id: "h6",
    t: "honos",
    c: "faith",
    n: "Morning/Evening Dhikr",
    p: 10,
    d: "Full adhkar set",
  },
  {
    id: "h7",
    t: "honos",
    c: "faith",
    n: "Lowered Gaze (conscious)",
    p: 10,
    d: "Deliberate restraint",
  },
  {
    id: "h8",
    t: "honos",
    c: "faith",
    n: "Voluntary Fast",
    p: 20,
    d: "Sunnah or Nafl fast",
  },
  {
    id: "h9",
    t: "honos",
    c: "discipline",
    n: "Woke up for Fajr on Time",
    p: 15,
    d: "Before or at adhan",
  },
  {
    id: "h10",
    t: "honos",
    c: "discipline",
    n: "Slept Before Midnight",
    p: 8,
    d: "Asleep by 22:00",
  },
  {
    id: "h11",
    t: "honos",
    c: "discipline",
    n: "Stopped Work by 21:15",
    p: 8,
    d: "Blue light rule observed",
  },
  {
    id: "h12",
    t: "honos",
    c: "discipline",
    n: "Cold Shower",
    p: 5,
    d: "Full cold shower",
  },
  {
    id: "h13",
    t: "honos",
    c: "discipline",
    n: "Drank 2L Water",
    p: 6,
    d: "Daily hydration target",
  },
  {
    id: "h14",
    t: "honos",
    c: "discipline",
    n: "Took Supplements",
    p: 5,
    d: "Daily stack completed",
  },
  {
    id: "h15",
    t: "honos",
    c: "discipline",
    n: "Ate Clean",
    p: 6,
    d: "No junk, clean meals",
  },
  {
    id: "h16",
    t: "honos",
    c: "discipline",
    n: "Commute Language Study",
    p: 8,
    d: "Swedish on the bus",
  },
  {
    id: "h17",
    t: "honos",
    c: "discipline",
    n: "Followed Schedule",
    p: 10,
    d: "Day went as planned",
  },
  {
    id: "h18",
    t: "honos",
    c: "body",
    n: "Gym - Nordic Wellness (2h)",
    p: 12,
    d: "Gamlestads Torg",
  },
  {
    id: "h19",
    t: "honos",
    c: "body",
    n: "Wrestling - Nylöse (2h)",
    p: 12,
    d: "Hjällbo, Mon/Wed 19-21",
  },
  {
    id: "h20",
    t: "honos",
    c: "body",
    n: "Boxing - RBK (2h)",
    p: 12,
    d: "Tue/Thu 19-21",
  },
  {
    id: "h21",
    t: "honos",
    c: "work",
    n: "Deep Work Block",
    p: 8,
    d: "Per hour",
    u: true,
    ul: "hour",
  },
  {
    id: "h22",
    t: "honos",
    c: "work",
    n: "Study Power Hour",
    p: 12,
    d: "AI + Backend block done",
  },
  {
    id: "h23",
    t: "honos",
    c: "work",
    n: "Shipped a Feature",
    p: 15,
    d: "Deployed working code",
  },
  {
    id: "h24",
    t: "honos",
    c: "work",
    n: "Language Study Block",
    p: 10,
    d: "Dedicated 30-60 min",
  },
  {
    id: "h25",
    t: "honos",
    c: "work",
    n: "Chess Study / Play",
    p: 6,
    d: "Tactics, openings, or game",
  },
  {
    id: "d1",
    t: "dedecus",
    c: "faith",
    n: "Missed a Prayer",
    p: 30,
    d: "Any fard missed",
  },
  {
    id: "d2",
    t: "dedecus",
    c: "faith",
    n: "Missed Fajr",
    p: 20,
    d: "On top of missed salah",
  },
  {
    id: "d3",
    t: "dedecus",
    c: "faith",
    n: "Failed to Lower Gaze",
    p: 15,
    d: "Intentional failure",
  },
  {
    id: "d4",
    t: "dedecus",
    c: "faith",
    n: "Listened to Music",
    p: 8,
    d: "Unnecessary music",
  },
  {
    id: "d5",
    t: "dedecus",
    c: "faith",
    n: "Backbiting or Lying",
    p: 20,
    d: "Ghiba or false speech",
  },
  {
    id: "d6",
    t: "dedecus",
    c: "discipline",
    n: "Slept Late (past midnight)",
    p: 10,
    d: "After 00:00",
  },
  {
    id: "d7",
    t: "dedecus",
    c: "discipline",
    n: "Woke Up Late",
    p: 12,
    d: "Missed morning window",
  },
  {
    id: "d8",
    t: "dedecus",
    c: "discipline",
    n: "Skipped Gym (no excuse)",
    p: 8,
    d: "On a gym day",
  },
  {
    id: "d9",
    t: "dedecus",
    c: "discipline",
    n: "Skipped Combat (no excuse)",
    p: 8,
    d: "Wrestling/boxing missed",
  },
  {
    id: "d10",
    t: "dedecus",
    c: "discipline",
    n: "Ate Junk / Skipped Meal",
    p: 6,
    d: "Off-plan eating",
  },
  {
    id: "d11",
    t: "dedecus",
    c: "discipline",
    n: "Forgot Supplements",
    p: 4,
    d: "Missed daily stack",
  },
  {
    id: "d12",
    t: "dedecus",
    c: "discipline",
    n: "Mindless Scrolling",
    p: 8,
    d: "Per 30 min",
    u: true,
    ul: "30 min",
  },
  {
    id: "d13",
    t: "dedecus",
    c: "discipline",
    n: "Wasted Time",
    p: 8,
    d: "Per 30 min",
    u: true,
    ul: "30 min",
  },
  {
    id: "d14",
    t: "dedecus",
    c: "discipline",
    n: "Coded Past 21:15",
    p: 8,
    d: "Broke wind-down rule",
  },
  {
    id: "d15",
    t: "dedecus",
    c: "discipline",
    n: "Skipped Study Block",
    p: 6,
    d: "Block unfinished",
  },
  {
    id: "d16",
    t: "dedecus",
    c: "character",
    n: "Broke a Promise",
    p: 15,
    d: "Any given word broken",
  },
  {
    id: "d17",
    t: "dedecus",
    c: "character",
    n: "Lost Temper",
    p: 10,
    d: "Unnecessary anger",
  },
];
const DT = [
  {
    id: "t_m1",
    day: "Monday",
    time: "06:00",
    n: "Gym / Rest",
    honorPts: 12,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_m2",
    day: "Monday",
    time: "08:30",
    n: "Operis",
    honorPts: 16,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_m3",
    day: "Monday",
    time: "12:00",
    n: "Lunch",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_m4",
    day: "Monday",
    time: "13:00",
    n: "Operis",
    honorPts: 20,
    shamePts: 10,
    loc: "",
  },
  {
    id: "t_m5",
    day: "Monday",
    time: "19:00",
    n: "Wrestling ? Nyl?se SportCenter",
    honorPts: 12,
    shamePts: 10,
    loc: "Nyl?se SportCenter",
  },
  {
    id: "t_m6",
    day: "Monday",
    time: "21:00",
    n: "Language study",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_m7",
    day: "Monday",
    time: "22:00",
    n: "Chess",
    honorPts: 6,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_m8",
    day: "Monday",
    time: "23:00",
    n: "Sleep",
    honorPts: 8,
    shamePts: 10,
    loc: "",
  },

  {
    id: "t_t1",
    day: "Tuesday",
    time: "06:00",
    n: "Gym / Rest",
    honorPts: 12,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_t2",
    day: "Tuesday",
    time: "08:30",
    n: "Operis",
    honorPts: 16,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_t3",
    day: "Tuesday",
    time: "12:00",
    n: "Lunch",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_t4",
    day: "Tuesday",
    time: "13:00",
    n: "Operis",
    honorPts: 20,
    shamePts: 10,
    loc: "",
  },
  {
    id: "t_t5",
    day: "Tuesday",
    time: "19:00",
    n: "Boxing ? RBK Boxning Klubb",
    honorPts: 12,
    shamePts: 10,
    loc: "RBK Boxning Klubb",
  },
  {
    id: "t_t6",
    day: "Tuesday",
    time: "21:00",
    n: "Language study",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_t7",
    day: "Tuesday",
    time: "22:00",
    n: "Chess",
    honorPts: 6,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_t8",
    day: "Tuesday",
    time: "23:00",
    n: "Sleep",
    honorPts: 8,
    shamePts: 10,
    loc: "",
  },

  {
    id: "t_w1",
    day: "Wednesday",
    time: "06:00",
    n: "Gym / Rest",
    honorPts: 12,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_w2",
    day: "Wednesday",
    time: "08:30",
    n: "Operis",
    honorPts: 16,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_w3",
    day: "Wednesday",
    time: "12:00",
    n: "Lunch",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_w4",
    day: "Wednesday",
    time: "13:00",
    n: "Operis",
    honorPts: 20,
    shamePts: 10,
    loc: "",
  },
  {
    id: "t_w5",
    day: "Wednesday",
    time: "19:00",
    n: "Wrestling ? Nyl?se SportCenter",
    honorPts: 12,
    shamePts: 10,
    loc: "Nyl?se SportCenter",
  },
  {
    id: "t_w6",
    day: "Wednesday",
    time: "21:00",
    n: "Language study",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_w7",
    day: "Wednesday",
    time: "22:00",
    n: "Chess",
    honorPts: 6,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_w8",
    day: "Wednesday",
    time: "23:00",
    n: "Sleep",
    honorPts: 8,
    shamePts: 10,
    loc: "",
  },

  {
    id: "t_th1",
    day: "Thursday",
    time: "06:00",
    n: "Gym / Rest",
    honorPts: 12,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_th2",
    day: "Thursday",
    time: "08:30",
    n: "Operis",
    honorPts: 16,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_th3",
    day: "Thursday",
    time: "12:00",
    n: "Lunch",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_th4",
    day: "Thursday",
    time: "13:00",
    n: "Operis",
    honorPts: 20,
    shamePts: 10,
    loc: "",
  },
  {
    id: "t_th5",
    day: "Thursday",
    time: "19:00",
    n: "Boxing ? RBK Boxning Klubb",
    honorPts: 12,
    shamePts: 10,
    loc: "RBK Boxning Klubb",
  },
  {
    id: "t_th6",
    day: "Thursday",
    time: "21:00",
    n: "Language study",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_th7",
    day: "Thursday",
    time: "22:00",
    n: "Chess",
    honorPts: 6,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_th8",
    day: "Thursday",
    time: "23:00",
    n: "Sleep",
    honorPts: 8,
    shamePts: 10,
    loc: "",
  },

  {
    id: "t_f1",
    day: "Friday",
    time: "06:00",
    n: "Gym / Rest",
    honorPts: 12,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_f2",
    day: "Friday",
    time: "08:30",
    n: "Operis",
    honorPts: 16,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_f3",
    day: "Friday",
    time: "12:00",
    n: "Lunch",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_f4",
    day: "Friday",
    time: "13:00",
    n: "Operis",
    honorPts: 20,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_f5",
    day: "Friday",
    time: "18:00",
    n: "Wresfit",
    honorPts: 12,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_f6",
    day: "Friday",
    time: "20:00",
    n: "Language study",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_f7",
    day: "Friday",
    time: "21:00",
    n: "Chess",
    honorPts: 6,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_f8",
    day: "Friday",
    time: "22:30",
    n: "Sleep",
    honorPts: 8,
    shamePts: 10,
    loc: "",
  },

  {
    id: "t_s1",
    day: "Saturday",
    time: "08:00",
    n: "Gym / Rest",
    honorPts: 12,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_s2",
    day: "Saturday",
    time: "10:30",
    n: "Operis",
    honorPts: 16,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_s3",
    day: "Saturday",
    time: "13:00",
    n: "Lunch",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_s4",
    day: "Saturday",
    time: "14:00",
    n: "Operis",
    honorPts: 20,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_s5",
    day: "Saturday",
    time: "19:00",
    n: "Language study",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_s6",
    day: "Saturday",
    time: "20:00",
    n: "Chess",
    honorPts: 8,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_s7",
    day: "Saturday",
    time: "22:30",
    n: "Sleep",
    honorPts: 8,
    shamePts: 10,
    loc: "",
  },

  {
    id: "t_su1",
    day: "Sunday",
    time: "10:00",
    n: "Operis (optional)",
    honorPts: 16,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_su2",
    day: "Sunday",
    time: "14:00",
    n: "Lunch",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_su3",
    day: "Sunday",
    time: "15:00",
    n: "Language study",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_su4",
    day: "Sunday",
    time: "16:00",
    n: "Full rest / Chess",
    honorPts: 5,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_su5",
    day: "Sunday",
    time: "23:00",
    n: "Sleep",
    honorPts: 8,
    shamePts: 10,
    loc: "",
  },
];
const CAT_NAMES = {
  faith: "Faith & Devotion",
  discipline: "Discipline",
  body: "Body & Combat",
  work: "Mind & Work",
  character: "Character",
  custom: "Custom",
};
const DAY_FULL = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const IC = {
  chk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  edt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  del: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>',
  chv: '<svg class="acc-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',
};
let isLoading = true;
let searchTimeout;
let offlineQueue = [];
let isOnline = navigator.onLine;
let queueDB;
let syncRetries = 0;
let tTimer;
const MAX_RETRIES = 3;
const openAccordions = {
  honos: { faith: true },
  dedecus: { faith: true },
};

async function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("fortisQueue", 3);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      queueDB = request.result;
      resolve();
    };

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("queue")) {
        const queueStore = db.createObjectStore("queue", {
          keyPath: "id",
          autoIncrement: true,
        });
        queueStore.createIndex("synced", "synced", { unique: false });
        queueStore.createIndex("timestamp", "timestamp", { unique: false });
      }
      if (!db.objectStoreNames.contains("stats")) {
        db.createObjectStore("stats", { keyPath: "key" });
      }
    };
  });
}

let S = {
  ht: 0,
  dt: 0,
  hd: 0,
  dd: 0,
  log: [],
  counts: {},
  streaks: {},
  goals: {
    weekly: { honos: 100, dedecus: 50 },
    monthly: { honos: 400, dedecus: 200 },
  },
  goalsList: [],
  deeds: JSON.parse(JSON.stringify(DD)),
  tasks: JSON.parse(JSON.stringify(DT)),
  lastDate: new Date().toDateString(),
};

function normalizeTasks() {
  let changed = false;
  if (!Array.isArray(S.tasks)) {
    S.tasks = [];
    changed = true;
  }
  const byId = new Map();
  S.tasks.forEach((t) => {
    if (!t || !t.id) return;
    if (!byId.has(t.id)) byId.set(t.id, t);
  });
  if (byId.size !== S.tasks.length) {
    S.tasks = Array.from(byId.values());
    changed = true;
  }
  const before = S.tasks.length;
  S.tasks = S.tasks.filter((t) => t.day !== "Daily");
  if (S.tasks.length !== before) changed = true;
  S.tasks.forEach((t) => {
    if (!t.s) {
      t.s = "todo";
      changed = true;
    }
    if (t.scoredDate === undefined) {
      t.scoredDate = "";
      changed = true;
    }
    if (t.honorPts === undefined) {
      t.honorPts = 0;
      changed = true;
    }
    if (t.shamePts === undefined) {
      t.shamePts = 0;
      changed = true;
    }
    if (t.loc === undefined) {
      t.loc = "";
      changed = true;
    }
    if (t.depends === undefined) {
      t.depends = null;
      changed = true;
    }
  });
  return changed;
}

function normalizeLog() {
  if (!Array.isArray(S.log)) {
    S.log = [];
    return true;
  }
  const seen = new Set();
  const out = [];
  for (const l of S.log) {
    if (!l) continue;
    const idKey = l.id ? "id:" + l.id : null;
    const key =
      idKey ||
      [
        l.name || "",
        l.pts || 0,
        l.type || "",
        l.cat || "",
        l.time || "",
        l.date || "",
      ].join("|");
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(l);
  }
  const changed = out.length !== S.log.length;
  if (changed) S.log = out;
  return changed;
}

async function load() {
  await initDB();

  const sv = localStorage.getItem("fortis_v1");
  if (sv) {
    try {
      const p = JSON.parse(sv);
      S = { ...S, ...p };
      const ei = new Set(S.deeds.map((d) => d.id));
      DD.forEach((d) => {
        if (!ei.has(d.id)) S.deeds.push(d);
      });
      const et = new Set(S.tasks.map((t) => t.id));
      DT.forEach((t) => {
        if (!et.has(t.id)) {
          S.tasks.push(t);
        } else {
          const ex = S.tasks.find((x) => x.id === t.id);
          if (ex) {
            if (ex.honorPts === undefined) ex.honorPts = t.honorPts || 0;
            if (ex.shamePts === undefined) ex.shamePts = t.shamePts || 0;
            if (ex.loc === undefined) ex.loc = t.loc || "";
          }
        }
      });
    } catch (e) {}
  }
  const tasksChanged = normalizeTasks();
  const logChanged = normalizeLog();
  if (tasksChanged || logChanged) save();
  const ts = new Date().toDateString();
  if (S.lastDate !== ts) {
    runMidnightPenalty(S.lastDate);
    S.hd = 0;
    S.dd = 0;
    S.lastDate = ts;
    save();
  }
  await updatePendingCount();
  isLoading = false;
  updateOnlineStatus();
}

async function queueAction(type, data) {
  if (!queueDB) return;

  return new Promise((resolve, reject) => {
    const tx = queueDB.transaction("queue", "readwrite");
    const store = tx.objectStore("queue");
    const item = {
      type,
      data: JSON.stringify(data),
      timestamp: Date.now(),
      synced: 0,
      retryCount: 0,
    };
    const request = store.add(item);

    request.onsuccess = () => {
      toast(`Queued ${type}`, "pos");
      updatePendingCount();
      resolve();
    };
    request.onerror = () => reject(request.error);
  });
}

async function getPendingCount() {
  if (!queueDB) return 0;

  return new Promise((resolve) => {
    const tx = queueDB.transaction("queue", "readonly");
    const store = tx.objectStore("queue");
    const request = store.index("synced").count(IDBKeyRange.only(0));

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(0);
  });
}

async function updatePendingCount() {
  const count = await getPendingCount();
  const badge = document.getElementById("queueBadge");
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline" : "none";
  }
}

async function processQueue() {
  if (!queueDB || !isOnline) return;

  const syncStatus = document.getElementById("syncStatus");
  if (syncStatus) {
    syncStatus.classList.add("show");
    syncStatus.textContent = "Syncing...";
  }

  let processed = 0;
  let failed = 0;

  try {
    const tx = queueDB.transaction("queue", "readwrite");
    const store = tx.objectStore("queue");
    const index = store.index("synced");
    const request = index.getAll(0);

    request.onsuccess = async () => {
      const pending = request.result;

      for (const item of pending) {
        try {
          if (item.retryCount >= 3) {
            console.warn("Max retries reached for item:", item);
            continue;
          }

          const data = JSON.parse(item.data);

          // Process by type
          switch (item.type) {
            case "log":
              addLog(data.name, data.pts, data.type, data.cat, data.deedId);
              break;
            case "deed":
              adj(data.id, data.delta);
              break;
            case "task":
              if (data.action === "cycle") cycleTask(data.id);
              else if (data.action === "add") addTaskData(data.task);
              break;
            case "save":
              Object.assign(S, data.state);
              break;
          }

          // Mark as synced (success)
          const updateTx = queueDB.transaction("queue", "readwrite");
          const updateStore = updateTx.objectStore("queue");
          await new Promise((res, rej) => {
            const upReq = updateStore.put({ ...item, synced: 1 });
            upReq.onsuccess = res;
            upReq.onerror = rej;
          });

          processed++;
        } catch (e) {
          // On failure, increment retryCount
          console.error("Failed to process queue item:", item, e);
          const updateTx = queueDB.transaction("queue", "readwrite");
          const updateStore = updateTx.objectStore("queue");
          await new Promise((res, rej) => {
            const upReq = updateStore.put({
              ...item,
              retryCount: (item.retryCount || 0) + 1,
            });
            upReq.onsuccess = res;
            upReq.onerror = rej;
          });
          failed++;
        }
      }

      if (processed > 0) {
        toast(
          `Synced ${processed} actions${failed > 0 ? ` (${failed} retries)` : ""}`,
          "pos",
        );
        render();
      } else if (failed > 0) {
        toast(`${failed} actions need retry`, "neg");
      }

      if (syncStatus) {
        syncStatus.textContent = processed > 0 ? "Synced ✓" : "No changes";
        setTimeout(() => syncStatus.classList.remove("show"), 1500);
      }

      updatePendingCount();
    };
  } catch (e) {
    console.error("Queue sync failed:", e);
    if (syncStatus) syncStatus.textContent = "Sync failed";
  }
}

async function retrySync() {
  if (!queueDB) {
    toast("Queue DB not ready", "neg");
    return;
  }

  const pendingCount = await getPendingCount();
  if (pendingCount === 0) {
    toast("Queue is empty", "neg");
    return;
  }

  toast(`Manual sync started (${pendingCount} items)`, "pos");
  await processQueue();
}

function testQueue() {
  // Test offline queuing
  isOnline = false; // Simulate offline
  adj("h1", 1);
  addTask(); // Will need to fill form first, or modify for test
  cycleTask("t_d1");
  toast("Queued actions (offline sim). Go online to sync.", "pos");
}

function testSyncFailure() {
  // Simulate sync failure by temporarily breaking processQueue
  const originalProcess = processQueue;
  processQueue = () => {
    throw new Error("Test failure");
  };
  processQueue();
  processQueue = originalProcess;
  toast("Simulated sync failure - retryCount should increment", "pos");
}

function addTaskData(task) {
  S.tasks.push(task);
  renderTasks();
}

async function save() {
  localStorage.setItem("fortis_v1", JSON.stringify(S));

  if (!isOnline) {
    try {
      await queueAction("save", { state: S });
    } catch (e) {
      console.error("Failed to queue save:", e);
    }
  }
}

function calculateStreaks() {
  const today = new Date();
  const deedsById = {};

  // Group log entries by deed ID and date
  S.log.forEach((entry) => {
    const date = new Date(entry.time).toDateString();
    if (!deedsById[entry.deedId]) deedsById[entry.deedId] = {};
    if (!deedsById[entry.deedId][date]) deedsById[entry.deedId][date] = [];
    deedsById[entry.deedId][date].push(entry);
  });

  // Calculate streaks for each deed
  Object.keys(deedsById).forEach((deedId) => {
    const dateSet = new Set(Object.keys(deedsById[deedId]));
    const todayStr = today.toDateString();

    // Current streak: count consecutive days backward from today
    let currentStreak = 0;
    let cursor = new Date(today);
    while (true) {
      const cs = cursor.toDateString();
      if (dateSet.has(cs)) {
        currentStreak += 1;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        break;
      }
    }

    // Longest streak: find longest consecutive run in the past
    let longestStreak = 0;
    let run = 0;
    const sortedDates = Array.from(dateSet)
      .map((d) => new Date(d))
      .sort((a, b) => a - b);
    let prev = null;
    for (const d of sortedDates) {
      if (!prev) {
        run = 1;
      } else {
        const diffDays = Math.round((d - prev) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          run += 1;
        } else {
          run = 1;
        }
      }
      longestStreak = Math.max(longestStreak, run);
      prev = d;
    }

    S.streaks[deedId] = {
      current: currentStreak,
      longest: longestStreak,
    };
  });
}
function runMidnightPenalty(dateStr) {
  const d = new Date(dateStr);
  const df = DAY_FULL[d.getDay()];
  // Reset per-day deed counters so that each new day starts fresh
  S.counts = {};

  let hit = false;
  S.tasks.forEach((t) => {
    const ok = t.day === "Daily" || t.day === df;
    if (!ok || t.scoredDate === dateStr) return;
    if (t.s === "todo" && (t.shamePts || 0) > 0) {
      t.s = "missed";
      t.scoredDate = dateStr;
      S.dt += t.shamePts;
      addLog("[AUTO-MISSED] " + t.n, -t.shamePts, "dedecus", "custom", t.id);
      hit = true;
    }
    if (t.day === "Daily") {
      t.s = "todo";
      t.scoredDate = "";
    }
  });
  if (hit) toast("Shame applied for missed tasks", "neg");
}
function scheduleMidnightCheck() {
  const now = new Date();
  const ms =
    (23 - now.getHours()) * 3600000 +
    (59 - now.getMinutes()) * 60000 +
    (60 - now.getSeconds()) * 1000;
  setTimeout(() => {
    const ts = new Date().toDateString();
    if (S.lastDate !== ts) {
      runMidnightPenalty(S.lastDate);
      S.hd = 0;
      S.dd = 0;
      S.lastDate = ts;
      save();
      render();
    }
    scheduleMidnightCheck();
  }, ms);
}
function renderScores() {
  const honosEl = document.getElementById("honosScore");
  if (honosEl) honosEl.textContent = S.ht;
  const dedecusEl = document.getElementById("dedecusScore");
  if (dedecusEl) dedecusEl.textContent = S.dt;
  const honosDeltaEl = document.getElementById("honosDelta");
  if (honosDeltaEl) honosDeltaEl.textContent = "+" + S.hd + " today";
  const dedecusDeltaEl = document.getElementById("dedecusDelta");
  if (dedecusDeltaEl) dedecusDeltaEl.textContent = "-" + S.dd + " today";
  const net = S.ht - S.dt;
  const el = document.getElementById("netScore");
  if (el) {
    el.textContent = net > 0 ? "+" + net : net;
    el.className = "netval " + (net > 0 ? "pos" : net < 0 ? "neg" : "zer");
  }
  const hbar = document.getElementById("hbar");
  if (hbar) {
    const tot = S.ht + S.dt;
    hbar.style.width = (tot > 0 ? Math.round((S.ht / tot) * 100) : 50) + "%";
  }
  const dbar = document.getElementById("dbar");
  if (dbar) {
    const tot = S.ht + S.dt;
    dbar.style.width = (tot > 0 ? Math.round((S.dt / tot) * 100) : 50) + "%";
  }

  // Render goals progress
  renderGoalsProgress();
}

function renderGoalsProgress() {
  const container = document.getElementById("goals-progress");
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  // Calculate weekly progress
  const weeklyHonos = S.log
    .filter((entry) => new Date(entry.date) >= weekStart && entry.pts > 0)
    .reduce((sum, entry) => sum + entry.pts, 0);
  const weeklyDedecus = Math.abs(
    S.log
      .filter((entry) => new Date(entry.date) >= weekStart && entry.pts < 0)
      .reduce((sum, entry) => sum + entry.pts, 0),
  );

  // Calculate monthly progress
  const monthlyHonos = S.log
    .filter((entry) => new Date(entry.date) >= monthStart && entry.pts > 0)
    .reduce((sum, entry) => sum + entry.pts, 0);
  const monthlyDedecus = Math.abs(
    S.log
      .filter((entry) => new Date(entry.date) >= monthStart && entry.pts < 0)
      .reduce((sum, entry) => sum + entry.pts, 0),
  );

  const weeklyHonosPct = Math.min(
    100,
    Math.round((weeklyHonos / S.goals.weekly.honos) * 100),
  );
  const weeklyDedecusPct = Math.min(
    100,
    Math.round((weeklyDedecus / S.goals.weekly.dedecus) * 100),
  );
  const monthlyHonosPct = Math.min(
    100,
    Math.round((monthlyHonos / S.goals.monthly.honos) * 100),
  );
  const monthlyDedecusPct = Math.min(
    100,
    Math.round((monthlyDedecus / S.goals.monthly.dedecus) * 100),
  );

  container.innerHTML = `
    <div class="goal-progress-item">
      <div class="goal-progress-bar">
        <div class="goal-progress-fill honos" style="width: ${weeklyHonosPct}%"></div>
      </div>
      <div class="goal-progress-text">Weekly Honos: ${weeklyHonos}/${S.goals.weekly.honos} (${weeklyHonosPct}%)</div>
    </div>
    <div class="goal-progress-item">
      <div class="goal-progress-bar">
        <div class="goal-progress-fill dedecus" style="width: ${weeklyDedecusPct}%"></div>
      </div>
      <div class="goal-progress-text">Weekly Dedecus: ${weeklyDedecus}/${S.goals.weekly.dedecus} (${weeklyDedecusPct}%)</div>
    </div>
    <div class="goal-progress-item">
      <div class="goal-progress-bar">
        <div class="goal-progress-fill honos" style="width: ${monthlyHonosPct}%"></div>
      </div>
      <div class="goal-progress-text">Monthly Honos: ${monthlyHonos}/${S.goals.monthly.honos} (${monthlyHonosPct}%)</div>
    </div>
    <div class="goal-progress-item">
      <div class="goal-progress-bar">
        <div class="goal-progress-fill dedecus" style="width: ${monthlyDedecusPct}%"></div>
      </div>
      <div class="goal-progress-text">Monthly Dedecus: ${monthlyDedecus}/${S.goals.monthly.dedecus} (${monthlyDedecusPct}%)</div>
    </div>
  `;
}
function renderDeeds() {
  renderSuggestions();
  renderSide("honos", "honos-cats");
  renderSide("dedecus", "dedecus-cats");
}

function renderSuggestions() {
  const container = document.getElementById("honos-suggestions");
  const suggestions = [];

  // Find habits not done today
  const today = new Date().toDateString();
  const doneToday = new Set(
    S.log
      .filter((entry) => entry.date === today && entry.pts > 0)
      .map((entry) => entry.deedId),
  );

  S.deeds
    .filter((deed) => deed.t === "honos" && !doneToday.has(deed.id))
    .slice(0, 1)
    .forEach((deed) => {
      suggestions.push(
        `<div class="suggestion-item compact" onclick="confirmSuggestion('${deed.id}')">Try one: ${deed.n} (+${deed.p})</div>`,
      );
    });

  container.innerHTML = suggestions.join("");
}

function confirmSuggestion(deedId) {
  const container = document.getElementById("honos-suggestions");
  const deed = S.deeds.find((d) => d.id === deedId);
  if (!deed) return;

  container.innerHTML = `
    <div class="suggestion-item compact" style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
      <div style="flex:1;line-height:1.25">Add honor for <strong>${deed.n}</strong>?</div>
      <div style="display:flex;gap:8px">
        <button class="sbtn" style="padding:6px 10px" onclick="applySuggestion('${deedId}')">${IC.chk}</button>
        <button class="sbtn" style="padding:6px 10px" onclick="cancelSuggestion()">${IC.x}</button>
      </div>
    </div>
  `;
}

function applySuggestion(deedId) {
  adj(deedId, 1);
  renderSuggestions();
}

function cancelSuggestion() {
  renderSuggestions();
}

function renderSide(type, cid) {
  const el = document.getElementById(cid);
  const cats = {};
  S.deeds
    .filter((d) => d.t === type)
    .forEach((d) => {
      if (!cats[d.c]) cats[d.c] = [];
      cats[d.c].push(d);
    });
  el.innerHTML = Object.entries(cats)
    .map(([cat, deeds]) => {
      const cnt = deeds.reduce((a, d) => a + (S.counts[d.id] || 0), 0);
      const cntDisplay = cnt > 0 ? cnt : "";
      const op =
        openAccordions[type] && typeof openAccordions[type][cat] === "boolean"
          ? openAccordions[type][cat]
          : cat === "faith";
      return (
        '<div class="acc-block' +
        (op ? " open" : "") +
        '" id="ab-' +
        type +
        "-" +
        cat +
        '"><div class="acc-head" onclick="tog(\'' +
        type +
        "','" +
        cat +
        '\')"><div class="acc-left"><span class="acc-title">' +
        (CAT_NAMES[cat] || cat) +
        "</span>" +
        (cntDisplay
          ? '<span class="acc-count">' + cntDisplay + "x</span>"
          : "") +
        "</div>" +
        IC.chv +
        '</div><div class="acc-body">' +
        deeds.map(deedHTML).join("") +
        "</div></div>"
      );
    })
    .join("");
}
function tog(type, cat) {
  const b = document.getElementById("ab-" + type + "-" + cat);
  if (!b) return;
  b.classList.toggle("open");
  if (!openAccordions[type]) openAccordions[type] = {};
  openAccordions[type][cat] = b.classList.contains("open");
}
function deedHTML(d) {
  const cnt = S.counts[d.id] || 0,
    cntDisplay = cnt > 0 ? cnt : "",
    neg = d.t === "dedecus",
    pl = neg ? "-" + d.p : "+" + d.p;
  const streak = S.streaks[d.id] || { current: 0, longest: 0 };
  const showStreak =
    d.t === "honos" && (streak.current > 0 || streak.longest > 0);
  const streakInfo = showStreak
    ? `<div class="deed-streak">🔥 ${streak.current} | 🏆 ${streak.longest}</div>`
    : "";

  return (
    '<div class="deed ' +
    (neg ? "di" : "hi") +
    '"><div class="deed-info"><div class="deed-name">' +
    d.n +
    "</div>" +
    (d.d
      ? '<div class="deed-detail">' + d.d + (d.u ? " / " + d.ul : "") + "</div>"
      : "") +
    streakInfo +
    '</div><div class="deed-pts ' +
    (neg ? "neg" : "pos") +
    '">' +
    (d.u ? pl + "/u" : pl) +
    '</div><div class="stepper"><button class="sbtn" onclick="adj(\'' +
    d.id +
    '\',-1)">&minus;</button><span class="scount">' +
    cntDisplay +
    '</span><button class="sbtn" onclick="adj(\'' +
    d.id +
    "',1)\">+</button></div></div>"
  );
}
async function adj(id, delta) {
  const deed = S.deeds.find((d) => d.id === id);
  if (!deed) return;
  const prev = S.counts[id] || 0,
    next = Math.max(0, prev + delta),
    diff = next - prev;
  if (!diff) return;
  S.counts[id] = next;
  if (deed.t === "honos") {
    S.ht = Math.max(0, S.ht + deed.p * diff);
    S.hd = Math.max(0, S.hd + deed.p * diff);
    if (diff > 0) {
      addLog(deed.n, deed.p, "honos", deed.c, id);
      toast("+" + deed.p + " Honor: " + deed.n, "pos");
    }
  } else {
    S.dt = Math.max(0, S.dt + deed.p * diff);
    S.dd = Math.max(0, S.dd + deed.p * diff);
    if (diff > 0) {
      addLog(deed.n, -deed.p, "dedecus", deed.c, id);
      toast("-" + deed.p + " Shame: " + deed.n, "neg");
    }
  }

  // If user reduced the count, remove the most recent matching log entry for today
  if (diff < 0) {
    const today = new Date().toDateString();
    for (let i = S.log.length - 1; i >= 0; i--) {
      const l = S.log[i];
      if (
        l.deedId === id &&
        l.date === today &&
        ((deed.t === "honos" && l.pts === deed.p) ||
          (deed.t === "dedecus" && l.pts === -deed.p))
      ) {
        S.log.splice(i, 1);
        break;
      }
    }
  }

  await save();
  if (!isOnline) {
    await queueAction("deed", { id, delta: diff });
  }
  render();
  // Add animation to the updated deed
  setTimeout(() => {
    const deedElement = document.querySelector(
      `button[onclick*="adj('${id}'"]`,
    );
    if (deedElement) {
      deedElement.closest(".deed").classList.add("scale-in");
      setTimeout(
        () => deedElement.closest(".deed").classList.remove("scale-in"),
        200,
      );
    }
  }, 50);
}
async function addLog(name, pts, type, cat, deedId) {
  const now = new Date();
  const logEntry = {
    name,
    pts,
    type,
    cat: cat || "custom",
    deedId: deedId || null,
    time: now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    date: now.toDateString(),
    id: Date.now() + Math.random(),
  };
  S.log.unshift(logEntry);
  if (S.log.length > 300) S.log.pop();

  if (!isOnline) {
    await queueAction("log", logEntry);
  }
}
function renderLog() {
  // Clear existing timeout
  if (searchTimeout) clearTimeout(searchTimeout);

  // Show searching indicator
  const searchInput = document.getElementById("logSearch");
  searchInput.classList.add("searching");

  // Debounce the actual rendering
  searchTimeout = setTimeout(() => {
    searchInput.classList.remove("searching");
    renderLogImmediate();
  }, 300);
}

function renderLogImmediate() {
  document.getElementById("rep-h").textContent = "+" + S.ht;
  document.getElementById("rep-d").textContent = "-" + S.dt;
  const net = S.ht - S.dt;
  document.getElementById("rep-n").textContent = net > 0 ? "+" + net : net;
  document.getElementById("rep-e").textContent = S.log.length;
  const tot = S.ht + S.dt,
    pct = tot > 0 ? Math.round((S.ht / tot) * 100) : 50;
  let v = "None";
  if (pct >= 80) v = "Exemplary";
  else if (pct >= 65) v = "Honorable";
  else if (pct >= 50) v = "Balanced";
  else if (pct >= 35) v = "Struggling";
  else v = "In Disgrace";
  document.getElementById("rep-v").textContent = v;
  const search = document.getElementById("logSearch").value.toLowerCase();
  const filteredLog = S.log.filter(
    (l) =>
      l.name.toLowerCase().includes(search) ||
      l.cat.toLowerCase().includes(search),
  );
  const el = document.getElementById("log-list");
  if (!filteredLog.length) {
    el.innerHTML =
      '<div class="empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2"/></svg>No entries found.</div>';
    return;
  }
  const byCat = {};
  filteredLog.forEach((l) => {
    const k = l.cat || "custom";
    if (!byCat[k]) byCat[k] = [];
    byCat[k].push(l);
  });

  // Virtual scrolling: show only first 20 items per category
  const maxItemsPerCat = 20;
  el.innerHTML = Object.entries(byCat)
    .map(
      ([cat, entries]) =>
        '<div class="log-cat-label">' +
        (CAT_NAMES[cat] || cat) +
        "</div>" +
        entries
          .slice(0, maxItemsPerCat)
          .map(
            (l) =>
              '<div class="log-item"><div class="ldot ' +
              (l.pts > 0 ? "pos" : "neg") +
              '"></div><div class="lname">' +
              l.name +
              '</div><div class="ltime">' +
              l.time +
              '</div><div class="lpts ' +
              (l.pts > 0 ? "pos" : "neg") +
              '">' +
              (l.pts > 0 ? "+" : "") +
              l.pts +
              '</div><button class="ldel" onclick="delLog(' +
              l.id +
              ')">' +
              IC.x +
              "</button></div>",
          )
          .join("") +
        (entries.length > maxItemsPerCat
          ? '<button class="load-more-btn" onclick="loadMoreLogs(\'' +
            cat +
            "')\">Load More</button>"
          : ""),
    )
    .join("");
}

function loadMoreLogs(cat) {
  // For now, just re-render with more items. In a real implementation, this would load more from server/storage
  renderLogImmediate();
}

function delLog(id) {
  const i = S.log.findIndex((l) => l.id === id);
  if (i === -1) return;
  const l = S.log[i];
  if (l.pts > 0) S.ht = Math.max(0, S.ht - l.pts);
  else S.dt = Math.max(0, S.dt - Math.abs(l.pts));
  S.log.splice(i, 1);
  save();
  render();
}
let tFilter = "all",
  selectedDay = null,
  editId = null,
  dateFrom = "",
  dateTo = "",
  catFilter = "";
function renderDayStrip() {
  const strip = document.getElementById("day-strip");
  const today = new Date();
  const tf = DAY_FULL[today.getDay()];
  if (selectedDay === null) selectedDay = tf;
  const mon = new Date(today);
  mon.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(mon);
    d.setDate(mon.getDate() + i);
    days.push(d);
  }
  const pills = days.map((d) => ({
    label: DAY_SHORT[d.getDay()],
    num: d.getDate(),
    full: DAY_FULL[d.getDay()],
    isToday: d.toDateString() === today.toDateString(),
  }));
  strip.innerHTML = pills
    .map((p) => {
      const tasks = S.tasks.filter((t) => t.day === p.full);
      const missed = tasks.some((t) => t.s === "missed");
      const allDone = tasks.length > 0 && tasks.every((t) => t.s === "done");
      const hasTodo = tasks.some((t) => t.s === "todo");
      const dotCls = missed
        ? "has-missed"
        : allDone
          ? "all-done"
          : hasTodo
            ? "has-todo"
            : "";
      const sel = p.full === selectedDay;
      return (
        '<div class="day-pill' +
        (p.isToday ? " today" : "") +
        (sel ? " selected" : "") +
        '" onclick="selectDay(\'' +
        p.full +
        '\')"><span class="dp-name">' +
        p.label +
        '</span><span class="dp-num">' +
        p.num +
        '</span><div class="dp-dot ' +
        dotCls +
        '"></div></div>'
      );
    })
    .join("");
}
function selectDay(day) {
  selectedDay = day;
  renderTasks();
}
function setFilter(f, btn) {
  tFilter = f;
  document
    .querySelectorAll(".tf-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderTasks();
}

function updateTaskFilters() {
  dateFrom = document.getElementById("date-from").value;
  dateTo = document.getElementById("date-to").value;
  catFilter = document.getElementById("cat-filter").value;
  renderTasks();
}
function renderTasks() {
  // Populate dependency select
  const depSelect = document.getElementById("t-depends");
  depSelect.innerHTML = '<option value="">No dependency</option>';
  const seen = new Set();
  S.tasks.forEach((task) => {
    if (seen.has(task.id)) return;
    seen.add(task.id);
    const option = document.createElement("option");
    option.value = task.id;
    option.textContent = task.n;
    depSelect.appendChild(option);
  });

  renderDayStrip();
  const el = document.getElementById("task-list");
  const todayF = DAY_FULL[new Date().getDay()];
  const isToday = selectedDay === todayF;
  let tasks = S.tasks.filter((t) => t.day === selectedDay);
  if (tFilter !== "all") tasks = tasks.filter((t) => t.s === tFilter);

  // Date range filter
  if (dateFrom || dateTo) {
    const fromDate = dateFrom ? new Date(dateFrom) : null;
    const toDate = dateTo ? new Date(dateTo) : null;
    tasks = tasks.filter((t) => {
      const taskDate = new Date();
      // Approximate task date based on day (simplified)
      if (fromDate && taskDate < fromDate) return false;
      if (toDate && taskDate > toDate) return false;
      return true;
    });
  }

  // Category filter (add category to tasks if missing)
  if (catFilter) {
    tasks = tasks.filter(
      (t) => t.cat === catFilter || t.n.toLowerCase().includes(catFilter),
    );
  }
  tasks.sort((a, b) => {
    const ta = a.time === "--" ? "99:99" : a.time;
    const tb = b.time === "--" ? "99:99" : b.time;
    return ta.localeCompare(tb);
  });
  if (!tasks.length) {
    el.innerHTML =
      '<div class="empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>Nothing here.</div>';
    return;
  }
  el.innerHTML = tasks
    .map((t) => {
      if (editId === t.id)
        return (
          '<div class="task-item"><div style="flex:1"><input class="edit-inline" id="ei-n-' +
          t.id +
          '" value="' +
          t.n.replace(/"/g, "&quot;") +
          '" style="margin-bottom:6px"><div class="frow" style="margin-bottom:6px"><input class="edit-inline" id="ei-t-' +
          t.id +
          '" value="' +
          t.time +
          '" placeholder="Time" style="width:80px;flex:none"><input class="edit-inline" id="ei-l-' +
          t.id +
          '" value="' +
          (t.loc || "").replace(/"/g, "&quot;") +
          '" placeholder="Location" style="flex:1"></div><div class="frow" style="margin-bottom:6px"><input class="edit-inline" id="ei-h-' +
          t.id +
          '" type="number" min="0" value="' +
          (t.honorPts || 0) +
          '" placeholder="Honor pts" style="flex:1"><input class="edit-inline" id="ei-s-' +
          t.id +
          '" type="number" min="0" value="' +
          (t.shamePts || 0) +
          '" placeholder="Shame pts" style="flex:1"></div><div style="display:flex;gap:6px"><button class="fbtn" style="padding:7px 12px;width:auto;font-size:11px" onclick="saveEdit(\'' +
          t.id +
          '\')">Save</button><button class="fbtn" style="padding:7px 10px;width:auto;font-size:11px;border-color:var(--border);background:none;color:var(--text-mid)" onclick="cancelEdit()">Cancel</button></div></div></div>'
        );
      const hp = t.honorPts || 0,
        sp = t.shamePts || 0;
      const ic = t.s === "done" ? IC.chk : t.s === "missed" ? IC.x : "";
      return (
        '<div class="task-item' +
        (isToday && t.s === "todo"
          ? " is-today"
          : t.s === "missed"
            ? " is-missed"
            : t.s === "done"
              ? " is-done"
              : "") +
        '"><div class="tchk ' +
        t.s +
        '" onclick="cycleTask(\'' +
        t.id +
        "')\">" +
        ic +
        '</div><div class="tbody"><div class="tname ' +
        t.s +
        '">' +
        t.n +
        '</div><div class="tmeta">' +
        (t.time !== "--" ? "<span>" + t.time + "</span>" : "") +
        '<span style="font-size:9px;color:var(--text-dim)">' +
        t.day +
        "</span>" +
        (hp ? '<span class="tpts pos">+' + hp + "</span>" : "") +
        (sp ? '<span class="tpts neg">-' + sp + "</span>" : "") +
        (t.loc ? '<span class="tloc">' + t.loc + "</span>" : "") +
        '</div></div><div class="tactions"><button class="ta-btn" onclick="editTask(\'' +
        t.id +
        "')\">" +
        IC.edt +
        '</button><button class="ta-btn del" onclick="delTask(\'' +
        t.id +
        "')\">" +
        IC.del +
        "</button></div></div>"
      );
    })
    .join("");
}
async function cycleTask(id) {
  const t = S.tasks.find((x) => x.id === id);
  if (!t) return;

  // Check dependencies
  if (t.depends) {
    const depTask = S.tasks.find((x) => x.id === t.depends);
    if (depTask && depTask.s !== "done") {
      toast("Complete dependency first: " + depTask.n, "neg");
      return;
    }
  }

  const ts = new Date().toDateString();
  const scored = t.scoredDate === ts;
  const prevState = t.s; // Capture previous state for queue
  if (t.s === "todo") {
    t.s = "done";
    if (!scored && (t.honorPts || 0) > 0) {
      S.ht += t.honorPts;
      S.hd += t.honorPts;
      addLog(t.n, t.honorPts, "honos", "custom", t.id);
      toast("+" + t.honorPts + " Honor: " + t.n, "pos");
      t.scoredDate = ts;
    }
  } else if (t.s === "done") {
    if (scored && (t.honorPts || 0) > 0) {
      S.ht = Math.max(0, S.ht - t.honorPts);
      S.hd = Math.max(0, S.hd - t.honorPts);
    }
    t.s = "missed";
    if ((t.shamePts || 0) > 0) {
      S.dt += t.shamePts;
      S.dd += t.shamePts;
      addLog("[MISSED] " + t.n, -t.shamePts, "dedecus", "custom", t.id);
      toast("-" + t.shamePts + " Shame: " + t.n, "neg");
    }
    t.scoredDate = ts;
  } else {
    if (scored && (t.shamePts || 0) > 0) {
      S.dt = Math.max(0, S.dt - t.shamePts);
      S.dd = Math.max(0, S.dd - t.shamePts);
    }
    t.s = "todo";
    t.scoredDate = "";
  }
  await save();
  render();

  if (!isOnline) {
    await queueAction("task", { action: "cycle", id, prevState });
  }
}
function editTask(id) {
  editId = id;
  renderTasks();
}
function cancelEdit() {
  editId = null;
  renderTasks();
}
function saveEdit(id) {
  const t = S.tasks.find((x) => x.id === id);
  if (!t) return;
  const nv = document.getElementById("ei-n-" + id);
  const tv = document.getElementById("ei-t-" + id);
  const lv = document.getElementById("ei-l-" + id);
  const hv = document.getElementById("ei-h-" + id);
  const sv = document.getElementById("ei-s-" + id);
  if (nv) t.n = nv.value.trim() || t.n;
  if (tv) t.time = tv.value.trim() || t.time;
  if (lv) t.loc = lv.value.trim();
  if (hv) t.honorPts = Math.max(0, parseInt(hv.value) || 0);
  if (sv) t.shamePts = Math.max(0, parseInt(sv.value) || 0);
  editId = null;
  save();
  renderTasks();
}
function delTask(id) {
  S.tasks = S.tasks.filter((t) => t.id !== id);
  save();
  renderTasks();
}
async function addTask() {
  const n = document.getElementById("tn").value.trim();
  if (!n) {
    toast("Enter a task name", "neg");
    return;
  }
  const tm = document.getElementById("tt").value.trim() || "--";
  const day = document.getElementById("td").value;
  const hp = Math.max(0, parseInt(document.getElementById("t-hp").value) || 0);
  const sp = Math.max(0, parseInt(document.getElementById("t-sp").value) || 0);
  const loc = document.getElementById("t-loc").value.trim();
  const depends = document.getElementById("t-depends").value;
  const taskId = "u_" + Date.now();
  const task = {
    id: taskId,
    day,
    time: tm,
    n,
    s: "todo",
    honorPts: hp,
    shamePts: sp,
    loc,
    depends: depends || null,
    scoredDate: "",
  };
  S.tasks.push(task);
  ["tn", "tt", "t-hp", "t-sp", "t-loc"].forEach(
    (i) => (document.getElementById(i).value = ""),
  );
  document.getElementById("t-depends").value = "";
  await save();
  renderTasks();
  toast("Task added", "pos");

  if (!isOnline) {
    await queueAction("task", { action: "add", task });
  }
}
let cVal = 0,
  cName = "";
function previewCalc() {
  const n = document.getElementById("cn").value.trim();
  const p = parseInt(document.getElementById("cp").value) || 0;
  if (!n || !p) {
    toast("Enter a name and points", "neg");
    return;
  }
  cVal = p;
  cName = n;
  document.getElementById("crv").textContent = p > 0 ? "+" + p : p;
  document.getElementById("cres").style.display = "block";
}
function addCalc(sign) {
  if (!cName) return;
  const pts = Math.abs(cVal) * sign;
  if (sign === 1) {
    S.ht += pts;
    S.hd += pts;
    addLog(cName, pts, "honos", "custom");
    toast("+" + pts + ": " + cName, "pos");
  } else {
    S.dt += Math.abs(pts);
    S.dd += Math.abs(pts);
    addLog(cName, -Math.abs(pts), "dedecus", "custom");
    toast("-" + Math.abs(pts) + ": " + cName, "neg");
  }
  document.getElementById("cres").style.display = "none";
  document.getElementById("cn").value = "";
  document.getElementById("cp").value = "";
  save();
  render();
}
function renderConfig() {
  // Render goals
  const goalsHtml = `
    <div class="goals-grid">
      <div class="goal-item">
        <div class="goal-label">Weekly Honos</div>
        <input class="finput" type="number" value="${S.goals.weekly.honos}" onchange="updateGoal('weekly', 'honos', this.value)">
      </div>
      <div class="goal-item">
        <div class="goal-label">Weekly Dedecus</div>
        <input class="finput" type="number" value="${S.goals.weekly.dedecus}" onchange="updateGoal('weekly', 'dedecus', this.value)">
      </div>
      <div class="goal-item">
        <div class="goal-label">Monthly Honos</div>
        <input class="finput" type="number" value="${S.goals.monthly.honos}" onchange="updateGoal('monthly', 'honos', this.value)">
      </div>
      <div class="goal-item">
        <div class="goal-label">Monthly Dedecus</div>
        <input class="finput" type="number" value="${S.goals.monthly.dedecus}" onchange="updateGoal('monthly', 'dedecus', this.value)">
      </div>
    </div>
  `;
  document.getElementById("goals-section").innerHTML = goalsHtml;

  renderConfigDeeds();
  renderGoalsManager();
}

function renderGoalsManager() {
  const container = document.getElementById("goals-list-section");
  if (!container) return;

  const goalCount = S.goalsList.length;
  const goalsHtml = S.goalsList
    .map((goal) => {
      const deadline = goal.deadline ? `by ${goal.deadline}` : "no deadline";
      const doneCount = goal.milestones.filter((m) => m.done).length;
      const totalCount = goal.milestones.length;
      const progress = totalCount
        ? Math.round((doneCount / totalCount) * 100)
        : 0;
      const progressLabel = totalCount
        ? `${doneCount}/${totalCount} milestones`
        : "No milestones";

      const linkedTasks = (goal.linkedTasks || [])
        .map((taskId) => S.tasks.find((t) => t.id === taskId))
        .filter(Boolean);
      const linkedTotal = linkedTasks.length;
      const linkedDone = linkedTasks.filter((t) => t.s === "done").length;
      const linkedLabel = linkedTotal
        ? `${linkedDone}/${linkedTotal} tasks complete`
        : "No linked tasks";

      const availableTasks = S.tasks.filter(
        (t) => !goal.linkedTasks.includes(t.id) && t.day !== "Daily",
      );

      return `
        <div class="goal-card${goal.done ? " goal-done" : ""}" id="goal-${goal.id}">
          <div class="goal-header">
            <div class="goal-title">
              <input class="goal-title-input" value="${goal.title}" onblur="updateGoalTitle('${goal.id}', this.value)" />
              <span class="goal-deadline">${deadline}</span>
            </div>
            <div class="goal-actions">
              <button class="sbtn" title="Mark complete" onclick="toggleGoalDone('${goal.id}')">${goal.done ? IC.chk : IC.x}</button>
              <button class="sbtn" title="Delete" onclick="deleteGoal('${goal.id}')">${IC.del}</button>
            </div>
          </div>
          <div class="goal-meta">${progressLabel} - ${progress}%</div>
          <div class="goal-meta">${linkedLabel}</div>
          <div class="goal-linked">
            ${linkedTasks
              .map(
                (t) =>
                  `<div class="goal-linked-task">
                    <span>${t.n}</span>
                    <button class="sbtn" title="Unlink" onclick="unlinkTaskFromGoal('${goal.id}','${t.id}')">${IC.x}</button>
                  </div>`,
              )
              .join("")}
            <div class="goal-link-add">
              <select class="finput" id="goal-task-select-${goal.id}">
                <option value="">Link a task...</option>
                ${availableTasks
                  .map((t) =>
                    `<option value="${t.id}">${t.n} (${t.day})</option>`,
                  )
                  .join("")}
              </select>
              <button class="fbtn" onclick="linkTaskToGoal('${goal.id}')">Link</button>
            </div>
          </div>
          <div class="goal-milestones">
            ${goal.milestones
              .map(
                (m) =>
                  `<div class="goal-milestone${m.done ? " done" : ""}">
                    <label><input type="checkbox" ${m.done ? "checked" : ""} onchange="toggleMilestone('${goal.id}','${m.id}')" /> ${m.title}</label>
                  </div>`,
              )
              .join("")}
            <div class="goal-add-milestone">
              <input class="finput" id="milestone-${goal.id}" placeholder="New milestone..." />
              <button class="fbtn" onclick="addMilestone('${goal.id}')">Add</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = `
    <div class="goal-add">
      <div class="frow">
        <input class="finput" id="new-goal-title" placeholder="New goal title..." />
      </div>
      <div class="frow">
        <input class="finput" id="new-goal-deadline" type="date" />
        <button class="fbtn" onclick="addGoal()">Add Goal</button>
      </div>
    </div>
    <div class="goal-list">${goalsHtml || "<div class='empty'>No goals yet.</div>"}</div>
  `;
}

function addGoal() {
  const titleEl = document.getElementById("new-goal-title");
  const deadlineEl = document.getElementById("new-goal-deadline");
  const title = titleEl ? titleEl.value.trim() : "";
  const deadline = deadlineEl ? deadlineEl.value : "";
  if (!title) {
    toast("Enter a goal title", "neg");
    return;
  }
  const goal = {
    id: "g_" + Date.now(),
    title,
    deadline,
    done: false,
    milestones: [],
    linkedTasks: [],
  };
  S.goalsList.push(goal);
  if (titleEl) titleEl.value = "";
  if (deadlineEl) deadlineEl.value = "";
  save();
  renderGoalsManager();
  toast("Goal added", "pos");
}

function updateGoalTitle(goalId, value) {
  const goal = S.goalsList.find((g) => g.id === goalId);
  if (!goal) return;
  goal.title = value.trim() || goal.title;
  save();
}

function toggleGoalDone(goalId) {
  const goal = S.goalsList.find((g) => g.id === goalId);
  if (!goal) return;
  goal.done = !goal.done;
  save();
  renderGoalsManager();
}

function deleteGoal(goalId) {
  S.goalsList = S.goalsList.filter((g) => g.id !== goalId);
  save();
  renderGoalsManager();
}

function addMilestone(goalId) {
  const input = document.getElementById(`milestone-${goalId}`);
  if (!input) return;
  const title = input.value.trim();
  if (!title) return;
  const goal = S.goalsList.find((g) => g.id === goalId);
  if (!goal) return;
  goal.milestones.push({ id: "m_" + Date.now(), title, done: false });
  input.value = "";
  save();
  renderGoalsManager();
}

function toggleMilestone(goalId, milestoneId) {
  const goal = S.goalsList.find((g) => g.id === goalId);
  if (!goal) return;
  const milestone = goal.milestones.find((m) => m.id === milestoneId);
  if (!milestone) return;
  milestone.done = !milestone.done;
  save();
  renderGoalsManager();
}

function linkTaskToGoal(goalId) {
  const select = document.getElementById(`goal-task-select-${goalId}`);
  if (!select) return;
  const taskId = select.value;
  if (!taskId) return;
  const goal = S.goalsList.find((g) => g.id === goalId);
  if (!goal) return;
  if (!goal.linkedTasks) goal.linkedTasks = [];
  if (!goal.linkedTasks.includes(taskId)) {
    goal.linkedTasks.push(taskId);
  }
  select.value = "";
  save();
  renderGoalsManager();
}

function unlinkTaskFromGoal(goalId, taskId) {
  const goal = S.goalsList.find((g) => g.id === goalId);
  if (!goal || !goal.linkedTasks) return;
  goal.linkedTasks = goal.linkedTasks.filter((id) => id !== taskId);
  save();
  renderGoalsManager();
}

function renderConfigDeeds() {
  const container = document.getElementById("cfg-list");
  const byType = { honos: {}, dedecus: {} };
  S.deeds.forEach((d) => {
    const bucket = byType[d.t] || (byType[d.t] = {});
    if (!bucket[d.c]) bucket[d.c] = [];
    bucket[d.c].push(d);
  });

  const typeOrder = ["honos", "dedecus"];
  container.innerHTML = typeOrder
    .map((type) => {
      const cats = byType[type] || {};
      const typeTitle = type === "honos" ? "Honos Deeds" : "Dedecus Deeds";
      const catHtml = Object.entries(cats)
        .map(([cat, deeds]) => {
          const accId = "cfg-" + type + "-" + cat;
          const open = cat === "faith";
          return (
            '<div class="acc-block' +
            (open ? " open" : "") +
            '" id="' +
            accId +
            '"><div class="acc-head" onclick="togCfg(\'' +
            type +
            "','" +
            cat +
            '\')"><div class="acc-left"><span class="acc-title">' +
            (CAT_NAMES[cat] || cat) +
            "</span></div>" +
            IC.chv +
            '</div><div class="acc-body">' +
            deeds
              .map(
                (d) =>
                  '<div class="cfg-item"><div class="cfg-name">' +
                  d.n +
                  (d.u ? '<span class="cfg-unit"> /' + d.ul + "</span>" : "") +
                  '</div><span class="cfg-badge ' +
                  (d.t === "honos" ? "pos" : "neg") +
                  '">' +
                  (d.t === "honos" ? "H" : "D") +
                  '</span><input class="cfg-input" type="number" value="' +
                  d.p +
                  '" onchange="updPts(\'' +
                  d.id +
                  '\',this.value)" min="0"></div>',
              )
              .join("") +
            "</div></div>"
          );
        })
        .join("");

      if (!catHtml) return "";
      return (
        '<div class="cfg-group"><div class="cfg-group-title">' +
        typeTitle +
        "</div>" +
        catHtml +
        "</div>"
      );
    })
    .join("");
}

function togCfg(type, cat) {
  const b = document.getElementById("cfg-" + type + "-" + cat);
  if (b) b.classList.toggle("open");
}

function togCfgSection(id) {
  const b = document.getElementById(id);
  if (b) b.classList.toggle("open");
}
function updateGoal(period, type, value) {
  S.goals[period][type] = Math.max(0, parseInt(value) || 0);
  save();
}

function addDeed() {
  const n = document.getElementById("nd-name").value.trim();
  const p = parseInt(document.getElementById("nd-pts").value) || 0;
  const t = document.getElementById("nd-type").value;
  const c = document.getElementById("nd-cat").value;
  const dv = document.getElementById("nd-detail").value.trim();
  if (!n || p <= 0) {
    toast("Enter a name and points", "neg");
    return;
  }
  S.deeds.push({ id: "c_" + Date.now(), t, c, n, p, d: dv });
  ["nd-name", "nd-pts", "nd-detail"].forEach(
    (i) => (document.getElementById(i).value = ""),
  );
  save();
  render();
  toast("Deed added", "pos");
}
function resetWeek() {
  if (!confirm("Reset all scores and start a new week?")) return;
  S.ht = 0;
  S.dt = 0;
  S.hd = 0;
  S.dd = 0;
  S.log = [];
  S.counts = {};
  S.tasks.forEach((t) => {
    t.s = "todo";
    t.scoredDate = "";
  });
  save();
  render();
  toast("New week. Prove yourself.", "pos");
}
function go(tab) {
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("panel-" + tab).classList.add("active");
  const cls = tab === "honos" ? "on-h" : tab === "dedecus" ? "on-d" : "on-o";
  [
    "tb-honos",
    "tb-dedecus",
    "tb-tasks",
    "tb-log",
    "tb-calc",
    "tb-stats",
    "tb-config",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.className = "tb";
  });

  const tb = document.getElementById("tb-" + tab);
  if (tb) tb.className = "tb " + cls;

  if (tab === "stats" || tab === "log") renderStats();
}
async function updateOnlineStatus() {
  isOnline = navigator.onLine;
  const offlineIndicator = document.getElementById("offlineIndicator");
  const syncStatus = document.getElementById("syncStatus");

  if (isOnline) {
    offlineIndicator.classList.remove("show");
    await processQueue();
  } else {
    offlineIndicator.classList.add("show");
    syncStatus.classList.remove("show");
  }
  updatePendingCount();
}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
function toast(msg, type) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = "toast " + (type || "") + " show";
  clearTimeout(tTimer);
  tTimer = setTimeout(() => el.classList.remove("show"), 2500);
}
function renderStats() {
  try {
    const ctx = document.getElementById("statsChart").getContext("2d");
    if (window.myChart) window.myChart.destroy();
    window.myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Honos", "Dedecus"],
        datasets: [
          {
            label: "Points",
            data: [S.ht, S.dt],
            backgroundColor: ["#C9A84C", "#8B1A1A"],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  } catch (e) {
    console.error("Chart error:", e);
  }

  // Hide habit completion rate section (no longer used)
  const ringsCard = document.querySelector(".stats-card.progress-rings");
  if (ringsCard) ringsCard.style.display = "none";

  renderActivityHeatmap();
  renderInsights();
}

function renderInsights() {
  const container = document.getElementById("insights");
  const insights = [];

  // Collect recent activity by deed
  const deedActivity = {};
  const today = new Date();
  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() - 7);

  S.log.forEach((entry) => {
    if (!entry.deedId) return;
    const entryDate = new Date(entry.date);
    if (entryDate < cutoff) return; // only look at the last 7 days
    if (!deedActivity[entry.deedId])
      deedActivity[entry.deedId] = { days: new Set(), slips: 0, wins: 0 };
    deedActivity[entry.deedId].days.add(entry.date);
    if (entry.pts > 0) deedActivity[entry.deedId].wins += 1;
    else if (entry.pts < 0) deedActivity[entry.deedId].slips += 1;
  });

  const deedEntries = Object.entries(deedActivity)
    .map(([deedId, stats]) => {
      const deed = S.deeds.find((d) => d.id === deedId);
      return deed
        ? {
            deed,
            days: stats.days.size,
            wins: stats.wins,
            slips: stats.slips,
          }
        : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.days - a.days)
    .slice(0, 3);

  const honorMessages = {
    faith: (d, days) =>
      `Your faith habit "${d.n}" has been done ${days} of the last 7 days — keep that spiritual rhythm.`,
    discipline: (d, days) =>
      `"${d.n}" shows discipline: ${days} days this week. Stay consistent.`,
    body: (d, days) =>
      `Physical gains are built in repetition. "${d.n}" hit ${days} days this week.`,
    work: (d, days) =>
      `"${d.n}" is a work habit; you logged it ${days} times recently. Keep the streak.`,
    character: (d, days) =>
      `Character habits like "${d.n}" build over time — ${days} days this week.`,
    custom: (d, days) =>
      `"${d.n}" has been done ${days} days this week. Keep it going.`,
  };

  const shameMessages = {
    faith: (d, slips) =>
      `"${d.n}" came up ${slips} time${slips === 1 ? "" : "s"} this week. Reflect and reset.`,
    discipline: (d, slips) =>
      `"${d.n}" slipped ${slips} time${slips === 1 ? "" : "s"}. Adjust habits to avoid repeat.`,
    body: (d, slips) =>
      `Your body goals hit a snag with "${d.n}" ${slips} time${slips === 1 ? "" : "s"}. Reprioritize recovery.`,
    work: (d, slips) =>
      `Work habits like "${d.n}" showed up ${slips} time${slips === 1 ? "" : "s"}. Consider a focus reset.`,
    character: (d, slips) =>
      `"${d.n}" happened ${slips} time${slips === 1 ? "" : "s"}. Use it as a clue for change.`,
    custom: (d, slips) =>
      `"${d.n}" came up ${slips} time${slips === 1 ? "" : "s"}. Reflect and adjust.`,
  };

  deedEntries.forEach(({ deed, days, wins, slips }) => {
    if (deed.t === "honos") {
      const msg = (honorMessages[deed.c] || honorMessages.custom)(deed, days);
      insights.push(msg);
    } else {
      const msg = (shameMessages[deed.c] || shameMessages.custom)(deed, slips);
      insights.push(msg);
    }
  });

  if (insights.length === 0) {
    insights.push("Log a few deeds to unlock more useful insights.");
  }

  container.innerHTML = insights
    .slice(0, 3)
    .map((insight) => `<div class="insight-item">${insight}</div>`)
    .join("");
}

function renderActivityHeatmap() {
  const container = document.getElementById("activityHeatmap");
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 63); // 9 weeks back

  // Get activity data
  const activityData = {};
  S.log.forEach((entry) => {
    const date = new Date(entry.date).toDateString();
    activityData[date] = (activityData[date] || 0) + Math.abs(entry.pts);
  });

  if (Object.keys(activityData).length === 0) {
    container.innerHTML =
      '<div class="empty" style="padding:16px;">No activity yet. Log some honor or shame entries to populate the heatmap.</div>';
    return;
  }

  // Generate weeks
  let currentDate = new Date(startDate);
  const weeks = [];

  for (let week = 0; week < 9; week++) {
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      const dateStr = currentDate.toDateString();
      const activity = activityData[dateStr] || 0;
      let intensity = "none";
      if (activity > 0) {
        if (activity >= 20) intensity = "high";
        else if (activity >= 10) intensity = "medium";
        else intensity = "low";
      }
      weekDays.push({ date: currentDate, activity, intensity });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push(weekDays);
  }

  container.innerHTML = weeks
    .map(
      (week) =>
        `<div class="heatmap-week">
      ${week
        .map((day) => {
          const cls =
            day.intensity === "none"
              ? "heatmap-day"
              : `heatmap-day active ${day.intensity}`;
          return `<div class="${cls}" title="${day.date.toDateString()}: ${day.activity} pts"></div>`;
        })
        .join("")}
    </div>`,
    )
    .join("");
}

function renderProgressRings() {
  const container = document.getElementById("progressRings");
  container.innerHTML = `
    <div class="progress-list">
      <div class="progress-item"><span class="progress-pct">100%</span><span class="progress-label">All 5 Pray...</span></div>
      <div class="progress-item"><span class="progress-pct">100%</span><span class="progress-label">Prayed in ...</span></div>
      <div class="progress-item"><span class="progress-pct">100%</span><span class="progress-label">Missed Faj...</span></div>
      <div class="progress-item"><span class="progress-pct">100%</span><span class="progress-label">Missed a P...</span></div>
    </div>
  `;
}
function exportData() {
  const data = JSON.stringify(S, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "fortis-data.json";
  a.click();
  URL.revokeObjectURL(url);
  toast("Data exported", "pos");
}
function importData() {
  const file = document.getElementById("importFile").files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      S = { ...S, ...data };
      save();
      render();
      toast("Data imported", "pos");
    } catch (err) {
      toast("Invalid file", "neg");
    }
  };
  reader.readAsText(file);
}
function enableNotifications() {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        toast("Notifications enabled", "pos");
      } else {
        toast("Notifications denied", "neg");
      }
    });
  } else {
    toast("Notifications not supported", "neg");
  }
}

function checkForUpdate() {
  if (!("serviceWorker" in navigator)) {
    toast("Service worker not supported", "neg");
    return;
  }

  navigator.serviceWorker.getRegistration().then((reg) => {
    if (!reg) {
      toast("No service worker registered", "neg");
      return;
    }

    if (reg.waiting) {
      reg.waiting.postMessage({ type: "SKIP_WAITING" });
      toast("Updating...", "pos");
      return;
    }

    reg.update().then(() => {
      toast("Checking for updates...", "pos");
    });
  });
}

function toggleTheme() {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue("--bg");
  if (currentBg === "#0d0d0f") {
    root.style.setProperty("--bg", "#f5f5f5");
    root.style.setProperty("--surface", "#ffffff");
    root.style.setProperty("--text", "#333333");
    toast("Light theme", "pos");
  } else {
    root.style.setProperty("--bg", "#0d0d0f");
    root.style.setProperty("--surface", "#141417");
    root.style.setProperty("--text", "#e8e3d8");
    toast("Dark theme", "pos");
  }
}
function render() {
  if (isLoading) {
    showSkeletons();
  } else {
    hideSkeletons();
    calculateStreaks();
    renderScores();
    renderDeeds();
    renderTasks();
    renderLog();
    renderConfig();
  }
}

function showSkeletons() {
  // Skeletons are already in HTML, just ensure they're visible
  document
    .querySelectorAll(".skeleton")
    .forEach((el) => (el.style.display = "block"));
}

function hideSkeletons() {
  document
    .querySelectorAll(".skeleton")
    .forEach((el) => (el.style.display = "none"));
}
load();
setTimeout(() => {
  render();
  go("honos");
}, 100); // Small delay to show skeleton animation
scheduleMidnightCheck();
